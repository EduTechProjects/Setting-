import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import AnswerContainer from "./AnswerContainer";
import FeedbackContainer from "./FeedbackContainer";
import { ColorCode } from "./../../utils/Palette";
import { ReactComponent as ToggleIcon } from "./../../assets/toggle.svg";

const Container = styled.div`
  background-color: white;
  border-radius: 14px;
  width: 700px;
  flex-direction: column;
  justify-content: space-between;
  display: flex;
  padding-bottom: 3vh;
  margin-bottom: 2vh;
  justify-content: space-between;
  padding-left: 2vw;
  padding-right: 2vw;
  padding-top: 2vh;
`;

const ToggleIconstyled = styled(ToggleIcon)`
  width: 14px;
  height: 16px;
  transform: rotate(${(props) => props.rotate}deg);
  transition: transform 0.3s ease;
  margin-left: 10px;
`;

const A = styled.h2`
  margin: 0;
  cursor: pointer;
  color: ${(props) => props.color};
  font-size: 20px;
  font-weight: bold;
  align-self: flex-start;
`;

const AContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ToggleBox = ({ index, answer, feedback }) => {
  const [isToggleon, setIsToggleOn] = useState("true");
  const [rotate, setRotate] = useState(0);

  const ToggleHandler = () => {
    setIsToggleOn((preveToggle) => !preveToggle);
    isToggleon ? setRotate(-90) : setRotate(0);
  };

  return (
    <Container>
      <AContainer>
        <A color={ColorCode.SelectBlue}>A{index}</A>
        <A color={ColorCode.SelectBlue} onClick={ToggleHandler}>
          조회하기
          <ToggleIconstyled rotate={rotate} />
        </A>
      </AContainer>
      {!isToggleon && (
        <React.Fragment>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <AnswerContainer answer={answer} />
            <FeedbackContainer feedback={feedback} />
          </div>
        </React.Fragment>
      )}
    </Container>
  );
};

export default ToggleBox;
