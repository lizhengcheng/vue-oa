<template>
  <section>
    <section class="footer-bottom"> 
      <FooterBtn v-for="item in btn" :key="item.id" :subrouter="item.subrouter" :forumicon="item.forumicon" :forumtitle="item.forumtitle" :class="{ active: item.isActive }" v-on:click="changeState(item)"/>
    </section>
    <router-view></router-view>
  </section>
</template>

<script>
  import FooterBtn from "@/components/FooterBtn";
  export default {
    data () {
      return {
        btn: [
          { subrouter: "/forumtodo", forumicon: "fa-step-pre", forumtitle: "待办", isActive: true },
          { subrouter: "/forumdone", forumicon: "fa-step-over", forumtitle: "已办", isActive: false },
          { subrouter: "/forummine", forumicon: "fa-step-mine", forumtitle: "我的", isActive: false },
          { subrouter: "/forumstart", forumicon: "fa-share-alt", forumtitle: "发起", isActive: false }
        ]
      };
    },
    methods: {
      changeState: function (item) {
        item.active = !item.active;
      }
    },
    components: { FooterBtn }
  };
</script>

<style>

</style>
