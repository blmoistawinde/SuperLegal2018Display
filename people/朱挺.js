var data = {"person_name": "\u6731\u633a", "nicknames": "\u6731\u633a", "aspects": {"\u7403\u5458": 0.38249127217571693, "\u52a9\u653b": 0.4235201030042696, "\u66ff\u8865": 0.36400677517253277, "\u8db3\u7403": 0.4087544214511638, "\u56fd\u5bb6\u961f": 0.3824588089314826, "\u540e\u8170": 0.4906918241445123, "\u8fb9\u8def": 0.6038135428494826, "\u5916\u63f4": 0.304074605024316, "\u7403\u8ff7": 0.9444055257254448, "\u8db3\u534f": 0.4108656597832099}, "overall_heat": 67.0, "overall_polar": -0.104, "name": "360", "nationality": "\u4e2d\u56fd", "position": "\u540e\u536b", "goal": "1", "assist": "2", "team_name": "\u5927\u8fde\u4e00\u65b9", "name_en": "Ting Zhu", "age": "33", "height": "183", "weight": "75"};
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
var topic_keywords = {"0": [{"name": "\u6731\u633a", "value": 0.08386958386958387}, {"name": "\uff1f", "value": 0.03453453453453454}, {"name": "\u8e22", "value": 0.021664521664521666}, {"name": "\u540e\u536b", "value": 0.021664521664521666}, {"name": "\u5927\u8fde", "value": 0.015229515229515229}, {"name": "\u7403\u5458", "value": 0.013084513084513085}, {"name": "\u738b\u8000\u9e4f", "value": 0.010939510939510939}, {"name": "\u6c6a\u664b\u8d24", "value": 0.010939510939510939}, {"name": "\u674e\u5e05", "value": 0.010939510939510939}, {"name": "\u597d", "value": 0.010939510939510939}, {"name": "\u4e3b\u529b", "value": 0.010939510939510939}, {"name": "\u4f4d\u7f6e", "value": 0.010939510939510939}, {"name": "\uff01", "value": 0.010939510939510939}, {"name": "\u6c34\u5e73", "value": 0.008794508794508793}, {"name": "\u54c8\u54c8\u54c8", "value": 0.008794508794508793}, {"name": "\u524d", "value": 0.008794508794508793}, {"name": "\u8db3\u7403", "value": 0.00664950664950665}, {"name": "\u66ff\u8865", "value": 0.00664950664950665}, {"name": "\u8d70", "value": 0.00664950664950665}, {"name": "\u6253", "value": 0.00664950664950665}, {"name": "\u672c\u6765", "value": 0.00664950664950665}, {"name": "\u6731\u6653\u521a", "value": 0.00664950664950665}, {"name": "\u79e6\u5347", "value": 0.00664950664950665}, {"name": "\u771f\u662f", "value": 0.00664950664950665}, {"name": "\u78e8\u5408", "value": 0.00664950664950665}, {"name": "\u4e24\u4e2a", "value": 0.00664950664950665}, {"name": "\u961f", "value": 0.00664950664950665}, {"name": "\u5468\u633a", "value": 0.00664950664950665}, {"name": "\u540e\u8170", "value": 0.00664950664950665}, {"name": "\u518d", "value": 0.00664950664950665}], "1": [{"name": "\u6731\u633a", "value": 0.0876570180229383}, {"name": "\uff01", "value": 0.02484980884762425}, {"name": "\u52a9\u653b", "value": 0.019388312397596943}, {"name": "\u5927\u8fde", "value": 0.016657564172583288}, {"name": "\uff1f", "value": 0.013926815947569634}, {"name": "\u7403", "value": 0.011196067722555979}, {"name": "\u5439", "value": 0.011196067722555979}, {"name": "\u88c1\u5224", "value": 0.011196067722555979}, {"name": "\u611f\u89c9", "value": 0.011196067722555979}, {"name": "\u5927\u594e", "value": 0.008465319497542327}, {"name": "\u6700\u540e", "value": 0.008465319497542327}, {"name": "\u4ee5\u524d", "value": 0.008465319497542327}, {"name": "\u4e16\u9752\u8d5b", "value": 0.008465319497542327}, {"name": "\u8001\u5c06", "value": 0.008465319497542327}, {"name": "\u54ed", "value": 0.008465319497542327}, {"name": "\u7b11", "value": 0.008465319497542327}, {"name": "\u4e00\u4e0b", "value": 0.008465319497542327}, {"name": "\u52a8\u4f5c", "value": 0.008465319497542327}, {"name": "\u524d\u950b", "value": 0.005734571272528673}, {"name": "\u8e22", "value": 0.005734571272528673}, {"name": "\u592a", "value": 0.005734571272528673}, {"name": "\u6bdb\u75c5", "value": 0.005734571272528673}, {"name": "\u4f20\u4e2d", "value": 0.005734571272528673}, {"name": "\u4eba\u7403\u5206\u8fc7", "value": 0.005734571272528673}, {"name": "\u6b21", "value": 0.005734571272528673}, {"name": "\u674e\u5e05", "value": 0.005734571272528673}, {"name": "\u7403\u5458", "value": 0.005734571272528673}, {"name": "\u7b2c\u4e00", "value": 0.005734571272528673}, {"name": "\u7533\u82b1", "value": 0.005734571272528673}, {"name": "\u4e00\u76f4", "value": 0.005734571272528673}]};
var topic_summary = {"0": [{"content": "\u5b59\u56fd\u6587\u4e0a\u573a\u524d4\u6b21\u62ff\u7403\u5168\u90e8\u5931\u8bef\uff0c\u8fd9\u6c34\u5e73\u5c31\u6eda\u86cb\u5427\uff0c\u6731\u633a\u4e5f\u4e00\u8d77\u6eda\u5427\uff0c\u8e22\u4e86\u4e00\u8f88\u5b50\u7403\u5546\u4e5f\u662f\u96f6\uff0c\u4e0d\u4e0a\u76d6\u5766\u5c31\u662f\u81ea\u5e9f\u6b66\u529f", "up": 21}, {"content": "\u6731\u633a\u94f2\u8fd9\u4e00\u4e0b\u76ee\u7684\u662fTM\u4ec0\u4e48\uff0c\u90fd\u5df2\u7ecf\u5361\u4f4f\u8eab\u4f4d\u4e86\uff0c\u96be\u9053\u5c31\u662f\u60f3\u9001\u4e2a\u70b9\u7403\uff1f", "up": 10}, {"content": "\u6731\u633a\u518d\u8fd9\u4e48\u8e22\u4e0b\u53bb \u6c6a\u664b\u8d24\u56de\u6765\u53ef\u5c31\u6ca1\u4f4d\u7f6e\u4e86\uff0c\u54c8\u54c8\u54c8\u54c8\u54c8", "up": 9}, {"content": "\u6709\u6ca1\u6709\u53d1\u73b0\uff0c\u6731\u633a\u7684\u8868\u73b0\u8d8a\u6765\u8d8a\u597d\uff01", "up": 7}, {"content": "\u5927\u8fde\u8db3\u7403\u76ee\u524d\u51e0\u4e2a\u95ee\u9898\uff1a1.\u9635\u5bb9\u539a\u5ea6\uff0c\u738b\u8000\u9e4f\u4f24\u4e86\u9632\u5b88\u964d\u4e86\u4e2a\u6863\u6b21\uff0c\u6c6a\u664b\u8d24\u6731\u633a\u5e73\u65f6\u518d\u600e\u4e48\u5410\u69fd\u5b9e\u529b\u4e5f\u6bd4\u66ff\u8865\u7684\u53f3\u8def\u5f3a\u591a\u4e86\u30022.\u5f15\u63f4\u601d\u8def\uff0c\u5916\u63f4\u5f15\u8fdb\u6beb\u4e0d\u624b\u8f6f\uff0c\u4f46\u662f\u5185\u63f4\u8fc7\u5ea6\u8ff7\u4fe1\u5927\u8fde\u672c\u571f\u7403\u5458\u30023.\u4f5c\u4e3a\u751f\u6d3b\u5728\u5927\u8fde\u7684\u5916\u5730\u4eba\uff0c\u6839\u636e\u8fd9\u51e0\u5e74\u7684\u89c1\u95fb\uff0c\u6709\u4e9b\u4e8b\u60c5\u8981\u8bf4\u548czz\u65e0\u5173\u6211\u662f\u4e0d\u4fe1\u7684\u3002", "up": 7}], "1": [{"content": "\u79e6\u5347\u8e29\u3001\u4e16\u6797\u8d5e\u3001\u6731\u633a\u5478\u3001\u8096\u667a\u8131\u3001\u638c\u58f0\u9001\u7ed9\u4f60\u4e0b\u4e00\u4f4d[\u8870]", "up": 111}, {"content": "\u8001\u5c06\u4e0d\u8001\uff01\u6731\u633a\u90a3\u4e00\u4e0b\u62c9\u7403\u8f6c\u8eab\u8fc7\u4eba\uff0c\u4f20\u4e2d\u52a9\u653b\uff0c\u7edd\u5bf9\u9a9a\u6c14\uff0c\u6574\u573a\u4e5f\u53ef\u5708\u53ef\u70b9\uff0c\u638c\u58f0\u9001\u7ed9\u4f60\uff01\uff01\uff01", "up": 67}, {"content": "\u6731\u633a\u679c\u7136\u662f\u524d\u950b\u51fa\u9053\uff0c\u6700\u540e\u4e00\u7403\uff0c\u529f\u4e0d\u53ef\u6ca1\uff01", "up": 55}, {"content": "\u88c1\u5224\u6234\u7740\u6709\u8272\u773c\u955c\uff0c\u5224\u7f5a\u5c3a\u5ea6\u5dee\u7684\u592a\u591a\uff0c\u6731\u633a\u5927\u52a8\u4f5c2\u6b21\u8dfa\u811a\u6ca1\u4e8b\uff0c\u7279\u8c22\u62c9\u8fc7\u5b8c\u4eba\uff0c\u88ab\u76f4\u63a5\u4e0a\u624b\u6ca1\u724c\uff0c\u4e70\u4e70\u63d0\u6b63\u5e38\u4e89\u5934\u7403\uff0c\u4e24\u624b\u90fd\u653e\u7740\uff0c\u4f60\u5224\u72af\u89c4\u8fd8\u9ec4\u724c\u3002\u3002\u3002\u5475\u5475", "up": 23}, {"content": "\u8fd9\u573a\u6bd4\u8d5b\u6211\u4eec\u82cf\u5b81\u8f93\u4e86\u6ca1\u8bdd\u8bf4\uff0c\u5927\u8fde\u8e22\u5f97\u66f4\u597d\uff0c\u4f46\u88c1\u5224\u7684\u5224\u7f5a\u592a\u4e0d\u4e00\u81f4\u4e86\uff0c\u5176\u4ed6\u4e0d\u8bf4\u4e86\uff0c\u5c31\u6731\u633a2\u6b21\u5241\u811a\uff0c1\u6b21\u4eae\u978b\u5e95\u98de\u94f2\uff0c\u4e00\u5f20\u9ec4\u724c\u90fd\u6ca1\u6709\uff1f\u6700\u540e\u65f6\u95f4\u5230\u4e86\uff0c\u8d85\u8fc740\u591a\u79d2\u8fd8\u7ed9\u65f6\u95f4\u6362\u4eba\uff1f", "up": 11}]};
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
