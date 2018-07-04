import React from 'react';
import {connect} from 'react-redux';
import {Carousel} from 'antd';
import '../static/css/home.less';
import {Switch,Route,Redirect} from 'react-router-dom';

import action from "../store/action";

let IMG_DATA = [];
for (let i = 1; i <= 6; i++) {
    IMG_DATA.push({
        pic: require(`../static/images/banner/${i}.jpg`)
    })
}

class Home extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    async componentDidMount() {
        let {queryBanner, bannerData, courseData, queryList} = this.props;
        if (!bannerData || bannerData.length === 0) {
            queryBanner();//=>DISPATCH
        }
    }

    render() {
        let {bannerData, courseData} = this.props;
        return <section className={'homeBox'}>

            {/*轮播图*/}
            <div className="banner">
                {bannerData && bannerData.length !== 0 ? (<Carousel autoplay>
                    {bannerData.map((item, index) => {
                        let {title, scr} = item;
                        return <div key={index}><img src={scr} alt={title}/></div>
                    })}
                    </Carousel>) : ''}
            </div>

            {/*<Carousel autoplay>
                {IMG_DATA.map((item, index) => {
                    return <div key={index}><img src={item.pic} alt=""/></div>
                })}
            </Carousel>*/}


          <div className="courseList">
                <ul className={'classLive clearfix'}>
                    <header>
                        <h2 className={'active'}>前端</h2>
                        <h2>兴趣生活</h2>
                    </header>
                    <li>
                        <div className={'imgStyle'}>
                            <img src={IMG_DATA[1].pic} alt=""/>
                        </div>
                        <div>
                            <h4>pure响应式</h4>
                            <p>芳芳老师</p>
                            <span>直播时间: 14:00</span>
                        </div>
                    </li>
                    <li>
                        <div className={'imgStyle'}>
                            <img src={IMG_DATA[1].pic} alt=""/>
                        </div>
                        <div>
                            <h4>pure响应式</h4>
                            <p>芳芳老师</p>
                            <span>直播时间: 14:00</span>
                        </div>
                    </li>
                    <li>
                        <div className={'imgStyle'}>
                            <img src={IMG_DATA[1].pic} alt=""/>
                        </div>
                        <div>
                            <h4>pure响应式</h4>
                            <p>芳芳老师</p>
                            <span>直播时间: 14:00</span>
                        </div>
                    </li>
                </ul>

                <ul className="publicClass">
                    <h2>精选公开课</h2>
                    <div className="selectClass">
                        <em>课程</em>
                            <div>
                                <span>HTML/CSS</span>
                                <span>JavaScript</span>
                                <span>JQuery</span>
                                <span>HTML5</span>
                                <span>CSS3</span>
                                <span>Vue</span>
                                <span>React</span>
                                <span>Node.js</span>
                                <span>Web全栈开发</span>
                            </div>
                    </div>
                    <ul className={'clearfix'}>
                        <li>
                            <div className={'imgStyle'}>
                                <img src={IMG_DATA[5].pic} alt=""/>
                            </div>
                            <p>阿里前端p6架构师培养计划[动脑学院]</p>
                            <span>免费</span>
                        </li>
                        <li>
                            <div className={'imgStyle'}>
                                <img src={IMG_DATA[1].pic} alt=""/>
                            </div>
                            <p>阿里前端p6架构师培养计划[动脑学院]</p>
                            <span>免费</span>
                        </li>
                        <li>
                            <div className={'imgStyle'}>
                                <img src={IMG_DATA[5].pic} alt=""/>
                            </div>
                            <p>阿里前端p6架构师培养计划[动脑学院]</p>
                            <span>免费</span>
                        </li>
                        <li>
                            <div className={'imgStyle'}>
                                <img src={IMG_DATA[4].pic} alt=""/>
                            </div>
                            <p>阿里前端p6架构师培养计划[动脑学院]</p>
                            <span>免费</span>
                        </li>
                        <li>
                            <div className={'imgStyle'}>
                                <img src={IMG_DATA[2].pic} alt=""/>
                            </div>
                            <p>阿里前端p6架构师培养计划[动脑学院]</p>
                            <span>免费</span>
                        </li>
                        <li>
                            <div className={'imgStyle'}>
                                <img src={IMG_DATA[5].pic} alt=""/>
                            </div>
                            <p>阿里前端p6架构师培养计划[动脑学院]</p>
                            <span>免费</span>
                        </li>
                    </ul>
                </ul>

                <ul className="needPayClass">
                    <h2>精选付费课</h2>
                    <div className="selectClass">
                        <em>课程</em>
                            <div>
                                <span>HTML/CSS</span>
                                <span>JavaScript</span>
                                <span>JQuery</span>
                                <span>HTML5</span>
                                <span>CSS3</span>
                                <span>Vue</span>
                                <span>React</span>
                                <span>Node.js</span>
                                <span>Web全栈开发</span>
                            </div>
                    </div>
                    <ul className={'clearfix'}>
                        <li>
                            <div className={'imgStyle'}>
                                <img src={IMG_DATA[3].pic} alt=""/>
                            </div>
                            <p>阿里前端p6架构师培养计划[动脑学院]</p>
                            <span>免费</span>
                        </li>
                        <li>
                            <div className={'imgStyle'}>
                                <img src={IMG_DATA[2].pic} alt=""/>
                            </div>
                            <p>阿里前端p6架构师培养计划[动脑学院]</p>
                            <span>免费</span>
                        </li>
                        <li>
                            <div className={'imgStyle'}>
                                <img src={IMG_DATA[1].pic} alt=""/>
                            </div>
                            <p>阿里前端p6架构师培养计划[动脑学院]</p>
                            <span>免费</span>
                        </li>
                        <li>
                            <div className={'imgStyle'}>
                                <img src={IMG_DATA[4].pic} alt=""/>
                            </div>
                            <p>阿里前端p6架构师培养计划[动脑学院]</p>
                            <span>免费</span>
                        </li>
                        <li>
                            <div className={'imgStyle'}>
                                <img src={IMG_DATA[5].pic} alt=""/>
                            </div>
                            <p>阿里前端p6架构师培养计划[动脑学院]</p>
                            <span>免费</span>
                        </li>
                        <li>
                            <div className={'imgStyle'}>
                                <img src={IMG_DATA[1].pic} alt=""/>
                            </div>
                            <p>阿里前端p6架构师培养计划[动脑学院]</p>
                            <span>免费</span>
                        </li>
                    </ul>
                </ul>


            </div>

            <section className={'moreCourse'}>
                <a>查看全部课程</a>
            </section>
        </section>
    }
}

export default connect(state => ({...state.course}), action.course)(Home);