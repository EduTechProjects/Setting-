import React from "react";
import { ReactComponent as Loadingimage } from "../assets/Loading2.svg";
import styled from "styled-components";

const LoadingWrapper = styled.div`
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 16vh;
  height: 100vh;
`;

const StyledLoadingIcon = styled(Loadingimage)`
  width: 240px;
  height: 240px;
`;

const Title = styled.div`
  font-size: 32px;
  font-weight: bold;
  padding-top: 20px;
`;

const Loading = () => {
  return (
    <LoadingWrapper>
      <StyledLoadingIcon />
      <Title>결과 분석중입니다...</Title>
    </LoadingWrapper>
  );
};

export default Loading;
