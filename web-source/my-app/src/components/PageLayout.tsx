import "../styles/PageLayout.css"
import Header from "./Header"
import Footer from "./Footer"

const PageLayout = (props: any) => {
  return (
    <div className="main-page">
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default PageLayout
