import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from '../types';

export const sendChatMessage = async (
  messages: ChatMessage[],
  systemInstruction: string
): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Filter out system messages from history as they are passed via config
    // Map roles to Gemini format ('user' -> 'user', 'assistant' -> 'model')
    const history = messages.slice(0, -1)
      .filter(msg => msg.role !== 'system')
      .map(msg => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.content }],
      }));

    const lastMessage = messages[messages.length - 1];

    const chat = ai.chats.create({
      model: 'gemini-3-pro-preview', // Complex Text Tasks
      config: {
        systemInstruction: systemInstruction,
      },
      history: history,
    });

    const response = await chat.sendMessage({ message: lastMessage.content });
    return response.text || "No analysis generated.";

  } catch (error) {
    console.error("Gemini Service Error:", error);
    return "Error: Unable to connect to AlphaFlow Intelligence Core (Gemini). Please check your connection or API quota.";
  }
};