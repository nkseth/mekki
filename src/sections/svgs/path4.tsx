import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            justifyContent: 'space-between',
            position: "absolute",
            width: '100vw',
            height: 1200, paddingBottom: 500,
            dispaly: 'flex',
            JustifyContent: 'flex-start',
            backgroundColor: 'green',
            top: -200,
            left: 0,
            zIndex: -2,
            [theme.breakpoints.down('sm')]: {
                height: 600,
                backgroundColor: 'yellow',
            },


        },


        path4: {
            height: '100%',
            width: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1,

            filter: "drop-shadow(3px 5px 20px rgb(0 0 0 / 0.4))"
        },


    }),
);
const Path3 = () => {
    const classes = useStyles();
    return (
        <svg className={classes.path4} width="100%" height="100%" viewBox="-200 170 1800 900" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M912 402.951C912 386.405 925.432 372.992 942 372.992H1095.75C1112.32 372.992 1125.75 386.405 1125.75 402.951V497.322C1125.75 513.868 1112.32 527.282 1095.75 527.282H942C925.432 527.282 912 513.868 912 497.322V402.951Z" fill="#000B4F" />
        </svg>


    )
}
export default Path3