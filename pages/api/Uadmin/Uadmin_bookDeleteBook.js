// Api to delete book via UadminInterface

import ExecuteQuery from "@/db/db";

export default async function handler (req, res)
{
    if(req.method === "POST")
    {
        try
        {
            const {bid} = req.body;
    
            const query = "call Uadmin_bookDeleteBook(?)";
            const values = [bid];
            const result = await ExecuteQuery({query, values});
    
            if(result.affectedRows > 0)
            {
                return res.json({
                    status: "success",
                    message: "Book has been Deleted"
                })
            }
            else
            {
                return res.json({
                    status: "failure",
                    message: "Book has not been Deleted"
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