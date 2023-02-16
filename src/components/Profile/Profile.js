import React from "react";
import "./Profile.css"
import NavBar from "../NavBar/Navbar";

function Profile({ user }) {
    const birthDate = new Date(user.dob.date);

    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    return (
        <div>
            <NavBar />
            <div className="profile">
                <img src={user.picture.large} alt={user.name.first} />
                <h1>{user.name.first} {user.name.last}</h1>
                <div className="demographics">
                    <p><b>Address:</b> {user.location.street.number} {user.location.street.name} {user.location.city},{user.location.state} {user.location.postcode}</p>
                    <p><b>Email:</b> {user.email}</p>
                    <p><b>Birthday:</b> {birthDate.toLocaleDateString('en-us', options)}</p>
                    <p><b>Phone:</b> {user.phone}</p>
                </div>
            </div>
        </div>
    )
}


export default Profile;