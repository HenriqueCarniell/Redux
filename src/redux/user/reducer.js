import UserType from "./user-type";

const InitialState = {
    currentUser: null,
}

let UserReducer = (state = InitialState, action) => {
    if(action.type === UserType.Login) {
        return {...state, currentUser: action.payload};
    }

    return state;

}

export default UserReducer;