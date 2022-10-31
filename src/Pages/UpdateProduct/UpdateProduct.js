import React, { useState } from 'react';
import { FloatingLabel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';

const UpdateProduct = () => {
    const storedProduct = useLoaderData();

    const [product, setProduct] = useState(storedProduct);

    const handleUpdateProduct = event => {
        event.preventDefault();
        fetch(`http://localhost:5000/products/${storedProduct._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success("Product updated successfully!");
                }
            })
    }

    const handleInputChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newProduct = { ...product };
        newProduct[field] = value;
        setProduct(newProduct);
    }

    return (
        <div className='w-50 mx-auto mt-5'>
            <h2>Update Product Name: {storedProduct.name}</h2>
            <Form onSubmit={handleUpdateProduct}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Product Name"
                        className="mb-3"
                    >
                        <Form.Control onChange={handleInputChange} defaultValue={storedProduct.name} type="text" name='name' placeholder="Product Name" />
                    </FloatingLabel>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Product Photo URL"
                        className="mb-3"
                    >
                        <Form.Control onChange={handleInputChange} defaultValue={storedProduct.photoURL} type="text" name='photoURL' placeholder="Product Photo URL" />
                    </FloatingLabel>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Price"
                        className="mb-3"
                    >
                        <Form.Control onChange={handleInputChange} defaultValue={storedProduct.price} type="text" name='price' placeholder="Price" />
                    </FloatingLabel>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Quantity"
                        className="mb-3"
                    >
                        <Form.Control onChange={handleInputChange} defaultValue={storedProduct.quantity} type="text" name='quantity' placeholder="Quantity" />
                    </FloatingLabel>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Update Product
                </Button>
                <Link to='/manageProducts'>
                    <Button variant="info" type="submit" className='ms-3'>
                        Show All
                    </Button>
                </Link>
            </Form>
        </div>
    );
};

export default UpdateProduct;