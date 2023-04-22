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
              {/* <img src="https://gobookmart.com/wp-content/uploads/2022/04/Plagiarism-What-Counts-And-What-Does-Not-1200x900.jpg" alt="homeimage" /> */}
              <img src="https://img.freepik.com/free-vector/plagiarism-concept-illustration_23-2148406070.jpg?w=740&t=st=1682109181~exp=1682109781~hmac=d0eb437d25a307cf7a5ee261c868791225ea9d107f243c606a7cc48f89d86c69" alt="homeimage" />
            </Box>
            <Text textAlign={"center"} alignItems={"center"}>
            Detect plagiarism with ease. Our user-friendly tool compares your text with billions of online sources, providing accurate results in seconds. Simply upload your file and receive a detailed report with a percentage of originality. Try it now for free!
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
