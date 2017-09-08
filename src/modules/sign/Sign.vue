<template>
  <section>
    <section class="footer-bottom"> 
      <FooterBtn v-for="item in btn" :key="item.id" :subrouter="item.subrouter" :forumicon="item.forumicon" :forumtitle="item.forumtitle" />
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
          { subrouter: "/signlocation", forumicon: "fa-step-pre", forumtitle: "定位签到" },
          { subrouter: "/signcounts", forumicon: "fa-step-over", forumtitle: "签到统计" }
        ]
      };
    },
    components: { FooterBtn }
  };
</script>

<style>

</style>
