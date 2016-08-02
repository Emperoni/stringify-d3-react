'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './components/Logo';
import Chart from './components/Chart';

ReactDOM.render(
    <div>
    <h1>
        <Logo /> Create balls and drag them!
    </h1>
    <Chart />
    </div>,
    document.getElementById('app')
);
