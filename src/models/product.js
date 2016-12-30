// export default {
//   namespace:'products',
//   listData:[{
//         key:'1',
//         name:'足球',
//         price:66,
//         state:1
//       },{
//         key:'2',
//         name:'篮球',
//         price:77,
//         state:0
//       },{
//         key:'3',
//         name:'乒乓球',
//         price:88,
//         state:1
//       }]
// }

export default {
  // 1.model领域名称
  namespace: 'product',
  // 2.state map
  state: {
    list:[]
  },
  // 3.订阅数据源（一般订阅默认加载的数据，例如初始数据）
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(loaction=>{
          if(loaction.pathname==='/product'){
            dispatch({
              type:'query',
              payload:location.query
            });
          }
      })
    }
  },


  // 4.异步数据逻辑（通过接口更新数据源）
  effects: {
    * query({ payload }, { call, put }) {
      yield put({
        type: 'querySuccess',
        payload: {
          list: [{
                  key:'1',
                  name:'足球',
                  price:66,
                  state:1
                },{
                  key:'2',
                  name:'篮球',
                  price:77,
                  state:0
                },{
                  key:'3',
                  name:'乒乓球',
                  price:88,
                  state:1
                }]
        },
      });
    },
  },
  // 处理页面数据逻辑（通过更新state来驱动页面改变）
  reducers: {
    querySuccess(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
