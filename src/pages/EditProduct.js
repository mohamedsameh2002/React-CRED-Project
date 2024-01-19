import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'


export default function EditProduct() {
    let pid = useParams()
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [rate, setRate] = useState(0)
    let useNave = useNavigate()
    useEffect(() => {
        axios.get(`http://localhost:3000/products/${pid.productID}`)
            .then((res) => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setRate(res.data.rating.rate);
            })
    }, [])
    function FormSubmit(e) {
        e.preventDefault()
        axios.put(`http://localhost:3000/products/${pid.productID}`, {
            title,
            price,
            rating: {
                rate,
            }
        })
            .then(useNave('/products',))
    }


    return (
        <>
            <h1>Edit Product</h1>
            <form onSubmit={(e) => FormSubmit(e)}>
                <div className="form-group">
                    <input onChange={(e) => setTitle(e.target.value)} type="text" className="form-control" aria-describedby="product title" placeholder="product title" value={title} />
                </div>
                <br></br>
                <div className="form-group">
                    <input onChange={(e) => setPrice(e.target.value)} type="number" className="form-control" aria-describedby="product price" placeholder="product price" value={price} />
                </div>
                <br></br>
                <div className="form-group">
                    <input onChange={(e) => setRate(e.target.value)} type="number" className="form-control" aria-describedby="product rate" placeholder="product rate" value={rate} />
                </div>
                <br></br>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </>
    )
}
