// pages/index.js
import Head from 'next/head';
import QRCodeGenerator from '../components/QRCodeGenerator';

export default function Home() {
  return (
    <div>
      <Head>
        <title>QR Code Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <QRCodeGenerator />
      </main>
    </div>
  );
}
