// Api to create Book via UadminInterface

import ExecuteQuery from "@/db/db";

export default async function handler (req, res)
{
    if(req.method === "POST")
    {
        try
        {
            const {bTitle, bPublisher, bDescription, bVersion,bpath, catId} = req.body;
            

            let query = "call Uadmin_bookCreateBook(?,?,?,?,?,?)";
            let values = [bTitle, bPublisher, bDescription, bVersion,bpath, catId];
            const result = await ExecuteQuery({query, values});
    
            if(result.affectedRows > 0)
            {
                return res.json({
                    status: "success",
                    message: "New Book has been added"
                })
            }
            else
            {
                return res.json({
                    status: "failure",
                    message: "New Book has not been added"
                })
            }
        }
        catch(e)
        {
            return res.json({
                status: "error",
                message: e.message
            })
        }
    }
}