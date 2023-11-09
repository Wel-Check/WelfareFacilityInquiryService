import React from "react";
import Navbar from "../components/Navbar/Navbar";
import ListHeader from "../components/FacilityList/ListHeader";
import ListItem from "../components/FacilityList/ListItem";

const Home = () => {
  return (
      <>
        <Navbar />
        <ListHeader />
        <ListItem />
      </>
  );
};

export default Home;