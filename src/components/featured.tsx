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
import basic_hoodie from "../images/Basic_Collection/Basic_Hoodie.png";
import basic_tshirt from "../images/Basic_Collection/Basic Tshirt.png";
import zip_hoodie from "../images/Basic_Collection/Zip Hoodie Basic.png";


export function FeaturesCards() {
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
                marginBottom: '-250px'
            },
        },
    }));

    const { classes, theme } = useStyles();
    return (
        <Container size="lg" py="xl">

            <Title order={2} align="center" mt="sm">
                Featured Products
            </Title>

            <Text color="dimmed" className={classes.description} align="center" mt="sm"/>

            <Grid>
                <Grid.Col span={4}>
                    <a href={"/"}><img src={basic_hoodie} width={'365px'} alt={""}  style={{
                        aspectRatio: '1/3',
                        objectFit: 'contain',
                        mixBlendMode: 'color-burn',
                    }}/></a>
                </Grid.Col>
                <Grid.Col span={4}>
                    <a href={"/"}><img src={basic_tshirt} width={'365px'}  style={{
                        aspectRatio: '1/3',
                        objectFit: 'contain',
                        mixBlendMode: 'color-burn',
                    }}/></a>
                </Grid.Col>
                <Grid.Col span={4}>
                    <a href={"/"}><img src={zip_hoodie} width={'365px'}  style={{
                        aspectRatio: '1/3',
                        objectFit: 'contain',
                        mixBlendMode: 'color-burn',
                    }}/></a>
                </Grid.Col>
            </Grid>

        </Container>
    );
}