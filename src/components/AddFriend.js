import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const AddFriend = () => {
    const [form, setForm] = useState({
        name: '',
        age: '',
        email: ''
    })
    const { push } = useHistory();

    const handleChange = evt => {
        setForm({ ...form, [evt.target.name]: evt.target.value })
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        const token = localStorage.getItem('token');
        axiosWithAuth()
            .post('/friends', form, {
                headers: { authorization: token }
        })
        .then(res => {
            push.apply('/friends')
        })
        .catch(err => {
            console.error(err);
        })
    }

    return (
        <div>
            <form className="addFriendForm">
                <h2>Add Friend</h2>
                <input
                    id='username'
                    onChange={handleChange}
                    name='name'
                    placeholder='Enter name'
                />
                <input
                    id='age'
                    onChange={handleChange}
                    name='age'
                    placeholder='Enter age'
                />
                <input
                    id='email'
                    onChange={onChange}
                    name='email'
                    placeholder='Enter email'
                />
            </form>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default AddFriend;
