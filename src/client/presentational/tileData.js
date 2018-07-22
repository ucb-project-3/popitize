import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InputIcon from '@material-ui/icons/Input';
import StarIcon from '@material-ui/icons/Star';


const mailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <InputIcon />
      </ListItemIcon>
      <ListItemText primary="Login" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <StarIcon />
      </ListItemIcon>
      <ListItemText primary="Favorites" />
    </ListItem>
  </div>
);

export default mailFolderListItems;

