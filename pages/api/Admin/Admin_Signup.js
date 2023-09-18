// Api to signup for being adminInterface

import ExecuteQuery from "@/db/db";

export default async function handler (req, res)
{
    if(req.method === "POST")
    {
        try
        {const {adminName ,adminEmail, adminPassword} = req.body;
        let query = "select * from admins where adminEmail = ?"
        let values = [adminEmail];
        
        const checkResult = await ExecuteQuery({query, values});
        if(checkResult.length > 0)
        {
            return res.json({
                status: "Duplicate",
                message: "record already exist"
            })
        }
             query = "call Admin_Signup(?,?,?)";
             values = [adminName, adminEmail, adminPassword];
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
                    message: "New Admin has not been created successfully"
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