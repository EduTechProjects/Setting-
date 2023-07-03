import React from "react";
import { ColorCode } from "./../../utils/Palette";
import styled from "styled-components";

const Container = styled.div`
  width: 90%;
  background-color: white;
  font-size: 20px;
  text-align: justify;
  line-height: 150%;
`;

const Document = styled.div`
  padding-left: 7vw;
  text-align-last: left;
`;

const FeedbackContainer = ({ feedback }) => {
  return (
    <Container>
      <Document>
        <p style={{ color: ColorCode.SelectBlue, fontWeight: "bold" }}>
          Feedback
        </p>
        <p style={{ fontSize: "20px", color: "black" }}>{feedback}</p>
      </Document>
    </Container>
  );
};

export default FeedbackContainer;
