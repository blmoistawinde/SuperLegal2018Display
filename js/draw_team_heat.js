myChart = echarts.init(document.getElementById('team_heat'));
data = [{"name": "\u5e7f\u5dde\u6052\u5927\u6dd8\u5b9d", "value": 38262.0}, {"name": "\u4e0a\u6d77\u4e0a\u6e2f", "value": 26341.0}, {"name": "\u5c71\u4e1c\u9c81\u80fd\u6cf0\u5c71", "value": 22155.0}, {"name": "\u5317\u4eac\u4e2d\u8d6b\u56fd\u5b89", "value": 21353.0}, {"name": "\u5927\u8fde\u4e00\u65b9", "value": 21120.0}, {"name": "\u5e7f\u5dde\u5bcc\u529b", "value": 13573.0}, {"name": "\u6c5f\u82cf\u82cf\u5b81", "value": 12871.0}, {"name": "\u91cd\u5e86\u65af\u5a01", "value": 12056.0}, {"name": "\u8d35\u5dde\u6052\u4e30", "value": 10964.0}, {"name": "\u5929\u6d25\u6743\u5065", "value": 10247.0}, {"name": "\u957f\u6625\u4e9a\u6cf0", "value": 10170.0}, {"name": "\u4e0a\u6d77\u7533\u82b1", "value": 10043.0}, {"name": "\u6cb3\u5357\u5efa\u4e1a", "value": 9046.0}, {"name": "\u5929\u6d25\u4ebf\u5229", "value": 8492.0}, {"name": "\u5317\u4eac\u4eba\u548c", "value": 8288.0}, {"name": "\u6cb3\u5317\u534e\u590f\u5e78\u798f", "value": 8235.0}]

for (var n in data) {
    data[n]['name'] = data[n]['name'] + '\n' + data[n]['value']
}

option = {
    // backgroundColor: "#000",
    title: {
        text: '各球队关注量分布',
        left: '50%',
        top: '30',
        textAlign: 'center',
        textStyle: {
            color: "#000",
            fontWeight: 'normal',
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{b}"
    },
    series: [{
        type: 'treemap',
        width: '100%',
        height: '85%',
        top: '15%',
        roam: false, //是否开启拖拽漫游（移动和缩放）
        nodeClick: false, //点击节点后的行为,false无反应
        breadcrumb: {
            show: false
        },
        label: { //描述了每个矩形中，文本标签的样式。
            normal: {
                show: true,
            }
        },
        itemStyle: {
            normal: {
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize: 16,
                },
                borderWidth: 1,
                borderColor: '#fff',
            },

            emphasis: {
                label: {
                    show: true
                }
            }
        },
        data: data
    }]
};
myChart.setOption(option);