import React from "react"
import "./BusinessCard.css"
import VanillaTilt from "vanilla-tilt"

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
        <div className="avatar">
          <img src={"/me_ia.jpg"} alt="" />
        </div>
        <div className="info">
          <span>linkdn</span>
          <span>github</span>
        </div>
      </div>
    </div>
  )
}

export default BusinessCard
