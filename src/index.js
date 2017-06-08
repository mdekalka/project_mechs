import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import './assets/styles/thirdparty/normalize.css';
import './assets/styles/thirdparty/bootstrap.css';
import './assets/styles/thirdparty/font-awesome.css';
import './assets/styles/messages.css';
import './assets/styles/dropdown.css';
import './assets/styles/layout.css';
import './assets/styles/common.css';
import './assets/styles/form.css';
import './assets/styles/table.css';
import './index.css';

import routes from './config/routes';

ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();
