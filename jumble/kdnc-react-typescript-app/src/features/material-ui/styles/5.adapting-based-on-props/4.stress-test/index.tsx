import React from 'react';
import { ThemeProvider, useTheme, makeStyles } from '@material-ui/core/styles';

interface ThemeProps {
  color: string;
}

interface ComponentProps {
  backgroundColor: string;
}

const useStyles = makeStyles((theme: ThemeProps) => ({
  root: (props: ComponentProps) => ({
    backgroundColor: props.backgroundColor,
    color: theme.color,
  }),
}));

const Component: React.FunctionComponent<ComponentProps> = React.memo((props) => {
  const classes = useStyles(props);
  const theme: ThemeProps = useTheme();

  const rendered = React.useRef(1);
  React.useEffect(() => {
    rendered.current += 1;
  });

  return (
    <div className={classes.root}>
      rendered {rendered.current} times
      <br />
      color: {theme.color}
      <br />
      backgroundColor: {props.backgroundColor}
    </div>
  );
});

export default function StressTest() {
  const [backgroundColor, setBackgroundColor] = React.useState('#2196f3');
  const handleBackgroundColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBackgroundColor(event.target.value);
  };

  const [color, setColor] = React.useState('#ffffff');
  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
  };

  const theme: ThemeProps = React.useMemo(() => ({ color }), [color]);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <fieldset>
          <div>
            <label htmlFor="color">theme color: </label>
            <input id="color" type="color" onChange={handleColorChange} value={color} />
          </div>
          <div>
            <label htmlFor="background-color">background-color property: </label>
            <input
              id="background-color"
              type="color"
              onChange={handleBackgroundColorChange}
              value={backgroundColor}
            />
          </div>
        </fieldset>
        <Component backgroundColor={backgroundColor} />
      </div>
    </ThemeProvider>
  );
}
