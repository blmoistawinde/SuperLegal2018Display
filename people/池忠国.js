var data = {"person_name": "\u6c60\u5fe0\u56fd", "nicknames": "\u6c60\u5fe0\u56fd", "aspects": {"\u7403\u5458": 0.6284607185368897, "\u56fd\u5bb6\u961f": 0.3852618808664818, "\u5916\u63f4": 0.7527986591050301, "\u8e22\u7403": 0.8067675804690111, "\u72af\u89c4": 0.48449102810987416, "\u540e\u8170": 1.0, "\u4f20\u7403": 0.7232959419509736, "\u7403\u8ff7": 0.7378527446872523, "\u70b9\u7403": 0.1426020837728171, "\u9632\u5b88": 0.8315121543124636}, "overall_heat": 68.0, "overall_polar": 0.78, "name": "69", "nationality": "\u4e2d\u56fd", "position": "\u4e2d\u573a", "goal": "1", "assist": "0", "team_name": "\u5317\u4eac\u4e2d\u8d6b\u56fd\u5b89", "name_en": "Chi Zhongguo", "age": "29", "height": "170", "weight": "65"};
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
var topic_keywords = {"0": [{"name": "\u6c60\u5fe0\u56fd", "value": 0.059024505183788885}, {"name": "\uff01", "value": 0.034283694627709714}, {"name": "\u56fd\u5b89", "value": 0.02368049010367578}, {"name": "\u6734\u6210", "value": 0.02014608859566447}, {"name": "\u4e2d\u573a", "value": 0.013077285579641848}, {"name": "\u8e22", "value": 0.009542884071630538}, {"name": "\u6bd4\u57c3\u62c9", "value": 0.009542884071630538}, {"name": "\u6052\u5927", "value": 0.008364750235626767}, {"name": "\u5916\u63f4", "value": 0.008364750235626767}, {"name": "\u4eca\u5e74", "value": 0.008364750235626767}, {"name": "\u7403\u5458", "value": 0.008364750235626767}, {"name": "\u4eba", "value": 0.007186616399622997}, {"name": "\uff1f", "value": 0.007186616399622997}, {"name": "\u5965\u53e4\u65af\u6258", "value": 0.007186616399622997}, {"name": "\u5f20\u7a00\u54f2", "value": 0.007186616399622997}, {"name": "\u91d1\u656c\u9053", "value": 0.006008482563619227}, {"name": "\u52a0\u6cb9", "value": 0.006008482563619227}, {"name": "\u8d5b\u5b63", "value": 0.006008482563619227}, {"name": "\u6838\u5fc3", "value": 0.006008482563619227}, {"name": "\u56fd\u5185", "value": 0.006008482563619227}, {"name": "\u5ef6\u8fb9", "value": 0.006008482563619227}, {"name": "\u5df4\u574e\u5e03", "value": 0.0048303487276154565}, {"name": "\u8e22\u7403", "value": 0.0048303487276154565}, {"name": "\u56fd\u5bb6\u961f", "value": 0.0048303487276154565}, {"name": "\u4fe9", "value": 0.0048303487276154565}, {"name": "\u5b8c\u5168", "value": 0.0048303487276154565}, {"name": "\u50b2\u9aa8", "value": 0.0048303487276154565}, {"name": "\u597d", "value": 0.0048303487276154565}, {"name": "\u8fdb", "value": 0.0036522148916116872}, {"name": "\u4e2d\u56fd", "value": 0.0036522148916116872}], "1": [{"name": "\u6c60\u5fe0\u56fd", "value": 0.04198728671796588}, {"name": "\u6734\u6210", "value": 0.018568082970893275}, {"name": "\u56fd\u5b89", "value": 0.013549682167949148}, {"name": "\u56fd\u5bb6\u961f", "value": 0.013549682167949148}, {"name": "\uff01", "value": 0.011876881900301105}, {"name": "\u4e00\u4e2a", "value": 0.011876881900301105}, {"name": "\u80fd\u529b", "value": 0.011876881900301105}, {"name": "\u6c60\u6587\u4e00", "value": 0.010204081632653062}, {"name": "\u4e0d\u7528", "value": 0.00853128136500502}, {"name": "\u8e22", "value": 0.00853128136500502}, {"name": "\u540e\u8170", "value": 0.00853128136500502}, {"name": "\u9996\u53d1", "value": 0.00853128136500502}, {"name": "\u97e6\u4e16\u8c6a", "value": 0.00853128136500502}, {"name": "\uff1b", "value": 0.006858481097356975}, {"name": "\u5439", "value": 0.006858481097356975}, {"name": "\u7403\u5458", "value": 0.006858481097356975}, {"name": "\u95ee\u9898", "value": 0.006858481097356975}, {"name": "\u674e\u78ca", "value": 0.006858481097356975}, {"name": "\u4eba\u7269", "value": 0.006858481097356975}, {"name": "\u597d", "value": 0.006858481097356975}, {"name": "\u4ee3\u8868", "value": 0.006858481097356975}, {"name": "\u4ee5\u540e", "value": 0.006858481097356975}, {"name": "\u5e15\u6258", "value": 0.005185680829708933}, {"name": "\u5965\u53e4\u65af\u6258", "value": 0.005185680829708933}, {"name": "\u8bc4\u7403", "value": 0.005185680829708933}, {"name": "\u6001\u5ea6", "value": 0.005185680829708933}, {"name": "\u8fdb", "value": 0.005185680829708933}, {"name": "\u5f20\u7440", "value": 0.005185680829708933}, {"name": "\u88c1\u5224", "value": 0.005185680829708933}, {"name": "\u5206\u949f", "value": 0.005185680829708933}]};
var topic_summary = {"0": [{"content": "\u6734\u6210 \u6c60\u5fe0\u56fd\u5ef6\u8fb9\u7403\u5458\u811a\u4e0b\u6280\u672f\u597d\uff0c\u8e22\u7403\u5e72\u51c0\uff0c\u6bd4\u5404\u79cd\u7c97\u91ce\u72af\u89c4\uff0c\u5404\u79cd\u754c\u5916\u7403\u66f4\u503c\u5f97\u56fd\u8db3\u53bb\u5b66\u4e60", "up": 200}, {"content": "\u6c60\u5fe0\u56fd\u771f\u4e0d\u9519\uff0c\u9632\u5b88\u5bf9\u65b9\u6838\u5fc3\u4f0a\u6c83\u5f88\u6210\u529f\u3002\u800c\u4e14\u94f2\u7403\u5e72\u51c0\u3001\u62a2\u65ad\u7cbe\u51c6\u3001\u5e26\u7403\u7a33\u5b9a\u3001\u51fa\u7403\u51c6\u786e\u3002\u5728\u5b8c\u5168\u89e3\u653e\u672c\u65b9\u6838\u5fc3\u6bd4\u827e\u62c9\u548c\u50b2\u9aa8\u7684\u540c\u65f6\uff0c\u5c01\u6b7b\u4e86\u5bf9\u65b9\u6838\u5fc3\u3002\u4e4d\u4e00\u770b\u65e2\u6ca1\u8fdb\u7403\u4e5f\u6ca1\u52a9\u653b\uff0c\u4f46\u662f\u4f5c\u7528\u771f\u7684\u975e\u5e38\u5927\u3002\u5f88\u597d\u7684\u5f15\u63f4\uff0c\u5439\u4e00\u6ce2\u6c60\u5fe0\u56fd\uff01\uff01\uff01", "up": 177}, {"content": "\u56fd\u5b89\u4eca\u5e74\u8e22\u5f97\u771f\u4e0d\u9519\uff0c\u98ce\u683c\u8ddf\u5df4\u8428\u66fc\u57ce\u90fd\u6bd4\u8f83\u50cf\uff0c\u7b2c\u4e00\u573a\u8f93\u7ed9\u9c81\u80fd\u7eaf\u5c5e\u8d56\u65bd\u5bc6\u7279\u778e\u6392\u9635\u5bb9\uff0c\u540e\u51e0\u573a\u4e2d\u573a\u4e0a\u4e86\u6c60\u5fe0\u56fd\uff0c\u6734\u6210\u548c\u6bd4\u57c3\u62c9\u4e4b\u540e\uff0c\u52a0\u4e0a\u5965\u53e4\u65af\u6258\uff0c\u4e2d\u573a\u5b9e\u529b\u5728\u4e2d\u8d85\u7edd\u5bf9\u6570\u4e00\u6570\u4e8c\uff0c\u524d\u573a\u7d229\u4f9d\u7136\u7a33\u5b9a\uff0c\u7b49\u5f85\u5df4\u574e\u5e03\u9002\u5e94\u4e86\u4e2d\u8d85\uff0c\u52a0\u4e0a\u8d85\u7ea7\u65b0\u79c0\u97e6\u4e16\u8c6a\uff0c\u66ff\u8865\u6709\u4e8e\u5927\u5b9d\uff0c\u8fd8\u6709\u505c\u8d5b\u7684\u5f20\u7a00\u54f2\uff0c\u56fd\u5b89\u4eca\u5e74\u4e2d\u524d\u573a\u5f88\u5f3a\u5927\uff0c\u540e\u9632\u7ebf\u9010\u6e10\u78e8\u5408\u7684\u4e5f\u4e0d\u9519\uff0c\u4eca\u5e74\u6709\u5e0c\u671b\u4fdd\u4e09\u4e89\u4e00\u3002\u6700\u62c5\u5fc3\u7684\u5c31\u662f\u4f53\u80fd\uff0c\u9ad8\u4f4d\u903c\u62a2\u5bf9\u4f53\u529b\u8981\u6c42\u6781\u5927\uff0c\u522b\u50cf\u4e0a\u8d5b\u5b63\u4f3c\u7684\u540e\u534a\u6bb5\u6389\u961f\u5c31\u884c\u4e86\u3002\u867d\u8bf4\u8d62\u7684\u90fd\u7b97\u5f31\u961f\uff0c\u4f46\u8d77\u7801\u6bd4\u4e0a\u8d5b\u5b63\u8e22\u5f97\u597d\u591a\u4e86\uff0c\u4eca\u5e74\u771f\u6709\u5e0c\u671b\uff01\uff01\uff01", "up": 172}, {"content": "\u56fd\u5b89\u8fd9\u95e8\u662f\u9760\u540e\u536b\u5b88\u7684\uff0c\u5662\u4e0d\uff0c\u662f\u9760\u6c60\u5fe0\u56fd\u5b88\u7684\uff01[\u6342\u8138]", "up": 114}, {"content": "\u600e\u4e48\u611f\u89c9\u56fd\u5b89\u5916\u63f4\u90a3\u4e48\u591a\u5462[\u6342\u8138] \u5965\u53e4\u65af\u6258 \u6bd4\u57c3\u62c9 \u91d1\u6cf0\u5ef6 \u6734\u6210 \u6c60\u5fe0\u56fd \u5df4\u574e\u5e03\u2026\u2026[\u6342\u8138]", "up": 89}], "1": [{"content": "\u8fd9\u6837\u7684\u6c60\u5fe0\u56fd\u8fd8\u662f\u8fdb\u4e0d\u4e86\u56fd\u5bb6\u961f \u662f\u6559\u7ec3\u95ee\u9898 \u8fd8\u662f\u8db3\u534f\u95ee\u9898\u3002", "up": 265}, {"content": "\u6c60\u5fe0\u56fd\u4e2d\u8d85\u574e\u7279", "up": 189}, {"content": "\u4faf\u68ee+\u96f7\u817e\u9f99+\u5f20\u7440+\u5218\u6b22\uff08\u4ed6\u4eec\u56db\u4e2a\u4eba\u7684\u5de5\u8d44\uff09\u90fd\u4e0d\u5e94\u8be5\u6bd4\u6c60\u5fe0\u56fd\u591a\uff01", "up": 58}, {"content": "\u73b0\u5728\u7684\u95ee\u9898\u662f\uff0c\u5f2010\u56de\u6765\u4ee5\u540e\uff0c\u6734\u6210\u548c\u6c60\u5fe0\u56fd\u8c01\u8e22\u4e3b\u529b", "up": 36}, {"content": "\u4eca\u5929 \u6211\u5927 \u5ef6\u8fb9\u76843 \u540d\u9009\u624b \u90fd\u8e22\u5f97 \u592a\u597d\u4e86 \u6c60\u5fe0\u56fd \u540e\u8170\u771f\u662f\u7a33", "up": 28}]};
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
