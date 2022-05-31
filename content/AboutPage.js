import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export default function AboutPage({ page }) {
    const { aboutPageTitle, aboutDescription } = page.fields

    return (
        <div>
            <div>
            <div>
                <h1 className="flex items-center justify-center italic">allôsunshine/</h1>
                </div>
            <h1 className="flex items-center justify-center pb-5 font-ABeeZee font-bold ">
                { aboutPageTitle }
            </h1>  
            </div>
            <div>
                <div className="prose font-NotCourierSans font-medium p-2 pt-10 text-center italic ">
                    {documentToReactComponents(aboutDescription)}
                </div>
            </div>
      
        </div>
    )
}