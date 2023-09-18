// Api to Login for UserInterface

import ExecuteQuery from "@/db/db";

export default async function handler (req, res)
{
    if(req.method === "POST")
    {
        try
        {
            const {userEmail, userPassword} = req.body;
            let query = "select * from users where userEmail = ? ";
            let values = [userEmail]
            const CheckResult = await ExecuteQuery({query, values});
            if(CheckResult.length <= 0)
            {
                return res.json({
                    status: "Error",
                    message: "User not exist"
                })
            }
             query = "call User_Login(?,?)";
             values = [userEmail, userPassword];
            const result = await ExecuteQuery({query, values});
    
            if(result.length > 0)
            {
                return res.json({
                    status: "success",
                    message: "Login Successful",
                    data: result[0]
                })
            }
            else
            {
                return res.json({
                    status: "failure",
                    message: "Login Failure"
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