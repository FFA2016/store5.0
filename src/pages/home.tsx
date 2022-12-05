import {HeaderSimple} from "../components/navbar";
import {HeroImageRight} from "../components/welcome-head";
import {FeaturesCards} from "../components/featured";
import {FooterSimple} from "../components/footer";
import React from "react";
import {Outlet} from "react-router-dom";
import black from "../images/black.jpg";

export default function Home() {
    return (
        <>
            <HeaderSimple links={[
                {link: '/', label: 'Home'},
                {link: '/products', label: 'Products'},

            ]}

            />
            <img src={black} alt={'randomImage'} width={'100%'} height={'550px'} style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }} />
            <HeroImageRight/>
            <FeaturesCards/>
            <FooterSimple links={[
                {
                    "link": "/privacy",
                    "label": "Privacy Policy"
                },
                {
                    "link": "/imprint",
                    "label": "Legal Notice"
                }
            ]}/>
            <div style={
                {
                    marginTop: '100px',
                    marginBottom: '50px',
                }
            }>

            </div>
            <Outlet/>
    </>
)
}