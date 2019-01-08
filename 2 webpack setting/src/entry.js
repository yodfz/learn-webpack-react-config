import React from 'react';
import ReactDOM from 'react-dom';
import Index from './index';

ReactDOM.render( < Index / > , document.querySelector('#app'));
if (module.hot) {
    module.hot.accept()
}