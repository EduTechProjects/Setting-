import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Container>
      <Link to="/">
        <LogoIcon />
      </Link>
      <Link to="/subject" style={{ textDecoration: "none", color: "black" }}>
        <Start>시작하기</Start>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.7rem;
  padding-bottom: 0.7rem;
  padding-left: 3rem;
  padding-right: 3rem;
  background-color: #f5f5f5;
`;

const LogoIcon = styled(Logo)`
  cursor: pointer;
`;

const Start = styled.p`
  cursor: pointer;
`;

export default Navbar;
