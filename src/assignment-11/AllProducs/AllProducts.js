import React from 'react';
import {useNavigate} from 'react-router-dom';
import useProduct from '../Hooks/useProduct';
import {MdDeleteForever} from 'react-icons/md';
import './AllProducts.css';

const AllProducts = () => {
    const [products, setProducts] = useProduct();
    const navigate = useNavigate();

    const deleteItem = (id)=>{
        const proceed = window.confirm('Are You delete the Cart');
        if(proceed){
            const url = `http://localhost:5000/products/${id}`
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                const remaining = products.filter(product => product._id !== id);
                setProducts(remaining);
            })

        }

    }

    
    return (
        <div className="row container mx-auto all-products-container">
            <h1 className='text-center'>see All products</h1>
            {
                products.map(product => 
                    <div className=' all-products mx-auto col col-12 col-lg-4 col-md-12 gy-3 p-5 '>
                        <div><img className='img-fluid w-25 mb-3 ' src={product.img} alt="" />
                        <div><h6>{product.cycle}</h6></div>
                        <div><h6>${product.price}</h6></div>
                        <div><h6>quantity: {product.quantity}</h6></div>
                        <div><h6> supplier: {product.supplier}</h6></div>
                        <div><p>{product.description}</p></div>
                        <div><p className='delete-btn text-center' onClick={()=>deleteItem(product._id)}><MdDeleteForever/></p></div>
                        
                        </div>

                        
                       
                    </div>
                    
                    )
                    
                    
                    
                    
            }

            <button onClick={()=> navigate('/addItem')}>Add Item</button>
        </div>
    );
};

export default AllProducts;