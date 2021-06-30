import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Navoptions from './navoptions'
import Logo from '../asserts/g10 3.png'
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'space-between',

      position: 'absolute',
      top: 0,
      left: 0,
      minWidth: "100%"
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
    logo: {

      maxWidth: 150,
      margin: theme.spacing(2)
    }
  }),
);

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img src={Logo} className={classes.logo} />
      <Navoptions />

    </div>
  );
}
