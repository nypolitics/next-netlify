import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { Navbar } from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <div>Hello World</div>
    </div>
  );
}
