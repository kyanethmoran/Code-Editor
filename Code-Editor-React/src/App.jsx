import { Box } from "@chakra-ui/react";
import CodeEditor from "./components/codeEditor";
import { Header } from "./components/Header";

function App() {
  return (
    <Box minH="100vh" bg="#0f0a19" color="gray.500" px={6} py={8}>
      <Header />
      <CodeEditor />
    </Box>
  );
}

export default App;
