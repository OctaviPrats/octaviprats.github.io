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
      <div className="portfolio-head">
        <h2>Soft Skills</h2>
        <p>Top three skills that are crucial on my performance.</p>
      </div>
      <div className="skill-list">
        {SOFT_SKILLS.map((item: any) => (
          <SoftSkill {...item} />
        ))}
      </div>
    </div>
  )
}

const PortfolioSimple = () => {
  return (
    <div className="portfolio">
      <div className="portfolio-head">
        <h2>Portfolio</h2>
        <p>Some of the projects I've worked on. </p>
      </div>
      <PortfolioSection />
    </div>
  )
}

const PortfolioSection = () => {
  return (
    <div className="portfolio-list">
      {PROJECTS.map((item: any) => (
        <PortfolioItem {...item} />
      ))}
    </div>
  )
}

const PortfolioItem = ({ type = 'react', tech = 'tech name', projectName = 'project name', dateText = '', stackList = ['item1'] }: any) => {
  return (
    <div className="portfolio-item">
      <div className="portfolio-item-layout">
        <img src={`ic_${type}.svg`} alt="" />
        <div style={{ flex: 1 }}>
          <div className="portfolio-item-header">
            <span className="portfolio-item-tech">{tech}</span>
            <span className="portfolio-item-date">{dateText}</span>
          </div>
          <span className="portfolio-item-project-name">{projectName}</span>
        </div>
      </div>
      <div className="portfolio-item-stack-list">
        {stackList.map((stack: string) => (
          <span className="portfolio-item-stack-item">{stack}</span>
        ))}
      </div>
    </div>
  )
}

const SoftSkill = ({ icon = 'king', title = 'title', desc = 'desc' }: any) => {
  return (
    <div className="skill">
      <img src={`${icon}.svg`} alt="" />
      <h3>{title}</h3>
      <p>
        {desc}
      </p>
    </div>
  )
}

const PROJECTS = [
  {
    type: 'react',
    tech: 'React Native',
    projectName: 'pickem.social',
    dateText: 'on going',
    stackList: ['Zustand', 'TanstackQuery', 'Clerk', 'Tamagui']
  },
  {
    type: 'nextjs',
    tech: 'Next.js',
    projectName: 'houseofboxing.com',
    dateText: '2022 - 2023',
    stackList: ['Chakra.ui', 'immutableX', 'Web3Auth', 'Redux']
  },
  {
    type: 'vue',
    tech: 'Web Components',
    projectName: 'Parlem Telecom',
    dateText: '2021 - 2022',
    stackList: ['MicroFrontEnds', 'Webpack', 'SASS']
  },

  {
    type: 'angular',
    tech: 'Angular 9',
    projectName: 'SuperFantasy LOL',
    dateText: '2019 - 2021',
    stackList: ['Rx.js', 'Chart.js', 'Particles', 'Stripe']
  },
  {
    type: 'react',
    tech: 'React',
    projectName: 'octadev',
    dateText: 'on going',
    stackList: ['Lottie', 'VanilaTilt']
  },
  {
    type: 'wordpress',
    tech: 'PHP',
    projectName: 'eLaLiga Santander',
    dateText: '2020',
    stackList: ['Twig', 'CustomPlugin']
  },

]

const SOFT_SKILLS = [
  {
    icon: 'king',
    title: 'Leadership',
    desc: 'Skilled in leading and developing junior engineers.'
  },
  {
    icon: 'tech',
    title: 'Critical thinking',
    desc: 'Advanced knowledge in programming and system design.'
  },
  {
    icon: 'game',
    title: 'Teamwork',
    desc: 'Experienced in working in dev and product agile teams.'
  },
]