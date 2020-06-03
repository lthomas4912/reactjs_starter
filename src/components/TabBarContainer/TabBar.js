import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import HomeIcon from '@material-ui/icons/Home';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import { Link } from 'react-router-dom';
import './TabBar.css';

const useStyles = makeStyles({
  root: {
  width: 500,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation className="tab"
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
    //   className={classes.root}
    >
      <BottomNavigationAction label="Welcome" icon={<EmojiPeopleIcon />} to='/' component={Link} />
      <BottomNavigationAction label="Home" icon={<HomeIcon />} to='/userhome' component={Link} />
      <BottomNavigationAction label="Game" icon={<VideogameAssetIcon />} to='/game' component={Link} />
    </BottomNavigation>
  );
}