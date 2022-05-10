import React from 'react';
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }
    if (user) {
        navigate('/home');
    }
    const handeleRegstier = event => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password);

    }
    return (
        <div className=''>
            <h1>Sing Up Now</h1>
            <Form onSubmit={handeleRegstier}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                   Register 
                </Button>
            </Form>
            <p>already have a account? <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Login Now</Link> </p>
            <SocialLogin></SocialLogin>
            
        </div>
    );
};

export default Register;