import { NextResponse } from 'next/server';

// Cache the response for 5 minutes (300 seconds)
export const revalidate = 300;

export async function GET() {
  try {
    const response = await fetch('https://admin.thebrightvision.qa/wp-json/wp/v2/our_work?_embed', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      // Cache for 5 minutes on the server side
      next: { revalidate: 300 }
    });
    
    if (!response.ok) {
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

    // Sort projects by project_meta line number
    const sortedProjects = data.sort((a, b) => {
      const lineA = parseInt((a.project_meta || 'line 1').replace('line ', ''));
      const lineB = parseInt((b.project_meta || 'line 1').replace('line ', ''));
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