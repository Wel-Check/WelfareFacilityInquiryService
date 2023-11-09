import React from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import Navbar from "../components/Navbar/Navbar";
import ListHeader from "../components/FacilityList/ListHeader";
import ListItem from "../components/FacilityList/ListItem";

export const Title = styled.h3`
  margin: 35px 10px 20px 0;
  font-size: ${(props) => props.theme.fontSize.xlarge};
`;

const FacilityList = () => {
  let { title } = useParams();
  
  return (
      <>
        <Navbar />
        <Title>{title}</Title>
        <ListHeader />
        <ListItem />
      </>
  );
};

export default FacilityList;