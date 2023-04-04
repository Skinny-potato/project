import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Heading, HStack, VStack } from "@chakra-ui/react";


const Header = () => {
  return (
    <div>
      <Box bg="#2a7c6f" w="100%" p={10} pl={20} color="white">
        <Heading as="h2" size="xl">
          TITLE
        </Heading>
      </Box>
      <HStack p={"4"} pl={10} shadow={"base"} bgColor={"white"}>
        <Button pr={"5"} variant={"link"} size={"md"} color={"#2a7c6f"}>
          <Link to="/">Home</Link>
        </Button>
        <Button pr={"5"} variant={"link"} color={"#2a7c6f"}>
          <Link to="/Contact">Contact</Link>
        </Button>
        <Button pr={"5"} variant={"link"} color={"#2a7c6f"}>
          <Link to="/Services">Services</Link>
        </Button>
      </HStack>
    </div>
  );
};

export default Header;
