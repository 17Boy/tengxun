import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter, Redirect, NavLink, Switch, Route } from 'react-router-dom';
import List from '../course/List';
import CourseDetails from '../course/CourseDetails';

class Design extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<section>
            <div className='navBox'>
                <h3 className='h2' onClick={() => { this.props.history.push('/CourseDetails') }}>互联网产品</h3>
                <Switch>

                </Switch>
                <ul>
                    <li><Link to='/CourseDetails'>产品策划</Link></li>
                    <li><Link to='/CourseDetails'>产品运营</Link></li>
                    <li><Link to='/CourseDetails'>游戏策划</Link></li>
                    <li><Link to='/CourseDetails'>游戏运营</Link></li>
                    <li><Link to='/CourseDetails'>新媒体营销</Link></li>
                    <li><Link to='/CourseDetails'>更多<i /></Link></li>
                </ul>
                <a href='javascript:;' className='h2'>互联网营销</a>
                <ul>
                    <li><Link to='/CourseDetails'>淘宝营销</Link></li>
                    <li><Link to='/CourseDetails'>跨境营销</Link></li>
                    <li><Link to='/CourseDetails'>微信营销</Link></li>
                    <li><Link to='/CourseDetails'>京东营销</Link></li>
                    <li><Link to='/CourseDetails'>拼多多</Link></li>
                    <li><Link to='/CourseDetails'>其他<i /></Link></li>
                </ul>
            </div>

        </section>)
    }
};

export default withRouter(connect()(Design))