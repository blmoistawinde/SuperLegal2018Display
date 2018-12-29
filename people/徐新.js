var data = {"person_name": "\u5f90\u65b0", "nicknames": "\u5f90\u65b0", "aspects": {"\u9632\u5b88": 0.3983973860909979, "\u540e\u8170": 0.37276617765799047, "\u66ff\u8865": 0.463207135103942, "\u8fdb\u7403": 0.2233975324862544, "\u6bd4\u8d5b": 0.4184109723924978, "\u7403\u5458": 0.3653496935177751, "\u8d5b\u5b63": 0.6504956606707072, "\u540e\u9632": 0.3604065386964421, "\u4e0b\u534a\u573a": 0.3255965972954777}, "overall_heat": 62.0, "overall_polar": -0.261, "name": "15", "nationality": "\u4e2d\u56fd", "position": "\u4e2d\u573a", "goal": "0", "assist": "0", "team_name": "\u5e7f\u5dde\u6052\u5927\u6dd8\u5b9d", "name_en": "Xu Xin", "age": "24", "height": "179", "weight": "70"};
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
var topic_keywords = {"0": [{"name": "\u5f90\u65b0", "value": 0.0376907310407652}, {"name": "\u6052\u5927", "value": 0.026303803233887497}, {"name": "\uff01", "value": 0.014916875427009792}, {"name": "\u5361\u7eb3\u74e6\u7f57", "value": 0.01263948986563425}, {"name": "\u4e0a\u6e2f", "value": 0.01036210430425871}, {"name": "\u5ed6\u529b\u751f", "value": 0.01036210430425871}, {"name": "\u673a\u4f1a", "value": 0.00922341152357094}, {"name": "\u9ec4\u535a\u6587", "value": 0.00922341152357094}, {"name": "\u5361\u5e05", "value": 0.00922341152357094}, {"name": "\u4e00\u4e2a", "value": 0.00922341152357094}, {"name": "\uff1f", "value": 0.00808471874288317}, {"name": "\u8d5b\u5b63", "value": 0.00808471874288317}, {"name": "\u6253", "value": 0.00808471874288317}, {"name": "\u65b0\u4eba", "value": 0.006946025962195399}, {"name": "\u4eca\u5e74", "value": 0.006946025962195399}, {"name": "\u4eba", "value": 0.006946025962195399}, {"name": "\u51e0\u4e2a", "value": 0.005807333181507629}, {"name": "\u597d", "value": 0.005807333181507629}, {"name": "\u771f\u7684", "value": 0.005807333181507629}, {"name": "\u660e\u663e", "value": 0.005807333181507629}, {"name": "\u8fd9\u573a", "value": 0.005807333181507629}, {"name": "\u77e5\u9053", "value": 0.005807333181507629}, {"name": "\u7403\u5458", "value": 0.004668640400819858}, {"name": "\u7403", "value": 0.004668640400819858}, {"name": "\u5916\u63f4", "value": 0.004668640400819858}, {"name": "\u4e0b", "value": 0.004668640400819858}, {"name": "\u8d8a", "value": 0.004668640400819858}, {"name": "\u4e0d\u7528", "value": 0.004668640400819858}, {"name": "\u8f93", "value": 0.004668640400819858}, {"name": "\u65af\u79d1\u62c9\u91cc", "value": 0.004668640400819858}], "1": [{"name": "\uff1f", "value": 0.05224745134383688}, {"name": "\uff01", "value": 0.05224745134383688}, {"name": "\u5f90\u65b0", "value": 0.039504170528266914}, {"name": "\u90d1\u667a", "value": 0.016334569045412417}, {"name": "\u6052\u5927", "value": 0.012859128822984244}, {"name": "\u540e\u8170", "value": 0.010542168674698794}, {"name": "\u9ec4\u535a\u6587", "value": 0.010542168674698794}, {"name": "\u4e0a\u573a", "value": 0.00938368860055607}, {"name": "\u5ed6\u529b\u751f", "value": 0.00938368860055607}, {"name": "u23", "value": 0.008225208526413345}, {"name": "\u4e00\u4e2a", "value": 0.008225208526413345}, {"name": "\u80e1\u5c14\u514b", "value": 0.00706672845227062}, {"name": "\u53e4", "value": 0.005908248378127896}, {"name": "\u5fb7\u5229", "value": 0.005908248378127896}, {"name": "\u9632\u5b88", "value": 0.005908248378127896}, {"name": "\u80fd\u529b", "value": 0.005908248378127896}, {"name": "\u5e94\u8be5", "value": 0.004749768303985171}, {"name": "\u66ff\u8865", "value": 0.004749768303985171}, {"name": "\u660e\u767d", "value": 0.004749768303985171}, {"name": "\u540e\u536b", "value": 0.004749768303985171}, {"name": "\u4e0a\u6e2f", "value": 0.004749768303985171}, {"name": "\u673a\u4f1a", "value": 0.004749768303985171}, {"name": "\u540e\u9632", "value": 0.004749768303985171}, {"name": "\u5389\u5bb3", "value": 0.004749768303985171}, {"name": "\u4e2d", "value": 0.0035912882298424465}, {"name": "\u771f\u6b63", "value": 0.0035912882298424465}, {"name": "\u771f\u7684", "value": 0.0035912882298424465}, {"name": "\u653f\u7b56", "value": 0.0035912882298424465}, {"name": "\u642d\u6863", "value": 0.0035912882298424465}, {"name": "\u8db3\u7403", "value": 0.0035912882298424465}]};
var topic_summary = {"0": [{"content": "\u4eca\u5e74\u8c01\u8fd8\u60f3\u7740\u6052\u5927\u4e89\u51a0\u90a3\u5c31\u662f\u81ea\u5df1\u7ed9\u81ea\u5df1\u627e\u5835\uff0c\u4e00\u56fd\u9876\u7ea7\u8054\u8d5b\u4e03\u8fde\u51a0\uff0c\u4e03\u5e74\u4e24\u593a\u6d32\u9645\u51a0\u519b\u4e24\u6b21\u4e16\u4ff1\u676f\u7b2c\u56db\uff0c\u591f\u4e86\uff0c\u4e00\u76f4\u6ca1\u6253\u51fa\u6765\u4ec0\u4e48\u65b0\u4eba\uff0c\u5fc5\u7136\u4f1a\u4ed8\u51fa\u4ee3\u4ef7\u7684\uff0c\u7403\u961f\u5e94\u8be5\u66f4\u52a1\u5b9e\u4eca\u5e74\u7ec3\u4eba\uff0c\u90d1\u667a\u51af\u6f47\u9706\u90dc\u6797\u9ec4\u535a\u6587\u8fd9\u4e9b\u5c31\u4e0d\u8981\u4e0a\u592a\u591a\u4e86\uff0c\u8054\u8d5b\u6768\u7acb\u745c\u5510\u8bd7\u51af\u535a\u8f69\u9093\u5b87\u5f6a\u5ed6\u529b\u751f\u5f90\u65b0\u9093\u6db5\u6587\u8fd9\u4e9b\u5168\u4e0a\uff0c\u4e9a\u51a0\u4e0a\u4e3b\u529b\u62fc\uff0c\u953b\u70bc\u65b0\u4eba\u73b0\u5728\u5bf9\u6052\u5927\u6765\u8bf4\u592a\u91cd\u8981\u4e86", "up": 13}, {"content": "\u5361\u7eb3\u74e6\u7f57\u8bf4\u57f9\u517b\u65b0\u4eba\uff0c\u53cd\u800c\u8d8a\u7528\u8d8a\u8001\u3002\u4ee5\u524d\u65af\u79d1\u62c9\u91cc\u4e0d\u7528\u7684\u5f20\u6210\u6797\uff0c\u5f20\u6587\u948a\uff0c\u90d1\u9f99\u90fd\u573a\u573a\u8e22\u7403\u4e86\uff0c\u53cd\u800c\u5f90\u65b0\u3001\u5510\u8bd7\u3001\u5ed6\u529b\u751f\u8fd9\u4e9b\u4e00\u70b9\u673a\u4f1a\u90fd\u6ca1\u6709\u3002", "up": 9}, {"content": "\u90dc\u6797\u4eca\u5929\u8e22\u7684\u597d\u554a\uff0c\u5361\u7eb3\u74e6\u7f57\u53ef\u4ee5\u591a\u7ed9\u5f90\u65b0\u673a\u4f1a\u7684", "up": 9}, {"content": "\u53e4\u5fb7\u91cc\u8fd9\u79cd\u5916\u63f4\u5e72\u8106\u5c31\u522b\u4e0a\u4e86\uff0c\u4f55\u5fc5\u4e3a\u4e86\u5916\u63f4\u800c\u5916\u63f4\uff1f\u5c31\u9ad8\u62c9\u7279\u963f\u5170\u5e26\u7740\u6253\u5427\uff0c\u8981\u4ea4\u5b66\u8d39\u5c31\u4f7f\u52b2\u4ea4\uff0c\u522b\u53c8\u60f3\u8981\u6210\u7ee9\u8fd8\u60f3\u7ec3\u65b0\u4eba\uff0c\u5f53\u7136\uff0c\u8fd9\u51e0\u4e2aU23\u548c\u53bb\u5e74\u7684\u5f90\u65b0\u4e00\u4e2a\u4e0b\u573a\u5df2\u7ecf\u662f\u6ce8\u5b9a\u7684\u4e8b\uff0c\u63d0\u524d\u9000\u4f11\uff0c\u4eab\u53d7\u4f60\u4eec\u7684\u6700\u540e\u4e00\u4e2a\u804c\u4e1a\u8d5b\u5b63\u5427\uff01", "up": 9}, {"content": "\u5f90\u65b0\u6362\u9ec4\u535a\u6587\u7684\u65f6\u5019\uff0c\u6e05\u695a\u7684\u542c\u89c1\uff0csb\u6362sb\uff0c\u8d8a\u6362\u8d8asb", "up": 8}], "1": [{"content": "\u6211\u5c31\u60f3\u60f3\u95ee\u8db3\u534f\u4f60\u8fd9\u6837\u6253\u653f\u7b56\u771f\u7684\u6709\u7528\u5417\uff1f\uff1f\uff1f\u771f\u80fd\u953b\u70bc\u5230u23\u7403\u5458\u5417\uff1f\u771f\u80fd\u63d0\u9ad8\u8db3\u7403\u6c34\u5e73\u5417\uff1f\uff1f\u5230\u5e95\u662f\u8c01\u6295\u7968\u51b3\u5b9a\u7684\u554a\uff1f\uff1f\u770b\u770b\u4eca\u5929\u5bcc\u529b\u4e0a\u6765\u7684u23\u5b8c\u5168\u4e3a\u4e86\u6d88\u8017\u65f6\u95f4\uff5e\uff5e\u5b8c\u6210\u653f\u7b56\u4efb\u52a1\u554a\uff01\uff01\uff01\u8fd9\u6837\u5e94\u4ed8\u5f0f\u7684\u53c8\u6709\u4ec0\u4e48\u7528\u5462\uff1f\uff1f\u6211\u611f\u89c9\u600e\u4e48\u5bf9u23\u662f\u4e00\u79cd\u5fc3\u7406\u7684\u6253\u51fb\u5462\uff01\uff01\u4ed6\u4eec\u5fc3\u91cc\u90fd\u660e\u767d\u81ea\u5df1\u4e0a\u573a\u53ea\u662f\u4e3a\u4e86\u5b8c\u6210\u90a3\u8be5\u6b7b\u7684\u4efb\u52a1\u554a\uff01\uff01\uff01\u5e76\u4e0d\u662f\u81ea\u5df1\u6709\u8db3\u591f\u80fd\u529b\u8d62\u5f97\u7684\u6bd4\u8d5b\u673a\u4f1a\u554a\uff01\uff01\uff01\u653e\u773c\u4e2d\u8d85\u771f\u6b63\u6709\u5b9e\u529b\u9996\u53d1\u7684u23\u5be5\u5be5\u65e0\u51e0\u554a\uff01\uff01\uff01\u4e3e\u4e2a\u4f8b\u5b50\uff01\uff01\u6052\u5927\u7684\u5f90\u65b0\u53bb\u5e74u23\u4eca\u5e74\u662f\u4e0d\u662f\u76f4\u63a5\u5750\u677f\u51f3\u4e86\uff1f\uff1f\u73b0\u5728\u7684u23\u662f\u4e0d\u662f\u4e00\u6837\u7684\u4e0b\u573a\uff1f\uff1f\uff1f\u503c\u5f97\u6df1\u601d\u554a\uff01\uff01\uff01\u67d0\u4e9b\u9886\u5bfc\u4ee5\u4e3a\u53d1\u5c55\u8db3\u7403\u5f88\u5bb9\u6613\u554a\uff01\u968f\u4fbf\u641e\u597d\u653f\u7b56\u7136\u540e\u5f3a\u884c\u8ba9\u4e0b\u9762\u7684\u4eba\u5b9e\u884c\u5c31\u53ef\u4ee5\u4e86\u554a\uff01\u592a\u5929\u771f\u4e86\u554a\uff01\uff01\uff01\u592a\u5fc3\u6025\u4e86\u554a\uff01\uff01\uff01\u9752\u8bad\u624d\u662f\u552f\u4e00\u51fa\u8def\u554a\uff01\uff01\uff01\u5403\u74dc\u7fa4\u4f17\u90fd\u660e\u767d\u7684\u4e8b\uff5e\uff5e\u9886\u5bfc\u4eec\u4e0d\u80fd\u4e0d\u660e\u767d\u5427\uff01\uff01\uff01\u4e2d\u56fd\u8db3\u7403\uff5e\u4efb\u91cd\u9053\u8fdc\u554a\uff01", "up": 412}, {"content": "\u53e4\u5fb7\u5229\u6362\u90d1\u667a\uff0c\u91d1\u82f1\u6743\u6362\u5f90\u65b0\uff0c\u96be\u9053\u5c31\u662f\u4f20\u8bf4\u4e2d\u7684\u5168\u534e\u73ed\uff1f", "up": 12}, {"content": "\u90d1\u667a\u771f\u6b63\u7684\u63a5\u73ed\u4eba\u5f90\u65b0\u7ec8\u4e8e\u518d\u6b21\u4e0a\u573a\u4e86\u3002", "up": 10}, {"content": "\u539f\u6765\u6c5f\u6e56\u4e2d\u4f20\u95fb\u5df2\u4e45\u7684\u201c\u90d1\u667a\u63a5\u73ed\u4eba\u201d\u4e0d\u662f\u5434\u66e6\u3001\u84bf\u4fca\u95f5\u3001\u9ec4\u535a\u6587\uff0c\u4e5f\u4e0d\u662f\u5ed6\u529b\u751f\u3001\u5f90\u65b0\u7b49\uff0c\u800c\u662f\u4ed6\u2014\u2014\u4e2d\u56fd\u7684\u9b54\u7b1b\u5f20\u4fee\u7ef4\uff01", "up": 9}, {"content": "\u770b\u5230\u5f90\u65b0\u867d\u7136\u662f\u66ff\u8865\u767b\u573a\uff0c\u8fd9\u65f6\u7684\u80e1\u5c14\u514b\u5fc3\u7406\u4e94\u5473\u6742\u9664\uff0c\u671f\u5f85 11 . 0 3 \u5f90\u65b0\u9996\u53d1\u3002", "up": 7}]};
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
