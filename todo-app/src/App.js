import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import './App.css';

const App = () => {
    const [todos, setTodos] = useState([]);

    const fetchTodos = () => {
        fetch('http://localhost:5000/api/todos')
            .then(response => response.json())
            .then(data => setTodos(data.filter(todo => !todo.completed)))
            .catch(error => console.error(error));
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    const addTodo = (text) => {
        fetch('http://localhost:5000/api/todos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text })
        })
        .then(response => response.json())
        .then(data => setTodos([...todos, data]))
        .catch(error => console.error(error));
    };

    const toggleComplete = (id) => {
        fetch(`http://localhost:5000/api/todos/${id}`, {
            method: 'PUT'
        })
        .then(response => response.json())
        .then(data => {
            setTodos(todos.map(todo => todo.id === id ? data : todo));
        })
        .catch(error => console.error(error));
    };

    const deleteTodo = (id) => {
        fetch(`http://localhost:5000/api/todos/${id}`, {
            method: 'DELETE'
        })
        .then(() => {
            setTodos(todos.filter(todo => todo.id !== id));
        })
        .catch(error => console.error(error));
    };

    return (
        <div className="app-container">
            <h1>To-Do List</h1>
            <AddTodo addTodo={addTodo} />
            <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} refreshTodos={fetchTodos} />
        </div>
    );
};

export default App;