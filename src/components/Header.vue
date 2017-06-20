<template>
  <header>
    <div class="btn">
      <i class="fa fa-bars"></i>
    </div>
    <div class="main">
      <ul>
        <li>
          <a href="javascript:void(0)" class="fa fa-music music"></a>
        </li>
        <li>
          <a href="javascript:void(0)" class="fa fa-university"></a>
        </li>
        <li>
          <a href="javascript:void(0)" class="fa fa-user-circle user"></a>
        </li>
      </ul>
    </div>
    <div class="btn">
      <i class="fa fa-search"></i>
    </div>
  </header>
</template>

<style lang="less">
  @import "../assets/css/variables";
  @import "../assets/css/mixins";
  header{
    height: 70px;
    background: @bg-color;
    display: flex;
    .btn{
      .flex-center();
      width: 100px;
      text-align: center;
    }
    .main{
      flex: 1;
      .flex-center();
    }
    li{
      float: left;
    }
    li a{
      width: 100px;
      .flex-center();
    }
  }
</style>
<script>
  export default {
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
