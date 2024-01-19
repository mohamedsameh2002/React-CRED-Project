import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'



export default function Products() {

    const [products, setProducts] = useState([])
    function GetAllData() {
        fetch("http://localhost:3000/products")
            .then((data) => data.json())
            .then((data) => setProducts(data))
    }
    useEffect(() => {
        GetAllData()
    }, [])
    function DeleteProduct(el) {

        Swal.fire({
            title: `Are You Sure Delete  "${el.title}"?!`,
            showCancelButton: 1,
        }).then((res) => {
            if (res.isConfirmed) {
                fetch(`http://localhost:3000/products/${el.id}`, { method: "delete" })
                    .then(() => GetAllData())
            }
        })




    }
    return (
        <div>
            <h1>Products Page</h1>
            <Link className='btn btn-success mt-3' to={'/products/add'}>Add</Link>
            <table className="table table-striped mt-5">
                <thead >
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Price</th>
                        <th scope="col">Rateing</th>
                        <th scope="col">Options</th>
                    </tr>
                </thead>
                <tbody>
                    {products.length === 0 ? <tr><th>loding...</th></tr> : products.map((el) => {
                        return (
                            <tr key={el.id}>
                                <th scope="row">{el.id}</th>
                                <td>{el.title}</td>
                                <td>{el.price}</td>
                                <td>{el.rating.rate}</td>
                                <td>
                                    <button className='btn btn-danger btn-sm' onClick={() => { DeleteProduct(el) }}>Delete!</button>
                                    <Link to={`/products/${el.id}`} className='btn btn-info btn-sm'>Details</Link>
                                    <Link to={`/products/edit/${el.id}`} className='btn btn-primary btn-sm'>Edit</Link>
                                </td>
                            </tr>)
                    })}


                </tbody>
            </table>
        </div>
    )
}
