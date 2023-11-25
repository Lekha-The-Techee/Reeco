import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 150px;
  padding-top: 30px;
  background-color: #ffffff;
  box-shadow: 10px;
  padding-left: 70px;
  padding-right: 70px;
  padding-top: 20px;
  box-shadow: 0 5px 10px rgb(0 0 0 / 0.2);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const ParagraphText = styled.p`
  color: #000000;
  display: inline;
  margin-top: 2px;
  margin-bottom: 1px;
`;

export const spanEl = styled.span`
  text-decoration: underline;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Heading = styled.h1`
  color: #000000;
  font-size: 20px;
`;

export const Buttons = styled.div`
  display: flex;
`;

export const BackBtn = styled.button`
  border-radius: 20px;
  border: 1px solid #1e633f;
  background-color: transparent;
  color: #1e633f;
  width: 80px;
  height: 36px;
`;

export const OrderBtn = styled.button`
  border-radius: 20px;
  border: 1px solid #1e633f;
  background-color: transparent;
  background-color: #1e633f;
  height: 36px;
  width: 120px;
  color: #ffffff;
  margin-left: 20px;
`;