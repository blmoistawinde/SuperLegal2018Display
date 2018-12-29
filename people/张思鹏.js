var data = {"person_name": "\u5f20\u601d\u9e4f", "nicknames": "\u5f20\u601d\u9e4f", "aspects": {"\u6bd4\u8d5b": 0.18703386189570892, "\u964d\u7ea7": 0.4806282634154571, "\u8fdb\u7403": 0.5240952049408593, "\u9ec4\u724c": 0.2770371178780445, "\u7403\u8ff7": 0.3584444388089604, "\u8d5b\u5b63": 0.6062547846919506, "\u540e\u9632": 0.3464178615464915, "\u4e3b\u573a": 0.2329699438357179, "\u7403\u5458": 0.21558736521159347, "\u8db3\u534f\u676f": 0.0}, "overall_heat": 87.0, "overall_polar": -0.364, "name": "371", "nationality": "\u4e2d\u56fd", "position": "\u5b88\u95e8\u5458", "goal": "0", "assist": "0", "team_name": "\u8d35\u5dde\u6052\u4e30", "name_en": "Zhang Sipeng", "age": "31", "height": "188", "weight": "78"};
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
var topic_keywords = {"0": [{"name": "\u5f20\u601d\u9e4f", "value": 0.0954123962908736}, {"name": "\uff1f", "value": 0.019765739385065883}, {"name": "\u8d35\u5dde", "value": 0.01732552464616886}, {"name": "\u56fd\u5b89", "value": 0.014885309907271839}, {"name": "\u9c81\u80fd", "value": 0.012445095168374816}, {"name": "\u6bd4\u8d5b", "value": 0.012445095168374816}, {"name": "\u66fc\u8428", "value": 0.012445095168374816}, {"name": "\u8868\u73b0", "value": 0.012445095168374816}, {"name": "\u8bfa", "value": 0.012445095168374816}, {"name": "\u964d\u7ea7", "value": 0.012445095168374816}, {"name": "\u641e", "value": 0.012445095168374816}, {"name": "\u8d5b\u5b63", "value": 0.010004880429477793}, {"name": "\u95ee\u9898", "value": 0.010004880429477793}, {"name": "\u95e8\u5c06", "value": 0.007564665690580771}, {"name": "\u7403\u8ff7", "value": 0.007564665690580771}, {"name": "\u6b7b", "value": 0.007564665690580771}, {"name": "\u65af\u8482\u592b", "value": 0.007564665690580771}, {"name": "\u9a82", "value": 0.007564665690580771}, {"name": "\u95e8", "value": 0.005124450951683748}, {"name": "\u5e0c\u671b", "value": 0.005124450951683748}, {"name": "\u9996\u53d1", "value": 0.005124450951683748}, {"name": "\u5b88\u95e8\u5458", "value": 0.005124450951683748}, {"name": "\u82cf\u535a\u6d0b", "value": 0.005124450951683748}, {"name": "\u91cc", "value": 0.005124450951683748}, {"name": "\u6251", "value": 0.005124450951683748}, {"name": "\u4e00\u4e0b", "value": 0.005124450951683748}, {"name": "\u707e\u96be", "value": 0.005124450951683748}, {"name": "\u8bc4\u8bba", "value": 0.005124450951683748}, {"name": "\u96be\u5ea6", "value": 0.005124450951683748}, {"name": "\u524d", "value": 0.005124450951683748}], "1": [{"name": "\u5f20\u601d\u9e4f", "value": 0.11068702290076336}, {"name": "\uff01", "value": 0.07051024507834472}, {"name": "\u7948\u7977", "value": 0.022298111691442347}, {"name": "\u5389\u5bb3", "value": 0.014262756126958617}, {"name": "\u8d35\u5dde", "value": 0.014262756126958617}, {"name": "\u95e8\u5c06", "value": 0.012253917235837684}, {"name": "\u5c04", "value": 0.010245078344716753}, {"name": "\u5c04\u6b63", "value": 0.010245078344716753}, {"name": "\uff1f", "value": 0.010245078344716753}, {"name": "\u7b11", "value": 0.010245078344716753}, {"name": "\u54ed", "value": 0.010245078344716753}, {"name": "\u6b63", "value": 0.00823623945359582}, {"name": "\u771f", "value": 0.00823623945359582}, {"name": "\u771f\u7684", "value": 0.00823623945359582}, {"name": "\u6bd4\u8d5b", "value": 0.00823623945359582}, {"name": "\u5fae\u7b11", "value": 0.00823623945359582}, {"name": "\u82cf\u5b81", "value": 0.00823623945359582}, {"name": "\u597d", "value": 0.00823623945359582}, {"name": "\u592a", "value": 0.00823623945359582}, {"name": "\u89c6\u9891", "value": 0.00622740056247489}, {"name": "\u7403\u961f", "value": 0.00622740056247489}, {"name": "\u4e3b\u573a", "value": 0.00622740056247489}, {"name": "\u53d6\u6d88", "value": 0.00622740056247489}, {"name": "\u8fdb\u7403", "value": 0.00622740056247489}, {"name": "\u811a\u8fdb", "value": 0.00622740056247489}, {"name": "\u4e2d\u8d85", "value": 0.00622740056247489}, {"name": "\u5b88\u95e8", "value": 0.00622740056247489}, {"name": "\u7403", "value": 0.00622740056247489}, {"name": "\u9ec4\u724c", "value": 0.00622740056247489}, {"name": "\u9002\u5408", "value": 0.00622740056247489}]};
var topic_summary = {"0": [{"content": "\u5f20\u601d\u9e4f\u5230\u54ea\u53bb\u90fd\u662f\u4e8c\u903c\uff0c\u65af\u8482\u592b\u5230\u54ea\u91cc\u53bb\u54ea\u964d\u7ea7", "up": 269}, {"content": "\u5f20\u601d\u9e4f\u5440\u5f20\u601d\u9e4f\uff0c\u6709\u70b9\u96be\u5ea6\u7684\u6251\u4e0d\u4e86\uff0c\u6ca1\u96be\u5ea6\u7684\u4f60\u4e5f\u641e\u5f97\u5fc3\u60ca\u80c6\u6218\u7684\uff0c\u8fd9\u4e2a\u8d5b\u5b63\u88ab\u5c04\u5f97\u6ca1\u6709\u81ea\u4fe1\u4e86\uff0c\u53ef\u4ee5\u6362\u4eba\u4e86\uff0c\u4eca\u5929\u867d\u7136\u8d62\u4e86\uff0c\u8fd9\u540e\u9632\u771f\u7684\u70c2\u3002", "up": 58}, {"content": "\u65ad\u65ad\u7eed\u7eed\u7684\u770b\u4e86\u8d35\u5dde\u7684\u4e09\u4e2a\u4e3b\u573a\uff0c\u65af\u8482\u592b\u6ca1\u6253\u51fa\u6765\uff0c\u66fc\u8428\u8bfa\u53ef\u80fd\u4e0d\u4f1a\u7528\u4ed6\uff0c\u5728\u5ef6\u8fb9\u6548\u7387\u9ad8\uff0c\u662f\u56e0\u4e3a\u4e2d\u573a\u6709\u4e2a\u5c39\u6bd4\u52a0\u5170\uff0c\u8d35\u5dde\u6ca1\u6709\u8fd9\u79cd\u4eba\u7269\uff0c\u8fd8\u6709\u5c31\u662f\u5b88\u95e8\u5458\uff0c\u5f20\u601d\u9e4f\u65e9\u5c31\u8bc1\u660e\u4e86\u4e0d\u582a\u5927\u7528\uff0c\u4e3a\u4f55\u8d35\u5dde\u7b2c\u4e00\u573a\u5931\u5229\u540e\u5c31\u8feb\u4e0d\u53ca\u5f85\u7684\u7528\u5f20\u601d\u9e4f\u6362\u4e86\u53bb\u5e74\u7684\u4e3b\u529b\u95e8\u5c06\u82cf\u6e24\u6d0b\uff0c\u8fd9\u4e24\u573a\u6bd4\u8d5b\u5f20\u601d\u9e4f\u8868\u73b0\u662f\u707e\u96be\u7ea7\u7684\u3002", "up": 24}, {"content": "CNM\u5f20\u601d\u9e4f\u6eda\u86cb\uff0c\u8ba9\u82cf\u535a\u6d0b\u9996\u53d1\u3002", "up": 11}, {"content": "\u5f20\u601d\u9e4f\uff0c\u4f60\u548b\u4e0d\u9a82\u4e0d\u6390\u961f\u53cb\u4e86\uff1f", "up": 8}], "1": [{"content": "\u5f20\u601d\u9e4f\u88ab\u5c04\u6b63\u4e867\u811a\uff0c\u8fdb\u4e864\u4e2a\u7403\uff0c \u4faf\u68ee\u88ab\u5c04\u6b63\u4e863\u811a\uff0c\u8fdb\u4e863\u4e2a\u7403\uff0c\u6211\u7a0d\u5fae\u6709\u4e00\u70b9\u4e3a\u5f20\u601d\u9e4f\u9e23\u4e0d\u5e73\u554a\uff0c\u8c01\u624d\u662f\u771f\u7684\u6444\u653f\u738b[\u7b11\u54ed]", "up": 330}, {"content": "\u5f20\u601d\u9e4f\uff01\u771f\u662f\u592a\u5dee\u4e86\uff01\u4e0d\u660e\u767d\u4e3a\u4ec0\u4e48\u8fd8\u7528", "up": 295}, {"content": "\u867d\u7136\u662f\u9669\u80dc\uff0c\u4f46\u5f20\u601d\u9e4f\u4e0d\u6362\uff0c\u771f\u5371\u9669", "up": 181}, {"content": "\u611f\u8c22\u8d35\u5dde\u6536\u4e0b\u5f20\u601d\u9e4f\uff0c\u5426\u5219\u8981\u7978\u5bb3\u82cf\u5b81\u2026\u2026", "up": 163}, {"content": "\u5f20\u601d\u9e4f\u771fNB\uff01\u5c04\u6b634\u811a\u8fdb3\u7403[\u5389\u5bb3][\u5389\u5bb3][\u5389\u5bb3][\u5389\u5bb3][\u5389\u5bb3][\u5389\u5bb3][\u7b11\u54ed]", "up": 159}]};
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
