<template>
  <div class="panel">
    <div class="panel-title" v-if="panel.title">
      <div class="title">{{ panel.title }}</div>
    </div>
    <div class="panel-content">
      <slot name="content">
        <template v-if="panel.showTo">
          <div class="row-wrapper">
            <div :class="'row-item-' + panel.showTo " v-for="item in panel.list">
              <div class="row-img-wrapper">
                <img class="blank" src="../assets/img/blank.png" alt="">
                <div class="row-img">
                  <img :src="item.coverImg" alt="">
                </div>
              </div>
              <div class="row-title">{{ item.title }}</div>
            </div>
          </div>
        </template>
      </slot>
    </div>
  </div>
</template>

<style lang="less" scoped>
  @import '../assets/css/variables';
  .panel-title {
    padding: 10px 0;
  }
  .panel-title .title {
    border-left: 2px solid @bg-color;
    font-size: 18px;
    padding-left: 5px
  }
</style>
<script>
  export default {
    props: ['panel'],
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
