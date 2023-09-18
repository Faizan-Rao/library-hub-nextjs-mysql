// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// get all University records
import ExecuteQuery from "@/db/db"

export default async function handler(req, res) {
  if(req.method === "GET")
  {
    try
    {
      const {rm} = req.query;
      const query = "select * from university;"
      const values = []
      const result = await ExecuteQuery({query, values})
     console.log(rm)
      if(result.length > 0)
        res.json(result);
      else
        res.json({status: "No record Found"})
    }
    catch(e)
    {
      res.json({status : "Something went wrong"})
    }
  }
  
}
