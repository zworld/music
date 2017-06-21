<template>
  <div class="module-container">
    <div class="banner-container">
      <m-banner :scrolls="hotSingers"></m-banner>
    </div>
    <div class="others-container">
      <div class="others">
        <div class="item" v-for="item in others">
          <div>
            <div><i :class="['fa','fa-5x',item.icon]" aria-hidden="true"></i></div>
            <div class="other-title">{{ item.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import MBanner from 'components/Banner'
  import {$http} from 'methods/http.js'
  export default {
    components: {
      MBanner
    },
    data() {
      return {
        hotSingers: [],
        others: [
          {
            name: '私人FM',
            icon: 'fa-podcast'
          },
          {
            name: '开启个性化推荐',
            icon: 'fa-headphones'
          },
          {
            name: '云音乐热歌榜',
            icon: 'fa-line-chart'
          }
        ]
      }
    },
    methods: {},
    created() {
      var vm = this
      $http({
        url: '/api/top/artists',
        data: {
          offset: 0,
          limit: 5
        },
        success: function(data) {
          if (data.code === 200) {
            vm.hotSingers = data.artists
          }
        }
      })
    },
    mounted(){
    },
    computed: {}

  }
</script>

<style lang="less">
  @import "../../assets/css/mixins.less";

  .banner-container {
    width: 100%;
    padding-top: 50%;
    position: relative;
  }
  .others-container{
    position: relative;
    padding-top: 33.33%;
  }
  .others{
    .allScreen();
    display: flex;
  }
  .others .item{
    height: 100%;
    .flex-center;
    flex: 1;
    text-align: center;
  }
  .other-title{
    margin-top: 5px;
  }
</style>
