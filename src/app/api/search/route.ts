import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  // Your search API route logic here
  return NextResponse.json({ results: [] });
}