// Api to Login for UadminInterface

import ExecuteQuery from "@/db/db";

export default async function handler (req, res)
{
    if(req.method === "POST")
    {
        try
        {
            const {adminEmail, adminPassword} = req.body;
            let query = "select * from admins where adminEmail = ? and adminRole = \"Uadmin\"";
            let values = [adminEmail]
            const CheckResult = await ExecuteQuery({query, values});
            console.log(CheckResult)
            if(CheckResult.length <= 0)
            {
                return res.json({
                    status: "Error",
                    message: "User not exist"
                })
            }
             query = "call Uadmin_Login(?,?)";
             values = [adminEmail, adminPassword];
            const result = await ExecuteQuery({query, values});
            console.log(result)
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