import React from 'react'
import styles from '../Styles/Components/HeaderFooter.module.css'

export default function Footer() {
  return (
    <div className={styles.footer}>
    <h2>© 2022 Coast to Coast </h2>   

                   <div classname = {styles.Column}>               
                      <a className={styles.FooterAbout} href="/about">
                      <b>About</b>
                      </a>
                      <a className={styles.FooterSignup}href="/signup">
                      <b>signup</b>
                      </a>
                      {/* <a style={{ display: "flex", justifyContent: "space-between" }}href="/login"> */}
                      <a className={styles.FooterLogin}href="/login">
                          <b>login</b>
                          </a>
                          <a className={styles.FooterFAQ}href="/about">
                          <b>FAQ</b>
                          </a>
                       </div>                
                       </div> 
                      

   
  )
}