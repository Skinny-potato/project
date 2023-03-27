import { React, useState } from "react";
import DropImageBox from "../Components/DropImageBox";
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

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const handleImageUpload = (uploadedImage) => {
    setImage(uploadedImage);
    console.log(uploadedImage);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    console.log(image);
    if (image["type"] === "image/jpeg" || image["type"] === "image/png") {
      formData.append("image", image);
    }

    if (image["type"] === "image/jpeg" || image["type"] === "image/png") {
      axios
        .post("/result", formData)
        .then((response) => {
          console.log(response.data);
          navigate("/result");
        })
        .catch((error) => {
          console.log(error);
        });
      console.log("Image is being handled here");
      console.log(image);
    } else {
      window.alert("You didnt select a image or the image is not supported!!");
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
        <DropImageBox handleImageUpload={handleImageUpload} />
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
            flexDirection={"row-reverse"}
          >
            Next
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default ImageUpload;
