import React, { useState }  from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Register.css'



const Register = () => {

    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const navigateLogin = event => {
        navigate(`/login`);
    }

    if (loading || updating) {
        return <Loading></Loading>
    }


    if (user) {
        console.log('user', user);
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home');
    }


   
    return (
        <div className='singIn-from'>
            <h1>Sing Up Now</h1>

            <form onSubmit={handleRegister} className='register-form'>

                <input type="text" name="name" id="name" placeholder='Your Name' />
                <input type="email" name="email" id="email" placeholder='Your Email' required />

                <input type="password" name="password" id="pasword" placeholder='password' required />
                {/*===================
                   input check box
                   =================== */}
                <input onClick={() => setAgree(!agree)} type="checkbox" name="" id="check-box" />
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Genius Car terms and Conditions</label>
                {/* <label className={agree ? 'ps-2': 'ps-2 text-danger'} htmlFor="terms">Accept Genius Car terms and Conditions</label> */}

                <input
                    disabled={!agree}
                    type="submit"
                    className='btn btn-primary mt-3'
                    value="Register" />
            </form>
            {/*  <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                   Register 
                </Button>
            </Form> */}
            <p>already have a account? <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Login Now</Link> </p>
            <SocialLogin></SocialLogin>

        </div>
    );
};

export default Register;