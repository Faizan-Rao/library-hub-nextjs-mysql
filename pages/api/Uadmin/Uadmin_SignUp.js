// Api to signup for being UadminInterface

import ExecuteQuery from "@/db/db";

export default async function handler (req, res)
{
    if(req.method === "POST")
    {
        try
        {
            const {adminName, adminEmail, adminPassword, uniId} = req.body;
            let query = "select * from admins where  adminEmail = ?";
            let values = [adminEmail]
            const CheckResult = await ExecuteQuery({query, values})
            if(CheckResult.length > 0)
            {
                return res.json({
                    status: "Duplicate",
                    message: "User already exist"
                })
            }
             query = "call Uadmin_Signup(?,?,?,?)";
             values = [adminName, adminEmail, adminPassword, uniId];
            const result = await ExecuteQuery({query, values});
    
            if(result.affectedRows > 0)
            {
                return res.json({
                    status: "success",
                    message: "New Admin has been created successfully",
                    
                })
            }
            else
            {
                return res.json({
                    status: "failure",
                    message: "New Admin has been created successfully"
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