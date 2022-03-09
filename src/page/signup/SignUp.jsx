
import React, {useState, useEffect} from 'react'
import { Col, Container, Row, Form, Button } from 'react-bootstrap'
import { Input } from '../../components/input/Input'
import { Layout } from '../../components/layout'
import './signup.css';
import { Navigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { signup } from '../../actions';

export default function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const auth = useSelector(state => state.auth);
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user.loading) {
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
    }
  }, [user.loading]);

  const userSignup = (e) => {
    e.preventDefault();
    const user = {
      firstName, lastName, email, password
    }
    dispatch(signup(user))
  }
  if(auth.authenticate){
    return <Navigate to={`/`}/>
  }
  if(user.loading){
    return <p>Loading...</p>
  }
  return (
    <Layout>
      <Container className="signup-container">
        {user.message}
        <Row style={{ marginTop: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={userSignup}>
              <Row>
                <Col md={6}>
                  <Input
                    label="First Name"
                    placeholder="First Name"
                    type="text"
                    value = {firstName}
                    onChange = {(e) => setFirstName(e.target.value)}
                  />
                </Col>
                <Col md={6}>
                  <Input
                    label="Last Name"
                    placeholder="Last Name"
                    type="text"
                    value = {lastName}
                    onChange = {(e) => setLastName(e.target.value)}
                  />
                </Col>
              </Row>

              <Input
                label="Email"
                placeholder="Email"
                type="email"
                value = {email}
                onChange = {(e) => setEmail(e.target.value)}

              />

              <Input
                label="Password"
                placeholder="Password"
                type="password"
                value = {password}
                onChange = {(e) => setPassword(e.target.value)}

              />
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
