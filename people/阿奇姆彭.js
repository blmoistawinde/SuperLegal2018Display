var data = {"person_name": "\u963f\u5947\u59c6\u5f6d", "nicknames": "\u963f\u5947\u59c6\u5f6d", "aspects": {"\u6bd4\u8d5b": 0.5748467770163393, "\u7403\u8ff7": 0.510250029623712, "\u8d8a\u4f4d": 0.3416982084559517, "\u8fdb\u7403": 0.3394625070895138, "\u7403\u5458": 0.3394640873824879, "\u8fdb\u653b": 0.36082291809011624, "\u540e\u9632": 0.4682327947117203, "\u9632\u5b88": 0.5069450667661094, "\u8d5b\u5b63": 0.7662305881250768, "\u4e0b\u534a\u573a": 0.6946684407369298}, "overall_heat": 71.0, "overall_polar": 0.259, "name": "278", "nationality": "\u52a0\u7eb3", "position": "\u524d\u950b", "goal": "15", "assist": "3", "team_name": "\u5929\u6d25\u4ebf\u5229", "name_en": "Frank Acheampong", "age": "25", "height": "169", "weight": "65"};
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
var topic_keywords = {"0": [{"name": "\u963f\u5947\u59c6\u5f6d", "value": 0.05445086705202312}, {"name": "\uff01", "value": 0.04404624277456647}, {"name": "\u6cf0\u8fbe", "value": 0.01514450867052023}, {"name": "\u6052\u5927", "value": 0.010520231213872832}, {"name": "\u8d8a\u4f4d", "value": 0.009364161849710981}, {"name": "\u4e00\u4e2a", "value": 0.009364161849710981}, {"name": "\u8e22", "value": 0.009364161849710981}, {"name": "\u597d", "value": 0.009364161849710981}, {"name": "\u73b0\u5728", "value": 0.008208092485549132}, {"name": "\u8fdb\u7403", "value": 0.008208092485549132}, {"name": "var", "value": 0.007052023121387283}, {"name": "\u7c73\u514b\u5c14", "value": 0.007052023121387283}, {"name": "\u6bd4\u8d5b", "value": 0.007052023121387283}, {"name": "\u771f", "value": 0.005895953757225433}, {"name": "\u4e2d\u8d85", "value": 0.005895953757225433}, {"name": "\u7403\u8ff7", "value": 0.005895953757225433}, {"name": "\u88c1\u5224", "value": 0.005895953757225433}, {"name": "\u5439", "value": 0.005895953757225433}, {"name": "\u83ab\u5fb7\u65af\u7279", "value": 0.005895953757225433}, {"name": "\uff1f", "value": 0.005895953757225433}, {"name": "\u540e\u9632", "value": 0.005895953757225433}, {"name": "\u611f\u89c9", "value": 0.005895953757225433}, {"name": "\u5c0f", "value": 0.005895953757225433}, {"name": "\u901f\u5ea6", "value": 0.004739884393063583}, {"name": "\u60e0\u5bb6\u5eb7", "value": 0.004739884393063583}, {"name": "\u4eca\u5e74", "value": 0.004739884393063583}, {"name": "\u524d", "value": 0.004739884393063583}, {"name": "\u778e", "value": 0.004739884393063583}, {"name": "\u6700\u540e", "value": 0.004739884393063583}, {"name": "\u5389\u5bb3", "value": 0.004739884393063583}], "1": [{"name": "\u963f\u5947\u59c6\u5f6d", "value": 0.0375}, {"name": "\u7403", "value": 0.023324742268041238}, {"name": "\u6cf0\u8fbe", "value": 0.01688144329896907}, {"name": "\uff1f", "value": 0.014304123711340206}, {"name": "\u8d8a\u4f4d", "value": 0.013015463917525772}, {"name": "\u5929\u6d25", "value": 0.01172680412371134}, {"name": "\u4eba", "value": 0.01172680412371134}, {"name": "\u4e0a\u534a\u573a", "value": 0.01172680412371134}, {"name": "\u4e00\u4e2a", "value": 0.010438144329896907}, {"name": "\u95e8\u5c06", "value": 0.010438144329896907}, {"name": "\u8fdb", "value": 0.010438144329896907}, {"name": "\u5e94\u8be5", "value": 0.010438144329896907}, {"name": "\u6bd4\u8d5b", "value": 0.009149484536082473}, {"name": "\u4e0b\u534a\u573a", "value": 0.009149484536082473}, {"name": "\u7403\u8ff7", "value": 0.009149484536082473}, {"name": "\u8fb9\u88c1", "value": 0.007860824742268041}, {"name": "\u8e22", "value": 0.007860824742268041}, {"name": "\u8fdb\u7403", "value": 0.007860824742268041}, {"name": "\u4e0a\u5c97", "value": 0.007860824742268041}, {"name": "\u88c1\u5224", "value": 0.007860824742268041}, {"name": "\u81f3\u5c11", "value": 0.007860824742268041}, {"name": "\u9ad8\u62c9\u7279", "value": 0.007860824742268041}, {"name": "\u53d1\u6325", "value": 0.007860824742268041}, {"name": "\u4e2d\u56fd", "value": 0.0065721649484536074}, {"name": "\u7403\u5458", "value": 0.0065721649484536074}, {"name": "\u8db3\u7403", "value": 0.005283505154639175}, {"name": "\u4e22", "value": 0.005283505154639175}, {"name": "\u9519\u5224", "value": 0.005283505154639175}, {"name": "\u660e\u663e", "value": 0.005283505154639175}, {"name": "\u597d", "value": 0.005283505154639175}]};
var topic_summary = {"0": [{"content": "\u4f9d\u7136\u8bb0\u5f97\u963f\u5947\u59c6\u5f6d\u5728\u6b66\u91cc\u5357\u8054\u6253\u7206\u5f20\u7433\u8283\u7684\u753b\u9762\uff0c\u60e0\u5bb6\u5eb7\u5728\u90a3\u4e2a\u533a\u57df\u8d8a\u6765\u8d8a\ud83d\udc2e\u4e86\uff0c\u6cf0\u8fbe\u8fde\u7eed\u4e24\u573a\u597d\u7403\u88ab\u5439\u8d8a\u4f4d\uff0c\u4f46\u4e0a\u573a\u8bef\u5224\u7684\u51b7\u9759\u6512\u4e0b\u7684\u4eba\u54c1\uff0c\u5728\u8fd9\u573a\u5f97\u5230\u4e86\u56de\u62a5\uff01\uff01\uff01", "up": 175}, {"content": "\u4e0d\u5f97\u4e0d\u8bf4\uff0c\u65bd\u5fb7\u5229\u514b\u628a\u7c73\u514b\u5c14\uff0c\u963f\u5947\u59c6\u5f6d\uff0c\u60e0\u5bb6\u5eb7\u8fd9\u4e09\u4eba\u7528\u6d3b\u4e86\uff0c\u53e6\u5916\u5c0f\u5c06\u6768\u5e06\u90a3\u4e2a\u5355\u8f66\u786e\u5b9e\u5e05\u5f97\u4e00\u903c\uff0c\u6cf0\u8fbe\u4eca\u5e74\u786e\u5b9e\u6362\u4e2a\u6d3b\u6cd5\u4e86", "up": 116}, {"content": "\u4e00\u62db\u9c9c\u7684\u963f\u5947\u59c6\u5f6d\uff0c\u5728\u4e2d\u8d85\u4f9d\u7136\u5145\u5f53\u7740\u5404\u4f4d\u540e\u9632\u7684\u5669\u68a6", "up": 114}, {"content": "\u963f\u5947\u59c6\u5f6d\u5f88\u5389\u5bb3\u3002\u3002\u3002\u3002\u6cf0\u8fbe\u4eca\u5e74\u8981\u6405\u5c40[\u6342\u8138]", "up": 102}, {"content": "\u4e0d\u8981\u52a8\u4e0d\u52a8\u5c31\u5047\u7403\uff0c\u6cf0\u8fbe\u8e22\u7684\u4e0d\u9519\uff0c\u7c73\u514b\u5c14\u4fe9\u52a9\u653b\u5389\u5bb3\uff0c\u963f\u5947\u59c6\u5f6d\u8bc1\u660e\u52aa\u529b\u662f\u6709\u56de\u62a5\u7684", "up": 52}], "1": [{"content": "4:1\uff0c\u4e0a\u534a\u573a\u9ad8\u62c9\u7279\u4e00\u4e2a\uff0c\u4e0b\u534a\u573a\u963f\u5947\u59c6\u5f6d\u4e00\u4e2a", "up": 280}, {"content": "\u91d1\u656c\u9053\u90a3\u4e2a\u7403\u548c\u963f\u5947\u59c6\u5f6d\u7684\u90a3\u4e2a\u7403 \u4e3a\u4ec0\u4e48\u5224\u7f5a\u5c3a\u5ea6\u4e0d\u4e00\u6837\uff1f", "up": 263}, {"content": "\u963f\u5947\u59c6\u5f6d\u548c\u7c73\u514b\u5c14\u9762\u5bf9\u5bcc\u529b\u4e03\u4e2a\u4eba\u7684\u9632\u5b88\u914d\u5408\u6253\u8fdb\u4e00\u4e2a\u7403\uff0c\u5c31\u95ee\u4f60\u5c4c\u4e0d\u5c4c\uff1f\u9a82\u5929\u6d25\u6cf0\u8fbe\u7684\u4eba\u5728\u4e0d\u4e86\uff0c\u5c31\u559c\u6b22\u4f60\u4eec\u770b\u4e0d\u60ef\u5374\u53c8\u5e72\u4e0d\u6389\u6211\u4eec\u7684\u6837\u5b50\u3002", "up": 53}, {"content": "\u6211\u662f\u6743\u5065\u7684\u7403\u8ff7\uff0c\u4e70\u4e86\u4e00\u5e74\u7684\u5e74\u7968\uff0c\u652f\u6301\u963f\u5170\uff0c\u6253\u7684\u597d\uff0c\u5e94\u8be5\u76f4\u63a5\u6253\u6b7b\u5218\u5f02\u94ed\uff0c\u8fd9\u4e2a****\u73a9\u610f\u4e22\u5929\u6d25\u4eba\u7684\u8138\uff0c\u4e22\u4e2d\u56fd\u4eba\u7684\u8138\uff0c\u4e0a\u4e00\u573a\u6545\u610f\u51fb\u6253\u6cf0\u8fbe\u6cf0\u8fbe\u524d\u950b\u963f\u5947\u59c6\u5f6d\uff0c\u51e0\u6b21\u8bb2\u4eba\u5bb6\u6253\u5012\uff0c\u751a\u81f3\u6253\u4eba\u5bb6\u540e\u8111\uff0c\u5979\u89c9\u5f97\u9ed1\u4eba\u597d\u6b3a\u8d1f\uff0c\u963f\u5170\u5e73\u65f6\u4e0d\u7231\u8bf4\u8bdd\uff0c\u6027\u683c\u5e94\u8be5\u8001\u5b9e\uff0c\u6240\u4ee5\u6545\u6280\u91cd\u65bd\uff0c\u8be5\u6253\uff0c\u5218\u4e00\u9e23\u8d76\u7d27\u6eda\u51fa\u5929\u6d25\uff0c\u4e22\u5929\u6d25\u4eba\u7684\u8138", "up": 29}, {"content": "\u7ba1\u7406\u5c42\u5148\u522b\u5fd9\u522b\u7684\u5427\uff0c\u5148\u6293\u7d27\u957f\u7ea6\u9501\u5b9a\u963f\u5947\u59c6\u5f6d\u5427\uff0c\u5c0f\u5fc3\u6709\u7403\u961f\u5df2\u7ecf\u6697\u9001\u79cb\u6ce2\u4e86\u2026\u2026", "up": 23}]};
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
