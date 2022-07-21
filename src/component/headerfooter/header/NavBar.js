import React from 'react';
import { NavLink } from "react-router-dom";

function NavBar() {
    const navList = [
        { title: "Home", name: "HOME", path: "/" },
        { title: "About", name: "ABOUT", path: "/about" },
        { title: "Crud", name: "CRUD", path: "/crudwrap" },

        { title: "SEARCH", name: "SEARCH", path: "/searchwrap" }
        
    ]

    
    return (
        <div className='cover navwrap'>
            <div className='navcolum fw-bolder'>
                {navList.map((nav, index) => (
                    <div className="nav py-1" key={index} >
                        <NavLink to={nav.path} title={nav.title} className="h-100">
                            {nav.name}
                        </NavLink>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default NavBar