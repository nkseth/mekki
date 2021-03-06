import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Box } from "@material-ui/core"
import Link from 'next/link'
import Calender from "../asserts/Group.svg"
import ChevronRightSharpIcon from '@material-ui/icons/ChevronRightSharp';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {


            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            [theme.breakpoints.down('sm')]: {
                display: "none"
            },


        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
        appbar: {
            width: '100%'
        },
        Links: {
            color: 'white',
            fontSize: "1rem",
            fontWeight: 700,
            transition: '0.3s ease-out',
            '&:active , &:visited,&:hover': {
                borderBottom: '2px solid white',
                cursor: 'pointer'

            }

        },
        appointment: {
            display: 'flex',
            alignItems: 'center',
            color: "#4572D1",
            justifyContent: 'center',
            backgroundColor: '#DEDEDE',
            borderRadius: '.5rem',
            cursor: 'pointer'

        },
        calendericon: {
            width: 35,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 35,


        },
        cpad: {
            borderRadius: "0.5rem 0 0 0.5rem",
            padding: theme.spacing(1),
            backgroundColor: "#01246D"
        },
        gpad: {
            padding: theme.spacing(1),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        login: {
            background: "linear-gradient(94.61deg, #27AAE1 11.18%, #514DCC 99.98%)",
            padding: theme.spacing(2),
            width: 120,
            color: 'white',
            display: 'grid',
            placeItems: 'center',
            borderRadius: '.5rem',
            cursor: 'pointer'

        }
    }),
);

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Box p={2} >
                <Link href="/" passHref>
                    <Box className={classes.Links} >
                        Home
                    </Box>
                </Link>
            </Box>

            <Box p={2} >
                <Link href="/Services" passHref>
                    <Box className={classes.Links} >
                        Services
                    </Box>
                </Link>
            </Box>

            <Box p={2} >
                <Link href="/Showcase">
                    <Box className={classes.Links}>
                        Showcase
                    </Box>
                </Link>
            </Box>

            <Box p={2} >
                <Link href="/Deals">
                    <Box className={classes.Links}>
                        Deals
                    </Box>
                </Link>
            </Box>

            <Box p={2} >
                <Link href="/appointment">
                    <Box className={classes.appointment}>
                        <Box className={classes.cpad} >
                            <Calender className={classes.calendericon} />
                        </Box>
                        <Box className={classes.gpad}>
                            Get Appointment
                            <ChevronRightSharpIcon />
                        </Box>
                    </Box>
                </Link>
            </Box>

            <Box p={2}>
                <Link href="/Login">
                    <Box className={classes.login} >
                        Log In
                    </Box>
                </Link>

            </Box>




        </div>
    );
}
