import { Box } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import { useState } from "react";

function CodeEditor() {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box>
      <Editor
        height="75vh"
        theme="vs-dark"
        defaultLanguage="javascript"
        defaultValue="//Type Your code Here..."
        value={value}
        onChange={handleChange}
      />
    </Box>
  );
}

export default CodeEditor;
