import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'



export default function ProductDetails() {
    let pid = useParams()
    const [product, setProduct] = useState({})
    useEffect(() => {
        fetch(`http://localhost:3000/products/${pid.productID}`, { method: "get" })
            .then((data) => data.json())
            .then((data) => setProduct(data))
    }, [])

    return (
        <>
            <h1>Product Details</h1>
            <hr></hr>
            <h1>{product.title}</h1>
            <hr></hr>
            <h1>{product.description}</h1>
        </>
    )
}
