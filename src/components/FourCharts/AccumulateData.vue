<template>
  <div ref="accumulateData" class="accumulateData"></div>
</template>

<script>
  export default {
    props: ['dataList'],
    data () {
      return {
        // 图表实例对象
        chartInstance: null,
      }
    },
    watch: {

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
            data: [47367,23023,46757,38445,96600]
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
              data: [59918,85167,56877,56100,21355]
            },
            {
              name: '累计治愈',
              type: 'line',
              color: '#00FF00',
              data: [63861,28315,98475,60759,9501]
            },
            {
              name: '累计死亡',
              type: 'line',
              color: '#808080',
              data: [34201,50718,27047,65286,9537]
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