import { FullScreen, HeaderContainer, Icon, Title } from "./Header.styled";

function Header({ children }) {
  return (
    <HeaderContainer>
      <Icon size={28} />
      <Title>{children}</Title>
      <FullScreen size={20} />
    </HeaderContainer>
  );
}

export default Header;
