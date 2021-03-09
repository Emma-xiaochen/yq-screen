import axios from 'axios'

// 腾讯疫情数据接口
const txUrl = `https://view.inews.qq.com`
const txUrl2 = `https://api.inews.qq.com/newsqa/v1`
    // 中国各省份/直辖市疫情数据接口
const disease_china = `${txUrl}/g2/getOnsInfo?name=disease_h5&callback=jQuery35103183469027416095_1605083705601&_=${+new Date()}` // FIXME: 加Date防止请求到缓存数据
    // 当天各类数据统计接口(现有确诊、累计确诊/治愈/死亡、新增确诊/疑似、治愈/死亡率)
const charts = `${txUrl2}/query/inner/publish/modules/list?modules=chinaDayList,chinaDayAddList,cityStatis,nowConfirmStatis,provinceCompare`
    // 最新进展新闻接口
const news = `${txUrl2}/automation/modules/list?modules=FAutoNewsArticleList`

export function getChartData() {
    return axios.get(charts).then(data => {
        return data.data;
    });
}