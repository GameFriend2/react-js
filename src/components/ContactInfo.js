/**
 * Created by ktk61 on 2016-12-05.
 */
import React from 'react';

export default class ContactInfo extends React.Component{
    render(){
        return(
            <div onClick={this.props.onClick}>{this.props.contact.name}</div>
        )
    }
}