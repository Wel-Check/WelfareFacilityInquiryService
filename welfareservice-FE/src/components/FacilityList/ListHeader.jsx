import React from "react";
import {
  Wrapper,
  FacilityName,
  FacilityType,
  FacilityNumber,
  FacilityAddress
} from "./ListHeaderStyle"

const ListHeader = () => {
  return (
    <Wrapper>
      <FacilityName>시설명</FacilityName>
      <FacilityType>시설유형</FacilityType>
      <FacilityNumber>전화번호</FacilityNumber>
      <FacilityAddress>주소</FacilityAddress>
    </Wrapper>
  );
};

export default ListHeader;
