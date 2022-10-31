import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../../Pages/AddProduct/AddProduct";

const router = createBrowserRouter([
    {
        path: '/',
        element: <div>Home</div>
    },
    {
        path: '/addProducts',
        element: <AddProduct></AddProduct>
    }
])

export default router;