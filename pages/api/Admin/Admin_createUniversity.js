// Api to create University via adminInterface

import ExecuteQuery from "@/db/db";

export default async function handler (req, res)
{
    if(req.method === "POST")
    {
        try
        {
            const {universityName} = req.body;
            const check = "Select * from university where universityName = ? ";
            const values = [universityName];
            let query = check
            const checkResult = await ExecuteQuery({query, values})

            if(checkResult.length > 0)
            {
                    return res.json({
                        status: "Duplicate",
                        message: "record already exist"
                    })
            }

            query = "call Admin_createUniversity(?)";
            const result = await ExecuteQuery({query, values});
    
            if(result.affectedRows > 0)
            {
                return res.json({
                    status: "success",
                    message: "New University has been added"
                })
            }
            else
            {
                return res.json({
                    status: "failure",
                    message: "New University has not been added"
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