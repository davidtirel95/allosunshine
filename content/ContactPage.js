import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Image from "next/image"

import mail from '../assets/icons8-mail-24.png'
import insta from '../assets/icons8-instagram-24.png'

export default function ContactPage({ contact }) {
    const { contactPageTitle, contactDescription, email, instagramId } = contact.fields

    return (
        <div>
            <div>
                <div>
                <h1 className="flex items-center justify-center italic">allôsunshine/</h1>
                </div>
            <h1 className="flex items-center justify-center font-ABeeZee font-bold">
                 { contactPageTitle }
            </h1>  
            </div>

            <div className='pt-10'>
                 <div className="flex items-center justify-center p-4 prose font-Baskervvol-Base">
                    {documentToReactComponents(contactDescription)}
                </div>
               </div>
               <div>
               <div className="flex pl-4 pt-10 font-bold">
                   <div className="pr-3">
                   <Image 
                    src={ mail }
                    alt='mail'
                    />
                   </div>
                { email }
                </div>
                </div>
               
                <div>
                <div className="flex pl-4 pt-1 font-bold">
                    <div className="pr-3" >
                    <Image 
                    src={ insta }
                    alt='mail'      
                    />
                    </div>
                    { instagramId }
                </div> 
                </div>
                <div>
                    <div className="pt-10 pl-4">
                        <h6 className="font-semibold">
                            desgin and development
                        </h6>
                        <p>emma rssx and david danger</p>
                    </div>
                </div>
            </div>
      
    )
}