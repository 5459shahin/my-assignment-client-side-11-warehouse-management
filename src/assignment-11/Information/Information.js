import React from 'react';
import './Information.css';

const Information = () => {
    return (
        <div className='information '>
            <div className=" container  information-card d-flex justify-content-between">
                <div className="information-section w-50 d-flex justify-content-between">
                    <div className="more-information w-50 ">
                        <h6>MORE INFORMATIONS</h6>
                        <p>We are BIG in connecting with our customers. We are easily reachable through live chat and email support for questions and feedback</p>
                        <button>SHOP ONLINE</button>
                    </div>
                    <div className="service">
                        <h6>SERVICE</h6>
                        <p>HOME</p>
                        <p>ABOUT</p>
                        <p>BIKE SERVICE</p>
                        <p>CONTACT</p>
                        <p>SHOP ONLINE</p>
                    </div>

                </div>
                <div className='touch bg-dark text-light '>
                    <div className="address">
                    <h6>GET IN TOUCH</h6>
                    <p>&#9990; 019484329</p>
                    <p>&#x2709; mohammadshahin.khan1992@gmail.com</p>
                    <h6>address</h6>
                    <p> 9, Jalan BPP5/1, PUJ1, 43300 Seri Kembangan, Selangor. Malaysia</p>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Information;