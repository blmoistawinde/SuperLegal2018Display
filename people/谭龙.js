var data = {"person_name": "\u8c2d\u9f99", "nicknames": "\u8c2d\u9f99", "aspects": {"\u5934\u7403": 0.6022131187881765, "\u7ea2\u724c": 0.6517271234300972, "\u56fd\u5bb6\u961f": 0.49042156262529263, "\u7403\u8ff7": 0.5930982121529372, "\u7403\u5458": 0.5075893141684007, "\u8fdb\u7403": 0.3424836144701492, "\u6bd4\u8d5b": 0.6144407254583671, "\u5355\u5200\u7403": 1.0, "\u5c04\u95e8": 0.1820699583971797}, "overall_heat": 63.0, "overall_polar": 0.38, "name": "162", "nationality": "\u4e2d\u56fd", "position": "\u524d\u950b", "goal": "5", "assist": "5", "team_name": "\u957f\u6625\u4e9a\u6cf0", "name_en": "Tan Long", "age": "30", "height": "185", "weight": "77"};
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
var topic_keywords = {"0": [{"name": "\u8c2d\u9f99", "value": 0.09655320059944338}, {"name": "\uff01", "value": 0.04303147077713552}, {"name": "\u4e9a\u6cf0", "value": 0.023763648041104687}, {"name": "\uff1f", "value": 0.01520017126953543}, {"name": "\u4f0a\u54c8\u6d1b", "value": 0.01520017126953543}, {"name": "\u8e22", "value": 0.013059302076643116}, {"name": "\u771f", "value": 0.010918432883750802}, {"name": "\u6c34\u5e73", "value": 0.010918432883750802}, {"name": "\u597d", "value": 0.010918432883750802}, {"name": "\u56fd\u5bb6\u961f", "value": 0.010918432883750802}, {"name": "\u4e2d\u8d85", "value": 0.010918432883750802}, {"name": "\u4e0d\u9519", "value": 0.008777563690858487}, {"name": "\u957f\u6625", "value": 0.008777563690858487}, {"name": "\u7ea2\u724c", "value": 0.008777563690858487}, {"name": "\u4f55\u8d85", "value": 0.008777563690858487}, {"name": "\u673a\u4f1a", "value": 0.008777563690858487}, {"name": "\u7edd\u6740", "value": 0.006636694497966174}, {"name": "\u901f\u5ea6", "value": 0.006636694497966174}, {"name": "\u524d\u950b", "value": 0.006636694497966174}, {"name": "\u6bd4\u8d5b", "value": 0.006636694497966174}, {"name": "\u88c1\u5224", "value": 0.006636694497966174}, {"name": "\u611f\u89c9", "value": 0.006636694497966174}, {"name": "\u5f3a", "value": 0.006636694497966174}, {"name": "\u6253", "value": 0.006636694497966174}, {"name": "\u4e00\u811a", "value": 0.006636694497966174}, {"name": "\u73b0\u5728", "value": 0.006636694497966174}, {"name": "\u53ef\u60dc", "value": 0.00449582530507386}, {"name": "\u660e\u663e", "value": 0.00449582530507386}, {"name": "\u8840\u6027", "value": 0.00449582530507386}, {"name": "\u70b9", "value": 0.00449582530507386}], "1": [{"name": "\u8c2d\u9f99", "value": 0.06523855890944498}, {"name": "\uff01", "value": 0.03278156442713404}, {"name": "\u6052\u5927", "value": 0.023044466082440762}, {"name": "\u5e94\u8be5", "value": 0.016553067185978577}, {"name": "\u7403\u5458", "value": 0.016553067185978577}, {"name": "\u5439", "value": 0.013307367737747482}, {"name": "\uff1f", "value": 0.013307367737747482}, {"name": "\u5bf9\u65b9", "value": 0.010061668289516391}, {"name": "\u524d", "value": 0.010061668289516391}, {"name": "\u51af\u6f47\u9706", "value": 0.006815968841285297}, {"name": "\u6ca1\u60f3\u5230", "value": 0.006815968841285297}, {"name": "\u7edd\u6740", "value": 0.006815968841285297}, {"name": "\u7ea2\u724c", "value": 0.006815968841285297}, {"name": "\u786e\u5b9e", "value": 0.006815968841285297}, {"name": "\u771f\u7684", "value": 0.006815968841285297}, {"name": "\u7528\u529b", "value": 0.006815968841285297}, {"name": "\u4e00\u6ce2", "value": 0.006815968841285297}, {"name": "\u72af\u89c4", "value": 0.006815968841285297}, {"name": "\u725b", "value": 0.006815968841285297}, {"name": "\u6fc0\u6d3b", "value": 0.006815968841285297}, {"name": "\u660e\u663e", "value": 0.006815968841285297}, {"name": "\u6536", "value": 0.006815968841285297}, {"name": "\u4e0d\u4f4f", "value": 0.006815968841285297}, {"name": "\u5f7b\u5e95", "value": 0.006815968841285297}, {"name": "\u5012\u5730", "value": 0.006815968841285297}, {"name": "\u5c04\u95e8", "value": 0.006815968841285297}, {"name": "\u5904\u7f5a", "value": 0.006815968841285297}, {"name": "\u5455\u5410", "value": 0.006815968841285297}, {"name": "\u518d\u89c1", "value": 0.006815968841285297}, {"name": "\u5355\u5200", "value": 0.006815968841285297}]};
var topic_summary = {"0": [{"content": "\u6ca1\u6709\u8868\u626c\u8c2d\u9f99\u7684\u5417\uff0c\u4e2d\u56fd\u4eba\u6885\u5f00\u4e8c\u5ea6\u52a0\u7edd\u6740\u3002", "up": 289}, {"content": "\u8c2d\u9f99\u5f3a\u884c\u4e3a\u4e9a\u6cf0\u7eed\u547d\uff01\u7edd\u6740\u6cea\u6d12\u8d5b\u573a\uff01\u771f\u6c49\u5b50\uff01\u4e9a\u6cf0\u52a0\u6cb9\uff01", "up": 266}, {"content": "\u8c2d\u9f99\u8fdb\u7403\u540e\u70ed\u6cea\u76c8\u7736\uff0c\u4e9a\u6cf0\u633a\u4f4f\uff0c\u4e00\u5b9a\u8981\u7559\u5728\u4e2d\u8d85!", "up": 62}, {"content": "\u8c2d\u9f99\u7684\u7edd\u5e73\u7403\u503c\u5343\u91d1\u554a", "up": 55}, {"content": "\u5927\u5bb6\u6ca1\u89c9\u5f97\u8c2d\u9f99\u8e22\u7684\u7279\u522b\u597d\u5417\uff1f", "up": 17}], "1": [{"content": "\u90d1\u9f99\u4e0a\u53bb\u5f7b\u5e95\u6fc0\u6d3b\u4e86\u8c2d\u9f99\uff01", "up": 725}, {"content": "\u90d1\u9f99\u4e0a\u53bb\u5f7b\u5e95\u6fc0\u6d3b\u4e86\u8c2d\u9f99\uff01", "up": 7}, {"content": "\u8c2d\u9f99\u6700\u540e\u51b3\u5e73\u771f\u7684\u5173\u952e \u6cea\u6492\u8d5b\u573a \u725b\u903c\uff01\uff01", "up": 6}, {"content": "\u5361\u5e05\u4e34\u573a\u5e94\u53d8\u8fd8\u662f\u8ddf\u91cc\u76ae\u5dee\u592a\u8fdc\uff0c\u4e5f\u6bd4\u4e0d\u4e0a\u65af\u79d1\u62c9\u91cc\uff1b\u8c2d\u9f99\u4e0b\u534a\u573a70\u5206\u949f\u7684\u9ec4\u724c\u94f2\u7403\u7edd\u5bf9\u5e94\u8be5\u7ea2\u724c+\u8ffd\u52a0\u5904\u7f5a\uff0c\u6162\u955c\u91cd\u653e\u660e\u663e\u4e0d\u662f\u6536\u4e0d\u4f4f\u811a\u800c\u662f\u5012\u5730\u540e\u7528\u529b\u4e00\u8e6c\u8e29\u5bf9\u65b9\u88e4\u88c6\uff0c\u592a\u9ed1\u4e86", "up": 5}, {"content": "\u867d\u7136\u7b2c\u4e8c\u4e2a\u8fdb\u7403\u524d\u51af\u6f47\u9706\u5bf9\u8c2d\u9f99\u7684\u72af\u89c4\u5224\u5f97\u6709\u4e9b\u7275\u5f3a\uff0c\u4f46\u662f\u6052\u5927\u65e9\u5e72\u561b\u53bb\u4e86\uff0c\u770b\u4e0d\u61c2\u554a\uff0c\u4e0d\u60f3\u4e89\u51a0\u519b\u4e86\uff1f[\u518d\u89c1]", "up": 5}]};
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
