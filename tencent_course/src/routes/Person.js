import React from 'react';
import {connect} from 'react-redux';

class Person extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        return <section>
            Person
        </section>
    }
}

export default connect()(Person);