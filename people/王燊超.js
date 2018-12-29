var data = {"person_name": "\u738b\u71ca\u8d85", "nicknames": "\u738b\u71ca\u8d85", "aspects": {"\u56fd\u5bb6\u961f": 0.35714714944406767, "\u505c\u7403": 0.38978358412665026, "\u7403\u5458": 0.364088176577266, "\u6bd4\u8d5b": 0.39667988110828656, "\u9632\u5b88": 0.5413882191881156, "\u4ff1\u4e50\u90e8": 0.9450689132548425, "\u7981\u533a": 0.5419530463277629, "\u4f20\u4e2d": 0.35107616557425025, "\u505c\u8d5b": 0.0, "\u8fb9\u8def": 0.5059383684747472}, "overall_heat": 53.0, "overall_polar": -0.035, "name": "49", "nationality": "\u4e2d\u56fd", "position": "\u540e\u536b", "goal": "2", "assist": "2", "team_name": "\u4e0a\u6d77\u4e0a\u6e2f", "name_en": "Wang Shenchao", "age": "29", "height": "180", "weight": "72"};
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
var topic_keywords = {"0": [{"name": "\uff01", "value": 0.04323076923076923}, {"name": "\u738b\u71ca\u8d85", "value": 0.034}, {"name": "\u4e0a\u6e2f", "value": 0.023230769230769232}, {"name": "\u88c1\u5224", "value": 0.020153846153846154}, {"name": "\u90dc\u6797", "value": 0.015538461538461537}, {"name": "\u56fd\u5bb6\u961f", "value": 0.015538461538461537}, {"name": "\u7981\u533a", "value": 0.015538461538461537}, {"name": "\u6b66\u78ca", "value": 0.015538461538461537}, {"name": "\u70b9\u7403", "value": 0.014}, {"name": "\u5206\u949f", "value": 0.014}, {"name": "\u5224", "value": 0.014}, {"name": "\u4e00\u4e2a", "value": 0.012461538461538461}, {"name": "\u5e94\u8be5", "value": 0.012461538461538461}, {"name": "\u80e1\u5c14\u514b", "value": 0.010923076923076923}, {"name": "\uff1f", "value": 0.010923076923076923}, {"name": "\u725b", "value": 0.009384615384615384}, {"name": "\u5224\u7f5a", "value": 0.009384615384615384}, {"name": "\u674e\u5b66\u9e4f", "value": 0.009384615384615384}, {"name": "\u8e22\u5012", "value": 0.009384615384615384}, {"name": "\u7403\u5458", "value": 0.009384615384615384}, {"name": "\uff1b", "value": 0.009384615384615384}, {"name": "\u8868\u73b0", "value": 0.007846153846153846}, {"name": "\u903c", "value": 0.007846153846153846}, {"name": "\u4ff1\u4e50\u90e8", "value": 0.007846153846153846}, {"name": "\u505c\u7403", "value": 0.007846153846153846}, {"name": "\u95ee\u9898", "value": 0.007846153846153846}, {"name": "\u5965\u65af\u5361", "value": 0.0063076923076923076}, {"name": "\u7403", "value": 0.0063076923076923076}, {"name": "\u63a8\u649e", "value": 0.0047692307692307695}, {"name": "\u56fd\u5185", "value": 0.0047692307692307695}], "1": [{"name": "\u738b\u71ca\u8d85", "value": 0.04871016691957512}, {"name": "\uff01", "value": 0.015326251896813354}, {"name": "\u4e0a\u6e2f", "value": 0.010773899848254932}, {"name": "\u4e0a\u6d77", "value": 0.009256449165402124}, {"name": "\u4eba", "value": 0.009256449165402124}, {"name": "\u597d", "value": 0.007738998482549317}, {"name": "\u8868\u73b0", "value": 0.0062215477996965095}, {"name": "\u5965\u65af\u5361", "value": 0.0062215477996965095}, {"name": "\u540a\u95e8", "value": 0.0062215477996965095}, {"name": "\u90a3\u7403", "value": 0.0062215477996965095}, {"name": "\u505c\u8d5b", "value": 0.0062215477996965095}, {"name": "\u505c\u7403", "value": 0.0062215477996965095}, {"name": "\u5f20\u6210\u6797", "value": 0.0062215477996965095}, {"name": "\u6052\u5927", "value": 0.0062215477996965095}, {"name": "\u8521\u6167\u5eb7", "value": 0.0062215477996965095}, {"name": "\u60f3", "value": 0.0062215477996965095}, {"name": "\u505c", "value": 0.0062215477996965095}, {"name": "\u6bd4\u8d5b", "value": 0.0062215477996965095}, {"name": "\u6253", "value": 0.0062215477996965095}, {"name": "\uff1f", "value": 0.0062215477996965095}, {"name": "\u7403", "value": 0.0062215477996965095}, {"name": "\u540c\u610f", "value": 0.004704097116843703}, {"name": "\u4e24\u6b21", "value": 0.004704097116843703}, {"name": "\u77f3\u67ef", "value": 0.004704097116843703}, {"name": "\u5403", "value": 0.004704097116843703}, {"name": "\u7403\u5458", "value": 0.004704097116843703}, {"name": "\u8fd9\u79cd", "value": 0.004704097116843703}, {"name": "\u771f", "value": 0.004704097116843703}, {"name": "\u54ed", "value": 0.004704097116843703}, {"name": "\u52a8\u4f5c", "value": 0.004704097116843703}]};
var topic_summary = {"0": [{"content": "\u8fd9\u573a\u88c1\u5224\u6536\u94b1\u4e86\uff0cVAR\u88c1\u5224\u4e5f\u6536\u94b1\u4e86.1\u738b\u71ca\u8d85\u7981\u533a\u88ab\u7eca\u5012\u662f\u70b9\u7403VAR\u63d0\u9192\u90fd\u4e0d\u63d0\u9192\uff0c2\u8d3a\u60ef\u843d\u4e0b\u6765\u8e29\u5230\u6cb3\u5357\u7403\u5458\u4e86\uff0cVAR\u7acb\u9a6c\u63d0\u9192\u53ef\u80fd\u662f\u7ea2\u724c\u30023\u80e1\u5c14\u514b\u7981\u533a\u90a3\u4e2a\uff0c\u5b88\u95e8\u5458\u51fa\u6765\u6839\u672c\u6ca1\u78b0\u5230\u7403\u76f4\u63a5\u649e\u5012\u80e1\u5c14\u514b\u30024\u674e\u5723\u9f99\u90a3\u4e2a\u88ab\u4fb5\u72af\u4e0d\u5439\uff0c\u7ed9\u4e8e\u6d77\u4e00\u5f20\u9ec4\u724c\u30025\u80e1\u5c14\u514b\u8fc7\u4eba\u540e\u88ab\u52fe\u5012\u4e0d\u5439\u3002678910\u771f\u662f\u778e", "up": 90}, {"content": "\u6cf0\u8fbe\u4eca\u5e74\u7684\u6218\u672f\u6253\u6cd5\u4e0d\u9519\uff0c\u8e22\u7684\u4e5f\u633a\u597d\uff0c\u65bd\u8482\u5229\u514b\u548c\u4fdd\u7f57\u7d22\u8428\u4e92\u6362\u4e0d\u77e5\u9053\u4f1a\u600e\u6837\uff0c\u6700\u540e\u6211\u60f3\u8bf4\u4e00\u53e5\uff1a\u738b\u71ca\u8d85\u7684\u8f6c\u8eab\u6bd4\u590f\u5947\u62c9\u90fd\u6162\uff01\uff01\uff01", "up": 13}, {"content": "\u738b\u71ca\u8d85\u60f3\uff1a\u53cd\u6b63\u505c\u7403\u4e5f\u662f10\u7c73\u8fdc\uff0c\u6211\u8fd8\u662f\u6f0f\u7403\u56de\u8ffd\u5427\u2026\u7ed3\u679c\uff0c\u7ed9\u4e86\u6cf0\u8fbe\u4e00\u4e2a\u5355\u5200[\u6ed1\u7a3d][\u6ed1\u7a3d]", "up": 12}, {"content": "\u5176\u5b9e\uff0c\u4e0a\u6e2f\u8ddf\u6052\u5927\u8fd9\u573a\u6bd4\u8d5b\u6211\u610f\u5916\u7684\u53d1\u73b0\uff0c\u4e0a\u6e2f\u8fd9\u8fb9\u6b66\u78ca\u5355\u5200\u4e0d\u811a\u8f6f\u4e86\uff0c\u738b\u71ca\u8d85\u518d\u4e5f\u4e0d\u505c\u7403\u4e94\u7c73\u8fdc\u4e86\uff0c\u8fd8\u80fd\u5e26\u7403\u8fc7\u4eba\uff0c\u6052\u5927\u8fd9\u8fb9\u51af\u8427\u9706\u5f20\u7433\u8283\u4e0d\u6563\u6b65\u4e86\uff0c\u6211\u5f88\u5947\u602a\u4e3a\u5565\u4ff1\u4e50\u90e8\u7684\u4ed6\u4eec\u8ddf\u56fd\u5bb6\u961f\u7684\u4ed6\u4eec\u6709\u8fd9\u4e48\u5927\u7684\u533a\u522b\u3002\u3002\u3002\u8fd8\u6709\u4e00\u70b9\uff0c\u674e\u5b66\u9e4f\u548c\u4e8e\u6c49\u8d85\u5728\u4ff1\u4e50\u90e8\u8ddf\u56fd\u5bb6\u961f\u7684\u8868\u73b0\u662f\u4e00\u81f4\u7684\uff0c\u4e8e\u6c49\u8d85\u771f\u62fc\uff0c\u674e\u5b66\u9e4f\u4e5f\u62fc\uff0c\u4e0d\u8fc7\u4f20\u7403\u8ddf\u5728\u56fd\u5bb6\u961f\u4e00\u6837\u968f\u610f\uff0c\u7ecf\u5e38\u4e0d\u77e5\u9053\u81ea\u5df1\u4f20\u4e2d\u662f\u4e3a\u4e86\u4ec0\u4e48\uff0c\u8fd8\u5f97\u4fdd\u5229\u5c3c\u5965\u6307\u6325\u4ed6\u5f80\u54ea\u91cc\u4f20\uff0c\u4e5f\u96be\u602a\u674e\u5b66\u9e4f\u5728\u56fd\u5bb6\u961f\u4e00\u5411\u5f88\u62fc\uff0c\u4f46\u6548\u679c\u4e0d\u597d[\u6342\u8138]\uff0c\u81f3\u4e8e\u90dc\u6797\u561b\uff0c\u4f5c\u4e3a\u4e00\u4e2a\u4e16\u9884\u8d5b\u4e9a\u6d32\u676f\u90fd\u8e22\u8fc7\u7684\u4eba\u4e0d\u4e86\u89e3\u4e16\u754c\u7ea7\u88c1\u5224\u7684\u813e\u6c14\u548c\u79c9\u6027\u5417\uff1f\u56fd\u9645\u7ea7\u88c1\u5224\u6700\u8ba8\u538c\u4e00\u4e2a\u7403\u5458\u5728\u4ed6\u8033\u6735\u65c1\u8fb9\u4e00\u76f4\u8bb2\u4e2a\u6ca1\u5b8c\uff0c\u6709\u64cd\u5b88\u7684\u80fd\u5fcd\u4f60\uff0c\u6ca1\u64cd\u5b88\u7684\u627e\u4e2a\u673a\u4f1a\u5c31\u60e9\u7f5a\u4f60\uff0c\u96be\u9053\u4e00\u76f4\u90fd\u4e0d\u61c2\uff1f", "up": 8}, {"content": "\u4e3a\u4ec0\u4e48\u5927\u5bb6\u90fd\u5728\u8bf4\u738b\u71ca\u8d85\u5462\uff1f\u867d\u7136\u88ab\u56fd\u5b89\u6253\u7206\u4e86\u4e24\u6b21\uff0c\u4f46\u662f\u4e0d\u5e94\u8be5\u5426\u5b9a\u4ed6\u7684\u5b9e\u529b\uff01\u4ed6\u5e94\u8be5\u76f8\u4fe1\uff0c\u81ea\u5df1\u7684\u5b9e\u529b\u7edd\u5bf9\u662f\u5370\u8d85\u6c34\u5e73\uff0c\u4e0d\u662f\u5370\u5c3c\u8d85\uff0c\u662f\u5370\u5ea6\u8d85\uff01", "up": 4}], "1": [{"content": "\u738b\u71ca\u8d85\uff1a\u5e38\u89c4\u64cd\u4f5c\u90fd\u5750\u4e0b\uff0c\u672c\u60f3\u505c\u4e2a\u7403\uff0c\u8c01\u6210\u60f3\u5bf9\u7740\u95e8\uff0c\u4e00\u505c\u5c31\u8fdb\u4e86\u2026\u2026\u5413\u6211\u4e00\u8df3", "up": 540}, {"content": "\u738b\u71ca\u8d85\u53ef\u4ee5\u548c\u56fd\u5bb6\u961f\u8bf4\u518d\u89c1\u4e86\u2026\u2026", "up": 49}, {"content": "\u7ecf\u8fc7\u5927\u8d5b\u7684\u6d17\u793c\uff0c\u738b\u71ca\u8d85\u6210\u719f\u4e86\uff0c\u5728\u573a\u4e0a\u6562\u4e8e\u62ff\u7403\uff0c\u6562\u4e8e\u505a\u52a8\u4f5c\uff0c\u53d8\u5f97\u8d8a\u6765\u8d8a\u81ea\u4fe1\u4e86\u3002\u5355\u72ec\u9762\u5bf9\u95e8\u5c06\u7684\u8fd9\u4e48\u597d\u7684\u673a\u4f1a\u8fd8\u6562\u53bb\u505c\u7403\uff0c\u5e76\u4e14\u505c\u7403\u6253\u95e8\u52a8\u4f5c\u4e00\u6c14\u5475\u6210\uff0c\u5341\u5206\u8fde\u8d2f\uff0c\u8fd9\u662f\u5bf9\u81ea\u5df1\u6280\u672f\u975e\u5e38\u6709\u4fe1\u5fc3\u7684\u8868\u73b0\u3002\u5728\u8fd9\u91cc\uff0c\u606d\u559c\u738b\u71ca\u8d85\u53d6\u5f97\u4e00\u7c92\u5b9d\u8d35\u7684\u8fdb\u7403\uff01", "up": 19}, {"content": "\u738b\u71ca\u8d85\uff1a\u770b\u5230\u987e\u8d85\u7684\u8868\u73b0\u6211\u611f\u89c9\u8ddf\u82cf\u5b81\u8e22\u6211\u80fd\u628a\u7403\u505c\u8fdb\u53bb......", "up": 11}, {"content": "\u4e0b\u4e00\u573a\u6700\u5173\u952e\u4e86\uff0c\u6d69\u514b\u505c\u8d5b\uff0c\u8d3a\u60ef\u505c\u8d5b\uff08\u8fd8\u597d\u738b\u71ca\u8d85\u53ef\u4ee5\u6253\u4e2d\u536b\uff0c\u5085\u6b22\u6253\u738b\u71ca\u8d85\u7684\u8fb9\u8def\uff0c\u4f46\u6bd5\u7adf\u77f3\u67ef\u8d3a\u60ef\u957f\u671f\u78e8\u5408\u3002\u6838\u5fc3\u5965\u65af\u5361\u540e\u9762\u7684\u6240\u6709\u6bd4\u8d5b\u90fd\u5fc5\u987b\u5168\u52e4\uff08\u4f46\u662f\u6bd5\u7adf3\u9ec4\u4e86\uff0c\u4e14\u5965\u65af\u5361\u53c2\u4e0e\u9632\u5b88\u4e0d\u53ef\u5c11\uff0c\u5f88\u96be\u4fdd\u8bc1\uff09\uff0c\u603b\u4e4b\u540e\u9762\u8fd8\u662f\u56f0\u96be\u91cd\u91cd", "up": 11}]};
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
