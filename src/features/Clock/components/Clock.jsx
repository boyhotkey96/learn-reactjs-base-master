import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Div = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: not-allowed;
  & span {
    display: inline-block;
    padding: 30px;
    text-align: center;
    min-width: 340px;
    border: 2px solid deeppink;
    border-radius: 10px;
    color: deeppink;
    font-size: 62px;
  }
`;

// Fuction getNow -> time now
const getNow = (now) => {
  if (!now) return null;

  const hours = `0${now.getHours()}`.slice(-2);
  const minutes = `0${now.getMinutes()}`.slice(-2);
  const seconds = `0${now.getSeconds()}`.slice(-2);

  return `${hours}:${minutes}:${seconds}`;
};

function Clock() {
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const timeId = setInterval(() => {
      const now = new Date();
      const time = getNow(now);
      setTimeString(time);
    }, 1000);

    return () => {
      clearInterval(timeId);
    };
  }, []);

  return (
    timeString && (
      <Div>
        <span>{timeString}</span>
      </Div>
    )
  );
}

export default Clock;
