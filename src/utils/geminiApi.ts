import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize the Google Generative AI with the API key from environment variables
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

// Get the Gemini Pro model
const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

/**
 * Generate a response from Gemini AI based on user input
 * @param userInput - The current user message
 * @returns A promise that resolves to the AI's response
 */
export async function generateGeminiResponse(userInput: string): Promise<string> {
  try {
    console.log('Sending request to Gemini API with prompt:', userInput);
    
    // Create a real estate specific prompt
    const realEstatePrompt = `You are an AI assistant for a real estate website called EstateForge. 
    Answer the following question about real estate, properties, housing market, or related topics. 
    Be helpful, concise, and informative: ${userInput}`;
    
    // Generate content directly without chat history for simplicity
    const result = await model.generateContent(realEstatePrompt);
    const response = result.response;
    const text = response.text();
    
    console.log('Received response from Gemini API:', text.substring(0, 100) + '...');
    return text;
  } catch (error) {
    console.error('Error generating response from Gemini:', error);
    throw new Error('Failed to get response from AI assistant. Please try again later.');
  }
}

/**
 * Test the Gemini API connection
 * @returns A promise that resolves to a success message if the connection works
 */
export async function testGeminiConnection(): Promise<string> {
  try {
    const result = await model.generateContent('Hello, can you respond with just the words "Connection successful"?');
    return result.response.text();
  } catch (error) {
    console.error('Error testing Gemini connection:', error);
    throw new Error(`Connection failed: ${error instanceof Error ? error.message : String(error)}`);
  }
}
