import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

import '../../static/css/courseDetail.less';

let videoPoster=require('../../static/images/banner/3.jpg');

class Detail extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        return <section className={'courseDetail'}>
            <video
                src='http://59.108.138.11/vedu.tc.qq.com/ALWNc5BZDLYwJdTz_nvTzQSpcKyPKuxaWRtolOnVq3HM/h1417sr62j7.m701.mp4?vkey=A525BC9D5C84C4B4C44BA8F10A495FA50ABF01722E8DFA5381879D2C83270373AC90F90223BB548F3995A6219B9568DE278194317571B6C914BF4C015332F3C7A61F5424BBD8EDD4A2346CE32E2F8C8205331CC8BB67B06048BEF9DC3DBE35ED698A3DC102B017FF2EBCFCA01658C50524D27ED73355E083&br=16&platform=2&fmt=auto&level=0&sdtfrom=v3010&guid=53a1cd62d82011f9c4257f6e25c2ba41'
                 controls preload={'none'} poster={videoPoster}/>

            <div className="detailSelect">
                <NavLink to={''}>详情</NavLink>
                <NavLink to={''}>目录</NavLink>
                <NavLink to={''}>相关课程</NavLink>
            </div>

        </section>
    }
}

export default connect()(Detail);