import "../styles/PageLayout.css"
import Header from "./Header"
import Footer from "./Footer"

const PageLayout = (props: any) => {
  return (
    <div className="main-page">
      <Header />
      <div className="main-content">{props.children}</div>
      <Footer />
    </div>
  )
}

export default PageLayout
