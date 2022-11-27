import {HeaderSimple} from "../components/navbar";
import {HeroImageRight} from "../components/welcome-head";
import {FeaturesCards} from "../components/featured";
import {FooterSimple} from "../components/footer";
import React from "react";
import {Outlet} from "react-router-dom";

export default function App() {
    return (
        <>
            <HeaderSimple links={[
                {link: '/', label: 'Home'},
                {link: '/products', label: 'Products'},

            ]}

            />
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
]}/>
            <Outlet/>
    </>
)
}