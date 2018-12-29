var data = {"person_name": "\u83ab\u96f7\u8bfa", "nicknames": "\u83ab\u96f7\u8bfa", "aspects": {"\u7403\u5458": 0.3019020312218771, "\u5916\u63f4": 0.24384761408895095, "\u7403\u8ff7": 0.462517604765691, "\u66ff\u8865": 0.4440726677617853, "\u8d5b\u5b63": 0.5464301746373225, "\u52a9\u653b": 0.41084656970553896, "\u9632\u5b88": 0.6940648516932661, "\u5c04\u95e8": 0.2611789733907082, "\u6bd4\u8d5b": 0.4253198988077337, "\u9ec4\u724c": 0.320660485626915}, "overall_heat": 85.0, "overall_polar": 0.088, "name": "221", "nationality": "\u54e5\u4f26\u6bd4\u4e9a", "position": "\u4e2d\u573a", "goal": "7", "assist": "5", "team_name": "\u4e0a\u6d77\u7533\u82b1", "name_en": "Giovanni Moreno", "age": "32", "height": "192", "weight": "83"};
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
var topic_keywords = {"0": [{"name": "\u83ab\u96f7\u8bfa", "value": 0.044739484547584515}, {"name": "\u7533\u82b1", "value": 0.03692959946446503}, {"name": "\uff1f", "value": 0.031351110119379674}, {"name": "\u7403\u5458", "value": 0.01684703782215776}, {"name": "\u5916\u63f4", "value": 0.01573133995314069}, {"name": "\u597d", "value": 0.009037152739038268}, {"name": "\u74dc\u6797", "value": 0.009037152739038268}, {"name": "\u767b\u5df4\u5df4", "value": 0.009037152739038268}, {"name": "\u6253", "value": 0.007921454870021199}, {"name": "\u4fdd\u5065", "value": 0.006805757001004128}, {"name": "\u8e22", "value": 0.006805757001004128}, {"name": "\u51e0\u4e2a", "value": 0.006805757001004128}, {"name": "\u5047\u8bbe", "value": 0.006805757001004128}, {"name": "\u8d70", "value": 0.0056900591319870575}, {"name": "\u5e0c\u671b", "value": 0.0056900591319870575}, {"name": "\u9c81\u80fd", "value": 0.0056900591319870575}, {"name": "\u7403\u8ff7", "value": 0.0056900591319870575}, {"name": "\u88c1\u5224", "value": 0.004574361262969988}, {"name": "\u903c", "value": 0.004574361262969988}, {"name": "\u4e70", "value": 0.004574361262969988}, {"name": "\u6bd4\u8d5b", "value": 0.004574361262969988}, {"name": "\u4e00\u573a", "value": 0.004574361262969988}, {"name": "\u4e00\u5206", "value": 0.004574361262969988}, {"name": "\u79e6\u5347", "value": 0.004574361262969988}, {"name": "\u534e\u590f", "value": 0.004574361262969988}, {"name": "\u95ee\u9898", "value": 0.004574361262969988}, {"name": "\u5dee", "value": 0.004574361262969988}, {"name": "\u5b59\u4e16\u6797", "value": 0.004574361262969988}, {"name": "\u961f\u957f", "value": 0.004574361262969988}, {"name": "\u4e0d\u9519", "value": 0.004574361262969988}], "1": [{"name": "\u83ab\u96f7\u8bfa", "value": 0.07617862574312181}, {"name": "\uff01", "value": 0.036084612194110334}, {"name": "\u7533\u82b1", "value": 0.020876538089312873}, {"name": "\u97e6\u4e16\u8c6a", "value": 0.011198672749896308}, {"name": "\u7f57\u6885\u7f57", "value": 0.008433568367205862}, {"name": "\u8138", "value": 0.008433568367205862}, {"name": "\u4e0a\u6e2f", "value": 0.008433568367205862}, {"name": "\u9632\u5b88", "value": 0.008433568367205862}, {"name": "\u6342", "value": 0.008433568367205862}, {"name": "\u5c04\u95e8", "value": 0.007051016175860639}, {"name": "\u8fc7\u6765", "value": 0.007051016175860639}, {"name": "\u8fdb", "value": 0.007051016175860639}, {"name": "\u52a9\u653b", "value": 0.007051016175860639}, {"name": "\u7403", "value": 0.005668463984515416}, {"name": "\u673a\u4f1a", "value": 0.005668463984515416}, {"name": "\u76f4\u63a5", "value": 0.005668463984515416}, {"name": "\u6700\u540e", "value": 0.005668463984515416}, {"name": "\u611f\u8c22", "value": 0.005668463984515416}, {"name": "\u83ab\u961f", "value": 0.005668463984515416}, {"name": "\u4eba", "value": 0.005668463984515416}, {"name": "\u5c0f\u6bdb", "value": 0.004285911793170193}, {"name": "\u786e\u5b9e", "value": 0.004285911793170193}, {"name": "\u8fdb\u7403", "value": 0.004285911793170193}, {"name": "\u8fdb\u653b", "value": 0.004285911793170193}, {"name": "\u7ea2\u724c", "value": 0.004285911793170193}, {"name": "\u8d5b\u5b63", "value": 0.004285911793170193}, {"name": "\uff1f", "value": 0.004285911793170193}, {"name": "\u62a2", "value": 0.004285911793170193}, {"name": "\u811a", "value": 0.004285911793170193}, {"name": "\u89c9\u5f97", "value": 0.004285911793170193}]};
var topic_summary = {"0": [{"content": "\u672c\u573a\u88c1\u5224\u5439\u7684\u786e\u5b9e\u9ed1\uff0c\u4f46\u8bf4\u4e3b\u573a\u54e8\u5c31\u6709\u70b9\u8fc7\u4e86\uff0c\u4e0a\u534a\u573a\u83ab\u96f7\u8bfa\u88ab\u6570\u6b21\u653e\u5230\u4e5f\u6ca1\u5439\u554a", "up": 133}, {"content": "\u8fd9\u573a\u6bd4\u8d5b\u7ed9\u6211\u6700\u6df1\u7684\u5370\u8c61\u662f\u83ab\u96f7\u8bfa\u7f5a\u70b9\u7403\u7684\u65f6\u5019\uff0c\u90a3\u4e2a\u95e8\u5c06\u8d81\u7740\u83ab\u96f7\u8bfa\u80cc\u8eab\u7684\u65f6\u5019\uff0c\u53bb\u7ed9\u83ab\u96f7\u8bfa\u7684\u7f5a\u7403\u70b9\u6316\u5751\u3002\u3002\u3002\u3002\u3002", "up": 72}, {"content": "1.\u534e\u590f\u961f\u7684\u91d1\u6d0b\u6d0b\u3001\u9ad8\u51c6\u7ffc\u3001\u8d75\u5b87\u8c6a\u5c31\u662f\u4e2d\u56fd\u8db3\u7403\u7684\u5199\u7167\uff0c\u4e4d\u770b\u4e4b\u4e0b\u62b1\u6709\u671f\u671b\uff0c\u5176\u5b9e\u96be\u582a\u5927\u7528 2.\u4efb\u822a\u4e0b\u534a\u573a\u7981\u533a\u524d\u90a3\u6b21\u62c9\u83ab\u96f7\u8bfa\u5c31\u8be5\u4e24\u9ec4\u4e86\uff0c\u540e\u9762\u6700\u8fdf\u7981\u533a\u80cc\u540e\u649e\u9a6c\u4e01\u65af\u5e94\u8be5\u4e0b\u53bb\u4e86\u3002\u518d\u6b21\u8bc1\u660e\uff0c\u827e\u5803rubbish\u3002 3.\u70ed\u5c14\u7ef4\u5c3c\u5965\u53ef\u4ee5\u8d70\u4e86\uff0c\u534e\u590f\u53ef\u4ee5\u627e\u5916\u63f4\u4e2d\u950b\u4e86 4.\u6768\u7a0b\u4e0d\u9519\uff0c\u5b88\u95e8\u6c14\u8d28\u3001\u80fd\u529b\u90fd\u597d 5.\u7533\u82b1\u73b0\u5728\u4e0d\u80fd\u7b97\u5f3a\u961f\uff0c\u4f46\u534e\u590f\u4e00\u5b9a\u662f\u4f2a\u5f3a\u961f", "up": 64}, {"content": "\u534e\u590f\u5e78\u798f\u8fd9\u4e2a\u7403\u961f\u5f88\u5947\u602a\uff0c\u4e70\u4eba\u90fd\u662f\u79c1\u4e0b\u63a5\u89e6\u903c\u7403\u5458\u548c\u4ff1\u4e50\u90e8\u95f9\u77db\u76fe\uff0c\u7136\u540e\u518d\u62a2\u4eba\uff0c\u8bdd\u8bf4\u8fd9\u6837\u4e70\u7684\u7684\u7403\u5458\u6709\u51e0\u4e2a\u4f1a\u6709\u96c6\u4f53\u8363\u8a89\u611f\uff1f\u5168\u961f\u7403\u5458\u5c31\u5982\u96c7\u4f63\u5175\u4e00\u6837\u3002\u4f1a\u6709\u90d1\u667a\uff0c\u5927\u96f7\uff0c\u83ab\u96f7\u8bfa\uff0c\u5434\u66e6\u7b49\u7403\u5458\u7403\u961f\u8363\u8a89\u611f\u5417\uff1f", "up": 57}, {"content": "\u7533\u82b1\u8fd9\u5957\u9635\u5bb9\u8fd8\u4e0d\u5982\u7528\u9752\u5e74\u519b\uff0c\u540e\u536b\u6817\u9e4f\u4e0d\u582a\u91cd\u7528\uff0c\u827e\u8fea\u4e5f\u4e0d\u662f\u6b63\u724c\u4e2d\u536b\uff0c\u9762\u5bf9\u5f3a\u4e00\u70b9\u7684\u5916\u63f4\u4f1a\u88ab\u5b8c\u7206\uff0c\u5b59\u4e16\u6797\u5dee\u79e6\u5347\u4e0d\u6b62\u4e00\u6863\uff0c\u81f3\u4e8e\u6731\u5efa\u8363\u674e\u8fd0\u79cb\u5c31\u662f\u6253\u9171\u6cb9\u7684\uff0c\u800c\u74dc\u6797\u83ab\u96f7\u8bfa\u7684\u72b6\u6001\u968f\u7740\u5e74\u9f84\u589e\u957f\u4e0b\u6ed1\u5f88\u5927\uff0c\u800c\u4e00\u5ea6\u88ab\u8ba4\u4e3a\u662f\u540c\u5e74\u9f84\u6bb5\u5929\u8d4b\u6700\u9ad8\u7684\u5218\u8bfa\u51e1\uff0c\u770b\u4e86\u8fd9\u4e48\u591a\u6bd4\u8d5b\uff0c\u53d1\u73b0\u5fc3\u7406\u7d20\u8d28\u4e0d\u9ad8\uff0c\u5f88\u96be\u6210\u4e3a\u5173\u952e\u7403\u5458\uff0c\u96be\u6210\u5927\u6c14\uff0c\u4e0d\u7ba1\u5185\u5916\u63f4\uff0c\u7533\u82b1\u60f3\u8981\u4e0b\u8d5b\u5b63\u6709\u6240\u4f5c\u4e3a\uff0c\u5fc5\u987b\u8981\u6362\u4eba\u4e86\uff0c\u8be5\u7528\u7684\u5c0f\u7403\u5458\u5c31\u5927\u80c6\u7684\u53bb\u7ec3\uff0c\u91d1\u8d35\u5728\u8be5\u7ec3\u5175\u7684\u65f6\u5019\u5c31\u8be5\u7ec3", "up": 36}], "1": [{"content": "\u8c8c\u4f3c\u97e6\u4e16\u8c6a\u5c04\u95e8\uff0c\u83ab\u96f7\u8bfa\u8fd8\u53bb\u963b\u6321\u4e86\uff01\u8fd9\u662f\u5565\u60c5\u51b5\uff01", "up": 210}, {"content": "\u81ea\u4ece\u5362\u7433\u5f53\u961f\u957f\u4e4b\u540e\uff0c\u6574\u4e2a\u4eba\u7684\u7cbe\u6c14\u795e\u66f4\u4e0a\u4e00\u5c42\u697c\uff0c\u53c8\u5728\u524d\u9762\u653b\uff0c\u53c8\u8fd4\u56de\u540e\u573a\u534f\u52a9\u9632\u5b88\u3002\u548c\u83ab\u96f7\u8bfa\u62a2\u7403\u4e4b\u95f4\uff0c\u7adf\u7136\u628a\u8fd9\u9ad8\u5927\u8001\u5916\u6574\u4e2a\u5f39\u5f00\uff0c\u725b\ud83d\udc2eB\uff0c\u5362\u961f\uff01", "up": 119}, {"content": "\u83ab\u96f7\u8bfa\uff0c\u7533\u82b1\u961f\u9b42\u554a\uff01", "up": 29}, {"content": "\u8bf4\u8bf4\u770b\u6cd5\u2026\u7f57\u6885\u7f57\u771f\u7684\u4ee3\u66ff\u4e0d\u4e86\u83ab\u96f7\u8bfa\u2026\u674e\u8fd0\u79cb\u7684\u4e0a\u62a2\u90a3\u4e0b\u8fd8\u662f\u90a3\u4e48\u91ce\u2026\u53cd\u6b63\u6211\u89c9\u5f97\u90a3\u7403\u6ca1\u8d8a\u4f4d\u2026\u8fd8\u6709\u5c31\u662f\u2026\u573a\u5730\u522b\u8bf4\u8e22\u7403\u7684\u4eba\u2026\u89c2\u4f17\u770b\u7740\u90fd\u89c9\u5f97\u4e00\u70b9\u89c2\u770b\u6b32\u90fd\u6ca1\u2026", "up": 15}, {"content": "\u7533\u82b1\u8f93\u7684\u4e0d\u6028\u3002\u4eba\u548c\u8d62\u7684\u5e94\u5f53\uff01\u83ab\u96f7\u8bfa\u5e94\u8be5\u7ea2\u724c\uff01\u4f46\u662f\u6700\u540e\u4e00\u4e2a\u7403\u8bf4\u51b2\u649e\u95e8\u5c06\u7684\u3002\u90fd\u662f\u4e9b\u4f2a\u7403\u8ff7\uff01\u8fde\u51b2\u649e\u95e8\u5c06\u89c4\u5219\u90fd\u6ca1\u5f04\u6e05\u695a\u5c31\u5f00\u55b7\u3002\u4e2d\u8d85\u9664\u4e86\u8981\u63d0\u9ad8\u7403\u5458\u7d20\u8d28\u4e4b\u5916\u8fd8\u8981\u63d0\u9ad8\u7403\u8ff7\u7684\u81ea\u6211\u4fee\u517b", "up": 13}]};
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
