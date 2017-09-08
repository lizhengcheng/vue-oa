<template>
  <div>
    <header>
      <h1>{{ oaname }}移动办公系统</h1>
      <Avatar :url="avatarUrl"  />
      <strong>欢迎您，{{ username }}</strong>
      <p>
        <span>{{ department }}</span>
      </p>
    </header>
    <section>
      <ul>
        <li v-for="li in items">
          <router-link :to="li.path">
            <i class="fa" :class="li.icon">
              <em>{{ li.infotips }}</em>
            </i>
            <span>{{ li.title }}</span>
          </router-link>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
  import Avatar from '@/components/Avatar';
  import Userheader from '@/components/Userheader';
  export default {
    data () {
      return {
        avatarUrl: 'http://127.0.0.1:8000/user.jpg',
        oaname: 'xxxxxxx',
        username: '宣慧',
        department: '研发一部',
        items: [
          { path: './forumtodo', infotips: '8', icon: 'fa-share-alt', title: '流程' },
          { path: './message', infotips: '7', icon: 'fa-short-mesfa-briefcase', title: '信息' },
          { path: '', infotips: '12', icon: 'fa-briefcase', title: '公文' },
          { path: '', infotips: '2', icon: 'fa-envelope', title: '邮件' },
          { path: '', infotips: '4', icon: 'fa-log', title: '日志' },
          { path: '', infotips: '5', icon: 'fa-share-alt', title: '会议' },
          { path: '', infotips: '2', icon: 'fa-map-marker', title: '定位' },
          { path: '', infotips: '2', icon: 'fa-contract-mana', title: '调查' },
          { path: '', infotips: '', icon: 'fa-share-alt', title: '通讯录' },
          { path: '', infotips: '', icon: 'fa-essence-inf', title: '论坛' },
          { path: '', infotips: '', icon: 'fa-bar-chart', title: '报表' },
          { path: '', infotips: '', icon: 'fa-calendar', title: '领导日程' },
          { path: '/signlocation', infotips: '', icon: 'fa-sign', title: '签到' }
        ]
      };
    },
    components: { Avatar, Userheader }
  };
</script>

<style>

</style>
