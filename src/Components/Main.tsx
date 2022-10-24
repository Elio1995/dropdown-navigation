import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import desktopHero from "../../images/image-hero-desktop.png";
import mobileHero from "../../images/image-hero-mobile.png";
import databiz from "../../images/client-databiz.svg";
import audiophile from "../../images/client-audiophile.svg";
import meet from "../../images/client-meet.svg";
import maker from "../../images/client-maker.svg";
import "../App.css";

const useStyles = makeStyles((theme) => ({
  main: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    [theme.breakpoints.down(515)]: {
      display: "flex",
      flexWrap: "wrap-reverse",
    },
  },
  desktopHero: {
    height: "570px",
    width: "480px",
    [theme.breakpoints.down(515)]: {
      display: "none",
    },
  },
  mobileHero: {
    display: "none",
    [theme.breakpoints.down(515)]: {
      display: "grid",
      height: "auto",
      maxWidth: "100%",
    },
  },
  button: {
    background: "transparent",
    border: "1px solid black",
    padding: "5px 20px",
    borderRadius: "10px",
  },
  mainText: {
    padding: "130px 100px 50px 100px",
    fontFamily: "Epilogue",
    [theme.breakpoints.down(515)]: {
      padding: "20px 10px",
    },
  },
  headerOneDesktop: {
    fontSize: "70px",
    paddingBottom: "20px",
    fontWeight: 900,
    lineHeight: "60px",
    color: "hsl(0, 0%, 8%)",
    [theme.breakpoints.down(515)]: {
      display: "none",
    },
  },
  headerOneMobile: {
    display: "none",
    [theme.breakpoints.down(515)]: {
      justifyContent: "center",
      display: "flex",
      fontSize: "50px",
      fontWeight: 900,
      color: "hsl(0, 0%, 8%)",
    },
    [theme.breakpoints.down(476)]: {
      justifyContent: "center",
      display: "flex",
      fontSize: "45px",
    },
    [theme.breakpoints.down(435)]: {
      justifyContent: "center",
      display: "flex",
      fontSize: "40px",
    },
    [theme.breakpoints.down(395)]: {
      justifyContent: "center",
      display: "flex",
      fontSize: "36px",
    },
  },
}));

function Main() {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <div className={classes.mainText}>
        <h1 className={classes.headerOneDesktop}>
          Make <br />
          remote work
        </h1>
        <h1 className={classes.headerOneMobile}>Make remote work</h1>
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
        <img className={classes.mobileHero} src={mobileHero} alt="hero"></img>
      </div>
    </div>
  );
}

export default Main;
