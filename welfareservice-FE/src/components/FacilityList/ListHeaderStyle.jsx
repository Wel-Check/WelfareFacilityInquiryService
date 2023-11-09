import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  margin-top: 30px;
  background-color: ${(props) => props.theme.colors.whiteColor};
  color: ${(props) => props.theme.colors.impactColor};
  font-size: ${(props) => props.theme.fontSize.xlarge};
  font-weight: 500;
`;

export const FacilityName = styled.span`
  width: 25%;
  margin-left: 40px;
`;

export const FacilityType = styled.span`
  width: 25%;
  margin-left: 5px;
`;

export const FacilityNumber = styled.span`
  width: 15%;
  margin-left: 5px;
`;

export const FacilityAddress = styled.span`
  width: 45%;
  margin-left: 5px;
`;