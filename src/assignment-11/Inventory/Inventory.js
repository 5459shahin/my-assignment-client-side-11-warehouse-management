import React from 'react';
import { useParams } from 'react-router-dom';
import CheckOut from '../CheckOut/CheckOut';
import useServiceDetail from '../Hooks/useServiceDetail';
import './Inventory.css'

const Inventory = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);
    return (
        <div>
            <h2>
                this is inventory page
                
            </h2>


            <CheckOut></CheckOut>
        </div>
    );
};

export default Inventory;