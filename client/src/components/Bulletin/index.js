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
    const { loading, data } = useQuery(QUERY_ALL_POSTS)

    const post = data

    console.log(post)
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
            bg="brand.200"

        >
            <GridItem colSpan={3} rowSpan="2" m="2"  >
                <Text fontSize="lg" color="brand.300" >This is a Bulletin</Text>
            </GridItem>
            <GridItem colSpan={2} m="2" ><Text fontSize="lg" color="brand.300">Some Name</Text></GridItem>
            <GridItem colSpan={2} m="2" ><Text fontSize="lg" color="brand.300">Created at: 10/13/14</Text></GridItem>
        </Grid>
    )
}

export default Bulletin;