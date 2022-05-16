import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, loading, user, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;
    if(loading ){
        return <Loading></Loading>
    }
    if (error) {
        errorElement = <div>
            <p className='text-danger'>Error: {error.message}</p>
        </div>

    }

    if (user) {
        navigate('/home');
    }
    return ( 
        <div className='w-100'>
            <hr />
            {errorElement}
            <button onClick={() => { signInWithGoogle() }} className='w-100  btn btn-info w-50'>
               
                <span className='px-2 text-light'>Google Sing In</span></button>

        </div>
    );
};

export default SocialLogin;