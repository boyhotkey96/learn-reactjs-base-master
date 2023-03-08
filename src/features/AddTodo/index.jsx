import { useState } from 'react';
import styled from 'styled-components';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const H2 = styled.h2`
  color: deeppink;
`;

function AddTodo() {
  const initTodoList = [
    { id: 1, title: 'Nắng Ấm Xa Dần' },
    { id: 2, title: 'Em Của Ngày Hôm Qua' },
    { id: 3, title: 'Cơn Mưa Ngang Qua' },
  ];

  const [todoList, setTodoList] = useState(() => {
    return JSON.parse(localStorage.getItem('add-todo')) || initTodoList;
  });

  const handleItemRemove = (id) => {
    // console.log('>>> ID: ', id)
    const newTodoList = [...todoList];
    const indexTodo = newTodoList.findIndex((todo) => todo.id === id);
    newTodoList.splice(indexTodo, 1);

    setTodoList(newTodoList);
    localStorage.setItem('add-todo', JSON.stringify(newTodoList));
  };

  const handleSubmit = (value) => {
    console.log(value);
    const newTodoList = [...todoList];
    const formValues = {
      id: Math.random(),
      title: value.title,
    };

    newTodoList.push(formValues);
    setTodoList(newTodoList);

    localStorage.setItem('add-todo', JSON.stringify(newTodoList));
  };

  return (
    <div>
      <H2>Hook - Todo List</H2>
      <TodoForm onSubmit={handleSubmit} />
      <TodoList todoList={todoList} onItemClick={handleItemRemove} />
    </div>
  );
}

export default AddTodo;
