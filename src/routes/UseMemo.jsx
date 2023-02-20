import { useEffect, useState, useMemo } from 'react';
import expensiveMathOperation from './expensiveMathOperation';

// useMemo is uesd in that you give it a function to recalculate something and then you tell it when to recalculate so in this example only recalculate when the count is different, and the only way we make count different is clicking the plus button

export default function Home() {
  const [count, setCount] = useState(35);
  const [left, setLeft] = useState(0);
  const value = useMemo(() => expensiveMathOperation(count), [count]);

  useEffect(() => {
    requestAnimationFrame(animate);
    function animate() {
      setLeft(left + 1);
    }
  }, [left]);

  return (
    <div>
      <div
        style={{ left: `${Math.sin(left * 0.05) * 100 + 100}px` }}
        className="ball"
      ></div>
      <h2>
        Count: {count} <button onClick={() => setCount(count + 1)}>+</button>
      </h2>
      <h2>Result of an expensive math computation: {value}</h2>
    </div>
  );
}
