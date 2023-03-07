import { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import styles from './Todo.module.scss';

function TodoFeatures() {
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

  const handleTodoFormSubmit = (values) => {
    // console.log(values);
    const newValues = {
      id: Math.random(),
      name: values.title,
      status: 'new',
    };

    const newTodoList = [...todoList, newValues];
    setTodoList(newTodoList);
  };

  return (
    <>
      <h2>React Hook Form</h2>
      <TodoForm onSubmit={handleTodoFormSubmit} />

      <h2 className={styles.h2}>To-do-list:</h2>
      <TodoList todoList={filteredTodoList} onClickItem={onClickItem} />
      <button className={styles.btn} onClick={handleShowAllClick}>
        Show all
      </button>
      <button className={styles.btn} onClick={handleShowCompletedClick}>
        Show completed
      </button>
      <button className={styles.btn} onClick={handleShowNewClick}>
        Show new
      </button>
    </>
  );
}

export default TodoFeatures;
