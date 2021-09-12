import ControlBar from './components/controlBar';
import Canvas from './components/canvas';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    margin: 0,
    padding: 0,
  },
}))

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ControlBar />
      <Canvas />
    </div>
  );
}

export default App;
