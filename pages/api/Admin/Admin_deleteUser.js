// Api to DELETE User via adminInterface

import ExecuteQuery from "@/db/db";

export default async function handler (req, res)
{
    if(req.method === "POST")
    {
        try
        {
            const {userId} = req.body;
    
            const query = "call Admin_deleteUser(?)";
            const values = [userId];
            const result = await ExecuteQuery({query, values});
    
            if(result.affectedRows > 0)
            {
                return res.json({
                    status: "success",
                    message: "New User has been deleted"
                })
            }
            else
            {
                return res.json({
                    status: "failure",
                    message: "New User has not been deleted"
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