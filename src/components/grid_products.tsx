import { Grid, Skeleton, Container } from '@mantine/core';
import basic_hoodie from "../images/Basic_Collection/Basic_Hoodie.png";

const child = <Skeleton height={140} radius="md" animate={false} />;

export function GridAsymmetrical() {
    return (
        <Container my="md">
            <Grid>
                <Grid.Col xs={4}><img src={basic_hoodie} width={"250px"} alt={"Basic Hoodie"}/> </Grid.Col>
                <Grid.Col xs={8}>{child}</Grid.Col>
                <Grid.Col xs={8}>{child}</Grid.Col>
                <Grid.Col xs={4}>{child}</Grid.Col>
                <Grid.Col xs={3}>{child}</Grid.Col>
                <Grid.Col xs={3}>{child}</Grid.Col>
                <Grid.Col xs={6}>{child}</Grid.Col>
            </Grid>
        </Container>
    );
}