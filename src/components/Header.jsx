import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {

    let activeStyle = {
        color: "#161616",
        textDecoration: "underline",
        fotWeight: "bold"
    }

    return (
        <header>
            <Link className="site-logo" to="/">#VanWorld</Link>
            <nav>
                <NavLink
                    to="/about"
                    style={({ isActive }) => isActive ? activeStyle : null}
                >
                    About
                </NavLink>
                <NavLink
                    to='/vans'
                    style={({ isActive }) => isActive ? activeStyle : null}
                >
                    Vans
                </NavLink>

            </nav>
        </header>
    )
}
