/* window size context for react
- Based off of Material-UI media query breakpoints
- UpdateSize() will return function that will set
  specific state parameter to be fed to context provider
- component state parameter to hold size identifier must be declared first
*/

/* window sizing:
     0 <= width < 600   = xs => 0
   600 <= width < 960   = sm => 1
   960 <= width < 1280  = md => 2
  1280 <= width < 1920  = lg => 3
  1920 <= width         = xl => 4
*/

import React from 'react';

export const SizeContext = React.createContext(0);

export const UpdateSize = (self, param = 'size') => (
  // self = reference to component scope, usually the 'this' keyword
  // param = the property of component state that will hold the window size identifier
  // returns function with access to state through closure.
  () => {
    const { innerWidth } = window;
    let size;

    if (innerWidth < 600) {
      // xs
      size = 0;
    } else if (innerWidth < 960) {
      // sm
      size = 1;
    } else if (innerWidth < 1280) {
      // md
      size = 2;
    } else if (innerWidth < 1920) {
      // lg
      size = 3;
    } else {
      // xl
      size = 4;
    }

    if (param in self.state) {
      if (self.state[param] !== size) {
        self.setState({ [param]: size });
      }
    } else {
      console.warn(`${param} does not exist on state`);
    }
  }
);
