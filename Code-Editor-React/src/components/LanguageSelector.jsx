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
    <Box ml={2} mb={4}>
      <Text mb={2} fontSize="lg">
        Language:
      </Text>
      <Box>
        <Menu isLazy>
          <MenuButton as={Button}>{language}</MenuButton>
          <MenuList bg="#110c1b">
            {/* loop through the languages and versions and map each pair to the menu drop down items */}
            {languages.map(([languageItem, version]) => (
              <MenuItem
                key={languageItem}
                // set text color and background color to be different for the language item that matches the currently selected language held in state, showing "active" selection
                color={languageItem === language ? "blue.400" : ""}
                bg={languageItem === language ? "gray.900" : "transparent"}
                onClick={() => onSelect(languageItem)}
                // show alterante style for language item under a hover state
                _hover={{
                  color: "blue.400",
                  bg: "gray.900",
                }}
              >
                {languageItem}
                {/* nbsp: an HTML entity that is used to create a space that wont break into a new line, keeps two words or in this case phrases together */}
                &nbsp;
                <Text as="span" color="gray.600" fontSize="sm">
                  ({version})
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
