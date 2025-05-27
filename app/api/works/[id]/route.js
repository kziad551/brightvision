import { NextResponse } from 'next/server';

// Cache the response for 10 minutes (600 seconds)
export const revalidate = 600;

export async function GET(request, { params }) {
  const { id } = params;
  
  try {
    const response = await fetch(`https://admin.thebrightvision.qa/wp-json/wp/v2/our_work/${id}?_embed`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      // Cache for 10 minutes on the server side
      next: { revalidate: 600 }
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
    
    return NextResponse.json(data, {
      headers: {
        // Cache in browser for 5 minutes, stale-while-revalidate for 10 minutes
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
      },
    });
    
  } catch (error) {
    console.error('Single project API fetch failed:', error);
    return NextResponse.json(
      { error: 'Failed to fetch project data', message: error.message },
      { status: 500 }
    );
  }
} 