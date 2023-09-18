// Api to signup for being adminInterface

import ExecuteQuery from "@/db/db";

export default async function handler (req, res)
{
    if(req.method === "POST")
    {
        try
        {const {adminId} = req.body;
        let query = "select * from admins where idAdmins = ?"
        let values = [adminId];
        
        const checkResult = await ExecuteQuery({query, values});
        if(checkResult.length <= 0)
        {
            return res.json({
                status: "Error",
                message: "record not exist"
            })
        }
             query = "delete from admins where idAdmins = ?";
             values = [adminId];
            const result = await ExecuteQuery({query, values});
    
            if(result.affectedRows > 0)
            {
                return res.json({
                    status: "success",
                    message: "New Admin has been deleted successfully",
                    
                })
            }
            else
            {
                return res.json({
                    status: "failure",
                    message: "New Admin has not been deleted successfully"
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