import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='footer-section sticky-bottom'>

            <div class="card-group footer-contain">
                <div class=" footer-card">
                    <div class="card-body">
                        <p class="card-text"><small class="text-white">Healing Power of Presence</small></p>
                        <p class="card-text"><small class="text-white">Our Mission and Values</small></p>
                        <p class="card-text"><small class="text-white">Quality Care</small></p>
                        <p class="card-text"><small class="text-white">Donate</small></p>
                    </div>
                </div>
                <div class="footer-card ">

                    <div class="card-body">
                        <p class="card-text"><small class="text-white">Patients & Visitors</small></p>
                        <p class="card-text"><small class="text-white">Classes & Events</small></p>
                        <p class="card-text"><small class="text-white">Financial Assistance</small></p>
                        <p class="card-text"><small class="text-white">My Chart Login</small></p>
                    </div>
                </div>

            </div>


            <footer className="text-center mt-5 text-secondary">
                Copyright &copy; {year}
            </footer>
        </div>
    );
};

export default Footer;