import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import UserNameForm from '../widgets/UserNameForm'


class HomePage extends Component {

    static propTypes = {
        userName : PropTypes.string
    };

    render () {
        return (
            <div>
                <div className="hero">
                    <h2>Home page</h2>
                </div>
                <div>
                    <UserNameForm />
                </div>
                <div>
                {(() => {
                    if (this.props.userName) {
                        return <h2>Nice to meet you {this.props.userName}</h2>
                    }
                    return null
                })()}
                </div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        userName : state.helloWorld.get('userName')
    }
}

function mapDispatchToProps (dispatch) {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
