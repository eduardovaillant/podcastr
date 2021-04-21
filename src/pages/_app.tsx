import '../styles/global.scss'

import Header from '../componets/Header'
import Player from '../componets/Player'

import styles from '../styles/app.module.scss'


function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.wrapper}>
      <main>
        <Header />
        <Component {...pageProps} />
      </main>
      <Player />
    </div>
  )
  
}

export default MyApp
