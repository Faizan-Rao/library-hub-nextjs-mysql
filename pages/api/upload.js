import formidable from "formidable";
import path from "path";
import fs from "fs/promises";

export const config = {
  api: {
    bodyParser: false,
  },
};

const readFile = (req, saveLocally) => {
  const options= {};
  if (saveLocally) {
    options.uploadDir = path.join(process.cwd(), "/public/books");
    options.filename = (name, ext, path, form) => {
      return Date.now().toString() + "_" + path.originalFilename.split(" ").join("_");
    };
  }
  options.maxFileSize = 4000 * 1024 * 1024;
  const form = formidable(options);
  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve({  fields, files });
    });
  });
};

const handler = async (req, res) => {
  try {
    await fs.readdir(path.join(process.cwd() + "/public", "/books"));
  } catch (error) {
    await fs.mkdir(path.join(process.cwd() + "/public", "/books"));
  }
  try
  {
    console.log(req.body)
      const promise =  await readFile(req, true);
      return res.json({data: promise.files})
  }
  catch(e)
  {
    res.status(400).json({})
  }
};


export default handler;
