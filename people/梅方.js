var data = {"person_name": "\u6885\u65b9", "nicknames": "\u6885\u65b9", "aspects": {"\u72af\u89c4": 0.5132761582415806, "\u624b\u7403": 0.8301978623125951, "\u8fdb\u7403": 0.25385040514604434, "\u9ec4\u724c": 0.5160434294203861, "\u7ea2\u724c": 1.0, "\u505c\u8d5b": 0.9211751092416905, "\u70b9\u7403": 0.4566935660476313, "\u6bd4\u8d5b": 0.4651340187846802, "\u540e\u9632": 0.35995841321510635, "\u7403\u5458": 0.5328033469882413}, "overall_heat": 76.0, "overall_polar": 0.352, "name": "4", "nationality": "\u4e2d\u56fd", "position": "\u540e\u536b", "goal": "0", "assist": "0", "team_name": "\u5e7f\u5dde\u6052\u5927\u6dd8\u5b9d", "name_en": "Mei Fang", "age": "29", "height": "184", "weight": "74"};
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
var topic_keywords = {"0": [{"name": "\u6885\u65b9", "value": 0.06086745231442109}, {"name": "\uff01", "value": 0.029279552909731502}, {"name": "\u6052\u5927", "value": 0.013485603207386707}, {"name": "\u4e70", "value": 0.012270683999514032}, {"name": "\u90d1\u667a", "value": 0.009840845583768678}, {"name": "\u6253", "value": 0.009840845583768678}, {"name": "\u5389\u5bb3", "value": 0.008625926375896003}, {"name": "\u518d", "value": 0.008625926375896003}, {"name": "\u4eba", "value": 0.008625926375896003}, {"name": "\u8e22", "value": 0.008625926375896003}, {"name": "\u505c\u8d5b", "value": 0.007411007168023326}, {"name": "\u4e70\u56de\u6765", "value": 0.007411007168023326}, {"name": "\u6362", "value": 0.006196087960150649}, {"name": "\u56fd\u5b89", "value": 0.006196087960150649}, {"name": "\u540e\u9632", "value": 0.006196087960150649}, {"name": "\u4e0a\u6e2f", "value": 0.006196087960150649}, {"name": "\u80af\u5b9a", "value": 0.006196087960150649}, {"name": "\u590d\u51fa", "value": 0.006196087960150649}, {"name": "\u4e4b\u540e", "value": 0.006196087960150649}, {"name": "\u5916\u63f4", "value": 0.006196087960150649}, {"name": "\u4e0b\u573a", "value": 0.006196087960150649}, {"name": "\u7403\u5458", "value": 0.006196087960150649}, {"name": "\uff0e", "value": 0.006196087960150649}, {"name": "\u90dc\u6797", "value": 0.004981168752277973}, {"name": "\u5f20", "value": 0.004981168752277973}, {"name": "\u7a33", "value": 0.004981168752277973}, {"name": "\u4e24\u4eba", "value": 0.004981168752277973}, {"name": "\u6d17", "value": 0.004981168752277973}, {"name": "\u6768\u7acb\u745c", "value": 0.004981168752277973}, {"name": "\u7231\u6155", "value": 0.004981168752277973}], "1": [{"name": "\u6885\u65b9", "value": 0.030702161209535297}, {"name": "\uff01", "value": 0.021426583804841855}, {"name": "\u72af\u89c4", "value": 0.014933679621556445}, {"name": "\u5439", "value": 0.014006121881087099}, {"name": "\u90d1\u667a", "value": 0.014006121881087099}, {"name": "\u8fdb\u7403", "value": 0.014006121881087099}, {"name": "\uff1f", "value": 0.013078564140617754}, {"name": "\u6052\u5927", "value": 0.013078564140617754}, {"name": "\u88c1\u5224", "value": 0.01215100640014841}, {"name": "\u4e00\u4e2a", "value": 0.011223448659679065}, {"name": "\u5df4\u574e\u5e03", "value": 0.009368333178740376}, {"name": "\u95ee\u9898", "value": 0.009368333178740376}, {"name": "\u624b\u7403", "value": 0.009368333178740376}, {"name": "\u52a8\u4f5c", "value": 0.008440775438271033}, {"name": "var", "value": 0.007513217697801689}, {"name": "\u9ad8\u62c9\u7279", "value": 0.007513217697801689}, {"name": "\u8e29", "value": 0.006585659957332344}, {"name": "\u66fe\u8bda", "value": 0.006585659957332344}, {"name": "\u70b9\u7403", "value": 0.006585659957332344}, {"name": "VAR", "value": 0.006585659957332344}, {"name": "\u4e4b\u524d", "value": 0.005658102216863}, {"name": "\u9ec4\u724c", "value": 0.005658102216863}, {"name": "\u5e94\u8be5", "value": 0.005658102216863}, {"name": "\u7403", "value": 0.005658102216863}, {"name": "\u5224", "value": 0.005658102216863}, {"name": "\u80e1\u5c14\u514b", "value": 0.005658102216863}, {"name": "\u9093\u6db5\u6587", "value": 0.004730544476393655}, {"name": "\u540e\u8170", "value": 0.004730544476393655}, {"name": "\u524d", "value": 0.004730544476393655}, {"name": "\u6885\u897f", "value": 0.004730544476393655}]};
var topic_summary = {"0": [{"content": "\u8d5e\u4e0b\u6885\u65b9\uff0c\u4f24\u6108\u5f52\u6765\u4e4b\u540e\u72b6\u6001\u5f88fit\uff0c\u5e0c\u671b\u80fd\u4fdd\u6301[\u5389\u5bb3][\u5389\u5bb3]", "up": 923}, {"content": "\u4fdd\u5229\u5c3c\u5965:\u4e00\u4f1a\u548c\u6885\u897f\u8e22\u7403\uff0c\u4e00\u4f1a\u548c\u6885\u65b9\u8e22\u7403\uff0c\u5b8c\u7f8e[\u7231\u6155][\u7231\u6155]", "up": 246}, {"content": "\u6052\u5927\u7684\u540e\u9632\u9664\u4e86\u6885\u65b9\u9760\u8c31\u4e00\u70b9\uff0c\u5f205\u3001\u51af6\u5df2\u7ecf\u4e0d\u80fd\u7528\u4e86\uff0c\u662f\u4e24\u4e2a\u5b9a\u65f6\u70b8\u5f39\uff01\u8fd9\u6837\u70c2\u7684\u540e\u9632\u7ebf\uff0c\u5361\u7eb3\u74e6\u7f57\u5fc3\u91cc\u7adf\u7136\u6ca1\u70b9 \u6570\uff0c\u672c\u573a\u6768\u7acb\u745c\u72b6\u6001\u8fd8\u53ef\u4ee5\uff0c\u8981\u4e48\u4e0d\u6362\u8981\u4e48\u5f53\u673a\u7acb\u65ad\u6362\u90dc\u6797\uff0c\u7adf\u7136\u6362\u90d1\u9f99\uff1f\u6052\u5927\u6ca1\u620f\uff0c\u5361\u7eb3\u74e6\u7f57\u6bd4\u91cc\u76ae\u3001\u65af\u79d1\u62c9\u91cc\u5dee\u592a\u591a\uff0c\u8981\u8ba9\u8bb8\u5bb6\u5370\u6000\u7591\u4eba\u751f\u5566\uff01", "up": 13}, {"content": "\u63a5\u53d7\u8fc7\u897f\u65b9\uff08\u6885\u897f\u548c\u6885\u65b9\uff09\u6559\u80b2\u7684\u4eba\u5c31\u662f\u4e0d\u4e00\u6837\uff0c\u52a0\u6cb9\u66b4\u529b\u9e1f!\u52a0\u6cb9\u6052\u5927!", "up": 9}, {"content": "\u6885\u65b9\uff1a\u7279\u8c22\u62c9\u4f60\u5389\u5bb3\ud83d\ude04\ud83d\udc4d", "up": 8}], "1": [{"content": "\u4e25\u683c\u6765\u8bf4\uff0c\u88c1\u5224\u5224\u7f5a\u6ca1\u5565\u95ee\u9898\uff01\u6885\u65b9\u786e\u5b9e\u6709\u4e00\u4e2a\u8f7b\u5fae\u5f20\u5f00\u624b\u81c2\u62e6\u622a\u76ae\u7403\u7684\u52a8\u4f5c\uff0c\u5df4\u574e\u5e03\u4e5f\u6709\u4e00\u4e2a\u624b\u538b\u4eba\u7684\u52a8\u4f5c\uff0c\u9093\u6db5\u6587\u63a8\u4eba\u4e5f\u6ca1\u6709\u5f02\u8bae\u3002\u81f3\u4e8e\u90d1\u667a\u90a3\u4e2a\u72af\u89c4\uff0c\u9996\u5148\u90d1\u667a\u5148\u5360\u636e\u8eab\u4f4d\uff0c\u786e\u5b9e\u6709\u4e2a\u5411\u540e\u6325\u624b\u7684\u4fdd\u62a4\u52a8\u4f5c\uff0c\u5439\u72af\u89c4\u4e5f\u8bf4\u5f97\u8fc7\u53bb\u3002\u53ea\u4e0d\u8fc7\u8981\u5439\u5e94\u8be5\u5148\u5439\uff0c\u6700\u540e\u8fdb\u4e86\u7403\u518d\u5439\u5c31\u8bf4\u4e0d\u8fc7\u53bb\u4e86\uff01\u6309\u8fd9\u4e2a\u8282\u594f\uff0c\u6bcf\u5206\u949f\u90fd\u53ef\u80fd\u627e\u5230\u72af\u89c4\u7684\u955c\u5934\uff01\u6700\u540e\u603b\u7ed3\uff0c\u88c1\u5224\u6c34\u5e73\u592a\u4f4e\uff0c\u6ca1\u6709\u4e3b\u89c1\uff0c\u6839\u672c\u6ca1\u7406\u89e3VAR\u7684\u610f\u4e49\uff0c\u6bc1\u4e86\u4e00\u573a\u672c\u8be5\u7cbe\u5f69\u7684\u6bd4\u8d5b\uff01\u8db3\u534f\u88c1\u59d4\u4f1a\u4e5f\u662f\u4e00\u5e2eSB\uff0c\u9009\u88c1\u5224\u592a\u6709\u95ee\u9898\uff01", "up": 134}, {"content": "\u88c1\u5224\u4e0d\u884c\uff0c\u90d1\u667a\u6ca1\u6709\u660e\u663e\u72af\u89c4\u52a8\u4f5c\uff0c\u89c6\u9891\u4e5f\u6ca1\u770b\u5230\u6709\u6253\u5230\u7eff\u8272\u7403\u5458\uff0c\u8fd9\u6837\u8fdb\u7403\u60c5\u51b5\u4e0b\u5c45\u7136\u88ab\u5439\u51fa\u6765\uff0c\u53cd\u8fc7\u6765\u4e4b\u524d\u7eff\u961f\u8fdb\u653b\u76f4\u63a5\u8e29\u66fe\u8bda\u5934\u88c1\u5224\u4e0d\u5439\u624d\u6709\u4e86\u8865\u5c04\u6885\u65b9\u7684\u624b\u7403\uff0c2\u4e2a\u65b9\u9762\u90fd\u662f\u6052\u5927\u5403\u88c1\u5224\u4e8f\uff0c\u82e5\u975e\u7eff\u8863\u7403\u5458\u4e0d\u4e89\u6c14\uff0c\u6052\u5927\u5c31\u88ab\u5bb3\u60e8\u4e86\u3002", "up": 93}, {"content": "\u6709\u70b9\u6211\u4e0d\u662f\u5f88\u660e\u767d\uff0c\u6885\u65b9\u624b\u7403\u6ca1\u9519\uff0c\u4f46\u4e4b\u524d\u51e0\u79d2\u66fe\u8bda\u88ab\u8e29\u5934\u5c45\u7136\u6ca1\u6709\u5224\u7f5a\u72af\u89c4\uff0cVAR\u53ef\u4ee5\u56de\u653e\uff0c\u89c6\u9891\u88c1\u5224\u4e3a\u4ec0\u4e48\u4e0d\u63d0\u9192\uff1fOK\uff0c\u5982\u679c\u6309\u7167\u8fd9\u79cd\u5224\u7f5a\u5c3a\u5ea6\uff0c\u4e3a\u4ec0\u4e48\u9ad8\u62c9\u7279\u6ca1\u6709\u8d8a\u4f4d\u8fdb\u7403\uff0c\u5374\u5439\u7f5a\u4e4b\u524d\u90d1\u667a\u7684\u72af\u89c4\uff1f \u4e3b\u88c1\u6211\u89c9\u5f97\u95ee\u9898\u4e0d\u5927\uff0c\u89c6\u9891\u88c1\u5224\u7edd\u903c\u5411\u7740\u56fd\u5b89\u3002", "up": 35}, {"content": "\u8db3\u534f\u7acb\u573a\u975e\u5e38\u660e\u663e\u7684\u4e00\u573a\u4e86\uff1a\u5df4\u574e\u5e03\u5148\u8e29\u4e86\u66fe\u8bda\uff0c\u7136\u540e\u6885\u65b9\u624b\u7403\uff0c\u76f4\u63a5var\u5439\u70b9\u7403\uff1b\u9ad8\u62c9\u7279\u8fdb\u7684\u90a3\u7403\uff0c\u8fd8\u6709\u9093\u6db5\u6587\u7981\u533a\u88ab\u62cc\u5012\uff0c\u53cd\u8fc7\u6765\u5c31\u53ef\u4ee5var\u56de\u6eaf\u53bb\u627e\u4e4b\u524d\u7684\u72af\u89c4\uff1b\u5439\u6389\u5df4\u574e\u5e03\u90a3\u4e2a\u8fdb\u7403\u660e\u663e\u624b\u8098\u52a8\u4f5c\uff0c\u65e2\u7136\u4f60\u5439\u4e86\uff0c\u8fd9\u79cd\u52a8\u4f5c\u51fa\u4e2a\u724c\u4e0d\u5408\u7406\uff1f\u6052\u5927\u8fdb\u7403\u540e\u7acb\u9a6cvar\u653e\u5927\u955c\u627e\u95ee\u9898\uff0c\u8fd9\u79cd\u64cd\u4f5c\u6211\u662f\u95fb\u6240\u672a\u95fb\u3002\u6362\u505a\u67d0\u961f\u5728\u81ea\u5df1\u4e3b\u573a\u8fd9\u6837\uff0c\u53c8\u662f\u4e00\u573a\u7f62\u8d5b\u4e86\u3002", "up": 20}, {"content": "\u5224\u6885\u65b9\u624b\u7403\u524d\u5df4\u574e\u5e03\u8e29\u4e86\u66fe\u8bda\u7684\u5934\u600e\u4e48\u4e0d\u5439\uff1fCNMVAR\u3002", "up": 16}]};
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
