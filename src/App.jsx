import { marked } from "marked";
import "./App.css";
import Editor from "./components/Editor/Editor";
import Previewer from "./components/Previewer/Previewer";
import { initialText } from "./data/initialText";
import { useState } from "react";

function App() {
  const [text, setText] = useState(initialText);

  const parsed = marked.parse(text);

  return (
    <>
      <Editor text={text} setText={setText} />
      <Previewer text={parsed} />
    </>
  );
}

export default App;
