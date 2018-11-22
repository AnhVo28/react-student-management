import React, { Component } from 'react'

export default class userSearch extends Component {
  render() {
    return (
        <div className="input-group">
            <input type="text" className="form-control" placeholder="Search for..." />
            <span className="input-group-btn">
                <button id="btnTimKiemNguoiDung" className="btn btn-success" type="button">Tìm kiếm</button>
            </span>
        </div>
    )
  }
}
