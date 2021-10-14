import React from 'react';
import theme from "../theme";
import {
    Container,
    Box,
    Flex,
    Grid,
    Text,
    Divider
} from "@chakra-ui/react"
import Bulletin from "../components/Bulletin"

const Home = () => {
    return (
        <Box bg="brand.200" boxSize="full">
            <Box w="100%" h="120px" bgGradient={["linear(to-b, brand.100, brand.200)"]} />
            <Container
                maxWidth="container.xl"
                h="550px"
                mt="10"
                border="solid"
                borderColor="brand.300"
                borderStyle="ridge"
                bgGradient={["linear(to-t, brand.100, brand.200 )"]}
                flexWrap="wrap"
            >
                <Text color="brand.300" fontSize="5xl" fontStyle="oblique" >New Bulletins:</Text>
                <Divider />
                <Bulletin />
                <Bulletin />
                <Bulletin />
            </Container>
            <Container
                maxWidth="container.xl"
                h="550px"
                mt="5"
                border="solid"
                borderColor="brand.300"
                borderStyle="ridge"
                bgGradient={["linear(to-t, brand.100, brand.200 )"]}
                flexWrap="wrap"
            >
                <Text color="brand.300" fontSize="5xl" fontStyle="oblique" >Most Reviewed:</Text>
                <Divider />
            </Container>
        </Box >
    )
}

export default Home;