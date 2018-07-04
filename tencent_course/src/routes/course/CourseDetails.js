import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import '../../static/css/courseDetails.less';

class CourseDetails extends React.Component {
  constructor(props) {
    super(props);
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

      <div></div>
    </section>);
  }
}


export default withRouter(connect()(CourseDetails));