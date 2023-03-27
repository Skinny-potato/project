import {
  Flex,
  Box,
  Heading,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Box
        bgColor={"#2a7c6f"}
        color={"whiteAlpha.700"}
        minH={"48"}
        px={"16"}
        py={["16", "8"]}
      >
        <VStack
          divider={<StackDivider borderColor="gray.300" />}
          spacing={4}
          align="stretch"
        >
          <Flex justifyContent="center" alignItems="center">
            <Heading as="h4" size="md" color={"white"}>
              Title
            </Heading>
          </Flex>
          <Flex justifyContent="center" alignItems="center">
            <Text
              fontSize={"sm"}
              letterSpacing={"widest"}
              textAlign={["center", "left"]}
            >
              (sm) info@mysite.com
            </Text>
          </Flex>
          <Flex justifyContent="center" alignItems="center">
            <Text
              fontSize={"sm"}
              letterSpacing={"widest"}
              textAlign={["center", "left"]}
            >
              (sm) ©2023 by Detector. Proudly created with Wix.com
            </Text>
          </Flex>
        </VStack>
      </Box>
    </div>
  );
};

export default Footer;
