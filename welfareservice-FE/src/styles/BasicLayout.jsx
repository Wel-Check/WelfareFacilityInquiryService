import React from "react";
import styled from "styled-components";

const BasicContainer = styled.div`
  margin: 0 auto;
  // 웹페이지의 최대 가로 길이 설정
  max-width: 1200px;
  min-height: 100vh;
  height: 100%;
  background-color: ${(props) => props.theme.colors.mainColor};
`;

const Screen = styled.div`
  padding: 20px;
`;

const BasicLayout = ({ children }) => {
  return (
    <BasicContainer>
      <Screen>{children}</Screen>
    </BasicContainer>
  );
};

export default BasicLayout;
