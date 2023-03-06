import "../styles/Header.css"
import React from "react"
const titleParts = {
  left: "<",
  right: "/>",
  main: "OctaviPrats",
}

const Header = () => {
  const [active, setActive] = React.useState(false)
  return (
    <div className="header-container">
      <div className="header">
        <div className="header-left-container">
          <div className={`header-left ${active && "header-left-merged"}`}>
            <span className="invi">{titleParts.left}</span>
            <div className="main-text">{titleParts.main}</div>
            <span className="invi">{titleParts.right}</span>
          </div>
        </div>
        <div className="header-right">
          <span>{titleParts.left}</span>
          <div
            className={`header-right-main-text invi ${
              active && "haeder-right-main-text-merged"
            }`}
          >
            <span>{titleParts.main}</span>
          </div>
          <span>{titleParts.right}</span>
        </div>
        <button onClick={() => setActive(!active)}>setActive</button>
      </div>
    </div>
  )
}

export default Header
