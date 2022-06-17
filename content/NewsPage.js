import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { readableDate } from "../components/helpers"
export default function NewsPage({ news }) {
    const { newsContentTitle, newsDate, newsContent  } = news.fields

    

    return (
      
            <div className="flex justify-center items-center pt-4 pl">
                
                <div className=" border-2 rounded border-black p-0.5">
                    <h3>
                        { newsContentTitle }
                    </h3>
                   
                    <div>
                       { readableDate(newsDate) }
                    
                 
           
                <div className="font-Baskervvol-Base">
                    {documentToReactComponents(newsContent)}
                </div>
                </div>
                </div>              
                </div>
      
    
    )
}