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
  pageBase: { 
    margin: 0, 
    // padding: 0, 
    width: "100%", 
    height: "100%", 
    backgroundColor: "blanchedalmond",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  header: {
    margin: 0
  },
  headerText: {
    margin: 0, 
    fontFamily: "Lucida Handwriting",
    padding: "1em"
  },
  footer: {
    display: "flex",
    justifyContent: "flex-end",
  },
  footerText: {
    margin: 0, 
    fontFamily: "Lucida Handwriting",
    padding: "0 1em 1em",
  },
}));

const PageRouter = () => {
  const classes = useStyles();
  return (
    <>
      <h1 className={classes.headerText}>Home</h1>
      <Home />
    </>
  );
}

const Canvas = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.pageBase}>
        <div className={classes.header}>
          <PageRouter />
        </div>
        <div className={classes.footer}>
          <h3 className={classes.footerText}>Marzuk Mashrafe</h3>
        </div>
      </div>
    </div>
  );
}

export default Canvas;