import React from 'react';
import {connect} from 'react-redux';
import {Input} from 'antd';



class Search extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        return <section className={'searchBox'}>
            <i/>
            <Input.Search placeholder="input search text"
                          style={{width:"80%"}}
                          onSearch={value => console.log(value)}/>
        </section>
    }
}

export default connect()(Search);