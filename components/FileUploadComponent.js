import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import FileDropZone from "./FileDropZone";
import SelectedFilesList from "./SelectedFilesList";

function FileUploadComponent() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [showLinkInfo, setShowLinkInfo] = useState(false);

  function handleFileUpload(acceptedFiles) {
    setSelectedFiles((prevSelectedFiles) => [
      ...prevSelectedFiles,
      ...acceptedFiles,
    ]);
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleFileUpload,
    // multiple: true,
  });

  function handleGetLinkClick() {
    setShowLinkInfo(true);
  }

  return (
    <div className="flex bg-slate-600 container h-4/5 mx-auto items-center flex-col md:flex-row">
      <FileDropZone
        getRootProps={getRootProps}
        getInputProps={getInputProps}
        isDragActive={isDragActive}
        handleGetLinkClick={handleGetLinkClick}
        selectedFiles={selectedFiles}
        showLinkButton={!showLinkInfo} // Pass showLinkButton prop to FileDropZone component
      />

      {showLinkInfo && <SelectedFilesList selectedFiles={selectedFiles} />}
    </div>
  );
}

export default FileUploadComponent;
