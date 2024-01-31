import React, { useState } from 'react';
import './App.css';

function App() {
  const [isButtonPressed, setButtonPressed] = useState(false);

  const handleMouseDown = () => {
    setButtonPressed(true);
  };

  const handleMouseUp = () => {
    setButtonPressed(false);
  };

  const pageBackgroundColor = isButtonPressed ? 'white' : 'black';

  return (
    <div className="App" style={{ backgroundColor: pageBackgroundColor }}>
      <button 
        className='button'
        onMouseDown={handleMouseDown} 
        onMouseUp={handleMouseUp} 
        onMouseLeave={handleMouseUp}
      >
        Drück mich
      </button>
    </div>
  );
}

export default App;
