import React from 'react';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';
import action from '../../store/action/index';
import {Icon} from 'antd';
import '../../static/css/person/info.less';

class Info extends React.Component {
    constructor(props, context) {
        super(props, context);
        let {userInfo} = this.props;
        console.log(userInfo, 'constructor');
    }

    componentWillUpdate() {
        let {userInfo} = this.props;
        console.log(userInfo, 'update');
        if (userInfo) {
            let {name = null} = userInfo;
            this.name = name;
        }
    }

    render() {
        let {userInfo} = this.props;
        console.log(userInfo);

        return <div className='personBaseInfo'>
            <header>
                <div className={'userInfo clearfix'}>
                    <img src="" alt=""/>
                    {userInfo ? <span>{userInfo.name}</span> : <Link to={'/person/login'}>
                        <span>您还未登录！点此登录...</span>
                    </Link>}
                </div>

                <div className={'userCollect'}>
                    <div>
                        <Icon type="shopping-cart"/>
                        <span>订单管理</span>
                    </div>
                    <div>
                        <Icon type="heart-o"/>
                        <span>收藏</span>
                    </div>
                </div>
            </header>

            <ul className={"lists"}>
                <li>
                    <div className={'clearfix'}>
                        <span>余额</span>
                        <Icon type="right"/>
                        <span>0</span>
                    </div>
                    <div className={'clearfix'}>
                        <span>优惠券</span>
                        <Icon type="right"/>
                        <span>0</span>
                    </div>
                </li>
                <li>
                    <div className={'clearfix'}>
                        <span>腾讯课堂大师班</span>
                        <Icon type="right"/>
                    </div>
                    <div className={'clearfix'}>
                        <span>上课流量免费</span>
                        <Icon type="right"/>
                    </div>
                </li>
                <li>
                    <div className={'clearfix'}>
                        <span>反馈建议</span>
                        <Icon type="right"/>
                    </div>
                    <div className={'clearfix'}>
                        <span>设置</span>
                        <Icon type="right"/>
                    </div>
                </li>
            </ul>
        </div>;
    }
}

export default withRouter(connect(state => ({...state.person}), action.person)(Info));