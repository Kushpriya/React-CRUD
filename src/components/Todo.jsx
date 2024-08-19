import React, { useEffect, useState } from "react";
// import "./App.css";
import AddUser from "../components/AddUser";
import User from "../components/User";
import EditUser from "../components/EditUser"; 

const Todo = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => {
        console.log(err);
      });
  };

  const onAdd = async (name, email) => {
    await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        if (res.status !== 201) {
          return;
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setUsers((users) => [...users, data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onDelete = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setUsers(
            users.filter((user) => {
              return user.id !== id;
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onEdit = (id) => {
    const user = users.find((user) => user.id === id);
    setEditingUser(user); 
  };

  const handleSave = async (id, name, email) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        name: name,
        email: email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setUsers(users.map(user => user.id === id ? data : user));
        alert("User updated successfully!"); 
    setEditingUser(null); 

      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClose = () => {
    setEditingUser(null); 
  };


  // console.log(users);
  return (
    <div className="Todo">
      <h1 align="center">TODO APP</h1>

      <br />
      <AddUser onAdd={onAdd} />
      <div>
        {users.map((user) => (
          <User
            id={user.id}
            key={user.id}
            name={user.name}
            email={user.email}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </div>
      {editingUser && (
        <EditUser
          user={editingUser}
          onSave={handleSave}
          onClose={handleClose}
        />
      )}
    </div>
  );
};
export default Todo;