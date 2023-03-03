import HomeLayouts from '@/components/layouts/homeLayouts'

import type { ReactElement } from 'react'

export default function Home() {
  return <div></div>
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <HomeLayouts>{page}</HomeLayouts>
}
