// Api to report book via UadminInterface

import ExecuteQuery from "@/db/db";

export default async function handler (req, res)
{
    if(req.method === "GET")
    {
        try
        {
            const {categoryTitle} = req.query;

            const query = "select * from books where match(bookTitle) against(?)";
            const values = [categoryTitle]
            const result = await ExecuteQuery({query, values});
            console.log(categoryTitle)
            if(result.length > 0)
            {
                return res.json({
                    status: "success",
                    message: "",
                    data: result
                })
            }
            else
            {
                return res.json({
                    status: "failure",
                    message: "No record found"
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