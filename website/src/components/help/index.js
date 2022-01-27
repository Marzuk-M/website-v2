import React from "react";
import { makeStyles,   } from '@material-ui/core';
import { Modal } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: { 
    display: "flex",
    color: "blue",
  },
  modal: {
    paper: { width: "50%"}
  },
}));

const HelpMenu = (props) => {
  const classes = useStyles();
  const open = props.open;
  const toggleModal = props.toggleModal;

  return (
    <div className={classes.root}>
      <Modal
        open={open}
        onClose={() => toggleModal(!open)}
        className={classes.modal}
      >
        <h1>dwadwd</h1>
      </Modal>
    </div>
  );
}

export default HelpMenu;