import React from "react";
import ToggleBox from ".././components/Feedback/Togglebox";
import styled from "styled-components";
import Loading from "./Loading";
import { useState, useEffect } from "react";
import axios from "axios";

const Feedback = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  // 결과 GET
  const GetResultAPI = async () => {
    setLoading(true);
    
    const response = await axios.get("http://localhost:5000/feedback"); // url 넣기
    console.log(response.data, response.status);
    setData(response.data);

    setLoading(false);
  };

  useEffect(() => {
    GetResultAPI();
  }, []);

  return (
    <FeedbackContainer>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Title>스피킹 결과</Title>
          <ToggleContainer>
            {data.map((el, i) => (
              <ToggleBox
                key= {i}
                index={`${i + 1}`}
                answer={el.transcription}
                feedback={el.fixed}
              />
            ))}
          </ToggleContainer>
        </>
      )}
    </FeedbackContainer>
  );
};

export default Feedback;

const FeedbackContainer = styled.div`
  padding-top: 10vh;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-size: 32px;
  text-align: center;
  font-weight: bold;
  color: black;
  padding-top: 4vh;
  padding-bottom: 5vh;
`;

const ToggleContainer = styled.div`
  display: flex;
  margin-top: 20px;
  justify-items: center;
  align-items: center;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 20px;
  justify-content: center;
  align-content: space-between;
  margin-bottom: 20vh;
`;
