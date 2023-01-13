import Header from "../Header/Header";
import { Container, TextField } from "./Editor.styled";

function Editor({ text, setText }) {
  return (
    <Container>
      <Header>Editor</Header>
      <TextField
        resize="vertical"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </Container>
  );
}

export default Editor;
