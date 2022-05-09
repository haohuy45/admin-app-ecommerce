import React, { useState } from "react";
import "./sidebar.css";
import { sidebarMenus } from "../../dummyData";
import SidebarMenuItem from "./SidebarMenuItem";

export default function Sidebar() {
  // const styles = {
  //   // 'overflow': 'scroll'
  // };
  // function MouseOver(e) {
  //   e.target.style.overflow = 'scroll';
  // }
  // function MouseOut(e) {
  //   e.target.style.overflow = 'hidden';


  // }
  return (
    <div
      // style={styles}
      className="sidebar sidebar-layout"
      // onMouseOver={MouseOver}
      // onMouseOut={MouseOut}
    >
      <nav>
        <ul className="sidebar-menu">
          {sidebarMenus.map((sidebarMenuItem, index) => (
            <SidebarMenuItem
              key={index}
              name={sidebarMenuItem.name}
              subMenus={sidebarMenuItem.subMenus || []}
            />
          ))}
          {/* <li onClick={handleShow}>
            <div className="sidebar-menu-item">
              <div className="sidebar-menu-item-left">
                <EventNoteIcon />
                <span className="sidebar-menu-item-text">Quản Lý Đơn Hàng</span>
              </div>
              {show ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
            </div>
            {show && <ul>
              <li>
                <NavLink to="/orders">
                  <span>Tất Cả Đơn Hàng</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/wallet">
                  <span>Đơn Hủy</span>
                </NavLink>
              </li>
            </ul>}
          </li>
          <li onClick={handleShow}>
            <div className="sidebar-menu-item">
              <EventNoteIcon />
              <span className="sidebar-menu-item-text">Quản Lý Sản Phẩm</span>
              <KeyboardArrowUpIcon/>

            </div>
            {show && <ul>
              <li>
                <NavLink to="/product">
                  <span>Tất Cả Sản Phẩm</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/product/add">
                  <span>Thêm Sản Phẩm</span>
                </NavLink>
              </li>
            </ul>}
          </li>
          <li onClick={handleShow}>
            <div className="sidebar-menu-item">
              <EventNoteIcon />
              <span className="sidebar-menu-item-text">Quản Lý Danh Mục</span>
              <KeyboardArrowUpIcon/>

            </div>
            {show && <ul>
              <li>
                <NavLink to="/category">
                  <span>Tất Cả Danh Mục</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/category/add">
                  <span>Thêm Danh Mục</span>
                </NavLink>
              </li>
            </ul>}
          </li>
          <li onClick={handleShow}>
            <div className="sidebar-menu-item">
              <EventNoteIcon />
              <span className="sidebar-menu-item-text">Quản Lý Người Dùng</span>
              <KeyboardArrowUpIcon/>

            </div>
            {show && <ul>
              <li>
                <NavLink to="/users">
                  <span>Người Dùng</span>
                </NavLink>
              </li>
            </ul>}
          </li>
          <li onClick={handleShow}>
            <div className="sidebar-menu-item">
              <CreditCardIcon />
              <span className="sidebar-menu-item-text">Tài Chính</span>
              <span class="sidebar-menu-item-space"></span>

              <KeyboardArrowUpIcon/>
            </div>
            {show && <ul>
              <li>
                <NavLink to="/income">
                  <span>Doanh Thu</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/wallet">
                  <span>Số Dư</span>
                </NavLink>
              </li>
            </ul>}
          </li> */}
        </ul>
      </nav>
    </div>
  );
}
