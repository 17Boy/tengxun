import React from 'react';
import {connect} from 'react-redux';
import {Form, Icon, Input, Button, Checkbox, Modal} from 'antd';
import {Link} from 'react-router-dom';

import action from '../../store/action/index';

const FormItem = Form.Item;


class Login extends React.Component {
    constructor(props, context) {
        super(props, context);
    }


    
    render() {

        return <div className='personLoginBox'>
            登录
        </div>;
    }
}

export default connect()(Login);