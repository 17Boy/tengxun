import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import '../../static/css/courseDetails.less';
import action from '../../store/action';



class CourseDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    await this.props.queryList()
  }

  render() {
    return (<section>
      <div className='nav-menu'>
        <div className='nav-Synthesize'>
          综合排序<Icon type='down' />
        </div>
        <div className='nav-Product'>
          产品策划<Icon type='down' />
        </div>
        <div className='nav-Screen'>
          筛选<Icon type='down' />
        </div>
      </div>


      {this.props.listData.map((item, index) => {
        let { title, price, scr, online } = item;
        return (<div className='data-structures'>
          <div className='imgBox'>
            <img src={scr} alt={title} />
            <p>{online}已经报名</p>
          </div>
          <div className='textBox'>
            <h3>{title}</h3>
            <p>资料</p>
            <span>{price}</span>
          </div>
        </div>)
      })}

    </section>);
  }
}


export default withRouter(connect(state => ({ ...state.course }), action.course)(CourseDetails));