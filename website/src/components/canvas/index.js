import React from "react";
import CONTEXT from "../contextProvider";
import Home from "../pages/home";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: { 
    position: "relative", 
    left: CONTEXT.sideBarWidth,
    width: `calc(100vw - ${CONTEXT.sideBarWidth})`,
    height: `calc(100vh)`,
  },
  
}));

const Canvas = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Home />
    </div>
  );
}

export default Canvas;