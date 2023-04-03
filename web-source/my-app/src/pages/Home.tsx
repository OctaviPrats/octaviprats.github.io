import React from "react"
import "../styles/pages/Home.css"
const Home = () => {
  return (
    <div className="home">
      <MagicScroll />
      <div className="home-content">
        <Presentation />
        <SkillSet />
        <LastProject />
      </div>
    </div>
  )
}

export default Home

const MagicScroll = () => {
  const magicTrackerRef = React.useRef<HTMLDivElement>(null)
  React.useEffect(() => {
    const handleScroll = () => {
      if (magicTrackerRef.current) {
        magicTrackerRef.current.style.top = `${Math.max(
          (window.scrollY / document.body.scrollHeight) * window.innerHeight,
          window.innerHeight * 0.1,
        )}px`
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  return (
    <div className="magicContainer">
      <div className="magicBar" />
      <div ref={magicTrackerRef} className="magicTracker" />
    </div>
  )
}

const Presentation = () => {
  return (
    <div className="presentation">
      <h1>Hello, I’m a Software Engineer.</h1>
      <p>Coding since 2012, product oriented engineer. FrontEnd Specialized.</p>
      <BusinessCard />
    </div>
  )
}

const BusinessCard = () => {
  return (
    <div className="businessCard">
      <span>business card</span>
    </div>
  )
}

const SkillSet = () => {
  return (
    <div className="home-section">
      <div className="home-section-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24px"
          height="24px"
        >
          <path
            fill="#f0f0f0"
            d="M12.89,3L14.85,3.4L11.11,21L9.15,20.6L12.89,3M19.59,12L16,8.41V5.58L22.42,12L16,18.41V15.58L19.59,12M1.58,12L8,5.58V8.41L4.41,12L8,15.58V18.41L1.58,12Z"
          />
        </svg>
      </div>
      <h2>Skills</h2>
      <div className="skill-list">
        <div className="skill">
          <h3>skill 1</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
            tincidunt n
          </p>
        </div>
        <div className="skill">
          <h3>skill 2</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
            tincidunt n
          </p>
        </div>
        <div className="skill">
          <h3>skill 3</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
            tincidunt n
          </p>
        </div>
      </div>
    </div>
  )
}

const LastProject = () => {
  return (
    <div className="home-section">
      <div className="home-section-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24px"
          height="24px"
        >
          <title>developer-board</title>
          <path
            fill="#f0f0f0"
            d="M22,9V7H20V5A2,2 0 0,0 18,3H4A2,2 0 0,0 2,5V19A2,2 0 0,0 4,21H18A2,2 0 0,0 20,19V17H22V15H20V13H22V11H20V9H22M18,19H4V5H18V19M6,13H11V17H6V13M12,7H16V10H12V7M6,7H11V12H6V7M12,11H16V17H12V11Z"
          />
        </svg>
      </div>
      <h2>Last Project</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
        tincidunt nisl, eu aliquet nisl. Nulla facilisi. Nulla facilisi. Nulla
      </p>
    </div>
  )
}
