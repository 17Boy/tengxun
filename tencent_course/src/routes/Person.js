import React from 'react';
import {connect} from 'react-redux';
import {Switch,Route,Redirect} from 'react-router-dom';

/*IMPORT COMPONENT*/
import Login from './person/Login';
import Register from './person/Register';
import Info from './person/Info';
import Tip from './person/Tip';

class Person extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        return <section>
            <Switch>
                <Route path='/person/info' component={Login}/>
                <Route path='/person/login' component={Login}/>
                <Route path='/person/register' component={Register}/>
                <Redirect from='/person' to='/person/info'/>
            </Switch>
        </section>
    }
}

export default connect()(Person);