import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './pages/home';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Products from "./pages/products";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
// @ts-ignore
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route>
                  <Route path={"Home"} element={<App/>} />
                  <Route path={"Products"} element={<Products/>}/>
              </Route>
          </Routes>
      </BrowserRouter>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
