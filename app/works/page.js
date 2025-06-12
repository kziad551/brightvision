'use client';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function WorksPage() {
  const [allWorks, setAllWorks] = useState([]);
  const [displayedProjects, setDisplayedProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectsPerLoad = 4;
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
        
        // The API already sorts by line number (Line 1, Line 2, etc.)
        setAllWorks(data);
        
        // Load first 4 projects
        const initialProjects = data.slice(0, projectsPerLoad);
        setDisplayedProjects(initialProjects);
        setCurrentIndex(projectsPerLoad);
        setHasMore(data.length > projectsPerLoad);
        
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

  const loadMoreProjects = useCallback(() => {
    if (loadingMore || !hasMore) return;
    
    setLoadingMore(true);
    
    // Simulate a small delay for better UX
    setTimeout(() => {
      const nextIndex = currentIndex + projectsPerLoad;
      const newProjects = allWorks.slice(currentIndex, nextIndex);
      
      setDisplayedProjects(prev => [...prev, ...newProjects]);
      setCurrentIndex(nextIndex);
      setHasMore(nextIndex < allWorks.length);
      setLoadingMore(false);
    }, 300);
  }, [currentIndex, allWorks, loadingMore, hasMore]);

  useEffect(() => {
    const handleScroll = () => {
      if (loading || loadingMore || !hasMore) return;
      
      // Check if user has scrolled to bottom (with 200px threshold)
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      if (scrollTop + windowHeight >= documentHeight - 200) {
        loadMoreProjects();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadMoreProjects, loading, loadingMore, hasMore]);

  const getCategoryName = (project) => {
    if (project._embedded && project._embedded['wp:term'] && project._embedded['wp:term'][0] && project._embedded['wp:term'][0][0]) {
      return project._embedded['wp:term'][0][0].name;
    }
    return 'غير محدد';
  };

  const handleProjectClick = (projectId) => {
    router.push(`/works/${projectId}`);
  };

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

          {/* Projects Grid - 2x2 layout with infinite scroll */}
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

            {/* Loading indicator for more projects */}
            {loadingMore && (
              <div className="text-center py-8">
                <div className="text-white text-[20px]">جاري تحميل المزيد...</div>
              </div>
            )}

            {/* End of projects indicator */}
            {!hasMore && displayedProjects.length > 0 && (
              <div className="text-center py-8">
                <div className="text-[#FFB808] text-[20px]">تم عرض جميع المشاريع</div>
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
