import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import './assets/styles/thirdparty/font-awesome.css';
import './assets/styles/table.css';

import routes from './config/routes';

ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();
