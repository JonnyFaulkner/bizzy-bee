import React from "react";
import Auth from "../../utils/auth"
import { Box, Text, Input, Flex, Spacer, Grid } from "@chakra-ui/react"
import { Link } from "react-router-dom"

function Nav() {

    // function showNavigation() {
    //     if (Auth.loggedIn()) {
    //         return (

    //         )
    //     }
    // }

    return (

        <Box w="100%" h="100px" bgGradient="linear(to-r, brand.100, brand.200, brand.100)">
            <Grid templateColumns="repeat(3, 1fr)" gap={8}>
                <Box>
                    <Link to="/">
                        <Text fontSize="6xl" >Bizzy Bee 🐝</Text>
                    </Link>
                </Box>
                <Box display="flex" alignItems="center">
                    <Input placeholder="Search" size="lg" maxWidth="100%" bg="brand.300" />
                </Box>
                <Box>

                </Box>
            </Grid>
        </Box>

    )
}

export default Nav;