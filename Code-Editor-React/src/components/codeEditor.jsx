import { Box } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import { useRef, useState } from "react";
import LanguageSelector from "./LanguageSelector";

function CodeEditor() {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("javascript");

  // handles the change of the editor input value
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  // when the editor component mounts the input area should be focused
  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  // when the language is selected, the language to be used by the editor should be changed
  const onSelect = (language) => {
    setLanguage(language);
  };

  return (
    <Box>
      {/* pass language state as prop to the selector menu */}
      <LanguageSelector language={language} onSelect={onSelect} />
      <Editor
        height="75vh"
        theme="vs-dark"
        language={language}
        defaultValue="//Type Your code Here..."
        onMount={onMount}
        value={value}
        onChange={handleChange}
      />
    </Box>
  );
}

export default CodeEditor;
