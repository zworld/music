<template>
  <div class="banner-wrapper">
    <div class="swiper-container" ref="swipContainer">
      <div class="swiper-wrapper" ref="swipWrapper">
        <slot>
          <div v-for="item in scrolls" class="swiper-slide">
            <img :src="item.picUrl" alt="">
          </div>
        </slot>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
  import 'swiper/dist/css/swiper.css'
  import Swiper from 'swiper'
  export default {
    props: {
      scrolls: {
        type: Array,
        default: []
      }
    },
    data() {
      return {}
    },
    methods: {},
    mounted() {
      var vm = this
      var scroll = new Swiper('.swiper-container', {
        autoplay: 1000,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        observer: true,
        bserveParents: true
      })
    },
    computed: {}

  }
</script>

<style lang="less">
  @import '../assets/css/variables';
  @import '../assets/css/mixins';

  .banner-wrapper {
    .allScreen()
  }
  .swiper-container {
    width: 100%;
    height: 100%;
  }
  .swiper-slide img{
    width: 100%;
    height: 100%;
  }
</style>
