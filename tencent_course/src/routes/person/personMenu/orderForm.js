import React, { Component } from 'react';
import '../../../static/css/person/personMenu/orderForm.less';
import { queryShopCart } from '../../../api/course';

export default class orderForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            addCourse: []
        }
    }
    async componentWillMount() {
        let addCourse = (await queryShopCart(0)).data;
        this.setState({
            addCourse
        });
    }

    render() {
        let { addCourse } = this.state;
        console.log(addCourse);
        return (<div className='order-form'>
            {addCourse.map((item, index) => {
                let { scr, organization_info, organization, price, online,intro } = item;
                return <div className='course' key={index}>
                    <div className='headerBox'>
                        <h1>{organization}</h1>
                        <span>报名成功</span>
                    </div>
                    <div className='bodyBox'>
                        <a href="javascript:;">
                            <img src={scr} alt={intro} />
                            <h3>{organization_info}</h3>
                            <p>{organization}</p>
                            <i>{price}</i>
                            <span>{online}人最近学习</span>
                        </a>
                    </div>
                    <div className='footer'>
                        <a href="javascript:;" className="evaluate">评价课程</a>
                        <a href="javascript:;" className="remove">取消报名</a>
                    </div>
                </div>
            })}

        </div>)
    }
};
