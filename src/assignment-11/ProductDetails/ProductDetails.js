// import { Toast } from 'bootstrap';

// import { toast } from "react-toastify";
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import './ProductDetail.css';

const ProductDetails = () => {
    const { ProductDetailsId } = useParams()
    const [product, setProduct] = useState({});
    const navigate = useNavigate ();

    /*  console.log(product); */
    useEffect(() => {
        const url = `http://localhost:5000/products/${ProductDetailsId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));


    }, [product]);
  
   
      
      const handleStock = e =>{
          e.preventDefault();
          const deliveryQuantity = parseInt(product.quantity)
          const quantity = parseInt(e.target.quantity.value)
          
          const updateQuantity = deliveryQuantity + quantity;
        const url = `http://localhost:5000/quantity/${ProductDetailsId}`;

        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({quantity:updateQuantity}),

        })
        .then(res => res.json())
        .then( data =>{
            console.log('success:', data);
            const stockItem = data.insertedId
           if(stockItem){
               toast('quantity add success full')
               console.log('quantity add success full')


           }
            
        })
       

      };


      const handleDelivery = ()=>{
        const deliveryQuantity = product.quantity
        
        const updateQuantity = deliveryQuantity - 1;
      const url = `http://localhost:5000/quantity/${ProductDetailsId}`;

      fetch(url, {
          method: 'PUT',
          headers: {
              'Content-type': 'application/json',
          },
          body: JSON.stringify({quantity:updateQuantity}),

      })
      .then(res => res.json())
      .then( data =>{
          console.log('success:', data);
          setProduct(product);
          
      })
      }
 
    return (
        <div height={"400px"} className='bg-dark detailComponent container '>
            
            

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
            <form onSubmit={handleStock} className=' add-quantity w-50 justify-content-center '>
                <input  className=" field w-100  border  justify-content-center" type="text" name="quantity" placeholder='add quantity' /> <br />
                <br /> 
                <input className='bg-secondary w-100 justify-content-center border add-quantity-btn' type="submit" value=" add quantity" /><br /><br />
                <button className=' bg-primary w-100 justify-content-center add-quantity-btn' onClick={handleDelivery}>deliver</button><br /><br />
                <button className=' w-100 justify-content-center add-quantity-btn bg-warning' onClick={()=> navigate('/allItems')}> Manage Items</button>
            </form> 


           {/*  <table className='product-details border w-100'>
                <thead>
                    <tr>
                        <th>img</th>
                        <th>price</th>
                        <th>quantity</th>
                        <th>product name</th>
                        <th>supplier</th>
                        
                        <th>deliver</th>
                    </tr>
                </thead>
                <tr>
                    <td><img height={"50px"} src={product.img} alt="" /></td>
                    <td> {product.price} </td>
                    <td> {product.quantity} </td>
                    <td> {product.cycle} </td>
                    <td> {product.supplier} </td>
                    
                    
                    <td><button onClick={handleDelivery}>deliver</button></td>
                    
                </tr>
            </table> */}
            
          



        </div>
    )
}

export default ProductDetails;