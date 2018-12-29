var data = {"person_name": "\u5df4\u574e\u5e03", "nicknames": "\u5df4\u574e\u5e03", "aspects": {"\u70b9\u7403": 0.24382801697825252, "\u72af\u89c4": 0.556873568303298, "\u8fdb\u7403": 0.39785753688608383, "\u8d8a\u4f4d": 0.37691858343426415, "\u6bd4\u8d5b": 0.5640875123811062, "\u7403\u8ff7": 0.6017708642646433, "\u9632\u5b88": 0.6961581787865042, "\u7403\u5458": 0.436936765985928, "\u5224\u7f5a": 0.5108145941963137, "\u9ec4\u724c": 0.543895849491211}, "overall_heat": 224.0, "overall_polar": 0.288, "name": "63", "nationality": "\u521a\u679c\u6c11\u4e3b\u5171\u548c\u56fd", "position": "\u524d\u950b", "goal": "19", "assist": "5", "team_name": "\u5317\u4eac\u4e2d\u8d6b\u56fd\u5b89", "name_en": "Cedric Bakambu", "age": "27", "height": "182", "weight": "73"};
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
var topic_keywords = {"0": [{"name": "\u5df4\u574e\u5e03", "value": 0.04254931714719271}, {"name": "\u88c1\u5224", "value": 0.017056145675265554}, {"name": "\u5439", "value": 0.014628224582701063}, {"name": "\u72af\u89c4", "value": 0.01402124430955994}, {"name": "\u56fd\u5b89", "value": 0.013414264036418818}, {"name": "\u8fdb\u7403", "value": 0.013414264036418818}, {"name": "\u7403", "value": 0.012807283763277694}, {"name": "\u8d8a\u4f4d", "value": 0.011593323216995449}, {"name": "\u6052\u5927", "value": 0.011593323216995449}, {"name": "\uff1f", "value": 0.010986342943854326}, {"name": "\u95ee\u9898", "value": 0.010379362670713203}, {"name": "\uff01", "value": 0.009165402124430956}, {"name": "\u6700\u540e", "value": 0.00795144157814871}, {"name": "\u6bd4\u8d5b", "value": 0.00795144157814871}, {"name": "\u660e\u663e", "value": 0.00795144157814871}, {"name": "\u6253", "value": 0.007344461305007587}, {"name": "\u7403\u8ff7", "value": 0.007344461305007587}, {"name": "\u70b9\u7403", "value": 0.006737481031866464}, {"name": "\u56de\u653e", "value": 0.006737481031866464}, {"name": "\u90d1\u667a", "value": 0.006737481031866464}, {"name": "var", "value": 0.006737481031866464}, {"name": "\u4e00\u4e2a", "value": 0.006737481031866464}, {"name": "\u66fe\u8bda", "value": 0.006130500758725341}, {"name": "\u8e29", "value": 0.006130500758725341}, {"name": "\u4eba", "value": 0.006130500758725341}, {"name": "\u5934", "value": 0.005523520485584218}, {"name": "\u90a3\u7403", "value": 0.005523520485584218}, {"name": "\u5224\u7f5a", "value": 0.005523520485584218}, {"name": "\u89c6\u9891", "value": 0.005523520485584218}, {"name": "\u5148", "value": 0.005523520485584218}], "1": [{"name": "\u5df4\u574e\u5e03", "value": 0.06597647058823529}, {"name": "\uff01", "value": 0.027388235294117647}, {"name": "\u56fd\u5b89", "value": 0.021741176470588236}, {"name": "\uff1f", "value": 0.012329411764705882}, {"name": "\u9c81\u80fd", "value": 0.011388235294117647}, {"name": "\u673a\u4f1a", "value": 0.011388235294117647}, {"name": "\u5965\u53e4\u65af\u6258", "value": 0.009505882352941177}, {"name": "\u8138", "value": 0.007623529411764705}, {"name": "\u6342", "value": 0.007623529411764705}, {"name": "\u6bd4\u57c3\u62c9", "value": 0.007623529411764705}, {"name": "\u6d6a\u8d39", "value": 0.00668235294117647}, {"name": "\u5361\u62c9\u65af\u79d1", "value": 0.005741176470588235}, {"name": "\u4e2d\u573a", "value": 0.005741176470588235}, {"name": "\u7403", "value": 0.0048}, {"name": "\u7d22\u91cc\u4e9a\u8bfa", "value": 0.0048}, {"name": "\u4eca\u5e74", "value": 0.0048}, {"name": "\u5f20\u7a00\u54f2", "value": 0.0048}, {"name": "\u7b11", "value": 0.0048}, {"name": "\u8fd9\u573a", "value": 0.0048}, {"name": "\u738b\u5927\u96f7", "value": 0.0048}, {"name": "\u8fdb\u653b", "value": 0.0048}, {"name": "\u54ed", "value": 0.0048}, {"name": "\u592a", "value": 0.0048}, {"name": "\u8fdb\u7403", "value": 0.0048}, {"name": "\u56de", "value": 0.0038588235294117644}, {"name": "\u4e2d\u8d85", "value": 0.0038588235294117644}, {"name": "\u4e0b\u53bb", "value": 0.0038588235294117644}, {"name": "\u9001", "value": 0.0038588235294117644}, {"name": "\u4e00\u5206", "value": 0.0038588235294117644}, {"name": "\u4e9a\u6cf0", "value": 0.0038588235294117644}], "2": [{"name": "\u5df4\u574e\u5e03", "value": 0.06421499292786421}, {"name": "\uff01", "value": 0.023668081093823668}, {"name": "\u7403", "value": 0.020839226779820842}, {"name": "\u8d8a\u4f4d", "value": 0.018010372465818013}, {"name": "\u70b9\u7403", "value": 0.017067421027817067}, {"name": "\u56fd\u5b89", "value": 0.015181518151815183}, {"name": "\uff1f", "value": 0.012352663837812352}, {"name": "\u88c1\u5224", "value": 0.010466760961810467}, {"name": "\u4e00\u4e0b", "value": 0.008580858085808581}, {"name": "\u9ec4\u724c", "value": 0.008580858085808581}, {"name": "\u5355\u5200", "value": 0.008580858085808581}, {"name": "\u95ee\u9898", "value": 0.007637906647807637}, {"name": "\u7b11", "value": 0.007637906647807637}, {"name": "\u54ed", "value": 0.007637906647807637}, {"name": "\u4f4d\u7f6e", "value": 0.007637906647807637}, {"name": "\u8fdb\u7403", "value": 0.006694955209806694}, {"name": "\u9093\u6db5\u6587", "value": 0.006694955209806694}, {"name": "\u674e\u8fd0\u79cb", "value": 0.005752003771805752}, {"name": "\u90a3\u7403", "value": 0.005752003771805752}, {"name": "\u5965\u53e4\u65af\u6258", "value": 0.005752003771805752}, {"name": "\u8e22", "value": 0.004809052333804809}, {"name": "\u72af\u89c4", "value": 0.004809052333804809}, {"name": "\u8fd9\u7403", "value": 0.004809052333804809}, {"name": "\u90d1\u9f99", "value": 0.004809052333804809}, {"name": "\u597d", "value": 0.003866100895803866}, {"name": "\u673a\u4f1a", "value": 0.003866100895803866}, {"name": "\u7b2c\u4e00", "value": 0.003866100895803866}, {"name": "\u524d", "value": 0.003866100895803866}, {"name": "\u6345", "value": 0.003866100895803866}, {"name": "\u6454\u5012", "value": 0.003866100895803866}], "3": [{"name": "\u5df4\u574e\u5e03", "value": 0.03410379415612735}, {"name": "\u56fd\u5b89", "value": 0.015787178368948978}, {"name": "\u6052\u5927", "value": 0.010553859572612298}, {"name": "\u6bd4\u8d5b", "value": 0.010553859572612298}, {"name": "\u6bd4\u57c3\u62c9", "value": 0.009681639773222853}, {"name": "\u8fd9\u573a", "value": 0.00793720017444396}, {"name": "\u4e00\u4e2a", "value": 0.00793720017444396}, {"name": "\u72af\u89c4", "value": 0.007064980375054514}, {"name": "\u5916\u63f4", "value": 0.007064980375054514}, {"name": "\u88c1\u5224", "value": 0.007064980375054514}, {"name": "\u914d\u5408", "value": 0.007064980375054514}, {"name": "\u8e22", "value": 0.007064980375054514}, {"name": "\u97e6\u4e16\u8c6a", "value": 0.006192760575665067}, {"name": "\u80fd\u529b", "value": 0.006192760575665067}, {"name": "\u4e0d\u9519", "value": 0.006192760575665067}, {"name": "\uff01", "value": 0.006192760575665067}, {"name": "\u9c81\u80fd", "value": 0.005320540776275621}, {"name": "\u77e5\u9053", "value": 0.005320540776275621}, {"name": "\u5965\u53e4\u65af\u6258", "value": 0.005320540776275621}, {"name": "\u5e94\u8be5", "value": 0.004448320976886175}, {"name": "\u7403\u8ff7", "value": 0.004448320976886175}, {"name": "\u505a", "value": 0.004448320976886175}, {"name": "\u52a0\u6cb9", "value": 0.004448320976886175}, {"name": "\u6ed1\u7a3d", "value": 0.004448320976886175}, {"name": "\u8fdb\u7403", "value": 0.004448320976886175}, {"name": "\u9996\u53d1", "value": 0.004448320976886175}, {"name": "\u5df4\u987f", "value": 0.004448320976886175}, {"name": "\u592a", "value": 0.004448320976886175}, {"name": "\u6253", "value": 0.003576101177496729}, {"name": "\u6362\u4e0b", "value": 0.003576101177496729}]};
var topic_summary = {"0": [{"content": "\u5df4\u574e\u5e03\u5728\u770b\u53f0\u4e0a\u773c\u90fd\u76f4\u4e86", "up": 252}, {"content": "\u4e25\u683c\u6765\u8bf4\uff0c\u88c1\u5224\u5224\u7f5a\u6ca1\u5565\u95ee\u9898\uff01\u6885\u65b9\u786e\u5b9e\u6709\u4e00\u4e2a\u8f7b\u5fae\u5f20\u5f00\u624b\u81c2\u62e6\u622a\u76ae\u7403\u7684\u52a8\u4f5c\uff0c\u5df4\u574e\u5e03\u4e5f\u6709\u4e00\u4e2a\u624b\u538b\u4eba\u7684\u52a8\u4f5c\uff0c\u9093\u6db5\u6587\u63a8\u4eba\u4e5f\u6ca1\u6709\u5f02\u8bae\u3002\u81f3\u4e8e\u90d1\u667a\u90a3\u4e2a\u72af\u89c4\uff0c\u9996\u5148\u90d1\u667a\u5148\u5360\u636e\u8eab\u4f4d\uff0c\u786e\u5b9e\u6709\u4e2a\u5411\u540e\u6325\u624b\u7684\u4fdd\u62a4\u52a8\u4f5c\uff0c\u5439\u72af\u89c4\u4e5f\u8bf4\u5f97\u8fc7\u53bb\u3002\u53ea\u4e0d\u8fc7\u8981\u5439\u5e94\u8be5\u5148\u5439\uff0c\u6700\u540e\u8fdb\u4e86\u7403\u518d\u5439\u5c31\u8bf4\u4e0d\u8fc7\u53bb\u4e86\uff01\u6309\u8fd9\u4e2a\u8282\u594f\uff0c\u6bcf\u5206\u949f\u90fd\u53ef\u80fd\u627e\u5230\u72af\u89c4\u7684\u955c\u5934\uff01\u6700\u540e\u603b\u7ed3\uff0c\u88c1\u5224\u6c34\u5e73\u592a\u4f4e\uff0c\u6ca1\u6709\u4e3b\u89c1\uff0c\u6839\u672c\u6ca1\u7406\u89e3VAR\u7684\u610f\u4e49\uff0c\u6bc1\u4e86\u4e00\u573a\u672c\u8be5\u7cbe\u5f69\u7684\u6bd4\u8d5b\uff01\u8db3\u534f\u88c1\u59d4\u4f1a\u4e5f\u662f\u4e00\u5e2eSB\uff0c\u9009\u88c1\u5224\u592a\u6709\u95ee\u9898\uff01", "up": 134}, {"content": "\u5df4\u574e\u5e03\u6700\u540e\u90a3\u4e2a\u5355\u5200\uff0c\u5934\u4e5f\u4e0d\u62ac\u95ed\u7740\u773c\u775b\u778ejb\u8e22\uff01\u62ac\u5934\u770b\u4e00\u773c\u518d\u6253\u4e0d\u884c\u5417\uff1f\u90a3\u4e48\u8fd1\u7684\u4f4d\u7f6e\uff0c\u6253\u6b63\u5c31\u662f\u8fdb\u7403\uff01", "up": 34}, {"content": "\u8db3\u534f\u7acb\u573a\u975e\u5e38\u660e\u663e\u7684\u4e00\u573a\u4e86\uff1a\u5df4\u574e\u5e03\u5148\u8e29\u4e86\u66fe\u8bda\uff0c\u7136\u540e\u6885\u65b9\u624b\u7403\uff0c\u76f4\u63a5var\u5439\u70b9\u7403\uff1b\u9ad8\u62c9\u7279\u8fdb\u7684\u90a3\u7403\uff0c\u8fd8\u6709\u9093\u6db5\u6587\u7981\u533a\u88ab\u62cc\u5012\uff0c\u53cd\u8fc7\u6765\u5c31\u53ef\u4ee5var\u56de\u6eaf\u53bb\u627e\u4e4b\u524d\u7684\u72af\u89c4\uff1b\u5439\u6389\u5df4\u574e\u5e03\u90a3\u4e2a\u8fdb\u7403\u660e\u663e\u624b\u8098\u52a8\u4f5c\uff0c\u65e2\u7136\u4f60\u5439\u4e86\uff0c\u8fd9\u79cd\u52a8\u4f5c\u51fa\u4e2a\u724c\u4e0d\u5408\u7406\uff1f\u6052\u5927\u8fdb\u7403\u540e\u7acb\u9a6cvar\u653e\u5927\u955c\u627e\u95ee\u9898\uff0c\u8fd9\u79cd\u64cd\u4f5c\u6211\u662f\u95fb\u6240\u672a\u95fb\u3002\u6362\u505a\u67d0\u961f\u5728\u81ea\u5df1\u4e3b\u573a\u8fd9\u6837\uff0c\u53c8\u662f\u4e00\u573a\u7f62\u8d5b\u4e86\u3002", "up": 20}, {"content": "\u5224\u6885\u65b9\u624b\u7403\u524d\u5df4\u574e\u5e03\u8e29\u4e86\u66fe\u8bda\u7684\u5934\u600e\u4e48\u4e0d\u5439\uff1fCNMVAR\u3002", "up": 16}], "1": [{"content": "\u9c81\u80fd\u592a\u4f9d\u8d56\u738b\u5927\u96f7\u548c\u5df4\u574e\u5e03\u4e86\u2026\u2026", "up": 213}, {"content": "\u8981\u4e0d\u662f\u6d6a\u5c04\uff0c\u5df4\u574e\u5e03\u8fd9\u573a\u80fd\u8fdb6\u4e2a\uff0c\uff0c\u8dd1\u4f4d\u4e00\u6d41\uff0c\u5c04\u95e8\u56fd\u8db3[\u6342\u8138]", "up": 196}, {"content": "\u56fd\u5b89\u4eca\u5e74\u8e22\u5f97\u771f\u4e0d\u9519\uff0c\u98ce\u683c\u8ddf\u5df4\u8428\u66fc\u57ce\u90fd\u6bd4\u8f83\u50cf\uff0c\u7b2c\u4e00\u573a\u8f93\u7ed9\u9c81\u80fd\u7eaf\u5c5e\u8d56\u65bd\u5bc6\u7279\u778e\u6392\u9635\u5bb9\uff0c\u540e\u51e0\u573a\u4e2d\u573a\u4e0a\u4e86\u6c60\u5fe0\u56fd\uff0c\u6734\u6210\u548c\u6bd4\u57c3\u62c9\u4e4b\u540e\uff0c\u52a0\u4e0a\u5965\u53e4\u65af\u6258\uff0c\u4e2d\u573a\u5b9e\u529b\u5728\u4e2d\u8d85\u7edd\u5bf9\u6570\u4e00\u6570\u4e8c\uff0c\u524d\u573a\u7d229\u4f9d\u7136\u7a33\u5b9a\uff0c\u7b49\u5f85\u5df4\u574e\u5e03\u9002\u5e94\u4e86\u4e2d\u8d85\uff0c\u52a0\u4e0a\u8d85\u7ea7\u65b0\u79c0\u97e6\u4e16\u8c6a\uff0c\u66ff\u8865\u6709\u4e8e\u5927\u5b9d\uff0c\u8fd8\u6709\u505c\u8d5b\u7684\u5f20\u7a00\u54f2\uff0c\u56fd\u5b89\u4eca\u5e74\u4e2d\u524d\u573a\u5f88\u5f3a\u5927\uff0c\u540e\u9632\u7ebf\u9010\u6e10\u78e8\u5408\u7684\u4e5f\u4e0d\u9519\uff0c\u4eca\u5e74\u6709\u5e0c\u671b\u4fdd\u4e09\u4e89\u4e00\u3002\u6700\u62c5\u5fc3\u7684\u5c31\u662f\u4f53\u80fd\uff0c\u9ad8\u4f4d\u903c\u62a2\u5bf9\u4f53\u529b\u8981\u6c42\u6781\u5927\uff0c\u522b\u50cf\u4e0a\u8d5b\u5b63\u4f3c\u7684\u540e\u534a\u6bb5\u6389\u961f\u5c31\u884c\u4e86\u3002\u867d\u8bf4\u8d62\u7684\u90fd\u7b97\u5f31\u961f\uff0c\u4f46\u8d77\u7801\u6bd4\u4e0a\u8d5b\u5b63\u8e22\u5f97\u597d\u591a\u4e86\uff0c\u4eca\u5e74\u771f\u6709\u5e0c\u671b\uff01\uff01\uff01", "up": 172}, {"content": "\u9c81\u80fd\u4eca\u665a\u80fd\u62ff\u4e00\u5206\u7684\u4e09\u5927\u529f\u81e3:\u738b\u5927\u96f7 \u5409\u5c14 \u5df4\u574e\u5e03[\u7b11\u54ed]", "up": 108}, {"content": "\u600e\u4e48\u611f\u89c9\u56fd\u5b89\u5916\u63f4\u90a3\u4e48\u591a\u5462[\u6342\u8138] \u5965\u53e4\u65af\u6258 \u6bd4\u57c3\u62c9 \u91d1\u6cf0\u5ef6 \u6734\u6210 \u6c60\u5fe0\u56fd \u5df4\u574e\u5e03\u2026\u2026[\u6342\u8138]", "up": 89}], "2": [{"content": "\u8fd9\u8981\u662f\u6309\u7167\u6628\u5929\u9c81\u80fd\u548c\u4eca\u5929\u5927\u8fde\u7684\u5224\u7f5a\uff0c\u8fd9\u5df4\u574e\u5e03\u7b2c\u4e00\u4e2a\u8fdb\u7403\u4e5f\u7b97\u72af\u89c4\u624d\u5bf9\u561b[xjbt]", "up": 664}, {"content": "\u8bf4\u56fd\u5b89\u90a3\u4e2a\u70b9\u7403\u662f\u4e0d\u61c2\u7403\u5c31\u662f\u56fd\u5b89\u7403\u8ff7\uff0c\u90a3\u7403\u9093\u6db5\u6587\u5148\u6345\u5230\u7403\u4e86\uff0c\u800c\u4e14\u52a8\u4f5c\u4e0d\u5927\uff0c\u4e0d\u81f3\u4e8e\u9020\u6210\u5df4\u574e\u5e03\u8dcc\u5012\uff0c\u5df4\u574e\u5e03\u6454\u5012\u662f\u81ea\u5df1\u51b2\u7684\u8fc7\u731b\uff0c\u5931\u53bb\u91cd\u5fc3\u6454\u5012\uff0c\u5982\u679c\u8fd9\u7403\u90fd\u7b97\u70b9\u7403\u6bcf\u573a\u7403\u8d5b\u8981\u52245\uff0c6\u4e2a\u70b9\u7403\uff0c\u4e00\u70b9\u8eab\u4f53\u63a5\u89e6\u4e5f\u80fd\u5224\u70b9\u7403\uff0c\u8fd8\u7ed9\u9ec4\u724c\u66f4\u662f\u65e0\u7a3d\u4e4b\u8c08\u3002", "up": 29}, {"content": "\u8fd9\u4e2a\u70b9\u7403\u4e0d\u5728\u4e8e\u8c01\u5148\u78b0\u5230\u7684 \u4e0d\u7ba1\u662f\u5df4\u574e\u5e03\u8fd8\u662f\u9093\u6db5\u6587\u8c01\u5148\u78b0\u5230\u7684 \u7403\u90fd\u5728\u5df4\u574e\u5e03\u63a7\u5236\u8303\u56f4\u5185 \u8eab\u4f4d\u5728\u524d\u968f\u65f6\u80fd\u6253\u95e8 \u9093\u6db5\u6587\u60f3\u89e3\u56f4\u7684\u811a\u7eca\u5012\u4e86\u5df4\u574e\u5e03 \u6240\u4ee5\u624d\u5439\u70b9\u7403 \u6ca1\u6bdb\u75c5 \u800c\u4e14\u8fd9\u4e2a\u7403\u5c5e\u4e8e\u7edd\u5bf9\u8fdb\u653b\u673a\u4f1a \u4e25\u683c\u6765\u8bf4\u76f4\u63a5\u7ea2\u724c\u4e5f\u662f\u53ef\u4ee5\u5427 \u9ec4\u724c\u6b63\u5e38", "up": 19}, {"content": "\u8fd9\u573a\u7403\uff0c\u88c1\u5224\u5224\u7f5a\u6ca1\u4ec0\u4e48\u95ee\u9898\u3002\u3002\u4e0a\u534a\u573a\u5c31\u679c\u65ad\u7ed9\u4e86\u56fd\u5b89\u4e24\u5f20\u724c\uff0c\u53ea\u80fd\u8bf4\u90d1\u9f99\u7b49\u81a8\u80c0\u4e86\uff0c\u8be5\u4f20\u7684\u7403\u6ca1\u4f20\u3002\u3002\u81f3\u4e8e\u6700\u540e\u7684\u70b9\u7403\uff0c\u5982\u679c\u4f60\u5224\u4e86\u70b9\u7403\uff0c\u7ed9\u724c\u662f\u6ca1\u95ee\u9898\u7684\uff0c\u78b0\u5230\u4e86\u5df4\u574e\u5e03\u3002\u3002\u90d1\u9f99\u56de\u53bb\u597d\u597d\u603b\u7ed3\u4e00\u4e0b\u5427\uff01\u4ea41200\u5b57\u68c0\u8ba8\u62a5\u544a\uff0c\u522b\u767e\u5ea6\uff0c\u81ea\u5df1\u60f3\u60f3\u4e3a\u4ec0\u4e48\u90a3\u7403\u4e0d\u4f20\uff1f\u4f20\u4e86\u4e00\u5207\u90fd\u7ed3\u675f\u4e86\u3002\u3002\u522b\u8c03\u4f83\u738b\u4e0a\u6e90\uff0c\u548c\u4ed6\u5173\u7cfb\u4e0d\u5927\u3002\u3002", "up": 11}, {"content": "\u5df4\u574e\u5e03\u8ddf\u5355\u5200\u6709\u4ec7\u554a", "up": 10}], "3": [{"content": "2:9\u7684\u6bd4\u8d5b\uff0c\u6123\u662f\u8ba9\u5df4\u574e\u5e03\u548c\u6bd4\u57c3\u62c9\u8e22\u62102:5[\u6ed1\u7a3d]", "up": 284}, {"content": "\u8fd9\u662f\u6211\u89c1\u8fc7\u5439\u7684\u6700\u5dee\u7684\u88c1\u5224\uff0c\u8fd8\u4e0d\u5982\u672c\u571f\u88c1\u5224\u3002\u63a7\u5236\u529b\u51e0\u4e4e\u4e3a\u96f6\uff0c\u5b8c\u5168\u6210\u4e3a\u4e86\u89c6\u9891\u88c1\u5224\u7684\u5080\u5121\u3002\u5f00\u59cb\u60f3\u8981\u628a\u5c3a\u5ea6\u653e\u5bbd\u677e\uff0c\u4fdd\u6301\u6d41\u7545\uff0c\u4f46\u4e5f\u4e0d\u80fd\u8fde\u72af\u89c4\u90fd\u4e0d\u5439\u554a\uff0c\u90a3\u8fb9\u7403\u8fdb\u4e86\u8fd9\u8fb9\u518d\u770b\u89c6\u9891\uff0c\u4e00\u770b\u63e1\u8349\u72af\u89c4\u4e86\uff0c\u8fd8\u633a\u660e\u663e\uff0c\u4e0d\u5439\u4e0d\u5408\u9002\u90a3\u4e48\u591a\u4eba\u770b\u7740\u5462\uff0c\u6700\u540e\u5f04\u5f97\u4e24\u8fb9\u4e0d\u8ba8\u597d\uff0c\u8981\u662f\u6309\u7167\u4ed6\u7684\u5c3a\u5ea6\u5df4\u574e\u5e03\u90a3\u7403\u5c31\u6ca1\u95ee\u9898\uff0c\u672c\u6765\u5e94\u8be5\u662f\u4e00\u573a\u7cbe\u5f69\u7684\u699c\u9996\u5bf9\u51b3\uff0c\u8e22\u5f97\u65ad\u65ad\u7eed\u7eed\uff0c\u8fd8\u6ee1\u573a\u4e89\u8bae\u3002\u4e0d\u8fc7\u6052\u5927\u786e\u5b9e\u914d\u5f97\u4e0a\u8fd9\u573a\u80dc\u5229\uff0c\u5916\u63f4\u4e2a\u4eba\u80fd\u529b\u592a\u7a81\u51fa\u4e86\uff0c\u9ad8\u62c9\u7279\u548c\u5854\u5229\u65af\u5361\u7684\u524d\u573a\u914d\u5408\u5f88\u9ed8\u5951\uff0c\u7edd\u6740\u90a3\u4e2a\u914d\u5408\uff0c\u9ad8\u62c9\u7279\u8fd8\u6ca1\u89e6\u7403\uff0c\u5854\u5229\u65af\u5361\u5c31\u5df2\u7ecf\u542f\u52a8\u4e86\uff0c\u6362\u8c01\u4e5f\u8ffd\u4e0d\u4e0a\u3002\u56fd\u5b89\u5916\u63f4\u66f4\u56e2\u961f\u4e00\u4e9b\uff0c\u5728\u9002\u5e94\u4e86\u6052\u5927\u903c\u62a2\u7684\u5f3a\u5ea6\u4e4b\u540e\u4e5f\u521b\u9020\u4e86\u4e00\u4e9b\u673a\u4f1a\uff0c\u53ef\u60dc\u524d\u9762\u653e\u4e2a\u5df4\u987f\uff0c\u6ca1\u6709\u901f\u5ea6\u4e5f\u6ca1\u6709\u7075\u6027\uff0c\u6d6a\u8d39\u4e86\u4e0d\u5c11\u597d\u7403\u3002\u6bd4\u8d5b\u8fd8\u662f\u5f88\u7cbe\u5f69\u3002\u9664\u4e86\u8fd9\u4e2a\u50bb \u6bd4\u88c1\u5224\u6405\u548c\u4ee5\u5916\u3002\u8fd8\u4e0d\u5982\u9a6c\u5b81\uff0c\u867d\u7136\u9a6c\u5b81\u5439\u7f5a\u6bd4\u8f83\u4e25\u683c\uff0c\u4f46\u662f\u6700\u8d77\u7801\u80fd\u63a7\u5236\u4f4f\u573a\u9762\uff0c\u6052\u5927\u8981\u662f\u4e0b\u4e00\u573a\u628a\u4e0a\u6e2f\u529e\u4e86\uff0c\u57fa\u672c\u51a0\u519b\u4e5f\u5c31\u7a33\u4e86\uff0c\u4ee5\u6052\u5927\u7684\u5b9e\u529b\uff0c\u5b9e\u81f3\u540d\u5f52\uff0c\u56fd\u5b89\u7403\u8ff7\u7559[\u52a0\u6cb9]", "up": 24}, {"content": "\u5ba2\u89c2\u8bc4\u7403\u3002\u56fd\u5b89\u8fd9\u8fb9\u65bd\u5bc6\u7279\u8fd9\u573a\u8981\u5e72\u4ec0\u4e48\u6211\u6ca1\u770b\u61c2\u3002\u5355\u4ece\u8fd9\u573a\u6765\u770b\uff0c\u5df4\u574e\u5e03\u662f\u4e0d\u662f\u6c34\u8d27\u4e0d\u597d\u8bf4\uff0c\u4f46\u663e\u7136\u4e0d\u662f\u9ed1\u53c8\u786c\u81ea\u5df1\u5355\u5e72\u7c7b\u578b\u7684\uff0c\u5c0f\u6280\u672f\u770b\u8d77\u6765\u4e5f\u4e0d\u5982\u7d22\u91cc\u4e9a\u8bfa\uff0c\u518d\u770b\u4e24\u573a\u518d\u8bf4\u5427\uff0c\u4f46\u8fd9\u4e24\u4e2a\u524d\u950b\u4e0d\u80fd\u540c\u65f6\u4e0a\u4e86\u3002\u664b\u9e4f\u7fd4\u662f\u7edd\u5bf9\u4e0d\u80fd\u7528\u4e86\uff0c\u4f5c\u4e2d\u536b\u592a\u6bdb\u7cd9\uff0c\u4f5c\u4e3a\u8fb9\u536b\u66f4\u4e0d\u884c\u3002\u65b0\u6765\u7684\u90a3\u4e2a\u5218\u6b22\u66ff\u8865\u7528\u7528\u8fd8\u884c\uff0c\u6253\u4e0d\u4e86\u9996\u53d1\u3002\u540e\u8170\u6734\u6210\u548c\u6c60\u5fe0\u56fd\u81f3\u5c11\u4e0a\u4e00\u4e2a\uff0c\u628a\u50b2\u9aa8\u9876\u5230\u524d\u8170\u4e0a\u3002\u95e8\u5c06\u4faf\u68ee\u53cd\u5e94\u548c\u5f00\u5927\u811a\u80fd\u529b\u582a\u5fe7\uff0c\u4e0d\u77e5\u9053\u4e3a\u5565\u4e0d\u7528\u6c60\u6587\u4e00\u3002\u674e\u78ca\u8fd8\u662f\u653e\u5728\u5de6\u540e\u536b\u4e0a\u5427\uff0c\u51fa\u7403\u80fd\u529b\u548c\u5927\u5c40\u89c2\u8e22\u4e0d\u4e86\u540e\u8170\u3002U23\u9996\u53d1\u7528\u5df4\u987f\u6bd4\u8f83\u597d\uff0c\u97e6\u4e16\u8c6a\u662f\u4e00\u4e2a\u96f7\uff0c\u9996\u53d1\u98ce\u9669\u592a\u5927\uff0c\u53ef\u4ee5\u7528\u505a\u66ff\u8865\u5947\u5175\u3002\u8fd9\u6837\u4e0b\u6765\uff0c\u9635\u5bb9\u53ef\u4ee5\u662f\u8fd9\u6837:\u6c60\u6587\u4e00\uff1b\u674e\u78ca\uff0c\u4e8e\u6d0b\uff0c\u96f7\u817e\u9f99\uff0c\u59dc\u6d9b\uff1b\u6c60\u5fe0\u56fd\uff0c\u6734\u6210\uff08\u5415\u9e4f\uff09\uff1b\u6bd4\u57c3\u62c9\uff0c\u5965\u53e4\u65af\u6258\uff0c\u5df4\u987f\uff08\u97e6\u4e16\u8c6a\uff09\uff1b\u5df4\u574e\u5e03\uff08\u7d22\u91cc\u4e9a\u8bfa\uff09\u3002\u9c81\u80fd\u8fd9\u8fb9\u4eca\u5929\u8e22\u5f97\u4e0d\u9519\uff0cU23\u59da\u5747\u665f\u4e0d\u9519\uff0c\u811a\u6cd5\u548c\u7ec4\u7ec7\u80fd\u529b\u4ee5\u540e\u53ef\u4ee5\u63a5\u84bf\u4fca\u95f5\u7684\u73ed\u4e86\u3002\u9c81\u80fd\u7684\u4eba\u624d\u50a8\u5907\u77ed\u671f\u5185\u4e5f\u4e0d\u7528\u5728\u5927\u9762\u79ef\u4e70\u4eba\u4e86\uff0c\u627e\u4e2a\u597d\u6559\u7ec3\u591a\u591a\u6253\u78e8\u5427\uff0c\u672a\u6765\u53ef\u671f\u3002", "up": 20}, {"content": "\u201c\u6052\u5927\u5c31\u662f\u9760\u5916\u63f4\uff0c\u4e0d\u50cf\u67d0\u5b89\u6bd4\u57c3\u62c9\u3001\u5df4\u574e\u5e03\u3001\u5965\u53e4\u65af\u6258\u5168\u9762\u5f00\u82b1\u201d", "up": 18}, {"content": "\u4e0d\u77e5\u9053\u5927\u5bb6\u6ce8\u610f\u5230\u4e00\u4e2a\u955c\u5934\u6ca1\u6709\uff0c\u6885\u82b3\u624b\u7403\u524d\uff0c\u5df4\u574e\u5e03\u8e29\u8e0f\u589e\u8bda\u7684\u5934\uff0c\u7b97\u4e0d\u7b97\u72af\u89c4\uff1f", "up": 11}]};
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
