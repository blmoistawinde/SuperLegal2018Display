myChart = echarts.init(document.getElementById('people_heat'));
//为了从大到小显示，数据要按照升序排序
people_names = ['刘殿座', '穆谢奎', '曾诚', '金敬道', '于汉超', '奥斯卡', '黄紫昌', '阿兰', '郑智', '佩莱', '高拉特', '郑龙', '韦世豪', '王大雷', '法比奥·卡纳瓦罗', '保利尼奥', '卡拉斯科', '郜林', '塔利斯卡', '武磊'];
p_counts = [463, 464, 466, 475, 480, 544, 567, 576, 610, 679, 702, 733, 862, 901, 1105, 1164, 1175, 1535, 1796, 4001];
option = {
    title: {
        text: '最热议20大人物'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['热度']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: people_names
    },
    series: [
        {
            name: '热度',
            type: 'bar',
            data: p_counts
        }
    ]
};
myChart.setOption(option);