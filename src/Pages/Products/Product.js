import React from 'react';
import toast from 'react-hot-toast';

const Product = ({ product, displayProducts, setDisplayProducts }) => {
    const { _id, name, photoURL, price, quantity } = product;

    const handleDelete = () => {
        const agree = window.confirm("Are you sure to delet this product?");
        if (agree) {
            fetch(`http://localhost:5000/products/${_id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success("Product deleted successfully!");
                        const remainingProducts = displayProducts.filter(product => product._id !== _id);
                        setDisplayProducts(remainingProducts);
                    }
                })
        }
    }

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
                <button onClick={handleDelete} className='btn btn-danger'>DELETE</button>
            </td>
        </tr>
    );
};

export default Product;