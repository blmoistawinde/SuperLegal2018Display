var data = {"person_name": "\u5ed6\u529b\u751f", "nicknames": "\u5ed6\u529b\u751f", "aspects": {"\u9632\u5b88": 0.4893068464709138, "\u6bd4\u8d5b": 0.46879619656467875, "\u5916\u63f4": 0.25081443146826193, "\u66ff\u8865": 0.5968607844081313, "\u8fdb\u7403": 0.4949930566978888, "\u70b9\u7403": 0.28035291522358574, "\u8d5b\u5b63": 0.7350139110483769, "\u7403\u5458": 0.5457013016676788, "\u4e0b\u534a\u573a": 0.32721988733621465, "\u8db3\u7403": 0.86104347760127}, "overall_heat": 72.0, "overall_polar": 0.094, "name": "3", "nationality": "\u4e2d\u56fd", "position": "\u4e2d\u573a", "goal": "0", "assist": "1", "team_name": "\u5e7f\u5dde\u6052\u5927\u6dd8\u5b9d", "name_en": "Liao Lisheng", "age": "25", "height": "180", "weight": "70"};
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
var topic_keywords = {"0": [{"name": "\u5ed6\u529b\u751f", "value": 0.0558408917058245}, {"name": "\u6052\u5927", "value": 0.018686482351655556}, {"name": "\u9ec4\u535a\u6587", "value": 0.014315375368812151}, {"name": "\uff1f", "value": 0.0132225986231013}, {"name": "\uff01", "value": 0.0132225986231013}, {"name": "\u90d1\u9f99", "value": 0.011037045131679597}, {"name": "\u90d1\u667a", "value": 0.011037045131679597}, {"name": "\u5f90\u65b0", "value": 0.011037045131679597}, {"name": "\u8e22", "value": 0.009944268385968746}, {"name": "\u4e2d\u573a", "value": 0.008851491640257895}, {"name": "\u5916\u63f4", "value": 0.008851491640257895}, {"name": "\u592a", "value": 0.007758714894547043}, {"name": "\u5f20\u6210\u6797", "value": 0.007758714894547043}, {"name": "\u673a\u4f1a", "value": 0.007758714894547043}, {"name": "\u5e94\u8be5", "value": 0.007758714894547043}, {"name": "\u5fb7\u5229", "value": 0.007758714894547043}, {"name": "\u9632\u5b88", "value": 0.007758714894547043}, {"name": "\u771f\u7684", "value": 0.007758714894547043}, {"name": "\u53e4", "value": 0.007758714894547043}, {"name": "\u72b6\u6001", "value": 0.007758714894547043}, {"name": "\u8d8a", "value": 0.006665938148836192}, {"name": "\u6362", "value": 0.006665938148836192}, {"name": "\u597d", "value": 0.006665938148836192}, {"name": "\u7403\u5458", "value": 0.006665938148836192}, {"name": "\u6253", "value": 0.005573161403125341}, {"name": "\u4e0d\u597d", "value": 0.005573161403125341}, {"name": "\u80fd\u529b", "value": 0.005573161403125341}, {"name": "\u54ed", "value": 0.005573161403125341}, {"name": "\u6bd4\u8d5b", "value": 0.005573161403125341}, {"name": "\u7b11", "value": 0.005573161403125341}], "1": [{"name": "\uff01", "value": 0.03256820093738733}, {"name": "\u5ed6\u529b\u751f", "value": 0.0301646436726355}, {"name": "\u6052\u5927", "value": 0.015743300084124504}, {"name": "\u9ec4\u535a\u6587", "value": 0.014541521451748586}, {"name": "\uff1f", "value": 0.010936185554620838}, {"name": "\u4eca\u5e74", "value": 0.010936185554620838}, {"name": "\u8fdb\u7403", "value": 0.010936185554620838}, {"name": "\u5f90\u65b0", "value": 0.009734406922244922}, {"name": "\u4e0b", "value": 0.009734406922244922}, {"name": "\u90d1\u667a", "value": 0.009734406922244922}, {"name": "\u8d5b\u5b63", "value": 0.008532628289869006}, {"name": "\u673a\u4f1a", "value": 0.008532628289869006}, {"name": "\u90d1\u9f99", "value": 0.007330849657493089}, {"name": "\u8fdb", "value": 0.007330849657493089}, {"name": "\u65b0\u4eba", "value": 0.007330849657493089}, {"name": "\u771f\u7684", "value": 0.007330849657493089}, {"name": "\u5361\u7eb3\u74e6\u7f57", "value": 0.006129071025117173}, {"name": "\u90dc\u6797", "value": 0.006129071025117173}, {"name": "\u592a", "value": 0.006129071025117173}, {"name": "\u5f20\u6587\u948a", "value": 0.006129071025117173}, {"name": "\u95ee\u9898", "value": 0.006129071025117173}, {"name": "\u88c1\u5224", "value": 0.006129071025117173}, {"name": "\u953b\u70bc", "value": 0.004927292392741257}, {"name": "\u66ff\u8865", "value": 0.004927292392741257}, {"name": "\u51a0\u519b", "value": 0.004927292392741257}, {"name": "\u5361\u5e05", "value": 0.004927292392741257}, {"name": "\u5e94\u8be5", "value": 0.004927292392741257}, {"name": "\u4e0a\u573a", "value": 0.004927292392741257}, {"name": "\u8f93", "value": 0.004927292392741257}, {"name": "\u4e00\u4e2a", "value": 0.004927292392741257}]};
var topic_summary = {"0": [{"content": "\u5ed6\u529b\u751f\u8fd9\u4e00\u811a\uff0c\u771f\u7684\u725b\u6279[\u5389\u5bb3][\u5389\u5bb3][\u5389\u5bb3]", "up": 1098}, {"content": "\u53e4\u5fb7\u5229\u786e\u5b9a\u662f\u5916\u63f4\uff1f\u4e0d\u662f\u5ed6\u529b\u751f\u7684\u53cc\u80de\u80ce\u54e5\u54e5", "up": 9}, {"content": "\u8bf4\u5b9e\u8bdd\uff0c\u5c0f\u91d1\u548c\u5a77\u59d0\u4f9d\u65e7\u662f\u4e9a\u6d32\u4e00\u7ea7\u4e2d\u536b\uff0c34\u53f7\u5f88\u51fa\u8272\uff0c\u53ef\u4ee5\u8bf4\u662f\u4eae\u70b9\u3002\u4e2d\u573a\u4ea4\u7ed9\u5ed6\u529b\u751f\u771f\u7684\u65e0\u529b\u5410\u69fd\uff0c\u6ca1\u6709\u51e0\u4e2a\u6210\u529f\u4f20\u7403\uff0c\u62e6\u622a\u4e5f\u4e0d\u884c\uff0c\u7ec4\u7ec7\u66f4\u5dee\u3002\u53e4\u5fb7\u5229\u4f3c\u4e4e\u90fd\u6e38\u8d70\u5230\u524d\u8170\u751a\u81f3\u524d\u950b\u4f4d\u7f6e\u4e86\u3002\u5f20\u6587\u948a\u8fd8\u662f\u6709\u70b9\u72ec\uff0c17\u53f7\u7b80\u76f4\u83dc\u3002\u603b\u7684\u6765\u8bf4\uff0c\u8d62\u5f97\u5f88\u96be", "up": 9}, {"content": "\u5361\u7eb3\u74e6\u7f57\u8bf4\u57f9\u517b\u65b0\u4eba\uff0c\u53cd\u800c\u8d8a\u7528\u8d8a\u8001\u3002\u4ee5\u524d\u65af\u79d1\u62c9\u91cc\u4e0d\u7528\u7684\u5f20\u6210\u6797\uff0c\u5f20\u6587\u948a\uff0c\u90d1\u9f99\u90fd\u573a\u573a\u8e22\u7403\u4e86\uff0c\u53cd\u800c\u5f90\u65b0\u3001\u5510\u8bd7\u3001\u5ed6\u529b\u751f\u8fd9\u4e9b\u4e00\u70b9\u673a\u4f1a\u90fd\u6ca1\u6709\u3002", "up": 9}, {"content": "\u770b\u4e86\u5ed6\u529b\u751f\u624d\u77e5\u9053\u90d1\u667a\u591a\u4e48\u725b\u903c\uff0c\u6052\u5927\u5168\u534e\u73ed\u5c31\u662f\u4e2a\u7b11\u8bdd", "up": 9}], "1": [{"content": "\u7edd\u6740\u4e86\uff0c\u201c\u8d85\u201d\u5f00\u5fc3\uff01\u5728\u9ad8\u62c9\u7279\u548c\u963f\u5170\u5747\u7f3a\u5e2d\u7684\u60c5\u51b5\u4e0b\u8270\u96be\u53d6\u80dc\uff0c\u6b8a\u4e3a\u4e0d\u6613\uff01\u4e8e\u6c49\u8d85\u4eca\u5e74\u51e0\u6b21\u4e0e\u8fdb\u7403\u5931\u4e4b\u4ea4\u81c2\uff0c\u5e0c\u671b\u8fd9\u662f\u4e00\u4e2a\u826f\u597d\u7684\u5f00\u7aef\uff0c\u4eca\u5e74\u4e09\u7ebf\u8fdb\u7403\u53ef\u4ee5\u4e0a\u53cc\u3002\u770b\u5230\u8bf4\u90d1\u9f99\u7684\uff0c\u6211\u89c9\u5f97\u4ed6\u5728\u573a\u4e0a\u7684\u6001\u5ea6\u662f\u6ca1\u5f97\u9ed1\u7684\uff0c\u6ee1\u573a\u98de\u5954\uff0c\u79ef\u6781\u62fc\u62a2\uff0c\u53ea\u662f\u6700\u540e\u5904\u7406\u7403\u7684\u5fc3\u6001\u8fd8\u6709\u4e9b\u6025\u8e81\u3002\u7403\u662f\u4e8e\u6c49\u8d85\u8fdb\u7684\uff0c\u5f20\u6587\u948a\u4f20\u7684\u3002\u3002\u3002\u4f46\u662f\uff0c\u4f60\u4eec\u8fd8\u8bb0\u5f97\u7ed9\u5f20\u6587\u948a\u4f20\u7684\u662f\u8c01\u5417\uff1f\u5ed6\u529b\u751f\uff01\u4ece\u4e2d\u5708\u7cbe\u51c6\u957f\u4f20\u7ed9\u5927\u7981\u533a\u53f3\u4fa7\u7684\u5f20\uff0c\u4f9d\u7a00\u770b\u5230\u4e8613\u8d5b\u5b63\u7684\u90a3\u4e2a\u5ed62\uff0c\u4ed6\u5c31\u5e94\u8be5\u662f\u8fd9\u6837\u7684\u5ed62\uff0c\u4e00\u76f4\u4ee5\u4e3a\u4ed6\u5c06\u662f\u6052\u5927\u672a\u6765\u5341\u5e74\u7684\u7ec4\u7ec7\u6838\u5fc3\uff0c\u4e00\u76f4\u671f\u5f85\u4ed6\u7684\u91cd\u65b0\u5d1b\u8d77\u3002\u3002\u3002\u4eca\u5929\uff0c\u5ed6\u529b\u751f\u7684\u8fd9\u811a\u4f20\u7403\u624d\u6700\u8ba9\u6211\u5f00\u5fc3\uff01\uff01\uff01", "up": 33}, {"content": "\u4eca\u5929\u7684\u97e9\u56fd\u88c1\u5224\u54e8\u5b50\u5f88\u677e\uff0c\u5728\u5e7f\u5dde\u5854\u7b2c\u4e8c\u4e2a\u8fdb\u7403\u4e4b\u524d\uff0c\u5f88\u591a\u9c81\u80fd\u7684\u72af\u89c4\u90fd\u6ca1\u5439\u300242\u5206\u949f\u5e7f\u5dde\u5854\u7684\u8fdb\u7403\u524d\uff0c\u674e\u5b66\u9e4f\u786e\u5b9e\u662f\u624b\u90e8\u6709\u52a8\u4f5c\u4e86\uff0c\u8fd9\u4e5f\u662f\u4e2d\u56fd\u7403\u5458\u7684\u6bdb\u75c5\u3002\u5728\u90a3\u4e4b\u524d\uff0c\u9c81\u80fd\u7684\u5f88\u591a\u72af\u89c4\u751a\u81f3\u8be5\u62ff\u724c\u7684\u90fd\u6ca1\u4e8b\u3002\u88c1\u5224\u770bVAR\u65f6\uff0c\u611f\u89c9\u8981\u5224\u6052\u5927\u72af\u89c4\uff0c\u8fdb\u7403\u8db3\u7403\uff0c\u4f46\u7ed3\u679c\u663e\u793a\u8fdb\u7403\u6709\u6548\uff0c\u771f\u7684\u6709\u70b9\u610f\u5916\u3002\u5168\u573a\u6bd4\u8d5b\uff0c\u9664\u4e86\u90a3\u4e2a\u63d2\u66f2\uff0c\u5176\u4ed6\u65f6\u95f4\uff0c\u6052\u5927\u7684\u6280\u6218\u672f\uff0c\u7279\u522b\u662f\u5b9d\u5854\u4e24\u4eba\u7684\u53d1\u6325\u771f\u7684\u6ca1\u5f97\u8bf4\u3002\u9c81\u80fd\u7684\u4f69\u83b1\u505c\u7403\u505a\u7403\u4e5f\u4e0d\u9519\uff0c\u4e0d\u8fc7\u6ca1\u4e2d\u573a\u7684\u6709\u6548\u8f93\u9001\uff0c\u673a\u4f1a\u4e0d\u591a\uff0c\u80fd\u8fdb\u7684\u90a3\u7403\u662f\u610f\u5927\u5229\u524d\u950b\u7684\u6807\u5fd7\u6027\u80fd\u529b\u4f53\u73b0\u3002\u90d1\u667a\u4e0b\u573a\u505c\u8d5b\uff0c\u9ec4\u535a\u6587\u53ef\u4ee5\u9876\u4e0a\uff0c\u6709\u5df4\u897f\u4e09\u53c9\u621f\u5728\uff0c\u4f30\u8ba1\u95ee\u9898\u4e0d\u5927\u3002\u4f46\u66ff\u8865\u5e2d\u7684\u5ed6\u529b\u751f\uff0c\u90d1\u9f99\u7b49\u6d41\u4f30\u8ba1\u51c9\u4e86\uff0c\u7279\u522b\u662f\u963f\u5170\uff0c\u73b0\u5728\u8fd9\u60c5\u51b5\u4e0b\uff0c\u53ea\u80fd\u5e72\u5750\u3002\u5e0c\u671b\u6052\u5927\u518d\u63a5\u518d\u5389\uff0c\u518d\u8d62\u4e09\u573a\uff0c\u4e89\u51a0\u683c\u5c40\u57fa\u672c\u660e\u6717\u4e86\u3002\u51a0\u519b\u7ec8\u5f52\u8fd9\u91cc[\u52a9\u5a01][\u52a9\u5a01]", "up": 14}, {"content": "\u4eca\u5e74\u8c01\u8fd8\u60f3\u7740\u6052\u5927\u4e89\u51a0\u90a3\u5c31\u662f\u81ea\u5df1\u7ed9\u81ea\u5df1\u627e\u5835\uff0c\u4e00\u56fd\u9876\u7ea7\u8054\u8d5b\u4e03\u8fde\u51a0\uff0c\u4e03\u5e74\u4e24\u593a\u6d32\u9645\u51a0\u519b\u4e24\u6b21\u4e16\u4ff1\u676f\u7b2c\u56db\uff0c\u591f\u4e86\uff0c\u4e00\u76f4\u6ca1\u6253\u51fa\u6765\u4ec0\u4e48\u65b0\u4eba\uff0c\u5fc5\u7136\u4f1a\u4ed8\u51fa\u4ee3\u4ef7\u7684\uff0c\u7403\u961f\u5e94\u8be5\u66f4\u52a1\u5b9e\u4eca\u5e74\u7ec3\u4eba\uff0c\u90d1\u667a\u51af\u6f47\u9706\u90dc\u6797\u9ec4\u535a\u6587\u8fd9\u4e9b\u5c31\u4e0d\u8981\u4e0a\u592a\u591a\u4e86\uff0c\u8054\u8d5b\u6768\u7acb\u745c\u5510\u8bd7\u51af\u535a\u8f69\u9093\u5b87\u5f6a\u5ed6\u529b\u751f\u5f90\u65b0\u9093\u6db5\u6587\u8fd9\u4e9b\u5168\u4e0a\uff0c\u4e9a\u51a0\u4e0a\u4e3b\u529b\u62fc\uff0c\u953b\u70bc\u65b0\u4eba\u73b0\u5728\u5bf9\u6052\u5927\u6765\u8bf4\u592a\u91cd\u8981\u4e86", "up": 13}, {"content": "\u5ed6\u529b\u751f\u90a3\u811a\u76f4\u63a5\u8fdb\u5c31\u5b8c\u7f8e\u4e86", "up": 11}, {"content": "\u9ec4\u535a\u6587\u5e9f\u4e86\u5e94\u8be5\u7ed9\u5ed6\u529b\u751f\u66f4\u591a\u673a\u4f1a", "up": 10}]};
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
