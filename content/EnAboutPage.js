import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export default function EnAboutPage({ enAbout }) {
    const { AboutPageTitle, AboutDescription } = enAbout.fields

    return (
        <div>
            <div>
            <div>
                <h1 className="flex items-center justify-center italic">allôsunshine/</h1>
                </div>
            <h1 className="flex items-center justify-center pb-5 font-ABeeZee font-bold ">
                { AboutPageTitle }
            </h1>  
            </div>
            <div>
                <div className="prose font-NotCourierSans font-medium p-2 pt-10 text-center italic ">
                    {documentToReactComponents(AboutDescription)}
                </div>
            </div>
      
        </div>
    )
}