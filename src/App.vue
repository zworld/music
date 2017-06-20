<template>
  <div id="app">
    <m-header></m-header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>
<script>
  import 'css/common'
  // 导入字体
  import 'lib/font-awesome/less/font-awesome'
  import MHeader from 'components/header'
  export default {
    name: 'app',
    components: { MHeader }
  }
</script>
<style lang="less">
  body{
    display: flex;
    flex-direction: column;
  }
  main{
    flex: 1;
  }
</style>
