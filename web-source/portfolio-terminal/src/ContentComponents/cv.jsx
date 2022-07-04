const styles = {
  card: {
    background: "#101010",
    boxShadow: "0 0 40px -20px #73d393",
    width: "600px",
    maxWidth: "95%",
    margin: "30px auto",
    borderRadius: "8px",
    padding: "10px 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  cardTitle: {
    width: "100%",
  },
};
const CV = () => {
  return (
    <div>
      <h1>.getCurriculumVitae()</h1>
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>.getCurrentJob()</h2>
        <img src="" alt="logo_parlem" />
        <span>FrontEnd Lead & FullStack Dev</span>
        <span>ParlemTelecom</span>
        <div>
          <img src="" alt="vue" />
          <img src="" alt=".net" />
          <img src="" alt="k8" />
        </div>
      </div>
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>.getJobHistory()</h2>
        <img src="" alt="logo_lvp" />
        <span>FrontEnd Lead</span>
        <span>LVP - Liga de Videojuegos Profesional</span>
        <div>
          <span>SuperFantasyLOL · www.www.www</span>
          <p>text</p>
        </div>
        <div>
          <span>Competition Web Sites · www.www.www</span>
          <p>text</p>
        </div>
        <div>
          <span>eLaLiga · www.www.www</span>
          <p>text</p>
        </div>
        <img src="" alt="logo_ranggo" />
        <span>Founder & Software Engineer</span>
        <span>Ranggo.io</span>
        <div>
          <p>text</p>
        </div>
      </div>
    </div>
  );
};

export default CV;
