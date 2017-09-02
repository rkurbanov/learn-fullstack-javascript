import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import App from './components/App';

ReactDOM.render(
    <App initialData={window.initialData} />,
    document.getElementById('root')
)