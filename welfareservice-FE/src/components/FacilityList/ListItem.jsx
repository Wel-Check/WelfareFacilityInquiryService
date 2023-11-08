import React from "react";
import {
  Wrapper,
  FacilityName,
  FacilityType,
  FacilityNumber,
  FacilityAddress
} from "./ListItemStyle"

const ListItem = () => {
  return (
    <Wrapper>
      <FacilityName>북구장애인종합복지관</FacilityName>
      <FacilityType>장애인종합복지관</FacilityType>
      <FacilityNumber>051-362-7755</FacilityNumber>
      <FacilityAddress>부산광역시 북구 금곡동 54-3</FacilityAddress>
    </Wrapper>
  );
};

export default ListItem;
