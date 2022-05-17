import React from 'react';
import WashImg from '../images/service1.jpg';
import NormalService from '../images/service3 (1).jpg';
import fullService from '../images/service2.jpg';
import './BikeService.css'


const BikeService = () => {
    return (
        <div>
            <h3 className='text-center mt-5 pt-5'>Our most popular service</h3>
            <div className='d-flex container justify-content-evenly header-top'>

                <div class="card img-card">
                    <img class=" header-img card-img-top" src={WashImg} alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">Wash, Lube & Tune</h5>
                        <p class="card-text">Normal wash
                            Lubrication and maintenance on drive train
                            Check and set gears
                            Align brakes for improved efficiency
                            Re inflate tyres to appropriate pressure</p>

                    </div>
                </div>
                <div class="card img-card">
                    <img class="header-img card-img-top" src={NormalService} alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">Normal Service</h5>
                        <p class="card-text">Checking that wheels are true and hubs, spokes, rims and tyres for damage.
                            Alignment of brakes and checking operation and effectiveness.</p>

                    </div>
                </div>
                <div class="card img-card">
                    <img class="header-img card-img-top" src={fullService} alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">Full Service</h5>
                        <p class="card-text">Brake and shifting adjustments
                            Safety inspection
                            Minor wheel truing
                            Service any loose bearings on:
                            Remove both axles, degrease and inspect bearings</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BikeService;