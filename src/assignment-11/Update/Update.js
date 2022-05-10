import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const Update = () => {
    const { id } = useParams();
    const [service, setServices] = useState({});

    useEffect ( () => {
        fetch('bicycle.json')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [id])

    const { name, price, quantity, description, supplierName, image } = service;
    return (
        <div>
            <h2>this is a update page</h2>
        </div>
    );
};

export default Update;