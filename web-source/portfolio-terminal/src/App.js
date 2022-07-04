import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";

const styles = {
  app: {
    display: "flex",
    flexDirection: "column",
    height: "101vh",
  },
};
function App() {
  return (
    <div style={styles.app}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
