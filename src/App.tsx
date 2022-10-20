import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import desktopHero from "../images/image-hero-desktop.png";
import databiz from "../images/client-databiz.svg";
import audiophile from "../images/client-audiophile.svg";
import meet from "../images/client-meet.svg";
import maker from "../images/client-maker.svg";
import "./App.css";

import Header from "./Components/Header";

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
  main: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  },
  desktopHero: {
    height: "570px",
    width: "480px",
  },
  button: {
    background: "transparent",
    border: "1px solid black",
    padding: "5px 20px",
    borderRadius: "10px",
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Header />
      <div className={classes.main}>
        <div
          style={{ padding: "130px 100px 50px 100px ", fontFamily: "Epilogue" }}
        >
          <h1
            style={{
              fontSize: "70px",
              paddingBottom: "20px",
              fontWeight: "900",
              lineHeight: "60px",
              color: "hsl(0, 0%, 8%)",
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
              color: "hsl(0, 0%, 41%)",
            }}
          >
            Get your team in sync, no matter your location.
            <br /> Streamline processes, create team rituals and <br />
            watch productivity soar.
          </p>
          <Button className={classes.button}>Learn More</Button>
          <div style={{ paddingTop: "130px" }}>
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
            paddingTop: "50px",
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
