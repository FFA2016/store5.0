import React, {useState} from 'react';
import logo from '../images/logo.png';
import { createStyles, Header, Container, Group, Burger, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { BsCart2 } from 'react-icons/bs';
import {useWindowScroll} from "@mantine/hooks";
import black from "../images/black.jpg";
import {useNavigate} from "react-router-dom";

interface HeaderSimpleProps {
    links: { link: string; label: string }[];
}

export function HeaderSimple({ links }: HeaderSimpleProps) {
    const [scroll] = useWindowScroll();
    const useStyles = createStyles((theme) => ({
        header: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '100%',
        },

        links: {
            [theme.fn.smallerThan('xs')]: {
                display: 'none',
            },
        },

        burger: {
            [theme.fn.largerThan('xs')]: {
                display: 'none',
            },
        },

        link: {
            display: 'block',
            lineHeight: 1,
            padding: '8px 12px',
            borderRadius: theme.radius.sm,
            textDecoration: 'none',
            color: '#262626',
            fontSize: theme.fontSizes.sm,
            fontWeight: 500,

            '&:hover': {
                backgroundColor: '#e8e8e8',
            },
        },

        linkActive: {
            '&, &:hover': {
                backgroundColor: '#cbcbcb',
                color: '#262626',
            },
        },

        null: {

        }

    }));
    const [opened, { toggle }] = useDisclosure(false);
    const [active, setActive] = useState("");
    const { classes } = useStyles();
    const navigate = useNavigate(); //Die Const muss imported sein sonnst nichts gehen lulw

    async function setActiveURL(url: string){
       setActive(url);
       return url;
    }

    // das einzige grad ist noch, dass er auch bei home den link "products" als aktiven link markiert
    console.log(links)
    const items = links.map((link) => (
        <Button variant="light" radius="xs" size="xs"
            key={link.label}
                styles={(theme) => ({
                    root: {
                        display: 'block',
                        lineHeight: 1,
                        padding: '8px 12px',
                        borderRadius: theme.radius.sm,
                        textDecoration: 'none',
                        color: '#262626',
                        fontSize: theme.fontSizes.sm,
                        fontWeight: 500,

                        '&:hover': {
                            backgroundColor: '#e8e8e8',
                        }
                    },
                })}
            className={active === link.link ? classes.linkActive : classes.null}
            onClick={(event) => {
                event.preventDefault();
                setActiveURL(link.link).then(r => navigate(r))
            }}
        >
            {link.label}
        </Button>
    ));

    return (
        <>
            <Header height={60} mb={120} sx={
                {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    scrollBehavior: 'smooth',
                    backgroundColor: scroll.y > 150 ? 'rgba(255, 255, 255, 0.7)' : 'rgba(255, 255, 255, 0.3)',
                    transitionDuration: '0.5s',


                }
            }>
                <Container className={classes.header}>
                    <a href="/"><img src={logo} alt={'logo'} width={'150px'} /></a>

                    <Group spacing={5} className={classes.links}>

                        {items}

                        <img src={'https://avatars.githubusercontent.com/u/103008?v=4'} alt={'Profilepicture'} width={'35px'} height={'35px'} style={{ borderRadius: '50%' , marginLeft: '20px', border: '1px solid black'}} />
                        <a href={'/cart'}><BsCart2 size={'1.8em'} style={{marginLeft: '20px'}} color={'black'}/></a>
                    </Group>

                    <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
                </Container>
            </Header>
            <img src={black} alt={'randomImage'} width={'100%'} height={'550px'} style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }} />
        </>
    );
}