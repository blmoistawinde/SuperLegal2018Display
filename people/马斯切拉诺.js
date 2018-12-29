var data = {"person_name": "\u9a6c\u65af\u5207\u62c9\u8bfa", "nicknames": "\u9a6c\u65af\u5207\u62c9\u8bfa\u3001\u8001\u9a6c", "aspects": {"\u6bd4\u8d5b": 0.48699504383933373, "\u8fdb\u7403": 0.49712917048586386, "\u7403\u5458": 0.46815921543600403, "\u4e16\u754c\u676f": 0.9433530439360887, "\u9632\u5b88": 0.5580143235171392, "\u8e22\u7403": 0.8847285252051993, "\u540e\u8170": 0.5642881123336245, "\u56fd\u5bb6\u961f": 0.6754344715358098, "\u5f31\u961f": 0.0}, "overall_heat": 38.0, "overall_polar": 0.467, "name": "247", "nationality": "\u963f\u6839\u5ef7", "position": "\u4e2d\u573a", "goal": "1", "assist": "1", "team_name": "\u6cb3\u5317\u534e\u590f\u5e78\u798f", "name_en": "Javier Mascherano", "age": "34", "height": "174", "weight": "73"};
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
var topic_keywords = {"0": [{"name": "\u9a6c\u65af\u5207\u62c9\u8bfa", "value": 0.059801488833746905}, {"name": "\uff01", "value": 0.03498759305210918}, {"name": "\u5df4\u8428", "value": 0.01761786600496278}, {"name": "\u73b0\u5728", "value": 0.01761786600496278}, {"name": "\u8001\u9a6c", "value": 0.01761786600496278}, {"name": "\u8e22", "value": 0.01761786600496278}, {"name": "\uff1f", "value": 0.015136476426799007}, {"name": "\u9632", "value": 0.015136476426799007}, {"name": "\u534e\u590f", "value": 0.015136476426799007}, {"name": "\u597d", "value": 0.015136476426799007}, {"name": "\u7f57", "value": 0.015136476426799007}, {"name": "C", "value": 0.015136476426799007}, {"name": "\u4ee5\u524d", "value": 0.012655086848635234}, {"name": "\u5de8\u661f", "value": 0.010173697270471464}, {"name": "\u6253", "value": 0.010173697270471464}, {"name": "\u6bd4\u57c3\u62c9", "value": 0.010173697270471464}, {"name": "\u73b0\u5b9e", "value": 0.007692307692307693}, {"name": "\u7729\u6655", "value": 0.007692307692307693}, {"name": "\u4e2d\u536b", "value": 0.007692307692307693}, {"name": "\u963f\u6839\u5ef7", "value": 0.007692307692307693}, {"name": "\u5927\u54ed", "value": 0.007692307692307693}, {"name": "\u786e\u5b9e", "value": 0.007692307692307693}, {"name": "\u6b8b\u9177", "value": 0.007692307692307693}, {"name": "\u6311\u6218", "value": 0.007692307692307693}, {"name": "\u8fdb\u7403", "value": 0.007692307692307693}, {"name": "\u9762\u5bf9", "value": 0.005210918114143921}, {"name": "\u51e0\u573a", "value": 0.005210918114143921}, {"name": "\u6b66\u78ca", "value": 0.005210918114143921}, {"name": "\u6bd4\u8d5b", "value": 0.005210918114143921}, {"name": "\u6885\u897f", "value": 0.005210918114143921}], "1": [{"name": "\uff01", "value": 0.055667506297229226}, {"name": "\u9a6c\u65af\u5207\u62c9\u8bfa", "value": 0.0380352644836272}, {"name": "\u8001\u9a6c", "value": 0.03299748110831234}, {"name": "\uff1f", "value": 0.02544080604534005}, {"name": "\u7403\u5458", "value": 0.017884130982367758}, {"name": "\u7ef4\u5947", "value": 0.015365239294710327}, {"name": "\u9c81\u80fd", "value": 0.015365239294710327}, {"name": "\u62c9", "value": 0.015365239294710327}, {"name": "\u6559\u7ec3", "value": 0.012846347607052895}, {"name": "\u5e74", "value": 0.010327455919395465}, {"name": "\u4eca\u5929", "value": 0.010327455919395465}, {"name": "\u672c\u571f", "value": 0.010327455919395465}, {"name": "\u6bd4\u8d5b", "value": 0.010327455919395465}, {"name": "\u8001\u674e", "value": 0.010327455919395465}, {"name": "\u725b", "value": 0.010327455919395465}, {"name": "\u5934", "value": 0.010327455919395465}, {"name": "\u5854\u795e", "value": 0.0078085642317380355}, {"name": "\u6218\u672f", "value": 0.0078085642317380355}, {"name": "\u5e94\u8be5", "value": 0.0078085642317380355}, {"name": "\u5c0f\u9e4f\u54e5", "value": 0.0078085642317380355}, {"name": "\ud83d\ude02", "value": 0.0078085642317380355}, {"name": "\u4e70", "value": 0.0078085642317380355}, {"name": "\ufe0f", "value": 0.0078085642317380355}, {"name": "\u4e00\u4e0b", "value": 0.0078085642317380355}, {"name": "\u4e00\u4e9b", "value": 0.0078085642317380355}, {"name": "\u5168\u573a", "value": 0.0078085642317380355}, {"name": "\u9a6c\u52a0\u7279", "value": 0.0078085642317380355}, {"name": "\u4e0d\u9519", "value": 0.0078085642317380355}, {"name": "\u56fd\u5185", "value": 0.0078085642317380355}, {"name": "\u4e2d\u56fd", "value": 0.005289672544080605}]};
var topic_summary = {"0": [{"content": "\u4ee5\u524d\u9632C\u7f57\uff0c\u73b0\u5728\u9632\u6b66\u78ca\uff01\u9a6c\u65af\u5207\u62c9\u8bfa\u9762\u5bf9\u7684\u662f\u6b8b\u9177\u7684\u73b0\u5b9e\u548c\u5de8\u5927\u7684\u6311\u6218\uff01", "up": 695}, {"content": "\u4ee5\u524d\u9632C\u7f57\uff0c\u73b0\u5728\u9632\u6b66\u78ca\uff01\u9a6c\u65af\u5207\u62c9\u8bfa\u9762\u5bf9\u7684\u662f\u6b8b\u9177\u7684\u73b0\u5b9e\u548c\u5de8\u5927\u7684\u6311\u6218\uff01", "up": 67}, {"content": "\u9a6c\u65af\u5207\u62c9\u8bfa\u901a\u8fc7\u8fd9\u51e0\u573a\u6bd4\u8d5b\u611f\u53f9\uff0c\u8fd8\u662f\u5728\u5df4\u8428\u597d\u8e22\u554a\uff0c\u4e2d\u8d85\u592a\u96be\u4e86\u2026\u2026\u4ee5\u524d\u662f\u538b\u7740\u522b\u4eba\u6253\uff0c\u73b0\u5728\u662f\u88ab\u522b\u4eba\u538b\u7740\u6253", "up": 6}, {"content": "\u534e\u590f\u7684\u6700\u540e\u4e00\u4f20\u6bcf\u6b21\u90fd\u8981\u7b49\u7740\u9a6c\u65af\u5207\u62c9\u8bfa\u6765\u5b8c\u6210\uff0c\u5176\u4ed6\u4eba\u90fd\u662f\u5e72\u4ec0\u4e48\u5403\u7684\uff1f", "up": 5}, {"content": "\u9a6c\u65af\u5207\u62c9\u8bfa\u4f20\u7403\u662f\u771f\u7684\u9a9a\uff0c\u4e0d\u6127\u662f\u5df4\u8428\u51fa\u6765\u7684\uff01", "up": 4}], "1": [{"content": "\u9a6c\u65af\u5207\u62c9\u8bfa\uff1a\u6765\u5230\u4e2d\u56fd\u540e\u6700\u96be\u4ee5\u5272\u820d\u7684\u662f\u8bfa\u574e\u666e\u7684\u8349\u76ae\u2026\u2026", "up": 687}, {"content": "\u8001\u9a6c\u6559\u7ec3\u6c34\u5e73\u592a\u5dee\u4e86\uff0c\u5168\u573a\u770b\u4e0d\u5230\u6218\u672f\uff0c\u6709\u94b1\u4e70\u5916\u63f4\u4e0d\u5982\u5148\u6362\u4e00\u4e2a\u6559\u7ec3\u3002", "up": 137}, {"content": "\u4f60\u4eec\u90fd\u5439\u5927\u96f7\uff0c\u5854\u795e\uff0c\u5c0f\u9e4f\u54e5\uff0c\u6211\u5439\u4e00\u4e0b\u9a6c\u52a0\u7279\u3002\u6bd4\u8d5b\u5230\u4e86\u4f24\u505c\u8865\u65f6\uff0c\u9c81\u80fd\u7403\u5458\u8fd8\u6709\u5145\u6c9b\u4f53\u529b\u524d\u573a\u9ad8\u4f4d\u903c\u62a2\u3002\u611f\u6fc0\u8001\u9a6c\u8ba9\u6211\u4eec\u544a\u522b\u4e86\u6b65\u884c\u8005\uff01", "up": 18}, {"content": "\u7b7e\u9a6c\u65af\u5207\u62c9\u8bfa\u5b8c\u5168\u5c31\u662f\u6d6a\u8d39\u94b1\uff0c\u673a\u4f1a\u4e0d\u5982\u7ed9\u5e74\u8f7b\u6709\u62fc\u52b2\u7684\u672c\u571f\u7403\u5458", "up": 16}, {"content": "\u9a6c\u65af\u5207\u62c9\u8bfa\u3001\u62c9\u7ef4\u5947\u6c34\u5e73\u4e0d\u4e00\u822c\u554a\uff01\uff01\uff01", "up": 11}]};
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
