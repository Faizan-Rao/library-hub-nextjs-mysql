// Api to report book via UadminInterface

import ExecuteQuery from "@/db/db";

export default async function handler (req, res)
{
    if(req.method === "GET")
    {
        try
        {
            const {catId} = req.query;
            const query = "call Uadmin_bookGetBook(?)";
            const values = [catId]
            const result = await ExecuteQuery({query, values});
            console.log(catId)
            if(result.length > 0)
            {
                return res.json({
                    status: "success",
                    message: "",
                    data: result[0]
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