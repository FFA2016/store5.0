import React from 'react';
import {HeaderSimple} from "../components/navbar";
import {GridAsymmetrical} from "../components/grid_products";
import {FooterSimple} from "../components/footer";


export default function products() {

    return(
        <>
            <h1 style={
                {
                    textAlign: 'center',
                    marginTop: '100px',
                    marginBottom: '50px',
                    fontSize: '50px',
                    fontWeight: 'bold',

                }
            }>Products</h1>
            <HeaderSimple links={[
                {link: '/', label: 'Home'},
                {link: '/products', label: 'Products'},

            ]}
            />
            <GridAsymmetrical/>
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
        </>
    )
}