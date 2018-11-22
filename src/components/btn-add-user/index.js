import React, { Component } from 'react'

export default class ButtonAddUser extends Component {
  render() {
    return (
        <button 
            id="btnThemNguoiDung" 
            className="btn btn-success"
             data-toggle = "modal"
             data-target = "#myModal" >
           
            Thêm người dùng
            <i className="fa fa-plus" />
        </button>
    )
  }
}
