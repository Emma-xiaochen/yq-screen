<template>
  <div class="fourcharts">
    <div class="item">
        <div class="content">
          <!-- 现有确诊 -->
          <!-- 第三步：将疫情数据传给子组件 -->
          <now-confirm :dataList="{date, nowConfirm}" />
        </div>
      </div>
      <div class="item">
        <div class="content">
          <!-- 全国疫情累计趋势 -->
          <accumulate-data :dataList="{date, addUpConfirm, addUpHeal, addUpDead}"/>
        </div>
      </div>
      <div class="item">
        <div class="content">
          <!-- 全国疫情新增趋势 -->
          <add-up-data :dataList="{newAddDate, newAddConfirm, newAddSuspect}" />
        </div>
      </div>
      <div class="item">
        <div class="content">
          <!-- 治愈率/死亡率 -->
          <cure-rate-data :dataList="{date, healRate, deadRate}" />
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
  components: { 
    NowConfirm, 
    AccumulateData, 
    AddUpData, 
    CureRateData 
  },
  data () {
    return {
      // 第一步：初始化疫情数据变量，用来存储疫情数据
      date: [],          // 日期 date
      nowConfirm: [],    // 现有确诊 confirm - heal - dead
      addUpConfirm: [],  // 累积确诊 confirm
      addUpHeal: [],     // 累计治愈 Heal
      addUpDead: [],     // 累计死亡 Dead
      healRate: [],      // 治愈率   HealRate
      deadRate: [],      // 死亡率   DeadRate
      newAddDate: [],    // 日期(新增确诊/疑似)
      newAddConfirm: [], // 新增确诊 chinaDayAddList-confirm
      newAddSuspect: [], // 新增疑似 chinaDayAddList-suspect
    }
  },
  mounted () {
    // FIXME： 向后台服务器请求数据，并整理数据
    getChartData().then(data => {
      // 第二步：给疫情数据变量赋值
      const { chinaDayList, chinaDayAddList } = data.data

      chinaDayList.forEach(item => {
        this.date.push(item.date)
        this.nowConfirm.push(item.confirm - item.dead - item.heal); // 当日现有确诊
        this.addUpConfirm.push(item.confirm) // 当日累积确诊
        this.addUpHeal.push(item.heal) // 当日累积治愈
        this.addUpDead.push(item.dead) // 当日累积死亡
        this.healRate.push(item.healRate) // 当日治愈率
        this.deadRate.push(item.deadRate) // 当日死亡率
      }),
      chinaDayAddList.forEach(item => {
        this.newAddDate.push(item.date) // 日期(新增确诊/疑似)
        this.newAddConfirm.push(item.confirm) // 当日新增确诊
        this.newAddSuspect.push(item.suspect) // 当日新增疑似
      })
    })
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