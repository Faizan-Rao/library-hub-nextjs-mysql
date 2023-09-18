// Api to report Category via UadminInterface

import ExecuteQuery from "@/db/db";

export default async function handler (req, res)
{
    if(req.method === "GET")
    {
        try
        {
            const{uniId} = req.query;
            
            const query = "call Uadmin_bookGetCategory(?)";
            const values = [uniId];
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