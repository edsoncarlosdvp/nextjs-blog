import Head from 'next/head'

import Layout, { siteTitle } from '../components/Layout'
import homeStyles from '../styles/Home.module.css'
import utilStyles from '../styles/utils.module.css'

import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home() {
  return (
    <Layout className={homeStyles.container} home>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={utilStyles.headingMd}>
        <h2>Curiosidades:</h2>
        <ul>
          <li>Prato favorito: <span>Fundo.</span></li>
          <li>Sobremesa favorito: <span>Torta de maça</span></li>
          <li>Anime favorito: <span>Dragon Ball Z</span></li>
          <li>Tokusatsu favorito: <span>Jiraya</span></li>
          <li>Game favorito: <span>Franquia Tomb Raider / Sonic</span></li>
          <li>Time: <span>Flamengo.</span></li>
        </ul>
      </section>

      <footer className={homeStyles.footer}>
        <span>Edson Carlos. Todos os direitos reservados dessa bagaça.</span>
      </footer>
    </Layout>
  )
}
