import React, { useState, useEffect } from 'react';
import axios from 'axios';
import axiosWithAuth from 'axios/index';

const FriendsList = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');

        axiosWithAuth().get('/friends')
            .then(res => {
                setFriends(res.data);
            })
            .catch(err => {
                console.error(err);
            })
    }, [])

    return (
        <div className="friendsList">
            <h2>Friends List</h2>
                {friends.map(friend => {
                    return <p>{friend.name} ~ {friend.age} ~ {friend.email}</p>
                })}
        </div>
    )
}

export default FriendsList;
