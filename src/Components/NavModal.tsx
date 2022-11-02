import { Box, Button, makeStyles, Modal, Typography } from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import todoIcon from "../../images/icon-todo.svg";
import calendarIcon from "../../images/icon-calendar.svg";
import remindersIcon from "../../images/icon-reminders.svg";
import planningIcon from "../../images/icon-planning.svg";
import "../App.css";

const useStyles = makeStyles(() => ({
  button: {
    width: "100%",
    background: "transparent",
    fontSize: "13px",
    marginTop: "0px",
    color: "hsl(0, 0%, 41%)",
    "&:hover": {
      border: "1px solid grey",
      borderRadius: "10px",
      padding: "10px 20px",
    },
  },
}));
const style: {} = {
  position: "absolute" as "absolute",
  right: "0%",
  width: 230,
  boxShadow: 24,
  backgroundColor: "white",
  height: "100vh",
  padding: "0px 10px 10px 20px",
};

function NavModal(props: any) {
  const classes = useStyles();

  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box style={style}>
        <div style={{ textAlign: "end" }}>
          <IconButton onClick={props.handleClose}>
            <CloseIcon style={{ height: "50px", width: "50px" }} />
          </IconButton>
        </div>
        <div>
          <Accordion elevation={0}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{ color: "hsl(0, 0%, 41%)" }}
            >
              <Typography>Features</Typography>
            </AccordionSummary>
            <AccordionDetails
              style={{
                display: "grid",
                gridTemplateRows: "1fr 1fr 1fr 1fr",
                gap: "20px",
                marginLeft: "20px",
                color: "hsl(0, 0%, 41%)",
              }}
            >
              <Typography>
                <img
                  style={{ marginRight: "10px" }}
                  src={todoIcon}
                  alt="todo"
                ></img>
                Todo List
              </Typography>
              <Typography>
                <img
                  style={{ marginRight: "10px" }}
                  src={calendarIcon}
                  alt="calendar"
                ></img>
                Calendar
              </Typography>
              <Typography>
                <img
                  style={{ marginRight: "10px" }}
                  src={remindersIcon}
                  alt="reminders"
                ></img>
                Reminders
              </Typography>
              <Typography>
                <img
                  style={{ marginRight: "10px" }}
                  src={planningIcon}
                  alt="planning"
                ></img>
                Planning
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion elevation={0}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
              style={{ color: "hsl(0, 0%, 41%)" }}
            >
              <Typography>Company</Typography>
            </AccordionSummary>
            <AccordionDetails
              style={{
                display: "grid",
                gridTemplateRows: "1fr 1fr 1fr",
                gap: "20px",
                marginLeft: "20px",
                color: "hsl(0, 0%, 41%)",
              }}
            >
              <Typography>History</Typography>
              <Typography>Our Team</Typography>
              <Typography>Blog</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion elevation={0}>
            <AccordionSummary style={{ color: "hsl(0, 0%, 41%)" }}>
              <Typography>Careers</Typography>
            </AccordionSummary>
          </Accordion>
          <Accordion elevation={0}>
            <AccordionSummary style={{ color: "hsl(0, 0%, 41%)" }}>
              <Typography>About</Typography>
            </AccordionSummary>
          </Accordion>
          <div style={{ display: "grid", gridTemplateRows: "1fr 1fr" }}>
            <span style={{ textAlign: "center" }}>
              <Button className={classes.button}>Login</Button>
            </span>
            <span style={{ textAlign: "center" }}>
              <Button className={classes.button}>Register</Button>
            </span>
          </div>
        </div>
      </Box>
    </Modal>
  );
}

export default NavModal;
