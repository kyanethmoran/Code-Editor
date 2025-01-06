import axios from "axios";
import { CODE_SNIPPETS } from "./Constants";

const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});

export const executeCode = async (language, sourceCode) => {
  const response = await API.post("/execute", {
    language: language,
    version: CODE_SNIPPETS[language],
    files: [
      {
        content: sourceCode,
      },
    ],
  });
  return response.data;
};

// get the supported languages and current versions from piston api
export const getVersions = async () => {
  const versionResponse = await API.get("/runtimes");
  return versionResponse.data;
};
