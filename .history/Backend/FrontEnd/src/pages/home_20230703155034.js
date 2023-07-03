import React from "react";
import styled from "styled-components";
import ColorCode from "../utils/Palette";
import Button from "../components/Common/Button";
import { ReactComponent as Example } from "../assets/example.svg";
import { ReactComponent as Example2 } from "../assets/example2.svg";
import { ReactComponent as Opic } from "../assets/opicIcon.svg";
import { ReactComponent as Caution } from "../assets/caution.svg";
import { ReactComponent as Check } from "../assets/check.svg";
import { ReactComponent as Emoji } from "../assets/emoji.svg";
import { ReactComponent as New } from "../assets/newIcon.svg";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import Dropdown from "../";


const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/subject");
  };

  return (
    <>
      <HeaderContainer bgColor={ColorCode.SelectBlue}>
        <Column>
          <SubTitle>언제나 당신의 곁에 함께하는</SubTitle>
          <Title>토킹 메이트</Title>
          <Button type="1" text="시작하기" click={handleNavigate} />
        </Column>
        <ExIcon />
      </HeaderContainer>
      <Section1>
        <Title2>토킹메이트는 이런 서비스에요!</Title2>
        <P>오픽 시험 응시 전, 말하기 상대가 필요하지 않으신가요?</P>
        <P>
          <strong style={{ color: "#42A1E0" }}>AI</strong>와 함께 주제별 말하기
          연습을 할 수 있어요.
        </P>
        <BtnContainer>
          <Dropdown/>
          <Button type="2" text="음식" />
          <Button type="2" text="여행" />
          <Button type="2" text="가족" />
        </BtnContainer>
        <CationContainer>
          <CautionIcon />
          <P>빈출 주제인 음식, 여행, 가족 중 선택할 수 있습니다.</P>
        </CationContainer>
        <OpicIconStyled />
      </Section1>
      <Section2>
        <Title3>이런 사람에게 추천해요!</Title3>
        <Row>
          <CheckIcon />
          <P>오픽 시험을 볼 예정인 사람</P>
        </Row>
        <Row>
          <CheckIcon />
          <P>영어 회화에 자신 없는 사람</P>
        </Row>
        <Row>
          <CheckIcon />
          <P>과외를 하기엔 금액이 부담스러운 사람</P>
        </Row>
        <EmojiIcon />
      </Section2>
      <Section3>
        <Row>
          <Column2>
            <NewIcon />
            <Title4>생성형 AI로</Title4>
            <Title4>문맥 피드백 제공</Title4>
            <Margin />
            <P>
              최근 가장 핫한 생성형 AI인 <strong>ChatGPT</strong>를 활용해
            </P>
            <P>답변을 가장 자연스러운 표현으로 바꿔드립니다.</P>
          </Column2>
          <Example2 />
        </Row>
      </Section3>
      <Footer>
        <Line />
        <LogoIcon />
      </Footer>
    </>
  );
};

const LogoIcon = styled(Logo)`
  margin-top: 50px;
  margin-left: 9rem;
  align-self: flex-start;
`;

const Footer = styled.div`
  height: 10rem;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Line = styled.div`
  height: 0.9px;
  width: 80%;

  background-color: gray;
`;

const Margin = styled.div`
  margin-top: 20px;
`;

const NewIcon = styled(New)`
  margin-left: -25px;
  margin-bottom: 10px;
`;

const EmojiIcon = styled(Emoji)`
  margin-top: 33px;
`;

const BtnContainer = styled.div`
  display: flex;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CheckIcon = styled(Check)`
  width: 25px;
  margin-right: 5px;
`;

const Section1 = styled.div`
  height: 42rem;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Section2 = styled.div`
  height: 42rem;
`;

const Section3 = styled.div`
  height: 37rem;
  background-color: #f5f5f5;
  padding-top: 8rem;
`;

const CationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 7rem;
`;

const Title2 = styled.h1`
  margin: 0;
  padding-top: 10rem;
  padding-bottom: 20px;
  font-size: 35px;
`;

const Title4 = styled(Title2)`
  padding: 0;
  margin-bottom: 15px;
`;

const Title3 = styled(Title2)`
  margin: 0;
  padding-top: 6rem;
  padding-bottom: 20px;
  font-size: 35px;
`;

const P = styled.p`
  margin: 0;
  margin-bottom: 10px;
`;

const CautionIcon = styled(Caution)`
  margin-top: -15px;
  margin-right: 5px;
`;

const ExIcon = styled(Example)``;

const OpicIconStyled = styled(Opic)`
  position: absolute;
  z-index: 1;
  margin-top: 4rem;
`;

const HeaderContainer = styled.div`
  height: 42rem;
  background-color: ${(props) => props.bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 15rem;
`;

const Column2 = styled(Column)`
  align-items: flex-start;
  margin-right: 20rem;
`;

const SubTitle = styled.h3`
  color: white;
  margin: 0;
  font-weight: 400;
`;

const Title = styled.h1`
  color: white;
  font-size: 45px;
  margin: 0;
  margin-top: 10px;
  margin-bottom: 30px;
`;

export default Home;
