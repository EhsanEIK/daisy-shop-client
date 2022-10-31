import React from 'react';
import Table from 'react-bootstrap/Table';
import { Link, useLoaderData } from 'react-router-dom';
import Product from './Product';

const Products = () => {
    const products = useLoaderData();

    return (
        <div className='mt-5'>
            <h2 className='text-center'>Total Products: {products.length}</h2>
            <Link to='/addProducts'>
                <button className='btn btn-primary mt-3 mb-5'>Add Product</button>
            </Link>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Photo</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}></Product>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default Products;