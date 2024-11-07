
import React from 'react';
import '../App.css';

const Bar = ({ width, height, value, active }) => {
  let barClass = 'Bar';
  if (active) barClass += ' Bar_active';

  return (
    <div
      className={barClass}
      style={{
        width: `${width}%`, 
        height: `${height}%`, 
      }}
    >
      <span>{value}</span>
    </div>
  );
}

export default Bar;
