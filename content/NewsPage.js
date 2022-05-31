import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export default function NewsPage({ news }) {
    const { newsContentTitle, newsDate, newsContent  } = news.fields

    return (
      
            <div className=" flex justify-center items-center p-4 ">
                <div className=" ">
                    <h3>
                        { newsContentTitle }
                    </h3>
                   
                    <div>
                        {newsDate}
                    
                 
           
                <div className="font-Baskervvol-Base">
                    {documentToReactComponents(newsContent)}
                </div>
                </div>
                </div>              
                </div>
      
    
    )
}