// Api to report book via UadminInterface

import ExecuteQuery from "@/db/db";

export default async function handler (req, res)
{
    if(req.method === "GET")
    {
        try
        {
            const {bid} = req.query;
            const query = "select * from books where idBooks = ?";
            const values = [bid]
            const result = await ExecuteQuery({query, values});
        
            if(result.length > 0)
            {
                return res.json({
                    status: "success",
                    message: "",
                    data: result
                })
            }
            else
            {
                return res.json({
                    status: "failure",
                    message: "No record found"
                })
            }
        }
        catch(e)
        {
            return res.json({
                status: "error",
                message: "Something went wrong"
            })
        }
    }
}