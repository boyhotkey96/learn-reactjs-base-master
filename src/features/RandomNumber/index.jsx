import { useDispatch, useSelector } from 'react-redux';
import { addHobby, setHobby } from './action/hobbyAction';
import RandomNumberList from './components/RandomNumberList';

function RandomNumber() {
  const hobbyList = useSelector((state) => state.hobby.hobbyList);
  const activeId = useSelector((state) => state.hobby.activeId);

  const dispatch = useDispatch();

  const handleAddRandomNumberClick = () => {
    const obj = {
      title: 'Hobby',
      id: 1000 + Math.trunc(Math.random() * 9000),
    };
    dispatch(addHobby(obj));
  };

  const handleHobbyClick = (id) => {
    dispatch(setHobby(id));
  };

  return (
    <div>
      <h2>Using Redux</h2>
      <button onClick={handleAddRandomNumberClick}>Add Random Number</button>
      <RandomNumberList hobbyList={hobbyList} activeId={activeId} onHobbyClick={handleHobbyClick} />
    </div>
  );
}

export default RandomNumber;
