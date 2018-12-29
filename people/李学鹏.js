var data = {"person_name": "\u674e\u5b66\u9e4f", "nicknames": "\u674e\u5b66\u9e4f", "aspects": {"\u7403\u5458": 0.4616398490504972, "\u6bd4\u8d5b": 0.5092642198965355, "\u7403\u8ff7": 0.2880114275367085, "\u8fdb\u653b": 0.6189104612811225, "\u4f20\u4e2d": 0.484026324317204, "\u9632\u5b88": 0.6278013805986364, "\u505c\u8d5b": 0.3253270512210477, "\u8fb9\u8def": 0.7175868906573176, "\u8fdb\u7403": 0.4170932404341056, "\u72af\u89c4": 0.7422606903270158}, "overall_heat": 141.0, "overall_polar": 0.076, "name": "19", "nationality": "\u4e2d\u56fd", "position": "\u540e\u536b", "goal": "0", "assist": "6", "team_name": "\u5e7f\u5dde\u6052\u5927\u6dd8\u5b9d", "name_en": "Li Xuepeng", "age": "30", "height": "185", "weight": "76"};
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
var topic_keywords = {"0": [{"name": "\u674e\u5b66\u9e4f", "value": 0.04814179531160664}, {"name": "\u5c81", "value": 0.025271583762149802}, {"name": "\u51af\u6f47\u9706", "value": 0.012692967409948542}, {"name": "\u6052\u5927", "value": 0.012692967409948542}, {"name": "\u9ad8\u62c9\u7279", "value": 0.0115494568324757}, {"name": "\uff01", "value": 0.010405946255002858}, {"name": "\u4e8e\u6c49\u8d85", "value": 0.010405946255002858}, {"name": "\u6ed1\u7a3d", "value": 0.010405946255002858}, {"name": "\u7403\u5458", "value": 0.009262435677530016}, {"name": "\u5f20\u7433\u8283", "value": 0.009262435677530016}, {"name": "\u5927\u8fde", "value": 0.008118925100057175}, {"name": "\u90d1\u667a", "value": 0.0069754145225843335}, {"name": "\u90dc\u6797", "value": 0.0069754145225843335}, {"name": "\u987e\u64cd", "value": 0.0069754145225843335}, {"name": "\u9ec4\u535a\u6587", "value": 0.0069754145225843335}, {"name": "\u8e22", "value": 0.005831903945111492}, {"name": "\u771f", "value": 0.005831903945111492}, {"name": "\u963f\u5170", "value": 0.005831903945111492}, {"name": "29", "value": 0.005831903945111492}, {"name": "\u738b\u5927\u96f7", "value": 0.00468839336763865}, {"name": "\u540e", "value": 0.00468839336763865}, {"name": "\u914d\u5408", "value": 0.00468839336763865}, {"name": "\u4e2d\u8d85", "value": 0.00468839336763865}, {"name": "\u5854\u5229\u65af\u5361", "value": 0.00468839336763865}, {"name": "\u63a8", "value": 0.00468839336763865}, {"name": "\u4e2d\u573a", "value": 0.00468839336763865}, {"name": "\u8fdb\u7403", "value": 0.00468839336763865}, {"name": "\u4e00\u4e2a", "value": 0.00468839336763865}, {"name": "\u7403\u961f", "value": 0.00468839336763865}, {"name": "\u9700\u8981", "value": 0.00468839336763865}], "1": [{"name": "\u674e\u5b66\u9e4f", "value": 0.0358668653750621}, {"name": "\uff1f", "value": 0.021957277694982614}, {"name": "\u6052\u5927", "value": 0.017983109786388476}, {"name": "\u7403\u8ff7", "value": 0.014008941877794336}, {"name": "\u6709\u70b9", "value": 0.014008941877794336}, {"name": "\uff01", "value": 0.014008941877794336}, {"name": "\u5e94\u8be5", "value": 0.012021857923497267}, {"name": "\u5efa\u4e1a", "value": 0.012021857923497267}, {"name": "\u9ad8\u62c9\u7279", "value": 0.011028315946348732}, {"name": "\u8fd9\u573a", "value": 0.011028315946348732}, {"name": "\u524d", "value": 0.010034773969200198}, {"name": "\u4e8e\u6c49\u8d85", "value": 0.010034773969200198}, {"name": "\u7403", "value": 0.010034773969200198}, {"name": "\u7d20\u8d28", "value": 0.009041231992051663}, {"name": "\u771f\u7684", "value": 0.008047690014903129}, {"name": "\u90dc\u6797", "value": 0.008047690014903129}, {"name": "\u7403\u5458", "value": 0.008047690014903129}, {"name": "\u9093\u6db5\u6587", "value": 0.007054148037754595}, {"name": "\u9a82", "value": 0.007054148037754595}, {"name": "\u597d", "value": 0.006060606060606061}, {"name": "\u5148", "value": 0.006060606060606061}, {"name": "\u592a", "value": 0.006060606060606061}, {"name": "\u6539\u53d8", "value": 0.006060606060606061}, {"name": "\u98de\u94f2", "value": 0.006060606060606061}, {"name": "\u6743\u5065", "value": 0.006060606060606061}, {"name": "\u8868\u73b0", "value": 0.005067064083457526}, {"name": "\u8fdb\u653b", "value": 0.005067064083457526}, {"name": "\u66b4\u529b", "value": 0.005067064083457526}, {"name": "\u4e00\u4e0b", "value": 0.005067064083457526}, {"name": "\u60f3", "value": 0.005067064083457526}], "2": [{"name": "\u674e\u5b66\u9e4f", "value": 0.03940224159402241}, {"name": "\u6052\u5927", "value": 0.027945205479452055}, {"name": "\uff01", "value": 0.014993773349937733}, {"name": "\u4e8e\u6c49\u8d85", "value": 0.012004981320049814}, {"name": "\u4e0a\u6e2f", "value": 0.011008717310087174}, {"name": "\u8e22", "value": 0.010012453300124534}, {"name": "\u6253", "value": 0.010012453300124534}, {"name": "\u597d", "value": 0.009016189290161894}, {"name": "\uff1f", "value": 0.008019925280199253}, {"name": "\u6bd4\u8d5b", "value": 0.007521793275217932}, {"name": "\u5e94\u8be5", "value": 0.007521793275217932}, {"name": "\u88c1\u5224", "value": 0.007521793275217932}, {"name": "\u90dc\u6797", "value": 0.007521793275217932}, {"name": "\u4f20\u4e2d", "value": 0.007023661270236612}, {"name": "\u5f20\u7433\u8283", "value": 0.006525529265255292}, {"name": "\u505c\u8d5b", "value": 0.006027397260273973}, {"name": "\u5206\u949f", "value": 0.006027397260273973}, {"name": "\u9632\u5b88", "value": 0.006027397260273973}, {"name": "\u4e00\u4e2a", "value": 0.005529265255292653}, {"name": "\u5224", "value": 0.005529265255292653}, {"name": "\u8fd9\u573a", "value": 0.005529265255292653}, {"name": "\u90b9\u6b63", "value": 0.005529265255292653}, {"name": "\u771f\u7684", "value": 0.005529265255292653}, {"name": "\uff1b", "value": 0.005529265255292653}, {"name": "\u9ec4\u535a\u6587", "value": 0.0050311332503113326}, {"name": "\u70b9\u7403", "value": 0.0050311332503113326}, {"name": "\u8fdb\u7403", "value": 0.0050311332503113326}, {"name": "\u56fd\u5bb6\u961f", "value": 0.004533001245330012}, {"name": "\u7403\u5458", "value": 0.004533001245330012}, {"name": "\u9ec4\u724c", "value": 0.004533001245330012}]};
var topic_summary = {"0": [{"content": "\u987e\u64cd\u4f60\u9664\u4e86\u8981\u7ed9\u674e\u5b66\u9e4f\u548c\u9ad8\u62c9\u7279\u9053\u6b49\u5916\u8fd8\u8981\u7ed9\u987e\u8d85\u9053\u6b49\uff0c\u56e0\u4e3a\u987e\u8d85\u66ff\u4f60\u6328\u4e86\u4e0d\u5c11\u9a82\uff0c\u771f\u8eba\u7740\u4e5f\u4e2d\u67aa\u2026\u2026", "up": 675}, {"content": "\u522b\u7684\u4e0d\u8bf4\uff0c\u738b\u5927\u96f7\u4fdd\u62a4\u674e\u5b66\u9e4f\u90a3\u77ac\u95f4\u611f\u5230\u6ee1\u6ee1\u7684\u5584\u610f\uff0c\ud83d\udc4d", "up": 656}, {"content": "\u90d1\u667a38\u5c81\u3001\u51af\u6f47\u970633\u5c81\u3001\u90dc\u679732\u5c81\u3001\u66fe\u8bda31\u5c81\u3001\u9ec4\u535a\u658731\u5c81\u3001\u674e\u5b66\u9e4f30\u5c81\u3001\u5f20\u7433\u828329\u5c81\u3001\u9ad8\u62c9\u727927\u5c81\u3001\u963f\u517029\u5c81\u2026\u2026\uff0c\u9996\u5148\u652f\u6301\u5168\u534e\u73ed\uff0c\u5176\u6b21\u5e73\u574730\u5c81\u7684\u7403\u961f\u771f\u7684\u9700\u8981\u5168\u9762\u6362\u8840\u4e86\uff0c\u9ec4\u535a\u6587\u8e22\u4e86\u5341\u51e0\u5206\u949f\u5c31\u6ee1\u8eab\u5927\u6c57\uff0c\u51af\u6f47\u9706\u548c\u5f20\u7433\u8283\u53ea\u80fd\u7528\u72af\u89c4\u5f25\u8865\u901f\u5ea6\u7f3a\u9677\uff0c\u800c\u5728\u4e0b\u534a\u573a\u540e\u9636\u6bb5\u674e\u5b66\u9e4f\u4e5f\u57fa\u672c\u4e0a\u542f\u52a8\u4e0d\u8d77\u6765\uff0c\u4e8e\u6c49\u8d85\u57fa\u672c\u900f\u652f\u2026\u2026\u770b\u5f97\u60ca\u5fc3\u52a8\u9b44\uff0c\u5f88\u96be\u60f3\u50cf\u660e\u5e74\u4f1a\u600e\u4e48\u6837", "up": 329}, {"content": "\u522b\u7684\u4e0d\u8bf4\uff0c\u738b\u5927\u96f7\u4fdd\u62a4\u674e\u5b66\u9e4f\u90a3\u77ac\u95f4\u611f\u5230\u6ee1\u6ee1\u7684\u5584\u610f\uff0c\ud83d\udc4d", "up": 119}, {"content": "\u672c\u8f6e\u4e2d\u8d85\u770b\u70b9\uff1aVAR\u4e5f\u770b\u5fc3\u60c5\uff01\u674e\u5b66\u9e4f[\u6ed1\u7a3d]\uff0c\u4e70\u63d0\u6c5f[\u6ed1\u7a3d]\uff0c\u987e\u64cd[\u6ed1\u7a3d]", "up": 12}], "1": [{"content": "\u53cc\u811a\u79bb\u5730\u94f2\u674e\u5b66\u9e4f\uff0c\u65e0\u7f18\u65e0\u6545\u63a8\u6421\u9ad8\u62c9\u7279\u8fd8\u9a82\u9a82\u54a7\u54a7\uff0c\u8fd9\u4e2a\u4eba\u5e94\u8be5\u662f\u8981\u88ab\u64e6\u5427\uff1f", "up": 1554}, {"content": "\u6211\u4e0d\u8892\u62a4\u963f\u5170\u548c\u674e\u5b66\u9e4f \u6211\u662f\u6052\u8ff7\uff0c\u4f46\u6743\u5065\u53c8\u8e22\u5f97\u6709\u591a\u5e72\u51c0\uff0c\u7403\u8ff7\u591a\u6709\u7d20\u8d28", "up": 1507}, {"content": "\u5efa\u4e1a\u7403\u8ff7\u4ee5\u4e3a\u81ea\u5df1\u5f88\u4e13\u4e1a\uff0c\u674e\u5b66\u9e4f\u88ab\u94f2\u4e86\u8fd8\u5618\u4ed6\uff0c\u4f60\u4eec\u6709\u5618\u7684\u5e95\u6c14\u5417\uff0c\u8fd8\u4e13\u4e1a\u4e3b\u573a", "up": 227}, {"content": "\u4e13\u5bb6\u4eec\u6b23\u8d4f\u4e00\u4e0b\u674e\u5b66\u9e4f\u7684\u6b63\u9762\u98de\u94f2\u5427\u3002", "up": 15}, {"content": "\u6211\u4eec\u5f88\u591a\u4eba\u5f88\u591a\u65f6\u5019\u90fd\u8bf4\u4e2d\u56fd\u8db3\u7403\u5e94\u8be5\u600e\u6837\u600e\u6837\uff0c\u8bf4\u5f88\u591a\u6211\u4eec\u666e\u901a\u7403\u8ff7\u7fa4\u4f17\u6ca1\u80fd\u529b\u53bb\u6539\u53d8\u7684\u4e8b\u3002\u90a3\u6211\u4eec\u80fd\u4e0d\u80fd\u505a\u4e9b\u6211\u4eec\u80fd\u505a\u7684\u4e8b\u5462\uff0c\u6bd4\u5982\u6211\u4eec\u7684\u4ef7\u503c\u89c2\u6211\u4eec\u7684\u7d20\u8d28\u3002\u6bd4\u5982\u8fd9\u573a\u6bd4\u8d5b\uff0c\u5047\u5982\u662f\u674e\u5b66\u9e4f\u66b4\u529b\u98de\u94f2\u4f60\u5efa\u4e1a\u7684\u7403\u5458\uff0c\u4f60\u9a82\u7239\u9a82\u5a18\u5f97\u9a82\u4ed6\u6ca1\u6bdb\u75c5\uff0c\u4f46\u73b0\u5728\u662f\u674e\u5b66\u9e4f\u88ab\u66b4\u529b\u98de\u94f2\uff0c\u6362\u505a\u662f\u4f60\u4f60\u53cd\u5e94\u5e94\u8be5\u4e5f\u4f1a\u5f88\u5927\u5427\uff01\u51b5\u4e14\u90a3\u7403\u5458\u4e00\u5f00\u59cb\u8fd8\u62ff\u5934\u9876\u674e35\uff0c\u5f53\u81ea\u5df1\u662f\u9f50\u8fbe\u5185\uff1f\uff08\u540e\u9762\u8fd8\u6311\u8845\u9ad8\u62c9\u7279\uff09\u53ef\u73b0\u573a\u90e8\u5206\u7684\u5efa\u4e1a\u7403\u8ff7\u5728\u5e72\u561b\u5462\uff1f\u90a3\u9a82\u58f0\u7535\u89c6\u90fd\u5f88\u6e05\u6670\uff0c\u4f60\u4eec\u7684\u529b\u6c14\u4e0d\u7528\u5728\u9f13\u821e\u7403\u5458\u4e0a\u5417\uff1f\u5168\u573a\u5efa\u4e1a\u6709\u591a\u5c11\u6b21\u5c11\u6797\u529f\u592b\u7684\u9632\u5b88\u4f60\u4eec\u4e5f\u6ca1\u770b\u5230\u5417\uff1f\u771f\u7684\uff0c\u8981\u6539\u53d8\u4e2d\u56fd\u8db3\u7403\uff0c\u5148\u4ece\u6211\u4eec\u81ea\u8eab\u7684\u4ef7\u503c\u89c2\u7d20\u8d28\u5148\u6539\u53d8\u53ef\u597d\uff1f", "up": 13}], "2": [{"content": "\u867d\u7136\u8d62\u4e86\uff0c\u4f46\u674e\u5b66\u9e4f\u8fd9\u4e2a\u70b9\u7403\u52a0\u9ec4\u724c\u6709\u70b9\u610f\u601d\u54e6\u3002\u7b2c\u4e00\u674e\u6ca1\u78b0\u5230\u4eba\uff0c\u7b2c\u4e8c\u662f\u7403\u6253\u624b\uff0c\u7b2c\u4e09\u6ca1\u6709\u6545\u4e8b\u5f20\u5f00\u624b\u80a9\u3002\u8fd9\u4e2a\u5c31\u7b97\u662f\u5224\u70b9\u7403\u4e5f\u662f\u53ef\u4ee5\u7684\uff0c\u4f46\u52a0\u9ec4\u724c\u662f\u6839\u636e\u4ec0\u4e48\u6765\u7684\uff1f\uff1f\u6709\u610f\u601d", "up": 15}, {"content": "\u674e\u5b66\u9e4f\u90a3\u4e2a\u7403\u4e0d\u5e94\u8be5\u7ed9\u9ec4\u724c\u5427\uff0c\u4e0d\u662f\u6545\u610f\u624b\u7403\u3002", "up": 14}, {"content": "\u4eca\u5929\u7684\u97e9\u56fd\u88c1\u5224\u54e8\u5b50\u5f88\u677e\uff0c\u5728\u5e7f\u5dde\u5854\u7b2c\u4e8c\u4e2a\u8fdb\u7403\u4e4b\u524d\uff0c\u5f88\u591a\u9c81\u80fd\u7684\u72af\u89c4\u90fd\u6ca1\u5439\u300242\u5206\u949f\u5e7f\u5dde\u5854\u7684\u8fdb\u7403\u524d\uff0c\u674e\u5b66\u9e4f\u786e\u5b9e\u662f\u624b\u90e8\u6709\u52a8\u4f5c\u4e86\uff0c\u8fd9\u4e5f\u662f\u4e2d\u56fd\u7403\u5458\u7684\u6bdb\u75c5\u3002\u5728\u90a3\u4e4b\u524d\uff0c\u9c81\u80fd\u7684\u5f88\u591a\u72af\u89c4\u751a\u81f3\u8be5\u62ff\u724c\u7684\u90fd\u6ca1\u4e8b\u3002\u88c1\u5224\u770bVAR\u65f6\uff0c\u611f\u89c9\u8981\u5224\u6052\u5927\u72af\u89c4\uff0c\u8fdb\u7403\u8db3\u7403\uff0c\u4f46\u7ed3\u679c\u663e\u793a\u8fdb\u7403\u6709\u6548\uff0c\u771f\u7684\u6709\u70b9\u610f\u5916\u3002\u5168\u573a\u6bd4\u8d5b\uff0c\u9664\u4e86\u90a3\u4e2a\u63d2\u66f2\uff0c\u5176\u4ed6\u65f6\u95f4\uff0c\u6052\u5927\u7684\u6280\u6218\u672f\uff0c\u7279\u522b\u662f\u5b9d\u5854\u4e24\u4eba\u7684\u53d1\u6325\u771f\u7684\u6ca1\u5f97\u8bf4\u3002\u9c81\u80fd\u7684\u4f69\u83b1\u505c\u7403\u505a\u7403\u4e5f\u4e0d\u9519\uff0c\u4e0d\u8fc7\u6ca1\u4e2d\u573a\u7684\u6709\u6548\u8f93\u9001\uff0c\u673a\u4f1a\u4e0d\u591a\uff0c\u80fd\u8fdb\u7684\u90a3\u7403\u662f\u610f\u5927\u5229\u524d\u950b\u7684\u6807\u5fd7\u6027\u80fd\u529b\u4f53\u73b0\u3002\u90d1\u667a\u4e0b\u573a\u505c\u8d5b\uff0c\u9ec4\u535a\u6587\u53ef\u4ee5\u9876\u4e0a\uff0c\u6709\u5df4\u897f\u4e09\u53c9\u621f\u5728\uff0c\u4f30\u8ba1\u95ee\u9898\u4e0d\u5927\u3002\u4f46\u66ff\u8865\u5e2d\u7684\u5ed6\u529b\u751f\uff0c\u90d1\u9f99\u7b49\u6d41\u4f30\u8ba1\u51c9\u4e86\uff0c\u7279\u522b\u662f\u963f\u5170\uff0c\u73b0\u5728\u8fd9\u60c5\u51b5\u4e0b\uff0c\u53ea\u80fd\u5e72\u5750\u3002\u5e0c\u671b\u6052\u5927\u518d\u63a5\u518d\u5389\uff0c\u518d\u8d62\u4e09\u573a\uff0c\u4e89\u51a0\u683c\u5c40\u57fa\u672c\u660e\u6717\u4e86\u3002\u51a0\u519b\u7ec8\u5f52\u8fd9\u91cc[\u52a9\u5a01][\u52a9\u5a01]", "up": 14}, {"content": "\u8bf4\u5b9e\u8bdd\uff0c\u6052\u5927\u5c31\u6015\u56fd\u5b89\u8fd9\u6837\u7684\u7403\u961f\uff0c\u867d\u7136\u4ea4\u6218\u6210\u7ee9\u90fd\u662f\u80dc\u5229\u5c45\u591a\uff0c\u4f46\u6bcf\u6b21\u90fd\u6253\u5f97\u78d5\u78d5\u7eca\u7eca\u3002\u8fd9\u6b21\u5728\u5173\u952e\u76846\u5206\u4e4b\u6218\u8d62\u4e0b\u4e86\uff0c\u6052\u5927\u53ef\u4ee5\u8bf4\u6574\u4e2a\u8d5b\u5b63\u6700\u91cd\u8981\u7684\u6bd4\u8d5b\u5df2\u7ecf\u8d62\u4e0b\u6765\u4e86\u3002\u4e0b\u4e00\u573a\u6052\u5927\u6253\u4e0a\u6e2f\uff0c\u5de6\u540e\u536b\u674e\u5b66\u9e4f\u5f52\u6765\uff0c\u8fd8\u6709\u4e8e\u6c49\u8d85\u4e5f\u80fd\u767b\u573a\uff0c\u5de6\u8fb9\u8def\u52a0\u5f3a\u3002\u6211\u76f8\u4fe1\u6052\u5927\u6253\u4e0a\u6e2f\u6bd4\u6253\u56fd\u5b89\u5bb9\u6613\u591a\u4e86\u3002\u8d62\u4e0b\u4e0a\u6e2f\u8fd9\u4e2a\u8d5b\u5b63\u7684\u51a0\u519b\u5c31\u7a33\u4e86[\u5389\u5bb3]", "up": 9}, {"content": "\u674e\u5b66\u9e4f\u7684\u9ec4\u724c\u51a4\u4e0d\u51a4\u554a\uff0c\u80cc\u8eab\u88ab\u52a8\u624b\u7403\u5224\u4e86\u70b9\u7403\u5c31\u53ef\u4ee5\u4e86\uff0c\u8fd8\u7ed9\u9ec4\u724c\uff0c\u5f04\u5f97\u4e0b\u4e00\u573a\u505c\u8d5b\u3002\u3002\u3002", "up": 9}]};
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
