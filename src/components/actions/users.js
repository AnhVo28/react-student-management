import * as Types from '../constant/users'

export const actStoreUserData = (userList)=>({
    type: Types.STORE_USER_DATA,
    userList
})
export const actAddUser = (newUser)=>({
    type: Types.ADD_USER,
    newUser
})
export const actDeleteUser = (taikhoan)=>({
    type: Types.DELETE_USER,
    taikhoan
})
export const actUpdateUser = (user)=>({
    type: Types.DELETE_USER,
    user
})



