var data = {"person_name": "\u4e8e\u5927\u5b9d", "nicknames": "\u4e8e\u5927\u5b9d", "aspects": {"\u72af\u89c4": 0.34758316493250724, "\u7403\u5458": 0.6493276043770853, "\u7ea2\u724c": 0.7192695630070699, "\u8fdb\u7403": 0.280780071162511, "\u7403\u8ff7": 0.3010679764523244, "\u70b9\u7403": 0.3753628662782464, "\u6bd4\u8d5b": 0.5057789857428034, "\u8fdb\u653b": 0.5834430265613485, "\u5916\u63f4": 0.5804855044543339, "\u8db3\u534f": 0.34056394929115197}, "overall_heat": 82.0, "overall_polar": -0.297, "name": "65", "nationality": "\u4e2d\u56fd", "position": "\u524d\u950b", "goal": "2", "assist": "1", "team_name": "\u5317\u4eac\u4e2d\u8d6b\u56fd\u5b89", "name_en": "Yu Dabao", "age": "30", "height": "182", "weight": "78"};
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
var topic_keywords = {"0": [{"name": "\u4e8e\u5927\u5b9d", "value": 0.041750570546382065}, {"name": "\uff01", "value": 0.037723184320042964}, {"name": "\u56fd\u5b89", "value": 0.017586253188347428}, {"name": "\uff1f", "value": 0.013558866962008323}, {"name": "\u4eca\u5e74", "value": 0.009531480735669217}, {"name": "\u65bd\u5bc6\u7279", "value": 0.008189018660222848}, {"name": "\u6bd4\u8d5b", "value": 0.008189018660222848}, {"name": "\u9c81\u80fd", "value": 0.008189018660222848}, {"name": "\u6bd4\u57c3\u62c9", "value": 0.00684655658477648}, {"name": "\u771f\u7684", "value": 0.00684655658477648}, {"name": "\u53ef\u601c", "value": 0.005504094509330111}, {"name": "\u5929\u6d25", "value": 0.005504094509330111}, {"name": "\u7403\u5458", "value": 0.005504094509330111}, {"name": "\u8fdb\u7403", "value": 0.005504094509330111}, {"name": "\u8fdb\u653b", "value": 0.005504094509330111}, {"name": "\u56de\u6765", "value": 0.005504094509330111}, {"name": "\u8c03\u6574", "value": 0.005504094509330111}, {"name": "\u540e", "value": 0.005504094509330111}, {"name": "\u5f20\u7a00\u54f2", "value": 0.005504094509330111}, {"name": "\u6362\u4eba", "value": 0.004161632433883743}, {"name": "\u593a\u51a0", "value": 0.004161632433883743}, {"name": "\u8d62", "value": 0.004161632433883743}, {"name": "\u540e\u9632", "value": 0.004161632433883743}, {"name": "\u5206\u949f", "value": 0.004161632433883743}, {"name": "\u5b8c\u6210", "value": 0.004161632433883743}, {"name": "\u4e3b\u6559\u7ec3", "value": 0.004161632433883743}, {"name": "\u5965\u53e4\u65af\u6258", "value": 0.004161632433883743}, {"name": "\u8db3\u534f", "value": 0.004161632433883743}, {"name": "\u4e2d\u8d85", "value": 0.004161632433883743}, {"name": "\u804c\u4e1a", "value": 0.004161632433883743}], "1": [{"name": "\u4e8e\u5927\u5b9d", "value": 0.07754791217159539}, {"name": "\uff1f", "value": 0.04454880060921437}, {"name": "\uff01", "value": 0.028049244828023862}, {"name": "\ud83d\ude02", "value": 0.017895672039598933}, {"name": "\u72af\u89c4", "value": 0.014088082243939586}, {"name": "\u540e\u536b", "value": 0.01281888564538647}, {"name": "\u5e15\u6258", "value": 0.01281888564538647}, {"name": "\u56fd\u5b89", "value": 0.009011295849727123}, {"name": "\u5916\u63f4", "value": 0.009011295849727123}, {"name": "\u6b66\u78ca", "value": 0.009011295849727123}, {"name": "\u738b\u5f64", "value": 0.007742099251174007}, {"name": "\u7403", "value": 0.007742099251174007}, {"name": "\u7ea2\u724c", "value": 0.007742099251174007}, {"name": "\u8e22", "value": 0.007742099251174007}, {"name": "\u70b9\u7403", "value": 0.0064729026526208905}, {"name": "\u5e94\u8be5", "value": 0.0064729026526208905}, {"name": "\u6253", "value": 0.0064729026526208905}, {"name": "\u78b0\u5230", "value": 0.0064729026526208905}, {"name": "\u52a8\u4f5c", "value": 0.0064729026526208905}, {"name": "\u5317\u4eac", "value": 0.0064729026526208905}, {"name": "\u5b59\u53ef", "value": 0.005203706054067775}, {"name": "\u6c60\u5fe0\u56fd", "value": 0.005203706054067775}, {"name": "\u4e00\u4e0b", "value": 0.005203706054067775}, {"name": "\u8fdb\u7403", "value": 0.005203706054067775}, {"name": "\u4e2d", "value": 0.005203706054067775}, {"name": "\u4e00\u4e2a", "value": 0.005203706054067775}, {"name": "\u88c1\u5224", "value": 0.005203706054067775}, {"name": "\u9ec4\u724c", "value": 0.005203706054067775}, {"name": "\u5148", "value": 0.005203706054067775}, {"name": "\u4eba", "value": 0.005203706054067775}]};
var topic_summary = {"0": [{"content": "\u8fd9\u5c31\u662f\u53cc\u91cd\u6807\u51c6\uff0c\u9c81\u80fd\u8fdb\u7b2c\u4e8c\u4e2a\u7403\u548c\u56fd\u5b89\u7684\u7b2c\u4e8c\u4e2a\u7403\u6709\u533a\u522b\u5417\uff1f\uff01\u4e8e\u5927\u5b9d\u4f38\u624b\u63a8\u4eba\uff0c\u53c2\u4e0e\u8fdb\u653b\uff01\uff01\u5475\u5475\u4e86\uff0c\u8db3\u534f\u8d62\u4e86\uff01\u56fd\u5b89\u662f\u51a0\u519b\uff0c\u9c81\u80fd\u7403\u8ff7\u8d60[\u5455\u5410][\u5455\u5410]", "up": 1712}, {"content": "\u56fd\u5b89\u4eca\u5e74\u8e22\u5f97\u771f\u4e0d\u9519\uff0c\u98ce\u683c\u8ddf\u5df4\u8428\u66fc\u57ce\u90fd\u6bd4\u8f83\u50cf\uff0c\u7b2c\u4e00\u573a\u8f93\u7ed9\u9c81\u80fd\u7eaf\u5c5e\u8d56\u65bd\u5bc6\u7279\u778e\u6392\u9635\u5bb9\uff0c\u540e\u51e0\u573a\u4e2d\u573a\u4e0a\u4e86\u6c60\u5fe0\u56fd\uff0c\u6734\u6210\u548c\u6bd4\u57c3\u62c9\u4e4b\u540e\uff0c\u52a0\u4e0a\u5965\u53e4\u65af\u6258\uff0c\u4e2d\u573a\u5b9e\u529b\u5728\u4e2d\u8d85\u7edd\u5bf9\u6570\u4e00\u6570\u4e8c\uff0c\u524d\u573a\u7d229\u4f9d\u7136\u7a33\u5b9a\uff0c\u7b49\u5f85\u5df4\u574e\u5e03\u9002\u5e94\u4e86\u4e2d\u8d85\uff0c\u52a0\u4e0a\u8d85\u7ea7\u65b0\u79c0\u97e6\u4e16\u8c6a\uff0c\u66ff\u8865\u6709\u4e8e\u5927\u5b9d\uff0c\u8fd8\u6709\u505c\u8d5b\u7684\u5f20\u7a00\u54f2\uff0c\u56fd\u5b89\u4eca\u5e74\u4e2d\u524d\u573a\u5f88\u5f3a\u5927\uff0c\u540e\u9632\u7ebf\u9010\u6e10\u78e8\u5408\u7684\u4e5f\u4e0d\u9519\uff0c\u4eca\u5e74\u6709\u5e0c\u671b\u4fdd\u4e09\u4e89\u4e00\u3002\u6700\u62c5\u5fc3\u7684\u5c31\u662f\u4f53\u80fd\uff0c\u9ad8\u4f4d\u903c\u62a2\u5bf9\u4f53\u529b\u8981\u6c42\u6781\u5927\uff0c\u522b\u50cf\u4e0a\u8d5b\u5b63\u4f3c\u7684\u540e\u534a\u6bb5\u6389\u961f\u5c31\u884c\u4e86\u3002\u867d\u8bf4\u8d62\u7684\u90fd\u7b97\u5f31\u961f\uff0c\u4f46\u8d77\u7801\u6bd4\u4e0a\u8d5b\u5b63\u8e22\u5f97\u597d\u591a\u4e86\uff0c\u4eca\u5e74\u771f\u6709\u5e0c\u671b\uff01\uff01\uff01", "up": 172}, {"content": "\u65bd\u5bc6\u7279\u4e0a\u534a\u573a\u4e8c\u5341\u591a\u5206\u949f\u65f6\u64a4\u4e0b\u4e8e\u5927\u5b9d\uff0c\u6362\u4e0a\u5f20\u7a00\u54f2\uff0c\u50b2\u9aa8\u62c9\u5230\u53f3\u524d\uff01\u5982\u679c\u771f\u7684\u4e0d\u662f\u4e8e\u5927\u5b9d\u6709\u4f24\u624d\u505a\u6b64\u8c03\u6574\u7684\u8bdd\uff0c\u90a3\u8fd9\u4e2a\u6362\u4eba\u771f\u7684\u4f53\u73b0\u4e86\u65bd\u5bc6\u7279\u7684\u667a\u6167\uff01\uff01\u9605\u8bfb\u80fd\u529b\u8fd8\u662f\u5f88\u5f3a\u5927\u554a\uff01\u51e0\u4e4e\u5b8c\u5168\u63a7\u5236\u4e2d\u573a\uff0c\u548c\u963b\u6320\u4e00\u65b9\u6253\u53cd\u51fb\uff01\u5148\u7a33\u540e\u8d62\u59a5\u59a5\u7684", "up": 9}, {"content": "\u56fd\u5b89\uff1a\u7ed9\uff0c\u5144\u5f1f\uff01\u4e09\u5206\u4f60\u62ff\u4e0a\uff0c\u53bb\u5e74\u6211\u4e5f\u6709\u63ed\u4e0d\u5f00\u9505\u7684\u65f6\u5019\uff01 \u6052\u4e30\uff1a\u592a\u611f\u8c22\u4f60\u4e86\u54e5\uff0c\u6211\u5982\u679c\u80fd\u4fdd\u7ea7\u6210\u529f\uff0c\u6587\u603b\u9a6c\u4e0a\u5ac1\u7ed9\u4e8e\u5927\u5b9d\uff01", "up": 8}, {"content": "\u56fd\u5b89\u7684\u8fdb\u653b\u786e\u5b9e\u725b\u903c\uff0c\u5965\u53e4\u65af\u6258\u548c\u6bd4\u57c3\u62c9\uff0c\u4f46\u662f\u591a\u4e8f\u4e86\u6211\u4eec\u7684\u5367\u5e95\u5df4\u574e\u5e03\u548c\u4e8e\u5927\u5b9d[\u6342\u8138]\u5f53\u7136\u6700\u91cd\u8981\u7684\u662f\u5f00\u6302\u7684\u5927\u96f7\uff0c\u5409\u5c14\u6b63\u9762\u9632\u5b88\u4e5f\u662f[\u5389\u5bb3]\uff0c\u5ba2\u573a\u62ff\u4e00\u5206\u53ef\u4ee5\u63a5\u53d7", "up": 7}], "1": [{"content": "\u4e8e\u5927\u5b9d\u62a2\u7403\u90a3\u4e0b\u6bd4\u738b\u5f64\u72e0\u5427\uff0c\u8fd9\u4e2a\u4e0d\u72af\u89c4\uff1f", "up": 848}, {"content": "\u606d\u559c\u6b66\u78ca\uff0c\u83b7\u5f97\u91d1\u9774\u3002\u4e0d\u8fc7\uff0c\u6b66\u78ca\u6bd5\u7adf\u53ea\u662f\u4e2a\u4f53\u7cfb\u7403\u5458\u3002\u610f\u5473\u7740\uff0c\u79bb\u5f00\u4e0a\u6e2f\u8fd9\u4e2a\u4f53\u7cfb\uff0c\u4ed6\u5c31\u8fdb\u4e0d\u4e86\u7403\u4e86\u3002\u6bd4\u5982\uff0c\u5728\u56fd\u8db3\uff0c\u6b66\u78ca\u7684\u8868\u73b0\u751a\u81f3\u8fdc\u8fdc\u4e0d\u5982\u4e8e\u5927\u5b9d\uff0c\u6768\u65ed\u3002", "up": 21}, {"content": "\u6211\u5c31\u60f3\u77e5\u9053\u4e8e\u5927\u5b9d\u8fd9\u7403\u4e0d\u72af\u89c4\uff1f", "up": 9}, {"content": "\u4e8e\u5927\u5b9d\u7684\u70b9\u7403\uff0c\u6709\u70b9\uff0c\u6ca1\u90a3\u91d1\u521a\u94bb\u513f\u7684\u611f\u89c9\uff0c\u89d2\u5ea6\u901f\u5ea6\u90fd\u4e0d\u884c\uff0c\u539f\u5730\u6446\u817f\u6c34\u5e73\u4e0d\u591f", "up": 7}, {"content": "\u8865\u65f6\u9636\u6bb5\u4e8e\u5927\u5b9d\u5230\u5e95\uff0c\u88c1\u5224\u770b\u7740\u5efa\u4e1a\u62ff\u7403\u8fc7\u4eba\uff0c\u8fc7\u53bb\u4e86\u54e8\u5c31\u54cd\u4e86\uff01", "up": 7}]};
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
