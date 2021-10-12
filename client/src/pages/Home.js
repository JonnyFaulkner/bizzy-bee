import React from 'react';
import theme from "../theme";
import {
    Container,
    Box
} from "@chakra-ui/react"
import Bulletin from "../components/Bulletin"

const Home = () => {
    return (
        <Container maxW="container.xl" centerContent mt="5" >
            <Bulletin />
        </Container>
    )
}

export default Home;