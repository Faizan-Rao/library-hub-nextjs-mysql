// Api to Login for adminInterface

import ExecuteQuery from "@/db/db";

export default async function handler (req, res)
{
    if(req.method === "POST")
    {
        try
        {
            const {adminEmail, adminPassword} = req.body;
            let query = "select * from admins where adminEmail = ? and adminRole = \"Super\""
            let values = [adminEmail];
            
            const checkResult = await ExecuteQuery({query, values});
            if(checkResult.length <= 0)
            {
                return res.json({
                    status: "Error",
                    message: "use correct credentials"
                })
            }
            query = "call Admin_Login(?,?)";
            values = [adminEmail, adminPassword];
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