var data = {"person_name": "\u59dc\u81f3\u9e4f", "nicknames": "\u59dc\u81f3\u9e4f\u3001\u59dc\u5fd7\u9e4f", "aspects": {"\u4f20\u4e2d": 0.6627930282365714, "\u7403\u5458": 0.29325765225059724, "\u7403\u8ff7": 0.36593270949210166, "\u56fd\u811a": 0.3678234571156563, "\u56fd\u5bb6\u961f": 0.47249179172158096, "\u540e\u9632": 0.6607148556398903, "\u8fdb\u653b": 0.8665226511570575, "\u8d5b\u5b63": 0.581307440819216, "\u6bd4\u8d5b": 0.5853049153142199}, "overall_heat": 54.0, "overall_polar": -0.128, "name": "250", "nationality": "\u4e2d\u56fd", "position": "\u540e\u536b", "goal": "1", "assist": "4", "team_name": "\u6cb3\u5317\u534e\u590f\u5e78\u798f", "name_en": "Jiang Zhipeng", "age": "29", "height": "180", "weight": "70"};
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
var topic_keywords = {"0": [{"name": "\u59dc\u5fd7\u9e4f", "value": 0.05399719495091164}, {"name": "\u5bcc\u529b", "value": 0.03997194950911641}, {"name": "\u59dc\u81f3\u9e4f", "value": 0.03062178588125292}, {"name": "\u4e01\u6d77\u5cf0", "value": 0.014258999532491818}, {"name": "\u5510\u6dfc", "value": 0.011921458625525946}, {"name": "\u7b11", "value": 0.011921458625525946}, {"name": "\u54ed", "value": 0.011921458625525946}, {"name": "\u4f20\u4e2d", "value": 0.011921458625525946}, {"name": "\u961f\u957f", "value": 0.009583917718560073}, {"name": "\u62fc\u547d", "value": 0.009583917718560073}, {"name": "\u5f20\u6668\u9f99", "value": 0.009583917718560073}, {"name": "\u534e\u590f", "value": 0.009583917718560073}, {"name": "\u8d5b\u5b63", "value": 0.009583917718560073}, {"name": "\u5de6\u8def", "value": 0.009583917718560073}, {"name": "\u8e22", "value": 0.007246376811594203}, {"name": "\uff1f", "value": 0.007246376811594203}, {"name": "\u5168\u573a", "value": 0.007246376811594203}, {"name": "\u624e\u54c8\u7ef4", "value": 0.007246376811594203}, {"name": "\u8d70", "value": 0.007246376811594203}, {"name": "\u79bb\u5f00", "value": 0.007246376811594203}, {"name": "\u5bf9\u5f97\u8d77", "value": 0.007246376811594203}, {"name": "\u5efa\u4e1a", "value": 0.007246376811594203}, {"name": "\u5356", "value": 0.007246376811594203}, {"name": "\u5362\u7433", "value": 0.007246376811594203}, {"name": "\u7403\u961f", "value": 0.007246376811594203}, {"name": "\u6c99\u5e0c\u57df", "value": 0.004908835904628331}, {"name": "\u72b6\u6001", "value": 0.004908835904628331}, {"name": "\u5168\u8fd0", "value": 0.004908835904628331}, {"name": "\u5168\u90e8", "value": 0.004908835904628331}, {"name": "\u7f29\u624b\u7f29\u811a", "value": 0.004908835904628331}], "1": [{"name": "\u59dc\u5fd7\u9e4f", "value": 0.03888130968622101}, {"name": "\uff01", "value": 0.025238744884038197}, {"name": "\uff1f", "value": 0.01614370168258299}, {"name": "\u534e\u590f", "value": 0.01614370168258299}, {"name": "\u56fd\u811a", "value": 0.013869940882219189}, {"name": "\u7403", "value": 0.011596180081855388}, {"name": "\u4e00\u4e2a", "value": 0.011596180081855388}, {"name": "\u8d75\u660e\u5251", "value": 0.009322419281491585}, {"name": "\u4efb\u822a", "value": 0.009322419281491585}, {"name": "\u7ef4\u5947", "value": 0.009322419281491585}, {"name": "\u7403\u8ff7", "value": 0.009322419281491585}, {"name": "\u6bd4\u8d5b", "value": 0.009322419281491585}, {"name": "\u8fdb", "value": 0.009322419281491585}, {"name": "\u62c9", "value": 0.009322419281491585}, {"name": "\u9ad8\u51c6\u7ffc", "value": 0.009322419281491585}, {"name": "\u8e22", "value": 0.009322419281491585}, {"name": "\u73b0\u573a", "value": 0.007048658481127785}, {"name": "\u53e8", "value": 0.007048658481127785}, {"name": "\u540e\u9632", "value": 0.007048658481127785}, {"name": "\u8d5b\u5b63", "value": 0.007048658481127785}, {"name": "\u5c0f\u5b69", "value": 0.007048658481127785}, {"name": "\u5f20\u5448\u680b", "value": 0.007048658481127785}, {"name": "u23", "value": 0.007048658481127785}, {"name": "\u4e0a\u573a", "value": 0.007048658481127785}, {"name": "\u592a", "value": 0.0047748976807639835}, {"name": "\u5b9e\u529b", "value": 0.0047748976807639835}, {"name": "\u59dc\u81f3\u9e4f", "value": 0.0047748976807639835}, {"name": "\u4e07", "value": 0.0047748976807639835}, {"name": "\u975e", "value": 0.0047748976807639835}, {"name": "\u6c34\u5e73", "value": 0.0047748976807639835}]};
var topic_summary = {"0": [{"content": "\u59dc\u81f3\u9e4f\u7684\u79bb\u5f00\u5bf9\u5bcc\u529b\u5f71\u54cd\u86ee\u5927\u7684", "up": 92}, {"content": "\u5bcc\u529b\u5356\u4e86\u59dc\u5fd7\u9e4f\u5bb3\u4e86\u4e24\u4e2a\u961f", "up": 39}, {"content": "\u4e24\u8fb9\u7684\u5de6\u8fb9\u540e\u536b\u90d1\u5ce5\u548c\u59dc\u5fd7\u9e4f\u4f30\u8ba1\u6628\u665a\u4e0a\u51fa\u53bb\u559d\u4e86\u51e0\u676f\uff0c\u5ea6\u6570\u633a\u5927\u7684\u90a3\u79cd\uff0c\u4eca\u5929\u9152\u8fd8\u6ca1\u9192\u8fc7\u6765[\u7b11\u54ed][\u7b11\u54ed]", "up": 12}, {"content": "\u59dc\u5fd7\u9e4f\u4f60\u60f3\u505a\u4f6c\u5927\u2026\u6162\u6162\u7b49\u7740\u5427", "up": 7}, {"content": "\u59dc\u81f3\u9e4f\u8fd9\u51e0\u4e2a\u5f27\u7ebf\u4f20\u4e2d[\u5389\u5bb3]", "up": 7}], "1": [{"content": "\u6765\u5230\u5e78\u798f\u59dc\u5fd7\u9e4f\u7684\u5f71\u54cd\u529b\u5f31\u5316\u4e86\uff01\u5de6\u8def\u867d\u7136\u6709\u51e0\u6b21\u7cbe\u5f69\u7684\u914d\u5408\uff0c\u4f46\u4ece\u6bd4\u8d5b\u6765\u770b\u597d\u50cf\u66f4\u52a0\u6ce8\u91cd\u6709\u62c9\u7ef4\u5947\u548c\u5f20\u5448\u680b\u7684\u53f3\u8def\uff01\u8fd9\u662f\u975e\u5e38\u7cbe\u5f69\u7684\u6bd4\u8d5b\uff0c\u6070\u5230\u597d\u5904\u7684\u6311\u4f20\uff0c\u5e73\u4f20\uff0c\u540a\u4f20\uff01\u62e6\u622a\u4e5f\u975e\u5e38\u53ca\u65f6\u5230\u4f4d\u679c\u65ad\uff01\u95e8\u5c06\u7684\u8868\u73b0\u66f4\u662f\u7cbe\u51c6\uff01\u592a\u96be\u5f97\u7684\u4e00\u573a\u6bd4\u8d5b\uff0c\u4e00\u626b\u6628\u5929\u90c1\u95f7\u7684\u5fc3\u60c5\uff01", "up": 13}, {"content": "\u5728\u73b0\u573a\u770b\u7684\u7403\uff0c\u81ea\u6211\u611f\u89c9\u662f\u8fd9\u4e2a\u8d5b\u5b63\u8e22\u7684\u6700\u597d\u770b\u7684\u4e00\u573a\u7403\uff0c\u7403\u8ff7\u4eca\u5929\u4e5f\u7ed9\u529b\uff0c\u6ca1\u8d62\u4e0b\u6765\uff0c\u6709\u70b9\u9057\u61be\u3002\u611f\u89c9\u8463\u5b66\u5347\u8fdb\u4e86\u4e24\u7403\u4e4b\u540e\uff0c\u7565\u6709\u70b9\u72ec\uff0c\u6709\u4e24\u4e2a\u673a\u4f1a\u90fd\u6ca1\u7ed9\u4f4d\u7f6e\u66f4\u597d\u7684\u5361\u57c3\u6bd4\uff0c\u73b0\u573a\u770b\uff0c\u5361\u57c3\u6bd4\u8fd8\u662f\u5f88\u6709\u5b9e\u529b\u7684\uff0c\u8eab\u4f53\uff0c\u610f\u8bc6\u52a0\u5c04\u672f\u90fd\u53ef\u4ee5\uff0c\u961f\u5458\u7ed9\u4ed6\u7684\u7403\u592a\u5c11\u3002\u57c3\u5c14\u7eb3\u5185\u65af\u8fd8\u662f\u597d\u4e00\u9635\u70c2\u4e00\u9635\uff0c\u8fd9\u573a\u4e0a\u4ed6\u786e\u5b9e\u591f\u5931\u8bef\u3002\u8fd8\u662f\u90a3\u53e5\u8bdd\uff0c\u534e\u590f\u6700\u5f3a\u7684\u662f\u66ff\u8865\u5e2d\u4e0a\u7684\u975eu23\u56fd\u5185\u7403\u5458\u50a8\u5907\uff0c\u8fd9\u4e2a\u8d5b\u5b63\u6210\u7ee9\u4e0d\u4f73\uff0c\u548cu23\u5b9e\u529b\u4e0d\u7a81\u51fa\u53c8\u5f88\u5927\u5173\u7cfb\uff0c\u5f53\u7136\u9ad8\u51c6\u7ffc\u9664\u5916\u3002\u8fd9\u573a\u4e0a\u573a\u7684\u9ad8\u534e\u6cfd\u8fd8\u662f\u503c\u5f97\u7ed9\u8d5e\u7684\uff0c\u6562\u7a81\u6562\u4f20\u6562\u5c04\uff0c\u79d1\u5e05\u8981\u662f\u628a\u4ed6\u7ec3\u51fa\u6765\uff0c\u80fd\u8e22\u534a\u573a\u7403\u5c31\u53ef\u4ee5\u4e86\u3002\u6700\u540e\uff0c\u8bf4\u70b9\u611f\u52a8\u7684\uff0c\u8d5b\u540e\u6700\u540e\u8c22\u573a\u7684\u4e01\u6d77\u5cf0\u548c\u59dc\u5fd7\u9e4f\u56e0\u4e3a\u5927\u5bb6\u77e5\u9053\u7684\u539f\u56e0\u5f97\u5230\u7403\u8ff7\u6700\u591a\u7684\u638c\u58f0\u548c\u6b22\u547c\uff0c\u7403\u8ff7\u6254\u4e0b\u7684\u56f4\u5dfe\uff0c\u4ed6\u4eec\u62ff\u7684\u6ee1\u6ee1\u7684\uff0c\u4e5f\u4e00\u4ef6\u4e0d\u5269\u7684\u6361\u8d77\u6765\u3002\u5e0c\u671b\uff0c\u534e\u590f\u522b\u8f9c\u8d1f\u7403\u8ff7\u7684\u5e0c\u671b\uff0c\u65e9\u70b9\u62ff\u51fa\u597d\u7684\u6218\u7ee9\u6765", "up": 8}, {"content": "\u59dc\u5fd7\u9e4f\u5462\uff1f8000\u4e07\u7684\u90a3\u4e2a\u6c5f\u82cf\u8fc7\u53bb\u7684\u5462\uff1f\u4e0d\u662f\u5f88\u540a\u7684\u5417\uff1f", "up": 8}, {"content": "\u5176\u5b9e\u534e\u590f\u5e9f\u56fd\u811a\u554a\uff0c\u8fd9\u56de\u8fdb\u56fd\u5bb6\u961f\u5c31\u4e00\u4e2a\u5916\u6765\u7684\u59dc\u5fd7\u9e4f\u4e86\uff0c\u4e4b\u524d\u5341\u6765\u4e2a\u56fd\u811a\u4e00\u4e2a\u4e5f\u6ca1\u5165\u9009", "up": 6}, {"content": "\u62c9\u7ef4\u5947\u70b9\u7403\u524d \u59dc\u5fd7\u9e4f\u53e8\u903c\u53e8\u4ec0\u4e48\u5462 \u70b9\u7403\u5c31\u88ab\u4f60\u53e8\u903c\u98de\u4e86", "up": 5}]};
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
