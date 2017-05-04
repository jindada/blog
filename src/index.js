import dva from 'dva';
import createLogger from 'redux-logger';
import router from './router';
import home from './routes/home/model';
// init
const app = dva({
  onAction: createLogger()
});
// model
app.model(home);
// router
app.router(router);
// start
app.start("#init");