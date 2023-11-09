import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

const FacilityList = () => {
  const { facilityType } = useParams();
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  useEffect(() => {
    setData(
      listdata.filter((item) => {
        if (facilityType === "기타시설") {
          return (
            !item.facility_type.includes("거주시설") &&
            !item.facility_type.includes("재활시설") &&
            !item.facility_type.includes("보호")
          );
        }
        return item.facility_type.includes(facilityType);
      })
    );
  }, [facilityType]);

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

export default FacilityList;
