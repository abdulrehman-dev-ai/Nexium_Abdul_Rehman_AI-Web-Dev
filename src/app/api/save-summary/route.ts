import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { originalText, aiSummary, urduTranslation } = body;

    if (!originalText || !aiSummary || !urduTranslation) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db('nexium-assignment');
    const collection = db.collection('summaries');

    const result = await collection.insertOne({
      originalText,
      aiSummary,
      urduTranslation,
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true, id: result.insertedId });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
