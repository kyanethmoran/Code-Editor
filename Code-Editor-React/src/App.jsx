"use client";
import { Box, ChakraProvider, IconButton } from "@chakra-ui/react";
import CodeEditor from "./components/codeEditor";
import { Flex } from "@chakra-ui/react";
import { MdNightlight, MdLightMode } from "react-icons/md";
import theme from "./Theme";
import { useState } from "react";

function App() {
  const bgColor = {
    darkBg: "#0f0a19",
    lightBg: "#d4ebf2",
  };
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleLightMode = () => {
    setIsDarkMode(false);
    console.log("light");
  };

  const handleDarkMode = () => {
    setIsDarkMode(true);
    console.log("dark");
  };
  return (
    <ChakraProvider theme={theme}>
      <Box minH="100vh" bg={bgColor.darkBg} color="gray.500" px={6} py={8}>
        {/* code for header */}
        <Flex direction="column">
          <Flex
            justify="space-between"
            border="2px solid"
            padding={4}
            marginBottom={4}
            borderRadius={4}
          >
            <div>Code Editor React</div>
            <Flex direction="column">
              <Flex justify="inline" alignItems="center">
                {isDarkMode ? (
                  <div>
                    {/* <Button onClick={handleLightMode}>
                      <Icon as={MdNightlight} />
                    </Button> */}
                    <IconButton size="sm">
                      <MdNightlight onClick={handleLightMode} />
                    </IconButton>
                  </div>
                ) : (
                  <div>
                    {/* <Button onClick={handleDarkMode}>
                      <Icon as={MdLightMode} />
                    </Button> */}
                    <IconButton size="sm">
                      <MdLightMode onClick={handleDarkMode} />
                    </IconButton>
                  </div>
                )}
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        <CodeEditor />
      </Box>
    </ChakraProvider>
  );
}

export default App;
