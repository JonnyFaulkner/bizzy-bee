import React from "react";
import {
    Grid,
    GridItem
} from "@chakra-ui/react"
import { Link } from "react-router-dom"
import theme from "../../theme"

function Bulletin() {
    return (
        <Link>
            <Grid
                w="150%"
                h="150px"
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(5, 1fr)"
                gap={4}
                border="solid"
                borderWidth="thin"
                borderColor="brand.500"
                bgGradient="linear(to-r, brand.100, brand.200"
            >
                <GridItem colSpan={3} m="4" >Some text</GridItem>
                <GridItem colSpan={2} m="4" >Some Name</GridItem>
                <GridItem colSpan={3} m="4" />
                <GridItem colSpan={2} m="4" >Some Date</GridItem>
            </Grid>
        </Link >
    )
}

export default Bulletin;