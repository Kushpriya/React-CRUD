import React from 'react';
import '../assets/css/user.css';
import { FaUser, FaEnvelope, FaEdit, FaTrash } from 'react-icons/fa';

const User = ({ id, email, name, onDelete, onEdit }) => { 

    const handleDelete = () => {
        onDelete(id);
        alert("User deleted successfully!");
    }

    const handleEdit = () => {
        onEdit(id);
    }

    return (
        <div className='user-container'>
            <div className='user-info'>
                <div className='user-title'><FaUser /> NAME</div>
                <span>{name}</span>
            </div>
            <div className='user-info'>
                <div className='user-title'><FaEnvelope /> EMAIL</div>
                <span>{email}</span>
            </div>
            <div className='user-actions'>
            <button className='edit-btn' onClick={handleEdit}><FaEdit /> edit</button>
            <button className='delete-btn' onClick={handleDelete}><FaTrash /> delete</button>
            </div>
        </div>
    );
}

export default User;
