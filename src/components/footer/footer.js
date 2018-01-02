import React from 'react'

import Styles from './footer.css'

const Footer = ({ onClickAddHandler }) => {
  return (
    <footer className={Styles.Footer}>
      <button className={Styles.FooterAddBtn} type="button" onClick={onClickAddHandler}>
        🆕
      </button>
    </footer>
  )
}

export default Footer
