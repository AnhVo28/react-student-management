import * as Types from '../constant/users'

const initialState = [];

const userData = (state = initialState, action)=>{
    switch (action.type) {
        case Types.STORE_USER_DATA:
            state = [...action.userList];
            return [...state];
        case Types.ADD_USER:
            state = [...state, action.newUser];
            return [...state];
        case Types.DELETE_USER:
            state = [...state.filter((user, index)=>{
                return user.TaiKhoan !== action.taikhoan
            })]

            return [...state]
        default:
            return state;
    }
}

export default userData;