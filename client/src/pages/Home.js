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
import PostForm from '../components/Cards';
import { useQuery } from '@apollo/client';
import { QUERY_POSTS, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';
import PostList from '../components/Posts.js';


const Home = () => {

    const { loading, data } = useQuery(QUERY_POSTS);
    const { data: userData } = useQuery(QUERY_ME);

    const posts = data?.posts || []

    const loggedIn = Auth.loggedIn();

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
                <div >
                    {loggedIn && (
                        <div >
                            <PostForm />
                        </div>
                    )}

                </div>
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
                <Bulletin />
                <Bulletin />
            </Container>


        </Box >
    )
}

export default Home;