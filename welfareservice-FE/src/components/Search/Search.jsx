import React from "react";
import iconSearch from "../../assets/icons/icon-search.svg";
import styled from "styled-components";

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

const Search = () => {
  return (
    <Wrapper>
      <Input type="text" placeholder="시설명을 입력해주세요" />
      <Button>
        <Icon src={iconSearch} alt="검색 아이콘" /> 
      </Button>
    </Wrapper>
  );
};

export default Search;
