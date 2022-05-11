import React, { useEffect, useState } from 'react';
import Loading from '../Loading/Loading';
import Product from '../Item/Item';
import './Items.css';

const Items = () => {
    const [services, setServices] = useState([]);
   /*  console.log(services); */


    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    
    return (
        <div>
            {/* <h2> Our Item</h2> */}
            <div className="row">
                <h1 className='services-title mt-5 mb-5'>Our Services</h1>
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
    );
};

export default Items;