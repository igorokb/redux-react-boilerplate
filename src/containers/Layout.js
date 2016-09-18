import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'


class Layout extends Component {

  static propTypes = {
    children: PropTypes.any.isRequired,
  };

  render () {
      return (
        <div>
            <div className="container layout-container">
                <h1>Hello World</h1>
                <ul className="main-menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
                {/* this will render the child routes */}
                {React.cloneElement(this.props.children, this.props)}
            </div>
        </div>
    )
  }
}

function mapStateToProps (state) {
    return {}
}

function mapDispatchToProps (dispatch) {
  // return bindActionCreators(DashboardActions, dispatch)
    return {
        onRegOrgBtnClick : () => {
            dispatch(showSignupPopup())
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
