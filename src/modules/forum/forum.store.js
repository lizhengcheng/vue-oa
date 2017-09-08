import axios from '@/scripts/axios.conf';

import {
  SET_FORUM_TODO,
  GET_FORUM_TODO
} from '@/scripts/constant';

const store = {
  state: { //数据结构
    items: []
  },
  mutations: { //更新应用状态
    [SET_FORUM_TODO]: (state, { list }) => {
      state.items = list;
      console.log(state.items);
    }
  },
  actions: { //从服务器端获取数据
    [GET_FORUM_TODO]: function ({ commit }) {
      axios.get("http://127.0.0.1:8000/forumdata/forumdata.json").then((response) => {
        return commit('SET_FORUM_TODO', { list: response.items_todo });
      }).catch(function (err) {
        console.log(err);
      });
    }
  },
  getters: {
    toRead: state => {
      return state.items.filter(items => !items.todo);
    }
  }
};

export default store;
