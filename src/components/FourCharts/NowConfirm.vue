<template>
  <div ref="now-confirm" class="chart"></div>
</template>

<script>
  export default {
    // 第四步：接收父组件传过来的数据
    props: ['dataList'],
    data () {
      return {
        // 图表实例对象
        chartInstance: null
      }
    },
    watch: {
      // 第五步：监听数据，更新图表
      dataList (newValue, oldValue) {
        if (newValue) {
          this.chartInstance.setOption({
            xAxis: {
              data: newValue.date
            },
            series: [
              {
                data: newValue.nowConfirm
              }
            ]
          })
        }
      }
    },
    mounted () {
      // 初始化图表
      this.initChart();
      // 图表自适应
      window.addEventListener('resize', this.chartInstance.resize);
    },
    methods: {
      initChart () {
        // 初始化图表实例
        this.chartInstance = this.$echarts.init(this.$refs['now-confirm']);
        // 图表配置参数
        const option = {
          title: {
            text: '全国现有确诊趋势',
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
            // x轴的数据
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
              name: '现有确诊',
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
              // 数据内容
              data: []
            },
          ]
        };
        // 创建图表
        this.chartInstance.setOption(option);
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .chart
    width 100%
    height 100%
</style>