import { useEffect, useRef, useState } from 'react';

const getRandomColor = (color) => {
  const colorList = ['red', 'yellow', 'blue'];

  const indexCurrent = colorList.findIndex((colors) => colors === color);
  let indexNew = indexCurrent;

  while (indexCurrent === indexNew) {
    indexNew = Math.trunc(Math.random() * colorList.length);
  }

  return colorList[indexNew];
};

function useMagicColor() {
  const [color, setColor] = useState('transparent');
  const colorRef = useRef();

  useEffect(() => {
    const colorInterval = setInterval(() => {
      const newColor = getRandomColor(colorRef.current);
      // console.log('>>> New Color: ', newColor);
      setColor(newColor);

      colorRef.current = newColor;
    }, 1000);

    return () => {
      clearInterval(colorInterval);
    };
  }, []);

  return color;
}

export default useMagicColor;
