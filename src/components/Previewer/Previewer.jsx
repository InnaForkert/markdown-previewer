import { useState } from "react";
import { Container } from "../Editor/Editor.styled";
import Header from "../Header/Header";
import { Result } from "./Previewer.styled";

function Previewer({ text }) {
  const [FS, setFS] = useState(false);
  return (
    <Container className={FS ? "FS" : ""}>
      <Header currentFS={FS} onClick={setFS}>
        Previewer
      </Header>
      <Result dangerouslySetInnerHTML={{ __html: text }} />
    </Container>
  );
}

export default Previewer;
