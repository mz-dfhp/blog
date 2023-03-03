import OtherLayout from '@/components/layouts/otherLayout'
import type { ReactElement } from 'react'

export default function About() {
  return (
    <>
      <div className="p-20px">关于</div>
    </>
  )
}

About.getLayout = function getLayout(page: ReactElement) {
  return <OtherLayout>{page}</OtherLayout>
}
