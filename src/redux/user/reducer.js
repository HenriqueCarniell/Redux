import UserType from "./user-type";

const InitialState = {
    currentUser: null,
}

let UserReducer = (state = InitialState, action) => {
    if(action.type === UserType.Login) {
        return {...state, currentUser: action.payload};
    }

    if(action.type === UserType.Logout) {
        return {...state, currentUser: null}
    }

    return state;

}

export default UserReducer;