import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  button: {
    borderRadius: "35px",
    marginLeft: "50px",
    marginRight: "50px",
    backgroundColor: '#3D1B7C',
    borderColor: '#3D1B7C',
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: ['Noto Sans', 'sans-serif'].join(','),
    textTransform: 'none',
    lineHeight: 1.5,
    padding: '6px 12px',
    margin: '10px',

    '&:hover': {
      backgroundColor: '#6B5899',
      borderColor: '#6B5899'
    }
  },
  grow: {
    flexGrow: 1
  }
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();

  return (<div className={classes.grow}>

    <Button varient="contained" className={classes.button}>
      Show Similar Artists
    </Button>
    <div className={classes.grow}/>
    <Button varient="contained" className={classes.button}>
      Write Songs Like Hers
    </Button>

  </div>);
}
