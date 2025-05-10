// app/api/route.ts

import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_API_KEY!, // Ensure it's set in .env.local
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const prompt = body.prompt || 'Say hi from Gemini!';

    const result = await ai.models.generateContent({
      model: 'gemini-1.5-flash-latest',
      contents: prompt,
    });

    return new Response(JSON.stringify({ text: result.text }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    console.error(error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
