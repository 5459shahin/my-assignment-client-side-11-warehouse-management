import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;
    if (error) {
        errorElement = <div>
            <p className='text-danger'>Error: {error.message}</p>
        </div>

    }

    if (user) {
        navigate('/product');
    }
    return ( 
        <div className='w-100'>
            <hr />
            {errorElement}
            <button onClick={() => { signInWithGoogle() }} className='w-100  btn btn-info w-50'>
               
                <span className='px-2'>Google Sing In</span></button>

        </div>
    );
};

export default SocialLogin;