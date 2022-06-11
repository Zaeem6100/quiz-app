import type {NextPage} from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Quiz App</title>
        <meta name="description" content="Generated by create next app"/>
        <link rel="icon" href={"/favicon.ico"}/>
      </Head>

      <main>
        <p className='bg-black text-white'>Quiz App</p>
      </main>
    </div>
  )
}

export default Home
