"use client";
import { Box, ChakraProvider, IconButton } from "@chakra-ui/react";
import CodeEditor from "./components/codeEditor";
import { Flex } from "@chakra-ui/react";
import { MdNightlight, MdLightMode } from "react-icons/md";
import theme from "./Theme";
import { useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const colorPalette = {
    darkBg: "#0f0a19",
    lightBg: "#D3D3D3",
    // darkColor: "",
    // lightColor: "",
    buttons: {
      lightBtnColor: "grey",
      darkBtnColor: "",
      lightBtnVarient: "",
      darkBtnVarient: "",
    },
  };

  const handleThemeMode = () => {
    setIsDarkMode(!isDarkMode);
    console.log(isDarkMode);
  };

  return (
    <ChakraProvider theme={theme}>
      <Box
        minH="100vh"
        bg={`${isDarkMode ? colorPalette.darkBg : colorPalette.lightBg}`}
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
                    <IconButton
                      size="sm"
                      aria-label="dark mode"
                      rounded="full"
                      onClick={handleThemeMode}
                      icon={<MdNightlight />}
                    />
                  </div>
                ) : (
                  <div>
                    <IconButton
                      size="sm"
                      aria-label="light mode"
                      colorScheme="accent"
                      bg="yellow"
                      rounded="full"
                      onClick={handleThemeMode}
                      icon={<MdLightMode />}
                    />
                  </div>
                )}
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        {/* Code edition component */}
        <CodeEditor />
      </Box>
    </ChakraProvider>
  );
}

export default App;
