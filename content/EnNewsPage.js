import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { readableDate } from "../components/helpers"
export default function NewsPage({ enNews }) {
    const { enNewsContent, enNewsDate, enNewsDesc  } = enNews.fields

    

    return (
      
            <div className="flex justify-center items-center pt-4 pl">
                
                <div className=" border-2 rounded border-black p-0.5">
                    <h3>
                        { enNewsContent }
                    </h3>
                   
                    <div>
                       { readableDate(enNewsDate) }
                    
                 
           
                <div className="font-Baskervvol-Base">
                    {documentToReactComponents(enNewsDesc)}
                </div>
                </div>
                </div>              
                </div>
      
    
    )
}