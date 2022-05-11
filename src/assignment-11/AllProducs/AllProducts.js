import React from 'react';
import useProduct from '../Hooks/useProduct';
import {MdDeleteForever} from 'react-icons/md'

const AllProducts = () => {
    const [products, setProducts] = useProduct();

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
        <div className='row'>
            <h1>see All products</h1>
            {
                products.map(product => 
                    <div className=' col col-12 col-lg-4 col-md-12 gy-3 p-5 '>
                        <div><img className='img-fluid w-25 ' src={product.img} alt="" />
                        <div><p>name: {product.name}</p></div>
                        <div><p onClick={()=>deleteItem(product._id)}><MdDeleteForever/></p></div>
                        
                        </div>

                        
                       
                    </div>
                    
                    )
                    
                    
                    
                    
            }
        </div>
    );
};

export default AllProducts;