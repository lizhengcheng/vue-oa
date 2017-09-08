<template>
  <div class="avatar" :class="extralClass" :style="style">
    <span v-if="hasAvatar">{{name}}</span>
  </div> 
</template>

<script>
  export default {
    props: {
      url: String,
      size: {
        type: String,
        default: 'sm'
      },
      name: {
        type: String,
        default: 'N'
      }
    },
    computed: {
      extralClass () {
        const classnames = [`avatar-${this.size}`];
        if (!this.url) {
          classnames.push('avatar-letter');
        }
        return classnames.join(' ');
      },
      style () {
        return {
          backgroundImage: `url(${this.url})`
        };
      },
      hasAvatar () {
        return !this.url;
      }
    }
  };
</script>

<style language="less" scoped>
  .avatar {
    width: 4rem;
    height: 4rem;
    background-size: cover; 
    &.avatar-xs {}

    &.avatar-sm {}

    &.avatar-md {}

    &.avatar-lg {}

    &.avatar-letter {}

  }


</style>
