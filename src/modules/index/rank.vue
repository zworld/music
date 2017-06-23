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
                <p v-for="(item,index) in official.soaring.tracks.slice(0,3)"><span>{{ index + 1 }}. {{ item.name
                  }}</span></p>
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
                <p v-for="(item,index) in official.newSongs.tracks.slice(0,3)"><span>{{ index + 1 }}. {{ item.name
                  }}</span></p>
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
                <p v-for="(item,index) in official.original.tracks.slice(0,3)"><span>{{ index + 1 }}. {{ item.name
                  }}</span></p>
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
                <p v-for="(item,index) in official.hotSongs.tracks.slice(0,3)"><span>{{ index + 1 }}. {{ item.name
                  }}</span></p>
              </template>
            </div>
          </div>
        </div>

      </template>
    </m-panel>
    <m-panel :panel="word">
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
      img {
        width: 100%;
        height: 100%;
      }
    }
    .songs-wrapper {
      flex: 3;
      display: flex;
      flex-direction: column;
      min-width: 0;
      & > p {
        flex: 1;
        display: flex;
        padding: 0 20px;
        align-items: center;
        span {
          display: inline-block;
          width: 100%;
          .text-ellipsis()
        }
      }
    }
  }

  .offical-list-wrapper {
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
        },
        word: {
          title: '全球榜',
          showTo: 3,
          list: []
        }
      }
    },
    methods: {
      // 获取榜单数据
      handleListData(url, params, callback) {
        return $http({
          url: url,
          data: params
        }).then((data) => {
          return new Promise((resolve) => {
            callback && callback(data)
            resolve(data)
          })
        })
      },
      // 获取全球榜
      getWordData(url, idx) {
        var vm = this
        return vm.handleListData(url, {idx: idx})
      }
    },
    created() {
      var vm = this
      vm.apiUrl = '/api/top/list'
     // 飙升榜
      vm.handleListData(vm.apiUrl, {idx: 3}, function(data){
        vm.$set(vm.official, 'soaring', data.result)
      })
      // 新歌榜
      vm.handleListData('/api/top/list', {idx: 0}, function(data){
        vm.$set(vm.official, 'newSongs', data.result)
      })
      // 原创榜
      vm.handleListData('/api/top/list', {idx: 2}, function(data){
        vm.$set(vm.official, 'original', data.result)
      })
      // 热歌榜
      vm.handleListData('/api/top/list', {idx: 1}, function(data){
        vm.$set(vm.official, 'hotSongs', data.result)
      })

      // 处理全球榜 用Promise.all进行处理
      // 传参ID集合

      var wordListId = [5, 6, 19, 8, 4, 21, 10, 9, 11, 7, 20, 14, 15, 16, 18]
      var wordPromises = []
      for (let id of wordListId) {
        wordPromises.push(vm.getWordData(vm.apiUrl, id))
      }
      Promise.all(wordPromises).then(values => {
        values.forEach((rest) => {
          var data = rest.result
          vm.word.list.push({
            coverImg: data.coverImgUrl,
            title: data.name
          })
        })
      })
    },
    mounted() {
    }
  }
</script>
