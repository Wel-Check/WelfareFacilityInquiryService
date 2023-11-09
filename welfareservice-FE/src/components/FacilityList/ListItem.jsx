import React from "react";
import {
  Wrapper,
  FacilityName,
  FacilityType,
  FacilityNumber,
  FacilityAddress
} from "./ListItemStyle"

const ListItem = ({ facility }) => {
  return (
    <Wrapper>
      <FacilityName>{facility.facility_name}</FacilityName>
      <FacilityType>{facility.facility_type}</FacilityType>
      <FacilityNumber>{facility.tel}</FacilityNumber>
      <FacilityAddress>{facility.road_address}</FacilityAddress>
    </Wrapper>
  );
};

export default ListItem;
