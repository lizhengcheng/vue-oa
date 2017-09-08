<template>
  <section>
    <button v-on:click="getdata">data to update</button>
    <ul>
      <li v-for="li in datalist.datalist" ><strong>{{ li.firstName }}</strong><span>{{ li.lastName }}</span><span>{{ li.email }}</span></li>
    </ul>
    <section>
      <router-link to="/forum">
        click to
      </router-link>
    </section>
  </section>
</template>

<script>
  import { mapState } from 'vuex';
  export default {
    computed: {
      ...mapState(['datalist'])
    },
    methods: {
      getdata () {
        this.$store.dispatch('getData');
      }
    }
  };

</script>

<style>

</style>
