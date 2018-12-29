var data = {"person_name": "\u5f20\u7a00\u54f2", "nicknames": "\u5f20\u7a00\u54f2", "aspects": {"\u5916\u63f4": 0.6179664652109595, "\u7403\u5458": 0.6299284105029537, "\u6bd4\u8d5b": 0.5207840382134951, "\u4f20\u7403": 0.7212697796847481, "\u540e\u9632": 0.6830829507240133, "\u8fdb\u653b": 0.6733079706966874, "\u8d5b\u5b63": 0.7238776242999977, "\u624b\u7403": 0.5070768699685904, "\u56fd\u5bb6\u961f": 0.5487645586898378, "\u505c\u8d5b": 0.646934470789504}, "overall_heat": 72.0, "overall_polar": 0.312, "name": "75", "nationality": "\u4e2d\u56fd", "position": "\u4e2d\u573a", "goal": "4", "assist": "7", "team_name": "\u5317\u4eac\u4e2d\u8d6b\u56fd\u5b89", "name_en": "Zhang Xizhe", "age": "27", "height": "180", "weight": "69"};
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
var topic_keywords = {"0": [{"name": "\u5f20\u7a00\u54f2", "value": 0.04738725841088046}, {"name": "\uff01", "value": 0.021617752326413744}, {"name": "\uff1f", "value": 0.01875447387258411}, {"name": "\u7b11", "value": 0.015891195418754472}, {"name": "\u54ed", "value": 0.015891195418754472}, {"name": "\u4e70", "value": 0.014459556191839655}, {"name": "\u518d", "value": 0.013027916964924838}, {"name": "\u573a", "value": 0.011596277738010021}, {"name": "\u8e22", "value": 0.011596277738010021}, {"name": "\u4e00\u4e2a", "value": 0.010164638511095203}, {"name": "\u6253", "value": 0.010164638511095203}, {"name": "\u4eba", "value": 0.010164638511095203}, {"name": "\u4e24\u4eba", "value": 0.008732999284180386}, {"name": "\u4e2d\u56fd", "value": 0.008732999284180386}, {"name": "\u5916\u63f4", "value": 0.008732999284180386}, {"name": "\u4e70\u56de\u6765", "value": 0.008732999284180386}, {"name": "\u624b\u7403", "value": 0.007301360057265569}, {"name": "\u6b66\u6c49", "value": 0.007301360057265569}, {"name": "\u6b66\u78ca", "value": 0.007301360057265569}, {"name": "\u7403\u5458", "value": 0.007301360057265569}, {"name": "\u5409\u7965", "value": 0.005869720830350751}, {"name": "\u7403", "value": 0.005869720830350751}, {"name": "\u505c\u8d5b", "value": 0.005869720830350751}, {"name": "\u84bf\u4fca\u95f5", "value": 0.005869720830350751}, {"name": "\u8db3\u7403", "value": 0.005869720830350751}, {"name": "\u524d\u950b", "value": 0.005869720830350751}, {"name": "\u88c1\u5224", "value": 0.004438081603435934}, {"name": "\u56fd\u5b89", "value": 0.004438081603435934}, {"name": "\u6700", "value": 0.004438081603435934}, {"name": "\u540e\u9632", "value": 0.004438081603435934}], "1": [{"name": "\u5f20\u7a00\u54f2", "value": 0.047995212447636146}, {"name": "\uff01", "value": 0.03123877917414722}, {"name": "\u56fd\u5b89", "value": 0.020466786355475764}, {"name": "\u8e22", "value": 0.013285457809694793}, {"name": "\u5916\u63f4", "value": 0.012088569718731299}, {"name": "\u4e8e\u5927\u5b9d", "value": 0.009694793536804308}, {"name": "\u6734\u6210", "value": 0.009694793536804308}, {"name": "\u6c60\u5fe0\u56fd", "value": 0.008497905445840814}, {"name": "\u5965\u53e4\u65af\u6258", "value": 0.008497905445840814}, {"name": "\u7403\u5458", "value": 0.007301017354877318}, {"name": "\u8d5b\u5b63", "value": 0.007301017354877318}, {"name": "\u4e2d\u573a", "value": 0.007301017354877318}, {"name": "\uff1f", "value": 0.007301017354877318}, {"name": "\u4eca\u5e74", "value": 0.007301017354877318}, {"name": "\u6bd4\u57c3\u62c9", "value": 0.007301017354877318}, {"name": "\u5df4\u574e\u5e03", "value": 0.007301017354877318}, {"name": "\u84bf\u4fca\u95f5", "value": 0.006104129263913824}, {"name": "\u5206\u949f", "value": 0.006104129263913824}, {"name": "\u51e0\u573a", "value": 0.006104129263913824}, {"name": "\u5e0c\u671b", "value": 0.006104129263913824}, {"name": "\u6bd4\u8d5b", "value": 0.006104129263913824}, {"name": "\u65bd\u5bc6\u7279", "value": 0.006104129263913824}, {"name": "\u4e0d\u9519", "value": 0.006104129263913824}, {"name": "\u4e2d\u56fd", "value": 0.006104129263913824}, {"name": "\u6052\u5927", "value": 0.004907241172950329}, {"name": "\u97e6\u4e16\u8c6a", "value": 0.004907241172950329}, {"name": "\u5b8c\u6210", "value": 0.004907241172950329}, {"name": "\u9c81\u80fd", "value": 0.004907241172950329}, {"name": "\u91cc", "value": 0.004907241172950329}, {"name": "\u4eba", "value": 0.004907241172950329}]};
var topic_summary = {"0": [{"content": "\u4eca\u5929\u9996\u5148\u8bf4:\u5168\u4e2d\u8d85\u6700\u80fd\u88c5*\u4e5f\u6700\u6709\u8d44\u683c\u7684\u95e8\u5c06\u2014\u2014\u738b\u5927\u96f7\uff0c\u4e0d\u662f\u5927\u96f7\uff0c\u65e9\u82b1\u4e86\u3002\u9e21\u513f\u5355\u5175\u786e\u5b9e\u662f\u5f3a\u3002\u5218\u5f6c\u5f6c\u3002\u3002\u3002\u3002\u30023\u5206\u6700\u591a\u4e86\u3002\u5916\u63f4\u4e0a\uff0c\u4f69\u83b1\u786e\u5b9e\u5dee\u4e86\u5176\u4ed6\u5916\u63f4\u4e00\u4e2a\u6863\u6b21\u3002\uff0c\u3002\u3002\u3002\u6700\u540e\uff0c\u4e0d\u5f97\u4e0d\u8bf4\uff0c\u56fd\u5b89\u4eca\u5e74\u7684\u8fdb\u653b\u6253\u7684\u786e\u5b9e\u662f\u6f02\u4eae\uff0c\u5f20\u7a00\u54f2\u505a\u7ed9\u90a3\u4e2a\u5c0f\u9ed1\u7684\u7403\u5b9e\u5728\u662f\u592a\u98ce\u9a9a\u4e86\u3002\u5e78\u597d\u7a7a\u95e8\u4e0d\u8fdb\u3002[\u7b11\u54ed][\u7b11\u54ed][\u7b11\u54ed][\u7b11\u54ed][\u7b11\u54ed]", "up": 10}, {"content": "\u4e24\u4e2a\u50bb\u5e3d\u89e3\u8bf4\uff0c\u5f20\u7a00\u54f2\u90a3\u7403\u660e\u660e\u6253\u5728\u811a\u4e0a\uff0c\u6162\u52a8\u4f5c\u90a3\u4e48\u6e05\u695a\uff0c\u8fd8\u5728\u90a3\u91cc\u8bf4\u662f\u624b\u7403\u3002\u88c1\u5224\u770bVar\u90fd\u5224\u70b9\u7403\u4e86\u8fd8\u8bf4\u4e0d\u662f\uff0c\u4ec0\u4e48\u73a9\u610f\u513f", "up": 10}, {"content": "\u5f20\u7a00\u54f2\u4ec0\u4e48\u65f6\u5019\u89e3\u7981\uff1f", "up": 5}, {"content": "\u4e8e\u6c49\u8d85\u529b\u538b\u5409\u7965\u5934\u7403\u7edd\u6740\uff01\u5475\u5475\uff0c\u6c5f\u82cf\u7403\u8ff7\u7ee7\u7eed\u5938\u5409\u7965\u554a\uff0c\u548b\u4e0d\u5938\u4e86\uff1f\u5409\u7965\u8db3\u534f\u676f\u8fdb\u4e2a\u7403\u6c5f\u82cf\u7403\u8ff7\u5c31\u628a\u84bf\u4fca\u95f5\u5f20\u7a00\u54f2\u8bf4\u6210\u662f\u4e24\u5768\u72d7\u5c4e\uff0c\u8981\u662f\u5409\u7965\u56fd\u8db3\u6838\u5fc3\u5c31\u5982\u4f55\u5982\u4f55\uff0c\u5bb3\u5f97\u8001\u5b50\u628a\u5f53\u65f6\u7684\u996d\u90fd\u5410\u4e86\uff01", "up": 5}, {"content": "\u5f20\u7a00\u54f2\u8e22\u7684\u771f\u662f\u70c2,\u597d\u610f\u601d\u7a7f10\u53f7\u7403\u8863?\u600e\u4e48\u8fdb\u7684\u56fd\u5bb6\u961f?", "up": 4}], "1": [{"content": "\u56fd\u5b89\u786e\u5b9e\u5389\u5bb3\uff0c\u950b\u7ebf\u4e09\u5916\u63f4\uff0c\u4e2d\u573a\u4e09\u671d\u9c9c\u65cf\u4e09\u80ba\u8dd1\u4e0d\u6b7b\uff0c\u8fde\u5f20\u7a00\u54f2\u90fd\u8e22\u8fb9\u540e\u536b\u53bb\u4e86", "up": 310}, {"content": "\u56fd\u5b89\u4eca\u5e74\u8e22\u5f97\u771f\u4e0d\u9519\uff0c\u98ce\u683c\u8ddf\u5df4\u8428\u66fc\u57ce\u90fd\u6bd4\u8f83\u50cf\uff0c\u7b2c\u4e00\u573a\u8f93\u7ed9\u9c81\u80fd\u7eaf\u5c5e\u8d56\u65bd\u5bc6\u7279\u778e\u6392\u9635\u5bb9\uff0c\u540e\u51e0\u573a\u4e2d\u573a\u4e0a\u4e86\u6c60\u5fe0\u56fd\uff0c\u6734\u6210\u548c\u6bd4\u57c3\u62c9\u4e4b\u540e\uff0c\u52a0\u4e0a\u5965\u53e4\u65af\u6258\uff0c\u4e2d\u573a\u5b9e\u529b\u5728\u4e2d\u8d85\u7edd\u5bf9\u6570\u4e00\u6570\u4e8c\uff0c\u524d\u573a\u7d229\u4f9d\u7136\u7a33\u5b9a\uff0c\u7b49\u5f85\u5df4\u574e\u5e03\u9002\u5e94\u4e86\u4e2d\u8d85\uff0c\u52a0\u4e0a\u8d85\u7ea7\u65b0\u79c0\u97e6\u4e16\u8c6a\uff0c\u66ff\u8865\u6709\u4e8e\u5927\u5b9d\uff0c\u8fd8\u6709\u505c\u8d5b\u7684\u5f20\u7a00\u54f2\uff0c\u56fd\u5b89\u4eca\u5e74\u4e2d\u524d\u573a\u5f88\u5f3a\u5927\uff0c\u540e\u9632\u7ebf\u9010\u6e10\u78e8\u5408\u7684\u4e5f\u4e0d\u9519\uff0c\u4eca\u5e74\u6709\u5e0c\u671b\u4fdd\u4e09\u4e89\u4e00\u3002\u6700\u62c5\u5fc3\u7684\u5c31\u662f\u4f53\u80fd\uff0c\u9ad8\u4f4d\u903c\u62a2\u5bf9\u4f53\u529b\u8981\u6c42\u6781\u5927\uff0c\u522b\u50cf\u4e0a\u8d5b\u5b63\u4f3c\u7684\u540e\u534a\u6bb5\u6389\u961f\u5c31\u884c\u4e86\u3002\u867d\u8bf4\u8d62\u7684\u90fd\u7b97\u5f31\u961f\uff0c\u4f46\u8d77\u7801\u6bd4\u4e0a\u8d5b\u5b63\u8e22\u5f97\u597d\u591a\u4e86\uff0c\u4eca\u5e74\u771f\u6709\u5e0c\u671b\uff01\uff01\uff01", "up": 172}, {"content": "\u5965\u53e4\u65af\u6258 \u5df4\u574e\u5e03 \u6bd4\u57c3\u62c9 \u5f20\u7a00\u54f2 \u56fd\u5b89\u56db\u628a\u5c16\u5200\uff0c\u592a\u5f3a\u608d\u4e86\u3002", "up": 18}, {"content": "\u9700\u8981\u5927\u5bb6\u770b\u5230\u84bf\u4fca\u95f5\u7684\u51e0\u6b21\u5173\u952e\u8f6c\u79fb\uff0c\u4e09\u54e5\u5927\u5c40\u89c2\u5728\u56fd\u5185\u7403\u5458\u91cc\u7edd\u5bf9\u6392\u7b2c\u4e00\uff0c\u4f46\u662f\u91cc\u76ae\u4e00\u76f4\u4e0d\u5f85\u89c1\u4ed6\uff0c\u975e\u8981\u7528\u4ec0\u4e48\u5f20\u7a00\u54f2\uff0c\u4e16\u9884\u8d5b\u8981\u662f\u4ee5\u84bf\u4fca\u95f5\u4e3a\u8fdb\u653b\u6838\u5fc3\u65e9\u51fa\u7ebf\u4e86\uff01\u84bf\u4fca\u95f5\u5c31\u662f\u9c81\u80fd\u7684\u83ab\u5fb7\u91cc\u5947\u554a", "up": 12}, {"content": "\u56fd\u5b89\u8fd9\u51e0\u573a\u6bd4\u8d5b\u786e\u5b9e\u8e22\u7684\u633a\u597d\uff0c'\u5f20\u7a00\u54f2\u8868\u73b0\u4e5f\u4e0d\u9519\uff0c\u5e0c\u671b\u56fd\u5bb6\u5bf9\u597d\u597d\u7ed9\u6b66\u7403\u738b\u4f20\u51e0\u4e2a\u7403\uff0c\u6b66\u7403\u738b\u4e5f\u7ed9\u70b9\u529b", "up": 10}]};
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
