import React, { useState, useEffect } from 'react';
import '../assets/css/edit.css';
import { FaSave, FaTimes, FaUser, FaEnvelope } from 'react-icons/fa';

const EditUser = ({ user, onSave, onClose }) => {
    const [name, setName] = useState(user.name || '');
    const [email, setEmail] = useState(user.email || '');

    useEffect(() => {
        setName(user.name);
        setEmail(user.email);
    }, [user]);

    const handleSave = (e) => {
        e.preventDefault();
        onSave(user.id, name, email);
        onClose();
    };

    return (
        <div className="edit-user-container">
            <form onSubmit={handleSave} className="user-form">
                <h3>Edit User</h3>
                <div className="form-grp">
                    <label htmlFor="name">
                        <FaUser className="form-icon" />
                    </label>
                    <input
                        id="name"
                        placeholder="Enter Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-grp">
                    <label htmlFor="email">
                        <FaEnvelope className="form-icon" />
                    </label>
                    <input
                        id="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="button-grp">
                    <button type="submit" className="save-btn">
                        <FaSave /> Save
                    </button>
                    <button type="button" className="cancel-btn" onClick={onClose}>
                        <FaTimes /> Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditUser;
