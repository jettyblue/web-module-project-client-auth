import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const initialFormValues = {
    username: '',
    password: ''
}

const Login = () => {
    const [values, setValues] = useState(initialFormValues);
    const { push } = useHistory();

    const handleChange = evt => {
        setValues({ ...values, [evt.target.name]: evt.target.value })
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        axios.post('http://localhost:9000/api/login', values)
            .then(res => {
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('username', res.data.username)
                push('/friends');
            })
            .catch(err => {
                console.error(err);
            })
    }

    return (
        <>
            <form className="loginForm">
                <h2>LOGIN</h2>
                <label>Username</label>
                <br></br>
                <input
                    id='username'
                    onChange={handleChange}
                    value={values.username}
                    name='username'
                    placeholder='Enter username'
                />
                <br></br>
                <label>Password</label>
                <br></br>
                <input
                    id='password'
                    onChange={handleChange}
                    value={values.password}
                    name='password'
                    type='password'
                    placeholder='Enter password'
                />
            </form>
            <button onClick={handleSubmit}>Submit</button>
        </>
    )
}


export default Login;
