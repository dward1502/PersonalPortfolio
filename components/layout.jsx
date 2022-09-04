import React, { Fragment } from 'react'
// import Navigation from './Navigation/navigation'
import Footer from './Footer/footer'

import styles from '../sass/Home.module.scss'

const layout = ({children}) => {
  return (
    <Fragment>
        {/* <Navigation/> */}
        <main className={styles.content}>{children}</main>
        <Footer/>
    </Fragment>
  )
}

export default layout