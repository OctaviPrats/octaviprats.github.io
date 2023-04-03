import "./PageLayout.css"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

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
