var data = {"person_name": "\u80e1\u777f\u5b9d", "nicknames": "\u80e1\u777f\u5b9d", "aspects": {"\u7403\u5458": 0.38518993622395303, "\u9ec4\u724c": 0.5280300662712838, "\u6bd4\u8d5b": 0.4149811186631794, "\u4e3b\u573a": 0.904026067700057, "\u4f20\u4e2d": 0.5019664554571023, "\u505c\u8d5b": 0.5271360905938914, "\u5931\u7403": 0.0, "\u5934\u7403": 1.0}, "overall_heat": 32.0, "overall_polar": -0.132, "name": "27", "nationality": "nan", "position": "\u540e\u536b", "goal": "0", "assist": "0", "team_name": "\u5e7f\u5dde\u6052\u5927\u6dd8\u5b9d", "name_en": "Ruibao Hu", "age": "0", "height": "0", "weight": "0"};
        var set0 = document.getElementsByName("person_name");
        for (var i=0;i<set0.length;i++)
            set0[i].innerHTML=data.person_name;
        
        var set0 = document.getElementsByName("team_name");
        for (var i=0;i<set0.length;i++)
            set0[i].innerHTML=data.team_name;
        
        var set0 = document.getElementsByName("position");
        for (var i=0;i<set0.length;i++)
            set0[i].innerHTML=data.position;
        
        var set0 = document.getElementsByName("goal");
        for (var i=0;i<set0.length;i++)
            set0[i].innerHTML=data.goal;
        
        var set0 = document.getElementsByName("assist");
        for (var i=0;i<set0.length;i++)
            set0[i].innerHTML=data.assist;
        
        var set0 = document.getElementsByName("nicknames");
        for (var i=0;i<set0.length;i++)
            set0[i].innerHTML=data.nicknames;
        
        var set0 = document.getElementsByName("overall_polar");
        for (var i=0;i<set0.length;i++)
            set0[i].innerHTML=data.overall_polar;
        
        var set0 = document.getElementsByName("overall_heat");
        for (var i=0;i<set0.length;i++)
            set0[i].innerHTML=data.overall_heat;
        var c=document.getElementById("aspects");
var ctx=c.getContext("2d");
var i;
var x0 = 100,y0 = 20;
var gap = 30;
var h_m = 20;
var w_m = 200;
var v_m = 1.0;

//画总框
ctx.fillStyle="#999999";
i = 0;
for (var aspect in data.aspects){
	ctx.fillRect(x0,y0+gap*i,w_m,h_m);
	i++;
}
//显示文字
ctx.fillStyle="#000000";
ctx.font="16px SimHei";
i = 0;
for (var aspect in data.aspects){
	ctx.fillText(aspect+"："+Math.round(data.aspects[aspect]*100),10,y0+4+gap*i+h_m/2);
	i++;
}
//显示数值条
var w0; 
i = 0;
ctx.fillStyle="#FF0000";
for (var aspect in data.aspects){
	w0 = Math.round((data.aspects[aspect]/v_m)*w_m);
	ctx.fillRect(x0,y0+gap*i,w0,h_m);
	i++;
}var tmp;
var summary0;
var div_left0, div_right0;
var option;
var chart;
var keywords0;
for (var topicid in topic_summary){
	//表格部分
	div_right0 = document.getElementById('right'+topicid);
	summary0 = topic_summary[topicid];
	//txt = '<table border="1" style="transform:translateY(50%); float:left;">'
	txt = '<table border="1" style="float:left;">'
	txt += "<tr><td>序号</td><td>点赞数</td><td>内容</td></tr>\n"
	for (var cid in summary0){
		tmp = summary0[cid];
		txt += "<tr><td>"+(cid)+"</td><td>"+tmp["up"]+"</td><td>"+tmp["content"]+"</td></tr>\n";
	}
    txt += "</table>\n"
	div_right0.innerHTML = txt;
	//词云部分
	div_right0 = document.getElementById('left'+topicid);
	chart = echarts.init(div_right0);
	keywords0 = topic_keywords[topicid];
	option = {
		title : {
			text: '主题'+topicid,
			textStyle: {
				color: '#000'
			}
		},
		tooltip: {},
		series: [ {
			type: 'wordCloud',
			gridSize: 2,
			sizeRange: [12, 50],
			rotationRange: [-90, 90],
			shape: 'pentagon',
			width: 200,
			height: 200,
			drawOutOfBound: true,
			textStyle: {
				normal: {
					color: function () {
						return 'rgb(' + [
							Math.round(Math.random() * 160),
							Math.round(Math.random() * 160),
							Math.round(Math.random() * 160)
						].join(',') + ')';
					}
				},
				emphasis: {
					shadowBlur: 10,
					shadowColor: '#333'
				}
			},
			data: keywords0
		} ]
	};

	chart.setOption(option);
}
var topic_keywords = {"0": [{"name": "#", "value": 0.20089816404702152}, {"name": "\u4eba\u540d", "value": 0.05428609166556598}, {"name": "\u672f\u8bed", "value": 0.03315281997094175}, {"name": "*", "value": 0.02654867256637168}, {"name": "\u7684", "value": 0.021265354642715627}, {"name": "\u4ed6", "value": 0.01334037775723154}, {"name": "\u662f", "value": 0.012019548276317526}, {"name": "\u7403\u961f", "value": 0.010698718795403513}, {"name": "\uff1f", "value": 0.010698718795403513}, {"name": "\u8fd8\u662f", "value": 0.008057059833575485}, {"name": "\u4e0a", "value": 0.008057059833575485}, {"name": "\u80fd", "value": 0.008057059833575485}, {"name": "\u7403", "value": 0.008057059833575485}, {"name": "\u4e5f", "value": 0.008057059833575485}, {"name": "\u6251", "value": 0.008057059833575485}, {"name": "\u4e0d", "value": 0.008057059833575485}, {"name": "\u4e86", "value": 0.008057059833575485}, {"name": "\u4f4d\u7f6e", "value": 0.008057059833575485}, {"name": "\u641e", "value": 0.0067362303526614705}, {"name": "\u8fd8", "value": 0.0067362303526614705}, {"name": "\u5230", "value": 0.0067362303526614705}, {"name": "\u8bf4", "value": 0.005415400871747457}, {"name": "\u53ef\u4ee5", "value": 0.005415400871747457}, {"name": "\u53e4", "value": 0.005415400871747457}, {"name": "\u4eba", "value": 0.005415400871747457}, {"name": "\u6559\u7ec3", "value": 0.005415400871747457}, {"name": "\u78e8\u7ec3", "value": 0.005415400871747457}, {"name": "\u4e24\u4e2a", "value": 0.005415400871747457}, {"name": "\u5fb7\u5229", "value": 0.005415400871747457}, {"name": "\u88ab", "value": 0.005415400871747457}], "1": [{"name": "#", "value": 0.210993958061841}, {"name": "\u4eba\u540d", "value": 0.07712356355882004}, {"name": "\u672f\u8bed", "value": 0.023812344508944438}, {"name": "\u7684", "value": 0.01907356948228883}, {"name": "\u4e86", "value": 0.017888875725624927}, {"name": "\u7403\u961f", "value": 0.01670418196896102}, {"name": "\u8fd8", "value": 0.014334794455633218}, {"name": "*", "value": 0.014334794455633218}, {"name": "\u66fc\u57ce", "value": 0.014334794455633218}, {"name": "##", "value": 0.013150100698969316}, {"name": "\u4e0d", "value": 0.011965406942305414}, {"name": "\u8e22", "value": 0.011965406942305414}, {"name": "\u90fd", "value": 0.00959601942897761}, {"name": "\uff1f", "value": 0.008411325672313705}, {"name": "\u8fd9\u4e48", "value": 0.008411325672313705}, {"name": "\u4f60", "value": 0.007226631915649804}, {"name": "\u56de", "value": 0.007226631915649804}, {"name": "\u786e\u5b9e", "value": 0.007226631915649804}, {"name": "\u53bb", "value": 0.007226631915649804}, {"name": "\u5427", "value": 0.007226631915649804}, {"name": "\u4e2d\u7532", "value": 0.007226631915649804}, {"name": "\u4e0a", "value": 0.006041938158985902}, {"name": "\u4f30\u8ba1", "value": 0.006041938158985902}, {"name": "\u591a", "value": 0.006041938158985902}, {"name": "\u5c31", "value": 0.004857244402322}, {"name": "\u773c\u5149", "value": 0.004857244402322}, {"name": "\u4ed6", "value": 0.004857244402322}, {"name": "\u4ee5\u4e3a", "value": 0.004857244402322}, {"name": "\u7528", "value": 0.004857244402322}, {"name": "\u8ffd\u6c42", "value": 0.004857244402322}]};
var topic_summary = {"0": [{"content": "\u53e4\u5fb7\u5229\u6ca1\u5f97\u9ed1\uff0c\u4f20\u4e2d\u5f88\u4e0d\u9519\u3002\u80e1\u777f\u5b9d\u8d76\u7d27\u6eda\u56de\u66fc\u57ce\uff0c\u5e9f\u7269", "up": 7}, {"content": "\u53e4\u5fb7\u5229\u6ca1\u5f97\u9ed1\uff0c\u4f20\u4e2d\u5f88\u4e0d\u9519\u3002\u80e1\u777f\u5b9d\u8d76\u7d27\u6eda\u56de\u66fc\u57ce\uff0c\u5e9f\u7269", "up": 7}, {"content": "\u80e1\u777f\u5b9d\u8ba9\u4eba\u5fd8\u4e86\u738b\u4e0a\u6e90\uff0c\u8fd8\u6709\u4e0a\u5218\u6bbf\u5ea7\u8fd8\u4e0d\u5982\u4e0a\u4e2a\u72d7", "up": 3}, {"content": "\u641e\u4e0d\u660e\u767d\u4e3a\u4ec0\u4e48\u6559\u7ec3\u7528\u5361\u7eb3\u74e6\u7f57\uff0c\u800c\u4e14\u4ed6\u7ecf\u7eaa\u4eba\u8fd8\u662f\u91d1\u7545\u3002\u80e1\u777f\u5b9d\u4e0a\u573a\u53c8\u662f\u4ec0\u4e48\u9b3c\uff1f\u597d\u597d\u7684\u6052\u5927\u3002\u88ab\u641e\u5f97\u8ddf\u4ec0\u4e48\u4e00\u6837", "up": 3}, {"content": "\u5e72\u561b\u4e0a\u80e1\u777f\u5b9d\uff1f\u4e0b\u534a\u573a\u4ed6\u9632\u5b88\u7684\u533a\u57df\u88ab\u4eba\u6253\u8fdb\u4e24\u4e2a\u7403\uff0c\u8fd8\u62ff\u4e00\u5f20\u9ec4\u724c", "up": 3}], "1": [{"content": "\u8c03\u4f83\u4e00\u53e5 \u65e9\u77e5\u9053\u6f0f\u7535\u5ea7\u8fd9\u4e48\u6c34 \u8fd8\u4e0d\u5982\u4e0a\u5218\u4e16\u535a \u8fd9\u6837\u5c11\u4e00\u4e2au23 \u5c31\u4e0d\u7528\u4e0a\u80e1\u777f\u5b9d\u4e86", "up": 528}, {"content": "\u8c03\u4f83\u4e00\u53e5 \u65e9\u77e5\u9053\u6f0f\u7535\u5ea7\u8fd9\u4e48\u6c34 \u8fd8\u4e0d\u5982\u4e0a\u5218\u4e16\u535a \u8fd9\u6837\u5c11\u4e00\u4e2au23 \u5c31\u4e0d\u7528\u4e0a\u80e1\u777f\u5b9d\u4e86", "up": 528}, {"content": "\u80e1\u777f\u5b9d\u8d85\u7ea7\u8054\u8d5b\u8e22\u4e0d\u597d\u3002\u53ea\u80fd\u53bb\u5fb7\u56fd\u8e22\u7532\u7ea7\u8054\u8d5b\u4e86", "up": 7}, {"content": "\u4e0d\u903c\u903c \u80e1\u777f\u5b9d\u8fd9****\u4e2d\u7532\u90fd\u6ca1\u4eba\u8981[\u7ea2\u724c]", "up": 7}, {"content": "\u4e0d\u903c\u903c \u80e1\u777f\u5b9d\u8fd9****\u4e2d\u7532\u90fd\u6ca1\u4eba\u8981[\u7ea2\u724c]", "up": 7}]};
var tmp;
var summary0;
var div_left0, div_right0;
var option;
var chart;
var keywords0;
for (var topicid in topic_summary){
	//表格部分
	div_right0 = document.getElementById('right'+topicid);
	summary0 = topic_summary[topicid];
	//txt = '<table border="1" style="transform:translateY(50%); float:left;">'
	txt = '<table border="1" style="float:left;">'
	txt += "<tr><td>序号</td><td>点赞数</td><td>内容</td></tr>\n"
	for (var cid in summary0){
		tmp = summary0[cid];
		txt += "<tr><td>"+(cid)+"</td><td>"+tmp["up"]+"</td><td>"+tmp["content"]+"</td></tr>\n";
	}
    txt += "</table>\n"
	div_right0.innerHTML = txt;
	//词云部分
	div_right0 = document.getElementById('left'+topicid);
	chart = echarts.init(div_right0);
	keywords0 = topic_keywords[topicid];
	option = {
		title : {
			text: '主题'+topicid,
			textStyle: {
				color: '#000'
			}
		},
		tooltip: {},
		series: [ {
			type: 'wordCloud',
			gridSize: 2,
			sizeRange: [12, 50],
			rotationRange: [-90, 90],
			shape: 'pentagon',
			width: 200,
			height: 200,
			drawOutOfBound: true,
			textStyle: {
				normal: {
					color: function () {
						return 'rgb(' + [
							Math.round(Math.random() * 160),
							Math.round(Math.random() * 160),
							Math.round(Math.random() * 160)
						].join(',') + ')';
					}
				},
				emphasis: {
					shadowBlur: 10,
					shadowColor: '#333'
				}
			},
			data: keywords0
		} ]
	};

	chart.setOption(option);
}
