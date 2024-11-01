import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  if (process.env.NODE_ENV === "development") {
    // Hardcoded IP for local development
    const clientIp = "39.51.106.66";
    console.log("Development mode: IP successfully retrieved:", clientIp);
    return NextResponse.json({ ip: clientIp });
  } else if (process.env.NODE_ENV === "production") {
    try {
      // Attempt to retrieve IP from x-forwarded-for or req.ip
      const forwardedFor = req.headers.get('x-forwarded-for');
      const clientIp = forwardedFor ? forwardedFor.split(',')[0] : req.ip || 'Unknown IP';
      
      // Log successful IP retrieval
      console.log("Production mode: IP successfully retrieved:", clientIp);
      return NextResponse.json({ ip: clientIp });
    } catch (error) {
      // Log any errors that occur during IP retrieval
      console.error("Error retrieving client IP:", error);
      return NextResponse.json({ ip: 'Error retrieving IP' });
    }
  }
}