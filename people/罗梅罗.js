var data = {"person_name": "\u7f57\u6885\u7f57", "nicknames": "\u7f57\u6885\u7f57", "aspects": {"\u8fdb\u7403": 0.7327586873820537, "\u4f20\u7403": 0.9354971887704503, "\u8d5b\u5b63": 0.7217412522339043, "\u6bd4\u5206": 0.3515574675667228, "\u7403\u5458": 0.4119101015167371, "\u52a9\u653b": 0.4212821077028079, "\u5916\u63f4": 1.0, "\u9632\u5b88": 0.8145528007931531, "\u6bd4\u8d5b": 0.45245536391969693, "\u5c04\u95e8": 0.5916236654072332}, "overall_heat": 52.0, "overall_polar": -0.035, "name": "215", "nationality": "\u5df4\u62c9\u572d", "position": "\u4e2d\u573a", "goal": "4", "assist": "8", "team_name": "\u4e0a\u6d77\u7533\u82b1", "name_en": "Oscar Romero", "age": "26", "height": "176", "weight": "73"};
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
var topic_keywords = {"0": [{"name": "\u7f57\u6885\u7f57", "value": 0.04682040531097135}, {"name": "\u6052\u5927", "value": 0.016538551129746098}, {"name": "\u767b\u5df4\u5df4", "value": 0.016538551129746098}, {"name": "\u8e22", "value": 0.014209177731190308}, {"name": "\u77e5\u9053", "value": 0.014209177731190308}, {"name": "\u611f\u89c9", "value": 0.01187980433263452}, {"name": "\u7533\u82b1", "value": 0.01187980433263452}, {"name": "\u771f\u7684", "value": 0.009550430934078731}, {"name": "\uff01", "value": 0.009550430934078731}, {"name": "\u83ab\u96f7\u8bfa", "value": 0.009550430934078731}, {"name": "\u8fd9\u573a", "value": 0.009550430934078731}, {"name": "\u8d5b\u5b63", "value": 0.007221057535522944}, {"name": "\u4e3b\u529b", "value": 0.007221057535522944}, {"name": "\u4f20\u7403", "value": 0.007221057535522944}, {"name": "\u597d", "value": 0.007221057535522944}, {"name": "\u4e0d\u9519", "value": 0.007221057535522944}, {"name": "\uff1f", "value": 0.007221057535522944}, {"name": "\u9ec4\u724c", "value": 0.007221057535522944}, {"name": "\u4e0b", "value": 0.007221057535522944}, {"name": "\u6bd4\u5206", "value": 0.007221057535522944}, {"name": "\u9c81\u80fd", "value": 0.007221057535522944}, {"name": "\u73b0\u5728", "value": 0.007221057535522944}, {"name": "\u559c\u6b22", "value": 0.004891684136967156}, {"name": "\u540d\u5355", "value": 0.004891684136967156}, {"name": "\u6ca1\u4f24", "value": 0.004891684136967156}, {"name": "\u6559\u7ec3", "value": 0.004891684136967156}, {"name": "\u5988", "value": 0.004891684136967156}, {"name": "\u65b0\u4eba", "value": 0.004891684136967156}, {"name": "\u65e9", "value": 0.004891684136967156}, {"name": "\u4f30\u8ba1", "value": 0.004891684136967156}], "1": [{"name": "\u7f57\u6885\u7f57", "value": 0.08130615822923515}, {"name": "\uff01", "value": 0.037475345167652864}, {"name": "\uff1f", "value": 0.03309226386149463}, {"name": "\u7533\u82b1", "value": 0.026517641902257284}, {"name": "\u8fdb\u7403", "value": 0.015559938636861713}, {"name": "\u4e0a\u6e2f", "value": 0.013368397983782598}, {"name": "\u9a6c\u4e01\u65af", "value": 0.011176857330703484}, {"name": "\u6700\u540e", "value": 0.008985316677624368}, {"name": "\u8fdb\u653b", "value": 0.008985316677624368}, {"name": "\u66fc\u8054", "value": 0.008985316677624368}, {"name": "\u5f15\u63f4", "value": 0.006793776024545255}, {"name": "\u5e0c\u671b", "value": 0.006793776024545255}, {"name": "\u5b88\u95e8\u5458", "value": 0.006793776024545255}, {"name": "\u673a\u4f1a", "value": 0.006793776024545255}, {"name": "\u74dc\u6797", "value": 0.006793776024545255}, {"name": "\u6273\u56de", "value": 0.006793776024545255}, {"name": "\u52a9\u653b", "value": 0.006793776024545255}, {"name": "\u4ee5\u540e", "value": 0.006793776024545255}, {"name": "\ud83d\ude03", "value": 0.006793776024545255}, {"name": "\u4e00\u57ce", "value": 0.006793776024545255}, {"name": "\u5c0f\u7f16", "value": 0.0046022353714661405}, {"name": "\u5931\u8d25", "value": 0.0046022353714661405}, {"name": "\u4f20\u7403", "value": 0.0046022353714661405}, {"name": "\u8d76\u7d27", "value": 0.0046022353714661405}, {"name": "\u7f57", "value": 0.0046022353714661405}, {"name": "\u4ee5\u4e3a", "value": 0.0046022353714661405}, {"name": "\u5c04\u95e8", "value": 0.0046022353714661405}, {"name": "\u80dc\u5229", "value": 0.0046022353714661405}, {"name": "\u80fd\u529b", "value": 0.0046022353714661405}, {"name": "\u53cc\u65b9", "value": 0.0046022353714661405}]};
var topic_summary = {"0": [{"content": "\u79e6\u5347\u5916\u79df \u6bd5\u6d25\u6d69\u4e0b\u653e \u5c0f\u6bdb\u6441\u51b7\u677f\u51f3 \u4f60\u5168\u7528\u65b0\u4eba\u4e5f\u5c31\u7b97\u4e86 \u5f04\u4e86\u4e2a\u7f57\u6885\u7f57\u8ddf\u56fd\u5185\u7403\u5458\u5dee\u4e0d\u591a \u674e\u5efa\u6ee8 \u6817\u9e4f \u57fa\u672c\u5c5e\u4e8e\u795e\u7ecf\u8d28\u578b \u5f20\u7490\u770b\u5230\u73b0\u5728\u90fd\u6ca1\u53d1\u73b0\u54ea\u91cc\u597d \u6211\u5c31\u5f04\u4e0d\u61c2\u4e86 \u7533\u82b1\u5728\u5e72\u5565", "up": 17}, {"content": "\u8bf4\u8bf4\u770b\u6cd5\u2026\u7f57\u6885\u7f57\u771f\u7684\u4ee3\u66ff\u4e0d\u4e86\u83ab\u96f7\u8bfa\u2026\u674e\u8fd0\u79cb\u7684\u4e0a\u62a2\u90a3\u4e0b\u8fd8\u662f\u90a3\u4e48\u91ce\u2026\u53cd\u6b63\u6211\u89c9\u5f97\u90a3\u7403\u6ca1\u8d8a\u4f4d\u2026\u8fd8\u6709\u5c31\u662f\u2026\u573a\u5730\u522b\u8bf4\u8e22\u7403\u7684\u4eba\u2026\u89c2\u4f17\u770b\u7740\u90fd\u89c9\u5f97\u4e00\u70b9\u89c2\u770b\u6b32\u90fd\u6ca1\u2026", "up": 15}, {"content": "\u7f57\u6885\u7f57\u771f\u7684\u4e0d\u9519\uff0c\u5f88\u5b9e\u7528", "up": 7}, {"content": "\u9996\u5148\u606d\u559c\u9c81\u80fd\uff0c\u9c81\u80fd\u8fd9\u573a\u8e22\u7684\u4e0d\u9519\uff0c\u4f5c\u4e3a\u7533\u82b1\u7403\u8ff7\uff0c\u6211\u611f\u89c9\u8fd9\u573a\u6bd4\u8d5b\u7533\u82b1\u8f93\u7403\u4e24\u540d\u7403\u5458\u8981\u4ed8\u4e3b\u8981\u8d23\u4efb\uff1a\u7f57\u6885\u7f57\u548c\u674e\u5e05\u3002\u524d\u8005\u6570\u6b21\u88ab\u4e00\u6b65\u8fc7\uff0c\u8fd8\u597d\u610f\u601d\u644a\u624b\uff0c\u540e\u8005\u5c31\u4e0d\u8bf4\u4e86\uff0c\u9c81\u80fd\u4e00\u5171\u4e09\u6b21\u5c04\u6b63\uff0c\u9664\u53bb\u90a3\u4e2a\u4e4c\u9f99\u7403\uff0c\u4e5f\u5c31\u662f\u4e24\u6b21\u5c04\u6b63\u88ab\u8fdb\u4e24\u7403\uff0c\u4e0d\u77e5\u9053\u5728\u5e72\u4e9b\u4ec0\u4e48", "up": 5}, {"content": "\u7f57\u6885\u7f57\u6709\u60ca\u559c\uff0c\u5410\u69fd\u4e0b37\u53f7\u5b59\u4e16\u6797", "up": 5}], "1": [{"content": "\u7f57\u6885\u7f57\u8fdb\u7403\u5f88\u6b63\u5e38\uff0c\u6bd5\u7adf\u66fc\u8054\u6765\u7684\uff0c\u5373\u4fbf\u4ee5\u524d\u662f\u95e8\u5c06\ud83d\ude03\ud83d\ude03\ud83d\ude03", "up": 118}, {"content": "\u7f57\u6885\u7f57\u7684\u4f7f\u7528\u8bf4\u660e\u4e66\u627e\u5230\u4e86\uff01\u5e0c\u671b\u7533\u82b1\u52a0\u6cb9\u5427\uff0c\u628a\u5c0f\u7403\u5458\u953b\u70bc\u597d\u4ee5\u540e\uff0c\u672a\u676510\u5e74\u5185\u63f4\u4e0d\u6101\uff01", "up": 27}, {"content": "\u5e0c\u671b\u74dc\u6797\u5c31\u6b64\u6253\u5f00\u8fdb\u7403\u5e10\u6237\uff0c\u591a\u591a\u8d21\u732e\u7cbe\u5f69\u8fdb\u7403\uff0c\u7f57\u6885\u7f57\u6700\u540e\u65f6\u523b\u6709\u4e9b\u86ee\u5e72\u4e86\uff0c\u6700\u540e\u4e09\u811a\u5c04\u95e8\u5176\u5b9e\u9009\u62e9\u4f20\u7403\u673a\u4f1a\u4f1a\u66f4\u597d\uff0c\u53ef\u80fd\u662f\u74dc\u6797\u6709\u8fdb\u7403\uff0c\u83ab\u961f\u6709\u52a9\u653b\uff0c\u6025\u4e8e\u60f3\u8bc1\u660e\u81ea\u5df1\u5427\u3002\u6700\u540e****\u9ad8\u8fea\uff0c\u51ed\u501f\u4e0d\u505c\u7684\u8dd1\u52a8\u65a9\u83b7\u8fdb\u7403\uff0c\u62fc\u5230\u62bd\u7b4b\u4e0b\u573a\uff0c\u597d\u6837\u7684\uff01\u5e0c\u671b\u961f\u53cb\u4ee5\u540e\u591a\u7ed9\u4ed6\u4f20\u7403\uff0c\u522b\u6d6a\u8d39\u4ed6\u7684\u65e0\u7403\u8dd1\u4f4d\u3002\u7533\u82b1\u597d\u6837\u7684\uff0c\u52a0\u6cb9\uff01", "up": 8}, {"content": "\u7f57\u6885\u7f57\u771f\u6ca1\u9a6c\u4e01\u65af\u597d\u7528 \u611f\u89c9\u4f5c\u7528\u548cgio\u91cd\u53e0\u4e86", "up": 7}, {"content": "\u679c\u7136\u6478\u4f60\u9e1f\u5c31\u4f1a\u6446\u5927\u5df4\uff0c\u597d\u597d\u7684\u7f57\u6885\u7f57\u5728\u66fc\u8054\u53ea\u80fd\u5f53\u5b88\u95e8\u5458[\u9177][\u9177]", "up": 5}]};
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
