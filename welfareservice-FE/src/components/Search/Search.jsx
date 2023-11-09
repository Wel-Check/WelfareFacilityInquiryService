import React, { useState } from "react";
import iconSearch from "../../assets/icons/icon-search.svg";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  border: 4px solid ${(props) => props.theme.colors.grayColor};
  background-color: ${(props) => props.theme.colors.whiteColor};;
`;

const Input = styled.input`
  width: calc(100% - 100px);
  height: 70px;
  margin: 5px 2px; 
  outline: none;
  font-size: ${(props) => props.theme.fontSize.large};
`;

const Button = styled.button`
  width: 30px;
  height: 30px;
`;

const Icon = styled.img`
  width: 100%;
`;

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  }

  const handleSearchClick = () => {
    console.log(searchTerm)
    // onSearch(searchTerm);
    navigate(`/searchResult?search=${searchTerm}`);
  }

  return (
    <Wrapper>
      <Input
        type="text"
        placeholder="시설명을 입력해주세요"
        value={searchTerm}
        onChange={handleInputChange} 
      />
      <Button onClick={handleSearchClick}>
        <Icon src={iconSearch} alt="검색 아이콘" /> 
      </Button>
    </Wrapper>
  );
};

export default Search;
