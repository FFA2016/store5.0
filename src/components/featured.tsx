import React from "react";
import {
    createStyles,
    Badge,
    Group,
    Title,
    Text,
    Card,
    SimpleGrid,
    Container, Grid,
} from '@mantine/core';

const useStyles = createStyles((theme) => ({
    description: {
        '&::after': {
            content: '""',
            display: 'block',
            backgroundColor: theme.fn.primaryColor(),
            width: 100,
            height: 5,
            borderRadius: '5px',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: '50px'
        },
    },
}));

export function FeaturesCards() {
    const { classes, theme } = useStyles();
    return (
        <Container size="lg" py="xl">

            <Title order={2} align="center" mt="sm">
                Featured Products
            </Title>

            <Text color="dimmed" className={classes.description} align="center" mt="sm"/>

            <Grid>
                <Grid.Col span={4}>
                    <a href={"/"}><img src={"https://infallible-goodall.185-236-11-136.plesk.page/images/category-1.jpg"} width={'365px'}/></a>
                </Grid.Col>
                <Grid.Col span={4}>
                    <a href={"/"}><img src={"https://infallible-goodall.185-236-11-136.plesk.page/images/category-1.jpg"} width={'365px'}/></a>
                </Grid.Col>
                <Grid.Col span={4}>
                    <a href={"/"}><img src={"https://infallible-goodall.185-236-11-136.plesk.page/images/category-1.jpg"} width={'365px'}/></a>
                </Grid.Col>
            </Grid>

        </Container>
    );
}