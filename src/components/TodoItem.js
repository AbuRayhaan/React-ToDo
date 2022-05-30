import React from 'react';
import styles from './TodoItem.module.scss'

function TodoItem(props) {
    return <li className={styles.item}>
        <input 
        type="checkbox"
        className={styles.checkbox}
        checked={props.todo.completed}
        onChange = {() => props.handleChangeProps(props.todo.id)}
        />
        {props.todo.title}
        <button onClick={() => props.delTodoProps(props.todo.id)}>
            Delete
        </button>
    </li>
}

export default TodoItem;