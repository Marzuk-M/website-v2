import { React, useState } from "react";
import { 
  Drawer, 
  makeStyles, 
  List, 
  ListItem, 
  IconButton 
} from '@material-ui/core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faHome, 
  faAddressCard, 
  faCogs, 
  faBriefcase, 
  faClipboard, 
  faEnvelope,
  faQuestionCircle, 
} from "@fortawesome/free-solid-svg-icons";
import CONTEXT from "../contextProvider";
import HelpMenu from "../help";

const useStyles = makeStyles((theme) => ({
  root: { display: "flex", },
  titleList: { margin: "0 auto" },
  titleListItem: { 
    color: "blanchedalmond", 
    fontSize: "x-large", 
    padding: 0 
  },
  faIcons: { 
    textAlign: "center", 
    marginRight: "auto", 
    marginLeft: "auto",
    fontSize: "1.5em",
  },
  paper: { 
    display: "flex", 
    justifyContent: "space-between", 
    backgroundColor: "rgb(24, 23, 20)",
    width: CONTEXT.sideBarWidth,
    borderRight: "none"
  },
  noPadding: { padding: "0" },
  navIcon: { 
    marginLeft: "auto", 
    marginRight: "auto" 
  },
  listItem : { 
    color: "blanchedalmond",
    '&:hover': {
      backgroundColor: "blanchedalmond",
      color: "black",
    },
    transition: "0.7s",
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
  const [open, toggleModal] = useState(false);

  return (
    <div className={classes.root}>
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
          <ListItem 
            button 
            className={classes.listItem} 
            style={{borderBottom: "solid blanchedalmond 1px"}}
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className={classes.faIcons}
            />
          </ListItem>
        </List>
        
        <List classes={{root: classes.helpList}}>
          <ListItem classes={{root: classes.helpListItem}}>
            <IconButton 
              className={classes.help} 
              onClick={() => toggleModal(!open)}
            >
              <FontAwesomeIcon
                icon={faQuestionCircle}
                classes={{root: classes.faIcons}}
                style={{fontSize: "0.8em"}}
              />
            </IconButton>
          </ListItem>
        </List>

      </Drawer>
      <HelpMenu open={open} toggleModal={toggleModal}/>
    </div>
  );
}

export default ControlBar;