import React from 'react';
import {connect} from 'react-redux';
import {Carousel} from 'antd';
import '../static/css/home.less';

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


    render() {
        return <section className={'homeBox'}>
            <Carousel autoplay>
                {IMG_DATA.map((item, index) => {
                    return <div key={index}><img src={item.pic} alt=""/></div>
                })}
            </Carousel>







        </section>
    }
}

export default connect()(Home);