import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './counterSlice';

function Counter() {
  const counter = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleIncrementClick = () => {
    dispatch(increment(10));
  };

  const handleDecrementClick = () => {
    dispatch(decrement());
  };

  return (
    <>
      <h2>{counter}</h2>
      <div>
        <button onClick={handleIncrementClick}>Increment</button>
        <button onClick={handleDecrementClick}>Decrement</button>
      </div>
    </>
  );
}

export default Counter;
