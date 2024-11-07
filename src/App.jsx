
import React, { useState } from 'react';
import Visualizer from './components/Visualizer';
import Controls from './components/Controls';
import './App.css';

function App() {
  const [speed, setSpeed] = useState(100);

  const handleSpeedChange = (newSpeed) => setSpeed(newSpeed);
  const handleStop = () => window.location.reload();

  return (
    <div className="App">
      <h1>Quick Sort Visualizer</h1>
      <Controls onSpeedChange={handleSpeedChange} speed={speed} onReset={handleStop} />
      <Visualizer speed={speed} />
    </div>
  );
}

export default App;
