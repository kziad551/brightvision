'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';

export default function SingleProjectPage() {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const params = useParams();
  const router = useRouter();
  const projectId = params.id;

  useEffect(() => {
    const fetchProject = async () => {
      try {
        // Use our cached API route instead of direct WordPress API
        const response = await fetch(`/api/works/${projectId}`, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.error) {
          throw new Error(data.message || 'Failed to fetch project');
        }
        
        setProject(data);
        
      } catch (err) {
        console.error('API fetch failed:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (projectId) {
      fetchProject();
    }
  }, [projectId]);

  const getGalleryImages = () => {
    if (!project) return [];
    
    // Check for images in the main images field
    if (project.images && Array.isArray(project.images)) {
      return project.images;
    }
    
    // Check for images_data field as fallback
    if (project.images_data && Array.isArray(project.images_data)) {
      return project.images_data;
    }
    
    return [];
  };

  const handleBackClick = () => {
    router.push('/works');
  };

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    const galleryImages = getGalleryImages();
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    const galleryImages = getGalleryImages();
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!lightboxOpen) return;
      
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [lightboxOpen]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#24135F] flex items-center justify-center">
        <div className="text-white text-2xl">جاري التحميل...</div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen bg-[#24135F] flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-2xl mb-4">
            {error || 'لم يتم العثور على المشروع'}
          </div>
          <button
            onClick={handleBackClick}
            className="bg-[#F94239] text-white px-8 py-3 rounded-full text-[18px] font-[500] hover:bg-[#d63529] transition-colors"
          >
            العودة للأعمال
          </button>
        </div>
      </div>
    );
  }

  const galleryImages = getGalleryImages();

  return (
    <div className="min-h-screen bg-[#24135F] text-white">
      <div className="pt-40 pb-16 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          
          {/* Back Button */}
          <div className="mb-8">
            <button
              onClick={handleBackClick}
              className="flex items-center text-white hover:text-[#FFB808] transition-colors text-[18px]"
            >
              <span className="ml-2">←</span>
              العودة للأعمال
            </button>
          </div>

          {/* Project Title */}
          <section className="mb-16 text-center">
            <h1 className="text-[#FFB808] text-[40px] md:text-[60px] lg:text-[80px] font-[600] leading-[1.2] mb-8">
              {project.title?.rendered || 'مشروع بدون عنوان'}
            </h1>
          </section>

          {/* Gallery Images */}
          <section>
            {galleryImages.length > 0 ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                {galleryImages.map((image, index) => (
                  <div
                    key={image.id || image.ID || index}
                    className="relative group cursor-pointer overflow-hidden rounded-lg"
                    onClick={() => openLightbox(index)}
                  >
                    <div className="relative w-full aspect-square bg-[#24135F]">
                      <Image
                        src={image.url || image.source_url || '/assets/placeholder.jpg'}
                        alt={image.alt || image.title || `صورة ${index + 1}`}
                        fill
                        className="object-contain transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 1024px) 50vw, 33vw"
                        onError={(e) => {
                          e.target.src = '/assets/placeholder.jpg';
                        }}
                      />
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                        <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <svg className="w-8 h-8 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-white text-[18px] md:text-[24px]">لا توجد صور متاحة لهذا المشروع</p>
              </div>
            )}
          </section>

        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && galleryImages.length > 0 && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-[#FFB808] transition-colors z-10"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous Button */}
          {galleryImages.length > 1 && (
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-[#FFB808] transition-colors z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Next Button */}
          {galleryImages.length > 1 && (
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-[#FFB808] transition-colors z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Main Image */}
          <div className="relative max-w-[90vw] max-h-[90vh] w-full h-full flex items-center justify-center">
            <Image
              src={galleryImages[currentImageIndex]?.url || galleryImages[currentImageIndex]?.source_url || '/assets/placeholder.jpg'}
              alt={galleryImages[currentImageIndex]?.alt || galleryImages[currentImageIndex]?.title || `صورة ${currentImageIndex + 1}`}
              fill
              className="object-contain"
              sizes="90vw"
              onError={(e) => {
                e.target.src = '/assets/placeholder.jpg';
              }}
            />
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-[18px]">
            {currentImageIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </div>
  );
} 