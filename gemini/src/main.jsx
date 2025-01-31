import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';  // Import global styles
import App from './App';  // Import the App component
import ContextProvider from './context/Context';  // Import your ContextProvider

// Render the app inside StrictMode to catch potential issues during development
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </StrictMode>
);
