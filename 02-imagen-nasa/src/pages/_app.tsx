import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['100', '300', '500'],
  subsets: ['latin'],
  preload: true
})

export default function App ({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  )
}
