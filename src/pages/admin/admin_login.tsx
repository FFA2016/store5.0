import React from 'react';
import {HeaderSimple} from "../../components/navbar";
import {FooterSimple} from "../../components/footer";
import DoubleNavbar from "../../components/admin/navbar_admin";
import {AuthenticationImage} from "../../components/admin/admin_login_form";

export default function Admin_login() {
 return (
     <>
         <HeaderSimple links={[
             {link: '/', label: 'Home'},
             {link: '/products', label: 'Products'},

         ]}
         />
         <AuthenticationImage/>
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
     </>
 )
}
