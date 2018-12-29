var data = {"person_name": "\u5f20\u7490", "nicknames": "\u5f20\u7490", "aspects": {"\u7ea2\u724c": 0.7095501604178351, "\u7403\u5458": 0.380206213750048, "\u6bd4\u8d5b": 0.5378084361167377, "\u7403\u8ff7": 0.05371826959923069, "\u8865\u65f6": 1.0, "\u9ec4\u724c": 0.49487431799548875, "\u7403\u95e8": 0.0, "\u66ff\u8865": 0.6496913224838253}, "overall_heat": 63.0, "overall_polar": -0.168, "name": "225", "nationality": "\u4e2d\u56fd", "position": "\u540e\u536b", "goal": "1", "assist": "0", "team_name": "\u4e0a\u6d77\u7533\u82b1", "name_en": "Zhang Lu", "age": "29", "height": "181", "weight": "74"};
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
var topic_keywords = {"0": [{"name": "\u5f20\u7490", "value": 0.07367454670644939}, {"name": "\u5206\u949f", "value": 0.016295616249713103}, {"name": "U23", "value": 0.011705301813174201}, {"name": "\u7403\u5458", "value": 0.011705301813174201}, {"name": "\u7b11", "value": 0.011705301813174201}, {"name": "\u7533\u82b1", "value": 0.009410144594904751}, {"name": "\uff1f", "value": 0.009410144594904751}, {"name": "\uff01", "value": 0.009410144594904751}, {"name": "\u5434\u91d1\u8d35", "value": 0.009410144594904751}, {"name": "\u54ed", "value": 0.009410144594904751}, {"name": "\u591a\u4e45", "value": 0.0071149873766353}, {"name": "\u8f6c\u4f1a", "value": 0.0071149873766353}, {"name": "\u66f9\u8d5f\u5b9a", "value": 0.0071149873766353}, {"name": "\u53d7\u4f24", "value": 0.0071149873766353}, {"name": "\u73b0\u5728", "value": 0.0071149873766353}, {"name": "\u767b\u5df4\u5df4", "value": 0.0071149873766353}, {"name": "\u5854\u5c14\u5fb7\u5229", "value": 0.0071149873766353}, {"name": "\u4eca\u665a", "value": 0.0071149873766353}, {"name": "\u5929\u6d25", "value": 0.0071149873766353}, {"name": "\u592a", "value": 0.0071149873766353}, {"name": "\u8fd9\u573a", "value": 0.0071149873766353}, {"name": "\u66ff\u8865", "value": 0.004819830158365848}, {"name": "\u5fc3\u91cc", "value": 0.004819830158365848}, {"name": "\u6548\u529b", "value": 0.004819830158365848}, {"name": "\u6eda", "value": 0.004819830158365848}, {"name": "\u6743\u5065", "value": 0.004819830158365848}, {"name": "\u5f53\u65f6", "value": 0.004819830158365848}, {"name": "\u6768\u541b", "value": 0.004819830158365848}, {"name": "\u72af\u89c4", "value": 0.004819830158365848}, {"name": "\u6768\u65ed", "value": 0.004819830158365848}], "1": [{"name": "\u5f20\u7490", "value": 0.07153345919865745}, {"name": "\uff01", "value": 0.02957835116425425}, {"name": "\uff1f", "value": 0.01908957415565345}, {"name": "\u4eba", "value": 0.012796307950492972}, {"name": "\u518d", "value": 0.012796307950492972}, {"name": "\u4f0a\u6c83", "value": 0.010698552548772812}, {"name": "\u5efa\u4e1a", "value": 0.010698552548772812}, {"name": "\u7ea2\u724c", "value": 0.010698552548772812}, {"name": "\u8e22", "value": 0.010698552548772812}, {"name": "\u771f", "value": 0.008600797147052653}, {"name": "\u8d70", "value": 0.008600797147052653}, {"name": "\u6bd4\u8d5b", "value": 0.008600797147052653}, {"name": "\u6bd5\u6d25\u6d69", "value": 0.008600797147052653}, {"name": "\u5f90\u6d0b", "value": 0.008600797147052653}, {"name": "\u7403", "value": 0.008600797147052653}, {"name": "\u56fd\u5bb6\u961f", "value": 0.008600797147052653}, {"name": "\u7533\u82b1", "value": 0.006503041745332495}, {"name": "\u770b\u770b", "value": 0.006503041745332495}, {"name": "\u7403\u5458", "value": 0.006503041745332495}, {"name": "\u5c39\u9e3f\u535a", "value": 0.006503041745332495}, {"name": "\u597d", "value": 0.006503041745332495}, {"name": "\u6208\u9ea6\u65af", "value": 0.006503041745332495}, {"name": "\u770b\u5230", "value": 0.006503041745332495}, {"name": "\u6743\u5065", "value": 0.006503041745332495}, {"name": "\u6709\u70b9", "value": 0.006503041745332495}, {"name": "\u4e0a\u573a", "value": 0.006503041745332495}, {"name": "\u5e94\u8be5", "value": 0.006503041745332495}, {"name": "\u674e\u5efa\u6ee8", "value": 0.004405286343612335}, {"name": "\u72af\u89c4", "value": 0.004405286343612335}, {"name": "\u4f30\u8ba1", "value": 0.004405286343612335}]};
var topic_summary = {"0": [{"content": "\u5f20\u7490\uff1a\u6211\u4eca\u665a\u7ed9\u5c045\u6b21\uff0c\u4e0d\u540c\u7684\u7537\u4eba\uff0c\u8fd8\u6709\u4e00\u4e2a\u592a\u7528\u529b\u8fd8\u5c04\u7a7f\u4e86\u3002", "up": 468}, {"content": "\u8981\u4e0d\u662f\u5f20\u7490\uff0c\u6211\u82cf\u8fd9\u573a\u7edd\u903c\u8840\u6d17\u6743\u5065\uff0cSB\u7d22\u8428\uff01\uff01", "up": 266}, {"content": "\u5854\u5c14\u5fb7\u5229\u5bf9\u5f20\u7490\u72af\u89c4\u540e\uff0c\u5929\u6d25\u5168\u573a\u5728\u558a\u8f93\u4e0d\u8d77\uff0c\u5f53\u65f6\u5fc3\u91cc\u5f88\u6124\u6012\uff01\u5f53\u53d1\u6700\u540e\u4e00\u4e2a\u89d2\u7403\u65f6\uff0c\u6211\u5728\u60f3\u8fd9\u7403\u8981\u662f\u80fd\u8fdb\u6247\u4e86\u522b\u4eba\u7684\u8138\uff0c\u6211\u4eca\u665a\u5c31\u53bb\u559d\u9152\uff0c\u5e72\u676f\ud83c\udf7b", "up": 14}, {"content": "\u8d28\u7591\u8865\u65f6\u591a\u4e24\u5206\u949f\u7684 \u770b\u770b92\u5206\u949f\u6768\u65ed\u53d7\u4f24\u803d\u8bef\u4e86\u591a\u4e45\u3002\u5854\u5c14\u5fb7\u5229\u548c\u5f20\u7490\u51b2\u7a81\u803d\u8bef\u4e86\u591a\u4e45\u3002", "up": 13}, {"content": "\u7533\u82b1\u5b81\u613f\u7528\u51e0\u4e2a\u5e9f\u67f4u35\uff0c\u4e5f\u4e0d\u7528\u6f5c\u529b\u80a1u23\u3002\u5bf9\u8bf4\u7684\u5c31\u662f\u5f20\u7490\u4e4b\u6d41\uff01", "up": 11}], "1": [{"content": "\u8dea\u6c42\u5f20\u7490\u591a\u7981\u8d5b\u51e0\u573a\uff0c\u6240\u6709\u7533\u82b1\u7403\u8ff7\u90fd\u4e0d\u60f3\u518d\u770b\u5230\u4ed6\u4e86", "up": 253}, {"content": "\u5168\u573a\u6743\u5065\u8e22\u7684\u4ec0\u4e48\uff1f\u8fdb\u7403\u662f\u8fd0\u6c14\u597d\uff0c\u6ca1\u4e22\u66f4\u591a\u7684\u7403\u662f\u56e0\u4e3a\u5f20\u7490\u4eca\u5929\u6709\u70b9\u75af\u3002\u3002\u3002", "up": 147}, {"content": "\u4e00\u76f4\u5728\u8bf4\u5f20\u7490\u7ea2\u724c\u8fc7\u91cd\u7684\u89e3\u8bf4\u53eb\u4ec0\u4e48\uff1f\u4ec0\u4e48\u53eb\u8e29\u5b9e\u4e0d\u8e29\u5b9e\uff1f\u662f\u4e0d\u662f\u4e00\u5b9a\u8981\u65ad\u817f\u624d\u80fd\u51fa\u7ea2\u724c\uff1f", "up": 104}, {"content": "\u5f20\u7490\u662f\u5e26\u7740\u5403\u7ea2\u724c\u4efb\u52a1\u4e0a\u7684\u5427\uff01\u5c31\u4e2aBC\u3002\u4e0b\u653e\u5427\uff0c\u6bdb\u5251\u537f\u6bd4\u4ed6\u5f3a\u4e0d\u6b62\u4e00\u4e2a\u6863\u6b21\u4e86\u3002\u771f\u5fc3\u4e0d\u5e0c\u671b\u518d\u770b\u5230\u4ed6\u4e0a\u573a\u4e86\u3002\u987a\u4fbf\u5938\u4e0bVar\uff0c\u724c\u90fd\u51fa\u4e86\u6bd4\u8d5b\u90fd\u5f00\u8e22\u4e86\u8fd8\u80fd\u505c\u4e0b\u53d1\u4e2a\u724c\uff0c\u771fTM\u662f\u6709\u4e2d\u56fd\u7279\u8272\u793e\u4f1a\u4e3b\u4e49Var.", "up": 24}, {"content": "\u79e6\u5347\u5916\u79df \u6bd5\u6d25\u6d69\u4e0b\u653e \u5c0f\u6bdb\u6441\u51b7\u677f\u51f3 \u4f60\u5168\u7528\u65b0\u4eba\u4e5f\u5c31\u7b97\u4e86 \u5f04\u4e86\u4e2a\u7f57\u6885\u7f57\u8ddf\u56fd\u5185\u7403\u5458\u5dee\u4e0d\u591a \u674e\u5efa\u6ee8 \u6817\u9e4f \u57fa\u672c\u5c5e\u4e8e\u795e\u7ecf\u8d28\u578b \u5f20\u7490\u770b\u5230\u73b0\u5728\u90fd\u6ca1\u53d1\u73b0\u54ea\u91cc\u597d \u6211\u5c31\u5f04\u4e0d\u61c2\u4e86 \u7533\u82b1\u5728\u5e72\u5565", "up": 17}]};
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
