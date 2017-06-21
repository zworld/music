<template>
  <div class="module-container">
    <div class="index-nav">
      <ul>
        <li :class="{ on: current == 'recommend  '}">
          <a href="javascript:void(0)">个性推荐</a>
        </li>
        <li>
          <a href="javascript:void(0)">歌单</a>
        </li>
        <li>
          <a href="javascript:void(0)">主播电台</a>
        </li>
        <li>
          <a href="javascript:void(0)">排行榜</a>
        </li>
      </ul>
    </div>
    <div class="index-main">
      <router-view></router-view>
    </div>
  </div>
</template>
<style lang="less" scoped>
  @import '../assets/css/variables';
  @import '../assets/css/mixins';
  .index-nav{
   ul{
     display: flex;
   }
   li{
     float: none;
     position: relative;
     flex: 1;
     &.on:after{
       content: '';
       position: absolute;
       height: 2px;
       width: 100%;
       bottom: 0;
       background: @bg-color;
     }
     &>a{
       display: block;
       width: 100%;
       height: 35px;
       line-height: 35px;
       text-align: center;
     }
   }
 }
  .index-main{
    .flex-column-fill();
    overflow: auto;
  }

</style>
<script>
  export default {
    data() {
      return {
        current: 'recommend'
      }
    },
    methods: {},
    created() {
    },
    mounted() {}
  }
</script>
