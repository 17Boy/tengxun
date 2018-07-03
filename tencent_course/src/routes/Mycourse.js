import React from 'react';
import {connect} from 'react-redux';

class Mycourse extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        return <section>
            Mycourse
        </section>
    }
}

export default connect()(Mycourse);