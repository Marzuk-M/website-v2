import React from "react";
import { makeStyles } from "@material-ui/core"; 

const useStyles = makeStyles((theme) => ({
  pageBase: { 
    margin: 0, 
    padding: 0, 
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      home
    </div>
  );
}

export default Home;