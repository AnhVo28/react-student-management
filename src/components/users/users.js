import React, { Component } from 'react'
import UserItem from './user-item'
import { connect } from 'react-redux'
import {  actRequestUserData } from '../../store/actions/users';


 class Users extends Component {

    componentDidMount(){
        this.props.onStoreData();
    }

    renderItem=()=>{
       return this.props.userList.map((user, index)=>{
            return <UserItem key={index} user={user} index={index}/>
        })
    }
  render() {
    //   const {userList} = this.props;
    //   console.log(userList);
      
    
    return (
        <div className="tblNguoiDung" id="tblNguoiDung">
            <table className="table">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tài khoản</th>
                        <th>Mật khẩu</th>
                        <th>Họ tên</th>
                        <th>Email</th>
                        <th>Số điện thoại</th>
                        <th>Loai nguoi dung</th>
                        <th>Hanh Dong</th>
                    </tr>
                </thead>
                <tbody id="tblDanhSachNguoiDung">
                    {this.renderItem()}
                </tbody>
            </table>
        </div>
    )
  }
}

const actions = (dispatch)=>{
    return({
        onStoreData: ()=>{
            dispatch(actRequestUserData())
        }
    })
}

const mapState =(state)  =>({
    userList: state.users
})

export default connect(mapState, actions)(Users);