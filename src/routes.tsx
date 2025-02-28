import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import ProductManagment from "./pages/product-managment/ProductManagment";
import Usermanagment from "./pages/user-managment/Usermanagment";
import PromoCode from "./pages/promo-code/PromoCode";
import Reports from "./pages/reports/Reports";
import DeliveryManagment from "./pages/delivery-managment/DeliveryManagment";
import MessageChats from "./pages/message/MessageChats";
import Settings from "./pages/settings/Settings";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout auth={true} />,
        children: [
            { 
                index: true,
                element: <Dashboard />
            },
            { 
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: "product-management",
                element: <ProductManagment />
            },
            {
                path: "user-management",
                element: <Usermanagment />
            },
            {
                path: "promo-code",
                element: <PromoCode />
            },
            {
                path: "reports",
                element: <Reports />
            },
            {
                path: "delivery-management",
                element: <DeliveryManagment />
            },
            {
                path: "message-chats",
                element: <MessageChats />
            },
            {
                path: "settings",
                element: <Settings />
            },
        ]
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "*",
        element: <div>Page not found</div>
    }
])