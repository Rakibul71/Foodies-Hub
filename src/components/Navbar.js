import React, { useState } from 'react'
import Sidebar from './Sidebar';
// import { Link, useLocation } from "react-router-dom"
import { Link } from "react-router-dom"

import { faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    // const location = useLocation()
    const links = [
        {
            name: "Home",
            path: "/",
            icon: faHome
        },
        {
            name: "Recipes",
            path: "/recipes",
            icon: faList
        },
        {
            name: "Settings",
            path: "/settings",
            icon: faCog
        }
    ]
    function closeSidebar() {
        setShowSidebar(false)
    }
    return (
        <>
            <div className="navbar container">
                <a href="#!" className="logo">F<span>oo</span>diesHub</a>
                <div className="nav-links">
                    {links.map(link => (
                        // <Link className={location.pathname === link.path ? "active" : ""} to={link.path} key={link.name}>{link.name}</Link>
                        <a href={link.path} key={link.name}>{link.name}</a>
                    ))}
                    {/* <a href="">Home</a>
                    <a href="">Recipes</a>
                    <a href="">Setting</a> */}
                </div>
                <div onClick={() => setShowSidebar(!showSidebar)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
            {showSidebar && <Sidebar close={closeSidebar} links={links} />}
            {/* {showSidebar && <Sidebar close={closeSidebar} />} */}
            {/* <Sidebar links={links} /> */}
        </>

    )
}

export default Navbar