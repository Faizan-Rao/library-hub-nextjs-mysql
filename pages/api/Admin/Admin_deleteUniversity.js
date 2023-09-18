// Api to DELETE University via adminInterface

import ExecuteQuery from "@/db/db";

export default async function handler (req, res)
{
    if(req.method === "POST")
    {
        try
        {
            const {uniId} = req.body;
    
            const query = "call Admin_deleteUniversity(?)";
            const values = [uniId];
            const result = await ExecuteQuery({query, values});
            
            if(result.affectedRows > 0)
            {
                return res.json({
                    status: "success",
                    message: "New University has been deleted"
                })
            }
            else
            {
                return res.json({
                    status: "failure",
                    message: "New University has not been deleted"
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