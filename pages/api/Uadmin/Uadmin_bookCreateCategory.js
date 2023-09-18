// Api to create category via UadminInterface

import ExecuteQuery from "@/db/db";

export default async function handler (req, res)
{
    if(req.method === "POST")
    {
        try
        {
            const {adminId, categoryTitle} = req.body;
    
            const query = "call Uadmin_bookCreateCategory(?,?)";
            const values = [adminId, categoryTitle];
            const result = await ExecuteQuery({query, values});
    
            if(result.affectedRows > 0)
            {
                return res.json({
                    status: "success",
                    message: "New Category has been added"
                })
            }
            else
            {
                return res.json({
                    status: "failure",
                    message: "New Category has not been added"
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