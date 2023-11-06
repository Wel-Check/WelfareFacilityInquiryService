import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.mainColor};
`;

const BasicContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  min-height: 100vh;
  height: 100%;
`;

const Screen = styled.div`
  padding: 20px;
`;

const BasicLayout = ({ children }) => {
  return (
    <Wrapper>
      <BasicContainer>
        <Screen>{children}</Screen>
      </BasicContainer>
    </Wrapper>
  );
};

export default BasicLayout;
