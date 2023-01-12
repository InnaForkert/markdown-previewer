import { SiFreecodecamp } from "react-icons/si";
import { BsArrowsFullscreen } from "react-icons/bs";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  background-color: #f95959;

  display: flex;
  align-items: center;

  padding: 5px 15px;
  gap: 5px;
  border-radius: 14px 14px 0 0;
`;

export const Icon = styled(SiFreecodecamp)`
  color: #233142;
`;

export const Title = styled.p`
  font-size: 24px;
  color: #233142;
`;

export const FullScreen = styled(BsArrowsFullscreen)`
  margin-left: auto;
  color: #233142;
`;
