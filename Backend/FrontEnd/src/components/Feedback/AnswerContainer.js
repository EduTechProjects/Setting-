import React from "react";
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

const AnswerContainer = ({ answer }) => {
  return (
    <Container>
      <Document>
        <p style={{ color: "black", fontWeight: "bold" }}>Answer</p>
        <p style={{ fontSize: "20px", color: "black" }}>{answer}</p>
      </Document>
    </Container>
  );
};

export default AnswerContainer;
