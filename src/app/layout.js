'use client';

import '../app/globals.css'
import { Banner } from "@/components/top-banner/top-banner";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";
import Head from 'next/head';


export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <title>
          Male Fashion
        </title>
        <link rel='icon' href='/favicon.png' />
      </Head>
      <Banner />
      <Header />
      {children}
      <Footer />
    </>
  );
}
