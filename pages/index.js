import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { Navbar } from '@components/Navbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main>
        <Header title="The Start of Next Development!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
