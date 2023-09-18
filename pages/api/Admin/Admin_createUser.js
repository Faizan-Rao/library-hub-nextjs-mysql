// Api to create User via adminInterface

import ExecuteQuery from "@/db/db";

export default async function handler (req, res)
{
    if(req.method === "POST")
    {
        try
        {
            const {userName, userEmail, userPassword} = req.body;
            const check = "Select * from users where userEmail = ? ";
            let values = [userEmail];
            let query = check
            const checkResult = await ExecuteQuery({query, values})

            if(checkResult.length > 0)
            {
                    return res.json({
                        status: "Duplicate",
                        message: "record already exist"
                    })
            }
            
    
             query = "call Admin_createUser(?,?,?)";
             values = [userName, userEmail, userPassword];
            const result = await ExecuteQuery({query, values});
    
            if(result.affectedRows > 0)
            {
                return res.json({
                    status: "success",
                    message: "New User has been added"
                })
            }
            else
            {
                return res.json({
                    status: "failure",
                    message: "New User has not been added"
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