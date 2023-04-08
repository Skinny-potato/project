import { React, useState } from "react";
import DropFileBox from "../Components/DropFileBox";
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

const FileUpload = ({onResult,flag}) => {

  const [file, setFile] = useState(null);
  const handleFileUpload = (uploadedFile) => {
    setFile(uploadedFile);
    console.log(uploadedFile);
  };
  const handleSubmit = (event) => {
    
    event.preventDefault();
    const formData = new FormData();
    console.log(file);
    if (file===undefined){
      window.alert("You didnt select a file or the file is not supported!!");

    }
    if (file["type"] === "application/pdf") {
      formData.append("file", file);
    }
    if (file["type"] === "application/pdf") {
      axios
        .post("/result", formData)
        .then((response) => {
          console.log(response.data);
          // navigate("/result");
          onResult(response.data)
          flag(true)
        })
        .catch((error) => {
          console.log(error.response);
          
          alert("You might have uploaded a corrupted file please check it")
        });
      console.log("File is being handled here");
      console.log(file);
    } else {
      window.alert("You didnt select a file or the file is not supported!!");
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
        <DropFileBox handleFileUpload={handleFileUpload} flag={flag} />
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
            style={{marginTop:"5vh"}}
          >
            Next
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default FileUpload;
