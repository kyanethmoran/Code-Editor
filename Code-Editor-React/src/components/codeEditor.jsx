import { Box, HStack } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import { useRef, useState } from "react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "../Constants";
import Output from "./Output";

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

  // when the language is selected, the language to be used by the editor should be changed, language specific boilerplate code should be displayed in inputfield
  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  return (
    <Box>
      <HStack spacing={4}>
        <Box w="50%">
          {/* pass language state as prop to the selector menu */}
          <LanguageSelector language={language} onSelect={onSelect} />
          <Editor
            height="75vh"
            theme="vs-dark"
            language={language}
            defaultValue={CODE_SNIPPETS[language]}
            onMount={onMount}
            value={value}
            onChange={handleChange}
          />
        </Box>
        <Output />
      </HStack>
    </Box>
  );
}

export default CodeEditor;
