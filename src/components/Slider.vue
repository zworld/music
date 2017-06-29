<template>
  <transition name="slide">
    <div class="slider" @click="show = !show" v-if="show">
      <div class="slider-content" @click.stop>
        <div class="user-info">
          <template>
            <div class="avatar"></div>
            <div class="info">
              <span class="name">zhongxinzhi</span>
              <span class="level">lv.7</span>
              <a class="sign">签到</a>
            </div>
          </template>
        </div>
        <ul>
          <li v-for="item in sliderList">
            <a href="javascript:void(0)" class="slider-item">
              <div class="left">
                <i :class="['fa',item.icon]"></i> <span>{{ item.title }}</span>
              </div>
              <div class="right" v-if="item.right">{{ item.right }}</div>
            </a>
          </li>
        </ul>
        <div class="tools">
          <ul>
            <li><a href="javascript:void(0)">夜间模式</a></li>
            <li><a href="javascript:void(0)">设置</a></li>
            <li><a href="javascript:void(0)">退出</a></li>
          </ul>
        </div>
      </div>
    </div>
  </transition>
</template>
<style lang="less" scoped>
  @import "../assets/css/variables";
  @import "../assets/css/mixins";
  .slider{
    position: fixed;
    z-index: 100;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    background: transparent;
  }
  .slider-content{
    background: #ffffff;
    overflow: auto;
    width: 350px;
    height: 100%;
    position: relative;
    .user-info{
      height: 300px;
      background: fade(#000,80%);
      color: #ffffff;
      padding: 130px 10px 0;
      .avatar{
        height: 100px;
        width: 100px;
        margin-bottom: 10px;
        border-radius: 50%;
        border: 1px solid #ffffff;
      }
      .info{
        .clearfix()
      }
      .level,.sign{
        border: 1px solid #fff;
        padding: 0 10px;
        font-size: 12px;
        border-radius: 8px;
      }
      .sign{
        float: right;
        line-height: 18px;
      }
    }
    .slider-item{
      display: flex;
      padding: 0 10px;
      border-bottom: 1px solid fade(#ccc,50%);
      justify-content: space-between;
      .left,.right{
        height: 40px;
        line-height: 40px;
      }
      .right{
        font-size: 12px;
      }
    }
  }
  .tools{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    ul{
      display: flex;
      li{
        flex: 1;
        a{
          display: block;
          height: 40px;
          text-align: center;
          line-height: 40px;
        }
      }
    }
  }
  //进入退出动画
  .slide-enter-active, .slide-leave-to{
    transform: translateX(-100%);
    transition: all .5s;
  }
  .slide-enter-to, .slide-leave {
    transform: translateX(0);
  }
</style>
<script>
  import bus from '@/eventBus'
  export default {
    data() {
      return {
        show: false,
        sliderList: [
          {
            icon: 'fa-paper-plane-o',
            title: '我的信息',
            right: '网易云音乐'
          },
          {
            icon: 'fa-paper-plane-o',
            title: '我的信息',
            right: '网易云音乐'
          },
          {
            icon: 'fa-paper-plane-o',
            title: '我的信息',
            right: '网易云音乐'
          },
          {
            icon: 'fa-paper-plane-o',
            title: '我的信息',
            right: '网易云音乐'
          },
          {
            icon: 'fa-paper-plane-o',
            title: '我的信息',
            right: '网易云音乐'
          },
          {
            icon: 'fa-paper-plane-o',
            title: '我的信息',
            right: '网易云音乐'
          },
          {
            icon: 'fa-paper-plane-o',
            title: '我的信息',
            right: '网易云音乐'
          }
        ]
      }
    },
    methods: {},
    created() {
      var vm = this
      bus.$on('slider-show', function(){
        vm.show = true
      })
    },
    mounted() {
    }
  }
</script>
