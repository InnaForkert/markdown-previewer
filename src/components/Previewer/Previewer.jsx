import { Container } from "../Editor/Editor.styled";
import Header from "../Header/Header";
import { Result } from "./Previewer.styled";

function Previewer({ text }) {
  return (
    <Container>
      <Header>Previewer</Header>
      <Result dangerouslySetInnerHTML={{ __html: text }} />
    </Container>
  );
}

export default Previewer;
