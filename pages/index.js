import Head from 'next/head'
import SoapSplitBill from '../components/SoapSplitBill'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Soap Split Bill</title>
        <meta name="description" content="Soap Split Bill desc" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SoapSplitBill />
    </div>
  )
}
