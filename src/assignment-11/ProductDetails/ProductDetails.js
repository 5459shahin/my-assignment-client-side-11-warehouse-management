import React, { useEffect, useState } from 'react';
import {  useNavigate, useParams } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetails = () => {
    const { ProductDetailsId } = useParams()

    const [product, setProduct] = useState({});
    console.log(product);
    useEffect(() => {
        const url = `http://localhost:5000/products/${ProductDetailsId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));


    });

    const navigate = useNavigate ();

    


    return (
        <div className='detailComponent container w-50'>
            <div className="detailCart">
                <img height={300} width={300} className="   mx-auto item-image" src={product.img} alt="" />
                <div className="detail">
                    <h4>product name : {product.cycle}</h4>
                    <p>price: {product.price}</p>
                    <p>quantity: {product.quantity}</p>
                    <p>supplier: {product.supplier}</p>
                    <p>description: {product.description}</p>
                </div>
            </div>

            <button onClick={()=> navigate('/allItems')}> Manage Items</button>

        </div>
    );
};

export default ProductDetails;