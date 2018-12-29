var data = {"person_name": "\u5f20\u7fc0", "nicknames": "\u5f20\u7fc0", "aspects": {"\u9632\u5b88": 0.3114074837333792, "\u7403\u8ff7": 0.3346090604344096, "\u964d\u7ea7": 1.0, "\u8fdb\u653b": 0.17717488386213998, "\u8d5b\u5b63": 0.0, "\u540e\u8170": 0.14125410809190028, "\u540e\u9632": 0.45826376666600294, "\u6362\u4eba": 0.21228813307521704}, "overall_heat": 50.0, "overall_polar": 0.198, "name": "350", "nationality": "\u4e2d\u56fd", "position": "\u5b88\u95e8\u5458", "goal": "0", "assist": "0", "team_name": "\u5927\u8fde\u4e00\u65b9", "name_en": "Zhang Chong", "age": "31", "height": "190", "weight": "80"};
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
var topic_keywords = {"0": [{"name": "\uff01", "value": 0.0930306905370844}, {"name": "\u5f20\u7fc0", "value": 0.08343989769820973}, {"name": "\u9876", "value": 0.019501278772378516}, {"name": "\u8fdb", "value": 0.013107416879795395}, {"name": "\u5927\u8fde", "value": 0.013107416879795395}, {"name": "\u5218\u6bbf\u5ea7", "value": 0.013107416879795395}, {"name": "\u98de\u8eab", "value": 0.009910485933503837}, {"name": "\u611f\u8c22", "value": 0.009910485933503837}, {"name": "\u5de6\u4e0b\u89d2", "value": 0.009910485933503837}, {"name": "\u6551\u51fa", "value": 0.009910485933503837}, {"name": "\u65af\u66fc", "value": 0.009910485933503837}, {"name": "\u6709\u4eba", "value": 0.009910485933503837}, {"name": "\u54c8\u54c8\u54c8", "value": 0.009910485933503837}, {"name": "\u53f3\u4e0a\u65b9", "value": 0.009910485933503837}, {"name": "\u518d", "value": 0.009910485933503837}, {"name": "\u8fd9\u573a", "value": 0.009910485933503837}, {"name": "\u53cd\u9a73", "value": 0.009910485933503837}, {"name": "\u90dc\u6797", "value": 0.009910485933503837}, {"name": "\u90dc", "value": 0.009910485933503837}, {"name": "\u5413\u6b7b", "value": 0.006713554987212276}, {"name": "\u5bf9\u65b9", "value": 0.006713554987212276}, {"name": "\u54ed", "value": 0.006713554987212276}, {"name": "\u7403", "value": 0.006713554987212276}, {"name": "\u6700\u540e", "value": 0.006713554987212276}, {"name": "\u4e0d\u9519", "value": 0.006713554987212276}, {"name": "\u7729\u6655", "value": 0.006713554987212276}, {"name": "\u98de", "value": 0.006713554987212276}, {"name": "\u5931\u8bef", "value": 0.006713554987212276}, {"name": "\u7b11", "value": 0.006713554987212276}, {"name": "\u522b\u5fd8\u4e86", "value": 0.006713554987212276}], "1": [{"name": "\u5f20\u7fc0", "value": 0.08245305164319248}, {"name": "\uff1f", "value": 0.032570422535211266}, {"name": "\u5927\u8fde", "value": 0.02963615023474178}, {"name": "\uff01", "value": 0.023767605633802816}, {"name": "\u95e8\u5c06", "value": 0.017899061032863848}, {"name": "\u725b", "value": 0.014964788732394365}, {"name": "\u597d", "value": 0.014964788732394365}, {"name": "\u7403\u8ff7", "value": 0.012030516431924881}, {"name": "\u5927\u594e", "value": 0.012030516431924881}, {"name": "\u73b0\u5728", "value": 0.012030516431924881}, {"name": "\u6c34\u5e73", "value": 0.009096244131455399}, {"name": "\u903c", "value": 0.009096244131455399}, {"name": "\u5931\u8bef", "value": 0.009096244131455399}, {"name": "\u5361\u62c9\u65af\u79d1", "value": 0.009096244131455399}, {"name": "\u518d\u89c1", "value": 0.009096244131455399}, {"name": "\u5439", "value": 0.006161971830985916}, {"name": "\u674e\u5e05", "value": 0.006161971830985916}, {"name": "\u7403\u5458", "value": 0.006161971830985916}, {"name": "\u7403", "value": 0.006161971830985916}, {"name": "\u4e2d\u7532", "value": 0.006161971830985916}, {"name": "\u4e2d\u8d85", "value": 0.006161971830985916}, {"name": "\u505a", "value": 0.006161971830985916}, {"name": "\u6700\u591a", "value": 0.006161971830985916}, {"name": "\u53ea", "value": 0.006161971830985916}, {"name": "\u65a4", "value": 0.006161971830985916}, {"name": "\u611f\u89c9", "value": 0.006161971830985916}, {"name": "\u51e0\u4e2a", "value": 0.006161971830985916}, {"name": "\u5361", "value": 0.006161971830985916}, {"name": "\u4e0b", "value": 0.006161971830985916}, {"name": "\u8d5b\u5b63", "value": 0.006161971830985916}]};
var topic_summary = {"0": [{"content": "\u8d5b\u540e\u5218\u6bbf\u5ea7\u7ed9\u5f20\u7fc0\u53d1\u4e86\u6761\u77ed\u4fe1\uff1a\u5144\u5f1f\uff0c\u8c22\u8c22\u554a", "up": 1712}, {"content": "\u5f20\u7fc0\uff1a\u592aJB\u6ed1\u4e86\uff01\u6211CTM[\u7b11\u54ed]", "up": 298}, {"content": "\u5343\u4e07\u5343\u4e07\u522b\u5fd8\u4e86\u5439\u5f20\u7fc0\uff0c\u4e0d\u7136\u716e\u719f\u7684\u9e2d\u5b50\u98de\u4e86\u5c31\u98de\u4e86\uff01\u5413\u6b7b\u6211\u4e86\u90a3\u7403", "up": 232}, {"content": "\u5343\u4e07\u522b\u5fd8\u4e86\u5f20\u7fc0\uff0c\u90a3\u4e2a\u5723\u5361\u5f20\u7fc0\u53c8\u56de\u6765\u4e86", "up": 35}, {"content": "\u90dc\u6797\u65af\u66fc\uff1a\u6211\u9876\u4f60\u5de6\u4e0b\u89d2\uff01\u5f20\u7fc0\uff1a\u6211\u98de\u8eab\uff0c\u6551\u51fa\uff0c\u54c8\u54c8\uff01\u90dc\uff1a\u6211\u518d\u9876\u4f60\u53f3\u4e0a\u65b9\uff0c\u8fdb\uff01\u54c8\u54c8\u54c8\uff01", "up": 10}], "1": [{"content": "\u4eca\u5929\u5927\u594e\u4f9d\u7136\u51fa\u8272\uff0c\u867d\u7136\u5f20\u7fc0\u6709\u5931\u8bef\u4f46\u662f\u5927\u8fde\u4e0d\u80fd\u6ca1\u6709\u5f20\u7fc0\uff0c\u5f20\u7fc0\u5927\u8fde\u7403\u8ff7\u652f\u6301\u4f60\u4f60\u662f\u6211\u4eec\u5927\u8fde\u6700\u68d2\u7684\u95e8\u5c06\u3002", "up": 92}, {"content": "\u91d1\u5f3a\u6731\u5c0f\u521a\u5f20\u7fc0\u53ef\u4ee5\u6eda\u86cb\u4e86", "up": 39}, {"content": "\u8fd9\u662f\u5f20\u7fc0\u672c\u8d5b\u5b63\u7b2c\u51e0\u6b21\u5361\u91cc\u4e4c\u65af\u4e86\uff1f\u90ed\u6bc5\u98de\u4e2a\u65e0\u8111\u5439\u8fd8\u5929\u5929\u6367\u81ed\u811a", "up": 26}, {"content": "\u5927\u8fde\u7403\u8ff7\u8bf4\u4e24\u53e5\uff1a\u7b2c\u4e00\uff0c\u8fd9\u6bd4\u8d5b\u5e73\u5f97\u771f\u618b\u5c48\uff1b\u7b2c\u4e8c\uff0c\u5f20\u7fc0\u7edd\u5bf9\u4e0d\u80fd\u5356\uff01", "up": 20}, {"content": "\u5f20\u7fc0\u8fd9\u4e0d\u662f\u7b2c\u4e00\u6b21\u9001\u793c\u4e86\uff0c\u5fd8\u4e86\u6253\u6cb3\u5357\u65f6\u7684\u4e0b\u86cb\u4e86\uff1f", "up": 11}]};
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
