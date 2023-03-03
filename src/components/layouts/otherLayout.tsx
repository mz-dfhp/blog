import Head from 'next/head'

const OtherLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Head>
        <title>其他</title>
        <header>头部</header>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <main>
        <div>{children}</div>
      </main>
    </>
  )
}

export default OtherLayout
