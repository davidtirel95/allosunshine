import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export default function EnJoinPage({ enJoinPageTitle }) {
    const { enJoinTitle, enJoinDesc, button } = enJoinPageTitle.fields

    return (
        <div>
            <div>
           
            <h1 className="flex items-center justify-center pt-20">
                { enJoinTitle }
            </h1>  
            </div>

            <div>
                 <div className="prose font-Baskervvol-Base pt-20 pl-4 pr-4">
                    {documentToReactComponents(enJoinDesc)}
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