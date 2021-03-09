<template>
  <div ref="cureRateData" class="cureRateData"></div>
</template>

<script>
  export default {
    props: ['dataList'],
    data() {
      return {
        // 图表实例对象
        chartInstance: null
      }
    },
    mounted() {
      // 初始化图表实例
      this.initChart();
      // 图表自适应
      window.addEventListener('resize', this.chartInstance.resize)
    },
    methods: {
      initChart() {
        // 初始化图表实例
        this.chartInstance = this.$echarts.init(this.$refs.cureRateData)
        // 图表配置参数
        const option = {
          title: {
            text: '治愈率/死亡率',
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
            data: [87174,40878,67003,10245,64873]
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
              name: '治愈率',
              type: 'line',
              color: '#00FF00',
              markPoint: {
                data: [
                  {
                    type: 'max', name: '最大值',
                    itemStyle: {
                      color: '#00FF00'
                    }
                  }
                ]
              },
              data: [88266,19714,97984,88672,5117]
              },
            {
              name: '死亡率',
              type: 'line',
              color: '#808080',
              markPoint: {
                data: [
                  {
                    type: 'max', name: '最大值',
                    itemStyle: {
                      color: '#808080'
                    }
                  }
                ]
              },
              data: [45910,52563,59340,56479,71220]
            }
          ]
        }
        this.chartInstance.setOption(option)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .cureRateData
    width 100%
    height 100%
</style>