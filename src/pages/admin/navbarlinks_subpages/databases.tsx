import react from 'react';
import {HeaderSimple} from "../../../components/navbar";
import {FooterSimple} from "../../../components/footer";
import DoubleNavbar from "../../../components/admin/navbar_admin";

export default function Databases_subpage_nav() {
    return (
    <>
        <HeaderSimple links={[
            {link: '/', label: 'Home'},
            {link: '/products', label: 'Products'},

        ]}
        />
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
        <DoubleNavbar/>
    </>
    )
}