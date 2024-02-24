import React from "react"
import "./Home.css"
import BusinessCard from "./BusinessCard/BusinessCard"

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <Presentation />
        <PortfolioSimple />
        <SkillSet />
        {/* <FrameWorks /> */}
        {/* <CurrentStack /> */}
        {/* <LastProject /> */}
      </div>
    </div>
  )
}

export default Home

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
      <div className="skill-list">
        <div className="skill">
          <h3>Technical expertise</h3>
          <p>
            Advanced knowledge in programming and system design.
          </p>
        </div>
        <div className="skill">
          <h3>Leadership</h3>
          <p>
            Skilled in leading and developing junior engineers.
          </p>
        </div>
        <div className="skill">
          <h3>Critical thinking</h3>
          <p>
            Expert in diagnosing and optimizing software.
          </p>
        </div>
      </div>
    </div>
  )
}

const PortfolioSimple = () => {
  return (
    <div className="portfolio">
      <h2>Portfolio</h2>
      <p>Some of the projects I've worked on. (add typing effect)</p>
      <PortfolioSection type="react" />
      <PortfolioSection type="vue" />
      <PortfolioSection type="angular" />
      <PortfolioSection type="wordpress" />
    </div>
  )
}

const PortfolioSection = ({ type }: any) => {
  return (
    <div className="portfolio-section">
      <div className="portfolio-header">
        <img src={`ic_${type}.svg`} alt="" />
        <h3>{type}</h3>
      </div>
      <div className="portfolio-list">
        <PortfolioItem />
        <PortfolioItem />
        <PortfolioItem />
      </div>
    </div>
  )
}

const PortfolioItem = () => {
  return (
    <div className="portfolio-item">
      <h4>Project name</h4>
      <p>Project description</p>
    </div>
  )
}