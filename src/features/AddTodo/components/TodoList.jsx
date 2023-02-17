import PropTypes from 'prop-types';
import './style.scss';

TodoList.propTypes = {
  todoList: PropTypes.array,
  onItemClick: PropTypes.func,
};

TodoList.defaultProps = {
  todoList: null,
  onItemClick: null,
};

function TodoList(props) {
  const { todoList, onItemClick } = props;

  const handleItemClick = (id) => {
    if (!onItemClick) return;
    onItemClick(id);
  };

  return (
    <ul className="todo-list">
      {todoList.map((todo) => (
        <li key={todo.id} onClick={() => handleItemClick(todo.id)}>
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
