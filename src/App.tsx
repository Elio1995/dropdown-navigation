import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../images/logo.svg";
import Button from "@material-ui/core/Button";
import desktopHero from "../images/image-hero-desktop.png";
import databiz from "../images/client-databiz.svg";
import audiophile from "../images/client-audiophile.svg";
import meet from "../images/client-meet.svg";
import maker from "../images/client-maker.svg";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
  header: {
    display: "grid",
    gridTemplateColumns: "150px 1fr 100px",
  },
  nav: {
    margin: "0 20px",
    fontWeight: "500",
  },
  main: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  },
  desktopHero: {
    height: "570px",
    width: "480px",
  },
});
function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <div className={classes.header}>
        <img src={logo} alt="Logo" />
        <div>
          <span className={classes.nav}>Features</span>
          <span className={classes.nav}>Company</span>
          <span className={classes.nav}>Careers</span>
          <span className={classes.nav}>About</span>
        </div>
        <div>
          <span className={classes.nav}>Login</span>
          <span className={classes.nav}>Register</span>
        </div>
      </div>
      <div className={classes.main}>
        <div style={{ padding: "100px 100px" }}>
          <h1
            style={{
              fontSize: "70px",
              paddingBottom: "20px",
              fontWeight: "900",
              lineHeight: "60px",
            }}
          >
            Make <br />
            remote work
          </h1>
          <p
            style={{
              fontSize: "18px",
              paddingBottom: "20px",
              fontWeight: "600",
            }}
          >
            Get your team in sync, no matter your location.
            <br /> Streamline processes, create team rituals and <br />
            watch productivity soar.
          </p>
          <Button>Learn More</Button>
          <div style={{ paddingTop: "150px" }}>
            <img
              style={{ marginRight: "20px" }}
              src={databiz}
              alt="databiz"
            ></img>
            <img
              style={{ marginRight: "20px" }}
              src={audiophile}
              alt="audiophile"
            ></img>
            <img style={{ marginRight: "20px" }} src={meet} alt="meet"></img>
            <img style={{ marginRight: "20px" }} src={maker} alt="maker"></img>
          </div>
        </div>
        <div
          style={{
            display: "grid",
            justifyContent: "center",
            placeContent: "center",
          }}
        >
          <img
            className={classes.desktopHero}
            src={desktopHero}
            alt="hero"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default App;
