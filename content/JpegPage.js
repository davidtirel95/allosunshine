import Image from "next/image"
import { readableDate } from "../components/helpers"

/* export default function JpegPage({ jpeg }) {
    const { jpegDate, frame } = jpeg.fields
    console.log(jpeg)
    return (
        <div>
            <div>
           
            <h1 className="items-center justify-center pt-20">
                { readableDate(jpegDate) }
            </h1>  
            </div>

            <div>
            <div className='items-center justify-center pt-20'>
             <Image
                src={'https:' + frame}
                width={frame.fields.file.details.image.width}
                height={frame.fields.file.details.image.height}
             />
                </div>    
            </div>
      
        </div>
    )
} */