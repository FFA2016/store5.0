import React from 'react';
import {HeaderSimple} from "../components/navbar";
import {GridAsymmetrical} from "../components/grid_products";

export default function products() {
    return(
        <div>
            <h1>Products</h1>
            <HeaderSimple links={[
                {link: '/', label: 'Home'},
                {link: '/products', label: 'Products'},

            ]}
            />
            <GridAsymmetrical/>
        </div>
    )
}