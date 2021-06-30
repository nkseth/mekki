import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import group from '../../asserts/Group.png';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            justifyContent: 'space-between',
            position: "absolute",
            width: '100vw',
            height: 1150,
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

        path3: {
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: -9,
            filter: "drop-shadow(3px 5px 10px rgb(0 0 0 / 0.4))"
        },
        path4: {
            height: '100%',
            width: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: -10,

            filter: "drop-shadow(3px 5px 20px rgb(0 0 0 / 0.4))"
        },
        path5: {
            height: "100%",
            width: '100%',
            position: 'absolute',
            top: 0,
            right: 0,
            zIndex: -6,

        },
        path52: {
            height: "100%",
            width: '100%',
            position: 'absolute',
            top: 0,
            right: 0,
            zIndex: -4,
            filter: "drop-shadow(3px 5px 20px rgb(0 0 0 / 0.4))"

        },

        groupimg: {
            clipPath: "url(#groupmask)",
            position: 'absolute',
            top: 0,
            height: 1000,
            width: 900,

            right: 0,
            zIndex: -7,
            objectFit: 'cover'
        },
        path8: {
            height: "100%",
            width: '100%',
            position: 'absolute',

            top: 0,
            right: 0,
            zIndex: -8,
            backgroundRepeat: 'no-repeat',

        },

    }),
);

const Path3 = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <svg className={classes.path3} width="100%" height="100%" viewBox="0 0 1906 1050" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-35 901.792C-35 901.792 498.941 635.526 965.7 970.952C1432.46 1306.38 1749.74 984.788 1749.74 984.788C1749.74 984.788 1911.43 877.59 1905.33 590.576C1899.23 303.562 1905.33 -80.2759 1905.33 -80.2759H-35V901.792Z" fill="#F5F5F5" />
            </svg>
            <svg className={classes.path4} width="100%" height="100%" viewBox="0 0 1800 1100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-17.4092 988.334C-17.4092 988.334 492.227 805.933 765.864 928.97C1039.5 1052.01 1532.35 1455.11 1899.8 754.146C2267.25 53.186 2164.89 -152.115 2164.89 -152.115L1873.08 -275.032L1071.74 -219.396L574.469 -213.674L265.379 -220.462L-211.591 -164.361L-126.137 303.546L-84.6829 1023.47L-17.4092 988.334Z" fill="#20368F" />
            </svg>
            <svg className={classes.path52} width="100%" height="100%" viewBox=" -600 -200 1900 1200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1613.23 -32.5241L1350.34 879.344C1259.43 1194.66 888.418 1352.69 521.663 1232.32L520.668 1232C153.912 1111.63 -69.7077 758.436 21.1987 443.126L284.097 -468.742C375.006 -784.059 746.016 -942.092 1112.77 -821.724L1113.77 -821.398C1480.52 -701.029 1704.14 -347.838 1613.23 -32.5241Z" fill="#20368F" />
            </svg>

        </div>
    )
}


export default Path3