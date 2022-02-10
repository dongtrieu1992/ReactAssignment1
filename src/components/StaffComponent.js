import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';
import {DEPARTMENTS} from '../shared/staffs';
import dateFormat from 'dateformat';

class Menu extends Component{
      constructor(pros){
        super(pros);
        this.state = {
          selectedDish:null,
        }
      }

    onDishSelect(dish) {
        this.setState({ selectedDish:dish});
    }

    renderDish(dish) {
        if (dish != null){
            return(
                <Card>
                <CardBody>
                      <CardTitle>Họ và tên: {dish.name}</CardTitle>
                      <CardText>Ngày sinh: {dateFormat(dish.doB,"dd/mm/yyyy")}</CardText>
                      <CardText>Ngày vào công ty: {dateFormat(dish.startDate,"dd/mm/yyyy")}</CardText>
                      <CardText>Phòng ban: {dish.department.name}</CardText>
                      <CardText>số ngày nghỉ còn lại: {dish.annualLeave}</CardText>
                      <CardText>số ngày đã làm thêm: {dish.overTime}</CardText>

                </CardBody>
                </Card>
           
            );
        }
        else
            return(
                <div></div>
            );
    }

      render(){
        const menu = this.props.dishes.map((dish,index) => {
          if (index<6){
          return(
               <div key={dish.id} className = 'col-12 col-md-6 m1'>
                  <Card onClick={()=>this.onDishSelect(dish)}>
                        <CardBody>
                           <CardTitle>{dish.name}</CardTitle>
                        </CardBody>
                  </Card>
               </div>
          );
          };
        }) ;
        return(
            <div className='fluid-container'>
                <div className='row'>
                       {menu}
                </div> 
                <div className='row'>
                <h5>Bấm vào tên nhân viên để xem thông tin</h5>
                </div>
               <div className='row'>
                    <div className = 'col-12 col-md-6 m1'>
                       {this.renderDish(this.state.selectedDish)}
                    </div>
                </div> 
            </div>
         );
      }
}
export default Menu;