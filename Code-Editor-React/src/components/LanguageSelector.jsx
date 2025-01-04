import {
  Box,
  Button,
  color,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { LANGUAGE_VERSIONS } from "../Constants";
// import React from "react";

//brings in the language and version constants from the Constants.js file
const languages = Object.entries(LANGUAGE_VERSIONS);

// default the button to javascript, handle the state change of language selection
const LanguageSelector = ({ language, onSelect }) => {
  return (
    <Box>
      <Text mb={2} fontSize="lg">
        Language:
      </Text>
      <Box>
        <Menu>
          <MenuButton as={Button}>{language}</MenuButton>
          <MenuList>
            {/* loop through the languages and versions and map each pair to the menu drop down items */}
            {languages.map(([language, version]) => (
              <MenuItem key={language} onClick={() => onSelect(language)}>
                {language}
                {/* nbsp: an HTML entity that is used to create a space that wont break into a new line, keeps two words or in this case phrases together */}
                &nbsp;
                <Text as="span" color="gray.600" fontSize="sm">
                  {version}
                </Text>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Box>
    </Box>
  );
};

export default LanguageSelector;
