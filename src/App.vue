<template>
  <div id="app">
    <m-header></m-header>
    <main>
      <router-view></router-view>
    </main>
    <m-slider></m-slider>
  </div>
</template>
<script>
  import 'css/common'
  // 导入字体
  import 'lib/font-awesome/less/font-awesome'
  // 导入组件
  import MHeader from 'components/header'
  import MSlider from 'components/Slider'
  export default {
    name: 'app',
    components: { MHeader, MSlider },
    created() {

    }
  }
</script>
<style lang="less">

</style>
