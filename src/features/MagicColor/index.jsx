import useMagicColor from 'hooks/useMagicColor';
import styled from 'styled-components';

const Wrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 320px;
  height: 320px;
  border-radius: 8px;
  color: #a35a81;
  font-weight: bold;
  font-size: 42px;
  text-transform: uppercase;

  cursor: not-allowed;
  transition: all 0.25s ease-out;
`;

function MagicColor() {
  const color = useMagicColor();

  return (
    <Wrap>
      <Box style={{ backgroundColor: color }}>{color}</Box>
    </Wrap>
  );
}

export default MagicColor;
