import React, { Component } from 'react'

export default class courseItem extends Component {
  render() {
      const { course }= this.props;
    return (
      <div className="card p-2">
          <img src={course.HinhAnh} style={{width: "100%", height: "100%"}}/>
          <h1 style={{fontSize: '20px'}} className="display-4">{course.TenKhoaHoc}</h1>
          {/* <span>{course.MoTa}</span> */}
          <button className="btn btn-success">Xem chi tiet</button>
        
      </div>
    )
  }
}
