import React from 'react';

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
    return (
        <li>
            <input 
                type="checkbox" 
                checked={todo.completed} 
                onChange={() => toggleComplete(todo.id)} 
            />
            <span
                style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}
            >
                {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
    );
};

export default TodoItem;