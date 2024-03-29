import { Analytics } from '@vercel/analytics/react'
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
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
      <meta
        name="google-site-verification"
        content="zBs1Ng1bhNf_OicTIkiWacrEk6V_WlU_8WV7svSVWtE"
      />
      <meta
        name="naver-site-verification"
        content="7bcf7540e18d545efa703e5a5293abadde140c45"
      />

      <body>
        <StyledJsxRegistry>{children}</StyledJsxRegistry>
      </body>
      <GoogleTagManager gtmId="GTM-MHFQSBJC"></GoogleTagManager>
      <GoogleAnalytics gaId="G-T3M2MY6Q01"></GoogleAnalytics>
      <Analytics />
    </html>
  )
}
