import React from "react";
import "./header.css";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link, NavLink } from "react-router-dom";
// import { Container, Nav, Navbar } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { signout } from "../../actions";
import logo from "../../assets/img/Logo vitamin plus.png";
import { Nav } from "react-bootstrap";

export default function Header() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(signout());
  };

  const renderLoggedInLinks = () => {
    return (
      <Nav>
        <li className="nav-item">
          <span className="nav-link" onClick={logout}>
            Signout
          </span>
        </li>
      </Nav>
    );
  };
  const renderNonLoggedInLinks = () => {
    return (
      <Nav>
        <li className="nav-item">
          <NavLink to="/signin" className="nav-link">
            Signin
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/signup" className="nav-link">
            Signup
          </NavLink>
        </li>
      </Nav>
    );
  };
  return (
    // <>
    //   <Navbar
    //     collapseOnSelect
    //     fixed="top"
    //     expand="lg"
    //     bg="dark"
    //     variant="dark"
    //     style={{ zIndex: 1 }}
    //   >
    //     <Container fluid>
    //       <Link to="/" className="navbar-brand">
    //         Admin Dashboard
    //       </Link>
    //       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //       <Navbar.Collapse id="responsive-navbar-nav">
    //         <Nav className="mr-auto">
    //           {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
    //                         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //                         <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
    //                         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //                         <NavDropdown.Divider />
    //                         <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
    //                         </NavDropdown> */}
    //         </Nav>
    //         {auth.authenticate ? renderLoggedInLinks() : renderNonLoggedInLinks()}
    //       </Navbar.Collapse>

    //     </Container>
    //   </Navbar>
    // </>
    <div className="header-bar">
      <div className="header-content">
        <div className="header-left">
          <Link to="/" className="header-logo">
            <img src={logo} alt="logo" className="header-logo" />
          </Link>
          <div className="content-box">
            <Link to="/" className="header-text">
              KÊNH NGƯỜI BÁN
            </Link>
          </div>
        </div>
        <div className="header-right">
          {/* <div className="header-account">
            <div className="account-info-box">
              <div className="account-info">
                <img src={logo} alt="account" className="header-logo" />
                <span>username</span>
              </div>
            </div>
          </div> */}
          <div className="header-btn">
            {auth.authenticate
              ? renderLoggedInLinks()
              : renderNonLoggedInLinks()}
          </div>
          <div className="header-action">
            <div className="header-notification">
              <NotificationsNoneIcon className="header-action-icon" />
            </div>
            <div className="header-icon-menu ">
              <SettingsIcon className="header-action-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
