import { useEffect, useState, useCallback } from 'react';
import UseRefComponent from './UseRef';

// You can memoize a callback and then pass that into the function. Using useCallback and useMemo together you'll get this ability to not rerender the component every single time

// Callback is to memoize some callback so that you're giving the exact same function in every single

// Only useMemo and useCallback for optimizations problems(like having jank in your UI) for specific issues

export default function Home() {
  const [left, setLeft] = useState(0);
  useEffect(() => {
    requestAnimationFrame(animate);
    function animate() {
      setLeft(left + 1);
    }
  }, [left]);

  const aUsefulCallback = () => {};
  const memoizedCallback = useCallback(aUsefulCallback, []);

  return (
    <div>
      <div
        style={{ left: `${Math.sin(left * 0.05) * 100 + 100}px` }}
        className="ball"
      ></div>
      <UseRefComponent cb={memoizedCallback} />
    </div>
  );
}
