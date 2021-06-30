import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Path3 from './svgs/path3';
import Path4 from './svgs/path4';
import Path5 from './svgs/path5';
import Path52 from './svgs/path52';
import Header from '../components/header';
import { Box } from '@material-ui/core';
import Home from '../asserts/ggk.svg'
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            justifyContent: 'space-between',
            position: "absolute",
            width: '100vw',
            top: 0,
            left: 0,


        },
        img: {
            maxWidth: "100vw",
            width: "100vw"
        }




    }),
);

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header />
            <img className={classes.img} src={Home} />



        </div>
    );
}
