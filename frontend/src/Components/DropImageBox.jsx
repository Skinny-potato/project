//*Dropzone.js*//

import React, { useState } from "react";
import "../Styles/DropFileBox.css";
import { useDropzone } from "react-dropzone";
import { useEffect } from "react";
import { Button, CloseButton } from "@chakra-ui/react";
import { Image } from '@chakra-ui/react'
import "../Styles/DropImageBox.css"


const DropFileBox = ({ open, handleImageUpload }) => {
  const [images, setImages] = useState([]);

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({});

  const removeImages = () => {
    handleImageUpload(null);
    setImages([]);
  };
  useEffect(() => {
    setImages(acceptedFiles);
    handleImageUpload(acceptedFiles[0]);
  }, [acceptedFiles]);

  const fileItems = images.map((image) => (
    <p key={image.path}>
      {image.path} - {image.size} bytes
    </p>
  ));
  return (
    <>
      <div {...getRootProps({ className: "dropzone" })}>
        <input className="input-zone" {...getInputProps()} />
        <div className="text-center">
          {isDragActive ? (
            <p className="dropzone-content">Release to drop the images here</p>
          ) : (
            <p className="dropzone-content">
              Drag and drop some images here, or click to select images
            </p>
          )}

          <Button
            colorScheme="teal"
            onClick={open}
            className="btn"
            variant="ghost"
            style={{ fontSize: "30px", marginTop: "3vh" }}
          >
            +
          </Button>
          {/* <Image src="E:/Final_Year_Project/MERN/frontend/src/Sng/imageupload.png" alt='Upload image' /> */}
        
          <br />
          <br />
        </div>
        <aside>
          <p style={{ paddingBottom: "3vh" }}>{fileItems}</p>
        </aside>
      </div>
      {images?.length>0?<button type="button" onClick={removeImages} style={{marginTop:"2vh"}}>
        <CloseButton />
      </button>:null}      
    </>
  );
};

export default DropFileBox;
