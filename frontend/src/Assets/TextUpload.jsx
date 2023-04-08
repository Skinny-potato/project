import React, { createContext, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  Flex,
  Radio,
  RadioGroup,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TextUpload = ({handleLoading}) => {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    if (text) {
      handleLoading(true)
      formData.append("text", text);
      
      axios
      .post("/result", formData)
      .then((response) => {
        console.log(response.data);
        if (response.data) {
            handleLoading(false)
            navigate("/result", { state: { data: response.data } });
          }
        })
        .catch((error) => {
          console.log(error);
        });
      console.log("text is being handled here");
      console.log(text);
    } else {
      window.alert("Please enter some valid text");
    }
  };

  return (
    <>
      <Flex
        flexDirection={"column"}
        align={"center"}
        justifyContent={"center"}
        mb={"10vh"}
      >
        <Textarea
          placeholder="Text..."
          height={"40vh"}
          mt={"5vh"}
          width={"90vh"}
          resize="none"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <Flex
          alignItems={"center"}
          justifyContent={"space-between"}
          width={"90vh"}
          flexDirection={"row-reverse"}
        >
          <Button
            onClick={handleSubmit}
            colorScheme="teal"
            variant="solid"
            size={"sm"}
            mt={"2vh"}
          >
            Submit
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default TextUpload;
