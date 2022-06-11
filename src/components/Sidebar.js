
// import React from 'react'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// const Sidebar = ({ links, close }) => {
//     return (
//         <div className="sidebar " onClick={close}>
//             {links.map((link) => (
//                 <a className="sidebar-link" href="#" key={link.name}>
//                     <FontAwesomeIcon icon={link.icon} />
//                     {link.name}
//                 </a>

//             ))}
//         </div>
//     )
// }

// export default Sidebar
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, useLocation } from "react-router-dom"

export default function Sidebar({ links, close }) {
    const location = useLocation()
    return (
        <div className="sidebar" onClick={close}>
            {links.map(link => (
                <Link to={link.path} className={location.pathname === link.path ? "sidebar-link active" : "sidebar-link"} key={link.name}>
                    <FontAwesomeIcon icon={link.icon} />
                    {link.name}
                </Link>
            ))}
        </div>
    )
}