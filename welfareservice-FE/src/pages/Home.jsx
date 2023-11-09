import React, { useState } from "react";
import styled from "styled-components"
import Navbar from "../components/Navbar/Navbar";
import Search from "../components/Search/Search";

export const SearchContainer = styled.div`
  margin-top: 300px;
`;

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <>
      <Navbar />
      <SearchContainer>
        <Search onSearch={handleSearch} />
      </SearchContainer>
    </>
  );
};

export default Home;