// import formidable from "formidable";
// import path from "path";
// import fs from "fs/promises";

// // export const config = {
// //   api: {
// //     bodyParser: false,
// //   },
// // };

// const readFile = (req, saveLocally, res) => {
//   const options= {};
//   if (saveLocally) {
//     options.uploadDir = path.join(process.cwd(), "/public/images");
//     options.filename = (name, ext, path, form) => {
//       return Date.now().toString() + "_" + path.originalFilename;
//     };
//   }
//   options.maxFileSize = 4000 * 1024 * 1024;
//   const form = formidable(options);
//   return new Promise((resolve, reject) => {
//     form.parse(req, (err, fields, files) => {
//       if (err) console.log(err);
//       console.log(fields , files)
//       res.json({ fields, files});
//     });
//   });
// };

// const handler = async (req, res) => {
    
//         try {
//             console.log(process.cwd() + "/public", "/images")
//           await fs.readdir(path.join(process.cwd() + "/public", "/images"));
//         } catch (error) {
//           await fs.mkdir(path.join(process.cwd() + "/public", "/images"));
//         }
//         await readFile(req, true, res);
        
    
  
// };


// export default handler;
