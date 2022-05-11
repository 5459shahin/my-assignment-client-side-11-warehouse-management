import { useState } from "react"
import { useEffect } from "react";

const useProduct = (url)=>{
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return [products, setProducts];
}
export default useProduct;