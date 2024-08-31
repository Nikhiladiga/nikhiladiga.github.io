import { Box } from "@chakra-ui/react";
import React from "react";

function Footer() {
  return (
    <Box textAlign={"center"} marginTop={20}>
      &copy; {new Date().getFullYear()} Nikhil Adiga
    </Box>
  );
}

export default Footer;
