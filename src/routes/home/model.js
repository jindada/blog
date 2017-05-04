export default {
  namespace: 'demo',
  /**
   * State表示Model的状态数据，通常表现为一个javascript对象
   * 操作的时候每次都要当作不可变数据（immutable data）来对待
   * 保证每次都是全新对象，没有引用关系，这样才能保证State的独立性，便于测试和追踪变化。
   * 需要注意：
   *  建议最多一层嵌套，以保持 state 的扁平化，深层嵌套会让 reducer 很难写和难以维护
   *  {
   *    a: {
   *      b: {
   *        c: 1
   *      }
   *    }
   *  }
   */
  state: {
    value: 'hello lucio'
  },
  /**
   * Subscriptions是一种从源获取数据的方法，来自于elm ( http://elm-lang.org/blog/farewell-to-frp )
   * Subscription(订阅)，用于订阅一个数据源，然后根据条件dispatch需要的actio
   * 数据源可以是当前的时间、服务器的websocket连接、keyboard输入、history路由变化等等。
   */
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        if (pathname === '/路由') {
          dispatch({ type: 'effects／reducers' });
        }
      });
    }
  },
  /**
   * Effect(副作用)
   * 在我们的应用中，最常见的就是异步操作。它来自于函数编程的概念
   * dva底层引入了redux-sagas做异步流程控制，采用了generator的概念，将异步转成同步写法，从而将effects转为纯函数
   * put 用于触发 action 
   * select 用于从 state 里获取数据 例如：const user = yield select(state => state.user);
   * call 用于调用异步逻辑 
   */
  effects: {
    /**
     * @param {*} action 建议采用解构写法
     * @param {*} redux-saga {select, put, call}
     * * add({}, {select, put, call}) {
     *   yield put({type: 'reducers'})
     *   const demo = yield select(state => state.demo);
     *   const { status, data } = yield call(http);
     * } 
     */
  },
  /**
   * type Reducer<S, A> = (state: S, action: A) => S
   * Reducer 函数接受两个参数：
   *   1.当前model的state对象 <-> 之前已经累积运算的结果
   *   2.准备更新的 <-> 当前要被累积的值
   * 返回的是一个新的值。该函数把一个集合归并成一个单值。
   * 需要注意：
   *  1.Reducer 必须是纯函数，同样的输入必然得到同样的输出
   *  2.每一次的计算都应该使用immutable data
   */
  reducers: {
    /**
     * @param {*} state 
     * @param {*} action 建议采用解构写法
     * add(state, {value}) {
     *   return {...state, value}
     * } 
     */
  }
};