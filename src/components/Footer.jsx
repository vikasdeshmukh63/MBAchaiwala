import React from 'react'

const Footer = () => {

  const currentDate = new Date().getFullYear();


  const footerLinks = (element) => {
    const allFooterLinks = document.querySelectorAll(".footerLinks");

    switch (element) {
      case 0:
        allFooterLinks.forEach((item, index) => {
          return index === 0 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
        })
        break;

      case 1:
        allFooterLinks.forEach((item, index) => {
          return index === 1 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
        })
        break;

      case 2:
        allFooterLinks.forEach((item, index) => {
          return index === 2 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
        })
        break;

      case 3:
        allFooterLinks.forEach((item, index) => {
          return index === 3 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
        })
        break;

      case 4:
        allFooterLinks.forEach((item, index) => {
          return index === 4 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
        })
        break;

      case 5:
        allFooterLinks.forEach((item, index) => {
          return index === 5 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
        })
        break;

      default:
        allFooterLinks.forEach((item) => {
          return (item.style.opacity = 1)
        })
        break;
    }
  }

  function linksBackToNormal() {
    const allFooterLinks = document.querySelectorAll(".footerLinks");
    allFooterLinks.forEach((item) => {
      item.style.opacity = 1;
    })
  }

  return (
    <div>
      <footer>
        <h1>
          Let's
          <br />
          #connectoncutting?
        </h1>

        <aside onMouseLeave={linksBackToNormal}>
          <a href="/" className="footerLinks" data-cursorpointermini={true} onMouseOver={() => footerLinks(0)}>Home</a>
          <a href="/story" className="footerLinks" data-cursorpointermini={true} onMouseOver={() => footerLinks(1)}>Story</a>
          <a href="/media" className="footerLinks" data-cursorpointermini={true} onMouseOver={() => footerLinks(2)}>Media</a>
          <a href="/franchise" className="footerLinks" data-cursorpointermini={true} onMouseOver={() => footerLinks(3)}>Franchise</a>
          <a href="/events" className="footerLinks" data-cursorpointermini={true} onMouseOver={() => footerLinks(4)}>Events</a>
          <a href="/chaiwalacares" className="footerLinks" data-cursorpointermini={true} onMouseOver={() => footerLinks(5)}>Chai Wala Cares</a>
        </aside>

        <div>
          <h5>Email</h5>
          <a href="mailto:info@mbachaiwala.com">info@mbachaiwala.com</a>
          <a href="mailto:franchise@mbachaiwala.com">franchise@mbachaiwala.com</a>
        </div>
        <div>
          <h5>Phone</h5>
          <a href="tel: +911111111111">+911111111111</a>
        </div>

        <p>© COPYRIGHT {currentDate} MBA CHAIWALA. MADE MY</p>
      </footer>
      <div className="footer"></div>
    </div>
  )
}

export default Footer
