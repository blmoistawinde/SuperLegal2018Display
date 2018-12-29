var data = {"person_name": "\u5218\u5065", "nicknames": "\u5218\u5065", "aspects": {"\u8fdb\u7403": 0.6564333467938228, "\u7403\u8ff7": 1.0, "\u7403\u5458": 0.8048637317428259, "\u56fd\u5bb6\u961f": 0.21806705803528093, "\u505c\u7403": 1.0, "\u8db3\u534f": 0.8343808143771155, "\u6bd4\u8d5b": 0.38962618718156866, "\u4e3b\u573a": 1.0, "\u56fd\u811a": 0.42948591710731104, "\u7ea2\u724c": 0.08748515325686994}, "overall_heat": 71.0, "overall_polar": 0.367, "name": "409", "nationality": "\u4e2d\u56fd", "position": "\u540e\u536b", "goal": "0", "assist": "0", "team_name": "\u5317\u4eac\u4eba\u548c", "name_en": "Liu Jian", "age": "33", "height": "180", "weight": "70"};
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
var topic_keywords = {"0": [{"name": "\u5218\u5065", "value": 0.06907051282051282}, {"name": "\uff01", "value": 0.035416666666666666}, {"name": "\uff1f", "value": 0.035416666666666666}, {"name": "\u6052\u5927", "value": 0.029006410256410257}, {"name": "\u90d1\u9f99", "value": 0.014583333333333334}, {"name": "\u8fdb", "value": 0.01298076923076923}, {"name": "\u56fd\u811a", "value": 0.009775641025641026}, {"name": "\u56fd\u5bb6\u961f", "value": 0.009775641025641026}, {"name": "\u8fdb\u7403", "value": 0.009775641025641026}, {"name": "\u7403\u8ff7", "value": 0.008173076923076922}, {"name": "\u7403\u5458", "value": 0.008173076923076922}, {"name": "\u95ee\u9898", "value": 0.008173076923076922}, {"name": "\u4eba\u548c", "value": 0.008173076923076922}, {"name": "\u8e22", "value": 0.008173076923076922}, {"name": "\u89e3\u8bf4", "value": 0.00657051282051282}, {"name": "\u76f4\u64ad", "value": 0.00657051282051282}, {"name": "\u5e94\u8be5", "value": 0.00657051282051282}, {"name": "\u90b9\u6b63", "value": 0.00657051282051282}, {"name": "\u7ea2\u724c", "value": 0.00657051282051282}, {"name": "\u4e07\u8fdb", "value": 0.00657051282051282}, {"name": "\u540e", "value": 0.0049679487179487185}, {"name": "\u6bd4\u8d5b", "value": 0.0049679487179487185}, {"name": "\u6342\u8138", "value": 0.0049679487179487185}, {"name": "\u89c9\u5f97", "value": 0.0049679487179487185}, {"name": "\u5e08\u5144", "value": 0.0049679487179487185}, {"name": "\u5b9e\u529b", "value": 0.0049679487179487185}, {"name": "\u597d", "value": 0.0049679487179487185}, {"name": "\u65b0", "value": 0.0049679487179487185}, {"name": "\u673a\u4f1a", "value": 0.0049679487179487185}, {"name": "\u9752\u5c9b", "value": 0.0049679487179487185}], "1": [{"name": "\u6052\u5927", "value": 0.11949579831932772}, {"name": "\u5389\u5bb3", "value": 0.05899159663865546}, {"name": "\u8fdb", "value": 0.05394957983193278}, {"name": "\u7403", "value": 0.05394957983193278}, {"name": "\u5218\u5065", "value": 0.04722689075630252}, {"name": "\u7403\u8ff7", "value": 0.03042016806722689}, {"name": "\u7ee7\u7eed", "value": 0.03042016806722689}, {"name": "\u5e86\u795d", "value": 0.03042016806722689}, {"name": "\u52a0\u6cb9", "value": 0.03042016806722689}, {"name": "\u524d", "value": 0.027058823529411767}, {"name": "\u5929\u6cb3", "value": 0.027058823529411767}, {"name": "\u7403\u5458", "value": 0.027058823529411767}, {"name": "\u5404\u79c0", "value": 0.027058823529411767}, {"name": "\u571f\u70ae", "value": 0.027058823529411767}, {"name": "\u5916\u63f4", "value": 0.027058823529411767}, {"name": "\u5e78\u798f", "value": 0.027058823529411767}, {"name": "\u76f8\u4fe1", "value": 0.027058823529411767}, {"name": "\u6700", "value": 0.027058823529411767}, {"name": "\u4eca\u665a", "value": 0.027058823529411767}, {"name": "\u4eca\u5929", "value": 0.027058823529411767}, {"name": "\u4e00\u6ce2", "value": 0.027058823529411767}, {"name": "\u811a\u6cd5", "value": 0.027058823529411767}, {"name": "\u8fdb\u7403", "value": 0.022016806722689075}, {"name": "\uff01", "value": 0.010252100840336134}, {"name": "\u5927\u80dc", "value": 0.00857142857142857}, {"name": "\u7686\u5927\u6b22\u559c", "value": 0.00857142857142857}, {"name": "\ud83d\udc4f", "value": 0.005210084033613446}, {"name": "\u6700\u4f4e", "value": 0.0035294117647058825}, {"name": "\u963f\u5170", "value": 0.0035294117647058825}, {"name": "\u5f88\u68d2", "value": 0.0035294117647058825}]};
var topic_summary = {"0": [{"content": "\u6052\u5927\u7403\u5458\u4e00\u4e0b\u5b50\u8fd8\u4ee5\u4e3a\u5218\u5065\u662f\u81ea\u5df1\u4eba", "up": 522}, {"content": "\u606d\u559c\u4eba\u548c\u52c7\u593a3\u5206\uff01\u606d\u8cc0\u5218\u5065\uff0c\u8868\u73b0\u51fa\u8272\uff01\u9632\u5b88\u7a33\u56fa\uff01\u4e2d\u8d85\u6709\u4e00\u961f\u5c31\u662f\u7f57\u5bbe\u6c49\uff0c\u603b\u52ab\u5bcc\u6d4e\u8d2b\uff01[\u9177][\u52a0\u6cb9][\u52a9\u5a01]", "up": 27}, {"content": "\u6768\u65ed\u8e22\u7684\u771f\u4e0d\u9519\uff0c\u53ef\u60dc\u5c81\u6570\u5927\u70b9\u4e86\uff0c\u770b\u56fd\u5bb6\u961f\u8fd8\u80fd\u505a\u70b9\u8d21\u732e\u5417\uff01\u5218\u5065\u7ea2\u724c\u6d3b\u8be5\uff0c\u8001\u7403\u5458\u4e86\u8fd9\u4e48\u4e0d\u7406\u667a\u771f\u4e0d\u5e94\u8be5\uff0c\u6ca1\u4ed6\u7684\u7ea2\u724c\u4eba\u548c\u80fd\u8d62\uff01", "up": 12}, {"content": "\u5218\u5065\u5c31\u662f\u4e8c\u50bb\u5b50", "up": 8}, {"content": "\u540c\u6837\u7684\u8098\u51fb\uff0c\u5218\u5065\u7ea2\u724c\uff0c\u83ab\u96f7\u8bfa\u9ec4\u724c\u3002\u3002\uff1f", "up": 7}], "1": [{"content": "\u60c5\u6000\u4e4b\u6218 \u5218\u5065\u8fdb\u7403 \u6b6a\u8116\u627e\u56de\u7075\u6027 \u963f\u5170\u7684\u8fdb\u7403\u771f\u7684\u5f88\u50cf5-1\u7533\u946b\u65f6\u5019\u7a46\u91cc\u5947\u7684\u8fdb\u7403 \u800c\u4e14\u963f\u5170\u8fdb\u7403\u7ec8\u4e8e\u4e0a\u53cc\u4e86 \u5982\u4eca\u6052\u5927\u961f\u4e2d\u4e94\u4eba\u8fdb\u7403\u4e0a\u53cc \u5f88\u4e86\u4e0d\u8d77\u4e86[\u7948\u7977]", "up": 8}, {"content": "\u5218\u5065\u4e5f\u662f\u6052\u5927\u7684\u554a\ud83d\ude48", "up": 3}, {"content": "\u8d62\u7403\u4e0d\u53ef\u6015\uff0c\u7f3a\u8c01\u8c01\u5c34\u5c2c\uff0c\u5218\u5065:MMP", "up": 2}, {"content": "\u6052\u5927\u518d\u73b0\u6700\u4f4e\u6d88\u8d39\uff0c\u7ee7\u7eed\u52a0\u6cb9\uff01\u5218\u5065\u8fdb\u7403\u540e\u6ca1\u6709\u5e86\u795d\uff0c\u7403\u8ff7\u4e5f\u7ed9\u4e88\u4e86\u638c\u58f0\uff0c\u5f88\u68d2[\u5389\u5bb3][\u5389\u5bb3][\u5389\u5bb3]", "up": 1}, {"content": "\u6052\u5927\u5927\u80dc\u5218\u5065\u8fdb\u7403\u7686\u5927\u6b22\u559c\uff01", "up": 0}]};
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
