import React, { Component, Fragment } from 'react'
import Users from '../components/users/users'
import UserSearch from '../components/user-search/userSearch'
import UserModal from '../components/user-modal/userModal'
import BtnAddUser from '../components/btn-add-user'
import { Link } from 'react-router-dom'

export default class adminIndex extends Component {
  render() {
    return(
    <Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/admin">Navbar</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-item nav-link active" to="/signin" >Sign In </Link>
            </div>
          </div>
        </nav>
        <div className="container-fluid">
          <header className="display-4">Thực hành jquery với dự án quản lý trung tâm</header>
          {/* Phan tab menu */}
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" href="#DanhSachNguoiDung" role="tab" data-toggle="tab">Danh sách người dùng</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#DanhSachKhoaHoc" role="tab" data-toggle="tab">Danh sách khóa học</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#ThongKe" role="tab" data-toggle="tab">Thống kê</a>
            </li>
          </ul>
          <br />
          {/* Tab panes */}
          <div className="tab-content">
            {/*Danh sách người dùng */}
            <div role="tabpanel" className="tab-pane  in active" id="DanhSachNguoiDung">
              <UserSearch />
              <div className="clear-fix" />
              <br />
              <BtnAddUser />
              <div className="clear-fix" />
              <br />
              <Users />
              <br />
            </div>
            {/* Kết thúc danh sách người dùng */}
            {/* Danh sách khóa học */}
            <div role="tabpanel" className="tab-pane fade" id="DanhSachKhoaHoc">
            </div>
            {/* Kết thúc danh sách khóa học */}
            {/* Thống kê */}
            <div role="tabpanel" className="tab-pane fade" id="ThongKe">
            </div>
            {/* Kết thúc thống kê */}
          </div>
          {/*KetThuc Tabmenu*/}
          {/* Button to Open the Modal */}
          <button id="btnModal" type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
            Open modal
      </button>
          {/* The Modal */}
          <UserModal />
        </div>
    </Fragment>
      
    )
  }
}
