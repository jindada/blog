import listData from '../../data';
const delay = timeout => new Promise(resolve => setTimeout(resolve, timeout));

export default {
  namespace: 'blog',
  state: {
    loading: false,
    listData: [],
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        if (pathname === '/blog') {
          dispatch({ type: 'init' });
        }
      });
    }
  },
  effects: {
    * init({}, { put }) {
      yield put({ type: 'loadingStatus' });

      yield delay(1500);

      yield put({ type: 'initSuccess', data: listData });
    },
    * filter({ data }, { put, select }) {
      const { type, keyword } = data;

      yield put({ type: 'loadingStatus' });

      yield yield delay(1000);
      // 数据过滤
      const _listData = keyword === undefined ? listData.filter(({ type: _type }) => _type === type) : listData.filter(({ type: _type, labels, title }) => (title.includes(keyword) ||  labels.includes(keyword)) && _type === type);

      yield put({ type: 'initSuccess', data: _listData });
    }
  },
  reducers: {
    loadingStatus(state) {
      return { ...state, loading: true }
    },
    initSuccess(state, { data }) {
      return { ...state, listData: data, loading: false }
    }
  }
};