<template>
  <div class="panel">
    <div class="panel-title">
      <div class="title">{{ panel.title }}</div>
    </div>
    <div class="panel-content">
      <slot name="content">11111</slot>
    </div>
  </div>
</template>

<style lang="less" scoped>
  @import '../assets/css/variables';
  .panel-title {
    padding: 10px 0;
  }
  .panel-title .title {
    border-left: 2px solid @bg-color;
    font-size: 18px;
    padding-left: 5px
  }
</style>
<script>
  export default {
    props: ['panel'],
    data() {
      return {}
    },
    methods: {},
    created() {

    },
    mounted() {
    }
  }
</script>
