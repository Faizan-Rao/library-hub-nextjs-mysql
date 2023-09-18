// Api to update Category via UadminInterface

import ExecuteQuery from "@/db/db";

export default async function handler (req, res)
{
    if(req.method === "PUT")
    {
        try
        {
            const {catId, categoryTitle} = req.body;
            let query = "select * from category where idCategory = ?";
            let values = [catId]
            const CheckResult = await ExecuteQuery({query, values});
            if(CheckResult.length <= 0)
            {
                return res.json({
                    status: "Error",
                    message: "Record not exist"
                })
            }
             query = "call Uadmin_bookUpdateCategory(?,?)";
             values = [catId, categoryTitle];
            const result = await ExecuteQuery({query, values});
    
            if(result.affectedRows > 0)
            {
                return res.json({
                    status: "success",
                    message: "Category has been Update"
                })
            }
            else
            {
                return res.json({
                    status: "failure",
                    message: "Category has not been Update"
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