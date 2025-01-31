import { createContext, useState } from 'react';
import run from '../config/gemini';  // Ensure this is the correct import path

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState(""); // Tracks the most recent prompt
  const [prePrompt, setPrePrompt] = useState([]);  // Stores the history of prompts
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  // Function to simulate typing delay effect
  const delayPara = (index, nextWord) => {
    setTimeout(() => {
      setResultData((prev) => prev + nextWord);
    }, 75 * index);
  }

  // New chat reset function
  const newChat = () => {
    setLoading(false);
    setShowResult(false);
    setResultData(""); // Reset the result data when starting a new chat
  }

  // Function to handle prompt submission and response fetching
  const onSent = async (prompt) => {
    setResultData("");  
    setLoading(true);
    setShowResult(true);

    // Run the prompt using the external API (e.g., Gemini API)
    let response;
    if (prompt) {
      // If prompt is passed explicitly
      response = await run(prompt);
      setRecentPrompt(prompt); // Update recent prompt
      setPrePrompt((prev) => [...prev, prompt]);  // Update history with new prompt
    } else {
      // If prompt is empty, fall back to input value
      response = await run(input);
      setPrePrompt((prev) => [...prev, input]);  // Update history with input as prompt
      setRecentPrompt(input); // Set input as recent prompt
    }

    // Process response and format it (you can adjust this to suit the structure of the response)
    let responseArray = response.split("**");
    let newResponse = "";
    for (let i = 0; i < responseArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newResponse += responseArray[i];
      } else {
        newResponse += "<b>" + responseArray[i] + "</b>"; // Bold alternating sections
      }
    }

    // Handle line breaks and spaces
    let newResponse2 = newResponse.split("*").join("</br>");
    let newResponseArray = newResponse2.split(" ");
    
    for (let i = 0; i < newResponseArray.length; i++) {
      const nextWord = newResponseArray[i];
      delayPara(i, nextWord + " ");
    }

    // Reset loading state and clear input after response
    setLoading(false);
    setInput("");
  }

  const contextValue = {
    prePrompt,
    onSent,
    setPrePrompt,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    newChat
  };

  return <Context.Provider value={contextValue}>{props.children}</Context.Provider>;
};

export default ContextProvider;
