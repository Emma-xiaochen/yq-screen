<template>
  <div ref="accumulateData" class="accumulateData"></div>
</template>

<script>
  export default {
    // 第四步：接收父组件传过来的数据
    props: ['dataList'],
    data () {
      return {
        // 图表实例对象
        chartInstance: null,
      }
    },
    watch: {
      dataList(newValue, oldValue) {
        this.chartInstance.setOption({
          xAxis: {
            data: newValue.date
          },
          series: [
            {
              name: '累积确诊',
              type: 'line',
              data: newValue.addUpConfirm
            },
            {
              name: '累积治愈',
              type: 'line',
              data: newValue.addUpHeal
            },
            {
              name: '累积死亡',
              type: 'line',
              data: newValue.addUpDead
            }
          ]
        })
      }
    },
    mounted () {
      // 初始化图表
      this.initChart();
      // 图表自适应
      window.addEventListener('resize', this.chartInstance.resize)
    },
    methods: {
      initChart () {
        // 初始化图表实例
        this.chartInstance = this.$echarts.init(this.$refs.accumulateData);
        // 图表配置参数
        const option = {
          title: {
            text: '全国疫情累计趋势',
            top: 10,
            left: 10
          },
          grid: {
            bottom: 10,
            left: 10,
            right: 10,
            containLabel: true
          },
          tooltip: {
            trigger: 'axis',
          },
          xAxis: {
            type: 'category',
            data: []
          },
          yAxis: {
            type: 'value'
          },
          legend: {
            show: true,
            top: 10,
            right: 10
          },
          series: [
            {
              name: '累计确诊',
              type: 'line',
              color: '#FF7F50',
              data: []
            },
            {
              name: '累计治愈',
              type: 'line',
              color: '#00FF00',
              data: []
            },
            {
              name: '累计死亡',
              type: 'line',
              color: '#808080',
              data: []
            }
          ]
        }
        this.chartInstance.setOption(option)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .accumulateData
    width 100%
    height 100%
</style>