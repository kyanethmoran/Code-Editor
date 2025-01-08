import { Flex, Switch } from "@chakra-ui/react";
import React from "react";

export const Header = () => {
  return (
    <>
      <Flex direction="column">
        <Flex justify="space-between">
          <div>Code Editor React</div>
          <Switch></Switch>
        </Flex>
      </Flex>
    </>
  );
};
