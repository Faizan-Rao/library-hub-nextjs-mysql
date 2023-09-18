// Api to report book via UadminInterface

import ExecuteQuery from "@/db/db";

export default async function handler (req, res)
{
    if(req.method === "POST")
    {
        try
        {
            const {catId} = req.body;
            const query = "call Uadmin_bookGetBook(?)";
            const values = [catId]
            const result = await ExecuteQuery({query, values});
          
            if(result.length > 0)
            {
                return res.json({
                    status: "success",
                    message: "",
                    data: result[0]
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
    if(req.method === "GET")
    {
        try
        {
            const {uniId} = req.query;
            const query = "select idBooks, bookTitle, bookPublisher, bookVersion, bookImage, bookDescription, bookPath, universityName from university inner join admins using(idUniversity) inner join addcategory using(idAdmins) inner join category using(idCategory) inner join books using (idCategory) where idUniversity = ?"
            const values = [uniId]
            const result = await ExecuteQuery({query, values});
          
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

// Api to report book via UadminInterface



