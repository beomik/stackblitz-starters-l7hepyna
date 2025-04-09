import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '올케어 - 모두를 위한 식자재',
  description: '전국 어린이집·요양원·병원·학교·기업에 믿고 납품하는 올케어',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}