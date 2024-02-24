import React from "react"
import "./BusinessCard.css"
import VanillaTilt from "vanilla-tilt"
import LofiAnimation from "src/components/Animations/LofiAnimation"

const BusinessCard = () => {
  const cardRef = React.useRef<HTMLDivElement>(null)

  const TiltSettings = {
    reverse: false, // reverse the tilt direction
    //   max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1, // 2 = 200%, 1.5 = 150%, etc..
    // speed: 300, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    // easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
    glare: true, // if it should have a "glare" effect
    "max-glare": 0.2, // the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
    "glare-prerender": false, // false = VanillaTilt creates the glare elements for you, otherwise
    // you need to add .js-tilt-glare>.js-tilt-glare-inner by yourself
  }

  React.useEffect(() => {
    cardRef.current && VanillaTilt.init(cardRef.current, TiltSettings)
  }, [])

  return (
    <div className="businessCardContainer" ref={cardRef}>
      <div className="businessCard">
        <div className="info">
          <div className="name">
            <h3>Octavi Prats</h3>
            <p>1994 / Barcelona</p>
            <div className="animation-container">
              <LofiAnimation />
            </div>
          </div>
          <div className="networks">
            <NetworkItem text="Eterlast" iconName="ic_work" url="https://www.eterlast.com/" />
            <NetworkItem text="UPC" iconName="ic_bookmark_book" url="https://www.fib.upc.edu/en" />
            <NetworkItem text="/octaviprats" iconName="ic_github" url="https://github.com/OctaviPrats" />
            <NetworkItem text="/octavi-prats" iconName="ic_linkedin" url="https://www.linkedin.com/in/octavi-prats/" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BusinessCard

const NetworkItem = ({ iconName, text, url }: any) => {
  const iconSize = '32px'
  return (
    <a href={url} target="_blanc" className="network-item" >
      <img src={`${iconName}.svg`} alt={iconName} width={iconSize} height={iconSize} />
      <span>{text}</span>
    </a>
  )
}
