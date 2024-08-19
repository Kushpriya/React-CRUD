import React from "react";
import '../assets/css/user.css';
import { FaUser, FaEnvelope } from 'react-icons/fa';

const AddUser = ({ onAdd }) => {

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;

        if (name && email) {
            onAdd(name, email);
            e.target.name.value = "";
            e.target.email.value = "";
            alert("User added successfully!");
        } else {
            alert("Please fill in all fields.");
        }
    }

    return (
        <div className="form-container">
            <form onSubmit={handleOnSubmit} className="user-form">
                {/* <h3>Add User</h3> */}
                <div className="form-group">
                    <FaUser className="form-icon" />
                    <input placeholder="Enter Name" name="name" />
                </div>
                <div className="form-group">
                    <FaEnvelope className="form-icon" />
                    <input placeholder="Enter Email" name="email" />
                </div>
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default AddUser;
