var data = {"person_name": "\u8463\u5b66\u5347", "nicknames": "\u8463\u5b66\u5347", "aspects": {"\u7403\u5458": 0.6060131000322074, "\u56fd\u5bb6\u961f": 0.40366851690656713, "\u8fdb\u7403": 0.7101624870719887, "\u5916\u63f4": 0.29672343476053925, "\u8d5b\u5b63": 0.801350117319452, "\u6bd4\u8d5b": 0.31258791867803, "\u7403\u8ff7": 0.3005582361368369, "\u9632\u5b88": 0.365636875824348, "\u4ff1\u4e50\u90e8": 1.0, "\u51fa\u573a": 0.0}, "overall_heat": 97.0, "overall_polar": 0.917, "name": "262", "nationality": "\u4e2d\u56fd", "position": "\u524d\u950b", "goal": "6", "assist": "1", "team_name": "\u6cb3\u5317\u534e\u590f\u5e78\u798f", "name_en": "Dong Xuesheng", "age": "29", "height": "186", "weight": "82"};
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
var topic_keywords = {"0": [{"name": "\u8463\u5b66\u5347", "value": 0.10438829787234043}, {"name": "\uff01", "value": 0.04454787234042554}, {"name": "\u8fdb", "value": 0.020168439716312058}, {"name": "\u90dc\u6797", "value": 0.017952127659574466}, {"name": "\u6052\u5927", "value": 0.015735815602836878}, {"name": "\u56fd\u5bb6\u961f", "value": 0.015735815602836878}, {"name": "\u8fdb\u7403", "value": 0.01351950354609929}, {"name": "\u7403\u5458", "value": 0.01351950354609929}, {"name": "\uff1f", "value": 0.011303191489361701}, {"name": "\u7403", "value": 0.011303191489361701}, {"name": "\u76ae", "value": 0.009086879432624113}, {"name": "\u91cc", "value": 0.009086879432624113}, {"name": "\u6b66\u78ca", "value": 0.009086879432624113}, {"name": "\u534e\u590f", "value": 0.009086879432624113}, {"name": "\u8db3\u7403", "value": 0.006870567375886525}, {"name": "\u5dee", "value": 0.006870567375886525}, {"name": "\u73b0\u5728", "value": 0.006870567375886525}, {"name": "\u6f02\u4eae", "value": 0.006870567375886525}, {"name": "\u5b9e\u529b", "value": 0.006870567375886525}, {"name": "\u6559\u7ec3", "value": 0.004654255319148937}, {"name": "\u6700", "value": 0.004654255319148937}, {"name": "\u5927\u817f", "value": 0.004654255319148937}, {"name": "\u652f\u6301", "value": 0.004654255319148937}, {"name": "\u4f4d\u7f6e", "value": 0.004654255319148937}, {"name": "\u6bd4\u8d5b", "value": 0.004654255319148937}, {"name": "\u6839\u672c", "value": 0.004654255319148937}, {"name": "\u6c34\u5e73", "value": 0.004654255319148937}, {"name": "\u6cb3\u5317", "value": 0.004654255319148937}, {"name": "\u53cd\u6b63", "value": 0.004654255319148937}, {"name": "\u5f00\u6302", "value": 0.004654255319148937}], "1": [{"name": "\u8463\u5b66\u5347", "value": 0.056783144912641324}, {"name": "\u4e2d\u950b", "value": 0.025950668036998973}, {"name": "\u534e\u590f", "value": 0.013103802672147995}, {"name": "U23", "value": 0.0105344295991778}, {"name": "\u4e00\u4e2a", "value": 0.0105344295991778}, {"name": "\u6768\u65ed", "value": 0.0105344295991778}, {"name": "\u91cc", "value": 0.0105344295991778}, {"name": "\u6253", "value": 0.0105344295991778}, {"name": "\u56fd\u5bb6\u961f", "value": 0.007965056526207605}, {"name": "\u65f6", "value": 0.007965056526207605}, {"name": "\u8e22", "value": 0.007965056526207605}, {"name": "\u5916\u63f4", "value": 0.007965056526207605}, {"name": "\uff1f", "value": 0.007965056526207605}, {"name": "\u4e2d\u56fd", "value": 0.007965056526207605}, {"name": "\u4e0d\u9519", "value": 0.007965056526207605}, {"name": "\u7ef4\u5947", "value": 0.00539568345323741}, {"name": "\u7a33\u5b9a", "value": 0.00539568345323741}, {"name": "\u771f\u662f", "value": 0.00539568345323741}, {"name": "\u76ae", "value": 0.00539568345323741}, {"name": "\u7403\u5458", "value": 0.00539568345323741}, {"name": "\u73b0\u5728", "value": 0.00539568345323741}, {"name": "\u70ed\u9e1f", "value": 0.00539568345323741}, {"name": "\u70b9", "value": 0.00539568345323741}, {"name": "\u540e\u536b", "value": 0.00539568345323741}, {"name": "\u5206\u949f", "value": 0.00539568345323741}, {"name": "\u4e70", "value": 0.00539568345323741}, {"name": "\uff01", "value": 0.00539568345323741}, {"name": "\u6548\u7387", "value": 0.00539568345323741}, {"name": "\u62c9", "value": 0.00539568345323741}, {"name": "\u4eba", "value": 0.00539568345323741}], "2": [{"name": "\u8463\u5b66\u5347", "value": 0.0697056418642682}, {"name": "\u91cc", "value": 0.030866721177432544}, {"name": "\u76ae", "value": 0.028822567457072772}, {"name": "\u597d", "value": 0.014513491414554373}, {"name": "\u6700\u8fd1", "value": 0.014513491414554373}, {"name": "\u771f\u7684", "value": 0.012469337694194603}, {"name": "\u72b6\u6001", "value": 0.010425183973834832}, {"name": "\u8e22", "value": 0.010425183973834832}, {"name": "\u8d5b\u5b63", "value": 0.010425183973834832}, {"name": "\u4ee5\u524d", "value": 0.010425183973834832}, {"name": "\u903c", "value": 0.010425183973834832}, {"name": "\u8868\u73b0", "value": 0.010425183973834832}, {"name": "\u8003\u8651", "value": 0.010425183973834832}, {"name": "\u56fd\u5185", "value": 0.010425183973834832}, {"name": "\u4ee5\u4e0b", "value": 0.008381030253475062}, {"name": "\uff01", "value": 0.008381030253475062}, {"name": "\u8fd9\u573a", "value": 0.008381030253475062}, {"name": "\u5f1f\u5b50", "value": 0.008381030253475062}, {"name": "\u7403\u8ff7", "value": 0.008381030253475062}, {"name": "\u6768\u65ed", "value": 0.008381030253475062}, {"name": "\u725b", "value": 0.008381030253475062}, {"name": "\u611f\u89c9", "value": 0.008381030253475062}, {"name": "\u9ebe\u4e0b", "value": 0.008381030253475062}, {"name": "\u5916\u63f4", "value": 0.006336876533115291}, {"name": "\u6700\u540e", "value": 0.006336876533115291}, {"name": "\u80fd\u529b", "value": 0.006336876533115291}, {"name": "\u7403", "value": 0.006336876533115291}, {"name": "\u4e2d\u950b", "value": 0.006336876533115291}, {"name": "\u7403\u5458", "value": 0.006336876533115291}, {"name": "\u7206\u53d1", "value": 0.006336876533115291}]};
var topic_summary = {"0": [{"content": "\u4e0d\u591a\u8bf4\uff0c\u5173\u6ce8\u8463\u5b66\u5347\u51e0\u573a\u4e86\uff0c\u8fdb\u56fd\u5bb6\u961f\u9876\u66ff\u90dc\u6797\u4e0d\u4f1a\u5dee\uff0c\u90dc\u6797\u53cd\u6b63\u90fd\u8fd9\u4e48\u83dc\u4e86\uff0c\u8463\u5b66\u5347\u4e0d\u4f1a\u518d\u6bd4\u4ed6\u5dee", "up": 254}, {"content": "\u8463\u5b66\u5347\u725b\ud83d\udc2e\uff01\u6839\u672c\u5c31\u5e94\u8be5\u8fdb\u56fd\u8db3\uff0c\u641e\u4e0d\u61c2\u4e3a\u5565\u5230\u73b0\u5728\u8fd8\u4e0d\u53ec\u5524\u4ed6\uff0c\u652f\u6301\u5b66\u5347\u7684\u54e5\u4eec\u6765\u8fd9\u91cc\u7b7e\u5230\uff01", "up": 130}, {"content": "\u5e0c\u671b\u8463\u5b66\u5347\u8fdb\u56fd\u5bb6\u961f\u8fd8\u6709\u6ca1\u6709[\u54c8\u54c8]", "up": 96}, {"content": "\u8463\u5b66\u5347\u7684\u8fdb\u7403\u6709\u70b9\u50cf\u524d\u4e24\u5929\u7684\u5f20\u7389\u5b81\u7684\u8fdb\u7403\u3002", "up": 85}, {"content": "\u8bf7\u95ee\u90dc\u6797\u3001\u6b66\u78ca\u4e4b\u7c7b\u7684****\u54ea\u4e00\u70b9\u6bd4\u8463\u5b66\u5347\u5f3a\uff0c\u4e3a\u4ec0\u4e48\u8463\u5b66\u5347\u4e0d\u662f\u56fd\u8db3\u4e3b\u529b\uff01", "up": 13}], "1": [{"content": "\u8463\u5b66\u5347\u50cf\u662f\u585e\u5c14\u7ef4\u4e9a\u7403\u5458\uff0c\u8fd9\u8eab\u677f\uff0c\u6253\u4e2d\u950b\u5408\u9002\uff0c\u8fd9\u91cc\u76ae\u5c31\u662f\u6df7\u65e5\u5b50\u7684\uff0c\u65e9\u8be5\u8ba9\u4ed6\u6253\u6b63\u5370\u4e2d\u950b\u4e86\u3002\u534a\u4e2a\u8d5b\u5b63\u8fdb12\u4e2a\u7403\uff0c\u8fd9\u6548\u7387\u53ef\u4ee5\u4e86\uff0c\u5feb\u8d76\u4e0a\u6b66\u7403\u738b\u4e86\u3002", "up": 8}, {"content": "\u8463\u5b66\u5347\u662f\u90a3\u79cd\u975e\u5e38\u52e4\u594b\u7684\u7403\u5458 \u867d\u7136\u5929\u8d4b\u4e0d\u60f3\u8463\u65b9\u5353\u90a3\u4e48\u9ad8 \u4f46\u540e\u5929\u7684\u52aa\u529b\u7a0b\u5ea6\u662f\u663e\u800c\u6613\u89c1\u7684", "up": 5}, {"content": "\u6211\u89c9\u5f97\u534e\u590f\u53ef\u4ee5\u5c11\u4e0a\u4e00\u4e2a\u5916\u63f4\uff0c\u8fd9\u6837\u53ef\u4ee5\u5c11\u4e0a\u4e00\u4e2aU23\u3002\u5916\u63f4\u91cc\u70ed\u9e1f\u72b6\u6001\u8fd8\u662f\u4e0d\u7a33\u5b9a\uff0c\u5148\u77e5\u4e5f\u6ca1\u5565\u5b58\u5728\u611f\uff0c\u80fd\u7528\u7684\u5c31\u5c0f\u9a6c\u54e5\u548c\u62c9\u7ef4\u5947\u3002U23\u9ad8\u51c6\u7ffc\u53bb\u6253\u540e\u8170\u5427\uff0c\u8e22\u540e\u536b\u5b9e\u5728\u662f\u4e2a\u5751\uff0c\u4eca\u5929\u88ab33\u5c81\u7684\u6bdb\u5251\u537f\u7a81\u7684\u4e0d\u8981\u4e0d\u8981\u7684\uff0c\u8f66\u4e16\u4f1f\u540e\u5e74\u53ef\u4ee5\u9000\u5f79\u4e86\uff0c\u6842\u5b8f\u5176\u5b9e\u8fd8\u53ef\u4ee5\uff0c\u4f5c\u66ff\u8865U23\u6ca1\u95ee\u9898\u3002\u961f\u91cc\u8fd8\u6709\u4e00\u5927\u7968\u975eU23\u7684\u5927\u4f6c\u8e22\u4e0d\u4e0a\u7403\uff0c\u5c39\u9e3f\u535a\uff0c\u8d75\u5b87\u8c6a\uff0c\u8d75\u660e\u5251\uff0c\u8463\u5b66\u5347\uff0c\u91d1\u6d0b\u6d0b\uff0c\u59dc\u6587\u9a8f\uff0c\u59dc\u5b81\uff0c\u65b0\u653f\u771f\u662f\u6c14\u4eba\u3002", "up": 5}, {"content": "\u8463\u5b66\u5347\u8be5\u8fdb\u56fd\u5bb6\u961f\u4e86\u5427\uff0c\u6bd4\u8096\u667a\u548c\u6768\u65ed\u7a33\u5b9a\u70b9\uff0c\u53ef\u4ee5\u505a\u4e2a\u7eaf\u6b63\u7684\u4e2d\u950b\u8865\u5145\u4e00\u4e0b", "up": 4}, {"content": "\u524d\u6709\u90dc\u6797\u60ca\u5929\u5012\u52fe\u8463\u5b66\u5347\u6885\u5f00\u4e8c\u5ea6\uff0c\u4eca\u6709\u6768\u65ed\u66b4\u529b\u5934\u69cc\uff0c\u56fd\u4ea7\u4e2d\u950b\u8fce\u6765\u4e86\u4e00\u4e2a\u7206\u53d1\u671f", "up": 3}], "2": [{"content": "\u6700\u8fd1\u72b6\u6001\u56de\u5347\u7684\u4e24\u4e2a\u56fd\u5185\u4e2d\u950b\uff0c\u4e00\u4e2a\u8463\u5b66\u5347\uff0c\u4e00\u4e2a\u6768\u65ed", "up": 199}, {"content": "\u8463\u5b66\u5347\u6700\u8fd1\u8868\u73b0\u771f\u597d\u3002", "up": 121}, {"content": "\u8463\u5b66\u5347\u5f53\u5e74\u5c31\u662f\u94f6\u72d0\u91cc\u76ae\u5f88\u6b23\u8d4f\u7684\u672c\u571f\u653b\u51fb\u7403\u5458\uff0c\u4eca\u5929\u7cbe\u5f69\u8868\u73b0\u53ef\u89c1\u4e00\u6591\uff01[\u5389\u5bb3][\u52a0\u6cb9][\u52a0\u6cb9]", "up": 104}, {"content": "\u8463\u5b66\u5347\u6700\u8fd1\u72b6\u6001\u7206\u8868", "up": 99}, {"content": "\u8463\u5b66\u5347\u8fd9\u4eba\u7403\u5206\u8fc7\u725b\u903c\u554a", "up": 23}]};
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
