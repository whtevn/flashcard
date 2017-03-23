import 'babel-polyfill'

import React from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin';
import { render } from 'react-dom'
import FCD_StackNavigator from './app/stack-navigator'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

render(< FCD_StackNavigator />,
  document.getElementById('fcd-root')
)

