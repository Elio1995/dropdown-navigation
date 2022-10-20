import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import desktopHero from "../../images/image-hero-desktop.png";
import databiz from "../../images/client-databiz.svg";
import audiophile from "../../images/client-audiophile.svg";
import meet from "../../images/client-meet.svg";
import maker from "../../images/client-maker.svg";
import "../App.css";

const useStyles = makeStyles({
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

function Main() {
  const classes = useStyles();

  return (
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
        <img className={classes.desktopHero} src={desktopHero} alt="hero"></img>
      </div>
    </div>
  );
}

export default Main;
