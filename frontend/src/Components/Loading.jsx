import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Button,
  CircularProgress,
} from "@chakra-ui/react";
import "../Styles/Loading.css"


const Loading = ({handleClick}) => {

  return (
    <div className="loading_container">
      <Card align="center"className="card" >
        <CardHeader>
          <Heading size="md"> Loading</Heading>
        </CardHeader>
        <CardBody>
          <Text>Your response has be sent to the server...... </Text>
          <br />
          <Text>Please Wait.......</Text>
          <CircularProgress style={{marginLeft:"17vh"}} isIndeterminate color='green.300' />
          {/* <CircularProgress style={{marginLeft:"20vh"}} isIndeterminate color='green.300' /> */}
        </CardBody>
        <CardFooter>
          <Button colorScheme="blue" onClick={handleClick}>Back</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Loading;
