import React from "react";
import { FaFile, FaFolder, FaFilm } from "react-icons/fa";

function FileItem({ file }) {
  const fileName = file.path.split("/").pop();
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
      {getFileIcon(fileType)}
      <span className="flex-1">{fileName}</span>
      <span className="flex-1 ">{` (${fileType})`}</span>
      {fileType === "folder" && displayFolderCount(file.path)}
    </div>
  );
}

export default FileItem;
