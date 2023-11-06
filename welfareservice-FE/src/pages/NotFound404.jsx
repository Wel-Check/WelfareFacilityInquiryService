import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: fit-content;
  margin: 300px auto;
  color: ${(props) => props.theme.colors.impactColor};
`;

const NotFound = styled.h1`
  width: fit-content;
  margin: 0 auto;
  font-size: 200px;
  font-weight: 700;
`;

const NotFoundText = styled.p`
  width: fit-content;
  margin: 0 auto;
  font-size: 32px;
  font-weight: 600;
`;

const BackPage = styled.button`
  margin: 18px auto;
  padding: 18px 102px; 
  border-radius:30px;
  font-size: ${(props) => props.theme.fontSize.xlarge};
  color: ${(props) => props.theme.colors.whiteColor};
  background-color: ${(props) => props.theme.colors.impactColor};
`;

const NotFound404 = () => {
  return (
    <Wrapper>
      <NotFound>404</NotFound>
        <NotFoundText>페이지를 찾을 수 없음</NotFoundText>
        <BackPage onClick={() => window.history.back()}>이전 페이지로 돌아가기</BackPage>
    </Wrapper>
  );
};

export default NotFound404;