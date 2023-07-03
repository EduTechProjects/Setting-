import React from "react";
import styled from "styled-components";
import ColorCode from "../../utils/Palette";

const Button = ({ type, text, click }) => {
  return type === "1" ? (
    <Btn1 bgColor={ColorCode.MainBlue} onClick={click}>
      {text}
    </Btn1>
  ) : type === "2" ? (
    <Btn2 bgColor={ColorCode.SelectBlue} onClick={click}>
      {text}
    </Btn2>
  ) : type === "3" ? (
    <Btn2 bgColor={ColorCode.MainBlue} onClick={click}>
      {text}
    </Btn2>
  ) : (
    <Btn2 bgColor={"#ABDDFF"} onClick={click}>
      {text}
    </Btn2>
  );
};

const Btn1 = styled.button`
  width: 200px;
  height: 70px;
  background-color: ${(props) => props.bgColor};
  border: none;
  border-radius: 40px;
  color: white;
  font-size: 25px;
  font-weight: 600;
  cursor: pointer;
`;

const Btn2 = styled.button`
  background-color: ${(props) => props.bgColor};
  border: none;
  border-radius: 40px;
  color: white;
  font-weight: 600;
  width: 150px;
  height: 53px;
  border-radius: 17px;
  border: none;
  font-size: 20px;
  margin-right: 30px;
  margin-top: 25px;
  cursor: pointer;
`;

export default Button;
