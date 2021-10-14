import React from "react";
import {
    Grid,
    GridItem,
    Text
} from "@chakra-ui/react"
import { Link } from "react-router-dom"
import theme from "../../theme"
import { useQuery } from '@apollo/client'
import { QUERY_ALL_POSTS } from '../../utils/queries'

function Bulletin() {
    // const { loading, data } = useQuery(QUERY_ALL_POSTS)

    // const post = data?.post

    return (
        <Grid
            w="50%"
            h="120px"
            m="2"
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(5, 1fr)"
            gap={4}
            border="solid"
            borderWidth="3px"
            borderColor="brand.100"
            borderStyle="double"
            bg="brand.300"
            opacity="70%"
            _hover={{
                opacity: "100%"
            }}
        >
            <GridItem colSpan={3} rowSpan="2" m="2" border="solid" borderWidth="1px" borderColor="brand.500" >
                <Text fontSize="lg" color="brand.200" ></Text>
            </GridItem>
            <GridItem colSpan={2} m="2" border="solid" borderStyle="ridge" borderWidth="1px" borderColor="brand.500" >Some Name</GridItem>
            <GridItem colSpan={2} m="2" border="solid" borderWidth="1px" borderColor="brand.500">Some Date</GridItem>
        </Grid>
    )
}

export default Bulletin;