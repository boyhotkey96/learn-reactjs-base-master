import { useState } from 'react';
import './style.scss';

let count = null;
const getRandomColor = (arrayColorList) => {
  let randomIndex;

  do {
    randomIndex = Math.trunc(Math.random() * arrayColorList.length);
    console.log(`randomIndex: ${randomIndex} -- count: ${count}`);
  } while (randomIndex === count);
  count = randomIndex;

  const randomColor = arrayColorList[randomIndex];
  console.log('>>> randomColor: ', randomColor);

  return randomColor;
};

function ColorBox() {
  const nameStorage = 'box-color';
  const initColorList = ['red', 'black', 'green', 'deeppink', 'orange'];
  const [color, setColor] = useState(() => {
    return localStorage.getItem(nameStorage) || 'blue';
  });

  const handleColorBoxClick = () => {
    const newColor = getRandomColor(initColorList);
    setColor(newColor);
    localStorage.setItem(nameStorage, newColor);
  };

  return <div className="box-color" style={{ backgroundColor: color }} onClick={handleColorBoxClick}></div>;
}

export default ColorBox;
