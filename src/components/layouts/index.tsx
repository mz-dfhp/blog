import Head from 'next/head'

const Layouts: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Head>
        <title>mz</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <header>头部</header>
      <main>
        <div>{children}</div>
      </main>
    </>
  )
}

export default Layouts
