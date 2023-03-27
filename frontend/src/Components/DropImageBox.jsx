//*Dropzone.js*//

import React, { useState } from "react";
import "../Styles/DropFileBox.css";
import { useDropzone } from "react-dropzone";
import { useEffect } from "react";
import { Button, CloseButton } from "@chakra-ui/react";

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
    <li key={image.path}>
      {image.path} - {image.size} bytes
    </li>
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
            style={{fontSize:"30px"}}
          >
            +
          </Button>

          <br />
          <br />
          <br />
          <br />
        </div>
        <aside>
          <ul>{fileItems}</ul>
        </aside>
      </div>
      <button type="button" onClick={removeImages}>
        <CloseButton />
      </button>
    </>
  );
};

export default DropFileBox;
