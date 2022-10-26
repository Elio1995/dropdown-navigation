import { Box, Modal, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import "../App.css";

const style: {} = {
  position: "absolute" as "absolute",
  right: "0%",
  width: 200,
  boxShadow: 24,
  backgroundColor: "white",
  height: "100vh",
  padding: "100px 20px 50px 20px",
};

function NavModal(props: any) {
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
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Text in a modal
        </Typography>
        <Typography id="modal-modal-description">
          <>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</>
        </Typography>
      </Box>
    </Modal>
  );
}

export default NavModal;
