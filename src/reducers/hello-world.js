import * as helloWorldActions from '../actions/hello-world'
import Immutable from 'immutable'

const initialState = Immutable.fromJS({
    userName : null
});

export default function accountReduser (state = initialState, action) {
    switch (action.type) {
        case helloWorldActions.SET_USER_NAME:
            return state.set('userName', action.name);

        default:
            return state
    }
}
