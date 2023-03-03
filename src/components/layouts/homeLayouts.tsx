import Head from 'next/head'
import HomeThree from '../three/homeThree'
import { Homeheader } from './header'
const Layouts: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Head>
        <title>mz-blog</title>
        <meta property="og:mz-blog" content="mz-blog" key="mz-blog" />
      </Head>
      <main className="z-1 relative">
        <Homeheader />
        <div>{children}</div>
      </main>
      <div className="fixed top-0 right-0 bottom-0 left-0 min-h-100vh  bg-gradient-to-t from-#fd746c  to-#2c3e50">
        <HomeThree />
      </div>
    </>
  )
}

export default Layouts
