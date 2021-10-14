import React from "react";
import Auth from "../../utils/auth";
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
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Nav() {
    const logout = event => {
        event.preventDefault()
        Auth.logout();
    }

    function showNavigation() {
        if (Auth.loggedIn()) {
            return (
                <Menu>
                    <MenuButton as={Avatar} mr="4" bg="brand.200" color="brand.100" />
                    <MenuList bg="brand.100" borderColor="brand.200">
                        <MenuItem><Link as={Link} to="/settings">Settings</Link></MenuItem>
                        <MenuItem><Link as={Link} to="/profile">Profile</Link></MenuItem>
                        <Button color="brand.100" bg="brand.200" ml="2" onClick={logout} >Logout</Button>
                    </MenuList>
                </Menu>
            )
        } else {
            return (
                <Box>
                    <Link as={Link} to="/login" >
                        <Button color="brand.100" bg="brand.200" mr="4">Login</Button>
                    </Link>
                    <Link as={Link} to="/signup">
                        <Button color="brand.100" bg="brand.200" mr="2">Signup</Button>
                    </Link>
                </Box>
            )
        }
    }

    return (

        <Box w="100%" h="100px" bg="brand.100">
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
                <Spacer />
                <Box display="flex" alignItems="center">
                    {showNavigation()}
                </Box>
            </Flex>
        </Box>
    );
}


export default Nav;
