import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProduct from '../Hooks/useProduct';
import { MdDeleteForever } from 'react-icons/md';
import './AllProducts.css';

const AllProducts = () => {
    const [products, setProducts] = useProduct();
    const navigate = useNavigate();

    const deleteItem = (id) => {
        const proceed = window.confirm('Are You delete the Cart');
        if (proceed) {
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

    const navigateToServiceDetail = id => {
        navigate(`/productDetails/${id}`);

    }


    return (
        <div className="row container mx-auto all-products-container">
            <h1 className='text-center'>see All products</h1>
           
            {
                products.map(product =>

                    <div>
                       

                        <table class="table">
                            <thead>
                                <tr>

                                    <th scope="col">name</th>
                                    <th scope="col">price</th>
                                    <th scope="col">quantity</th>
                                    <th scope="col">supplier</th>

                                </tr>
                            </thead>
                            <tbody className='w-100'>
                                <tr>
                                    <td><img height={'50px'} width={'80px'} lassName="all-img" src={product.img} alt="" /></td>
                                    <td>{product.cycle}</td>
                                    <td>{product.price}</td>
                                    <td>{product.quantity}</td>
                                    <td>{product.supplier}</td>
                                    <td><button onClick={()=> navigateToServiceDetail ('_id')}>
                                         
                                        Update Stock
                                    </button></td>
                                    <td> <p className='delete-btn text-center justify-content-end' onClick={() => deleteItem(product._id)}><MdDeleteForever /></p>
                                    </td>

                                </tr>
                            </tbody>
                        </table>


                    </div>

                )
            }
            <button className='bg-dark text-light' onClick={() => navigate('/addItem')}>Add Item</button>
        </div>
    );
};

export default AllProducts;