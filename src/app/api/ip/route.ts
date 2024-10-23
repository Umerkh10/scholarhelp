import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    let clientIp: string;

    if (process.env.NODE_ENV === "development") {
      clientIp = "39.51.106.66"; // Mock IP for development
    } else if (process.env.NODE_ENV === "production") {
      const forwardedFor = req.headers.get('x-forwarded-for');
      clientIp = forwardedFor ? forwardedFor.split(',')[0] : 'Unknown IP';
    } else {
      return NextResponse.json({ error: 'Invalid environment' }, { status: 400 });
    }

    return NextResponse.json({ ip: clientIp });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}