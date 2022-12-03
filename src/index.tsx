import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './pages/home';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Products from "./pages/products";
import Imprint from "./pages/imprint";
import Privacy from "./pages/privacy";


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
                        <Route path={"/imprint"} element={<Imprint/>}/>
                        <Route path={"/privacy"} element={<Privacy/>}/>
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