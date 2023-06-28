// import MyComponent from "../components/MyComponent";

// export default function Home() {
//   return (
//     <div className="container-fluid mx-auto min-w-screen  text-center  w-screen bg-gray-400 min-h-screen ">
//       <h1 className="text-2xl  font-semibold pt-10 traccking-[2px]">
//         {" "}
//         Welcome
//       </h1>
//       {/* <MyComponent /> */}
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";

// const IndexPage = () => {
//   const [links, setLinks] = useState([]);

//   useEffect(() => {
//     // Fetch the data from the API route
//     fetch("/api/elements")
//       .then((response) => response.json())
//       .then((data) => setLinks(data));
//   }, []);

//   return (
//     <div>
//       <h1>Generated Links</h1>
//       <ul>
//         {links.map((link) => (
//           <li key={link.element}>
//             <a href={link.link}>{link.element}</a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default IndexPage;

// import React, { useState, useEffect } from "react";

// const IndexPage = () => {
//   const [file, setFile] = useState(null);
//   const [link, setLink] = useState(null);

//   const handleFileChange = (event) => {
//     const selectedFile = event.target.files[0];
//     setFile(selectedFile);
//   };
//   const handleSubmit = async () => {
//     const formData = new FormData();
//     formData.append("file", file);

//     try {
//       const response = await fetch("/api/files", {
//         method: "POST",
//         body: formData,
//       });

//       const data = await response.json();
//       setLink(data.link);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <div suppressHydrationWarning>
//       <h1>Upload File</h1>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleSubmit}>Upload</button>
//       {link && (
//         <div>
//           <h2>Generated Link</h2>
//           <a href={link}>{link}</a>
//         </div>
//       )}
//     </div>
//   );
// };

// export default IndexPage;

import FileUploadComponent from "@/components/FileUploadComponent";
// import MyComponent from "../components/MyComponent";

export default function Home() {
  return (
    <div className="container-fluid mx-auto min-w-screen  w-screen bg-gray-400 min-h-screen ">
      <h1 className="text-2xl  font-semibold pt-10 traccking-[2px]">
        {" "}
        Welcome
      </h1>
      <FileUploadComponent />
    </div>
  );
}
