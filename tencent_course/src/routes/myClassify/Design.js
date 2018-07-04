import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

class Design extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='navBox'>
                <a href='javascript:;' className='h2'>互联网产品</a>
                <ul>
                    <li><a href="javascript:;">产品策划</a></li>
                    <li><a href="javascript:;">产品运营</a></li>
                    <li><a href="javascript:;">游戏策划</a></li>
                    <li><a href="javascript:;">游戏运营</a></li>
                    <li><a href="javascript:;">新媒体营销</a></li>
                    <li><a href="javascript:;">更多<i /></a></li>
                </ul>
                <a href='javascript:;' className='h2'>互联网营销</a>
                <ul>
                    <li><a href="javascript:;">淘宝营销</a></li>
                    <li><a href="javascript:;">跨境营销</a></li>
                    <li><a href="javascript:;">微信营销</a></li>
                    <li><a href="javascript:;">京东营销</a></li>
                    <li><a href="javascript:;">拼多多</a></li>
                    <li><a href="javascript:;">其他<i /></a></li>
                </ul>
            </div>
        )
    }
};

export default withRouter(connect()(Design))
