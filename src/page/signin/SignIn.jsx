import React, { useState, useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Input } from "../../components/input/Input";
import { Layout } from "../../components/layout";
import "./signin.css";
import {login} from '../../actions'
import { useDispatch, useSelector } from "react-redux";
import {Navigate} from 'react-router-dom';

export default function SignIn(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const auth = useSelector(state => state.auth)


  const dispatch = useDispatch()

  const userLogin = (e) => {
    e.preventDefault();
    const user = {
      email, password
    }
    dispatch(login(user))
  }
  if(auth.authenticate){
    return <Navigate to={`/`}/>
  }
  return (
    <div className="signin">
      <Layout>
        <Container className="signin-container">
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Form onSubmit={userLogin}>
                <Input
                  label="Email"
                  placeholder="Email"
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />

                <Input
                  label="Password"
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Layout>
    </div>
  );
}
