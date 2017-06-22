<template>
  <div class="module-container">
    <m-panel :panel="official">
      <template slot="content">
        <div class="row-wrapper-4 offical-list-wrapper">
          <div class="offical-list">
            <div class="img-wrapper">
              <img :src="official.soaring && official.soaring.coverImgUrl" alt="">
            </div>
            <div class="songs-wrapper">
              <template v-if="official.soaring && official.soaring.tracks">
                <p v-for="(item,index) in official.soaring.tracks.slice(0,3)"><span>{{ index + 1 }}. {{ item.name }}</span></p>
              </template>
            </div>
          </div>
        </div>

        <div class="row-wrapper-4 offical-list-wrapper">
          <div class="offical-list">
            <div class="img-wrapper">
              <img :src="official.newSongs && official.newSongs.coverImgUrl" alt="">
            </div>
            <div class="songs-wrapper">
              <template v-if="official.newSongs && official.newSongs.tracks">
                <p v-for="(item,index) in official.newSongs.tracks.slice(0,3)"><span>{{ index + 1 }}. {{ item.name }}</span></p>
              </template>
            </div>
          </div>
        </div>

        <div class="row-wrapper-4 offical-list-wrapper">
          <div class="offical-list">
            <div class="img-wrapper">
              <img :src="official.original && official.original.coverImgUrl" alt="">
            </div>
            <div class="songs-wrapper">
              <template v-if="official.original && official.original.tracks">
                <p v-for="(item,index) in official.original.tracks.slice(0,3)"><span>{{ index + 1 }}. {{ item.name }}</span></p>
              </template>
            </div>
          </div>
        </div>

        <div class="row-wrapper-4 offical-list-wrapper">
          <div class="offical-list">
            <div class="img-wrapper">
              <img :src="official.hotSongs && official.hotSongs.coverImgUrl" alt="">
            </div>
            <div class="songs-wrapper">
              <template v-if="official.hotSongs && official.hotSongs.tracks">
                <p v-for="(item,index) in official.hotSongs.tracks.slice(0,3)"><span>{{ index + 1 }}. {{ item.name }}</span></p>
              </template>
            </div>
          </div>
        </div>

      </template>

    </m-panel>
  </div>
</template>
<style lang="less" scoped>
  @import '../../assets/css/mixins';

  .offical-list {
    .allScreen();
    display: flex;
    flex-flow: row nowrap;
    .img-wrapper {
      flex: 1;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .songs-wrapper {
      flex: 3;
      display: flex;
      flex-direction: column;
      min-width: 0;
      &>p{
        flex: 1;
        display: flex;
        padding: 0 20px;
        align-items: center;
        span{
          display: inline-block;
          width: 100%;
          .text-ellipsis()
        }
      }
    }
  }
  .offical-list-wrapper{
    margin-bottom: 5px
  }
</style>
<script>
  import MPanel from 'components/Panel'
  import {$http} from 'methods/http'
  export default {
    components: {MPanel},
    data() {
      return {
        official: {
          title: '官方榜'
        }
      }
    },
    methods: {},
    created() {
      var vm = this
      // 飙升榜
      $http({
        url: '/api/top/list',
        data: {
          idx: '3'
        },
        success: function(data) {
          if (data.code === 200){
            vm.$set(vm.official, 'soaring', data.result)
          }
        }
      })
      // 新歌榜
      $http({
        url: '/api/top/list',
        data: {
          idx: '0'
        },
        success: function(data) {
          if (data.code === 200){
            vm.$set(vm.official, 'newSongs', data.result)
          }
        }
      })
      // 原创榜
      $http({
        url: '/api/top/list',
        data: {
          idx: '2'
        },
        success: function(data) {
          if (data.code === 200){
            vm.$set(vm.official, 'original', data.result)
          }
        }
      })
      // 热歌榜
      $http({
        url: '/api/top/list',
        data: {
          idx: '1'
        },
        success: function(data) {
          if (data.code === 200){
            vm.$set(vm.official, 'hotSongs', data.result)
          }
        }
      })
    },
    mounted() {
    }
  }
</script>
