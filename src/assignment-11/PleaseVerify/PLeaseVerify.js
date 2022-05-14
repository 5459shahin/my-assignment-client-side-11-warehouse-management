import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Swal from "sweetalert2";

const PLeaseVerify = () => {
    const [user] = useAuthState(auth);
    const [sendEmailVerification, sending, error] =
        useSendEmailVerification(auth);
    const sendVerificationLink = async () => {
        await sendEmailVerification();
        Swal.fire({
            icon: "success",
            title: "Sent!",
            text: "Successfully sent verification link to your email.",
        });
        if (error) {
            Swal.fire({
                icon: "error",
                title: "Error !",
                text: "Something went wrong.",
            });
        }
    };
    return (
        <div className="container my-5 py-5 please-verify">
            <div className="row">
                <div className="card col-md-5 mx-auto text-center py-5 h-100">
                    <div className="card-body">
                        <h4 className="card-title">Please Verify Your Email</h4>
                        <h6>To Manage Items Please Verify Your Email:</h6>
                        <p className="fw-bold">{user.email}</p>
                        <button
                            onClick={sendVerificationLink}
                            className="btn resend-email-btn"
                        >
                            Resend Email Verification Link
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PLeaseVerify;