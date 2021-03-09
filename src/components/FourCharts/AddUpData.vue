<template>
  <div ref="addUpData" class="addUpData"></div>
</template>

<script>
  export default {
    props: ['dataList'],
    data() {
      return {
        // 图标实例对象
        chartInstance: null
      }
    },
    mounted () {
      // 初始化图标
      this.initChart();
      // 图表自适应
      window.addEventListener('resize', this.chartInstance.resize)
    },
    methods: {
      initChart() {
        // 初始化图表实例
        this.chartInstance = this.$echarts.init(this.$refs.addUpData);
        // 图表配置参数
        const option = {
          title: {
            text: '全国疫情新增趋势',
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
            data: [19192,81863,67067,54788,1740]
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
              name: '新增确诊',
              type: 'line',
              color: '#FF7F50',
              markPoint: {
                data: [
                  {
                    type: 'max', name: '最大值',
                    itemStyle: {
                      color: '#FF7F50'
                    }
                  }
                ]
              },
              data: [41921,9608,6435,3054,19600]
            },
            {
              name: '新增疑似',
              type: 'line',
              color: '#00FFFF',
              markPoint: {
                data: [
                  {
                    type: 'max', name: '最大值',
                    itemStyle: {
                      color: '#00FFFF'
                    }
                  }
                ]
              },
              data: [29183,13680,62829,14565,86027]
            }
          ]
        }
        this.chartInstance.setOption(option)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .addUpData
    width 100%
    height 100%
</style>