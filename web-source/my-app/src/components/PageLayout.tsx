import '../src/styles/PageLayout.css'
const PageLayout = (props: any) => {
  return (
    <div className="main-page">
      <a href="/">home</a>
      <a href="/about-me">about me</a>
      <a href="/projects">projects</a>
      {props.children}
    </div>
  )
}

export default PageLayout
