import { ChatMessage } from '../types';

// NOTE: In a production environment, never expose API keys on the client side.
// This should be proxied through a backend. 
// For this demo, we use the provided key but assume it might be in an env var.
const API_KEY = process.env.ALPHAFLOW_API_KEY || 'sk-098bd774f7974d7ba5da0aedcf0f4246';
const API_URL = 'https://api.deepseek.com/chat/completions';

export const sendDeepSeekMessage = async (
  messages: ChatMessage[],
  systemInstruction: string
): Promise<string> => {
  try {
    const conversationHistory = messages.map(msg => ({
      role: msg.role,
      content: msg.content
    }));

    // Prepend system instruction
    const payloadMessages = [
      { role: 'system', content: systemInstruction },
      ...conversationHistory
    ];

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: payloadMessages,
        stream: false,
        temperature: 0.7, // Balanced creativity and precision for financial analysis
        max_tokens: 1024
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(`DeepSeek API Error: ${response.status} - ${JSON.stringify(errorData)}`);
    }

    const data = await response.json();
    return data.choices[0]?.message?.content || "No analysis generated.";

  } catch (error) {
    console.error("DeepSeek Service Error:", error);
    return "Error: Unable to connect to AlphaFlow Intelligence Core (DeepSeek). Please check your connection or API quota.";
  }
};