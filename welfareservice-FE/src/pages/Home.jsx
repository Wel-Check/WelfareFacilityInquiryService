import React from "react";
import styled from "styled-components"
import Navbar from "../components/Navbar/Navbar";
import Search from "../components/Search/Search";

export const SearchContainer = styled.div`
  margin-top: 40%;
`;

const Home = () => {
  return (
    <>
      <Navbar />
      <SearchContainer>
        <Search />
      </SearchContainer>
    </>
  );
};

export default Home;