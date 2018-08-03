import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ProfilePic from '../imgs/cat.jpg';


// ctrl+click for docs/demos:
// https://material-ui.com/demos/selects/
// https://material-ui.com/api/menu-item/#menuitem
// https://material-ui.com/api/select/#select
// https://material-ui.com/api/form-control/#formcontrol

// ** @material-ui/core is where the component library lives
// do not use simply 'material-ui' as that is not the official material ui lib


class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // value: '',
    
      // select should be a string for this use case
    };
  }

    //

   
    
    

    render() {
      return (
        <div>
       <img src={ProfilePic}/>
        
         

         <List>
                  <ListItem>
                  
                    <ListItemText 
                      primary="Verified Info"
                    />
                  </ListItem>

                   <ListItem>
                  
                  <ListItemText 
                    primary="Email Address"
                  />
                </ListItem>

                 <ListItem>
                  
                  <ListItemText 
                    primary="Phone Number"
                  />
                </ListItem>

                 <ListItem>
                  
                  <ListItemText 
                    primary="Rating"
                  />
                </ListItem>


                
              </List>
         
        </div>
      );
    }
}

// this all wasnt working because the wrong components were being imported
// and the wrong props were being pased to the select

export default Profile;
