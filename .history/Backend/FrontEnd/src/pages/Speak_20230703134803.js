import React from "react";
import Button from ".././components/Common/Button";
import styled from "styled-components";
import Speaker from "../components/Speak/Speaker";
import { useParams, useNavigate } from "react-router-dom";
import Questions from ".././utils/Questions";
import ColorCode from ".././utils/Palette";
import { useState, useRef } from "react";
import axios from "axios";

const SpeakContainer = styled.div`
  background-color: #f5f5f5;
  text-align: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
`;

const QuestionContainer = styled.div`
  background-color: #f5f5f5;
  font-weight: bold;
  font-size: 30px;
  width: 60%;
  height: 40px;
  text-align: center;
  padding-top: 20vh;
  margin: 0 auto;
  padding-bottom: 20vh;
`;

const ButtonContainer = styled.div`
  padding-top: 5vh;
  margin: 0 auto;
  gap: 30px;
  justify-items: flex-start;
  display: flex;
`;

const SpeakerWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Speak = () => {
  const navigate = useNavigate();
  const { topic } = useParams();

  const questionArr = Questions[topic];
  const [isFeedbackPage, setIsFeedbackPage] = useState(false);
  const [showSpeaker, setShowSpeaker] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = questionArr[currentQuestionIndex];

  const mediaRedorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const handleStartClick = () => {
    setShowSpeaker(true);

    //녹음을 시작하기 전 이전에 녹음한 오디오 청크리스트 초기화
    audioChunksRef.current = [];

    //녹음을 위한 미디어 스트림 가져오기
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        //MediaRecorder 생성
        mediaRedorderRef.current = new MediaRecorder(stream);

        //데이터를 받을 때마다 오디오 청크를 추가하기
        mediaRedorderRef.current.addEventListener("dataavailable", (e) => {
          if (e.data.size > 0) {
            audioChunksRef.current.push(e.data);
          }
        });

        mediaRedorderRef.current.start();
      })
      .catch((error) => {
        console.error("마이크 인식이 불가합니다.", error);
      });
  };

  const handleDoneClick = () => {
    if (
      mediaRedorderRef.current &&
      mediaRedorderRef.current.state === "recording"
    ) {
      //녹음 중지
      mediaRedorderRef.current.stop();

      //녹음된 오디로 청크들을 blob으로 변환하기
      const audioBlob = new Blob(audioChunksRef.current, { type: "audio/wav" });

      //Form data 생성하기
      const formData = new FormData();
      formData.append("audio", audioBlob, "recording.wav");

      //서버로 formdata 전송
      axios
        .post("/upload-audio", formData)
        .then((response) => {
          console.log("업로드가 성공적으로 진행되었습니다!");
        })
        .catch((error) => {
          console.error("업로드 과정 중 오류가 발생했습니다.", error);
        });
    }

    setShowSpeaker(false);
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);

    if (currentQuestionIndex === questionArr.length - 1) {
      setIsFeedbackPage(true);
    }
  };

  if (isFeedbackPage) {
    navigate("/feedback");
  }

  return (
    <SpeakContainer>
      <QuestionContainer>
        <b style={{ color: ColorCode.SelectBlue, marginRight: "10px" }}>
          Q{currentQuestionIndex + 1}.
        </b>
        {currentQuestion}
      </QuestionContainer>
      {showSpeaker && (
        <SpeakerWrapper>
          <Speaker />
        </SpeakerWrapper>
      )}
      <ButtonContainer>
        {showSpeaker ? (
          <Button type={"3"} text={"Done"} click={handleDoneClick} />
        ) : (
          <Button type={"2"} text={"Start"} click={handleStartClick} />
        )}
      </ButtonContainer>
      <button onClick={handleDoneClick}>done</button>
    </SpeakContainer>
  );
};

export default Speak;
