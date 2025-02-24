import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleComplete, deleteTodo, refreshTodos }) => {
    return (
        <div>
            <br></br>
            <button onClick={refreshTodos}>Refresh List</button>
            <ul>
                {todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
