import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Image,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Home = () => {
  return (
    <>
      <div>
        <Box bgColor={"#388f81"} w="100%" h="80vh" padding={"100"}>
          <Flex direction={["column", "row"]} alignItems={"center"}>
            <Box mx={"20"}>
              <img src="https://bit.ly/2Z4KKcF" alt="homeimage" />
            </Box>
            <Text textAlign={"center"} alignItems={"center"}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus dicta suscipit, velit, esse ea mollitia excepturi
              optio debitis corporis aut fugit dolorem cumque, vero
              exercitationem voluptatum accusantium impedit odit expedita.
            </Text>
          </Flex>
        </Box>
      </div>
      <div>
        <Box bgColor={"#2a7c6f"} w="100%" h="100vh" padding={"10"}>
          <Flex direction={["row", "column"]} alignItems={"center"}>
            <Box mt={"10"} borderRadius={"20"} width={"25"}>
              <Image
                boxSize="150px"
                objectFit="cover"
                src="https://bit.ly/dan-abramov"
                alt="Dan Abramov"
                borderRadius={"lg"}
              />
            </Box>
            <Heading
              my={"10"}
              as="h4"
              size="md"
              color={"white"}
              textAlign={"center"}
            >
              About Us
            </Heading>
            <Text color={"whiteAlpha.600"} textAlign={"center"}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
              vero doloribus eum iste odio tempora minus quod quibusdam, a
              commodi eius facilis voluptate explicabo alias. Iure, labore!
              Unde, dolorum deleniti. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Incidunt vero doloribus eum iste odio tempora
              minus quod quibusdam, a commodi eius facilis voluptate explicabo
              alias. Iure, labore! Unde, dolorum deleniti. Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Incidunt vero doloribus eum
              iste odio tempora minus quod quibusdam, a commodi eius facilis
              voluptate explicabo alias. Iure, labore! Unde, dolorum deleniti.
            </Text>
          </Flex>
        </Box>
      </div>
      <div>
        <Flex direction={["row", "column"]} alignItems={"center"}>
          <Box bgColor={"white"} w="100%" h="80vh" padding={"100"}>
            <Card bgColor={"#388f81"}>
              <CardHeader>
                <Heading size="md">Services We Provide</Heading>
              </CardHeader>

              <CardBody>
                <Stack divider={<StackDivider />} spacing="4">
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Uploading Via File
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      Our App allows the user to upload files (.PDF,.DOCX) are
                      supported for now.
                    </Text>
                  </Box>
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Uploading Via Images
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      Our App allows the user to upload images (.JPG,.PNG) are
                      supported for now.
                    </Text>
                  </Box>
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Basic Text Box
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      The user can just normally use the text box provided too.
                    </Text>
                  </Box>
                </Stack>
              </CardBody>
            </Card>
          </Box>
        </Flex>
      </div>
    </>
  );
};

export default Home;
