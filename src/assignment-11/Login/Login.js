import React, { useRef } from 'react';
import { Button, Form, Toast } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';



const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate('');
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (loading || sending) {
        return <Loading></Loading>
    }
    if (user) {
        navigate(from, { replace: true });
    }
    if (error) {
        errorElement = <p className='text-danger text-center bg-dark'> email and password not valid</p>

    }




    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }
    const navigateToRegister = event => {
        navigate('/register');

    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('please enter your email address');
        }
    }

    return (
        <div className='singIn-from'>
            <h1>Login Now</h1>
            <Form className='w-50 login-form' onSubmit={handleSubmit}>
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

                {errorElement}

                <p>Create a new account <Link to='/register' className='text-danger pe-auto text-decoration-none' onClick={navigateToRegister}>Sing Up Now</Link></p>

                <p>Forget Password? <button className='btn btn-link text-light pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>

            </Form>


            <SocialLogin></SocialLogin>
            <ToastContainer></ToastContainer>

        </div>
    );
};

export default Login;