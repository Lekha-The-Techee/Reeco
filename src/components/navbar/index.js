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
        <ReecoLogo src="https://res.cloudinary.com/dgdiqxm5h/image/upload/v1700904164/61d55f72e02791825a9a1232_reeco-logo-white_m6fyuw_g3tuhs_3_egek5c.svg" alt="logo" />
        <NavOptionsContainer>
          <NavOption>Store</NavOption>
          <NavOption>Orders</NavOption>
          <NavOption>Analytics</NavOption>
        </NavOptionsContainer>
      </LeftContainer>
      <RightContainer>
        <CartImg src="https://res.cloudinary.com/dgdiqxm5h/image/upload/v1700904006/cart_b8qr7w_zju6os.png" alt="cart" />
        <NavOption>Hello, James</NavOption>
        <ProfileBtn src="https://res.cloudinary.com/dgdiqxm5h/image/upload/v1700904026/down_arrow_crzn8j_hatklh.png" alt="profileBtn" />
      </RightContainer>
    </NavContainer>
  );
};
export default Navbar;
