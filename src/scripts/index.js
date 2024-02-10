/* eslint-disable import/no-relative-packages */
import 'regenerator-runtime';
import '../style/css/output.css';
import '../style/libraryMFC/MaterialDesignIcons6/css/materialdesignicons.min.css';

import App from './view/app';

// console.log('Hello Coders!');
const app = new App({
//   button: document.querySelector('#menu'),
//   drawer: document.querySelector('#nav1'),
  content: document.querySelector('#maincontent'),
});
window.addEventListener('load', () => {
  // sfmodal.loading();
  app.renderPage();
  // swRegister();
  // WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
  // sfmodal.close();
});
