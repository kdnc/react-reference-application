import React from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

interface ColorProps {
  color: 'blue' | 'red';
}

interface MyButtonProps extends ColorProps, WithStyles {}

const styles = {
  root: {
    background: (props: ColorProps) =>
      props.color === 'red'
        ? 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
        : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: (props: ColorProps) =>
      props.color === 'red'
        ? '0 3px 5px 2px rgba(255, 105, 135, .3)'
        : '0 3px 5px 2px rgba(33, 203, 243, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin: 8,
  },
};

const MyButtonRaw: React.FunctionComponent<MyButtonProps> = (props) => {
  const { classes, color, ...other } = props;
  return <Button className={classes.root} {...other} />;
};

const MyButton = withStyles(styles)(MyButtonRaw);

export default function AdaptingHOC() {
  return (
    <React.Fragment>
      <MyButton color="red">Red</MyButton>
      <MyButton color="blue">Blue</MyButton>
    </React.Fragment>
  );
}
