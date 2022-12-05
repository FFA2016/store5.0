import axios from 'axios';
import React from "react";
import {HeaderSimple} from "../components/navbar";
import black from "../images/black.jpg";
import {FooterSimple} from "../components/footer";

export default function Legal_notice() {
    const [data, setData] = React.useState<any>({});

    /*
    React.useEffect(() => {
        axios
            .get("http://localhost:3001/products?id=1")
            .then(({data: responseData}) => {setData(responseData)})
        axios
            .get("http://localhost:3001/products?id=2")
            .then(({data: responseData}) => {setData(responseData)})
    }, [])
    */

    /*
    let one = "http://localhost:3001/products?id=1"
    let two = "http://localhost:3001/products?id=2"
    let three = "https://api.storyblok.com/v1/cdn/stories/vue?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt"

    const requestOne = axios.get(one);
    const requestTwo = axios.get(two);
    const requestThree = axios.get(three);

    axios.all([requestOne, requestTwo, requestThree]).then(axios.spread((...responses) => {
        const responseOne = responses[0]
        const responseTwo = responses[1]
        const responesThree = responses[2]
        // use/access the results

        console.log(responses[0].data)
    })).catch(errors => {
        // react on errors.
    })
*/


    return(
        <>
            <HeaderSimple links={[
                {link: '/', label: 'Home'},
                {link: '/products', label: 'Products'},

            ]}
            />
            <img src={black} alt={'randomImage'} width={'100%'} height={'550px'} style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }} />
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