import './App.css';

import SideMenu from '../Components/SideMenu'
import React from 'react';
import { CssBaseline, makeStyles } from '@material-ui/core';
import Header from '../Components/Header';

// Icons
import Employees from '../Pages/Employees/Employees';

const useStyles = makeStyles({
  appMain:{
    paddingLeft:'320px',
    width:'100%'
  }
})

function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <SideMenu/>
      <div className={classes.appMain}>
        <Header/>
        <Employees/>
      </div>
      <CssBaseline/>
    </React.Fragment>
  );
}

export default App;
