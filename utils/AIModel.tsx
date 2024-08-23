import { GoogleGenerativeAI } from "@google/generative-ai";

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
console.log({ api_key: process.env.GEMINI_API_KEY });

export const AIModel = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function testRun() {
    const prompt = "Write a story about an AI and magic"

    const result = await AIModel.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
}

