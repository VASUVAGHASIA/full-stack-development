import React, { useState } from 'react';
import Sidebar from './components/Sidebar';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="app">
      <button className="toggle-btn" onClick={toggleSidebar}>☰</button>
      <Sidebar isOpen={isOpen} />
      <div className="main-content">
        <h1>Welcome to My Website</h1>
        <p>This is the main content of the webpage.</p>
      </div>
    </div>
  );
}

export default App;
