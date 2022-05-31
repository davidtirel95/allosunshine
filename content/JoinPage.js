import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export default function JoinPage({ join }) {
    const { joinPageTitle, joinDescription, button } = join.fields

    return (
        <div>
            <div>
           
            <h1 className="flex items-center justify-center pt-20">
                { joinPageTitle }
            </h1>  
            </div>

            <div>
                 <div className="prose font-Baskervvol-Base pt-20 ">
                    {documentToReactComponents(joinDescription)}
                </div>
            <div className='flex items-center justify-center pt-20'>
                <button className="border-solid border-2 border-black rounded-lg pl-1 pr-1 ">
                    { button }
                </button>
                </div>    
            </div>
      
        </div>
    )
}