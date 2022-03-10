import React from "react";
import "./sidebar.css";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import EventNoteIcon from "@mui/icons-material/EventNote";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    // <div className="sidebar">
    //   <div className="sidebarWrapper">
    //     <div className="sidebarMenu">
    //       <h3 className="sidebarTitle">Dashboard</h3>
    //       <ul className="sidebarList">
    //         <li className="sideListItem active">
    //           <NavLink to={`/`}>
    //             <LineStyleIcon className="sidebarIcon" />
    //             Trang chủ
    //           </NavLink>
    //         </li>
    //         <li className="sideListItem">
    //           <TimelineIcon className="sidebarIcon" />
    //           Thống kê
    //         </li>
    //         <li className="sideListItem">
    //           <TrendingUpIcon className="sidebarIcon" />
    //           Doanh thu
    //         </li>
    //       </ul>
    //     </div>
    //     <div className="sidebarMenu">
    //       <h3 className="sidebarTitle">Quick Menu</h3>
    //       <ul className="sidebarList">
    //         <NavLink to={`/users`} className="link">
    //           <li className="sideListItem">
    //             <PersonOutlineIcon className="sidebarIcon" />
    //             Người dùng
    //           </li>
    //         </NavLink>
    //         <Link to="/products" className="link">
    //           <li className="sideListItem">
    //             <NavLink to={`/products`}>
    //               <StorefrontIcon className="sidebarIcon" />
    //               Sản phẩm
    //             </NavLink>
    //           </li>
    //         </Link>
    //         <li className="sideListItem">
    //           <NavLink to={`/category`}>
    //             <TrendingUpIcon className="sidebarIcon" />
    //             Danh mục
    //           </NavLink>
    //         </li>
    //       </ul>
    //     </div>
    //     <div className="sidebarMenu">
    //       <h3 className="sidebarTitle">Quản lý đơn hàng</h3>
    //       <ul className="sidebarList">
    //         <li className="sideListItem">
    //           <NavLink to={`/orders`}>
    //             <LineStyleIcon className="sidebarIcon" />
    //             Đơn hàng
    //           </NavLink>
    //         </li>
    //         <li className="sideListItem">
    //           <TimelineIcon className="sidebarIcon" />
    //           Sản phẩm
    //         </li>
    //         <li className="sideListItem">
    //           <TrendingUpIcon className="sidebarIcon" />
    //           Giao dịch
    //         </li>
    //       </ul>
    //     </div>
    //     <div className="sidebarMenu">
    //       <h3 className="sidebarTitle">Notifications</h3>
    //       <ul className="sidebarList">
    //         <li className="sidebarListItem">
    //           <MailOutlineIcon className="sidebarIcon" />
    //           Mail
    //         </li>
    //         <li className="sidebarListItem">
    //           <DynamicFeedIcon className="sidebarIcon" />
    //           Feedback
    //         </li>
    //         <li className="sidebarListItem">
    //           <ChatBubbleOutlineIcon className="sidebarIcon" />
    //           Messages
    //         </li>
    //       </ul>
    //     </div>
    //     <div className="sidebarMenu">
    //       <h3 className="sidebarTitle">Staff</h3>
    //       <ul className="sidebarList">
    //         <li className="sidebarListItem">
    //           <WorkOutlineIcon className="sidebarIcon" />
    //           Manage
    //         </li>
    //         <li className="sidebarListItem">
    //           <FeedIcon className="sidebarIcon" />
    //           Analytics
    //         </li>
    //         <li className="sidebarListItem">
    //           <ReportIcon className="sidebarIcon" />
    //           Reports
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
    <div className="sidebar sidebar-layout">
      <nav>
        <ul className="sidebar-menu">
          <li>
            <div className="sidebar-menu-item">
              <EventNoteIcon />
              <span className="sidebar-menu-item-text">Quản Lý Đơn Hàng</span>
            </div>
            <ul>
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
            </ul>
          </li>
          <li>
            <div className="sidebar-menu-item">
              <EventNoteIcon />
              <span className="sidebar-menu-item-text">Quản Lý Sản Phẩm</span>
            </div>
            <ul>
              <li>
                <NavLink to="/list">
                  <span>Tất Cả Sản Phẩm</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/wallet">
                  <span>Thêm Sản Phẩm</span>
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <div className="sidebar-menu-item">
              <EventNoteIcon />
              <span className="sidebar-menu-item-text">Quản Lý Danh Mục</span>
            </div>
            <ul>
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
            </ul>
          </li>
          <li>
            <div className="sidebar-menu-item">
              <EventNoteIcon />
              <span className="sidebar-menu-item-text">Quản Lý Người Dùng</span>
            </div>
            <ul>
              <li>
                <NavLink to="/users">
                  <span>Người Dùng</span>
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <div className="sidebar-menu-item">
              <CreditCardIcon />
              <span className="sidebar-menu-item-text">Tài Chính</span>
            </div>
            <ul>
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
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}
