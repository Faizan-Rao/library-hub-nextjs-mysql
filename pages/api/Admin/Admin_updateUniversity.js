// Api to updateUniversity via adminInterface

import ExecuteQuery from "@/db/db";

export default async function handler (req, res)
{
    if(req.method === "PUT")
    {
        try
        {   

            const {uniId, universityName} = req.body;
            let query = "select * from university where idUniversity = ?";
            let values = [uniId];
            const checkResult = await ExecuteQuery({query, values});
            if(checkResult.length <= 0)
            {
                return res.json({
                    status: "Error",
                    message: "Record not exist"
                })
            }
            
            query = "call Admin_updateUniversity(?,?)";
            values = [universityName, uniId];
            const result = await ExecuteQuery({query, values});
    
            if(result.affectedRows > 0)
            {
                return res.json({
                    status: "success",
                    message: "University has been updated successfully"
                    
                })
            }
            else
            {
                return res.json({
                    status: "failure",
                    message: "University has not been updated successfully"
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