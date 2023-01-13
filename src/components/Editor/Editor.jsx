import { useState } from "react";
import Header from "../Header/Header";
import { Container, TextField } from "./Editor.styled";

function Editor({ text, setText }) {
  const [FS, setFS] = useState(false);
  return (
    <Container className={FS ? "FS" : ""}>
      <Header currentFS={FS} onClick={setFS}>
        Editor
      </Header>
      <TextField
        resize="vertical"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </Container>
  );
}

export default Editor;
