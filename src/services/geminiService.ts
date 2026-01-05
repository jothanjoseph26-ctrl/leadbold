import { GoogleGenAI } from "@google/genai";

/**
 * Performs an intelligent search across LeadBold's categories using Gemini.
 */
export const getIntelligentSearchResults = async (query: string) => {
  try {
    const apiKey = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("Gemini API key not configured");
    }
    
    const ai = new GoogleGenAI({ apiKey });
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

    return response.text;
  } catch (error) {
    console.warn("Gemini API unavailable, returning fallback search results:", error);
    return `Search results for "${query}":\n\nBased on your query, you may be interested in:\n- Leadership Intelligence Programs\n- Strategic Consulting Services\n- Executive Summits\n- Policy Research & Insights\n\nPlease contact our team for more specific information.`;
  }
};

/**
 * Generates a personalized greeting based on the user's persona.
 */
export const getPersonalizedGreeting = async (persona: string) => {
  try {
    const apiKey = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("Gemini API key not configured");
    }
    
    const ai = new GoogleGenAI({ apiKey });
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
  } catch (error) {
    console.warn("Gemini API unavailable for greeting, using fallback:", error);
    return "Welcome to LeadBold Institution. We are committed to excellence in leadership development.";
  }
};

/**
 * Generates high-quality institutional image assets.
 */
export const generateInstitutionalImage = async (prompt: string, size: '1K' | '2K' | '4K' = '1K') => {
  try {
    const apiKey = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("Gemini API key not configured");
    }
    
    const ai = new GoogleGenAI({ apiKey });
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
  } catch (error) {
    console.warn("Gemini API unavailable for image generation, using fallback:", error);
    // Return a placeholder SVG data URL
    const svg = `<svg width="800" height="450" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="450" fill="#0A1628"/>
      <rect x="0" y="0" width="800" height="450" fill="url(#grad)"/>
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#0A1628;stop-opacity:1"/>
          <stop offset="100%" style="stop-color:#C9A962;stop-opacity:0.3"/>
        </linearGradient>
      </defs>
      <text x="50%" y="50%" text-anchor="middle" fill="#D4AF37" font-family="serif" font-size="48" font-weight="bold">LEADBOLD</text>
      <text x="50%" y="65%" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="16">Institutional Excellence</text>
    </svg>`;
    return `data:image/svg+xml;base64,${btoa(svg)}`;
  }
};