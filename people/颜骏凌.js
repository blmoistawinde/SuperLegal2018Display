var data = {"person_name": "\u989c\u9a8f\u51cc", "nicknames": "\u989c\u9a8f\u51cc", "aspects": {"\u6bd4\u8d5b": 0.5693946271108886, "\u56fd\u5bb6\u961f": 0.45781707636434404, "\u7403\u5458": 0.626093210093218, "\u540e\u9632": 0.7323677839275724, "\u70b9\u7403": 0.7157249382919786, "\u8fdb\u7403": 0.7313571793542305, "\u51fa\u51fb": 0.7815849727179698, "\u5916\u63f4": 0.7672271949131226, "\u9632\u5b88": 0.5677729581548692, "\u4e0b\u534a\u573a": 0.47439853137721943}, "overall_heat": 101.0, "overall_polar": 0.825, "name": "34", "nationality": "\u4e2d\u56fd", "position": "\u5b88\u95e8\u5458", "goal": "0", "assist": "0", "team_name": "\u4e0a\u6d77\u4e0a\u6e2f", "name_en": "Yan Junling", "age": "27", "height": "191", "weight": "83"};
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
var topic_keywords = {"0": [{"name": "\u989c\u9a8f\u51cc", "value": 0.07763843877694801}, {"name": "\uff1f", "value": 0.02268564182048753}, {"name": "\uff01", "value": 0.02268564182048753}, {"name": "\u66fe\u8bda", "value": 0.018458503593067492}, {"name": "\u592a", "value": 0.012822319289840777}, {"name": "\u6251", "value": 0.011413273214034098}, {"name": "\u6bd4\u8d5b", "value": 0.011413273214034098}, {"name": "\u95e8\u5c06", "value": 0.011413273214034098}, {"name": "\u7403", "value": 0.011413273214034098}, {"name": "\u589e\u57ce", "value": 0.010004227138227418}, {"name": "\u4e0a\u6e2f", "value": 0.010004227138227418}, {"name": "\u70b9\u7403", "value": 0.0071861349866140616}, {"name": "\u8fd9\u573a", "value": 0.0071861349866140616}, {"name": "\u51fa\u51fb", "value": 0.0071861349866140616}, {"name": "\ud83d\ude02", "value": 0.0071861349866140616}, {"name": "\u771f\u7684", "value": 0.0071861349866140616}, {"name": "\u5dee", "value": 0.0071861349866140616}, {"name": "\u4e00\u4e2a", "value": 0.005777088910807382}, {"name": "\u5168\u573a", "value": 0.005777088910807382}, {"name": "\u8d5b\u5b63", "value": 0.005777088910807382}, {"name": "\u7a33", "value": 0.005777088910807382}, {"name": "\u738b\u5927\u96f7", "value": 0.005777088910807382}, {"name": "\u51e0\u4e2a", "value": 0.004368042835000705}, {"name": "\u6c34\u5e73", "value": 0.004368042835000705}, {"name": "\u786e\u5b9e", "value": 0.004368042835000705}, {"name": "\u4e22", "value": 0.004368042835000705}, {"name": "\u8e22", "value": 0.004368042835000705}, {"name": "\u6b66\u78ca", "value": 0.004368042835000705}, {"name": "\u6709\u70b9", "value": 0.004368042835000705}, {"name": "\u5389\u5bb3", "value": 0.004368042835000705}], "1": [{"name": "\u989c\u9a8f\u51cc", "value": 0.04056345376287988}, {"name": "\u4e0a\u6e2f", "value": 0.035346289291769924}, {"name": "\uff01", "value": 0.034041998173992435}, {"name": "\u6b66\u78ca", "value": 0.015781922525107604}, {"name": "\u6052\u5927", "value": 0.014477631407330115}, {"name": "\u597d", "value": 0.014477631407330115}, {"name": "\u51a0\u519b", "value": 0.013173340289552627}, {"name": "\u725b", "value": 0.013173340289552627}, {"name": "\u903c", "value": 0.013173340289552627}, {"name": "\u5916\u63f4", "value": 0.011869049171775139}, {"name": "\u5b88\u95e8\u5458", "value": 0.01056475805399765}, {"name": "\u559c\u6b22", "value": 0.01056475805399765}, {"name": "\u4e0d\u9519", "value": 0.009260466936220164}, {"name": "\u6bd4\u8d5b", "value": 0.009260466936220164}, {"name": "\u56fd\u5185", "value": 0.009260466936220164}, {"name": "\u4eca\u5e74", "value": 0.009260466936220164}, {"name": "\u652f\u6301", "value": 0.007956175818442676}, {"name": "\u4e0a\u6d77\u4e0a\u6e2f", "value": 0.007956175818442676}, {"name": "\u7403\u5458", "value": 0.007956175818442676}, {"name": "\u5b9e\u529b", "value": 0.006651884700665188}, {"name": "\u786e\u5b9e", "value": 0.006651884700665188}, {"name": "\u8fdb\u7403", "value": 0.006651884700665188}, {"name": "\u8fd9\u573a", "value": 0.006651884700665188}, {"name": "\u66fe\u8bda", "value": 0.005347593582887699}, {"name": "\uff1f", "value": 0.005347593582887699}, {"name": "\u8e22", "value": 0.005347593582887699}, {"name": "\u771f", "value": 0.005347593582887699}, {"name": "\u95ee\u9898", "value": 0.005347593582887699}, {"name": "\u4e2d\u8d85", "value": 0.005347593582887699}, {"name": "\u53d1\u6325", "value": 0.005347593582887699}], "2": [{"name": "\uff01", "value": 0.027333560167857547}, {"name": "\u989c\u9a8f\u51cc", "value": 0.020528524441419983}, {"name": "\u6052\u5927", "value": 0.01826017919927413}, {"name": "\uff1f", "value": 0.01372348871498242}, {"name": "\u4e0a\u6e2f", "value": 0.01372348871498242}, {"name": "\u8868\u73b0", "value": 0.010320970851763638}, {"name": "\u70b9\u7403", "value": 0.00918679823069071}, {"name": "\u9632\u5b88", "value": 0.008052625609617782}, {"name": "\u4eba", "value": 0.008052625609617782}, {"name": "\u56fd\u5bb6\u961f", "value": 0.006918452988544856}, {"name": "\u53d1\u6325", "value": 0.006918452988544856}, {"name": "\u7403\u5458", "value": 0.006918452988544856}, {"name": "\uff1b", "value": 0.006918452988544856}, {"name": "\u4eca\u5929", "value": 0.006918452988544856}, {"name": "\u6b66\u78ca", "value": 0.005784280367471929}, {"name": "\u5439", "value": 0.005784280367471929}, {"name": "\u540e\u9632", "value": 0.005784280367471929}, {"name": "\u5965\u65af\u5361", "value": 0.005784280367471929}, {"name": "\u80fd\u529b", "value": 0.005784280367471929}, {"name": "\u4ee3\u8868", "value": 0.005784280367471929}, {"name": "\u6001\u5ea6", "value": 0.005784280367471929}, {"name": "\u4e0a\u6d77", "value": 0.005784280367471929}, {"name": "\u90dc\u6797", "value": 0.005784280367471929}, {"name": "\u60f3", "value": 0.005784280367471929}, {"name": "\u9ec4\u724c", "value": 0.005784280367471929}, {"name": "\u4eba\u7269", "value": 0.004650107746399001}, {"name": "\u4e0b\u534a\u573a", "value": 0.004650107746399001}, {"name": "\u624b\u7403", "value": 0.004650107746399001}, {"name": "\u673a\u4f1a", "value": 0.004650107746399001}, {"name": "\u6700\u540e", "value": 0.004650107746399001}]};
var topic_summary = {"0": [{"content": "\u6b66\u78ca\u7684\u8dd1\u4f4d\u4e00\u6d41\uff0c\u53ea\u662f\u56fd\u5bb6\u961f\u6ca1\u4eba\u80fd\u4f20\u51fa\u8fd9\u79cd\u52a9\u653b\uff0c\u989c\u9a8f\u51cc\u8fd9\u8d5b\u5b63\u8fdb\u6b65\u660e\u663e\uff0c\u6251\u70b9\u9ad8\u624b\uff0c\u5fc3\u75bc\u8fd9\u8d5b\u5b63\u7684\u6052\u4e30\uff0c\u6709\u70b9\u4e0d\u8d70\u8fd0\uff0c\u6587\u603b\u6211\u613f\u610f\u7ed9\u4f60\u4e00\u4e2a\u62b1\u62b1\u548c\u652f\u6301\uff0c\u671b\u4f60\u4eec\u80fd\u6446\u8131\u964d\u7ea7\u533a", "up": 693}, {"content": "\u5c31\u6211\u4e00\u4e2a\u4eba\u611f\u89c9\u989c\u9a8f\u51cc\u7684\u529f\u52b3\u5417\uff1f\u51e0\u4e2a\u795e\u6251\uff1f\u8fd9\u8d5b\u5b63\u66fe\u8bda\u6ca1\u6cd5\u548c\u4ed6\u6bd4\uff01", "up": 311}, {"content": "\u51e0\u70b9\u770b\u6cd5\uff1a1.\u5361\u7eb3\u74e6\u7f57\u662f\u771f\u7684\u592a\u83dc 2.\u4e8e\u6c49\u8d85\u771f\u7684\u4e0d\u9002\u5408\u9996\u53d1\uff0c\u8ddf\u5916\u63f4\u51e0\u4e4e\u6253\u4e0d\u51fa\u914d\u5408 3.\u9ec4\u535a\u6587\u9000\u5316\u4e25\u91cd 4.\u8ddf\u5bf9\u9762\u989c\u9a8f\u51cc\u4e00\u6bd4\u8f83\uff0c\u66fe\u8bda\u5b9e\u5728\u592a\u5e73\u5eb8\uff0c\u51fa\u51fb\u4e0d\u679c\u65ad\uff0c\u5bf9\u65b9\u4e00\u5c04\u4e00\u4e2a\u51c6\u30025.\u8bf4\u591a\u5c11\u6b21\u4e86\uff0c\u6253\u4e0a\u6e2f\u5343\u4e07\u4e0d\u80fd\u4e0a\u5f205 6.\u90d1\u667a\u8fd8\u662f\u4e0d\u53ef\u66ff\u4ee3", "up": 193}, {"content": "\u4e0a\u6e2f\u5931\u7403\u6700\u5c11\uff0c\u662fTM\u6709\u9053\u7406\u7684\uff0c\u6ef4\u6c34\u4e0d\u6f0f\uff0c\u8fdc\u5c04\u8fd8\u6709\u989c\u9a8f\u51cc\u5c01.......\u5173\u952e\u5e74\u8f7b \u9ec4\u91d1\u5e74\u9f84 \u524d\u8d74\u540e\u7ee7 \u9632\u5b88\uff0c\u6709\u70b9\u5f53\u5e74\u9a6c\u7ade\u7684\u5473\u9053\uff0c\u9632\u5b88\u7a33\u5982\u94c1\uff0c\u5373\u4fbf\u5931\u8bef \u4e5f\u90fd\u662f\u654f\u6377\u578b\u540e\u536b \u56de\u8ffd\u975e\u5e38\u5feb\uff0c\u76ee\u6d4b\u4f59\u4e0b\u6bd4\u8d5b \u8981\u4e48\u6709\u5927\u4e2d\u950b \u8981\u4e48 \u8bef\u5224\uff0c\u4e0a\u6e2f\u4e0d\u4e3b\u52a8\u5931\u8bef \u5f88\u80fd\u6709\u961f\u4f0d\u8d62\u4ed6\uff0c\u8fd9\u961f\u4f0d\u4e0b\u534a\u7a0b\u5b8c\u5168\u9760\u9632\u5b88\u5728\u6269\u5927\u79ef\u5206", "up": 98}, {"content": "\u4e0d\u5f97\u4e0d\u8bf4\u95e8\u5c06\u7684\u5b9e\u529b\u5dee\u8ddd\u8fd8\u662f\u6709\u7684\u3002\u540c\u6837\u63a8\u8fdc\u89d2\u7684\u7403\u989c\u9a8f\u51cc\u6251\u51fa\u6765\u4e86\uff0c\u5bf9\u9762\u90b1\u76db\u70af\u5374\u6ca1\u6251\u51fa\u6765\u3002\u7cbe\u5f69\u7684\u5fb7\u6bd4\uff01", "up": 13}], "1": [{"content": "\u8bf4\u53e5\u516c\u9053\u8bdd\uff0c\u9c81\u80fd\u5c31\u7b97\u8d62\u4e86\u4e0a\u6e2f\u53c8\u600e\u4e48\u6837\uff1f\u96be\u9053\u6052\u5927\u5c31\u4e00\u5b9a\u662f\u51a0\u519b\u4e86\u5417\uff1f\u6211\u627f\u8ba4\u6211\u662f\u6052\u5927\u94c1\u6746\u7403\u8ff7\uff0c\u6052\u5927\u73b0\u5728\u8981\u505a\u7684\u5c31\u662f\u5168\u80dc\uff0c\u5982\u679c\u8fde\u4e0a\u6e2f\u90fd\u8d62\u4e0d\u4e86\uff0c\u90a3\u5c31\u7b97\u662f\u51a0\u519b\u6211\u89c9\u5f97\u542b\u91d1\u91cf\u4e5f\u4e0d\u9ad8\uff0c\u4e0d\u4ec5\u8981\u593a\u51a0\uff0c\u800c\u4e14\u8981\u8e0f\u7740\u6700\u76f4\u63a5\u7684\u7ade\u4e89\u8005\u593a\u51a0\uff0c\u8fd9\u624d\u662f\u738b\u8005\u3002\u6211\u4e5f\u8981\u5938\u4e00\u4e0b\u6b66\u78ca\uff0c\u4e0d\u9519\uff0c\u8bf4\u771f\u7684\uff0c\u8e22\u7684\u53ef\u4ee5\uff0c\u76ee\u524d\u56fd\u5185\u7b2c\u4e00\uff0c\u6211\u89c9\u5f97\u8fd9\u662f\u4e2d\u80af\u7684\u8bc4\u4ef7\u3002\u989c\u9a8f\u51cc\u4e5f\u5f88\u597d\u3002", "up": 46}, {"content": "\u606d\u559c\u4e0a\u6d77\u4e0a\u6e2f\u53d6\u5f97\u6bd4\u8d5b\u80dc\u5229\uff0c\u6211\u652f\u6301\u548c\u559c\u6b22\u4e0a\u6d77\u4e0a\u6e2f\u5b88\u95e8\u5458\u989c\u9a8f\u51cc\uff0c\u6211\u5e0c\u671b\u540e\u9762\u7684\u6bd4\u8d5b\u4e0a\u6d77\u4e0a\u6e2f\u80fd\u591f\u6253\u597d\u6bcf\u4e00\u573a\u6bd4\u8d5b\uff0c\u5e7f\u5dde\u6052\u5927\u5b88\u95e8\u5458\u66fe\u8bda\u6211\u4e5f\u559c\u6b22\u3002", "up": 15}, {"content": "\u989c\u9a8f\u51cc\u771f\u725b\u903c\uff01\uff5e\u66fe\u8bda\u771f****\uff01\uff5e", "up": 11}, {"content": "\u606d\u559c\u4e0a\u6e2f\u5728\u53d6\u5f97\u5f00\u5c406\u8fde\u80dc\u7684\u60c5\u51b5\u4e0b(\u91cd\u5e86\u597d\u7403\u88ab\u5439\uff0c\u4e0d\u7136\u6839\u672c\u5c31\u6ca1\u67096\u8fde\u80dc\u4e00\u8bf4)\uff0c\u9a6c\u4e0a\u6765\u4e2a4\u8f6e\u4e0d\u80dc\uff0c\u8fd9\u573a\u6ca1\u8f93\u7b97\u4e07\u5e78\u4e86\uff0c\u4e0a\u6e2f\u5e94\u8be5\u7ed9\u989c\u9a8f\u51cc\u53d1200\u4e07\u5e73\u7403\u5956\u5427\uff1f", "up": 9}, {"content": "\u6211\u559c\u6b22\u548c\u652f\u6301\u4e0a\u6d77\u4e0a\u6e2f\u5b88\u95e8\u5458\u989c\u9a8f\u51cc\uff0c\u6211\u5e0c\u671b\u4e0a\u6e2f\u593a\u4eca\u5e74\u4e2d\u8d85\u51a0\u519b\uff0c\u52a0\u6cb9\uff0c\u4e0a\u6e2f\u6218\u6597\u989c\u9a8f\u51cc\u5b88\u95e8\u5458\u4f60\u662f\u6700\u68d2\u7684\u3002", "up": 9}], "2": [{"content": "\u6709\u6ca1\u6709\u770b\u5230\u7ed9\u989c\u9a8f\u51cc\u9ec4\u724c\u7684\u65f6\u5019\uff0c\u80cc\u810a\u4e00\u51c9\uff0c\u770b\u5230\u5f20\u4e00\u7ea2\u724c\u7684\u65f6\u5019\uff0c\u679c\u7136\u5982\u6b64\u7684\uff1f", "up": 10}, {"content": "\u4e0a\u6e2f\u5982\u679c\u6ca1\u989c\u9a8f\u51cc\uff0c\u5c31\u8fd9\u540e\u9632\u7ebf\uff0c\u4f30\u8ba1\u79ef\u5206\u548c\u8d35\u5dde\u5dee\u4e0d\u591a\uff5e", "up": 9}, {"content": "\u6211\u5df2\u7ecf\u618b\u4e86\u4e00\u809a\u5b50\u706b\u4e86\uff0c\u8fd9\u88c1\u5224\u8fd8\u4e0d\u5982\u56fd\u4ea7\u88c1\u5224\uff0c\u4e0a\u534a\u573a\u90dc\u6797\u7981\u533a\u88ab\u738b\u80dc\u8d85\u63a8\u98de\uff0c\u6ca1\u7ed9\u70b9\u7403\uff0c\u6309\u89e3\u8bf4\u7684\u7406\u89e3\u662f\u90dc\u6797\u8d9f\u5927\u4e86\uff0c\u5931\u53bb\u4e86\u7403\u6743\uff0c\u90a3\u4e48\u6211\u60f3\u77e5\u9053\u4e0a\u6b21\u6052\u5927\u6bd4\u8d5b\u597d\u50cf\u662f\u90d1\u9f99\uff0c\u5728\u5468\u56f4\u6ca1\u4efb\u4f55\u8fdb\u653b\u7403\u5458\u65f6\u7403\u5373\u5c06\u51fa\u5e95\u7ebf\u88ab\u7403\u6253\u5230\u624b\uff0c\u5374\u88ab\u5439\u4e86\u70b9\u7403\u662f\u4e0d\u662f\u5f88\u6ed1\u7a3d\uff1f\u8fd8\u6709\u963f\u5170\u4e00\u6b21\u6311\u7403\u7ed9\u8fb9\u8def\u63d2\u4e0a\u7684\u66b4\u529b\u9e1f\uff0c\u90a3\u4e2a\u7403\u524d\u9762\u6ca1\u6709\u4e00\u4e2a\u9632\u5b88\u961f\u5458\uff0c\u88ab\u5f20\u536b\u624b\u7403\u62e6\u4e86\u4e0b\u6765\uff0c\u4e00\u5f20\u9ec4\u724c\u90fd\u6ca1\u6709\uff0c\u5475\u5475\uff01\u8fd8\u6709\u4e8e\u6c49\u8d85\u90a3\u7403\uff0c\u7403\u76f4\u63a5\u98de\u8fc7\u6765\uff0c\u4e8e\u6c49\u8d85\u624b\u53ef\u4ee5\u8bf4\u57fa\u672c\u8d34\u7740\u8eab\u4f53\u7684\uff0c\u6253\u5230\u63a5\u8fd1\u80a9\u8180\u4f4d\u7f6e\u7adf\u7136\u7b97\u624b\u7403\uff1f\uff1f\u8fdb\u4e86\u4e5f\u88ab\u5439\u4e86\uff0c\u8fd9\u771f\u7684\u53ef\u4ee5\u8fd9\u4e48\u4e71\u5439\u5417\uff1f\u4e0a\u6e2f\u8e22\u82cf\u5b81\u65f6\u738b\u80dc\u8d85\u624b\u81c2\u5f20\u5f00\u7981\u533a\u624b\u7403\u5565\u4e8b\u90fd\u6ca1\u6709\uff0c\u6211\u53c8\u5475\u5475\u4e86\uff01\u88c1\u5224\u4eca\u5929\u7ed9\u6052\u5927\u9ec4\u724c\u5f88\u723d\u5feb\uff0c\u7ed9\u4e0a\u6e2f\u6218\u672f\u72af\u89c4\u7684\u5c4e\u90fd\u4e0d\u638f\u4e00\u5768\uff0c\u6211\u518d\u6b21\u5475\u5475\u4e86\uff01\u8fd8\u6709\u6700\u540e\u90a3\u4e2a\u70b9\u7403\uff0c\u771f\u4ed6\u5988\u7275\u5f3a\u554a\uff0c\u4e24\u4eba\u53cc\u624b\u4e92\u6478\u8138\u7adf\u7136\u7ed9\u70b9\u7403\uff0c\u6211\u8981\u7b11\u6b7b\uff0c\u6700\u540e\u9636\u6bb5\u7adf\u7136\u8fd8\u597d\u610f\u601d\u7ed9\u6211\u6052\u70b9\u7403\uff01\u6211\u6052\u5728\u7981\u533a\u88ab\u653e\u5012\u65e0\u6570\u6b21\u8981\u4e86\u90a3\u4e48\u591a\u70b9\u7403\uff0c\u88c1\u5224\u4f60\u7709\u5934\u90fd\u4e0d\u76b1\uff0c\u66f4\u522b\u8bf4\u7ed9\u70b9\u7403\uff0c\u6700\u540e\u6211\u6052\u4ec0\u4e48\u8981\u6c42\u90fd\u6ca1\u6709\u4f60\u53c8\u7ed9\u4e2a\u70b9\u7403\uff0c****\u4e0d\uff1f\u6211\u6052\u8f93\u4e86\uff0c\u6211\u8ba4\u4e86\uff01\u5965\u65af\u5361\u4e00\u751f\u9ed1\uff0c\u53cd\u8d85\u90a3\u7403\u5965\u65af\u5361\u5047\u6454\u83b7\u5f97\u540e\u573a\u5b9a\u4f4d\u7403\uff0c\u5f00\u5230\u524d\u573a\u88ab\u5854\u5229\u65af\u5361\u53cd\u62a2\u5374\u88ab\u5439\u72af\u89c4\u5bfc\u81f4\u5b9a\u4f4d\u7403\u4e22\u7403\uff0c\u6211\u7684\u5fc3\u5df2\u7ecf\u8dcc\u5165\u8c37\u5e95\uff01\uff01\uff01\u6700\u540e\u4e00\u53e5\uff0c\u4eca\u5929\u989c\u9a8f\u51cc\u4e0a\u6e2f\u6700\u4f73\uff01\u6211\u6052\u660e\u5e74\u518d\u6218\uff01\uff01\uff01", "up": 8}, {"content": "\u6765\u6765\u6765\uff0c\u5439\u4e00\u6ce2\u989c\u9a8f\u51cc\uff0c\u5927\u5bb6\u9876\u4e00\u9876", "up": 7}, {"content": "\u4eca\u5929\u7684\u950b\u7ebf\uff0c\u57c3\u5c14\u514b\u68ee\uff0c\u80e1\u5c14\u514b\uff0c\u5965\u65af\u5361\u90fd\u8868\u73b0\u5f97\u592a\u51fa\u8272\u4e86\uff0c\u9002\u65f6\u9000\u56de\u4e2d\u573a\u9632\u5b88\u8d77\u4e86\u5173\u952e\u4f5c\u7528\uff0c\u5434\u78ca\u90a3\u5f00\u573a50\u79d2\u63a5\u57c3\u5c14\u514b\u68ee\u7684\u90a3\u4e00\u811a\u5916\u811a\u80cc\u62bd\u5c04\u5165\u7f51\u68d2\u6781\u4e86\uff0c\u6700\u8fd1\u72b6\u6001\u4e5f\u6781\u4f73\uff0c\u56fd\u5bb6\u961f\u53cb\u8c0a\u8d5b\u4e5f\u662f\u6001\u5ea6\u6700\u79ef\u6781\u7684\u7403\u5458\uff0c\u771f\u7684\u662f\u6ca1\u5f97\u9ed1\u4e5f\u6ca1\u5f97\u55b7\u3002\u4e2d\u573a\u8521\u6167\u5eb7\u7684\u529f\u52b3\u662f\u5f88\u5927\u7684\uff0c\u62e6\u622a\u62a2\u65ad\u90fd\u62fc\u5c3d\u4e86\u5168\u529b\uff0c\u540e\u9632\u8d3a\u8d2f\uff0c\u77f3\u67ef\uff0c\u5085\u6b22\u548c\u738b\u71ca\u8d85\u90fd\u53d1\u6325\u51fa\u4e86\u6b63\u5e38\u6c34\u5e73\uff0c\u53ea\u4e0d\u8fc7\u9020\u8d8a\u4f4d\u90a3\u51e0\u4e0b\u6709\u70b9\u8ba9\u4eba\u611f\u5230\u5bb3\u6015\uff0c\u66ff\u8865\u5415\u6587\u541b\u6362\u9648\u5f6c\u5f6c\u6b63\u662f\u65f6\u5019\uff0c\u8865\u4f4d\u7cbe\u786e\uff0c\u5168\u529b\u62fc\u62a2\uff0c\u95e8\u5c06\u989c\u9a8f\u51cc\u7684\u9ad8\u5149\u8868\u73b0\uff0c\u6251\u51fa\u7684\u51e0\u4e2a\u7403\u592a\u5173\u952e\u4e86\uff0c\u4f69\u96f7\u62c9\u7684\u6218\u672f\u5f88\u6210\u529f\uff0c\u9ad8\u4f4d\u9650\u5236\u9ad8\u62c9\u7279\uff0c\u4fdd\u5229\u5c3c\u5965\u548c\u5854\u5229\u65af\u5361\u7684\u76f8\u4e92\u4f20\u7403\uff0c\u9632\u4f4f\u4e86\u808b\u90e8\u76f4\u585e\u7684\u7a7a\u6321\uff0c\u51e0\u6b21\u7a7a\u5207\u4f20\u8eab\u540e\u9020\u5c31\u4e86\u4e86\u4fdd\u5229\u5c3c\u5965\u7684\u4e00\u6b21\u624b\u7403\u548c\u4e24\u6b21\u8d8a\u4f4d\u548c\u4e24\u6b21\u672c\u65b9\u7acb\u67f1\u6551\u9669\uff0c\u5bf9\u4e8e\u4e0a\u6e2f\u5168\u961f\u4e5f\u662f\u7279\u522b\u5e78\u8fd0\u7684\u4e86\u3002\u8fd8\u6709\u4e24\u70b9\uff1a\u2460\u90dc\u6797\u90a3\u7403\u6253\u4e0a\u4e86\u770b\u53f0\uff0c\u4e0d\u7136\u771f\u6709\u53ef\u80fd\u662f\u4e2a\u5e73\u5c40\uff1b\u2461\u4e0a\u534a\u573a\u8865\u4e866\u5206\u949f\uff0c\u4e0b\u534a\u573a\u56e0\u4e3a\u8521\u6167\u5eb7\u62bd\u7b4b\uff0c6\u5206\u949f\u53c8\u591a\u8865\u4e862\u5206\u949f\uff0c\u5168\u573a\u4e0a\u6e2f30%\u5bf9\u6bd4\u6052\u592760%\u7684\u63a7\u7403\u7387\uff0c\u8fd8\u6ca1\u8d62\u4e0b\u6bd4\u8d5b\uff0c\u8bf4\u660e\u4e0a\u6e2f\u628a\u63e1\u673a\u4f1a\u7684\u80fd\u529b\u81f3\u5c11\u672c\u573a\u770b\u6765\u662f\u4f18\u4e8e\u6052\u5927\u7684\u3002\u5230\u5e95\u662f\u6052\u5927\u7403\u5458\u8eab\u4f53\u5df2\u7ecf\u5f88\u75b2\u52b3\u4e86\uff0c\u8fd8\u662f\u4e3b\u6559\u7ec3\u5361\u7eb3\u74e6\u7f57\u7684\u6218\u672f\u5b89\u6392\u548c\u4e34\u573a\u8c03\u6574\u6709\u95ee\u9898\u3002\u7ed3\u5c3e\u6211\u8fd8\u60f3\u95ee\u4e00\u4e0b\u827e\u54c8\u8fc8\u591a\u592b\u662f\u4ec0\u4e48\u60c5\u51b5\uff0c\u662f\u4f24\u505c\u8fd8\u662f\u7d2f\u79ef\u9ec4\u724c\u505c\u8d5b", "up": 7}]};
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
