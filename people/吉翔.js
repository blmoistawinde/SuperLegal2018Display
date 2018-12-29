var data = {"person_name": "\u5409\u7fd4", "nicknames": "\u5409\u7fd4\u3001\u5927\u7fd4", "aspects": {"\u52a9\u653b": 0.5737761824660642, "\u7403\u5458": 0.574050339793222, "\u8fdb\u7403": 0.722434439488669, "\u5916\u63f4": 0.5247556192960853, "\u56fd\u5bb6\u961f": 0.48034598054695815, "\u6bd4\u8d5b": 0.6304503820578805, "\u8d5b\u5b63": 0.6793214350303478, "\u7403\u8ff7": 0.5541001594907129, "\u4efb\u610f\u7403": 1.0}, "overall_heat": 123.0, "overall_polar": 1.281, "name": "188", "nationality": "\u4e2d\u56fd", "position": "\u540e\u536b", "goal": "3", "assist": "5", "team_name": "\u6c5f\u82cf\u82cf\u5b81", "name_en": "Ji Xiang", "age": "28", "height": "185", "weight": "78"};
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
var topic_keywords = {"0": [{"name": "\u5409\u7fd4", "value": 0.04582800803359503}, {"name": "\u5927\u7fd4", "value": 0.02939565455541355}, {"name": "\u6052\u592a", "value": 0.016614935183494613}, {"name": "\u4f20\u7403", "value": 0.014789118130363335}, {"name": "\uff1f", "value": 0.011137484024100783}, {"name": "\u54ed", "value": 0.011137484024100783}, {"name": "\u5382\u5dde", "value": 0.011137484024100783}, {"name": "\u7b11", "value": 0.011137484024100783}, {"name": "\u8fd9\u573a", "value": 0.009311666970969508}, {"name": "\u7403\u8ff7", "value": 0.009311666970969508}, {"name": "90", "value": 0.009311666970969508}, {"name": "\u8868\u73b0", "value": 0.009311666970969508}, {"name": "\u4e00\u4e2a", "value": 0.007485849917838231}, {"name": "\u610f\u8bc6", "value": 0.007485849917838231}, {"name": "\uff01", "value": 0.007485849917838231}, {"name": "\u961f", "value": 0.007485849917838231}, {"name": "\u505c\u7403", "value": 0.007485849917838231}, {"name": "\u771f\u7684", "value": 0.007485849917838231}, {"name": "\u82cf\u5b81", "value": 0.007485849917838231}, {"name": "\u5b88\u4f4f", "value": 0.005660032864706956}, {"name": "\u5434\u66e6", "value": 0.005660032864706956}, {"name": "\u8e22", "value": 0.005660032864706956}, {"name": "\u4ee5\u524d", "value": 0.005660032864706956}, {"name": "\u5916\u63f4", "value": 0.005660032864706956}, {"name": "\u518d\u89c1", "value": 0.005660032864706956}, {"name": "\u7403\u5458", "value": 0.005660032864706956}, {"name": "\u6280\u672f", "value": 0.005660032864706956}, {"name": "\u6253", "value": 0.005660032864706956}, {"name": "\u4f4d\u7f6e", "value": 0.005660032864706956}, {"name": "\u611f\u89c9", "value": 0.005660032864706956}], "1": [{"name": "\u5409\u7fd4", "value": 0.09779179810725551}, {"name": "\uff01", "value": 0.06474387862400481}, {"name": "\u5389\u5bb3", "value": 0.02718942466576536}, {"name": "\uff1f", "value": 0.019678533874117467}, {"name": "\u5439", "value": 0.01216764308246958}, {"name": "\u52a9\u653b", "value": 0.01216764308246958}, {"name": "\u4e00\u4e2a", "value": 0.009163286765810423}, {"name": "\u56fd\u5bb6\u961f", "value": 0.009163286765810423}, {"name": "\u8fdb\u7403", "value": 0.009163286765810423}, {"name": "\ud83d\udc4d", "value": 0.009163286765810423}, {"name": "\u4eca\u5929", "value": 0.009163286765810423}, {"name": "\u82cf\u5b81", "value": 0.007661108607480846}, {"name": "\u95ee", "value": 0.006158930449151268}, {"name": "\u8868\u73b0", "value": 0.006158930449151268}, {"name": "\u592a", "value": 0.006158930449151268}, {"name": "\u5916\u63f4", "value": 0.006158930449151268}, {"name": "\u5434\u66e6", "value": 0.006158930449151268}, {"name": "\u903c", "value": 0.006158930449151268}, {"name": "\u9177", "value": 0.006158930449151268}, {"name": "\u91cc", "value": 0.006158930449151268}, {"name": "\u76ae", "value": 0.006158930449151268}, {"name": "\u725b", "value": 0.006158930449151268}, {"name": "mvp", "value": 0.006158930449151268}, {"name": "\u7403\u5458", "value": 0.006158930449151268}, {"name": "\u4e00\u7403", "value": 0.006158930449151268}, {"name": "\u7a81\u7834", "value": 0.0046567522908216915}, {"name": "\u5f00", "value": 0.0046567522908216915}, {"name": "\u6302", "value": 0.0046567522908216915}, {"name": "\u63d0\u524d", "value": 0.0046567522908216915}, {"name": "\u5b8c", "value": 0.0046567522908216915}], "2": [{"name": "\u5409\u7fd4", "value": 0.06055443704506737}, {"name": "\uff01", "value": 0.024934179959733623}, {"name": "\u82cf\u5b81", "value": 0.017190645810748025}, {"name": "\u9ec4\u7d2b\u660c", "value": 0.012544525321356666}, {"name": "\u72b6\u6001", "value": 0.010995818491559546}, {"name": "\u7279\u8c22\u62c9", "value": 0.010995818491559546}, {"name": "\u52a9\u5a01", "value": 0.009447111661762427}, {"name": "\u8e22", "value": 0.009447111661762427}, {"name": "\u4e2d\u8d85", "value": 0.009447111661762427}, {"name": "\u597d", "value": 0.009447111661762427}, {"name": "\u6bd4\u8d5b", "value": 0.007898404831965309}, {"name": "\u9002\u5408", "value": 0.007898404831965309}, {"name": "\u4eca\u5929", "value": 0.007898404831965309}, {"name": "\u5468\u4e91", "value": 0.007898404831965309}, {"name": "\u957f\u4f20", "value": 0.006349698002168188}, {"name": "\u5434\u66e6", "value": 0.006349698002168188}, {"name": "\u8fd9\u573a", "value": 0.006349698002168188}, {"name": "\u52a0\u6cb9", "value": 0.006349698002168188}, {"name": "\u8fdb\u7403", "value": 0.006349698002168188}, {"name": "\u8d5b\u5b63", "value": 0.006349698002168188}, {"name": "\u5f00\u6302", "value": 0.006349698002168188}, {"name": "\u674e\u6602", "value": 0.006349698002168188}, {"name": "\u961f\u957f", "value": 0.006349698002168188}, {"name": "\u52a9\u653b", "value": 0.00480099117237107}, {"name": "\u52aa\u529b", "value": 0.00480099117237107}, {"name": "\u535a\u963f", "value": 0.00480099117237107}, {"name": "\u771f", "value": 0.00480099117237107}, {"name": "\u7403", "value": 0.00480099117237107}, {"name": "\u5f53\u5e74", "value": 0.00480099117237107}, {"name": "\u4e00\u573a", "value": 0.00480099117237107}]};
var topic_summary = {"0": [{"content": "\u6211\u4ee5\u524d\u9ed1\u8fc7\u5409\u7fd4\u3002\u5409\u7fd4\u8fd9\u573a\u8868\u73b0\u662f\u63a5\u73ed\u90d1\u667a\u7684\u5b9e\u529b\uff0c\u4eca\u5e74\u662f\u88ab\u54ea\u4f4d\u9ad8\u4eba\u6307\u70b9\u5f00\u7a8d\u4e86\uff1f\u8fd9\u573a\u8868\u73b0\u7684\u8fd9\u4e2d\u573a\u8c03\u5ea6\u80fd\u529b\u5e94\u8be5\u662f\u73b0\u5f79\u56fd\u5185\u7403\u5458\u7b2c\u4e00\u4e86\u3002", "up": 11}, {"content": "\u91cc\u5361\u591a\u90a3\u7403\u7b2c\u4e8c\u5f20\u9ec4\u724c\u6709\u70b9\u90c1\u95f7\uff0c\u6162\u955c\u770b\u5e94\u8be5\u662f\u811a\u4e0b\u6253\u6ed1\u5931\u53bb\u91cd\u5fc3\uff0c\u4f46\u786e\u5b9e\u94f2\u5012\u5409\u7fd4\u800c\u4e14\u978b\u5e95\u671d\u5929\uff0c\u88ab\u7f5a\u4e0b\u53ea\u80fd\u8bf4\u4e0d\u8d70\u8fd0\u4e86\uff1b\u4f46\u67d0\u64cd\u5927\u54e5\u7684\u72af\u89c4\u662f\u771f\u7684\u6076\u52a3\uff0c\u660e\u663e\u6545\u610f\u4ece\u57c3\u5fb7\u5c14\u8eab\u4e0a\u8de8\u8fc7\u53bb\u800c\u4e14\u522e\u8e6d\u5bf9\u65b9\uff0c\u8fd9\u7d20\u8d28\u771f\u662f\u4f4e\u5f97\u8ba9\u4eba\u65e0\u8bed\u2026\u2026\u2026\u2026\u2026\u2026\u4ee5\u524d\u9ed1\u5409\u7fd4\u6709\u52c7\u65e0\u8c0b\uff0c\u8fd9\u8d5b\u5b63\u770b\u4ed6\u53c8\u7ecf\u5e38\u6709\u9ad8\u5149\u8868\u73b0\uff0c\u7279\u522b\u662f\u5c04\u95e8\u548c\u4f20\u7403\u8d28\u91cf\u660e\u663e\u63d0\u9ad8\u4e86", "up": 10}, {"content": "\u82cf\u5b81\u5927\u6bd4\u5206\u9886\u5148\uff0c\u5409\u7fd4\u53cd\u51fb\u4f20\u7403\uff0c\u89e3\u8bf4\u8fd9\u7403QW\u90fd\u51fa\u6765\u4e86\uff0c\u6015\u4e0d\u662f\u7ed9\u76f4\u64ad\u5427\u9996\u9875FIFAol4\u6253\u5e7f\u544a\u54e6", "up": 10}, {"content": "\u5434\u9f91\u5bf9\u5409\u7fd4\u7684\u72af\u89c4\u4e3a\u5565\u90fd\u6ca1\u7ed9\u724c \u90a3\u662f\u4e00\u4e2a\u660e\u663e\u5e26\u4e3b\u89c2\u610f\u8bc6\u51b2\u7740\u4f24\u4eba\u53bb\u7684\u52a8\u4f5c", "up": 9}, {"content": "\u5927\u7fd4\uff0c\u5b88\u4f4f\uff0c\u5927\u7fd4\uff0c\u5b88\u4f4f\uff01", "up": 8}], "1": [{"content": "\u7d2b\u660c\u82f1\u96c4\u5e74\u5c11\uff0c\u5409\u7fd4\u5a01\u9707\u56db\u65b9\uff01\u7b80\u79f0\u9ec4\u4e0a\u5409\u7fd4[\u51fb\u638c][\u54c8\u54c8]", "up": 1066}, {"content": "\u5409\u7fd4\u7b56\u52a8\uff0c\u5409\u7fd4\u52a9\u653b\uff0c\u5409\u7fd4\u5165\u610f\u3002\u8fd9\u8fd8\u8981\u600e\u4e48\u5439\u3002\u7edd\u5bf9MVP\u554a\u3002\u90a3\u5c31\u795d\u4ed6\u5409\u7965\u5982\u610f\u5427\u3002[\u9177][\u9177][\u9177]", "up": 218}, {"content": "\u5409\u7fd4\u6ee1\u5206\uff0c\u957f\u4f20\u3001\u76f4\u585e\u3001\u7a81\u7834\u3001\u62e6\u622a\u3001\u5b9a\u4f4d\u7403\uff0c\u65e0\u6240\u4e0d\u80fd\uff01", "up": 161}, {"content": "\u5510\u7a81\u5192\u6627\u95ee\u4e00\u53e5\uff0c\u5409\u7fd4\u662f\u54ea\u4e00\u4e2a\u56fd\u5bb6\u7684\u5916\u63f4\u5462\uff1f\u4ed6\u592a\ud83d\udc2eB\u4e86\uff01[mvp][\u5389\u5bb3][\u9177]", "up": 154}, {"content": "\u4f60\u4eec\u90fd\u5728\u5439\u9ec4\u7d2b\u660c\u6211\u6765\u5439\u5439\u5409\u7fd4\uff0c\u4eca\u5e74\u7684\u8868\u73b0\u7edd\u5bf9\u662f\u7238\u7238\u7ea7\u522b\u7684\uff0c\u91cc\u76ae\u4f60\u4e0d\u8003\u8651\u8003\u8651\uff1f", "up": 145}], "2": [{"content": "\u5409\u7fd4\u5c04\u7684\u6f02\u4eae\u3002\u989c\u4fca\u51cc\u6251\u7684\u4e5f\u6f02\u4eae\u3002\u8fd9\u5c04\u95e8\u548c\u6251\u6551\u90fd\u662f\u4e16\u754c\u7ea7\u7684\u3002\u5409\u7fd4\u7684\u8fdc\u5c04\u80fd\u529b\u8fd8\u662f\u725b\u903c\u7684\u3002\u5370\u8c61\u4e2d\u8fdb\u4e86\u51e0\u4e2a\u4efb\u610f\u7403\u76f8\u5f53\u6f02\u4eae\u3002", "up": 482}, {"content": "\u725b\u903c\u5409\u7fd4\uff01\u8fd9\u573a\u7b80\u76f4\u5c31\u662f\u5f00\u6302\u4e86\uff01", "up": 99}, {"content": "\u5409\u7fd4\uff0c\u5434\u66e6\uff0c\u674e\u6602\uff0c\u8c22\u9e4f\u98de\uff0c\u9ec4\u7d2b\u660c", "up": 78}, {"content": "\u6211\u53d1\u73b0\u82cf\u5b81\u672c\u8d5b\u5b63\u6ca1\u6709\u4e00\u573a\u6bd4\u8d5b\u662f\u5168\u4f53\u4e3b\u529b\u7403\u5458\u90fd\u80fd\u4e0a\u573a\u7684\uff0c\u4e0d\u662f\u8fd9\u4e2a\u4f24\u4e86\uff0c\u5c31\u662f\u90a3\u4e2a\u505c\u8d5b\uff0c\u5e15\u83b1\u5854\uff0c\u5409\u7fd4\uff0c\u9ec4\u7d2b\u660c\u7b49\u7b49\uff0c\u7279\u8c22\u62c9\u4e5f\u505c\u8d5b\u4e86\u597d\u51e0\u573a\uff0c\u53ef\u80fd\u8fd9\u5c31\u662f\u547d\u5427\uff0c\u80fd\u6392\u7b2c\u4e94\u6ee1\u8db3\u4e86\u3002", "up": 39}, {"content": "\u5434\u66e6\u8fd9\u573a\u72b6\u6001\u771f\u597d\uff0c\u5e15\u83b1\u5854\u4e00\u5982\u65e2\u5f80\u7684\u7a33\uff0c\u9ec4\u7d2b\u660c\u4e00\u76f4\u5f80\u4e0a\u8d70\uff0c\u7279\u8c22\u62c9\u7d2f\u4e86\uff0c\u535a\u963f\u57fa\u8036\u7684\u8fdb\u653b\u5f31\u70b9\u8d8a\u53d1\u660e\u663e\uff0c\u5409\u7fd4\u987e\u8d85\u674e\u6602\u4e3b\u529b\u4f4d\u7f6e\u6ca1\u95ee\u9898\uff0c\u5468\u4e91\u4e0d\u9002\u5408\u5de6\u8fb9\u540e\u536b\uff0c\u8c22\u9e4f\u98de\u72b6\u6001\u6709\u8d77\u4f0f\uff0c\u5f20\u6653\u5f6c\u5b9a\u4f4d\u662f\u66ff\u8865\uff01", "up": 11}]};
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
