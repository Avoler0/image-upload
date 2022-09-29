import '../styles/globals.css'
import '../styles/Menu.css'
import type { AppProps } from 'next/app'
import Menu from './component/menu'
import styled from 'styled-components'
import css from 'styled-jsx/css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div style={{display:"flex"}}>
      <Menu />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
