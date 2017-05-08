import dva from 'dva';
import createLogger from 'redux-logger';
import router from './router';
import blog from './routes/blog/model';
// init
const app = dva({
  onAction: createLogger()
});
// model
app.model(blog);
// router
app.router(router);
// start
app.start("#init");