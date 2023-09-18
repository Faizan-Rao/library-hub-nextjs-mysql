import fs from "fs/promises"

export default async function handler (req,res)
{
    if(req.method === "GET")
    {
        const {file} = req.query;
        
        let data = await fs.readFile(`./public/books/${file}`);
        
        res.json(data)
    }
}