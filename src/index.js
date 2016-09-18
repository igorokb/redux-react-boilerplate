/*eslint-disable*/
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './containers/Root'
import { browserHistory } from 'react-router'
import injectTapEventPlugin from "react-tap-event-plugin"
/*eslint-enable*/

injectTapEventPlugin();

ReactDOM.render(
  <Root history={browserHistory} />,
  document.getElementById('react-root')
)
