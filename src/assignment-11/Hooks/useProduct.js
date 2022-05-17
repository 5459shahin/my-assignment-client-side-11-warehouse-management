import { useState } from "react"
import { useEffect } from "react";

const useProduct = (url)=>{
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://damp-fortress-96356.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return [products, setProducts];
}
export default useProduct;