const styles = {
  container: {
    position: "fixed",
    inset: "0px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  terminalBox: {
    border: "1px solid rgb(115 211 147 / 20%)",
    borderRadius: "10px",
    padding: "5px 5px",
    maxWidth: "80vw",
    width: "500px",
    height: "500px",
    display: "flex",
    flexDirection: "column",
  },
  text: {
    background: "transparent",
    fontSize: "12px",
    width: "100%",
    border: "none",
    color: "white",
  },
};

const Terminal = ({ command }) => {
  const handleKey = (e) => {
    console.log(String.fromCharCode(e.keyCode));
  };
  return (
    <div style={styles.container} tabIndex="0" onKeyDown={handleKey}>
      <div style={styles.terminalBox}>
        <input type="text" style={styles.text} value="> octavi@" />
      </div>
    </div>
  );
};
export default Terminal;
