import React from "react";
import { makeStyles } from "@material-ui/core"; 

const useStyles = makeStyles((theme) => ({
  root: { 
    margin: 0, 
    padding: 0, 
  },
}));

const Skills = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      skills
    </div>
  );
}

export default Skills;