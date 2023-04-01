//*Dropzone.js*//

import React, { useState } from "react";
import "../Styles/DropFileBox.css";
import { useDropzone } from "react-dropzone";
import { useEffect } from "react";
import { Button, CloseButton } from "@chakra-ui/react";
import { AddIcon} from '@chakra-ui/icons'
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
          <button type="button" onClick={open} className="btn">
          
          </button>
        </div>
        <aside>
          <div>{fileItems}</div>
        </aside>
        {files.length!==0?(""):(<Button type="button"  onClick={removeFiles} className="cancel">
        <AddIcon/>
      </Button>)}
      </div>
      {files.length===0?(""):(<Button type="button"  onClick={removeFiles} className="cancel">
        Cancel
      </Button>)}
      
    </>
  );
};

export default DropFileBox;
