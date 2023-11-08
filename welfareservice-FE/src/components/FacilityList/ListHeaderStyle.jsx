import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.whiteColor};
  color: ${(props) => props.theme.colors.impactColor};
  font-size: ${(props) => props.theme.fontSize.xlarge};
  font-weight: 500;
`;

export const FacilityName = styled.span`
  width: 20%;
  margin-left: 10px;
`;

export const FacilityType = styled.span`
  width: 20%;
  margin-left: 5px;
`;

export const FacilityNumber = styled.span`
  width: 20%;
  margin-left: 5px;
`;

export const FacilityAddress = styled.span`
  width: 40%;
  margin-left: 5px;
`;