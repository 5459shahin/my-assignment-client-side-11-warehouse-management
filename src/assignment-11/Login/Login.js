import React, { useRef } from 'react';
import { Button, Form, Toast } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link,  useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';



const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const naviget = useNavigate('');
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    if (user) {
        naviget(from, { replace: true });
    }
    

    
   
    const handleSubmit= event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        navigetToRegister(email, password);
    }
    const navigetToRegister = event => {
        naviget('/register');

    }
    return (
        <div className='singIn-from'>
            <h1>Login Now</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="primary mx-auto" type="submit">
                    Login
                </Button>
            </Form>
            <Toast>
                Reset Password
            </Toast>
            <p>Create a new account <Link to='/' className='text-danger pe-auto text-decoration-none' onClick={navigetToRegister}>Sing Up Now</Link></p>
            <SocialLogin></SocialLogin>
         
        </div>
    );
};

export default Login;