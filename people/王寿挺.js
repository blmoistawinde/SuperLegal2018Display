var data = {"person_name": "\u738b\u5bff\u633a", "nicknames": "\u738b\u5bff\u633a", "aspects": {"\u624b\u7403": 0.6963128165027289, "\u7403\u5458": 0.3370314221421742, "\u70b9\u7403": 0.24284202842567212, "\u8865\u65f6": 0.6674512558881092, "\u6bd4\u8d5b": 0.36326432517197804, "\u89d2\u7403": 0.4368760539373342, "\u7403\u8ff7": 0.41867352361684446, "\u961f\u5458": 0.5238757293818278, "\u9ec4\u724c": 0.4831383259750414, "\u7403\u95e8": 0.27316844995799455}, "overall_heat": 87.0, "overall_polar": -0.262, "name": "157", "nationality": "\u4e2d\u56fd", "position": "\u4e2d\u573a", "goal": "0", "assist": "0", "team_name": "\u957f\u6625\u4e9a\u6cf0", "name_en": "Wang Shouting", "age": "33", "height": "186", "weight": "82"};
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
var topic_keywords = {"0": [{"name": "\u738b\u5bff\u633a", "value": 0.1020592894319982}, {"name": "\u4e9a\u6cf0", "value": 0.018329938900203666}, {"name": "\uff01", "value": 0.016066983480425436}, {"name": "\u518d", "value": 0.011541072640868975}, {"name": "\u7838", "value": 0.009278117221090744}, {"name": "\u8e22", "value": 0.009278117221090744}, {"name": "\uff1f", "value": 0.009278117221090744}, {"name": "\u89c9\u5f97", "value": 0.007015161801312514}, {"name": "\u6362", "value": 0.007015161801312514}, {"name": "\u957f\u6625", "value": 0.007015161801312514}, {"name": "\u771f", "value": 0.007015161801312514}, {"name": "\u8138", "value": 0.007015161801312514}, {"name": "\u8e6d", "value": 0.004752206381534284}, {"name": "\u5e73", "value": 0.004752206381534284}, {"name": "\u8d56", "value": 0.004752206381534284}, {"name": "\u6709\u70b9", "value": 0.004752206381534284}, {"name": "\u65e9\u70b9", "value": 0.004752206381534284}, {"name": "\u518d\u89c1", "value": 0.004752206381534284}, {"name": "\u5347\u624b", "value": 0.004752206381534284}, {"name": "\u6ed1\u7a3d", "value": 0.004752206381534284}, {"name": "\u6f14\u5458", "value": 0.004752206381534284}, {"name": "\u597d", "value": 0.004752206381534284}, {"name": "\u73b0\u5728", "value": 0.004752206381534284}, {"name": "\u5403", "value": 0.004752206381534284}, {"name": "\u540e", "value": 0.004752206381534284}, {"name": "\u56fd\u5b89", "value": 0.004752206381534284}, {"name": "\u7403\u8ff7", "value": 0.004752206381534284}, {"name": "\u4eba", "value": 0.004752206381534284}, {"name": "\u5012\u5730", "value": 0.004752206381534284}, {"name": "\u7406\u89e3", "value": 0.004752206381534284}], "1": [{"name": "\u738b\u5bff\u633a", "value": 0.06600349509342654}, {"name": "\uff01", "value": 0.048528027960747414}, {"name": "\u7403\u5458", "value": 0.02164269391047184}, {"name": "\u56fd\u5b89", "value": 0.01895416050544428}, {"name": "\uff1f", "value": 0.0176098938029305}, {"name": "\u624b\u7403", "value": 0.01626562710041672}, {"name": "\u4e9a\u6cf0", "value": 0.01626562710041672}, {"name": "\u9a6c\u5b81", "value": 0.013577093695389165}, {"name": "\u6700\u540e", "value": 0.013577093695389165}, {"name": "\u6bd4\u8d5b", "value": 0.010888560290361608}, {"name": "\u70b9\u7403", "value": 0.009544293587847828}, {"name": "\u88c1\u5224", "value": 0.009544293587847828}, {"name": "\u8865\u65f6", "value": 0.009544293587847828}, {"name": "\u95ee\u9898", "value": 0.009544293587847828}, {"name": "\u89d2\u7403", "value": 0.00820002688533405}, {"name": "\u4e00\u4e2a", "value": 0.00820002688533405}, {"name": "\u5206\u949f", "value": 0.00820002688533405}, {"name": "\u55b7", "value": 0.006855760182820271}, {"name": "\u660e\u663e", "value": 0.006855760182820271}, {"name": "\u8db3\u7403", "value": 0.006855760182820271}, {"name": "\u7403", "value": 0.006855760182820271}, {"name": "\u592a", "value": 0.006855760182820271}, {"name": "\u5e94\u8be5", "value": 0.006855760182820271}, {"name": "\u56f4\u653b", "value": 0.005511493480306493}, {"name": "\u9001", "value": 0.005511493480306493}, {"name": "\u4eba", "value": 0.005511493480306493}, {"name": "\u4e00\u4e0b", "value": 0.005511493480306493}, {"name": "\u89c9\u5f97", "value": 0.005511493480306493}, {"name": "\u53d7\u4f24", "value": 0.005511493480306493}, {"name": "\u51fa\u573a", "value": 0.004167226777792714}]};
var topic_summary = {"0": [{"content": "\u738b\u5bff\u633a\u620f\u6709\u70b9\u8fc7\u4e86\uff0c\u70b9\u7403\u7ed9\u4e5f\u5c31\u7ed9\u4e86\uff0c\u8fd8\u53bb\u8ddf\u7d22\u91cc\u4e9a\u8bfa\u4e89\u7403\uff0c\u5f3a\u884c\u52a0\u620f\uff0c\u8fc7\u72b9\u4e0d\u53ca\u554a\uff0c\u8fd8\u6709\u5f88\u5927\u7684\u63d0\u5347\u7a7a\u95f4\uff01", "up": 490}, {"content": "\u738b\u5bff\u633a\u53ef\u80fd\u4e70\u4e86\u5e73[\u518d\u89c1][\u518d\u89c1]", "up": 413}, {"content": "\u522b\u5149\u987e\u7740\u67e5\u5a31\u4e50\u5708\uff0c\u72e0\u67e5\u4e00\u4e0b\u738b\u5bff\u633a\uff0c\u7edd\u5bf9\u6709\u6536\u83b7\u3002", "up": 80}, {"content": "\u738b\u5bff\u633a\u8fd9\u4e0b\u771f\u50cf\u4e70\u7403\u4e86", "up": 43}, {"content": "\u611f\u89c9\u738b\u5bff\u633a\u65e0\u8f9c\u7684\uff0c\u5c31\u7b97\u4ed6\u4e0d\u6545\u610f\u5347\u624b\u53bb\u6321\u7403\uff0c\u4f24\u505c\u8865\u65f6\u8fd8\u4f1a\u6ca1\u5b8c\u6ca1\u4e86\uff0c\u7ee7\u7eed\u8865\u5230\u8ffd\u5e73\u4e3a\u6b62\uff0c\u65e2\u7136\u8fd9\u6837\uff0c\u4e0d\u5982\u65e9\u70b9\u5347\u624b\u53bb\uff0c\u65e9\u70b9\u6536\u5de5\u3002", "up": 10}], "1": [{"content": "\u738b\u5bff\u633a\u8fd9\u624b\u7403\u6709\u95ee\u9898\uff0c\u6211\u5230\u89c9\u5f97\u50cf\u6545\u610f\u9001\u70b9", "up": 890}, {"content": "\u738b\u5bff\u633a\u4f60\u5c31\u662f\u4e00\u4e2a\u5c71\u6ce1\uff0c\u672c\u6765\u80fd\u9876\u5230\u7684\uff0c\u975e\u8981\u7528\u624b", "up": 809}, {"content": "\u56de\u590d\uff1a\u94ed\u4ec1\u7fe1\u7fe0 \u8865\u65f6\u7b2c\u4e94\u5206\u949f\uff0c\u4e9a\u6cf0\u7403\u5458\u62bd\u7b4b\u5012\u5730\uff0c\u9a6c\u5b81\u4e0a\u524d\u8be2\u95ee\u80fd\u5426\u575a\u6301\uff0c\u7403\u5458\u8868\u793a\u65e0\u6cd5\u575a\u6301\uff0c\u9a6c\u5b81\u53ec\u5524\u961f\u533b\u8fdb\u573a\u5e76\u505c\u8868\u3002\u7403\u5458\u62ac\u51fa\u573a\u5730\u63a5\u53d7\u6cbb\u7597\uff0c\u56fd\u5b89\u5f00\u51fa\u89d2\u7403\uff0c\u4e9a\u6cf0\u738b\u5bff\u633a\u660e\u663e\u624b\u7403\uff08\u624b\u81c2\u5f20\u5f00\u5e76\u6539\u53d8\u7403\u8fd0\u884c\u8f68\u8ff9\uff09\uff0c\u9a6c\u5b81\u5224\u7f5a\u70b9\u7403\u3002\u4e9a\u6cf0\u7403\u5458\u56f4\u653b\u88c1\u5224\uff0c\u9a6c\u5b81\u8868\u793a\u81ea\u5df1\u770b\u7684\u5f88\u6e05\u695a\u5e76\u591a\u6b21\u8ba9\u4e9a\u6cf0\u7403\u5458\u79bb\u5f00\uff0c16\u53f7\u4e0d\u4f9d\u4e0d\u9976\uff0c\u88ab\u9a6c\u5b81\u51fa\u793a\u9ec4\u724c\uff0c\u4e24\u9ec4\u53d8\u4e00\u7ea2\u88ab\u7f5a\u51fa\u573a\u3002\u6bd4\u8d5b\u6062\u590d\u8fd0\u884c\uff0c\u7d22\u91cc\u4e9a\u8bfa98\u5206\u949f\u7f5a\u8fdb\u70b9\u7403\u3002\u6211\u5c31\u7eb3\u95f7\u4e86\uff0c\u9a6c\u5b81\u54ea\u91cc\u6709\u4e0d\u5bf9\u7684\u5730\u65b9\u4e86\uff1f\u4f60\u5012\u5730\u62d6\u65f6\u95f4\u88c1\u5224\u5c31\u4e0d\u80fd\u505c\u8868\u4e86\uff1f\u4f60\u56f4\u653b\u88c1\u5224\uff0c\u5c31\u4e0d\u80fd\u51fa\u9ec4\u724c\u4e86\uff0c\u6bd4\u8d5b\u5c31\u4e0d\u8fdb\u884c\u4e86\uff1f\u6211\u4e0d\u559c\u6b22\u56fd\u5b89\uff0c\u4f46\u56fd\u5b89\u7684\u5e73\u5c40\u5b8c\u5168\u662f \u738b\u5bff\u633a\u8111\u5b50\u77ed\u8def\u9001\u7684\uff0c\u8ddf\u9a6c\u5b81\u6ca1\u5173\u7cfb\u3002\u55b7\u4e5f\u5f97\u55b7\u5bf9\u4eba\u3002\u5c31\u738b\u5bff\u633a\u90a3\u4e2a\u624b\u7403\uff0c\u4e2d\u4e59\u7403\u5458\u90fd\u505a\u4e0d\u6765\uff0cla ji\u4e00\u7ea7\u7684\u5b58\u5728\uff0c\u4e0d\u55b7\u4ed6\u55b7\u88c1\u5224\uff0c\u771f\u6709\u610f\u601d\u3002\u6211\u89c9\u5f97\u9a6c\u5b81\u505a\u7684\u5bf9\uff0c\u5c31\u4e0d\u80fd\u60ef\u7740\u7403\u5458\u62d6\u65f6\u95f4\uff0c\u56f4\u653b\u88c1\u5224\u3002", "up": 316}, {"content": "\u8bf4\u738b\u5bff\u633a\u51fa\u4e8e\u81ea\u6211\u4fdd\u62a4\u624d\u624b\u7403\u7684\uff0c\u6211\u5c31\u60f3\u95ee\u95ee\uff0c\u9996\u5148\u672c\u80fd\u51fa\u4e8e\u4fdd\u62a4\u81ea\u5df1\u5e94\u8be5\u662f\u53bb\u906e\u4f4f\u8111\u888b\u800c\u4e0d\u662f\u624b\u81c2\u4f38\u90a3\u4e48\u957f\u53bb\u6321\uff1b\u5176\u6b21\u4ece\u89c6\u9891\u4e0a\u6765\u770b\u76ee\u7684\u5b8c\u5168\u662f\u4e3a\u4e86\u7528\u624b\u81c2\u53bb\u89e6\u78b0\u5230\u7403\uff0c\u800c\u4e0d\u662f\u4e3a\u4e86\u53bb\u89e3\u56f4\u3002\u6545\u610f\u624b\u7403\u592a\u660e\u663e\u4e86\uff0c\u4e3a\u4ec0\u4e48\u8981\u4e3a\u4ed6\u6d17\uff1f\uff1f\uff1f\uff1f\uff1f\uff1f", "up": 225}, {"content": "\u6211\u662f\u957f\u6625\u7403\u8ff7 \u522b\u7684\u4e0d\u591a\u8bf4 \u8981\u611f\u8c22\u4e00\u4e0b\u5f00\u573a\u738b\u5bff\u633a\u53d7\u4f24\u65f6\u7b2c\u4e00\u65f6\u95f4\u51b2\u4e0a\u53bb\u7684\u5e94\u8be5\u662f\u5218\u6bbf\u5ea7\u5427\uff01\u8fd8\u6709\u6052\u5927\u7684\u961f\u533b\u4ee5\u53ca\u53c2\u4e0e\u5904\u7f6e\u4f24\u60c5\u7684\u6bcf\u4e2a\u4eba\uff01\u603b\u6709\u4e9b\u4e8b\u60c5\u6bd4\u6bd4\u8d5b\u8f93\u8d62\u8981\u91cd\u8981\uff01", "up": 15}]};
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
