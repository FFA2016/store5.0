import React from 'react';
import logo from '../images/logo.png';
import { useState } from 'react';
import { createStyles, Header, Container, Group, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { BsCart2 } from 'react-icons/bs';
import {useWindowScroll} from "@mantine/hooks";



interface HeaderSimpleProps {
    links: { link: string; label: string }[];
}

export function HeaderSimple({ links }: HeaderSimpleProps) {
    const [scroll, scrollTo] = useWindowScroll();
    const useStyles = createStyles((theme) => ({
        header: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '100%',
            '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.7)'
            }
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


    }));
    const [opened, { toggle }] = useDisclosure(false);
    const [active, setActive] = useState(links[0].link);
    const { classes, cx } = useStyles();

    const items = links.map((link) => (
        <a
            key={link.label}
            href={link.link}
            className={cx(classes.link, { [classes.linkActive]: active === link.link })}
            onClick={(event) => {
                event.preventDefault();
                setActive(link.link);
            }}
        >
            {link.label}
        </a>
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
            <img src={'https://source.unsplash.com/random'} alt={'randomImage'} width={'100%'} height={'550px'} style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }} />
        </>
    );
}