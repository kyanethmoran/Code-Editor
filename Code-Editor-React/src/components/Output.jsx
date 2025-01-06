import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { executeCode, getVersions } from "../API";

const Output = ({ editorRef, language }) => {
  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;
    try {
      const {} = await executeCode(language, sourceCode);
      //   const {} = await getVersions();
    } catch (error) {}
  };

  return (
    <Box w="50%">
      <Text mb={2} fontSize="lg">
        Output
      </Text>
      <Button variant="outline" colorScheme="green" mb={4} onClick={runCode}>
        Run Code
      </Button>
      <Box
        height={"75vh"}
        p={2}
        border="1px solid"
        borderRadius={4}
        borderColor="#333"
      >
        Test
      </Box>
    </Box>
  );
};

export default Output;
