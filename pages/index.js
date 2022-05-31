import Head from 'next/head'
import { createClient } from 'contentful'
import AboutPage from '../content/AboutPage'

export async function getStaticProps() {
  
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
  })
  const res = await client.getEntries({ content_type:'page'})

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
  
    <div className='flex items-center justify-center'>
    {about.map(page => (
     <AboutPage key={page.sys.id} page={page} />
    ))}    
    </div>
    
  
    </> 
  )
}
