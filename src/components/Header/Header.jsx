import { FullScreen, HeaderContainer, Icon, Title } from "./Header.styled";

function Header({ children }) {
  return (
    <HeaderContainer>
      <Icon />
      <Title>{children}</Title>
      <FullScreen />
    </HeaderContainer>
  );
}

export default Header;
