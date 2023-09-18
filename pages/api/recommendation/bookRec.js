// Api to give recommeded books based on feedback 
import ExecuteQuery from "@/db/db"

export default async function handler (req, res)
{
    if(req.method === "GET")
    {
        try
        {
            const  query = "select distinct idBooks, rating, bookTitle, bookPublisher, bookVersion, bookImage, bookDescription, bookPath from feedback inner join books using(idBooks) where rating > 2;  ";

            const  values = [];
            
            const result  = await ExecuteQuery({query, values});
            
                if(result.length > 0)
                {
                
                   return res.json({
                        status: "sucess",
                        message: "",
                        data:  result
                    })
                   
                }
            }
            
        
        catch(e)
        {
            console.log(e.message);
        }
    }
}