import React, { useEffect, useState } from 'react';
import Loading from '../Loading/Loading';
import Product from '../Item/Item';
import './Items.css';
import Information from '../Information/Information';
import BikeService from '../BikeService/BikeService';

const Items = () => {
    const [services, setServices] = useState([]);
    /*  console.log(services); */


    useEffect(() => {
        fetch('https://damp-fortress-96356.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <div className="">

            <BikeService></BikeService>
            {/* <h2> Our Item</h2> */}
            <div className="container items-container">
                <div className="row">
                    <h1 className='services-title mt-5 mb-5'>Our Services: {services.length}</h1>
                    <div className='services-container'>

                        {services.length === 0 ? <Loading /> : ""}
                        {services.slice(0, 6).map((service) => (<Product

                            key={service._id}
                            service={service}

                        ></Product>
                        ))}

                    </div>
                </div>
            </div>
            <Information></Information>
        </div>
    );
};

export default Items;