import {
  Box,
  Button,
  CheckboxIcon,
  CircularProgress,
  Flex,
  Radio,
  RadioGroup,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useEffect, useState,useRef } from "react";
import React from "react";
import FileUpload from "../Assets/FileUpload.jsx";
import ImageUpload from "../Assets/ImageUpload.jsx";
import TextUpload from "../Assets/TextUpload.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Styles/sampleServices.css"
import Loading from "./Loading.jsx";

const Services = () => {
  const navigate = useNavigate();

  //states
  const [result, setResult] = useState("");
  const [flag, setFlag] = useState(false);
  const [value, setValue] = useState("Textbox");
  const [submissionText, setSubmissionText] = useState("");
  const componentRef = useRef(null);
  const [loading,setLoading]=useState(false)
  const [abortController, setAbortController] = useState(null);


  //handlers
  const handleResult = (data) => {
    setResult(data);
    console.log(result);
  };
  const flaghandler = (flag) => {
    setFlag(flag);
  };

  const handlFinalSubmission = (e) => {
    e.preventDefault();
    const controller = new AbortController();
    setAbortController(controller);

    const formData = new FormData();
    if (submissionText) {
      formData.append("text", submissionText);
      console.log(submissionText);
      console.log(formData);
      setLoading(true)
      axios
      .post("/result", formData, { signal: controller.signal })
      .then((response) => {
        setLoading(false);
        navigate("/result", { state: { data: response.data } });
      })
      .catch((error) => {
        console.log(error);
      });
      console.log("Submission text is being handled here");
      console.log(submissionText);
      setSubmissionText("");
    } else {
      window.alert("The text youre trying to submit is in wrong format");
    }
  };
  const handleBackClick = () => {
    if (abortController) {
      abortController.abort();
      setLoading(false)
      setFlag(false)
      setResult("")
    }
    navigate("/services")
  };
  const handleLoading=(arr)=>{
    setLoading(arr)
  }
  useEffect(() => {
    setSubmissionText(result);
  }, [result]);
  useEffect(()=>{
    if (flag && componentRef.current) {
      componentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  },[flag])
  // console.log("result",result);

  console.log(value);
  const switchTabs = () => {
    if (value === "Textbox") {
      console.log("Text Uploading");
      return <TextUpload handleLoading={handleLoading} />;
    }
    if (value === "Image") {
      console.log("Image Uploading");
      return <ImageUpload onResult={handleResult} flag={flaghandler}/>;
    }
    if (value === "File") {
      console.log("file Uploading");
      return <FileUpload onResult={handleResult} flag={flaghandler} />;
    }
  };

  return (
    
    loading?<Loading handleClick={handleBackClick}/>:
    <>
      <Flex
        direction={"column"}
        justifyContent={"center"}
        alignContent={"center"}
      >
        <Box h={"120vh"} p={"40"} textAlign={"center"} color={"#45bfab"}>
          <Text fontSize={"2xl"}>
            This app allows the user to choose the way input. Please choose the
            way you want to upload your input
          </Text>
          <Box p={"10"}>
            <Flex
              justifyContent={"center"}
              alignContent={"center"}
              direction={"column"}
              alignItems={"center"}
            >
              <RadioGroup
                onChange={setValue}
                // onClick={switchTabs}
                value={value}
              >
                <Stack direction="row">
                  <Radio size={"lg"} colorScheme="green" value="Textbox">
                    Text Box
                  </Radio>
                  <Radio size={"lg"} colorScheme="green" value="File">
                    File
                  </Radio>
                  <Radio size={"lg"} colorScheme="green" value="Image">
                    Image
                  </Radio>
                </Stack>
              </RadioGroup>

              {/* <Box border={"dashed"} width={"100vh"} height={"50vh"} m={"10"}> */}

              {/* {value === "Textbox" ? <TextUpload /> : <div> Select a way </div>}
                {value === "Image" ? <ImageUpload /> : <div> Select a way </div>}
                {value === "File" ? <FileUpload /> : <div> Select a way </div>} */}
              {switchTabs()}
              {/* </Box> */}
            </Flex>
          </Box>
        </Box>
      </Flex>
      {flag ? (
        <div className="PreviewContainer" ref={componentRef}>
          {console.log(result)}
          {result === "" ? (
            <CircularProgress isIndeterminate color="green.300" />
          ) : (
            <>
              <Text fontSize="3xl" style={{color:"#45bfab"}}>Preview </Text>
              <Textarea
                height={"40vh"}
                mt={"5vh"}
                width={"90vh"}
                resize="none"
                value={submissionText}
                onChange={(e) => setSubmissionText(e.target.value)}
              />
              <Text fontSize="l" style={{marginTop:"4vh",marginBottom:"2vh"}}>
                {" "}
                <strong>NOTE :  &nbsp; </strong>This preview is editable and please change the text according to your wish{" "}
              </Text>
              <Button onClick={handlFinalSubmission}>Submit</Button>
            </>
          )}
        </div>
      ) : (
        <></>
      )}
    </>

    
  );
};

export default Services;
