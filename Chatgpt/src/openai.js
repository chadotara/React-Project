import { Configuration, OpenAIApi } from 'openai';

// Configuration for OpenAI API
const configuration = new Configuration({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY, // Load from .env file
});

const openai = new OpenAIApi(configuration);

// Function to send message to OpenAI API and get a response
export async function sendMsgToOpenai(message) {

    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: message,
      temperature: 0.7,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    return response.data.choices[0].text.trim();  // Return response text
  }
