import React from "react"
import { NavLink } from "react-router-dom";
import "./UserCard.css";

function UserCard({ user, setSelectedUser }) {
    return (
        <NavLink to='/profile' onClick={() => { setSelectedUser(user) }}>
            <div className="user-card" style={user.show ? { display: '' } : { display: 'none' }} >
                <img src={user.picture.medium} alt={user.name.first} />
                <p><small>Hi, my name is</small></p>
                <h4>{user.name.first} {user.name.last}</h4>
                <p>age: {user.dob.age}</p>
            </div>
        </NavLink>
    )
}

export default UserCard;