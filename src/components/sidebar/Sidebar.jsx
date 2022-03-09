import React from "react";
import "./sidebar.css";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StorefrontIcon from "@mui/icons-material/Storefront";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import FeedIcon from "@mui/icons-material/Feed";
import ReportIcon from "@mui/icons-material/Report";
import { Link } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sideListItem active">
              <NavLink to={`/`}>
                <LineStyleIcon className="sidebarIcon" />
                Trang chủ
              </NavLink>
            </li>
            <li className="sideListItem">
              <TimelineIcon className="sidebarIcon" />
              Thống kê
            </li>
            <li className="sideListItem">
              <TrendingUpIcon className="sidebarIcon" />
              Doanh thu
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <NavLink to={`/users`} className="link">
              <li className="sideListItem">
                <PersonOutlineIcon className="sidebarIcon" />
                Người dùng
              </li>
            </NavLink>
            <Link to="/products" className="link">
              <li className="sideListItem">
                <NavLink to={`/products`}>
                  <StorefrontIcon className="sidebarIcon" />
                  Sản phẩm
                </NavLink>
              </li>
            </Link>
            <li className="sideListItem">
              <NavLink to={`/category`}>
                <TrendingUpIcon className="sidebarIcon" />
                Danh mục
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quản lý đơn hàng</h3>
          <ul className="sidebarList">
            <li className="sideListItem">
              <NavLink to={`/orders`}>
                <LineStyleIcon className="sidebarIcon" />
                Đơn hàng
              </NavLink>
            </li>
            <li className="sideListItem">
              <TimelineIcon className="sidebarIcon" />
              Sản phẩm
            </li>
            <li className="sideListItem">
              <TrendingUpIcon className="sidebarIcon" />
              Giao dịch
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutlineIcon className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeedIcon className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutlineIcon className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutlineIcon className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <FeedIcon className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <ReportIcon className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
