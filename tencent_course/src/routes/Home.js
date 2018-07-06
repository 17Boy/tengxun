import React from 'react';
import {connect} from 'react-redux';
import {Carousel} from 'antd';
import '../static/css/home.less';
import {Switch, Route, Redirect, Link} from 'react-router-dom';
import action from "../store/action";

import Search from '../component/Search';

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
            queryBanner();
        }
        if (courseData.data.length === 0) {
            queryList();
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

                {/*<Carousel autoplay>
                {IMG_DATA.map((item, index) => {
                    return <div key={index}><img src={item.pic} alt=""/></div>
                })}
            </Carousel>*/}
            </div>

            <div className="courseList">
                {bannerData && bannerData.length !== 0 ? <ul className={'classLive'}>
                    <header>
                        <h2 className={'active'}>前端</h2>
                        <h2>兴趣生活</h2>
                    </header>
                    {bannerData.map((item, index) => {
                        let {title, scr, teacher, time, id} = item;
                        return <Link key={index} to={{
                            pathname: '/course/detail',
                            search: `?courseId=${id}`
                        }} onClick={this.queryCourseDetail}>
                            <li>
                                <div className={'imgStyle'}>
                                    <img src={scr} alt={title}/>
                                </div>
                                <div className={'classDesc'}>
                                    <h4>{title}</h4>
                                    <p>{teacher}</p>
                                    <span>直播时间: {time}</span>
                                </div>
                            </li>
                        </Link>
                    })}
                </ul> : ''}

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