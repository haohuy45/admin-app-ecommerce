import React from "react";
import "./widgetSm.css";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Thành viên mới</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/9632404/pexels-photo-9632404.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Hào Huy</span>
            <span className="widgetSmEmail">haohuy45@gmail.com</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon />
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/9632404/pexels-photo-9632404.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Hào Huy</span>
            <span className="widgetSmEmail">haohuy45@gmail.com</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon />
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/9632404/pexels-photo-9632404.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Hào Huy</span>
            <span className="widgetSmEmail">haohuy45@gmail.com</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon />
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/9632404/pexels-photo-9632404.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Hào Huy</span>
            <span className="widgetSmEmail">haohuy45@gmail.com</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon />
          </button>
        </li>
      </ul>
    </div>
  );
}
