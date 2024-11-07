
import React from 'react';
import '../App.css';

const Controls = ({ onSpeedChange, speed, onReset }) => (
  <div className="Controls">
    <label>Speed:</label>
    <input
      type="range"
      min="10"
      max="1000"
      value={speed}
      onChange={(e) => onSpeedChange(e.target.value)}
    />
    <button onClick={onReset}>Stop</button>
  </div>
);

export default Controls;