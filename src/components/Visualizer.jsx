
import React, { useState, useEffect } from 'react';
import Bar from './Bar';
import '../App.css';

const Visualizer = ({ speed }) => {
  const [array, setArray] = useState([]);
  const [sorting, setSorting] = useState(false);
  const [activeIndices, setActiveIndices] = useState([]);

  
  useEffect(() => {
    generateArray();
  }, []);

  
  const generateArray = () => {
    const arr = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100));
    setArray(arr);
    setSorting(false);
  };

  
  const quickSort = async (arr, low = 0, high = arr.length - 1) => {
    if (low < high) {
      const pivotIndex = await partition(arr, low, high);
      await quickSort(arr, low, pivotIndex - 1);
      await quickSort(arr, pivotIndex + 1, high);
    }
  };

 
  const partition = async (arr, low, high) => {
    const pivot = arr[high];
    let i = low;
    for (let j = low; j < high; j++) {
      if (arr[j] < pivot) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        setArray([...arr]);
        setActiveIndices([i, j]);
        await new Promise((resolve) => setTimeout(resolve, speed));
        i++;
      }
    }
    [arr[i], arr[high]] = [arr[high], arr[i]];
    setArray([...arr]);
    setActiveIndices([i, high]);
    await new Promise((resolve) => setTimeout(resolve, speed));
    return i;
  };

  const handleSort = () => {
    setSorting(true);
    quickSort([...array]);
  };

  return (
    <div className="Visualizer">
      <div className="bars">
        {array.map((value, idx) => (
          <Bar
            key={idx}
            width={100 / array.length}
            height={value}
            value={value}
            active={activeIndices.includes(idx)}
          />
        ))}
      </div>
      <button onClick={generateArray} disabled={sorting}>
        Generate New Array
      </button>
      <button onClick={handleSort} disabled={sorting}>
        Start Quick Sort
      </button>
    </div>
  );
};

export default Visualizer;