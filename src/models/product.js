import { create, remove, update, query } from '../services/product';
import { parse } from 'qs';

export default {
  // 1.model领域名称
  namespace: 'product',
  // 2.state map
  state: {
    list: [],
    loading: false,
    total: null,
    current: 1,
    currentItem: {},
    modalVisible: false,
    modalType: 'create',
  },
  // 3.订阅数据源（一般订阅默认加载的数据，例如初始数据）
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location=>{
          if(location.pathname === '/product'){
            dispatch({
              type:'query',
              payload: location.query,
            });
          }
      });
    },
  },


  // 4.异步数据逻辑（通过接口更新数据源）
  effects: {
    *query({ payload }, { call, put }) {
      yield put({
        type: 'querySuccess',
        payload: { page: 1,  ...payload },
      });
      const {data} = yield call(query,parse(payload));
      if(data){
        yield put({
          type:'querySuccess',
          payload:{
            list: data.data,
            total: data.count,
            // current: data.page.current,
            // list:data.data,
            // total:data.count
          }
        })
      }
    },
  },

  // 处理页面数据逻辑（通过更新state来驱动页面改变）
  reducers: {
    querySuccess(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
