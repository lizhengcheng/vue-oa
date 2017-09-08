<template>
  <section class="wh-section wh-forum">
    <search /> 
    <ul class="listitem">
      <li v-for="item in items">
        <div>
          <p>{{ item.title }}</p>
          <p><span>{{ item.times }}</span><em>{{ item.status }}</em><em>{{ item.em }}</em></p>
        </div>
      </li>
    </ul>
  </section>
</template>
<script>
  import Search from "@/components/Search";
  import TabGroup from "@/components/TabGroup";
  export default{
    data () {
      return {
        items: [
          { 'title': '流程标题1', 'times': '2016-02-20 13:14', 'status': '退回', 'em': '' },
          { 'title': '在国机集团2014-2015年度先进基层党组织、优秀共产党员和优秀党务工作者拟表彰对象公示1 ', 'times': '2016-02-20 13:14', 'status': '办理完毕', 'em': '' },
          { 'title': '关于拟推荐全国老干部工作先进集体的公示 ', 'times': '2016-02-20 13:14', 'status': '行政人员备案', 'em': '吴艳' },
          { 'title': '王晓强发起的上海仓库采购进货流程等待您的办理！', 'times': '2016-02-20 13:14', 'status': '校对', 'em': '' },
          { 'title': '王晓强安徽区销售总结大会小鱼会议申请', 'times': '2016-02-20 13:14', 'status': '退回', 'em': '万丰、武一梅…' }
        ],
        tab: [
          { tabtitleFirst: "已办件", tabtitlSecond: "已阅件", numone: "1291", numtwo: "10", isactive: "active" }
        ]
      };
    },
    components: { Search, TabGroup }
  };
</script>