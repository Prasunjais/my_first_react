import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    <label>Iam The footer of this react project. {this.props.name}</label>
                </div>
            </React.Fragment>
        )
    }
}
