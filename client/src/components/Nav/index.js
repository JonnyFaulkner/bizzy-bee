import React from "react";
import Auth from "../../utils/auth"
import {
    Box,
    Text,
    Input,
    Flex,
    Spacer,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Avatar,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
} from "@chakra-ui/react"
import { Link } from "react-router-dom"
import Home from "../../pages/Home"

function Nav() {

    function showNavigation() {

        if (Auth.loggedIn()) {
            return (
                <Menu>
                    <MenuButton as={Avatar} mr="4" bg="brand.200" />
                    <MenuList bg="brand.500">
                        <MenuItem>Settings</MenuItem>
                        <MenuItem>Account</MenuItem>
                        <Button color="brand.100" bg="brand.200" ml="2" >Logout</Button>
                    </MenuList>
                </Menu>
            )
        } else {
            return (
                <Box>
                    <Button color="brand.100" bg="brand.200" mr="4" to="/login">Login</Button>

                    <Button color="brand.100" bg="brand.200" mr="2" to="/signup">Signup</Button>
                </Box>
            )
        }
    }

    return (

        <Box w="100%" h="100px" bgGradient="linear(to-r, brand.100, brand.200, brand.100)">
            <Flex>
                <Box>
                    <Link to="/">
                        <Text fontSize="6xl" >Bizzy Bee 🐝</Text>
                    </Link>
                </Box>
                <Box display="flex" ml="15" alignItems="center">
                    <Input placeholder="Search" size="lg" maxWidth="100%" bg="brand.300" />
                </Box>
                <Spacer />
                <Box display="flex" alignItems="center">
                    <Breadcrumb separator='' color="brand.300" fontSize="3xl">
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem>
                            <BreadcrumbLink href="#">About</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem>
                            <BreadcrumbLink href="#">Contact</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </Box>
                <Spacer />
                <Box display="flex" alignItems="center">
                    {showNavigation()}
                </Box>
            </Flex>
        </Box>

    )
}

export default Nav;