import Head from 'next/head'

import React from "react";
import style from '../theme/utils.module.scss';

const siteTitle = "Pers-Test"
export default function Home() {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1>hallo</h1>

    </>
  )
}
