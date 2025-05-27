import { useState, useEffect } from 'react';

// Simple in-memory cache
const cache = new Map();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export function useWorks(filterLines = null) {
  const [works, setWorks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    
    const fetchWorks = async () => {
      const cacheKey = 'all-works';
      const now = Date.now();
      
      // Check cache first
      const cached = cache.get(cacheKey);
      if (cached && (now - cached.timestamp) < CACHE_DURATION) {
        console.log('Using cached data');
        if (isMounted) {
          let filteredData = cached.data;
          
          if (filterLines && Array.isArray(filterLines)) {
            filteredData = cached.data.filter(project => {
              const lineNumber = parseInt((project.project_meta || 'line 1').replace('line ', ''));
              return filterLines.includes(lineNumber);
            });
          }
          
          setWorks(filteredData);
          setLoading(false);
        }
        return;
      }

      try {
        if (isMounted) {
          setLoading(true);
          setError(null);
        }
        
        // Use our cached API route instead of direct WordPress API
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
        
        if (isMounted) {
          // Cache the response
          cache.set(cacheKey, {
            data: data,
            timestamp: now
          });
          
          // Filter if needed
          let filteredData = data;
          if (filterLines && Array.isArray(filterLines)) {
            filteredData = data.filter(project => {
              const lineNumber = parseInt((project.project_meta || 'line 1').replace('line ', ''));
              return filterLines.includes(lineNumber);
            });
          }
          
          setWorks(filteredData);
        }
        
      } catch (err) {
        console.error('Works fetch failed:', err);
        if (isMounted) {
          setError(err.message);
          setWorks([]);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchWorks();
    
    return () => {
      isMounted = false;
    };
  }, []); // Empty dependency array - only run once

  // Separate effect for filtering when filterLines changes
  useEffect(() => {
    const cached = cache.get('all-works');
    if (cached && (Date.now() - cached.timestamp) < CACHE_DURATION) {
      let filteredData = cached.data;
      
      if (filterLines && Array.isArray(filterLines)) {
        filteredData = cached.data.filter(project => {
          const lineNumber = parseInt((project.project_meta || 'line 1').replace('line ', ''));
          return filterLines.includes(lineNumber);
        });
      }
      
      setWorks(filteredData);
    }
  }, [filterLines]);

  return { works, loading, error };
} 