import React from 'react';
import Sidebar from './components/Sidebar/Sidebar'; // Corrected the import path
import Main from './components/Main/Main';         // Corrected the import path
import './App.css';  // Ensure your global styles are imported

const App = () => {
  return (
  <>
      <Sidebar />
      <Main />
    </>
  );
};

export default App;
