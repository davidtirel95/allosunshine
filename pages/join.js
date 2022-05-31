import Head from 'next/head'
import { createClient } from 'contentful'
import JoinPage from '../content/JoinPage'

export async function getStaticProps() {
  
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
  })
  const res = await client.getEntries({ content_type:'join'})

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
     <div>
                <h1 className="flex items-center justify-center italic">allôsunshine/</h1>
              </div>
            <div>
                <h1 className="flex items-center justify-center font-ABeeZee font-bold">join</h1>
            </div>
    <div className='flex items-center justify-center'>
    {join.map(join => (
     <JoinPage key={join.sys.id} join={join} />
    ))}    
    </div>
    
  
    </> 
  )
}