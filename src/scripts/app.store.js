import Vue from 'vue';

import Vuex from 'vuex';

import datalist from '@/modules/getdata/getdata.store';
import forumlist from '@/modules/forum/forum.store';


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    datalist,
    forumlist
  }
});

