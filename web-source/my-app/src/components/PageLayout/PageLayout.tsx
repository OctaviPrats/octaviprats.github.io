import "./PageLayout.css"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import MainBackground from "../MainBackground/MainBackground"

const PageLayout = (props: any) => {
  return (
    <div className="main-page">
      <Header />
      <MainBackground />
      <div className="main-content">{props.children}</div>
      <Footer />
    </div>
  )
}

export default PageLayout
