import React from "react";
import styled from "styled-components"
import Navbar from "../components/Navbar/Navbar";
import Search from "../components/Search/Search";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const NavContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
`;

const Home = () => {
  return (
    <Wrapper>
      <NavContainer>
        <Navbar />
      </NavContainer>
      <Search />
    </Wrapper>
  );
};

export default Home;