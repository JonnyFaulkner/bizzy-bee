import React, { useState, useEffect } from "react";
import Payments from "../components/Stripe/Payments";

const Profile = () => {
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    fetch("{USER_ENDPOINT}")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setUserInfo(data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  // if (!userInfo) return <h4>Loading...</h4>;

  return (
    <div>
      {/* {userInfo} */}
      <Payments />
    </div>
  );
};

export default Profile;
