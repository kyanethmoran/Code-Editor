"use client";
import { Box, ChakraProvider, IconButton } from "@chakra-ui/react";
import CodeEditor from "./components/codeEditor";
import { Flex } from "@chakra-ui/react";
import { MdNightlight, MdLightMode } from "react-icons/md";
import theme from "./Theme";
import { useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const colorPalettes = {
    darkBg: "#0f0a19",
    lightBg: "#d4ebf2",
  };

  const handleThemeMode = () => {
    setIsDarkMode(!isDarkMode);
    console.log(isDarkMode);
  };

  return (
    <ChakraProvider theme={theme}>
      <Box
        minH="100vh"
        bg={`${isDarkMode ? colorPalettes.darkBg : colorPalettes.lightBg}`}
        color="gray.500"
        px={6}
        py={8}
      >
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
                    <IconButton size="sm">
                      <MdNightlight onClick={handleThemeMode} />
                    </IconButton>
                  </div>
                ) : (
                  <div>
                    <IconButton size="sm">
                      <MdLightMode onClick={handleThemeMode} />
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
