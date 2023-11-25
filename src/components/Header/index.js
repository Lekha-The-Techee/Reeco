import {
  HeaderContainer,
  ParagraphText,
  ButtonsContainer,
  Heading,
  Buttons,
  BackBtn,
  OrderBtn,
} from "./style";

const Header = () => {
  return (
    <HeaderContainer>
      <ParagraphText>Order {">"}</ParagraphText>
      <ParagraphText style={{ textDecoration: "underline" }}>
        Order 3457ABC
      </ParagraphText>
      <ButtonsContainer>
        <Heading>Order 3457ABC</Heading>
        <Buttons>
          <BackBtn>Back</BackBtn>
          <OrderBtn>Approve Order</OrderBtn>
        </Buttons>
      </ButtonsContainer>
    </HeaderContainer>
  );
};
export default Header;