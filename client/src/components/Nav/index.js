import React from "react";
import Auth from "../../utils/auth"
import { Box, Text } from "@chakra-ui/react"
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
            <Link to="/">
                <Text fontSize="6xl" >Bizzy Bee 🐝</Text>
            </Link>
        </Box>
    )
}

export default Nav;