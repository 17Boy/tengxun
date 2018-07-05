import React from 'react';
import {connect} from 'react-redux';
import {withRouter,Switch,Route} from 'react-router-dom';

import Search from './Search.js';


class Item extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        return <Switch>
            <Route path={'/course'}>
                <Search/>
            </Route>
            <Route path={'/classify'}>
                <h2 className={'item'}>分 类</h2>
            </Route>
            <Route path={'/mycourse'}>
                <h2 className={'item'}>课 程 表</h2>
            </Route>
            <Route path={'/person/info'}>
                <h2 className={'item'}>关 于 我 的</h2>
            </Route>
        </Switch>
    }
}

export default withRouter(connect()(Item));