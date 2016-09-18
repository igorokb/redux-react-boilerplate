import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


class AboutPage extends Component {

  static propTypes = {
  };

  render () {
    return (
      <div>
          <div className="hero">
              <h2>About page</h2>
          </div>
          <div>

          </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
    return {}
}

function mapDispatchToProps (dispatch) {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage)
