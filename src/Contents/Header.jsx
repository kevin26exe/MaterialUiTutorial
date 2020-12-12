import { AppBar, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles( ()=> ({
    typoGraphyStyles: {
        flex: 1
    }
}));

const Header = () =>{
    const classes = useStyles();
    return <AppBar position="static">
        <Toolbar> 
            <Typography className={classes.typoGraphyStyles}>
                Sample App
            </Typography>
            <AcUnitIcon/>
        </Toolbar>
    </AppBar>
};

export default Header;