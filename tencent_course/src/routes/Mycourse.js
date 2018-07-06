import React from 'react';
import {connect} from 'react-redux';
import '../static/css/reset.min.css'
import '../static/css/mycourse.less';
import {queryShopCart} from '../api/course';

class Mycourse extends React.Component {
    constructor(props, context) {
        super(props, context)
    }
    
   async componentWillMount(){
       let  addCourse= (await queryShopCart(0)).data;
       console.log(addCourse);
   }

    render() {
        return <section className='myCourseBox'>
            <div className='timeLineBox'>
                <p className='top'>今天上课</p>
                <p className='footer'>
                    <span className='time-m'><i>3</i>分钟</span>
                    <i></i>
                    <span>赶紧开始上课吧！</span>
                    <button>时长兑奖励</button>
                </p>
            </div>
                <ul>
                    <li className='clearfix'>
                        <img src="https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLDiaS3w3U1mSqnJmV6A1LUje3ynna50qRqtWGd8b8yEDW5zroxKtL5RqUq6TDaakNc4/220?tp=webp220&tp=webp" alt=""/>
                        <h2>珠峰培训前端工程化全栈公开课</h2>
                        <p>开始学习：第1节 贪吃蛇CANVAS小游戏开发</p>
                        <div className='bairight'>
                            <div className='baifenbi'>5%</div>
                            <p>已学习</p>
                        </div>
                    </li>
                </ul>
                <p className='nomore'>没有更多数据了</p>

        </section>
    }
}

export default connect()(Mycourse);