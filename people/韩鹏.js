var data = {"person_name": "\u97e9\u9e4f", "nicknames": "\u97e9\u9e4f", "aspects": {"\u8fdb\u7403": 0.40305590997424734, "\u7403\u8ff7": 0.6379466157261586, "\u5916\u63f4": 0.5755731492845002, "\u51fa\u573a": 0.20250946273614254, "\u6bd4\u8d5b": 0.617693630914424, "\u7403\u5458": 0.6506686674651044, "\u8d5b\u5b63": 0.8211787539615818, "\u4f20\u7403": 0.0, "\u8fb9\u8def": 0.6511186837773478, "\u91d1\u9774": 0.0}, "overall_heat": 59.0, "overall_polar": 0.141, "name": "406", "nationality": "\u4e2d\u56fd", "position": "\u524d\u950b", "goal": "0", "assist": "0", "team_name": "\u5317\u4eac\u4eba\u548c", "name_en": "Han Peng", "age": "35", "height": "185", "weight": "77"};
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
var topic_keywords = {"0": [{"name": "\u97e9\u9e4f", "value": 0.06660516605166052}, {"name": "\u9c81\u80fd", "value": 0.029704797047970483}, {"name": "\u7403\u8ff7", "value": 0.01863468634686347}, {"name": "\uff01", "value": 0.01863468634686347}, {"name": "\uff1f", "value": 0.014944649446494464}, {"name": "\u5c71\u4e1c", "value": 0.01125461254612546}, {"name": "\u6bd4\u8d5b", "value": 0.01125461254612546}, {"name": "\u4e00\u4e2a", "value": 0.009409594095940959}, {"name": "\u5f53\u5e74", "value": 0.009409594095940959}, {"name": "\u5e0c\u671b", "value": 0.007564575645756457}, {"name": "\u6b22\u8fce", "value": 0.007564575645756457}, {"name": "\u8fdb\u7403", "value": 0.007564575645756457}, {"name": "\u56de\u5bb6", "value": 0.005719557195571956}, {"name": "\u5916\u63f4", "value": 0.005719557195571956}, {"name": "\u8bb0\u5f97", "value": 0.005719557195571956}, {"name": "\u4eba\u548c", "value": 0.005719557195571956}, {"name": "\u597d", "value": 0.005719557195571956}, {"name": "\u8e22", "value": 0.005719557195571956}, {"name": "\u9ec4\u535a\u6587", "value": 0.005719557195571956}, {"name": "\u673a\u4f1a", "value": 0.005719557195571956}, {"name": "\u56de\u6765", "value": 0.005719557195571956}, {"name": "\u5e93\u5361", "value": 0.005719557195571956}, {"name": "\u65e0\u6548", "value": 0.005719557195571956}, {"name": "\u8d5b\u540e", "value": 0.005719557195571956}, {"name": "\u534a\u5e74", "value": 0.005719557195571956}, {"name": "\u5d14\u9e4f", "value": 0.005719557195571956}, {"name": "\u5168\u573a", "value": 0.005719557195571956}, {"name": "\u8fd9\u573a", "value": 0.005719557195571956}, {"name": "\u88c1\u5224", "value": 0.005719557195571956}, {"name": "\u73b0\u5728", "value": 0.005719557195571956}], "1": [{"name": "\u97e9\u9e4f", "value": 0.052523364485981314}, {"name": "\u53f7", "value": 0.03383177570093458}, {"name": "\u5e74", "value": 0.01514018691588785}, {"name": "\u8fdb\u7403", "value": 0.01514018691588785}, {"name": "\u5389\u5bb3", "value": 0.011401869158878504}, {"name": "\u90d1\u667a", "value": 0.011401869158878504}, {"name": "\u5d14\u9e4f", "value": 0.009532710280373832}, {"name": "\u6052\u5927", "value": 0.009532710280373832}, {"name": "\u674e\u91d1\u7fbd", "value": 0.009532710280373832}, {"name": "\u8212\u7545", "value": 0.007663551401869158}, {"name": "\u90a3\u5e74", "value": 0.007663551401869158}, {"name": "\u9c81\u80fd", "value": 0.007663551401869158}, {"name": "\u65f6\u95f4", "value": 0.005794392523364486}, {"name": "\u5c81", "value": 0.005794392523364486}, {"name": "\u4f53\u9762", "value": 0.005794392523364486}, {"name": "\u4eba", "value": 0.005794392523364486}, {"name": "\u5927\u7fbd", "value": 0.005794392523364486}, {"name": "\u4e3b\u529b", "value": 0.005794392523364486}, {"name": "\u674e\u96f7\u96f7", "value": 0.005794392523364486}, {"name": "\u4e0a\u573a", "value": 0.005794392523364486}, {"name": "\u73b0\u5728", "value": 0.005794392523364486}, {"name": "\u4e00\u4e2a", "value": 0.005794392523364486}, {"name": "\u738b\u8d85", "value": 0.005794392523364486}, {"name": "\u5f52\u6765", "value": 0.005794392523364486}, {"name": "\u5468\u6d77\u6ee8", "value": 0.005794392523364486}, {"name": "18", "value": 0.005794392523364486}, {"name": "\u5df4\u8f9b", "value": 0.005794392523364486}, {"name": "T\u6064", "value": 0.003925233644859813}, {"name": "\u6700\u597d", "value": 0.003925233644859813}, {"name": "\u65e5\u592b", "value": 0.003925233644859813}]};
var topic_summary = {"0": [{"content": "\u4e0d\u7ba1\u600e\u4e48\u8bb2\uff0c\u4eca\u5929\u4eba\u548c\u4e3b\u6559\u7ec3\u80fd\u628a\u97e9\u9e4f\u6362\u4e0a\u53bb\u771f\u7684\u6512\uff01\u6709\u65f6\u5019\u5f88\u591a\u4e1c\u897f\u786e\u5b9e\u6bd4\u6bd4\u8d5b\u7ed3\u679c\u66f4\u91cd\u8981\uff01", "up": 413}, {"content": "\u73b0\u5df2\u4e3a\u5ba2\u961f\u4eba\u548c\u961f\u5458\u7684\u97e9\u9e4f\u8d5b\u540e\u7ed5\u9c81\u80fd\u4e3b\u573a\u4e00\u5468\uff0c\u5168\u573a\u9c81\u80fd\u7403\u8ff7\u9ad8\u547c\u4ed6\u7684\u540d\u5b57\uff0c\u6b22\u8fce\u4ed6\u56de\u5bb6\uff01\u8bb8\u591a\u7403\u8ff7\u6d41\u4e0b\u4e86\u70ed\u6cea\uff0c\u8fd9\u5c31\u662f\u91cd\u60c5\u91cd\u4e49\u7684\u5c71\u4e1c\u7403\u8ff7\uff01\uff08\u6b64\u60c5\u6b64\u666f\u8ba9\u6211\u60f3\u8d77\u6765\u5f53\u5e74\u9ec4\u535a\u6587\u968f\u5e7f\u5dde\u6052\u5927\u91cd\u8fd4\u5317\u4eac\u5de5\u4f53\u7684\u60c5\u5f62\uff0c\u8d5b\u540e\u9ec4\u535a\u6587\u4e5f\u60f3\u7ed5\u573a\u4e00\u5468\uff0c\u7ed3\u679c\u5de5\u4f53\u7403\u8ff7\u8ba9\u4ed6\u6d41\u4e0b\u4e86\u4f24\u5fc3\u7684\u6cea\u6c34\u2026\u2026\uff09\u3002", "up": 312}, {"content": "\u8bb0\u5f97\u4e0a\u6b21\u9c81\u80fd\u6709\u673a\u4f1a\u51b2\u51fb\u51a0\u519b\u65f6\u5e93\u5361\u505c\u8d5b\u534a\u5e74\uff0c\u97e9\u9e4f\u8fdb\u7403\u4e5f\u88ab\u5439\u4e86\u51fa\u6765\u3002", "up": 257}, {"content": "\u8bf4\u5b9e\u8bdd\uff0c\u8eab\u4e3a\u4e00\u4e2a\u9c81\u80fd\u7403\u8ff7\uff0c\u6211\u611f\u89c9\u5e73\u5c40\u5b8c\u5168\u53ef\u4ee5\u63a5\u53d7\uff0c\u9c81\u80fd\u8fd9\u573a\u8e22\u5f97\u592a\u5dee\u4e86\uff0c\u6838\u5fc3\u548c\u8fb9\u8def\u8ba9\u4eba\u5bb6\u9632\u7684\u6b7b\u6b7b\u7684\uff0c\u518d\u5c31\u662f\u4e3a\u4eba\u548c\u7684\u6559\u7ec3****\uff0c\u6700\u540e\u65f6\u523b\u7684\u6362\u4eba\uff0c\u65e2\u8ba9\u97e9\u9e4f\u5927\u54e5\u6709\u4e86\u63a5\u53d7\u9c81\u80fd\u7403\u8ff7\u6b22\u8fce\u7684\u673a\u4f1a\uff0c\u53c8\u628a\u90a3\u4e2a\u627e\u4e8b\u7cbe\u8fea\u5965\u53e4\u6362\u4e86\u4e0b\u53bb\uff0c\u907f\u514d\u8d5b\u540e\u7684\u51b2\u7a81", "up": 124}, {"content": "\u5e0c\u671b\u97e9\u9e4f\u5728\u9c81\u80fd\u9000\u5f79\u7684\u4e3e\u624b", "up": 37}], "1": [{"content": "\u73b0\u5728\u6ee1\u8111\u5b50\u91cc\u8fd8\u90fd\u662f1\u53f7\u674e\u96f7\u96f7\uff0c3\u53f7\u738b\u8d855\u53f7\u8212\u75459\u53f7\u5df4\u8f9b25\u53f7\u77eb\u5586\uff0c8\u53f7\u65e5\u79d1\u592b\u7ef4\u594710\u53f7\u90d1\u667a18\u53f7\u5468\u6d77\u6ee820\u53f7\u5d14\u9e4f\uff0c6\u53f7\u97e9\u9e4f29\u53f7\u674e\u91d1\u7fbd\u7684\u5f71\u5b50\u300212\u5e74\u8fc7\u53bb\u4e86\uff0c\u4e0d\u7ba1\u5468\u6d77\u6ee8\u548c\u5d14\u9e4f\u53d1\u751f\u8fc7\u4ec0\u4e48\uff0c\u73b0\u5728\u8fd8\u5728\u575a\u6301\uff0c\u4f5c\u4e3a\u7403\u8ff7\u53ea\u4f1a\u7ed9\u4ed6\u4eec\u66f4\u591a\u7684\u638c\u58f0\u3002\u4f60\u4eec\u6c38\u8fdc\u90fd\u662f\u9c81\u80fd\u7684\u5b69\u5b50\u3002[\u5389\u5bb3][\u5389\u5bb3][\u5389\u5bb3][\u5389\u5bb3][\u5389\u5bb3][\u5389\u5bb3]", "up": 1086}, {"content": "\u81f4\u656c\u8fc7\u53bb\u4e8c\u5341\u5e74\u56fd\u8db3\u6700\u5f3a\u950b\u9738\u97e9\u9e4f\u3002", "up": 221}, {"content": "\u5c82\u66f0\u65e0\u8863\uff0c\u4e0e\u5b50\u540c\u888d \u5f539\u53f7\u97e9\u9e4f\u66ff\u8865\u4e0a\u573a \u5f5331\u53f7\u7403\u8863\u91cd\u65b0\u62ab\u6302 \u5f53\u82f1\u5927\u4fe1\u6258\u66ff\u6362\u4e86\u4f60\u7528\u7535\u6211\u7528\u5fc3 \u4e00\u5207\u7684\u601d\u7eea\u4eff\u4f5b\u56de\u5230\u4e86\u4ece\u524d \u4ece02\u5e74\u523015\u5e74 \u4ece31\u53f7\u52306\u53f7\uff0c\u518d\u52309\u53f7\uff0c\u6700\u540e\u6362\u621018\u53f7 \u4ece\u5c0f\u5c06\u97e9\u9e4f\uff0c\u5230\u8001\u5c06\u97e9\u9e4f \u4ece\u7c4d\u7c4d\u65e0\u540d\uff0c\u5230\u97e9\u5927\u5c06\u519b \u6a59\u8863\u76f8\u4f34\uff0c\u6709\u592a\u591a\u7684\u820d\u4e0d\u5f97 06\u5e74\u7684\u63d0\u524d6\u8f6e\u593a\u51a0\u7684\u5236\u80dc\u4e00\u51fb 5\u5206\u949f\u7684\u5e3d\u5b50\u620f\u6cd5 \u4e2d\u8d85\u8fdb\u7403\u8bb0\u5f55 \u97e9\u9e4f\uff0c\u674e\u91d1\u7fbd\uff0c\u90d1\u667a\uff0c\u5386\u53f2\u7ea7\u7684\u56fd\u5185\u4e09\u53c9\u621f \u90a3\u662f\u6211\u6700\u5feb\u4e50\u7684\u7ae5\u5e74 \u56de\u5fc6\u603b\u662f\u7f8e\u597d\uff0c\u73b0\u5b9e\u5374\u662f\u6b8b\u9177 \u54ea\u6709\u4ec0\u4e48\u6c38\u6052\uff0c\u592a\u591a\u4eba\u53ea\u662f\u5306\u5306\u8fc7\u5ba2 15\u5e74\uff0c\u8fdc\u8d74\u4ed6\u4e61\uff0c\u6362\u4e86\u53e6\u5916\u4e00\u8eab\u6a59\u8272 \u4f53\u9762\u7684\u5206\u624b\uff0c\u4f53\u9762\u7684\u79bb\u5f00 \u5982\u4eca\uff0c\u4f53\u9762\u7684\u518d\u89c1 9\u54e5\uff0c9\u8fdd\u4e86 \u613f\u4f60\u51fa\u8d70\u534a\u751f\uff0c\u5f52\u6765\u4ecd\u662f\u5c11\u5e74", "up": 122}, {"content": "\u5d14\u9e4f\u4e0a\u573a\u7684\u65f6\u5019\u6709\u79cd\u56de\u5230\u51e0\u5e74\u524d\u7684\u611f\u89c9\uff0c\u90d1\u667a\uff0c\u97e9\u9e4f\uff0c\u674e\u91d1\u7fbd\uff0c\u738b\u8d85\uff0c\u674e\u96f7\u96f7\uff0c\u4e39\u4e18\uff0c\u5df4\u8f9b\uff0c\u674e\u96f7\u96f7\uff0c\u8212\u7545\uff0c\u5a07\u54f2\uff0c\u65f6\u95f4\u8fc7\u5f97\u592a\u5feb\u4e86", "up": 10}, {"content": "\u97e9\u9e4f\u4e0a\u573a\u3002\u3002\u3002\u77ac\u95f4\u6cea\u76ee\u3002\uff0c\u3002\u3002\u6216\u8bb8\uff0c\u8fd9\u662f\u6700\u597d\u7684\u7ed3\u675f\u5427\u3002", "up": 6}]};
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
