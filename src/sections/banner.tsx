import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Path3 from './svgs/path3';
import Path4 from './svgs/path4';
import Path5 from './svgs/path5';
import Path52 from './svgs/path52';
import Header from '../components/header';
import { Box } from '@material-ui/core';
import Home from '../asserts/bg.svg'
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            justifyContent: 'space-between',
            position: "absolute",
            width: '100vw',
            height: '100vh',
            top: 0,
            left: 0,



        },
        bg: {
            maxWidth: "100vw",
            width: "100vw",

            position: 'absolute',
            top: 0,
            right: 0,
            zIndex: -1,
            backgroundColor: 'green'
        },
        img: {
            width: "100vw"
        }




    }),
);

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header />
            <img src={Home} />



        </div>
    );
}
