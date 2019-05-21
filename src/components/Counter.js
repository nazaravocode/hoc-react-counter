import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';
import propsLogger from '../hoc/propsLogger';

 function Counter  (props) {
    const {decrementCounter, counter,  incrementCounter } = props;
    return (<div className="container">
        <span className="btn btn-danger" onClick={decrementCounter}>-</span>
        <span className="btn btn-light">{counter}</span>
        <span className="btn btn-success" onClick={incrementCounter}>+</span>

    </div>);
};

export default propsLogger(Counter);