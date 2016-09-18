/*eslint-disable*/
import React from 'react'
import { Route } from 'react-router'
import Layout from './containers/Layout'
import * as pages from './containers/pages'

/*eslint-enable*/

const {
    HomePage,
    AboutPage
} = pages

export default (
    <Route component={Layout}>
        <Route path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
    </Route>
)
