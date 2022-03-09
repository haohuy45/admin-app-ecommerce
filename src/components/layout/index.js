import React from 'react'
import Header from '../header/Header'
import { Container, Row, Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import Sidebar from '../sidebar/Sidebar'


export const Layout = (props) => {
  return (
    <>
        {/* <Header/>
        {
          props.sidebar ? 
          <Container fluid>
          <Row>
            <Col md={2} className="sidebar">
              <ul>
                <li><NavLink to={`/`}>Home</NavLink></li>
                <li><NavLink to={`/category`}>Category</NavLink></li>
                <li><NavLink to={`/products`}>Products</NavLink></li>
                <li><NavLink to={`/orders`}>Orders</NavLink></li>
              </ul>
            </Col>
            <Col md={10}>
              {props.children}
            </Col>
          </Row>
          </Container> :
          props.children
        } */}

        {/* <Header/> */}
        {props.sidebar ? <Sidebar/> : props.children}   
    </>
  )
}
