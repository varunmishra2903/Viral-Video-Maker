// src/app/api/publish/route.ts
import { NextResponse } from 'next/server';
import { generateMetadata } from '@/lib/generateMetadata';
import { pushToPlatform } from '@/lib/publishers';

export async function POST(req: Request) {
  const { videoUrl, script, platforms } = await req.json();

  const metadata = generateMetadata(script);

  const results = await Promise.all(
    platforms.map((platform: string) =>
      pushToPlatform(platform, videoUrl, metadata)
    )
  );

  return NextResponse.json({ status: 'success', results });
}
