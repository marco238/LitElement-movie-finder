import { Router } from '@vaadin/router';

import './src/fetcher-element.js';
import './src/stats-element.js';

window.addEventListener('load', () => { 
  initRouter();
});

function initRouter() {
  const router = new Router(document.querySelector('main'));
  router.setRoutes([
    {
      path: '/',
      component: 'fetcher-element'
    },
    {
      path: '/stats',
      component: 'stats-element'
    },
    {
      path: '(.*)', 
      component: 'not-found-view'
    }
  ]);
}