//*Dropzone.js*//

import React, { useState } from "react";
import "../Styles/DropFileBox.css";
import { useDropzone } from "react-dropzone";
import { useEffect } from "react";
import { Button, CloseButton } from "@chakra-ui/react";
const DropFileBox = ({ open, handleFileUpload,flag }) => {
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({});

  const removeFiles = () => {
    handleFileUpload(null);
    setFiles([]);
    flag(false)
  };
  useEffect(() => {
    setFiles(acceptedFiles);
    handleFileUpload(acceptedFiles[0]);
  }, [acceptedFiles]);

  const fileItems = files.map((file) => (
    <p key={file.path}>
      {file.path} - {file.size} bytes
    </p>
  ));
  return (
    <>
      <div {...getRootProps({ className: "dropzone" })}>
        <input className="input-zone" {...getInputProps()} />
        <div className="text-center">
          {isDragActive ? (
            <p className="dropzone-content">Release to drop the files here</p>
          ) : (
            <p className="dropzone-content">
              Drag and drop some files here, or click to select files
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
          <br />

          <br />
        </div>
        <aside>
          <p style={{ paddingBottom: "3vh" }}>{fileItems}</p>
        </aside>
      </div>
      {files?.length > 0 ? (
        <button
          type="button"
          onClick={removeFiles}
          style={{ marginTop: "2vh" }}
        >
          <CloseButton />
        </button>
      ) : null}
    </>
  );
};

export default DropFileBox;
