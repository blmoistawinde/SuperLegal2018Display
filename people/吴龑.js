var data = {"person_name": "\u5434\u9f91", "nicknames": "\u5434\u9f91", "aspects": {"\u56fd\u5bb6\u961f": 0.4431201335924473, "\u6bd4\u8d5b": 0.535505122668322, "\u4fdd\u7ea7": 1.0, "\u70b9\u7403": 0.6697759177284778, "\u7403\u8ff7": 0.7155659647605352, "\u6251\u6551": 0.11373323324941864, "\u8d5b\u5b63": 0.7018272630791479, "\u7403\u5458": 0.46205517408251684, "\u505c\u8d5b": 0.7360769533723138, "\u5f31\u961f": 1.0}, "overall_heat": 70.0, "overall_polar": 0.76, "name": "461", "nationality": "\u4e2d\u56fd", "position": "\u5b88\u95e8\u5458", "goal": "0", "assist": "0", "team_name": "\u6cb3\u5357\u5efa\u4e1a", "name_en": "Wu Yan", "age": "29", "height": "186", "weight": "78"};
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
var topic_keywords = {"0": [{"name": "\u5efa\u4e1a", "value": 0.050722974523754884}, {"name": "\u5434\u9f91", "value": 0.048427817305485434}, {"name": "\u6bd4\u8d5b", "value": 0.03236171677759927}, {"name": "\u70b9\u7403", "value": 0.016295616249713103}, {"name": "\u4fdd\u7ea7", "value": 0.014000459031443653}, {"name": "\u6251", "value": 0.014000459031443653}, {"name": "\u771f", "value": 0.014000459031443653}, {"name": "\u6251\u6551", "value": 0.011705301813174201}, {"name": "\u8fd9\u573a", "value": 0.011705301813174201}, {"name": "\u91cc\u5361\u591a", "value": 0.011705301813174201}, {"name": "\u8d5b\u5b63", "value": 0.009410144594904751}, {"name": "\u8fd0\u6c14", "value": 0.009410144594904751}, {"name": "\u4e24\u6b21", "value": 0.009410144594904751}, {"name": "\u5f00\u573a", "value": 0.009410144594904751}, {"name": "\u7533\u82b1", "value": 0.009410144594904751}, {"name": "\u4e09\u5206\u949f", "value": 0.009410144594904751}, {"name": "\u6700\u4f73", "value": 0.009410144594904751}, {"name": "\u6574\u573a", "value": 0.009410144594904751}, {"name": "\u7238\u7238", "value": 0.0071149873766353}, {"name": "\u56fd\u5bb6\u961f", "value": 0.0071149873766353}, {"name": "\u52a0\u6cb9", "value": 0.0071149873766353}, {"name": "\u7b2c\u4e8c", "value": 0.0071149873766353}, {"name": "\u7cbe\u5f69", "value": 0.0071149873766353}, {"name": "\u7ed3\u675f", "value": 0.0071149873766353}, {"name": "\u592a", "value": 0.0071149873766353}, {"name": "\u5168\u573a", "value": 0.0071149873766353}, {"name": "\u5bf9\u5f97\u8d77", "value": 0.0071149873766353}, {"name": "\u4eba", "value": 0.0071149873766353}, {"name": "\uff01", "value": 0.0071149873766353}, {"name": "\u4e0b\u6765", "value": 0.0071149873766353}], "1": [{"name": "\u5434\u9f91", "value": 0.09725592682471532}, {"name": "\uff01", "value": 0.07485532947545268}, {"name": "\u5efa\u4e1a", "value": 0.03378756766847116}, {"name": "\u95e8\u5c06", "value": 0.022587268993839834}, {"name": "\u6b66\u6c49", "value": 0.020720552548067945}, {"name": "\u4eba", "value": 0.015120403210752285}, {"name": "\u56fd\u5bb6\u961f", "value": 0.013253686764980397}, {"name": "\u6cb3\u5357", "value": 0.01138697031920851}, {"name": "\uff1f", "value": 0.01138697031920851}, {"name": "\u5389\u5bb3", "value": 0.009520253873436623}, {"name": "\u8e22", "value": 0.009520253873436623}, {"name": "\u771f\u7684", "value": 0.009520253873436623}, {"name": "\u903c", "value": 0.007653537427664736}, {"name": "\u66fe\u8bda", "value": 0.007653537427664736}, {"name": "\u6342", "value": 0.007653537427664736}, {"name": "\u7948\u7977", "value": 0.007653537427664736}, {"name": "\u4e0d\u9519", "value": 0.007653537427664736}, {"name": "\u725b", "value": 0.007653537427664736}, {"name": "\u5e94\u8be5", "value": 0.007653537427664736}, {"name": "\u771f", "value": 0.00578682098189285}, {"name": "\u5b88\u95e8\u5458", "value": 0.00578682098189285}, {"name": "\u597d", "value": 0.00578682098189285}, {"name": "\u505c\u8d5b", "value": 0.00578682098189285}, {"name": "\u4e00\u4e2a", "value": 0.00578682098189285}, {"name": "\u73b0\u5728", "value": 0.00578682098189285}, {"name": "\u4eca\u5929", "value": 0.00578682098189285}, {"name": "\u4fdd\u7ea7", "value": 0.00578682098189285}, {"name": "\u786e\u5b9e", "value": 0.00578682098189285}, {"name": "\u52a0\u6cb9", "value": 0.00578682098189285}, {"name": "\u540d\u5b57", "value": 0.00578682098189285}]};
var topic_summary = {"0": [{"content": "\u9664\u4e86\u5f00\u573a\u4e8c\u5341\u5206\u949f\u5de6\u53f3\uff0c\u88ab\u7533\u82b1\u56f4\u6bb4\u4e86\u6574\u573a\u6bd4\u8d5b\uff0c\u8fd9\u573a\u6bd4\u8d5b\u62ff\u4e0b\u6765\u53ef\u4ee5\u8003\u8651\u7ed9\u5434\u9f91\u52a0\u5de5\u8d44\u4e86\uff0c\u53ef\u80fd\u662f\u51b3\u5b9a\u5efa\u4e1a\u6574\u4e2a\u8d5b\u5b63\u4fdd\u7ea7\u7684\u6251\u6551\u554a\uff0c\u5e0c\u671b\u4ee5\u540e\u80fd\u5165\u9009\u56fd\u5bb6\u961f\uff0c\u5efa\u4e1a\u7684\u8fd0\u6c14\u662f\u771f\u597d\uff0c\u6251\u51fa\u70b9\u7403\uff0c\u95e8\u7ebf\u60ac\u6848\uff0c\u5927\u96be\u4e0d\u6b7b\uff0c\u5fc5\u6709\u540e\u798f\uff0c\u91cc\u5361\u591a\u4e5f\u662f\u6709\u610f\u601d\u9664\u4e86\u5f00\u573a\u4e09\u5206\u949f\u548c\u7ed3\u675f\u4e09\u5206\u949f\u51e0\u4e4e\u6574\u573a\u6bd4\u8d5b\u770b\u4e0d\u5230\u4eba\uff0c\u4f46\u662f\u51fa\u7ebf\u7684\u4e24\u6b21\u786e\u5b9e\u5efa\u4e1a\u7acb\u529f\u7684\u4e24\u6b21\uff0c\u5efa\u4e1a\u52a0\u6cb9\u5427\u3002", "up": 352}, {"content": "\u672c\u573a\u6700\u4f73\uff0c\u7b2c\u4e00\u5434\u9f91\u6251\u70b9\u7403\uff0c\u7b2c\u4e8c\u987e\u64cd\u95e8\u7ebf\u6551\u9669\uff0c\u7b2c\u4e09\u95e8\u67f1\u53ef\u4ee5\u4e0a\u7206\u7b11\u8db3\u7403\uff0c\u7b2c\u56db\u91cc\u5361\u591a\u9690\u8eab\u6885\u5f00\u4e8c\u5ea6\u3002\u540c\u610f\u6211\u7684\u89c2\u70b9\u7ed9\u4e2a\u5927\u62c7\u6307\u8c22\u8c22\uff01", "up": 219}, {"content": "\u6bd4\u8d5b\u5f88\u7cbe\u5f69\uff0c\u5434\u9f91\u6251\u6389\u5173\u952e\u70b9\u7403\uff0c\u8bf4\u5b9e\u8bdd\u90a3\u4e2a\u70b9\u7403\u6709\u70b9\u8fc7\u5206\u4e86\uff0c\u7981\u533a\u7ebf\u5916\u7684\u94f2\u7403", "up": 163}, {"content": "\u603b\u7ed3:\u91cc\u5361\u591a\u771f\u798f\u5c06\uff0c\u5434\u9f91\u771f\u7238\u7238[\u53ef\u601c]", "up": 117}, {"content": "\u6bd4\u8d5b\u603b\u7ed3:\u5434\u9f91\u662f\u7238\u7238", "up": 107}], "1": [{"content": "\u4f5c\u4e3a\u6cb3\u5357\u4eba\uff0c\u652f\u6301\u5efa\u4e1a\uff0c\u811a\u4e0b\u529f\u592b\u4e0d\u884c\uff0c\u57fa\u672c\u6ca1\u5565\u914d\u5408\u3002\u5df4\u7d22\u683c\u592a\u7c98\u7403\uff0c\u6bcf\u6b21\u90fd\u88ab\u65ad\u7403\u3002\u88ab\u538b\u7740\u6253\uff0c\u771f\u662f\u54ed\u4e86\u5434\u9f91\u3002\u3002\u3002\u52a0\u6cb9\u5427\uff0c\u5efa\u4e1a\uff0c\u597d\u597d\u4fdd\u7ea7\uff01\u590f\u5b63\u8f6c\u4f1a\u6765\u4e2a\u4e2d\u573a\u5427\uff01", "up": 277}, {"content": "\u6211\u8981\u5439\u4e00\u6ce2\u5434\u9f91\uff0c\u4e0d\u662f\u5434\u9f91\u53d1\u6325\u795e\u52c7\uff0c\u8fd9\u573a\u7edd\u5bf9\u8f93\u4e86\uff01\u5434\u9f91\u725b\u903c\u3002\u5efa\u4e1a\u52a0\u6cb9\uff01", "up": 239}, {"content": "\u770b\u5b8c\u4e86\u6574\u573a\u6bd4\u8d5b\uff0c\u600e\u4e48\u8bf4\u5462\uff1f\u54ce\uff0c\u8fd8\u884c\uff0c\u9632\u5b88\u4e0d\u9519\uff0c\u5434\u9f91\u8868\u73b0\u771f\u597d\uff0c\u5f31\u961f\u51fa\u95e8\u5c06\uff0c\u4e0d\u77e5\u9053\u7684\u8fd8\u4ee5\u4e3a\u5efa\u4e1a\u5c11\u4e00\u4eba\u5462\uff0c\u8fd9\u4e24\u573a\u80dc\u5229\u771f\u7684\u8d62\u7684\u5f88\u4fa5\u5e78\uff0c\u611f\u8c22\u6cb3\u5317\u534e\u590f\u9001\u7684\u4e09\u5206\u3002", "up": 208}, {"content": "\u5434\u9f91\u8d5e\u4e00\u4e2a\uff01\u5efa\u4e1a\u76db\u4ea7\u95e8\u5c06\u554a\uff01", "up": 125}, {"content": "\u73b0\u5728\u6211\u4e1a\u7684\u6bd4\u8d5b\u90fd\u4e0d\u6562\u770b\u76f4\u64ad\uff0c\u5434\u9f91\u8eab\u4ef7\u518d\u6da850\u4e07\uff0c\u7948\u7977\u5df4\u7d22\u6208\u6ca1\u6709\u5927\u788d[\u7948\u7977][\u7948\u7977][\u7948\u7977]", "up": 110}]};
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
