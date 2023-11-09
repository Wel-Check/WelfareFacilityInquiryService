import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar/Navbar";
import ListHeader from "../components/FacilityList/ListHeader";
import ListItem from "../components/FacilityList/ListItem";
import listdata from "../components/FacilityList/listdata.json";

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
`;

export const PageBtn = styled.button`
  margin: 0 5px;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.impactColor};

  &:hover {
    background-color: ${(props) => props.theme.colors.whiteColor};
  }
`;

const SearchResult = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get('search');

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(
      listdata.filter((item) => {
        return item.facility_name.includes(searchTerm);
      })
    );
  }, [searchTerm]);

  return (
    <>
      <Navbar />
      <ListHeader />
      {
        data
          .slice((currentPage-1) * itemsPerPage, currentPage * itemsPerPage)
          .map((item, index) => (
            <ListItem facility={item} key={index} />
          ))
      }
      <Pagination>
        {Array.from({length: Math.ceil(data.length / itemsPerPage)}, (_, i) => i + 1).map(number => (
          <PageBtn key={number} onClick={() => setCurrentPage(number)}>
            {number}
          </PageBtn>
        ))}
      </Pagination>
    </>
  );
};

export default SearchResult;
