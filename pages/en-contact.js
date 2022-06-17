import Head from 'next/head'
import { createClient } from 'contentful'
import EnContactPage from '../content/EnContactPage'
import Enavbar from '../components/Enavbar'


export async function getStaticProps() {
  
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
  })
  const res = await client.getEntries({ content_type:'enContact'})

  return {
    props: {
      contact: res.items
    }
  }
}


export default function Contact({ contact }) {
 
 
  return (
      <>
     <Head>
       <title>
         allôunshine | contact 
       </title>
       <meta name="keywords" content="allosunshine contact page" /> 
     </Head>
    <Enavbar />
    <div className='flex items-center justify-center'>
     {contact.map(enContact => (
     <EnContactPage key={enContact.sys.id} enContact={enContact} />
    ))}    
    </div>
  
    </> 
  )
}