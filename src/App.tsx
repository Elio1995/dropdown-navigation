import * as React from "react";
import { useState } from "react";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../images/logo.svg";
import Button from "@material-ui/core/Button";
import desktopHero from "../images/image-hero-desktop.png";
import databiz from "../images/client-databiz.svg";
import audiophile from "../images/client-audiophile.svg";
import meet from "../images/client-meet.svg";
import maker from "../images/client-maker.svg";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

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
    display: "grid",
    gridTemplateColumns: "120px 120px 120px 120px",
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
  const [features, setFeatures] = React.useState<null | HTMLElement>(null);
  const openFeatures = Boolean(features);
  const [company, setCompany] = React.useState<null | HTMLElement>(null);
  const openCompany = Boolean(company);

  const handleClickFeatures = (event: React.MouseEvent<HTMLButtonElement>) => {
    setFeatures(event.currentTarget);
  };
  const handleCloseFeatures = () => {
    setFeatures(null);
  };
  const handleClickCompany = (event: React.MouseEvent<HTMLButtonElement>) => {
    setCompany(event.currentTarget);
  };
  const handleCloseCompany = () => {
    setCompany(null);
  };
  return (
    <div className="App">
      <div className={classes.header}>
        <img src={logo} alt="Logo" />

        <div className={classes.nav}>
          <div>
            <Button
              id="basic-button"
              aria-controls={openFeatures ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openFeatures ? "true" : undefined}
              onClick={handleClickFeatures}
            >
              Features
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={features}
              open={openFeatures}
              onClose={handleCloseFeatures}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleCloseFeatures}>Todo List</MenuItem>
              <MenuItem onClick={handleCloseFeatures}>Calendar</MenuItem>
              <MenuItem onClick={handleCloseFeatures}>Reminders</MenuItem>
              <MenuItem onClick={handleCloseFeatures}>Planning</MenuItem>
            </Menu>
          </div>
          <div>
            <Button
              id="basic-button"
              aria-controls={openCompany ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openCompany ? "true" : undefined}
              onClick={handleClickCompany}
            >
              Company
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={company}
              open={openCompany}
              onClose={handleCloseCompany}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleCloseCompany}>History</MenuItem>
              <MenuItem onClick={handleCloseCompany}>Our Team</MenuItem>
              <MenuItem onClick={handleCloseCompany}>Blog</MenuItem>
            </Menu>
          </div>
          <div>
            <Button>Careers</Button>
          </div>
          <div>
            <Button>About</Button>
          </div>
        </div>
        <div>
          <span>Login</span>
          <span className={classes.button}>Register</span>
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
          <Button className={classes.button}>Learn More</Button>
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
