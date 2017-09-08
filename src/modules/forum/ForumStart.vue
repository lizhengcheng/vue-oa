<template>
  <section class="wh-section wh-forum">
    <TabGroup><li v-bind:class="{ active: isActive }"><span>常用流程</span></li><li><span>全部流程</span></li></TabGroup>
    <search />
    <section>
      <ul class="listitem"> 
        <li v-for="(item, index) in items"> 
          <div>
            <span>{{ index+1 }}</span>
            <p> {{ item.title }} </p>
            <em>已发起 {{ item.num }} 次 </em>
          </div>
        </li>
      </ul>
    </section> 
  </section>
</template>

<script>
  import FooterBtn from "@/components/FooterBtn";
  import TabGroup from "@/components/TabGroup";
  import Search from "@/components/Search";
  export default {
    data () {
      return {
        btn: [
          { subrouter: "", forumicon: "fa-step-pre", forumtitle: "待办" },
          { subrouter: "", forumicon: "fa-step-over", forumtitle: "已办" },
          { subrouter: "", forumicon: "fa-step-mine", forumtitle: "我的" },
          { subrouter: "", forumicon: "fa-share-alt", forumtitle: "发起", isactive: "active" }
        ],
        items: [
          { title: "加班申请流程", num: 27 },
          { title: "项目用第三方产品领用、采购申请流程", num: 23 },
          { title: "办公设备及软件采购申请流程 ", num: 14 },
          { title: "申请不刷卡签到流程", num: 8 },
          { title: "项目核算差旅费报销申请流程", num: 10 },
          { title: "招待费申请流程", num: 9 },
          { title: "多方电话会议使用申请流程", num: 0 }
        ],
        isActive: true
      };
    },
    components: { FooterBtn, TabGroup, Search }
  };
</script>

<style>

</style>
