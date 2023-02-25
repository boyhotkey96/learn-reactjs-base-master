import useClock from 'hooks/useClock';
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
  const { timeString } = useClock();

  return (
    timeString && (
      <Div>
        <span>{timeString}</span>
      </Div>
    )
  );
}

export default Clock;
