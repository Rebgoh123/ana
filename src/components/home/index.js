import React, { Component } from 'react';
import { connect } from 'react-redux';

import Carousel from './carousel';
import Pillars from './pillars'
import Service from './service'
import Bank from './bank'

class Home extends Component{

    render() {

        return (
            <div>
                <Carousel/>
                <Pillars/>
                <Service/>
                <Bank/>
            </div>
    );
    }
}

function mapStateToProps(props){
    return props
}

export default connect(mapStateToProps) (Home);

