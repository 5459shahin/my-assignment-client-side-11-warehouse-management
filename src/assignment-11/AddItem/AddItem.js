import React from 'react';
import { useForm } from "react-hook-form";

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `https://damp-fortress-96356.herokuapp.com/products`;
        fetch(url, {
            method:'POST', 
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        
        
        console.log(data);

    }
     
    return (
        <div className='mx-auto w-50'>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2 p-2' placeholder="name"  type="text"{...register("cycle")}  /> 
                <input className='mb-2 p-2' type="number" placeholder="price"  {...register("price") } />
                <input className='mb-2 p-2'  type="number" placeholder="quantity" {...register("quantity")}  />
                <input className='mb-2 p-2' type="text" placeholder="supplier" {...register("supplier")}  />
                <textarea className='mb-2 p-2' type="text" placeholder="description" {...register("description")}  />
                <input className='mb-2 p-2' type="text"  placeholder=" image url" {...register("img")} />
            

                <input type="submit" value="Add New Product" />
            </form>
        </div>
    );
};

export default AddItem;