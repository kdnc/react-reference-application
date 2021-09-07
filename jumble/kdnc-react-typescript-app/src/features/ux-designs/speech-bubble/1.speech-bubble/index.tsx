import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  speechBubble: {
    position: 'relative',
    background: '#00aabb',
    borderRadius: '.4em',
    width: '260px',
    padding: '60px 20px',
    margin: '1em 0',
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '200%',
    textShadow: '0 -0.05em 0.1em rgb(0 0 0 / 30%)',

    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: '50%',
      width: 0,
      height: 0,
      border: '20px solid transparent',
      borderTopColor: '#00aabb',
      borderBottom: 0,
      borderLeft: 0,
      marginLeft: '-10px',
      marginBottom: '-20px',
    },

    '& h1': {
      margin: 0,
      fontSize: '150%',
    },

    '& h2': {
      margin: 0,
      fontSize: '40%',
    },
  },
});

export default function SpeechBubbleComponent() {
  const classes = useStyles();
  return (
    <hgroup className={classes.speechBubble}>
      <h1>Bubbly</h1>
      <h2>CSS speech bubbles made easy!</h2>
    </hgroup>
  );
}
