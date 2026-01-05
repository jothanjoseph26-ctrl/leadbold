
import { GoogleGenAI } from "@google/genai";

/**
 * Performs an intelligent search across LeadBold's categories using Gemini.
 */
export const getIntelligentSearchResults = async (query: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `As an AI assistant for LeadBold (an elite leadership institution), help categorize and suggest content for the search query: "${query}".
    Available categories: Programs, Summits, Insights, Consulting.
    Provide a professional, authoritative response summarizing what we might have related to this.`,
    config: {
      temperature: 0.7,
      maxOutputTokens: 300,
    }
  });

    return response.text || "No response generated.";
};

/**
 * Generates a personalized greeting based on the user's persona.
 */
export const getPersonalizedGreeting = async (persona: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Generate a one-sentence high-level institutional greeting for a user identified as: ${persona}. 
    Tone: Quiet Power, Authoritative, Minimalist. 
    Context: LeadBold Institution.`,
    config: {
      temperature: 0.5,
      maxOutputTokens: 50,
    }
  });

  return response.text?.trim() || "Empowering the next generation of global leaders.";
};

/**
 * Generates high-quality institutional image assets.
 */
export const generateInstitutionalImage = async (prompt: string, size: '1K' | '2K' | '4K' = '1K') => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-image-preview',
    contents: {
      parts: [
        {
          text: `Professional, cinematic, high-end institutional photography for LeadBold Consulting. Style: Sophisticated, architectural, minimalist, executive. Subject: ${prompt}. Lighting: Soft natural light, high contrast, gold and navy accents.`,
        },
      ],
    },
    config: {
      imageConfig: {
        aspectRatio: "16:9",
        imageSize: size
      },
    },
  });

  if (response.candidates && response.candidates[0]?.content?.parts) {
    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
  }
  throw new Error("No image data returned from API");
};
