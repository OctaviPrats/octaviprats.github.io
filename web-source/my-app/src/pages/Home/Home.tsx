import React from "react"
import "./Home.css"
import BusinessCard from "./BusinessCard/BusinessCard"
import MagicRay from "./MagicRay/MagicRay"

const Home = () => {
  return (
    <div className="home">
      {/* <MagicRay /> */}
      {/* <MagicScroll /> */}
      <div className="home-content">
        <Presentation />
        <SkillSet />
        {/* <CurrentStack /> */}
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

const SkillSet = () => {
  return (
    <div className="home-section">
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
      <h2>Skills</h2>
      <div className="skill-list">
        <div className="skill">
          <h3>Technical expertise</h3>
          <p>
            Deep knowledge and skills in programming languages, frameworks, and
            tools, along with a strong understanding of software development
            principles, design patterns, data structures, algorithms, and system
            architecture.
          </p>
        </div>
        <div className="skill">
          <h3>Leadership and mentoring</h3>
          <p>
            Excellent leadership skills, ability to communicate and collaborate
            effectively, and experience in guiding and mentoring junior software
            engineers to support their professional growth.
          </p>
        </div>
        <div className="skill">
          <h3>Problem-solving and critical thinking</h3>
          <p>
            Proficiency in problem-solving and critical thinking skills,
            including analyzing complex technical challenges, identifying root
            causes, proposing effective solutions, and optimizing software
            performance through debugging and profiling.
          </p>
        </div>
      </div>
    </div>
  )
}

const CurrentStack = () => {
  return (
    <div className="home-section">
      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><path fill="#f0f0f0" d="M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z" /></svg>
      <h2>Current Stack</h2>
    </div>
  )
}

const LastProject = () => {
  return (
    <div className="home-section">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24px"
        height="24px"
      >
        <path
          fill="#f0f0f0"
          d="M22,9V7H20V5A2,2 0 0,0 18,3H4A2,2 0 0,0 2,5V19A2,2 0 0,0 4,21H18A2,2 0 0,0 20,19V17H22V15H20V13H22V11H20V9H22M18,19H4V5H18V19M6,13H11V17H6V13M12,7H16V10H12V7M6,7H11V12H6V7M12,11H16V17H12V11Z"
        />
      </svg>
      <h2>Projects</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
        tincidunt nisl, eu aliquet nisl. Nulla facilisi. Nulla facilisi. Nulla
      </p>
    </div>
  )
}
