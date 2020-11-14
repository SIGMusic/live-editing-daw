import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import RangeSlider from 'react-bootstrap-range-slider';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';

const MyComponent = () => {

    const [ value, setValue ] = useState(0);
  
    return (
      <RangeSlider
        value={value}
        onChange={changeEvent => setValue(changeEvent.target.value)}
      />
    );
  
};

var element = React.createElement('h1', { className: 'greeting' }, 'Hello, world!');

const elements = [<RangeSlider />, element];

ReactDOM.render(elements, document.getElementById('root'));
