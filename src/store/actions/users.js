import * as Types from '../constant/users'
import axios from 'axios';

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

export const actRequestUserData = ()=>{
    return(dispatch)=>{
        axios({
            method: 'GET',
            url: 'http://sv.myclass.vn/api/QuanLyTrungTam/DanhSachNguoiDung'
        }).then(res => {

            dispatch(actStoreUserData(res.data));

        }).catch(err => {
            console.log(err);

        })
    }
}



export const actRequestAddUser = (user) => {
    return (dispatch) => {
        axios({
            method: 'POST',
            url: 'http://sv.myclass.vn/api/QuanLyTrungTam/ThemNguoiDung',
            data: user
        }).then(res => {

            dispatch(actAddUser(res.data));

        }).catch(err => {
            console.log(err);

        })
    }
}



