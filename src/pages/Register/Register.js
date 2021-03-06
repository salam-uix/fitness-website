import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const { signInUsingGoogle, signInUsingGitHub } = useAuth();
    return (
        <div className="container w-25 mt-5">
            <h4>Please Register</h4>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <br /><br />
            <span>Already register?
                <Link style={{ borderBottomColor: "#EE4F15" }} className="btn" to="/login">Please Login</Link>
            </span>
            <br /><br />
            <button onClick={signInUsingGoogle}>Google sign in</button>
            <button onClick={signInUsingGitHub}>Github sign in</button>


        </div>
    );
};

export default Register;