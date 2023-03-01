import Layouts from '@/components/layouts'
import '@unocss/reset/tailwind.css'
import type { AppProps } from 'next/app'
import 'uno.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layouts>
        <Component {...pageProps} />
      </Layouts>
    </>
  )
}
