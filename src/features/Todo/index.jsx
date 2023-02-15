import { useState } from 'react';
import TodoList from './components/TodoList';
import './style.scss';

TodoFeatures.propTypes = {
  // initTodoList: PropTypes.array,
};

TodoFeatures.defaultProps = {
  initTodoList: null,
};

function TodoFeatures(props) {
  const initTodoList = [
    { id: 1, name: 'eat', status: 'completed' },
    { id: 2, name: 'sleep', status: 'new' },
    { id: 3, name: 'code', status: 'new' },
  ];

  const [todoList, setTodoList] = useState(initTodoList);
  const [filterdStatus, setFilteredStatus] = useState('all');

  const onClickItem = (todo, id) => {
    console.log(todo, id);
    const newTodoList = [...todoList];

    for (let i in newTodoList) {
      if (newTodoList[i].id === id) {
        /* todo = {
          ...todo,
          status: todo.status === 'completed' ? 'new' : 'completed',
        };
        newTodoList[i] = todo */
        newTodoList[i] = {
          ...todo,
          status: todo.status === 'completed' ? 'new' : 'completed',
        };
      }
    }

    setTodoList(newTodoList);
  };

  const filteredTodoList = todoList.filter((todo) => filterdStatus === 'all' || filterdStatus === todo.status);

  const handleShowAllClick = () => {
    setFilteredStatus('all');
  };

  const handleShowCompletedClick = () => {
    setFilteredStatus('completed');
  };

  const handleShowNewClick = () => {
    setFilteredStatus('new');
  };

  return (
    <>
      <h2>To-do-list:</h2>
      <TodoList todoList={filteredTodoList} onClickItem={onClickItem} />
      <button className="btn btn-filter" onClick={handleShowAllClick}>
        Show all
      </button>
      <button className="btn btn-filter" onClick={handleShowCompletedClick}>
        Show completed
      </button>
      <button className="btn btn-filter" onClick={handleShowNewClick}>
        Show new
      </button>
    </>
  );
}

export default TodoFeatures;
