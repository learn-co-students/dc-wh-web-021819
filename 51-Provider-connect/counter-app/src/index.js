import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import {Provider} from 'react-redux'
import App from './components/App'
import st from './redux/store'

ReactDOM.render(<Provider store={st}><App /></Provider>, document.getElementById('root'));
