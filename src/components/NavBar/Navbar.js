import React from "react"
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar({ setSearch }) {
    return <div id="navbar">
        <NavLink to='/'><h1>Random User Test</h1></NavLink>
        <input onChange={e => setSearch(e.target.value)} placeholder="Search for a member..." />
    </div>
}

export default NavBar;