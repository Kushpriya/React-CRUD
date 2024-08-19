// src/App.jsx
import React from "react";
import Todo from "./components/Todo";  // Correct relative path
import User from "./components/User";  // Correct relative path
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
function App() {
    return (
        <>
            <Todo />
            <User />
            {/* <EditUser /> */}
            {/* <AddUser /> */}
        </>
    );
}

export default App;
