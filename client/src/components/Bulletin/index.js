import React from "react";
import {
    Grid,
    GridItem,
    Text
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
                bg="brand.100"
            >
                <GridItem colSpan={3} rowSpan="2" mr="2" ml="2" >
                    <Text fontSize="lg">Title</Text>
                </GridItem>
                <GridItem colSpan={2} mb="4" border="solid" >Some Name</GridItem>
                <GridItem colSpan={2} mb="4" >Some Date</GridItem>
            </Grid>
        </Link >
    )
}

export default Bulletin;