import React, { Component } from 'react'
import CourseItem from '../components/course-item/courseItem'
import axios from 'axios'

export default class homeIndex extends Component {

  state={
    courseList: []
  }

  componentDidMount(){
    axios({
      method: 'GET',
      url: `http://sv.myclass.vn/api/QuanLyTrungTam/DanhSachKhoaHoc`

    }).then(res=>{
      this.setState({
        courseList: res.data
      })
      }).catch(err => {
        console.log(err);

      })
  }

  renderCourseList = (arr)=>{
    return arr.map((course, index)=>{
      return (
        <div key={index} className="col-3">
          <CourseItem course={course}   />
        </div>
      )
    })
  }

  render() {

    console.log(this.state.courseList);
    
    return (
      <div className="container">
      <div className="row">
          <div className="col-12">
            <div className="display-4 text-center">
              <h1>Danh Sach Khoa Hoc</h1>
            </div>

          </div>
          {this.state.courseList.length > 0 && this.renderCourseList(this.state.courseList)}
      </div>
        

        
      </div>
    )
  }
}
