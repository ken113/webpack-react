import React from 'react';
import ReactDOM from 'react-dom';

import Hello from './component.jsx';

main();

function main() {
    ReactDOM.render(<Hello name='sjg'/>, document.getElementById('app'));
}



