import Head from "next/head";
import Enavbar from '../components/Enavbar'
import EnJpegPage from "../content/EnJpegPage";
import { createClient } from 'contentful'


export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
  })
  const res = await client.getEntries({ content_type:'jpeg'})

  return {
    props: {
      jpeg: res.items
    }
  }
}

export default function Jpeg ({ jpeg }) {
 
  return (
      <>
     <Head>
       <title>
         allôsunshine | jpeg 
       </title>
       <meta name="keywords" content="allosunshine join" /> 
     </Head>
     <Enavbar />
     <div>
                <h1 className="flex items-center justify-center italic">allôsunshine/</h1>
              </div>
            <div>
                <h1 className="flex items-center justify-center font-ABeeZee font-bold">jpeg</h1>
            </div>
   {/*  <div className='flex items-center justify-center'>
    {jpeg.map(jpeg => (
     <EnJpegPage key={jpeg.sys.id} jpeg={jpeg} />
    ))}    
    </div> */}
    
  
    </> 
  )
}