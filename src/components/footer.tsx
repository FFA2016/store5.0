import React from 'react';
import { createStyles, Container, Group, Anchor } from '@mantine/core';
import logo from '../images/logo.png';
import {useNavigate} from "react-router-dom";
import {useWindowScroll} from "@mantine/hooks";

interface FooterSimpleProps {
    links: { link: string; label: string }[];
}

export function FooterSimple({ links }: FooterSimpleProps) {
    const [scroll] = useWindowScroll();
    const useStyles = createStyles((theme) => ({
        footer: {
            marginTop: 120,
            borderTop: `1px solid ${
                theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
            }`,
            position: 'fixed',
            bottom: 0,
            width: '100%',
            scrollBehavior: 'smooth',
            backgroundColor: scroll.y > 50 ? 'rgba(255, 255, 255, 0.7)' : 'rgba(255, 255, 255, 0.3)',
            transitionDuration: '0.5s',
        },

        inner: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: theme.spacing.xl,
            paddingBottom: theme.spacing.xl,

            [theme.fn.smallerThan('xs')]: {
                flexDirection: 'column',
            },
        },

        links: {
            [theme.fn.smallerThan('xs')]: {
                marginTop: theme.spacing.md,
            },
        },
    }));
    const { classes } = useStyles();
    const navigate = useNavigate();
    const items = links.map((link) => (
        <Anchor<'a'>
            color="dimmed"
            key={link.label}
            onClick={(event) => {
                event.preventDefault();
                navigate(link.link);
            }}
            size="sm"
        >

            {link.label}
        </Anchor>
    ));

    return (
        <div className={classes.footer}>
            <Container className={classes.inner}>
                <img src={logo} alt="Haine logo" width={'150px'}/>
                <Group className={classes.links}>{items}</Group>
            </Container>
        </div>
    );
}