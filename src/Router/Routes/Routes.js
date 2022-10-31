import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../../Pages/AddProduct/AddProduct";
import Products from "../../Pages/Products/Products";
import UpdateProduct from "../../Pages/UpdateProduct/UpdateProduct";

const router = createBrowserRouter([
    {
        path: '/',
        element: <div>Home</div>
    },
    {
        path: '/manageProducts',
        element: <Products></Products>,
        loader: () => fetch('http://localhost:5000/products')
    },
    {
        path: '/addProducts',
        element: <AddProduct></AddProduct>
    },
    {
        path: '/products/:id',
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
    }
])

export default router;