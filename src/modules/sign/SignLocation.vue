<template>
  <section class="wh-section">
    <header>
      <p><span>{{ datetime() }}</span>您本日已签到 {{ total }}次</p>
    </header>
    <section class="signin-list">
      <ul>
        <li v-for="item in items">
          <i class="fa fa-"></i>
          <em>{{ item.time }}</em>
          <span>{{ item.address }}</span>
        </li>
      </ul>
    </section>
    <Fileload  />
    <section class="sign-remark">
      <textarea placeholder="签到备注"></textarea>
    </section>
    <section class="sign-in">
      <div>
        <span>签到</span>
        <span>{{ now() }}</span>
      </div>
      <p> {{ address }} </p>
      <p>
        <a href="">重新定位</a>
        <a href="">微调地址</a>
      </p>
    </section>
  </section>
</template>
<script>
  import Fileload from '@/components/Fileload';
  export default {
    data () {
      return {
        items: [
          { time: '08:02', address: '北京市石景山区古城街道石景山路99号' },
          { time: '08:02', address: '北京市石景山区古城街道石景山路99号' },
          { time: '08:02', address: '北京市石景山区古城街道石景山路99号' },
          { time: '08:02', address: '北京市石景山区古城街道石景山路99号' },
          { time: '08:02', address: '北京市石景山区古城街道石景山路99号' }
        ],
        address: '安徽省合肥市包河区和地广场'
      };
    },
    computed: {
      total: function () {
        return this.items.length;
      }
    },
    methods: {
      datetime: function () {
        var today = new Date();
        var month = today.getMonth() + 1;
        return today.getFullYear() + '-' + month + '-' + today.getDate();
      },
      now: function () {
        var today = new Date();
        return today.getHours() + ":" + today.getMinutes();
      }
    },
    components: { Fileload }
  };
</script>
