import React from "react";
import { useQuery } from "@apollo/client";
import Payments from "../components/Stripe/Payments";
import { QUERY_ME } from "../utils/queries";

const Profile = () => {
  const { loading, error, data } = useQuery(QUERY_ME);

  if (loading) return <h4>Loading...</h4>;
  if (error) return `Error: ${error.message}`;

  console.log(data);

  return (
    <div>
      <Payments />
    </div>
  );
};

export default Profile;
