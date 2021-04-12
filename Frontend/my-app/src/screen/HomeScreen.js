import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// Import FirebaseAuth and firebase.
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

import { Container, Button, Alert, Form } from 'react-bootstrap';


const HomeScreen = () => {
    return (
        <div className="App">
            <header className="App-header">
                <Container>
                    <Form>
                        <Form.Group>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Example@email.com" />
                        </Form.Group>
                        <Button variant="secondary" type="submit">Sign Up</Button>
                    </Form>
                    <div>
                        <div>#STOPAAPIHATE</div>
                        <div>#STOPAAPIHATE</div>
                        <div>#STOPAAPIHATE</div>
                    </div>

                </Container>
            </header>
        </div>
    )
}

export default HomeScreen
