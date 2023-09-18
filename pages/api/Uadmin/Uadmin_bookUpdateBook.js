// Api to update book via UadminInterface

import ExecuteQuery from "@/db/db";

export default async function handler (req, res)
{
    if(req.method === "PUT")
    {
        try
        {
            const {bTitle, bPublisher, bDescription, bVersion, bImage, bId} = req.body;
            
            let query = "select * from books where idBooks = ?";
            let values = [bId]
            const CheckResult = await ExecuteQuery({query, values});
            if(CheckResult.length <= 0)
            {
                return res.json({
                    status: "Error",
                    message: "Record not exist"
                })
            }
             query = "call Uadmin_bookUpdateBook(?,?,?,?,?,?)";
             values = [bTitle, bPublisher, bDescription, bVersion, bImage, bId];
            const result = await ExecuteQuery({query, values});
    
            if(result.affectedRows > 0)
            {
                return res.json({
                    status: "success",
                    message: "Book has been Update"
                })
            }
            else
            {
                return res.json({
                    status: "failure",
                    message: "Book has not been Update"
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