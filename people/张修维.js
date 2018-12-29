var data = {"person_name": "\u5f20\u4fee\u7ef4", "nicknames": "\u5f20\u4fee\u7ef4", "aspects": {"\u7403\u8ff7": 0.6895573883780219, "\u7403\u5458": 0.45093625515940006, "\u8e22\u7403": 0.8885894115949626, "\u6bd4\u8d5b": 0.581120594099121, "\u72af\u89c4": 0.6694315348344873, "\u8d5b\u5b63": 0.6068318397537381, "\u89e3\u56f4": 1.0, "\u4ff1\u4e50\u90e8": 0.575297832340256, "\u8fdb\u7403": 0.42581448056533067}, "overall_heat": 85.0, "overall_polar": 0.543, "name": "441", "nationality": "\u4e2d\u56fd", "position": "\u4e2d\u573a", "goal": "0", "assist": "1", "team_name": "\u5929\u6d25\u6743\u5065", "name_en": "Zhang Xiuwei", "age": "22", "height": "173", "weight": "63"};
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
var topic_keywords = {"0": [{"name": "\u5f20\u4fee\u7ef4", "value": 0.05406861864559008}, {"name": "\uff01", "value": 0.048679719777258844}, {"name": "\u6743\u5065", "value": 0.027124124303933895}, {"name": "\u5e74\u8f7b", "value": 0.010957427698940182}, {"name": "\u4e2d\u573a", "value": 0.010957427698940182}, {"name": "\u7403\u5458", "value": 0.010957427698940182}, {"name": "\uff1f", "value": 0.009161128076163103}, {"name": "\u4e00\u4e2a", "value": 0.009161128076163103}, {"name": "\u52a0\u6cb9", "value": 0.009161128076163103}, {"name": "\u597d", "value": 0.009161128076163103}, {"name": "\u6052\u5927", "value": 0.009161128076163103}, {"name": "\u73b0\u5728", "value": 0.009161128076163103}, {"name": "\u5e0c\u671b", "value": 0.0073648284533860235}, {"name": "\u585e\u5c14", "value": 0.0073648284533860235}, {"name": "\u6362", "value": 0.0073648284533860235}, {"name": "\u5434\u66e6", "value": 0.0073648284533860235}, {"name": "\u7403", "value": 0.0073648284533860235}, {"name": "\u5e15\u6258", "value": 0.0073648284533860235}, {"name": "\u540e\u536b", "value": 0.0073648284533860235}, {"name": "\u5e94\u8be5", "value": 0.0073648284533860235}, {"name": "\u89c9\u5f97", "value": 0.0073648284533860235}, {"name": "\u7ef4\u7279", "value": 0.005568528830608945}, {"name": "\u5b8c\u5168", "value": 0.005568528830608945}, {"name": "\u673a\u4f1a", "value": 0.005568528830608945}, {"name": "\u627e\u4e2a", "value": 0.005568528830608945}, {"name": "\u4e2d\u56fd", "value": 0.005568528830608945}, {"name": "\u5f20\u7389\u5b81", "value": 0.005568528830608945}, {"name": "\u6253", "value": 0.005568528830608945}, {"name": "\u83ab\u5fb7\u65af\u7279", "value": 0.005568528830608945}, {"name": "\u5988", "value": 0.003772229207831866}], "1": [{"name": "\u5f20\u4fee\u7ef4", "value": 0.08290232008275454}, {"name": "\u9c81\u80fd", "value": 0.01935865228313876}, {"name": "\uff1f", "value": 0.016403132850598492}, {"name": "\uff01", "value": 0.014925373134328356}, {"name": "\u7403\u8ff7", "value": 0.014925373134328356}, {"name": "\u597d", "value": 0.010492093985517953}, {"name": "\u8fd9\u573a", "value": 0.009014334269247819}, {"name": "\u6bd4\u8d5b", "value": 0.009014334269247819}, {"name": "\u4e4b\u524d", "value": 0.009014334269247819}, {"name": "\u62fc", "value": 0.009014334269247819}, {"name": "\u52a0\u6cb9", "value": 0.007536574552977685}, {"name": "\u6700\u540e", "value": 0.007536574552977685}, {"name": "\u771f\u662f", "value": 0.007536574552977685}, {"name": "\u771f\u7684", "value": 0.007536574552977685}, {"name": "\u8e22", "value": 0.007536574552977685}, {"name": "\u6743\u5065", "value": 0.007536574552977685}, {"name": "\u72af\u89c4", "value": 0.007536574552977685}, {"name": "\u5168\u573a", "value": 0.007536574552977685}, {"name": "\u4e00\u76f4", "value": 0.0060588148367075505}, {"name": "\u8e22\u7403", "value": 0.0060588148367075505}, {"name": "\u89e3\u56f4", "value": 0.0060588148367075505}, {"name": "\u4e00\u4e0b", "value": 0.0060588148367075505}, {"name": "\u95e8\u7ebf", "value": 0.0060588148367075505}, {"name": "\u672a\u6765", "value": 0.0060588148367075505}, {"name": "\u5e94\u8be5", "value": 0.0060588148367075505}, {"name": "\u6551\u9669", "value": 0.004581055120437417}, {"name": "\u51fb\u638c", "value": 0.004581055120437417}, {"name": "\u8fdb\u7403", "value": 0.004581055120437417}, {"name": "\u4e2d\u56fd", "value": 0.004581055120437417}, {"name": "\u52a8\u4f5c", "value": 0.004581055120437417}]};
var topic_summary = {"0": [{"content": "\u5e15\u6258\u725b\u9f3b\uff01\u5f20\u4fee\u7ef4\u771f\u662f\u7075\u6c14\u5341\u8db3\uff01\u4e0d\u60f3\u70b9\u8bc4\u53ea\u4f1a\u6253\u6211\u6052\u7684\u5bcc\u529b", "up": 313}, {"content": "\u5f20\u4fee\u7ef4\u6d6a\u5b50\u56de\u5934\u91d1\u4e0d\u6362\uff0c\u52a0\u6cb9", "up": 282}, {"content": "\u8fd9\u573a\u7403\u51e1\u662f\u5938\u5f20\u4fee\u7ef4\u7684\u6211\u90fd****\u4e86", "up": 55}, {"content": "\u5f20\u4fee\u7ef4\uff0c\u6d6a\u5b50\u56de\u5934\u91d1\u4e0d\u6362\uff01", "up": 10}, {"content": "\u539f\u6765\u6c5f\u6e56\u4e2d\u4f20\u95fb\u5df2\u4e45\u7684\u201c\u90d1\u667a\u63a5\u73ed\u4eba\u201d\u4e0d\u662f\u5434\u66e6\u3001\u84bf\u4fca\u95f5\u3001\u9ec4\u535a\u6587\uff0c\u4e5f\u4e0d\u662f\u5ed6\u529b\u751f\u3001\u5f90\u65b0\u7b49\uff0c\u800c\u662f\u4ed6\u2014\u2014\u4e2d\u56fd\u7684\u9b54\u7b1b\u5f20\u4fee\u7ef4\uff01", "up": 9}], "1": [{"content": "\u9c81\u80fd\u7403\u8ff7\u4e3a\u5f20\u4fee\u7ef4dianzan", "up": 705}, {"content": "\u6211\u8eab\u4e3a\u9c81\u80fd\u7403\u8ff7\uff0c\u8fd9\u573a\u4e3a\u5f20\u4fee\u7ef4****\uff0c\u81ea\u4ece\u51fa\u4e86\u4e8b\u8e22\u7403\u5f88\u4f4e\u8c03\u8e0f\u5b9e\u4e5f\u5f88\u62fc\uff0c\u51fa\u4e86\u77db\u76fe\u4e5f\u4e0d\u4e89\u5435\u8d77\u6765\u57cb\u7740\u5934\u63a5\u7740\u8dd1\uff0c\u6700\u540e\u65f6\u523b\u62fc\u52b2\u5168\u529b\u6321\u51fa\u9c81\u80fd\u7b2c4\u4e2a\u8fdb\u7403\u53cc\u817f\u62bd\u7b4b\u3002\u77e5\u9519\u80fd\u6539\u5584\u83ab\u5927\u7109\uff0c23\u5c81\u4e5f\u4e0d\u7b97\u592a\u665a\uff0c\u5e0c\u671b\u8fd9\u6b21\u6559\u8bad\u80fd\u6210\u4e3a\u4ed6\u7684\u8df3\u677f\u3002\u4e0d\u8981\u88ab\u6253\u5230[\u51fb\u638c][\u51fb\u638c][\u51fb\u638c]", "up": 606}, {"content": "\u5f20\u4fee\u7ef4\u8fd9\u573a\u6bd4\u8d5b\u771f\u591f\u62fc\u7684\uff0c\u79ef\u6781\u62fc\u62a2\uff0c\u4e3b\u52a8\u53bb\u8981\u754c\u5916\u7403\u7ed9\u9c81\u80fd\uff0c\u7279\u522b\u662f\u4eca\u5929\u5b59\u7ee7\u6d77\u5f0f\u7684\u95e8\u7ebf\u6551\u9669\uff0c\u5c0f\u4f19\u5b50\u672a\u6765\u53ef\u671f\u3002", "up": 210}, {"content": "\u5f20\u4fee\u7ef4\u8fd9\u6b21\u56de\u6765\u4e86\u5c31\u597d\u597d\u8e22\u7403\u5427\uff0c\u522b\u518d\u9152\u9a7e\u4e86\uff0c\u5b66\u5b66C\u7f57\u81ea\u5f8b\u4e9b\u5427...", "up": 165}, {"content": "\u5f20\u4fee\u7ef4\uff0c\u8e22\u7403\u5f88\u50cf\u83ab\u5fb7\u91cc\u5947", "up": 105}]};
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
