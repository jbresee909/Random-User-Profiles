import React, { useEffect, useState } from "react"
import './Home.css';
import NavBar from "../NavBar/Navbar";
import UserCard from "../UserCard/UserCard";
import axios from "axios";

function Home({ setSelectedUser }) {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');

    // get users
    useEffect(() => {
        let newusers = [];
        const numUsers = 10
        for (let i = 1; i <= numUsers; i++) {
            axios.get('https://randomuser.me/api/')
                .then((res) => {
                    let user = res.data.results[0]
                    user.show = true;
                    newusers.push(user);
                    if (i === numUsers) setUsers(newusers)
                })
                .catch((e) => console.error(e))
        }
    }, [])

    useEffect(() => {
        const searchValues = search.split(' ')

        setUsers(prevState => {
            var newState = [...prevState];

            newState.forEach((user) => {
                searchValues.forEach((value) => {
                    if (user.name.first.toLowerCase().includes(value.toLowerCase())) user.show = true
                    else if (user.name.last.toLowerCase().includes(value.toLowerCase())) user.show = true
                    else user.show = false
                })
            })

            return newState;
        })

    }, [search])


    return (
        <div>
            <NavBar setSearch={setSearch} />
            {!users[0] ? <h1>Loading</h1> : null}
            <div id="user-card-container">
                {users.map((user, index) => {
                    return (
                        <UserCard key={index} user={user} setSelectedUser={setSelectedUser} />
                    )
                })}
            </div>
        </div>
    );
}

export default Home;