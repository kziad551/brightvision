import { NextResponse } from 'next/server';

// Cache the response for 5 minutes (300 seconds)
export const revalidate = 300;

async function fetchAllProjects() {
  let allProjects = [];
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    try {
      const response = await fetch(`https://admin.thebrightvision.qa/wp-json/wp/v2/our_work?_embed&per_page=100&page=${page}`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        // Cache for 5 minutes on the server side
        next: { revalidate: 300 }
      });

      if (!response.ok) {
        if (response.status === 400) {
          // No more pages
          hasMore = false;
          break;
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const textResponse = await response.text();
      
      // Check if response starts with HTML (error page)
      if (textResponse.trim().startsWith('<') || textResponse.includes('<br />')) {
        throw new Error('API returned HTML instead of JSON');
      }

      // Try to parse JSON
      const data = JSON.parse(textResponse);

      if (!Array.isArray(data)) {
        throw new Error('API did not return an array');
      }

      if (data.length === 0) {
        hasMore = false;
      } else {
        allProjects = allProjects.concat(data);
        page++;
      }

    } catch (error) {
      if (error.message.includes('400')) {
        hasMore = false;
        break;
      }
      throw error;
    }
  }

  return allProjects;
}

export async function GET() {
  try {
    // Fetch all projects using pagination
    const allProjects = await fetchAllProjects();
    
    console.log(`Fetched ${allProjects.length} projects from WordPress API`);

    // Sort projects by project_meta line number - handle both "line" and "Line" formats
    const sortedProjects = allProjects.sort((a, b) => {
      const lineA = parseInt((a.project_meta || 'line 1').toLowerCase().replace('line ', ''));
      const lineB = parseInt((b.project_meta || 'line 1').toLowerCase().replace('line ', ''));
      return lineA - lineB;
    });
    
    return NextResponse.json(sortedProjects, {
      headers: {
        // Cache in browser for 2 minutes, stale-while-revalidate for 5 minutes
        'Cache-Control': 'public, s-maxage=120, stale-while-revalidate=300',
      },
    });
    
  } catch (error) {
    console.error('API fetch failed:', error);
    return NextResponse.json(
      { error: 'Failed to fetch works data', message: error.message },
      { status: 500 }
    );
  }
} 