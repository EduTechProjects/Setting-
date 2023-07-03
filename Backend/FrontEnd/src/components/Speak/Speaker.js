import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 480px;
  height: 160px;
  margin-bottom: 110px;
`;

const Speaker = () => {
  return (
    <Container>
      <iframe
        src="https://giphy.com/embed/aw6CWyyLQ8WyRuktxR"
        width="480"
        height="160"
        frameBorder="0"
        class="giphy-embed"
        allowFullScreen
        title="Giphy"
      ></iframe>
    </Container>
  );
};

export default Speaker;
