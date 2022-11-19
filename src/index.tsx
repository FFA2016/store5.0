import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {HeaderSimple} from './components/navbar';
import {HeroImageRight} from './components/welcome-head';
import {FeaturesCards} from './components/featured';
import {FooterSimple} from './components/footer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
// @ts-ignore
root.render(
  <React.StrictMode>
    <HeaderSimple links={[
    {
        "link": "/",
        "label": "Home"
    },
    {
        "link": "/products",
        "label": "Products"
    },
    {
        "link": "/about",
        "label": "About Us"
    },
    {
        "link": "/contact",
        "label": "Contact Us"
    }]
    }/>
      <HeroImageRight/>
      <FeaturesCards/>
      <FooterSimple links={[
          {
              "link": "/",
              "label": "Privacy Policy"
          },
          {
              "link": "/imprint",
              "label": "Imprint"
          }
      ]}
          />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
