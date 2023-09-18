// Api to signup for being UadminInterface

import ExecuteQuery from "@/db/db";

export default async function handler (req, res)
{
    if(req.method === "POST")
    {
        try
        {
            const {userName, userEmail, userPassword} = req.body;
            let query = "select * from users where userEmail = ?";
            let values = [userEmail]
            const CheckResult = await ExecuteQuery({query, values})
            if(CheckResult.length > 0)
            {
                return res.json({
                    status: "Duplicate",
                    message: "User already exist"
                })
            }
             query = "call User_Signup(?,?,?)";
             values = [userName, userEmail, userPassword];
            const result = await ExecuteQuery({query, values});
    
            if(result.affectedRows > 0)
            {
                return res.json({
                    status: "success",
                    message: "New User has been created successfully",
                    
                })
            }
            else
            {
                return res.json({
                    status: "failure",
                    message: "New User has been created successfully"
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