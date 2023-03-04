import Head from 'next/head'
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
    </>
  )
}

export default Layouts
