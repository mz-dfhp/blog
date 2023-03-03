import Head from 'next/head'

const Layouts: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Head>
        <title>mz</title>
        <meta property="og:title" content="mz-blog" key="title" />
      </Head>
      <main className="z-1 relative">
        <div>{children}</div>
      </main>
      <div className="fixed top-0 right-0 bottom-0 left-0 min-h-100vh  bg-gradient-to-t from-#fd746c  to-#2c3e50">
        <div></div>
      </div>
    </>
  )
}

export default Layouts
