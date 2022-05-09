import React from 'react'
import { NavLink } from "react-router-dom";


const SubMenuSidebar = (props) => {
    const { subMenus } = props;
    console.log(subMenus)
    return (
        // <ul>
        //     <li>asdsa</li>
        //     <li>asdsa</li>
        //     <li>asdsa</li>
        // </ul>

        <>
            {subMenus.map((menu, index) => (
                <ul key={index}>
                    <li>
                        <NavLink to={menu.to}>
                            <span>{menu.name}</span>
                        </NavLink>
                    </li>
                </ul>
            ))}
        </>
    )
}

export default SubMenuSidebar