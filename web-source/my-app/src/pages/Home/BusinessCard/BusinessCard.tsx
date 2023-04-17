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
          <div className="header">
            <h3>Octavi</h3>
          </div>
          <div className="networks">
            <GithubIcon />
            <LinkedinIcon />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BusinessCard

const GithubIcon = () => {
  return (
    <div className="button">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>github</title>
        <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
      </svg>
    </div>
  )
}
const LinkedinIcon = () => {
  return (
    <div className="button">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>linkedin</title>
        <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
      </svg>
    </div>
  )
}
