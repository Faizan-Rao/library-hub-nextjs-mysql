// Api to reportAdmin via adminInterface

import ExecuteQuery from "@/db/db";

export default async function handler (req, res)
{
    if(req.method === "GET")
    {
        try
        {
            
    
            const query = "call Admin_reportAdmins()";
            const values = [];
            const result = await ExecuteQuery({query, values});
    
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
                    message: "No Record Found"
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