import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { actDeleteUser } from '../../actions/users';

 class userItem extends Component {

  handleDelete=(TaiKhoan)=>{

         this.props.onDeleteUser(TaiKhoan);
    axios({
      method: 'DELETE',
      url: `http://sv.myclass.vn/api/QuanLyTrungTam/XoaNguoiDung/${TaiKhoan}`
    }).then(res=>{
      console.log(res);
 
      
    }).catch(err=>{
      console.log(err);
      
    })
  }
  
  render() {
    const {user} = this.props;
    return (
        <tr>
            <td>{this.props.index + 1}</td>
            <td>{user.TaiKhoan}</td>
            <td>{user.MatKhau}</td>
            <td>{user.HoTen}</td>
            <td>{user.Email}</td>
            <td>{user.SoDT}</td>
            <td>
              <button onClick={()=>this.handleDelete(user.TaiKhoan)} className="btn btn-success">Xoa</button>
              <button className="btn btn-info">Sua</button>
            </td>
    
        </tr>
    )
  }
}

const actions = (dispatch)=>{
  return ({
    onDeleteUser: taikhoan => {
      dispatch(actDeleteUser(taikhoan))
    }
  })
}


export default connect(null, actions)(userItem);