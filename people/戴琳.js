var data = {"person_name": "\u6234\u7433", "nicknames": "\u6234\u7433", "aspects": {"\u72af\u89c4": 0.5563867380559239, "\u9ec4\u724c": 0.55629562974517, "\u7403\u5458": 0.40350625596569484, "\u6bd4\u8d5b": 0.4780043425669494, "\u7403\u8ff7": 0.640812580224029, "\u8d5b\u5b63": 0.692160854794045, "\u9632\u5b88": 0.5756071716662984, "\u5916\u63f4": 0.24709200680327179, "\u5224\u7f5a": 0.8418684550440586, "\u5ba2\u573a": 0.13077846958412087}, "overall_heat": 98.0, "overall_polar": -0.337, "name": "111", "nationality": "\u4e2d\u56fd", "position": "\u540e\u536b", "goal": "0", "assist": "0", "team_name": "\u5c71\u4e1c\u9c81\u80fd\u6cf0\u5c71", "name_en": "Dai Lin", "age": "31", "height": "191", "weight": "77"};
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
var topic_keywords = {"0": [{"name": "\u6234\u7433", "value": 0.053404365904365904}, {"name": "\uff01", "value": 0.019620582120582118}, {"name": "\u9c81\u80fd", "value": 0.019620582120582118}, {"name": "\uff1f", "value": 0.01832120582120582}, {"name": "\u8e22", "value": 0.01702182952182952}, {"name": "\u7403\u5458", "value": 0.010524948024948024}, {"name": "\u9ec4\u724c", "value": 0.009225571725571724}, {"name": "\u7403", "value": 0.009225571725571724}, {"name": "\u72af\u89c4", "value": 0.007926195426195425}, {"name": "\u6ed1\u7a3d", "value": 0.007926195426195425}, {"name": "\u88c1\u5224", "value": 0.007926195426195425}, {"name": "\u8d8a\u4f4d", "value": 0.007926195426195425}, {"name": "\u5218\u519b\u5e05", "value": 0.006626819126819126}, {"name": "\u5e94\u8be5", "value": 0.006626819126819126}, {"name": "\u5439", "value": 0.006626819126819126}, {"name": "\u540e\u536b", "value": 0.006626819126819126}, {"name": "\u78b0\u5230", "value": 0.006626819126819126}, {"name": "\u4e2d", "value": 0.005327442827442827}, {"name": "\u8fd9\u573a", "value": 0.005327442827442827}, {"name": "\u4e00\u4e0b", "value": 0.005327442827442827}, {"name": "\u597d", "value": 0.005327442827442827}, {"name": "\u8e29", "value": 0.005327442827442827}, {"name": "\u8fd9\u79cd", "value": 0.005327442827442827}, {"name": "\u5c0f", "value": 0.005327442827442827}, {"name": "\u4e00\u76f4", "value": 0.005327442827442827}, {"name": "\u8d5b\u5b63", "value": 0.005327442827442827}, {"name": "\u9ad8\u62c9\u7279", "value": 0.004028066528066528}, {"name": "\u5b8c\u5168", "value": 0.004028066528066528}, {"name": "\u70b9\u7403", "value": 0.004028066528066528}, {"name": "\u5927\u96f7", "value": 0.004028066528066528}], "1": [{"name": "\u6234\u7433", "value": 0.05664277839029769}, {"name": "\uff01", "value": 0.05526460859977949}, {"name": "\u9c81\u80fd", "value": 0.048373759647188534}, {"name": "\u97e6\u4e16\u8c6a", "value": 0.019432194046306504}, {"name": "\u6052\u5927", "value": 0.015297684674751929}, {"name": "\u88c1\u5224", "value": 0.011163175303197354}, {"name": "\u56fd\u5b89", "value": 0.011163175303197354}, {"name": "\u7403\u5458", "value": 0.00978500551267916}, {"name": "\uff1f", "value": 0.00978500551267916}, {"name": "\u63e1\u624b", "value": 0.00840683572216097}, {"name": "\u7f5a", "value": 0.00840683572216097}, {"name": "\u77e5\u9053", "value": 0.00840683572216097}, {"name": "\u8e22", "value": 0.007028665931642778}, {"name": "\u4e0b\u53bb", "value": 0.007028665931642778}, {"name": "\u5e94\u8be5", "value": 0.007028665931642778}, {"name": "\u6bd4\u8d5b", "value": 0.007028665931642778}, {"name": "\u813e\u6c14", "value": 0.005650496141124586}, {"name": "\u5ba2\u573a", "value": 0.005650496141124586}, {"name": "\u7403\u8ff7", "value": 0.005650496141124586}, {"name": "\u9a82", "value": 0.005650496141124586}, {"name": "\u592a", "value": 0.005650496141124586}, {"name": "\u5012", "value": 0.0042723263506063945}, {"name": "\u4e0a\u534a\u573a", "value": 0.0042723263506063945}, {"name": "\u4eca\u5929", "value": 0.0042723263506063945}, {"name": "\u65e9\u5c31", "value": 0.0042723263506063945}, {"name": "\u806a\u660e", "value": 0.0042723263506063945}, {"name": "\u4e4b\u540e", "value": 0.0042723263506063945}, {"name": "\u573a", "value": 0.0042723263506063945}, {"name": "\u8d5b\u540e", "value": 0.0042723263506063945}, {"name": "\u8dd1", "value": 0.0042723263506063945}], "2": [{"name": "\u6234\u7433", "value": 0.05547364541098415}, {"name": "\u9c81\u80fd", "value": 0.013085145595281974}, {"name": "\u771f", "value": 0.009399189089568742}, {"name": "\u5468\u633a", "value": 0.009399189089568742}, {"name": "\u6253", "value": 0.007556210836712126}, {"name": "\u6280\u672f", "value": 0.007556210836712126}, {"name": "\u6b3a\u8d1f", "value": 0.007556210836712126}, {"name": "\u4e22\u7403", "value": 0.007556210836712126}, {"name": "\u79e6\u5347", "value": 0.007556210836712126}, {"name": "\u5409\u5c14", "value": 0.007556210836712126}, {"name": "\u5434\u5174\u6db5", "value": 0.007556210836712126}, {"name": "\u518d\u89c1", "value": 0.007556210836712126}, {"name": "\u4e00\u4e2a", "value": 0.007556210836712126}, {"name": "\u4f69\u83b1", "value": 0.007556210836712126}, {"name": "\u8e22", "value": 0.007556210836712126}, {"name": "\u513f\u5b50", "value": 0.00571323258385551}, {"name": "\u4e2d\u671b\u5d69", "value": 0.00571323258385551}, {"name": "\u5bf9\u65b9", "value": 0.00571323258385551}, {"name": "\u8f6c\u8eab", "value": 0.00571323258385551}, {"name": "\u4e1c", "value": 0.00571323258385551}, {"name": "\u56fd\u5b89", "value": 0.00571323258385551}, {"name": "\u771f\u662f", "value": 0.00571323258385551}, {"name": "\u597d", "value": 0.00571323258385551}, {"name": "\u558a", "value": 0.00571323258385551}, {"name": "\u72af\u89c4", "value": 0.00571323258385551}, {"name": "\u9632\u5b88", "value": 0.00571323258385551}, {"name": "\u4e00\u5957", "value": 0.00571323258385551}, {"name": "\u540e\u536b", "value": 0.00571323258385551}, {"name": "\u7403", "value": 0.00571323258385551}, {"name": "\u5e94\u8be5", "value": 0.00571323258385551}]};
var topic_summary = {"0": [{"content": "\u6234\u7433\u88ab\u8e22\u817f\uff0c\u72af\u89c4\uff0c\u88ab\u6253\u8138\uff0c\u9ec4\u724c\uff01\u5f20\u96f7\u5439\u7684\u771f\u597d\uff01", "up": 318}, {"content": "\u53ea\u60f3\u8bf7\u6559\u4e00\u4e0b\u5404\u4f4d\u5427\u53cb\u4ea4\u4e2a\u95ee\u9898\uff0c\u7b2c\u4e00\uff0c60\u591a\u5206\u949f\u9ad8\u62c9\u7279\u5feb\u653b\u90a3\u7403\u6234\u7433\u72af\u89c4\u600e\u4e48\u4e00\u70b9\u4e8b\u90fd\u6ca1\u6709\uff1f\u7b2c\u4e8c\uff0c\u8865\u65f6\u9636\u6bb5\u9c81\u80fd\u6709\u4e2a\u7403\u5458\u60c5\u7eea\u6027\u66b4\u529b\u6254\u7403\u88c1\u5224\u770b\u5230\u4e86\u5374\u4e0d\u7ba1\u662f\u600e\u4e48\u56de\u4e8b\uff1f\uff1f", "up": 26}, {"content": "\u4e3b\u88c1\u4eca\u5929\u5e26\u7740\u4efb\u52a1\u6765\u7684\uff1f\u738b\u5f64\u7981\u533a\u88ab\u62c9\u62fd\u4e0d\u770bVR\uff0c\u6234\u7433\u4eca\u5929\u6328\u4e86\u4e00\u5df4\u638c\u8fd8\u5f97\u5403\u724c\uff1f", "up": 10}, {"content": "\u8fd9\u573a\u8f93\u7684\u65e0\u8bdd\u53ef\u8bf4 \u7cbe\u6c14\u795e\u592a\u5dee\uff0c\u4e8b\u5b9e\u8bc1\u660e \u6234\u7433\u4e0d\u53ef\u66ff\u4ee3 \u8fd8\u662f\u8981\u63a7\u5236\u597d\u60c5\u7eea\u3002\u4fdd\u7ea7\u8def\u6f2b\u957f\uff0c\u6211\u9c81\u52a0\u6cb9\u5427\uff01", "up": 7}, {"content": "\u5982\u679c\u91d1\u656c\u9053\u5fb7\u4e0d\u7b97\u70b9\u7403\uff0c\u90a3\u4e48\u6234\u7433\u7684\u52a8\u4f5c\u4e5f\u4e0d\u5e94\u8be5\u5224\u7f5a\u70b9\u7403\u3002", "up": 7}], "1": [{"content": "\u6211\u770b\u5230\u8d5b\u540e\u63e1\u624b\u7684\u65f6\u5019 \u6234\u7433\u6ca1\u53fc\u97e6\u4e16\u8c6a \u770b\u90fd\u4e0d\u770b\u4e00\u773c \u9738\u6c14\uff01", "up": 1639}, {"content": "\u5c31\u6052\u5927\u62ff\u9ec4\u724c\u7684\u5c3a\u5ea6\uff0c\u6234\u7433\u5c45\u7136\u6ca1\u88ab\u7f5a\u4e0b\u53bb\uff0c\u7b11\u54af\uff01", "up": 1372}, {"content": "\u6234\u7433\u4e3e\u624b\uff1a\u62a5\u544a\u88c1\u5224\uff0c\u6211\u961f\u53cb\u624b\u7403\u4e86\uff01", "up": 703}, {"content": "\u90dc\u6797\u5c31\u5403\u724c\uff0c\u5218\u5f6c\u5f6c\u5c31\u6ca1\u6709\uff01\u6234\u7433\u65e9\u8be5\u4e0b\u53bb\u4e86\u5427\uff0c\u738b\u54f2\u771f\u9ed1\uff01", "up": 528}, {"content": "\u73af\u5883\u592a\u6076\u52a3\uff0c\u6bd4\u8e22\u5ba2\u573a\u8fd8\u6076\u52a3\uff0c\u6052\u5927\u8d62\u4e0b\u6765\u592a\u4e0d\u5bb9\u6613\u4e86\uff01\u88c1\u5224\u592a\u660e\u663e\u7684\u53cc\u6807\u6267\u6cd5\uff0c\u9009\u62e9\u6027\u5224\u7f5a\uff0c\u6234\u7433\u90fd\u80fd\u7f5a\u4e0b\u4e24\u56de\u4e86\u89c6\u800c\u4e0d\u89c1\uff01", "up": 344}], "2": [{"content": "\u88c1\u5224\u725b\u903c\uff0c\u5148\u5439\u6389\u4e00\u4e2a\u597d\u7403\uff0c\u7136\u540e\u6234\u7433\u5e26\u7740\u9ec4\u724c\u540e\u573a2\u62532\u72af\u89c4\u4e5f\u6ca1\u724c\uff0c\u4f69\u83b1\u54cd\u54e8\u5c04\u95e8\u903c\u4e8b\u6ca1\u6709", "up": 302}, {"content": "\u6234\u7433\u662f\u9c81\u80fd\u961f\u4e2d\u4e0d\u53ef\u6216\u7f3a\u7684\u4e00\u5458\uff0c\u4e0d\u4ec5\u5728\u9632\u5b88\u65b9\u9762 \u4e3b\u8981\u770b\u6c14\u8d28", "up": 15}, {"content": "\u6234\u7433\u8fd8\u662f\u8001\u5927\u5440\uff0c\u79e6\u5347\uff0c\u5468\u633a\u4ee5\u524d\u78b0\u89c1\u90fd\u662f\u6296\u4e09\u6296[\u518d\u89c1][\u518d\u89c1][\u518d\u89c1]", "up": 11}, {"content": "\u5c31\u51b294\u5206\u949f\u6234\u7433\u4f60\u4e00\u62f3\u7838\u5728\u5730\u4e0a\u8fd9\u4e00\u4e3e\u52a8\u2026\u2026\u54e5\u4eec\u6211\u633a\u4f60\u4e86\uff0c\u4ece\u73b0\u5728\u5230\u5c06\u6765\uff0c\u6709\u8840\u6027\uff0c\u662f\u7237\u4eec\uff0c\u8f93\u54b1\u4e0d\u6015\uff0c\u54b1\u6709\u4e00\u4e2a\u4e0d\u670d\u7684\u5fc3\uff0c\u7279\u4e48\u7231\u8c01\u8c01", "up": 6}, {"content": "\u5176\u5b9e\u5e73\u5fc3\u800c\u8bba\u56fd\u5b89\u90a3\u4e2a\u8fdb\u7403\u7740\u5b9e\u662f\u592a\u5201\u4e13\uff0c\u95e8\u67f1\u5185\u6d4b\uff0c\u6234\u7433\u8df3\u665a\u4e86\u7684\u3002\u4e0d\u7136\u771f\u4e0d\u597d\u8bf4\uff0c\u4e0d\u8fc7\u5927\u96f7\u7740\u5b9e\u540a\uff0c\u9c81\u80fd\u7403\u8ff7\u90fd\u89c9\u7740\u5f88\u5e78\u8fd0\u3002\u8fd9\u573a\u6839\u672c\u6ca1\u4e2d\u573a\uff0c\u4f69\u83b1\u62ff\u4e0d\u4f4f\u7403\u548c\u961f\u53cb\u914d\u5408\u4e0d\u4e00\u8d77\uff0c\u53ea\u4f1a\u62b1\u6028\u3002\u4e00\u78b0\u5c31\u5012", "up": 6}]};
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
