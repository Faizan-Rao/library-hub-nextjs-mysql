// Api to updateUser via adminInterface

import ExecuteQuery from "@/db/db";

export default async function handler (req, res)
{
    if(req.method === "PUT")
    {
        try
        {   
            const {userName, userEmail, userPassword, userId} = req.body;
            let query = "select * from users where idUser = ?";
            let values = [userId];
            const checkResult = await ExecuteQuery({query, values});
            if(checkResult.length <= 0)
            {
                return res.json({
                    status: "Error",
                    message: "User not exist"
                })
            }
            console.log(checkResult)
             query = "call Admin_updateUser(?,?,?,?)";
             values = [userName, userEmail, userPassword, userId];
            const result = await ExecuteQuery({query, values});
    
            if(result.affectedRows > 0)
            {
                return res.json({
                    status: "success",
                    message: "User has been updated successfully"
                    
                })
            }
            else
            {
                return res.json({
                    status: "failure",
                    message: "User has not been updated successfully"
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