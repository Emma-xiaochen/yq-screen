<template>
  <div ref="cureRateData" class="cureRateData"></div>
</template>

<script>
  export default {
    // 第四步：接收父组件传过来的数据
    props: ['dataList'],
    data() {
      return {
        // 图表实例对象
        chartInstance: null
      }
    },
    watch: {
      // 第五步：监听数据，更新图表
      dataList(newValue, oldValue) {
        this.chartInstance.setOption({
          xAxis: {
            data: newValue.date
          },
          series: [
            {
              name: '新增确诊',
              type: 'line',
              data: newValue.healRate
            },
            {
              name: '新增疑似',
              type: 'line',
              data: newValue.deadRate
            }
          ]
        })
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
              data: []
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
  .cureRateData
    width 100%
    height 100%
</style>