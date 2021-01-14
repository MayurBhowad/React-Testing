import React, { Component } from 'react'

export class ButtonClass extends Component {

    constructor(props) {
        super(props);
        this.state = {
            myClass: 'mouseOut'
        }

        this._onMouseEnter = this._onMouseEnter.bind(this)
        this._onMouseLeave = this._onMouseLeave.bind(this)
    }

    _onMouseEnter() {
        this.setState({ myClass: 'hovered' })
    }

    _onMouseLeave() {
        this.setState({ myClass: 'mouseOut' })
    }

    render() {
        return (

            <button className={`one, two, ${this.state.myClass}`}
                onMouseEnter={this._onMouseEnter}
                onMouseLeave={this._onMouseLeave}
            >{this.props.children}</button>

        )
    }
}

export default ButtonClass
