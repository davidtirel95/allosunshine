import Head from 'next/head'
import { createClient } from 'contentful'
import EnJoinPage from '../content/EnJoinPage'
import Enavbar from '../components/Enavbar'
export async function getStaticProps() {
  
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
  })
  const res = await client.getEntries({ content_type:'enJoinPageTitle'})

  return {
    props: {
      join: res.items
    }
  }
}


export default function Join ({ join }) {
 
  return (
      <>
     <Head>
       <title>
         allôsunshine | join 
       </title>
       <meta name="keywords" content="allosunshine join" /> 
     </Head>
     <Enavbar />
     <div>
                <h1 className="flex items-center justify-center italic">allôsunshine/</h1>
              </div>
            <div>
                <h1 className="flex items-center justify-center font-ABeeZee font-bold">join</h1>
            </div>
    <div className='flex items-center justify-center'>
    {join.map(enJoinPageTitle => (
     <EnJoinPage key={enJoinPageTitle.sys.id} enJoinPageTitle={enJoinPageTitle} />
    ))}    
    </div>
    
  
    </> 
  )
}