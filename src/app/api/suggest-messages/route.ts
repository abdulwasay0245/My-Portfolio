import { NextRequest } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: "",
});

export async function POST(req: NextRequest) {
  try {
    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant.",
        },
        {
          role: "user",
          content: "Give a short positive comment suggestion.",
        },
      ],
      model: "llama-3-8b-8192", // or "llama-3-70b-8192" if available
      temperature: 0.7,
    });

    const message = completion.choices[0]?.message?.content ?? "No response";

    return new Response(JSON.stringify({ suggestion: message }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    console.error("Groq API call failed:", JSON.stringify(err, null, 2));
;
    return new Response(
      JSON.stringify({ error: "Failed to generate suggestion." }),
      { status: 500 }
    );
  }
}
