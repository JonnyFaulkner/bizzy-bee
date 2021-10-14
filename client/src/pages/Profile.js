import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import Payments from "../components/Stripe/Payments";
import { QUERY_ME } from "../utils/queries";
import { Box, Container, Text, Divider } from "@chakra-ui/react";

const Profile = () => {
  const { loading, error, data } = useQuery(QUERY_ME);

  if (loading) return <h4>Loading...</h4>;
  if (error) return `Error: ${error.message}`;

  return (
    <div className="Profile">
      <Box bg="brand.200" boxSize="full">
        <Box
          w="100%"
          h="120px"
          bgGradient={["linear(to-b, brand.100, brand.200)"]}
        />
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
          <Text color="brand.300" fontSize="5xl" fontStyle="oblique">
            Account Info
          </Text>
          <Divider />
          <h2>Username: {data.me.username}</h2>
          <h2>Email: {data.me.email}</h2>
          <h3>
            Posts: {data.me.posts.length > 0 ? data.me.posts : "No posts yet"}
          </h3>
          <Payments />
        </Container>
      </Box>
    </div>
  );
};

export default Profile;
