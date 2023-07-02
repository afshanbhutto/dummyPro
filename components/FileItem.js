import React from "react";
import { FaFile, FaFolder, FaFilm } from "react-icons/fa";

function FileItem({ file }) {
  const fileName = file.path ? file.path.split("/").pop() : "Unknown";
  const fileType = file.type || "folder";

  function getFileIcon(fileType) {
    if (fileType.startsWith("video/")) {
      return <FaFilm className="" />;
    } else if (fileType === "folder") {
      return <FaFolder className="text-yellow-400" />;
    } else {
      return <FaFile className="text-white" />;
    }
  }

  function displayFolderCount(folderName) {
    const folderFiles = selectedFiles.filter((file) =>
      file.path.startsWith(folderName)
    );
    const fileCount = folderFiles.length - 1; // Exclude the folder itself from the count
    return fileCount > 0 ? `(${fileCount} files)` : "";
  }

  return (
    <div className="container mx-auto  bg-slate-300 flex flex-wrap items-center justify-center">
      <div className="file-icon">{getFileIcon(fileType)}</div>
      <div className="file-details">
        <div className="file-name">{fileName}</div>
        <div className="file-type">{fileType}</div>
      </div>
      {fileType === "folder" && displayFolderCount(file.path)}
    </div>
  );
}

export default FileItem;
