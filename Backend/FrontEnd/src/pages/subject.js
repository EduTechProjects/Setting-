import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ColorCode from "../utils/Palette";
import { ReactComponent as Caution } from "../assets/caution.svg";
import axios from "axios";
import Button from "../components/Common/Button";

const Subjectcontainer = styled.div`
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 32px;
  font-weight: bold;
  padding-top: 15vh;
  padding-bottom: 5vh;
`;

const Document = styled.div`
  font-size: 16px;
  background-color: white;
  width: 37vw;
  justify-content: center;
  align-items: center;
  border-radius: 28px;
  margin-bottom: 5vh;
  padding-bottom: 4vh;
`;

const Cautionbox = styled.div`
  display: inline-flex;
  font-size: 14px;
  color: gray;
`;
const SubjectButtons = styled.div`
  display: flex;
  padding-top: 5vh;
`;

const SubjectTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  padding-top: 5vh;
`;

const DocumentBox = styled.div`
  width: 80%;
  text-align: justify;
  text-align-last: left;
  margin: 0 auto;
  line-height: 170%;
`;

const CautionIcon = styled(Caution)`
  width: 15px;
  height: 15px;
`;

const BtnContainer = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
  margin-left: -30px;
`;

const Subject = () => {
  const navigate = useNavigate();
  const [selectTopic, setSelectTopic] = useState(null);

  const handleSubButtonClick = (index) => {
    setSelectTopic(index);
  };

  const handleStartButtonClick = () => {
    if (selectTopic !== null) {
      let topic;
      if (selectTopic === 1) {
        topic = "food";
      } else if (selectTopic === 2) {
        topic = "travel";
      } else if (selectTopic === 3) {
        topic = "family";
      }
      // 선택한
      navigate(`/speak/${topic}`);
    } else {
      alert("토픽을 설정해주세요.");
    }
  };

  return (
    <>
      <Subjectcontainer>
        <Title style={{ color: "black" }}>
          <b style={{ color: ColorCode.SelectBlue }}>토킹</b> 메이트 시작하기
        </Title>
        <Document>
          <p style={{ fontWeight: "bold", fontSize: "24px" }}>사용 설명서</p>
          <DocumentBox>
            <p>
              1. 아래 3개의 주제 중 하나를 골라주세요.
              <br />
              2. 선택한 주제와 관련된 질문 3개가 제공됩니다.
              <br />
              3. 각 질문에 영어로 답변해주세요. (제한 시간 2분)
              <br />
              4. START 버튼을 누른 뒤 답변을 시작하고, 답변이 끝나면 END 버튼을
              눌러주세요.
              <br />
              5. 모든 질문에 대한 답변이 끝나면 피드백이 제공됩니다.
              <br />
            </p>
          </DocumentBox>
          <Cautionbox>
            <CautionIcon />
            질문당 권장 답변 시간인 2분에 맞추어 설정했습니다.
          </Cautionbox>
        </Document>
        <SubjectTitle>주제를 선택해주세요.</SubjectTitle>
        <SubjectButtons>
          <Button
            type={selectTopic === 1 ? "2" : "4"}
            text={"음식"}
            click={() => handleSubButtonClick(1)}
          ></Button>
          <Button
            type={selectTopic === 2 ? "2" : "4"}
            text={"여행"}
            click={() => handleSubButtonClick(2)}
          ></Button>
          <Button
            type={selectTopic === 3 ? "2" : "4"}
            text={"가족"}
            click={() => handleSubButtonClick(3)}
          ></Button>
        </SubjectButtons>
        <BtnContainer>
          <Button type={"1"} text={"시작하기"} click={handleStartButtonClick} />
        </BtnContainer>
      </Subjectcontainer>
    </>
  );
};

export default Subject;
