import dva from 'dva';
import createLogger from 'redux-logger';
import router from './router';
// init
const app = dva({
  onAction: createLogger()
});
// router
app.router(router);
// start
app.start("#init");