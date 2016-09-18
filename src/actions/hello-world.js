export const SET_USER_NAME     = 'HELLO_WORLD_SET_USER_NAME'

export function setUserName (name) {
    return {
        type: SET_USER_NAME,
        name
    }
}
