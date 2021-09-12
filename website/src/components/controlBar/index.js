import React from "react";
import { Drawer, makeStyles, useTheme, List, ListItem, ListItemText, ListItemIcon, CssBaseline, IconButton } from '@material-ui/core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faHome, 
  faAddressCard, 
  faCogs, 
  faBriefcase, 
  faClipboard, 
  faEnvelope,
  faQuestionCircle, 
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme) => ({
  root: { 
    display: "flex", 
    // opacity: 0.5, 
    // '&:hover': {
    //   opacity: 1, 
    //   transition: "0.5s"
    // }, 
    // transition: "1s" 
  },
  titleList: { margin: "0 auto" },
  titleListItem: { color: "blanchedalmond", fontSize: "x-large", padding: 0 },
  faIcons: { 
    textAlign: "center", 
    marginRight: "auto", 
    marginLeft: "auto",
    fontSize: "1.5em",
  },
  paper: { 
    display: "flex", 
    justifyContent: "space-between", 
    backgroundColor: "rgb(24, 23, 20)" 
  },
  noPadding: { padding: "0" },
  expandCollapse: { position: "absolute", top: "-50px", left: "40px" },
  navIcon: { marginLeft: "auto", marginRight: "auto" },
  listItem : { 
    color: "blanchedalmond",
    '&:hover': {
      backgroundColor: "blanchedalmond",
      color: "black"
    },
    paddingTop: "1em",
    paddingBottom: "1em",
    borderTop: "solid blanchedalmond 1px",
  },
  helpList: {
    padding: 0,
  },
  helpListItem: {
    padding: "0.4em"
  },
  help: {
    color: "blanchedalmond",
    '&:hover': {
      backgroundColor: "blanchedalmond",
      color: "black",
    },
    margin: "0 auto",
  },
}));

const ControlBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    {/* //   <IconButton className={classes.expandCollapse}>
    //     <FontAwesomeIcon
    //       icon={faAngleRight}
    //       className={classes.faIcons}
    //     />
    //   </IconButton> */}
      <Drawer anchor="left" variant="permanent" classes={{paper: classes.paper}}>
        <List classes={{root: classes.titleList}}>
          <ListItem classes={{root: classes.titleListItem}}>MM</ListItem>
        </List>

        <List classes={{root: classes.noPadding}}>
          <ListItem button className={classes.listItem}>
            <FontAwesomeIcon
              icon={faHome}
              className={classes.faIcons}
            />
          </ListItem>
          <ListItem button className={classes.listItem}>
            <FontAwesomeIcon
              icon={faAddressCard}
              className={classes.faIcons}
            />
          </ListItem>
          <ListItem button className={classes.listItem}>
            <FontAwesomeIcon
              icon={faCogs}
              className={classes.faIcons}
            />
          </ListItem>
          <ListItem button className={classes.listItem}>
            <FontAwesomeIcon
              icon={faBriefcase}
              className={classes.faIcons}
            />
          </ListItem>
          <ListItem button className={classes.listItem}>
            <FontAwesomeIcon
              icon={faClipboard}
              className={classes.faIcons}
            />
          </ListItem>
          <ListItem button className={classes.listItem} style={{borderBottom: "solid blanchedalmond 1px"}}>
            <FontAwesomeIcon
              icon={faEnvelope}
              className={classes.faIcons}
            />
          </ListItem>
        </List>
        
        <List classes={{root: classes.helpList}}>
          <ListItem classes={{root: classes.helpListItem}}>
            <IconButton className={classes.help}>
              <FontAwesomeIcon
                icon={faQuestionCircle}
                classes={{root: classes.faIcons}}
                style={{fontSize: "0.8em"}}
              />
            </IconButton>
          </ListItem>
        </List>

      </Drawer>
    </div>
  );
}

export default ControlBar;