import * as React from "react";
import { makeStyles, styled, alpha } from "@material-ui/core/styles";
import Menu, { MenuProps } from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import logo from "../../images/logo.svg";
import Button from "@material-ui/core/Button";
import todoIcon from "../../images/icon-todo.svg";
import calendarIcon from "../../images/icon-calendar.svg";
import remindersIcon from "../../images/icon-reminders.svg";
import planningIcon from "../../images/icon-planning.svg";
import arrowUp from "../../images/icon-arrow-up.svg";
import arrowDown from "../../images/icon-arrow-down.svg";
import iconMenu from "../../images/icon-menu.svg";

import "../App.css";
import NavModal from "./NavModal";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "grid",
    gridTemplateColumns: "150px 1fr 100px",
    [theme.breakpoints.down(515)]: {
      display: "grid",
      gridTemplateColumns: "150px 1fr",
    },
  },
  nav: {
    display: "grid",
    gridTemplateColumns: "120px 120px 120px 120px",
    [theme.breakpoints.down(515)]: { display: "none" },
  },
  loginRegister: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    [theme.breakpoints.down(515)]: { display: "none" },
  },
  menuIcon: {
    display: "none",
    [theme.breakpoints.down(515)]: { display: "grid", justifyContent: "end" },
  },
  button: {
    background: "transparent",
    border: "1px solid black",
    padding: "5px 20px",
    borderRadius: "10px",
    fontSize: "13px",
  },
  icons: {
    marginRight: "15px",
  },
  dropdownMenu: {
    marginTop: "40px",
  },
}));
const StyledMenu = styled((props: MenuProps) => (
  <Menu elevation={0} {...props} />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 10,
    marginTop: theme.spacing(1),
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "10px 20px",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

function Header() {
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

  const [open, setOpen] = React.useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
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
            <span style={{ marginRight: "7px" }}>Features</span>
            {openFeatures ? (
              <img src={arrowUp} alt="up"></img>
            ) : (
              <img src={arrowDown} alt="down"></img>
            )}
          </Button>
          <StyledMenu
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            className={classes.dropdownMenu}
            id="basic-menu"
            anchorEl={features}
            open={openFeatures}
            onClose={handleCloseFeatures}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleCloseFeatures}>
              <img className={classes.icons} src={todoIcon} alt="todo"></img>
              Todo List
            </MenuItem>
            <MenuItem onClick={handleCloseFeatures}>
              <img
                className={classes.icons}
                src={calendarIcon}
                alt="calendar"
              ></img>
              Calendar
            </MenuItem>
            <MenuItem onClick={handleCloseFeatures}>
              <img
                className={classes.icons}
                src={remindersIcon}
                alt="reminders"
              ></img>
              Reminders
            </MenuItem>
            <MenuItem onClick={handleCloseFeatures}>
              <img
                className={classes.icons}
                src={planningIcon}
                alt="planning"
              ></img>
              Planning
            </MenuItem>
          </StyledMenu>
        </div>
        <div>
          <Button
            id="basic-button"
            aria-controls={openCompany ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openCompany ? "true" : undefined}
            onClick={handleClickCompany}
          >
            <span style={{ marginRight: "7px" }}>Company</span>
            {openCompany ? (
              <img src={arrowUp} alt="up"></img>
            ) : (
              <img src={arrowDown} alt="down"></img>
            )}
          </Button>
          <StyledMenu
            className={classes.dropdownMenu}
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
          </StyledMenu>
        </div>
        <div>
          <Button>Careers</Button>
        </div>
        <div>
          <Button>About</Button>
        </div>
      </div>
      <div className={classes.loginRegister}>
        <span style={{ marginTop: "5px" }}>LOGIN</span>
        <span style={{ marginLeft: "50px" }}>
          <Button className={classes.button}>Register</Button>
        </span>
      </div>
      <div className={classes.menuIcon}>
        <Button>
          <img onClick={handleOpen} src={iconMenu} alt="Menu" />
        </Button>
        <NavModal open={open} handleClose={handleClose} setOpen={setOpen} />
      </div>
    </div>
  );
}

export default Header;
