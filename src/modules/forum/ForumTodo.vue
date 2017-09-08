<template>
  <section class="wh-section wh-forum">
    <TabGroup><li><span>待办</span><em>12</em></li><li><span>待阅</span><em>101</em></li></TabGroup>  
    <Search /> 
    <ul class="listitem">
      <li v-for="item in forumlist.items">
        <div>
          <p>{{ item.title }}</p>
          <p><span>{{ item.times }}</span><em>{{ item.status }}</em><em>{{ item.em }}</em></p>
        </div>
      </li>
    </ul>
  </section>
</template>
<script>
  import {
    GET_FORUM_TODO
  } from '@/scripts/constant';

  import Search from "@/components/Search";
  import TabGroup from "@/components/TabGroup";
  import { mapState } from 'vuex';

  export default{
    computed: {
      ...mapState(['forumlist'])
    },
    created () {
      this.$store.dispatch(GET_FORUM_TODO);
    },
    components: { Search, TabGroup }
  };
</script>