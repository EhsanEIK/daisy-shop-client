import React from 'react';

const Product = ({ product }) => {
    const { id, name, photoURL, price, quantity } = product;

    return (
        <tr>
            <td>{name}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td className='w-25'>
                <img src={photoURL} className="w-25 h-25" alt={name} />
            </td>
            <td>
                <button className='btn btn-info me-3'>UPDATE</button>
                <button className='btn btn-danger'>DELETE</button>
            </td>
        </tr>
    );
};

export default Product;