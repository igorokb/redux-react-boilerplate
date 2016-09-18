/* global __DEVTOOLS__ */
/*eslint-disable*/
import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import configureStore from '../configureStore'
import routes from '../routes'
import defaultImport from '../utils/defaultImport'
// import * as accountActions from '../actions/account'
/*eslint-enable*/

const store = configureStore()

function createElements (history) {
  const elements = [
    <Router key="router" history={history} children={routes} />
  ]

  if (typeof __DEVTOOLS__ !== 'undefined' && __DEVTOOLS__) {
    /*eslint-disable*/
    const DevTools = defaultImport(require('./DevTools'))
    /*eslint-enable*/
    elements.push(<DevTools key="devtools" />)
  }

  return elements
}

export default class Root extends Component {

    constructor(props) {
        super(props);
        // store.dispatch(accountActions.setInitialState());
    }

  static propTypes = {
    history: PropTypes.object.isRequired
  };

    render () {
        return (
            <Provider store={store} key="provider">
                <div>
                    {createElements(this.props.history)}
                </div>
            </Provider>
        )
    }
}
