import { useState, useLayoutEffect, useRef } from 'react';

// What LayoutEffect is going to do is it's going to allow you not to have to wait for any kinda of small pause. It's going to happen immediately after the end, so synchronously after your render function ends your LayoutEffect is going to run.

// For example if you call setState inside of that effect you'll get one rerender instead of two rerenders

// This is only useful when you have something and you need to measure something that happens to the DOM but it can only be measured after it's been rendered. Everything else, just useEffect

const LayoutEffectComponent = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const el = useRef();

  useLayoutEffect(() => {
    setWidth(el.current.clientWidth);
    setHeight(el.current.clientHeight);
  });

  return (
    <div>
      <h2>textarea width: {width}px</h2>
      <h2>textarea height: {height}px</h2>
      <textarea
        onClick={() => {
          setWidth(0); // this is basically saying "force update"
        }}
        ref={el}
      />
    </div>
  );
};

export default LayoutEffectComponent;
