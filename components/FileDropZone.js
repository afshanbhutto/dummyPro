import React from "react";
import FileItem from "./FileItem";

function FileDropZone({
  getRootProps,
  getInputProps,
  isDragActive,
  handleGetLinkClick,
  selectedFiles,
}) {
  return (
    <div className="flex flex-col w-full md:basis-1/3">
      <div
        {...getRootProps()}
        className={`${
          isDragActive ? "dropzone-active" : "dropzone"
        } bg-slate-500  p-4  h-2/5 flex flex-col`}
      >
        {isDragActive ? (
          <p>Drop files here...</p>
        ) : (
          <div className="uppercase text-yellow-700 flex flex-col w-full justify-start ">
            <button className="uppercase flex items-start">
              Upload files{" "}
            </button>
            <span className="uppercase flex items-center justify-center text-2xl">
              OR
            </span>
            <button className="uppercase flex justify-end">
              Select folders
            </button>
          </div>
        )}

        <input {...getInputProps()} />
        {selectedFiles.map((file, index) => (
          <FileItem key={index} file={file} />
        ))}
      </div>
      {selectedFiles.length > 0 && (
        <div className="mt-2 text-center">
          <button
            className=" text-yellow-700 text-xl  py-2 px-4 rounded uppercase tracking-[4px]  text-center"
            onClick={handleGetLinkClick}
          >
            Get a Link
          </button>
        </div>
      )}
    </div>
  );
}

export default FileDropZone;
