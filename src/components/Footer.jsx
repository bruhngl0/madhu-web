import React from 'react'
import "../styles/footer.scss"

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-content">
        <p>Contact us:</p>
        <a href="mailto:info@mindsi.in" className="footer-link">info@mindsi.in</a>
        <p className="footer-text">Phone: +123456789</p>
    </div>
   </footer>
  )
}

export default Footer
