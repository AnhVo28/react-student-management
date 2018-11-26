import React, { Component } from 'react';
import axios from 'axios';

class signIn extends Component {

 
  onSignIn=()=>{
    const username = this.refs.username.value;
    const password = this.refs.password.value;

    axios({
      method: 'GET',
      url: `http://sv.myclass.vn/api/QuanLyTrungTam/DangNhap?taikhoan=${username}&matkhau=${password}`
    }).then(res=> {
      console.log(res);
      if(typeof res.date !== 'string'){
        localStorage.setItem("currentUser", JSON.stringify(res.data[0]));
        if (res.data[0].MaLoaiNguoiDung === 'GV') {
          this.props.history.push('/admin')
        }

      }
      
    }).catch(err=>{
      console.log(err);
      
    })
    

  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6 mx-auto">
            <h1 className="display-4">Sign In</h1>
            <form>
              <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control" ref="username"></input>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" ref="password"></input>
              </div>
              <div className="form-group">
                <button onClick={this.onSignIn} type="button" className="btn btn-success">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default signIn;