<template>
  <div id="app">
    <div class="header">
      <div class="title">疫情数据可视化</div>
      <div class="nowtime">2021-03-07 15:55:35</div>
    </div>
    <div class="main">
      <div class="news">
        <div class="content">
          最新进展
        </div>
      </div>
      <div class="map">
        <div class="content">
          全国疫情
        </div>
      </div>
      <div class="rank">
        <div class="content">
          疫情排行榜
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="item">
        <div class="content">
          全国现有确诊趋势
        </div>
      </div>
      <div class="item">
        <div class="content">
          全国疫情累计趋势
        </div>
      </div>
      <div class="item">
        <div class="content">
          全国疫情新增趋势
        </div>
      </div>
      <div class="item">
        <div class="content">
          治愈率/死亡率
        </div>  
      </div>  
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="stylus">
*
  background rgba(0,0,0,.1)
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50
  .header
    height 60px
    background rgb(66,151,241)
    color #fff
    text-align center
    position relative
    .title, .nowtime
      display inline-block
      line-height 60px
    .title
      font-size 28px
      font-weight bold
      letter-spacing 10px
    .nowtime
      font-size 18px
      font-weight bold
      position absolute
      right 10px
  .main
      height calc(100vh - 60px - 30vh)
      display flex
      justify-content space-between
      .news, .map, .rank 
        flex 1
        display flex
        padding 10px
        .content
          flex 1
  .footer
    height 30vh
    display flex
    justify-content space-between
    .item 
      flex 1
      display flex
      padding 10px
      .content
        flex 1 
</style>
