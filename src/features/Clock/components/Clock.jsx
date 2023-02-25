import useClock from 'hooks/useClock';
import { useEffect, useRef, useState } from 'react';
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
  & p {
    display: inline-block;
    text-align: center;
    width: 350px;
    padding: 20px;
    border: 2px solid deeppink;
    border-radius: 10px;
    color: deeppink;
    font-size: 62px;
  }
`;

function Clock() {
  const timeString = useClock();
  const { hours, minutes, seconds } = timeString;

  const [status, setStatus] = useState('visible');

  const statusRef = useRef();

  useEffect(() => {
    const statusInterval = setInterval(() => {
      setStatus(status === 'visible' ? 'hidden' : 'visible');
    }, 750);

    return () => {
      clearInterval(statusInterval);
    };
  }, [status]);

  return (
    timeString && (
      <Div>
        <p>
          {hours}
          <span ref={statusRef} style={{ visibility: status }}>
            :
          </span>
          {minutes}
          <span ref={statusRef} style={{ visibility: status }}>
            :
          </span>
          {seconds}
        </p>
      </Div>
    )
  );
}

export default Clock;
