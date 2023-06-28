// // Example API route to generate links for uploaded files

// import multer from "multer";

// const upload = multer({ dest: "uploads/" });

// export default upload.single("file")(req, res) => {
//   // Retrieve the uploaded file
//   const file = req.file;

//   // Generate a link for the file
//   const link = `https://example.com/uploads/${file.filename}`;

//   // Return the link as the response
//   res.status(200).json({ link });
// };
