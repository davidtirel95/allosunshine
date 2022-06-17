import Head from 'next/head'
import { createClient } from 'contentful'
import EnNewsPage from '../content/EnNewsPage'
import Enavbar from '../components/Enavbar'
export async function getStaticProps() {
  
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
  })
  const res = await client.getEntries({ content_type:'enNews'})

  return {
    props: {
      news: res.items
    }
  }
}


export default function News ({ news }) {
 
  return (
      <>
     <Head>
       <title>
         allôsunshine | news 
       </title>
       <meta name="keywords" content="allosunshine news page" /> 
     </Head>
     <Enavbar />
              <div>
                <h1 className="flex items-center justify-center italic">allôsunshine/</h1>
              </div>
            <div>
                <h1 className="flex items-center justify-center font-ABeeZee font-bold">news</h1>
            </div>
    <div className=''>
    {news.map(enNews => (
     <EnNewsPage key={enNews.sys.id} enNews={enNews} />
    ))}  
    </div>
    
  
    </> 
  )
}