import React from 'react';
import {connect} from 'react-redux';

class Classify extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        return <section>
            分类栏
        </section>
    }
}

export default connect()(Classify);