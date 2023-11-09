import React from "react";
import { useParams } from "react-router";
import axios from "axios";
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

  // 서버에서 데이터 가져오는 로직
  const [facilities, setFacilities] = React.useState([]);

  React.useEffect(() => {
    // 데이터 가져오기
    axios.get("http://localhost:8080/welfare/facilitie/facilities")
      .then(response => {
        // 성공적으로 데이터를 가져왔다면, 이를 facilities 상태에 저장합니다.
        setFacilities(response.data);
      })
      .catch(error => {
        console.error('Failed to fetch facilities:', error);
      });
  }, []);
  
  return (
      <>
        <Navbar />
        <Title>{title}</Title>
        <ListHeader />
        {facilities.map((facility) => (
        <ListItem facility={facility} key={facility.fno} />
      ))}
      </>
  );
};

export default FacilityList;