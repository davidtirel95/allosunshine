import Head from 'next/head'
import { createClient } from 'contentful'
import EnAboutPage from '../content/EnAboutPage'
import Enavbar from '../components/Enavbar'

export async function getStaticProps() {
  
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
  })
  const res = await client.getEntries({ content_type:'enAbout'})

  return {
    props: {
      about: res.items
    }
  }
}


export default function Home({ about }) {
 
  return (
      <>
     <Head>
           
       <title>
         allôsunshine | about 
       </title>
       <meta name="keywords" content="allosunshine about page" /> 
       
     </Head>
     <Enavbar />
    <div className='flex items-center justify-center'>
    {about.map(enAbout => (
     <EnAboutPage key={enAbout.sys.id} enAbout={enAbout} />
    ))}    
    </div>
    
  
    </> 
  )
}
