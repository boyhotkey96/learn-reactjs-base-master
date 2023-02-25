import { useEffect, useState } from 'react';

// Fuction getNow -> time now
const getNow = (now) => {
  if (!now) return null;

  const hours = `0${now.getHours()}`.slice(-2);
  const minutes = `0${now.getMinutes()}`.slice(-2);
  const seconds = `0${now.getSeconds()}`.slice(-2);

  // return `${hours}:${minutes}:${seconds}`;
  return { hours, minutes, seconds };
};

function useClock() {
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

  return timeString;
}

export default useClock;
