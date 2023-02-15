import classNames from 'classnames';
import PropTypes from 'prop-types';
import './style.scss';

TodoList.propTypes = {
  todoList: PropTypes.array,
  onClickItem: PropTypes.func,
};

TodoList.defaultProps = {
  todoList: null,
};

function TodoList(props) {
  const { todoList, onClickItem } = props;
  // console.log(todoList)

  const handleClickItem = (todo) => {
    if (!onClickItem) return;

    onClickItem(todo, todo.id);
  };

  return (
    <ul className="todo-list">
      {todoList.map((todo) => (
        <li
          key={todo.id}
          className={classNames('todo-item', { completed: todo.status === 'completed' })}
          onClick={() => handleClickItem(todo)}
        >
          {todo.name}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
