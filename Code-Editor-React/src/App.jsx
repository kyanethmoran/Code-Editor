import { Box } from "@chakra-ui/react";
import CodeEditor from "./components/codeEditor";
import { Header } from "./components/Header";
import { Flex, Switch } from "@chakra-ui/react";

function App() {
  return (
    <Box minH="100vh" bg="#0f0a19" color="gray.500" px={6} py={8}>
      <Flex direction="column">
        <Flex
          justify="space-between"
          border="2px solid"
          padding={4}
          marginBottom={4}
          borderRadius={4}
        >
          <div>Code Editor React</div>
          <Switch></Switch>
        </Flex>
      </Flex>
      <CodeEditor />
    </Box>
  );
}

export default App;
