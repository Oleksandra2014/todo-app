# Simple To-Do Application

This project is a simple To-Do application built using React for the front-end and Node.js with Express for the back-end. The application allows users to add, complete (put a tick at the checkbox), delete, and refresh to-do items (provide a list of do-to items, that were not ticked/completed yet).

## Features
- Add new to-do items
- Mark to-do items as completed (checkbox)
- Delete to-do items
- View and refresh the to-do list 
- Responsive design

## Structure
- SIMPLE
    - todo-api (backend)
        - node_modules
        - package-lock.json
        - package.json
        - server.js
    - todo-app (frontend)
        - node modules
        - src
            - components
                - AddTodo.js
                - TodoItem.js
                - TodoList.js
            - App.css
            - App.js
        - README.md

---
## Getting started

### 1. Clone the repository
```terminal
git clone (https://github.com/Oleksandra2014/todo-app)
cd simple
```

### 2. Set up the backend
Navigate to the backend directory (todo-api) and install dependencies:
```terminal
cd todo-api
npm install
```
Start the Node.js server:
```terminal
npx nodemon server.js
```
The server will run at `http://localhost:5000`.

### 3. Set up the frontend
Navigate to the frontend directory (todo-app) in the separate terminal:
```terminal
cd todo-app
npm install
```
Start the React application:
```terminal
npm start
```
The front-end will run at `http://localhost:3000`.

---
## API Endpoints
### Base URL: `http://localhost:5000`

   Method -   Endpoint          -     Description 
1. GET    - `/api/todos`        - Get all to-do items 
2. POST   - `/api/todos`        - Add a new to-do item 
3. PUT    - `/api/todos/:id`    - Mark a to-do item as completed 
4. DELETE - `/api/todos/:id`    - Delete a to-do item 

---

## Styling  

The project has additional file for styling: App.css, to create more attractive and user-friendly web browser interface.

## Conclusion

This Simple To-Do Application serves as a foundational project for understanding full-stack development with React and Node.js. It demonstrates how to handle user interactions, manage state, make API calls, and implement a basic backend. 

