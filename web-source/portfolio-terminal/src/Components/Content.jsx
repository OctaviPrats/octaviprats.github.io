import CV from "../ContentComponents/cv";
const styles = {
  container: {
    flex: "1",
  },
};

const Content = () => {
  return (
    <div style={styles.container}>
      <CV />
    </div>
  );
};

export default Content;
