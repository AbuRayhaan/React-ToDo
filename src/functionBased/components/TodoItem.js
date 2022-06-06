import React, { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import PropTypes from 'prop-types';
import styles from './TodoItem.module.scss';

const completedStyle = {
  fontStyle: 'italic',
  color: '#595959',
  opacity: 0.4,
  textDecoration: 'line-through',
};

const TodoItem = ({
  todo, handleChangeProps, delTodoProps, setUpdate,
}) => {
  const [editing, setEditing] = useState(false);

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };

  const { completed, id, title } = todo;
  const viewMode = {};
  const editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  useEffect(() => () => {
    console.log('Cleaning up...');
  }, []);

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={completed}
          onChange={() => handleChangeProps(id)}
        />
        {/* {props.todo.title} */}
        <button type="submit" onClick={() => delTodoProps(id)}>
          <FaTrash style={{ color: 'orangered', fontSize: '16px' }} />
        </button>
        <span style={completed ? completedStyle : null}>
          {title}
        </span>
      </div>
      <input
        type="text"
        className={styles.textInput}
        style={editMode}
        value={title}
        onChange={(e) => {
          setUpdate(e.target.value, id);
        }}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    completed: PropTypes.bool,
    id: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  delTodoProps: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};

export default TodoItem;
