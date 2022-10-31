import React, { useState } from 'react';
import { FloatingLabel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';

const AddProduct = () => {
    const [product, setProduct] = useState();

    const handleAddProduct = event => {
        event.preventDefault();
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("Product added successfully!");
                    event.target.reset();
                }
            })
    }

    const handleInputBlur = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newProduct = { ...product };
        newProduct[field] = value;
        setProduct(newProduct);
    }

    return (
        <div className='w-50 mx-auto mt-5'>
            <h2>Add New Product</h2>
            <Form onSubmit={handleAddProduct}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Product Name"
                        className="mb-3"
                    >
                        <Form.Control onBlur={handleInputBlur} type="text" name='name' placeholder="Product Name" />
                    </FloatingLabel>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Product Photo URL"
                        className="mb-3"
                    >
                        <Form.Control onBlur={handleInputBlur} type="text" name='photoURL' placeholder="Product Photo URL" />
                    </FloatingLabel>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Price"
                        className="mb-3"
                    >
                        <Form.Control onBlur={handleInputBlur} type="text" name='price' placeholder="Price" />
                    </FloatingLabel>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Quantity"
                        className="mb-3"
                    >
                        <Form.Control onBlur={handleInputBlur} type="text" name='quantity' placeholder="Quantity" />
                    </FloatingLabel>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Add Product
                </Button>
            </Form>
        </div>
    );
};

export default AddProduct;