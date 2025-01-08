import { Flex, Switch, Icon } from "@chakra-ui/react";
import { MdNightlight, MdLightMode } from "react-icons/md";
import React from "react";

export const Header = () => {
  return (
    <>
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
              <Icon as={MdNightlight} />
              <Switch margin=".25rem" size="md"></Switch>

              <Icon as={MdLightMode} />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
