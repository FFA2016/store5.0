import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './pages/home';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Products from "./pages/products";
import Legal_notice from "./pages/legal_notice";
import Privacy from "./pages/privacy";
import Admin_login from "./pages/admin/admin_login";
import Security_subpage_nav from "./pages/admin/navbarlinks_subpages/security";
import Dashboard_subpage_nav from "./pages/admin/navbarlinks_subpages/dashboard";
import Products_subpage_nav from "./pages/admin/navbarlinks_subpages/products";
import Settings_subpage_nav from "./pages/admin/navbarlinks_subpages/settings";
import Account_subpage_nav from "./pages/admin/navbarlinks_subpages/account";
import Users_subpage_nav from "./pages/admin/navbarlinks_subpages/users";
import Databases_subpage_nav from "./pages/admin/navbarlinks_subpages/databases";
import Orders_subpage_nav from "./pages/admin/navbarlinks_subpages/orders";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// @ts-ignore
export default function App() {
    return(
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route>
                        <Route path={"/"} element={<Home/>}/>
                        <Route path={"/products"} element={<Products/>}/>
                        <Route path={"/imprint"} element={<Legal_notice/>}/>
                        <Route path={"/privacy"} element={<Privacy/>}/>
                        <Route path={"/admin/login"} element={<Admin_login/>}/>
                        <Route path={"/admin"} element={<Dashboard_subpage_nav/>}/>
                        <Route path={"/admin/dashboard"} element={<Dashboard_subpage_nav/>}/>
                        <Route path={"/admin/security"} element={<Security_subpage_nav/>}/>
                        <Route path={"/admin/settings"} element={<Settings_subpage_nav/>}/>
                        <Route path={"/admin/products"} element={<Products_subpage_nav/>}/>
                        <Route path={"/admin/account"} element={<Account_subpage_nav/>}/>
                        <Route path={"/admin/orders"} element={<Orders_subpage_nav/>}/>
                        <Route path={"/admin/users"} element={<Users_subpage_nav/>}/>
                        <Route path={"/admin/databases"} element={<Databases_subpage_nav/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

root.render(<App/>)