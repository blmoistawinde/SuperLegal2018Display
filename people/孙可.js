var data = {"person_name": "\u5b59\u53ef", "nicknames": "\u5b59\u53ef", "aspects": {"\u7403\u5458": 0.33574939358557576, "\u4ff1\u4e50\u90e8": 0.39229230089159556, "\u56fd\u5bb6\u961f": 0.38984251988519875, "\u8fdb\u7403": 0.2715998744965673, "\u540e\u9632": 0.5503777935724848, "\u8db3\u7403": 0.4546567774277258, "\u66ff\u8865": 0.6319757738787245, "\u72af\u89c4": 0.43755838571476807, "\u7ea2\u724c": 0.7430324289110448, "\u70b9\u7403": 0.15319569086991408}, "overall_heat": 97.0, "overall_polar": -0.068, "name": "433", "nationality": "\u4e2d\u56fd", "position": "\u524d\u950b", "goal": "2", "assist": "2", "team_name": "\u5929\u6d25\u6743\u5065", "name_en": "Sun Ke", "age": "29", "height": "171", "weight": "54"};
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
var topic_keywords = {"0": [{"name": "\u5b59\u53ef", "value": 0.05084191597188164}, {"name": "\uff1f", "value": 0.04757233938205002}, {"name": "\uff01", "value": 0.03285924472780775}, {"name": "\u5e15\u6258", "value": 0.014876573483733856}, {"name": "\u6743\u5065", "value": 0.013241785188818047}, {"name": "\u8d8a\u4f4d", "value": 0.011606996893902238}, {"name": "\u72b6\u6001", "value": 0.011606996893902238}, {"name": "\u8fdb\u7403", "value": 0.00997220859898643}, {"name": "\u4eba", "value": 0.00997220859898643}, {"name": "\u597d", "value": 0.008337420304070621}, {"name": "\u7403\u5458", "value": 0.008337420304070621}, {"name": "u23", "value": 0.006702632009154813}, {"name": "\u6700\u540e", "value": 0.006702632009154813}, {"name": "\u88c1\u5224", "value": 0.006702632009154813}, {"name": "\u5224", "value": 0.0050678437142390054}, {"name": "\u4e8e\u5927\u5b9d", "value": 0.0050678437142390054}, {"name": "\u70b9\u7403", "value": 0.0050678437142390054}, {"name": "\u72af\u89c4", "value": 0.0050678437142390054}, {"name": "\u738b\u5c0f\u9f99", "value": 0.0050678437142390054}, {"name": "\u8d5b\u5b63", "value": 0.0050678437142390054}, {"name": "\u7d22\u8428", "value": 0.0050678437142390054}, {"name": "\u7c73\u514b\u5c14", "value": 0.0050678437142390054}, {"name": "\u56de\u6765", "value": 0.0050678437142390054}, {"name": "\u89c6\u9891\u88c1\u5224", "value": 0.0050678437142390054}, {"name": "\u4ee5\u524d", "value": 0.0050678437142390054}, {"name": "\u770b\u770b", "value": 0.0050678437142390054}, {"name": "\u771f", "value": 0.0050678437142390054}, {"name": "\u77e5\u9053", "value": 0.0050678437142390054}, {"name": "\u7981\u533a", "value": 0.0050678437142390054}, {"name": "\u817f", "value": 0.0050678437142390054}], "1": [{"name": "\u5b59\u53ef", "value": 0.08284123502615151}, {"name": "\u821c\u5929", "value": 0.03222540914459254}, {"name": "\u82cf\u5b81", "value": 0.027163826556436645}, {"name": "\u6c5f\u82cf", "value": 0.015353467184072885}, {"name": "\u4ff1\u4e50\u90e8", "value": 0.013666272988020919}, {"name": "\u5356", "value": 0.011979078791968955}, {"name": "\u5f53\u5e74", "value": 0.011979078791968955}, {"name": "\uff1f", "value": 0.011979078791968955}, {"name": "\uff01", "value": 0.010291884595916989}, {"name": "\u8db3\u7403", "value": 0.010291884595916989}, {"name": "\u5409\u7965", "value": 0.010291884595916989}, {"name": "\u7403\u961f", "value": 0.008604690399865023}, {"name": "\u4e00\u4e2a", "value": 0.008604690399865023}, {"name": "\u8d70", "value": 0.006917496203813058}, {"name": "\u4e2d\u8d85", "value": 0.006917496203813058}, {"name": "\u8e22", "value": 0.006917496203813058}, {"name": "\u597d", "value": 0.006917496203813058}, {"name": "\u4e9a\u6d32\u676f", "value": 0.006917496203813058}, {"name": "\u5f53\u65f6", "value": 0.006917496203813058}, {"name": "\u5434\u66e6", "value": 0.005230302007761093}, {"name": "\u5de5\u8d44", "value": 0.005230302007761093}, {"name": "\u540e", "value": 0.005230302007761093}, {"name": "\u4e00\u6b21", "value": 0.005230302007761093}, {"name": "\u73b0\u5728", "value": 0.005230302007761093}, {"name": "\u79bb\u5f00", "value": 0.005230302007761093}, {"name": "\u5e0c\u671b", "value": 0.005230302007761093}, {"name": "\u5409\u7fd4", "value": 0.005230302007761093}, {"name": "\u4e9a\u5916", "value": 0.005230302007761093}, {"name": "\u4e0d\u597d", "value": 0.005230302007761093}, {"name": "\u60f3", "value": 0.005230302007761093}], "2": [{"name": "\u5b59\u53ef", "value": 0.057585613162425865}, {"name": "\uff01", "value": 0.04610675339582935}, {"name": "\u738b\u6c38\u73c0", "value": 0.015496460684905298}, {"name": "\u56fd\u5bb6\u961f", "value": 0.013583317390472544}, {"name": "\u9996\u53d1", "value": 0.013583317390472544}, {"name": "\u7403", "value": 0.011670174096039791}, {"name": "\u8fdb", "value": 0.00975703080160704}, {"name": "\u7d22\u8428", "value": 0.00975703080160704}, {"name": "\u83ab\u5fb7\u65af\u7279", "value": 0.007843887507174286}, {"name": "\u7403\u5458", "value": 0.007843887507174286}, {"name": "\u5206\u949f", "value": 0.005930744212741534}, {"name": "\u5c0f\u5c06", "value": 0.005930744212741534}, {"name": "\u592a", "value": 0.005930744212741534}, {"name": "\u5e15\u6258", "value": 0.005930744212741534}, {"name": "\u7ef4\u7279", "value": 0.005930744212741534}, {"name": "\u540e\u9632", "value": 0.005930744212741534}, {"name": "\u771f\u662f", "value": 0.005930744212741534}, {"name": "\u9002\u5408", "value": 0.005930744212741534}, {"name": "\u6559\u7ec3", "value": 0.005930744212741534}, {"name": "\u4eca\u5e74", "value": 0.005930744212741534}, {"name": "\u4eba\u5458", "value": 0.005930744212741534}, {"name": "\u4eba", "value": 0.005930744212741534}, {"name": "\u6743\u5065", "value": 0.005930744212741534}, {"name": "\u6389", "value": 0.004017600918308781}, {"name": "\u7b2c\u4e00\u6d41", "value": 0.004017600918308781}, {"name": "\u5f20\u9e6d", "value": 0.004017600918308781}, {"name": "\u5bf9\u65b9", "value": 0.004017600918308781}, {"name": "\u80fd\u529b", "value": 0.004017600918308781}, {"name": "\u5e94\u8be5", "value": 0.004017600918308781}, {"name": "\u65e0\u5948", "value": 0.004017600918308781}]};
var topic_summary = {"0": [{"content": "\u8fd9\u4e2a\u53eb\u5b59\u53ef\u7684\u662f\u5916\u63f4\u5417\uff1f", "up": 128}, {"content": "\u5b59\u53ef\u5e94\u8be5\u6210\u4e3a\u8ffd\u6367\u7684\u5bf9\u50cf\u624d\u5bf9\u5440\uff01\u54e5\u4eec\u513f\uff0c\u6709\u6ca1\u6709\u652f\u6301\u7387\uff1f\uff01", "up": 92}, {"content": "\u7d22\u8428\u554a\uff0c\u5fc3\u4e0d\u5728\u5c31\u8d70\u5427\uff0c\u8fde\u7403\u5458\u7684\u72b6\u6001\u90fd\u770b\u4e0d\u51fa\u6765\u4e48\uff1f\u5b59\u53ef\uff0c\u90d1\u8fbe\u4f26\u72b6\u6001\u600e\u4e48\u597d\u4e0d\u9996\u53d1\uff0c\u4f60\u9996\u53d1\u82cf\u7f18\u6770\uff1f\u53c8\u6ca13\u4e2a\u5916\u63f4\u4f60\u4e0a\u4ec0\u4e483\u4e2au23\uff1f", "up": 27}, {"content": "\u5509\uff01\u6743\u5065\u600e\u4e48\u4e0d\u8981\u6743\u656c\u6e90\u554a\uff1f\u6ca1\u97e9\u56fd\u4eba\u540e\u9632\u4e0d\u662f\u8ba9\u4eba\u540a\u6253\u4e48\uff1f\u6240\u4ee5\u6700\u540e\u5c31\u662f\u56e0\u4e3a\u540e\u9632\u5931\u8bef\u8f93\u7684\u3002\u8fd8\u6709\u8981\u5439\u4e00\u4e0b\u5b59\u53ef\u548c\u7c73\u514b\u5c14\uff0c\u867d\u8bf4\u5e15\u6258\u3001\u83ab\u5fb7\u65af\u7279\u3001\u963f\u5947\u59c6\u5f6d\u7684\u8fdb\u7403\u90fd\u5f88\u7cbe\u5f69\uff0c\u4f46\u61c2\u7403\u7684\u90fd\u77e5\u9053\u90a3\u957f\u4f20\u52a9\u653b\u6709\u591a\u7cbe\u51c6\uff01\u5c24\u5176\u662f\u7c73\u514b\u5c14\uff0c\u76f4\u63a5\u4e3b\u5bfc\u4e86\u6cf0\u8fbe\u7684\u80dc\u5229\uff01\u5c11\u8c01\u4e5f\u4e0d\u80fd\u5c11\u5c3c\u65e5\u5229\u4e9a\u6cf0\u8fbe\u53cc\u6599\u961f\u957f\u2014\u2014\u7c73\u514b\u5c14\uff01", "up": 9}, {"content": "\u6628\u665a\u4efb\u516b\u5343\u62ff\u7403\u5c31\u88ab\u5618\uff0c\u518d\u770b\u770b\u5b59\u53ef\u56de\u5bb6\u7684\u65f6\u5019\u5f85\u9047\u771f\u7684\u4e0d\u4e00\u6837\u554a\uff01", "up": 8}], "1": [{"content": "\u5b59\u53ef\u771f\u68d2\ud83d\udc4d\u4f60\u53c8\u56de\u6765\u4e86\uff0c\u6c5f\u82cf\u7403\u8ff7\u4e3a\u4f60\u9ad8\u5174\u3002", "up": 150}, {"content": "\u5f53\u5e74\u4e3a\u4ec0\u4e48\u653e\u5b59\u53ef\uff1f\u81ea\u4ece\u5b59\u53ef \u548c\u57c3\u96f7\u5c14\u68ee\u8d70\u4e86\u4ee5\u540e\u82cf\u5b81\u4e00\u70b9\u6c14\u52bf\u90fd\u6ca1\u4e86\u3002\u82cf\u5b81\u9ad8\u5c42\u6839\u672c\u4e0d\u61c2\u7cbe\u6c14\u795e\u5bf9\u4e00\u4e2a\u7403\u961f\u7684\u91cd\u8981\u6027[\u6124\u6012][\u6124\u6012]", "up": 59}, {"content": "\u5e0c\u671b\u4e9a\u6d32\u676f\u8001\u7237\u5b50\u628a\u5f20\u4fee\u7ef4\u548c\u5b59\u53ef\u5e26\u4e0a\u3002\u3002\u3002", "up": 9}, {"content": "\u4e0a\u8d5b\u5b63\u90d1\u8fbe\u4f26\uff5e\u5f20\u4fee\u7ef4\uff5e\u7cdc\u660a\u4f26\u8e22\u7684\u98ce\u751f\u6c34\u8d77\uff0c\u5b59\u53ef\u66ff\u8865\u4e5f\u662f\u8d85\u7ea7\u5947\u5175\uff0c\u8fd9\u624d\u8fc7\u534a\u5e74\uff0c\u90fd\u600e\u4e48\u4e86\uff1f", "up": 8}, {"content": "\u5b59\u53ef\u4e4b\u524d\u6ca1\u6709\u4e0a\u573a\u673a\u4f1a\uff0c\u8fd9\u573a\u8868\u73b0\u771f\u597d\uff0c\u6253\u8138\u7d22\u8428", "up": 8}], "2": [{"content": "\u5e9f\u738b\u6c38\u73c0\u589e\u52a0\u5b59\u53ef\u65f6\u95f4\u3002", "up": 89}, {"content": "\u5c0f\u80d6\u592a\u80cc\uff0c\u5c0f\u5c06\u592a\u5ae9\uff0c\u5b59\u53ef\u592a\u72ec\uff0c\u83ab\u5fb7\u592a\u7d2f\uff0c\u738b\u6770\u592a\u6123\uff0c\u5f20\u9e6d\u592a\u795e\uff0c\u7d22\u8428\u592a\u62e7\uff0c\u7403\u8ff7\u592a\u60e8\uff01", "up": 13}, {"content": "\u5e15\u6258\u6ca1\u4e0a \u7ef4\u7279\u585e\u5c14\uff0c\u5b59\u53ef\uff0c\u83ab\u5fb7\u65af\u7279\u591a\u70b9\u5f00\u82b1 \u5982\u679c\u6052\u5927\u4eca\u5929\u4e3b\u573a\u8f93 \u89c9\u5f97\u5361\u7eb3\u74e6\u7f57\u4f1a\u54ed\u6655\u2026", "up": 9}, {"content": "\u6743\u5065\u4e3b\u6559\u7ec3\u5bf9\u8fd9\u573a\u8f93\u7403\u5e94\u8d1f80%\u8d23\u4efb\u3002 1\u3001\u6574\u573a\u6218\u672f\u610f\u56fe\u6a21\u7cca\u4e0d\u6e05\u6670\uff0c\u9996\u53d1\u4eba\u5458\u9488\u5bf9\u6027\u4e0d\u5f3a 2\u3001\u573a\u9762\u843d\u540e\u4eba\u5458\u8c03\u6574\u4e0d\u53ca\u65f6\uff0c2:0\u65f6\u5c31\u5e94\u8be5\u679c\u65ad\u6362\u5b59\u53ef\u589e\u52a0\u63a7\u7403\u3002\u975e\u8981\u62d6\u52303\u7403\u843d\u540e\u518d\u6362\u4eba\u4e3a\u65f6\u5df2\u665a\uff01", "up": 6}, {"content": "\u7d22\u8428\u60f3\u4ec0\u4e48\u5462 \u9996\u53d1\u4e3a\u4ec0\u4e48\u4e0d\u4e0a\u5b59\u53ef \u90d1\u8fbe\u4f26 \u738b\u6c38\u73c0", "up": 5}]};
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
