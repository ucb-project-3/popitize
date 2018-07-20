import React from 'react';
import { Button } from '@material-ui/core';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [1, 2, 3, 4],
    }
  }

  render() {
    return(
      <div>
        <Button></Button>
        <Button></Button>
        <Button></Button>
        <Button></Button>
        <Button></Button>
      </div>
    )
  }
}
