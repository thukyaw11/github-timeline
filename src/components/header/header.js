import React from 'react';
import './header.css'
import { Typography } from '@material-ui/core';
import  {makeStyles} from '@material-ui/core/styles'


const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },
  textStyle : {
      height: '50px',
      lineHeight: '50px',
  }
}));
const Header = () => {
    const classes = useStyles();
    return (
        <Typography align="center" display="flex" className={classes.root}>
        <div className = {classes.root}>
 
                <img src="https://alanferrandiz.files.wordpress.com/2020/09/github_logo.png" alt="" className="header__logo"/>
                <h2 className={classes.textStyle}>Github Timeline</h2>

        </div>

        </Typography>

    );
}

export default Header;