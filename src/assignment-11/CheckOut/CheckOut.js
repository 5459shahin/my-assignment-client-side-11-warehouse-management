import React from 'react';
import { useParams } from 'react-router-dom';

const CheckOut = () => {
    const {serviceId} = useParams()
    return (
        <div>
            <h2>Booking Your Order</h2>
        </div>
    );
};

export default CheckOut;