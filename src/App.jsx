import React from 'react';
import WebsiteBuilder from './components/WebsiteBuilder';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <WebsiteBuilder />
      <footer className="mt-auto p-4">
        <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer">
          Made on ZAPT
        </a>
      </footer>
    </div>
  );
}

export default App;