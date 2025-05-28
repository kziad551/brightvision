'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function WorksPage() {
  const [allWorks, setAllWorks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [displayedProjects, setDisplayedProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4;
  const router = useRouter();

  useEffect(() => {
    const fetchWorks = async () => {
      try {
        // Use our cached API route
        const response = await fetch('/api/works', {
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
          throw new Error(data.message || 'Failed to fetch works');
        }
        
        setAllWorks(data);
        
      } catch (err) {
        console.error('Works API fetch failed:', err);
        setError(err.message);
        setAllWorks([]);
      } finally {
        setLoading(false);
      }
    };

    fetchWorks();
  }, []); // Empty dependency array - only run once

  // Update displayed projects when projects or currentPage changes
  useEffect(() => {
    const startIndex = 0;
    const endIndex = currentPage * projectsPerPage;
    setDisplayedProjects(allWorks.slice(startIndex, endIndex));
  }, [allWorks, currentPage]);

  const getCategoryName = (project) => {
    if (project._embedded && project._embedded['wp:term'] && project._embedded['wp:term'][0] && project._embedded['wp:term'][0][0]) {
      return project._embedded['wp:term'][0][0].name;
    }
    return 'غير محدد';
  };

  const handleProjectClick = (projectId) => {
    router.push(`/works/${projectId}`);
  };

  const loadMoreProjects = () => {
    setCurrentPage(prev => prev + 1);
  };

  const hasMoreProjects = currentPage * projectsPerPage < allWorks.length;

  if (loading) {
    return (
      <div className="min-h-screen bg-[#24135F] flex items-center justify-center">
        <div className="text-white text-2xl">جاري التحميل...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#24135F] flex items-center justify-center">
        <div className="text-red-500 text-2xl">خطأ في تحميل البيانات: {error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#24135F] text-white">
      <div className="pt-40 pb-16 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          
          {/* Page Title */}
          <section className="mb-16 text-center">
            <h1 className="text-[#FFB808] text-[40px] md:text-[60px] lg:text-[80px] font-[600] leading-[1.2] mb-8">
              أعمالنا
            </h1>
          </section>

          {/* Projects Grid - 2x2 layout */}
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {displayedProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="relative group cursor-pointer overflow-hidden rounded-lg"
                  onClick={() => handleProjectClick(project.id)}
                >
                  {/* Project Image */}
                  <div className="relative w-full aspect-square bg-[#24135F]">
                    <Image
                      src={project.featured_image_url || '/assets/placeholder.jpg'}
                      alt={project.title.rendered || 'مشروع'}
                      fill
                      className="object-contain transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      onError={(e) => {
                        e.target.src = '/assets/placeholder.jpg';
                      }}
                    />
                    
                    {/* Hover Overlay - Low opacity black overlay only on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end justify-center">
                      <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-6 pb-8">
                        <h3 className="text-[24px] font-[600] mb-2">
                          {project.title.rendered || 'مشروع بدون عنوان'}
                        </h3>
                        <p className="text-[18px] text-[#FFB808]">
                          {getCategoryName(project)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            {hasMoreProjects && (
              <div className="text-center">
                <button
                  onClick={loadMoreProjects}
                  className="bg-[#F94239] text-white px-12 py-4 rounded-full text-[20px] font-[600] hover:bg-[#d63529] transition-colors"
                >
                  عرض المزيد
                </button>
              </div>
            )}

            {/* Empty state */}
            {displayedProjects.length === 0 && !loading && (
              <div className="text-center py-16">
                <p className="text-white text-[24px]">لا توجد مشاريع متاحة حالياً</p>
              </div>
            )}
          </section>

        </div>
      </div>
    </div>
  );
} 