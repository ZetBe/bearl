import { Analytics } from '@vercel/analytics/react'
import { Montserrat } from 'next/font/google'
import StyledJsxRegistry from './registry'

const monsterrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'bearl',
  description: 'br태그 넣기 싫으면 붙여보세요!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={monsterrat.className}>
      <body>
        <StyledJsxRegistry>{children}</StyledJsxRegistry>
      </body>
      <Analytics />
    </html>
  )
}
