import React, { useState } from 'react'
import CreditCardIcon from "@mui/icons-material/CreditCard";
import EventNoteIcon from "@mui/icons-material/EventNote";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SubMenuSidebar from './SubMenuSidebar';
import { NavLink } from "react-router-dom";


const SidebarMenuItem = (props) => {
    const { name, subMenus } = props;
    const [show, setShow] = useState(true);
    const handleShow = () => {
        setShow(!show);
    }

    return (
        <li onClick={handleShow}>
            <div className="sidebar-menu-item">
                <div className="sidebar-menu-item-left">
                    <EventNoteIcon />
                    <span className="sidebar-menu-item-text">{name}</span>
                </div>
                {show ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
            </div>
            {show && <SubMenuSidebar subMenus={subMenus}/>}

            {/* {subMenus && subMenus.length > 0 ? ( */}

            

            {/* ) : null} */}


        </li>
    )
}

export default SidebarMenuItem