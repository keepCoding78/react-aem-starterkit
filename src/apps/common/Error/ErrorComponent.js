import React, { Component } from 'react';
import './styles/index.css';

export default class ErrorComponent extends Component {
    render() {
        return (
            <div className="global-error-container">
                <p>{this.props.children}</p>
            </div>
        )
    }
}