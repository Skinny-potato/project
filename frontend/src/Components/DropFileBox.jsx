//*Dropzone.js*//

import React, { useState } from "react";
import "../Styles/DropFileBox.css";
import { useDropzone } from "react-dropzone";
import { useEffect } from "react";
import { CloseButton } from "@chakra-ui/react";
const DropFileBox = ({ open, handleFileUpload }) => {
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({});

  const removeFiles = () => {
    handleFileUpload(null);
    setFiles([]);
  };
  useEffect(() => {
    setFiles(acceptedFiles);
    handleFileUpload(acceptedFiles[0]);
  }, [acceptedFiles]);

  const fileItems = files.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
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
          <button type="button" onClick={open} className="btn">
          
          </button>
          <br />
          <br />
          <br />
          <br />
        </div>
        <aside>
          <ul>{fileItems}</ul>
        </aside>
      </div>
      <button type="button" onClick={removeFiles}>
        <CloseButton />
      </button>
    </>
  );
};

export default DropFileBox;
