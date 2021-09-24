import React, { Component } from 'react';
import './button.css';

function Button({ lable }) {

    return <div data-testid="button" className="button-style" >Helloo {lable}</div>
}

export default Button
