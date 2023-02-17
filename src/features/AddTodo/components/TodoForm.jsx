import Proptypes from 'prop-types';
import { useState } from 'react';
import './style.scss';

TodoForm.propTypes = {
  onSubmit: Proptypes.func,
};

TodoForm.defaultProps = {
  onSubmit: null,
};

function TodoForm({ onSubmit }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!onSubmit) return;

    onSubmit(value);

    setValue('');
    e.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
    </form>
  );
}

export default TodoForm;
