import {
  NavContainer,
  LeftContainer,
  ReecoLogo,
  NavOptionsContainer,
  NavOption,
  RightContainer,
  CartImg,
  ProfileBtn,
} from "./style";

const Navbar = () => {
  return (
    <NavContainer>
      <LeftContainer>
        <ReecoLogo src="" alt="logo" />
        <NavOptionsContainer>
          <NavOption>Store</NavOption>
          <NavOption>Orders</NavOption>
          <NavOption>Analytics</NavOption>
        </NavOptionsContainer>
      </LeftContainer>
      <RightContainer>
        <CartImg src="" alt="cart" />
        <NavOption>Hello, James</NavOption>
        <ProfileBtn src="" alt="profileBtn" />
      </RightContainer>
    </NavContainer>
  );
};
export default Navbar;
