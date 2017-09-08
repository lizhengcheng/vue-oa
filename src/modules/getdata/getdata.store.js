import axios from '@/scripts/axios.conf';


const store = {
  state: {
    datalist: []
  },
  mutations: {
    setData (state, datalist) {
      state.datalist = state.datalist.concat(datalist.datalist);
      console.log(state.datalist);
    }
  },
  actions: {
    getData ({ commit }) {
      return axios.get('http://127.0.0.1:8000/getdata/datalist.json').then(datalist => commit('setData', datalist));
    }
  }
};

export default store;
