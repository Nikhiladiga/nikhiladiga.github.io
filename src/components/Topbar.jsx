import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Flex, Text, useColorMode } from "@chakra-ui/react";
import React from "react";

const Topbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex flexDir={"row"} justifyContent={"center"} alignItems={"center"}>
      <Text p={5} cursor={"pointer"}>
        Home
      </Text>
      <Text p={5} cursor={"pointer"}>
        Resume
      </Text>
      {colorMode == "dark" ? (
        <SunIcon onClick={toggleColorMode} ml={4} cursor={"pointer"} />
      ) : (
        <MoonIcon onClick={toggleColorMode} ml={4} cursor={"pointer"} />
      )}
    </Flex>
  );
};

export default Topbar;
