import "../styles/Header.css"
import React, { useEffect } from "react"
const titleParts = {
  left: "<",
  right: "/>",
  main: "OctaviPrats",
}

const Header = () => {
  return <HeaderTitle />
}

export default Header

const HeaderTitle = () => {
  const [active, setActive] = React.useState(false)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setActive(true)
    } else {
      setActive(false)
    }
  }

  return (
    <div className="header-container">
      <div className="header">
        <div className="header-left-container">
          <div className={`header-left ${active && "header-left-merged"}`}>
            <span className="invi">{titleParts.left}</span>
            <span className="header-text main-text">{titleParts.main}</span>
            <span className="invi">{titleParts.right}</span>
          </div>
        </div>
        <div className="header-right">
          <span className="header-text">{titleParts.left}</span>
          <span
            className={`header-right-main-text invi ${
              active && "haeder-right-main-text-merged"
            }`}
          >
            <span>{titleParts.main}</span>
          </span>
          <span className="header-text">{titleParts.right}</span>
        </div>
      </div>
    </div>
  )
}
