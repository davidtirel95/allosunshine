import Head from 'next/head'
import { createClient } from 'contentful'
import ContactPage from '../content/ContactPage'

export async function getStaticProps() {
  
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
  })
  const res = await client.getEntries({ content_type:'contact'})

  return {
    props: {
      contact: res.items
    }
  }
}


export default function Contact({ contact }) {
  console.log(contact)
 
  return (
      <>
     <Head>
       <title>
         allôunshine | contact 
       </title>
       <meta name="keywords" content="allosunshine contact page" /> 
     </Head>
  
    <div className='flex items-center justify-center'>
     {contact.map(contact => (
     <ContactPage key={contact.sys.id} contact={contact} />
    ))}    
    </div>
  
    </> 
  )
}