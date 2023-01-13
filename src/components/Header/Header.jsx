import {
  ExitFullScreen,
  FullScreen,
  HeaderContainer,
  Icon,
  Title,
} from "./Header.styled";

function Header({ children, setFS, onClick, currentFS }) {
  return (
    <HeaderContainer>
      <Icon size={28} />
      <Title>{children}</Title>
      {currentFS ? (
        <ExitFullScreen size={20} onClick={() => onClick(!currentFS)} />
      ) : (
        <FullScreen size={20} onClick={() => onClick(!currentFS)} />
      )}
    </HeaderContainer>
  );
}

export default Header;
