import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../actions/hello-world'

class UserNameForm extends Component {

    static propTypes = {
        onSubmit : PropTypes.func.isRequired,
        userName : PropTypes.string
    };

    render () {
        return (
            <div>
                <p>Enter your name</p>
                <form onSubmit={(e) => this.onSubmit(e)}>
                    <input ref="userNameInput" value={this.props.userName} />
                    <button>Submit your name</button>
                </form>
            </div>
        )
    }

    onSubmit (e) {
        e.preventDefault()
        this.props.onSubmit(this.refs.userNameInput.value)
    }
}

function mapStateToProps (state) {
    return {
        userName : state.helloWorld.get('userName')
    }
}

function mapDispatchToProps (dispatch) {
    return {
        onSubmit : (name) => {
            dispatch(actions.setUserName(name))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserNameForm)
