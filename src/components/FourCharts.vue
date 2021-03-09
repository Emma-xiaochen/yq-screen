<template>
  <div class="fourcharts">
    <div class="item">
        <div class="content">
          <!-- 现有确诊 -->
          <now-confirm :dataList="{date, nowConfirm}" />
        </div>
      </div>
      <div class="item">
        <div class="content">
          <!-- 全国疫情累计趋势 -->
          <accumulate-data />
        </div>
      </div>
      <div class="item">
        <div class="content">
          <!-- 全国疫情新增趋势 -->
          <add-up-data />
        </div>
      </div>
      <div class="item">
        <div class="content">
          <!-- 治愈率/死亡率 -->
          <cure-rate-data />
        </div>  
      </div> 
  </div>
</template>

<script>
import NowConfirm from './FourCharts/NowConfirm.vue'
import AccumulateData from './FourCharts/AccumulateData.vue'
import AddUpData from './FourCharts/AddUpData.vue'
import CureRateData from './FourCharts/CureRateData.vue'
import {getChartData} from '@/api/api.js'
export default {
  components: { NowConfirm, AccumulateData, AddUpData, CureRateData },
  data () {
    return {
      date: [], // 日期 date
      nowConfirm: [], // 现有确诊 confirm - heal - dead
    }
  },
  created () {
    // 请求数据 - 图表数据
    getChartData().then(data => {
      const { chinaDayList } = data.data;

      chinaDayList.forEach(item => {
        this.date.push(item.date); // 日期
        this.nowConfirm.push(item.confirm - item.dead - item.heal); // 当日现有确诊
      })
    })
  },
  mounted () {

  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
  .fourcharts
    flex 1
    display flex
    justify-content space-between
    .item 
      flex 1
      display flex
      padding 10px
      .content
        flex 1 
</style>