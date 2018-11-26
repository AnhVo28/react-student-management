import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actRequestAddUser } from '../../store/actions/users';

class userModal extends Component {

    state={
        TaiKhoan: '',
        HoTen: '',
        MatKhau: '',
        SoDT: '',
        Email: '',
        MaLoaiNguoiDung: ''
    }

    handleOnChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    handleOnSubmit = (e)=>{
        e.preventDefault();
        // console.log(this.state);
        this.props.onAddUser(this.state)

        
        
        
    }
  render() {
    return (
        <div className="modal fade" id="myModal" onSubmit={this.handleOnSubmit} >
            <div className="modal-dialog">
                <div className="modal-content">
                    {/* Modal Header */}
                    <div className="modal-header">
                        <h4 className="modal-title">Them nguoi dung</h4>
                        <button type="button" className="close" data-dismiss="modal">×</button>
                    </div>
                    {/* Modal body */}
                    <div className="modal-body">
                        <div className="form-group">
                            <label>Tài khoản</label>
                            < input onChange = {
                                this.handleOnChange
                            }
                            id = "TaiKhoan"
                            name = "TaiKhoan"
                            className = "form-control"
                            placeholder = "Nhập vào tài khoản" / > 
                        </div>
                        <div className="form-group">
                            <label>Họ tên</label>
                            <input onChange={this.handleOnChange}TaiKhoan name="HoTen" id="HoTen" className="form-control" placeholder="Nhập vào họ tên" />
                        </div>
                        <div className="form-group">
                            <label>Mật khẩu</label>
                            <input onChange={this.handleOnChange} name="MatKhau" id="MatKhau" className="form-control" placeholder="Nhập vào mật khẩu" type="password" />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input onChange={this.handleOnChange} name="Email" id="Email" className="form-control" placeholder="Nhập vào Email" />
                        </div>
                        <div className="form-group">
                            <label>Số điện thoại</label>
                            <input onChange={this.handleOnChange} name="SoDT" id="SoDienThoai" className="form-control" placeholder="Nhập vào số điện thoại" />
                        </div>
                        <div className="form-group">
                            <label>Ma Loai Nguoi Dung</label>
                            <input onChange={this.handleOnChange} name="MaLoaiNguoiDung" id="MaLoaiNguoiDung" className="form-control" placeholder="Nhap ma loai nguoi dung" />
                        </div>
                        <div className="form-group text-center">
                            <button onClick={this.handleOnSubmit } className="btn btn-success">Them</button>
                        </div>
                    </div>
                    {/* Modal footer */}
                    <div className="modal-footer">
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

const actions = (dispatch)=>({
    onAddUser: (user)=>{
        dispatch(actRequestAddUser(user))
    }
})

export default connect(null, actions)(userModal);
