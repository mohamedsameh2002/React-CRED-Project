import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export default function AddProduct() {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [rate, setRate] = useState(0)
    let useNave = useNavigate()
    function FormSubmit(e) {
        e.preventDefault()
        axios.post(`http://localhost:3000/products`, {
            title,
            price,
            rating: {
                rate,
            }
        })
            .then(useNave('/products',))

        // fetch(`http://localhost:3000/products`, {
        //     method: "post",
        //     body: JSON.stringify({
        //         title,
        //         price,
        //         rating: {
        //             rate,
        //             x
        //         }
        //     })
        // })
        //     .then((res) => res.json())
        //     .then(() => {
        //         document.getElementById("all_prs").click()
        //     })
    }
    return (
        <>
            <h1>Add Product</h1>
            <form onSubmit={(e) => FormSubmit(e)}>
                <div className="form-group">
                    <input onChange={(e) => setTitle(e.target.value)} type="text" className="form-control" aria-describedby="product title" placeholder="product title" />
                </div>
                <br></br>
                <div className="form-group">
                    <input onChange={(e) => setPrice(e.target.value)} type="number" className="form-control" aria-describedby="product price" placeholder="product price" />
                </div>
                <br></br>
                <div className="form-group">
                    <input onChange={(e) => setRate(e.target.value)} type="number" className="form-control" aria-describedby="product rate" placeholder="product rate" />
                </div>
                <br></br>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </>
    )
}
