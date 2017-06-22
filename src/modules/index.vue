<template>
  <div class="module-container">
    <div class="index-nav">
      <ul>
        <li v-for="(item,index) in navList" :ref="'navItem-'+ index ">
          <router-link :to="{ name: item.name }">{{ item.des }}</router-link>
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

  .index-nav {
    ul {
      display: flex;
    }
    li {
      float: none;
      position: relative;
      flex: 1;
      overflow: hidden;

      &.on:after {
        content: '';
        position: absolute;
        height: 2px;
        width: 100%;
        bottom: 0;
        background: @bg-color;
      }

      &.left-leave:after {
        content: '';
        position: absolute;
        height: 2px;
        width: 100%;
        bottom: 0;
        background: @bg-color;
        animation: left-leave .2s;
        animation-fill-mode: forwards;
      }
      &.left-enter:after {
        content: '';
        position: absolute;
        height: 2px;
        width: 100%;
        bottom: 0;
        background: @bg-color;
        animation: left-enter .4s;
        animation-fill-mode: forwards;
      }
      &.right-leave:after {
        content: '';
        position: absolute;
        height: 2px;
        width: 100%;
        bottom: 0;
        background: @bg-color;
        animation: right-leave .2s;
        animation-fill-mode: forwards;
      }
      &.right-enter:after {
        content: '';
        position: absolute;
        height: 2px;
        width: 100%;
        bottom: 0;
        background: @bg-color;
        animation: right-enter .4s;
        animation-fill-mode: forwards;
      }
      & > a {
        display: block;
        width: 100%;
        height: 35px;
        line-height: 35px;
        text-align: center;
      }
    }
  }

  @keyframes left-enter {
    from {
      transform: translateX(-100%)
    }
    to {
      transform: translateX(0)
    }
  }

  @keyframes right-enter {
    from {
      transform: translateX(100%)
    }
    to {
      transform: translateX(0)
    }
  }

  @keyframes left-leave {
    from {
      transform: translateX(0)
    }
    to {
      transform: translateX(-100%)
    }
  }

  @keyframes right-leave {
    from {
      transform: translateX(0)
    }
    to {
      transform: translateX(100%)
    }
  }

  .index-main {
    .flex-column-fill();
    overflow: auto;
  }

</style>
<script>
  export default {
    data() {
      return {
        current: 'recommend',
        navList: [
          {
            name: 'indexRecommend',
            des: '个性推荐'
          },
          {
            name: 'indexList',
            des: '歌单'
          },
          {
            name: 'indexDj',
            des: '主播电台'
          },
          {
            name: 'indexRank',
            des: '排行榜'
          }
        ]
      }
    },
    methods: {},
    created() {

    },
    mounted() {
      // 初始化时设置子导航下标
      var enterModule = 'navItem-' + this.$route.meta.index
      this.$refs[enterModule][0].className = 'on'
    },
    watch: {
      '$route'(to, from) {
        // 设置子导航下标动画
        var toIndex = to.meta.index
        var fromIndex = from.meta.index
        if (toIndex - fromIndex > 0) {
          this.$refs['navItem-' + toIndex][0].className = 'left-enter'
          this.$refs['navItem-' + fromIndex][0].className = 'right-leave'
        } else {
          this.$refs['navItem-' + toIndex][0].className = 'right-enter'
          this.$refs['navItem-' + fromIndex][0].className = 'left-leave'
        }
      }
    }
  }
</script>
