'use client'

import Header from '../app-style/Header'
import Nav from '../app-style/Nav'
import Footer from '../app-style/Footer'

export default function MarkdownLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header></Header>
      <Nav></Nav>
      <section>{children}</section>
      <Footer></Footer>
    </>
  )
}
