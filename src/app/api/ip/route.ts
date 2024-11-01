import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  if (process.env.NODE_ENV === "development") {
    // Hardcoded IP for local development
    const clientIp = "39.51.106.66";
    return NextResponse.json({ ip: clientIp });
  } else if (process.env.NODE_ENV === "production") {
    try {
      // Get the first IP in the x-forwarded-for header list or use req.ip as a fallback
      const forwardedFor = req.headers.get('x-forwarded-for');
      const clientIp = forwardedFor ? forwardedFor.split(',')[0] : req.ip || 'Unknown IP';
      return NextResponse.json({ ip: clientIp });
    } catch (error) {
      // Log error to console in production
      console.error("Error retrieving client IP:", error);
      return NextResponse.json({ ip: 'Error retrieving IP' });
    }
  }
}