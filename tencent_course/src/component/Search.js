import React from 'react';
import {connect} from 'react-redux';
import {Input} from 'antd';
import {Link} from 'react-router-dom';


class Search extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        return <section className={'searchBox'}>

            <Link to={'/course'}>
                <i className={'logo'}/>
            </Link>

            <Input.Search placeholder="input search text"
                          style={{width: "80%"}}
                          onSearch={value => console.log(value)}/>
        </section>
    }
}

export default connect()(Search);