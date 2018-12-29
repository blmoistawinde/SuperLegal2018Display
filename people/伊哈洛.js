var data = {"person_name": "\u4f0a\u54c8\u6d1b", "nicknames": "\u4f0a\u54c8\u6d1b", "aspects": {"\u8fdb\u7403": 0.463229362042774, "\u70b9\u7403": 0.45743317335165246, "\u8d5b\u5b63": 0.8059079513239404, "\u7403\u8ff7": 0.5191046616232913, "\u7403\u5458": 0.30832427759356384, "\u5916\u63f4": 0.4775824755392208, "\u6bd4\u8d5b": 0.6038878022187727, "\u91d1\u9774": 0.5566620977023345, "\u5355\u5200": 0.6605721555189628, "\u8054\u8d5b": 0.9988248934984507}, "overall_heat": 106.0, "overall_polar": 0.414, "name": "160", "nationality": "\u5c3c\u65e5\u5229\u4e9a", "position": "\u524d\u950b", "goal": "20", "assist": "1", "team_name": "\u957f\u6625\u4e9a\u6cf0", "name_en": "Odion Ighalo", "age": "29", "height": "188", "weight": "73"};
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
var topic_keywords = {"0": [{"name": "\u4f0a\u54c8\u6d1b", "value": 0.05497716894977169}, {"name": "\u4e9a\u6cf0", "value": 0.022100456621004565}, {"name": "\uff1f", "value": 0.016621004566210046}, {"name": "\u54ed", "value": 0.016621004566210046}, {"name": "\u70b9\u7403", "value": 0.016621004566210046}, {"name": "\u88c1\u5224", "value": 0.016621004566210046}, {"name": "\u770b\u5230", "value": 0.014794520547945205}, {"name": "\u4e00\u4e2a", "value": 0.012968036529680364}, {"name": "\u7b11", "value": 0.012968036529680364}, {"name": "\u63d0\u524d", "value": 0.009315068493150684}, {"name": "\u7981\u533a", "value": 0.009315068493150684}, {"name": "\u5224\u7f5a", "value": 0.007488584474885844}, {"name": "\u624b\u7403", "value": 0.007488584474885844}, {"name": "\u5fae\u7b11", "value": 0.007488584474885844}, {"name": "\u7403\u5458", "value": 0.007488584474885844}, {"name": "\u4e24\u4e2a", "value": 0.007488584474885844}, {"name": "\u5012\u5730", "value": 0.007488584474885844}, {"name": "\u5df2\u7ecf", "value": 0.007488584474885844}, {"name": "\u771f", "value": 0.007488584474885844}, {"name": "\u8fdb", "value": 0.007488584474885844}, {"name": "\u5439", "value": 0.005662100456621005}, {"name": "\u9ed1", "value": 0.005662100456621005}, {"name": "\u6700\u540e", "value": 0.005662100456621005}, {"name": "\u5bcc\u529b", "value": 0.005662100456621005}, {"name": "\u6709\u70b9", "value": 0.005662100456621005}, {"name": "\u95ee\u9898", "value": 0.005662100456621005}, {"name": "\u7ebf", "value": 0.005662100456621005}, {"name": "\u52a8\u4f5c", "value": 0.005662100456621005}, {"name": "\u8fdb\u653b", "value": 0.005662100456621005}, {"name": "\u72af\u89c4", "value": 0.005662100456621005}], "1": [{"name": "\u4f0a\u54c8\u6d1b", "value": 0.07319090282563749}, {"name": "\uff01", "value": 0.03873190902825638}, {"name": "\u8fdb\u7403", "value": 0.020813232253618193}, {"name": "\u4e9a\u6cf0", "value": 0.01943487250172295}, {"name": "\u6b66\u78ca", "value": 0.01943487250172295}, {"name": "\u8d5b\u5b63", "value": 0.018056512749827704}, {"name": "\u70b9\u7403", "value": 0.018056512749827704}, {"name": "\u52a0\u6cb9", "value": 0.012543073742246726}, {"name": "\uff1f", "value": 0.011164713990351481}, {"name": "\u7403\u5458", "value": 0.009786354238456236}, {"name": "\u597d", "value": 0.009786354238456236}, {"name": "\u518d", "value": 0.009786354238456236}, {"name": "\u8e22", "value": 0.008407994486560991}, {"name": "\u8fdb", "value": 0.008407994486560991}, {"name": "\u91d1\u9774", "value": 0.007029634734665747}, {"name": "\u4e0d\u8fdb", "value": 0.007029634734665747}, {"name": "\u611f\u89c9", "value": 0.007029634734665747}, {"name": "\u5e0c\u671b", "value": 0.0056512749827705025}, {"name": "\u673a\u4f1a", "value": 0.0056512749827705025}, {"name": "\u4e2d\u573a", "value": 0.0056512749827705025}, {"name": "\u6700\u540e", "value": 0.0056512749827705025}, {"name": "\u5e94\u8be5", "value": 0.0056512749827705025}, {"name": "\u5916\u63f4", "value": 0.0056512749827705025}, {"name": "\u5f3a", "value": 0.0056512749827705025}, {"name": "\u6bd4\u8d5b", "value": 0.0056512749827705025}, {"name": "\u60f3", "value": 0.0042729152308752585}, {"name": "\u51e0\u573a", "value": 0.0042729152308752585}, {"name": "\u624e\u54c8\u7ef4", "value": 0.0042729152308752585}, {"name": "\u8d76\u7d27", "value": 0.0042729152308752585}, {"name": "\u4e2d\u8d85", "value": 0.0042729152308752585}], "2": [{"name": "\u4f0a\u54c8\u6d1b", "value": 0.046716541978387364}, {"name": "\uff01", "value": 0.0400665004156276}, {"name": "\u4e9a\u6cf0", "value": 0.020116375727348295}, {"name": "\u597d", "value": 0.010141313383208644}, {"name": "\u6052\u5927", "value": 0.008478802992518703}, {"name": "\u91cd\u5e86", "value": 0.008478802992518703}, {"name": "\u592a", "value": 0.008478802992518703}, {"name": "\u77e5\u9053", "value": 0.008478802992518703}, {"name": "\u4f5c\u7528", "value": 0.006816292601828761}, {"name": "\u771f\u7684", "value": 0.006816292601828761}, {"name": "\u771f", "value": 0.006816292601828761}, {"name": "\u7403\u8ff7", "value": 0.006816292601828761}, {"name": "\u673a\u4f1a", "value": 0.006816292601828761}, {"name": "\u60f3", "value": 0.006816292601828761}, {"name": "\u4e0b\u534a\u573a", "value": 0.006816292601828761}, {"name": "\u5916\u63f4", "value": 0.006816292601828761}, {"name": "\u524d\u950b", "value": 0.006816292601828761}, {"name": "\u901f\u5ea6", "value": 0.006816292601828761}, {"name": "\u964d\u7ea7", "value": 0.006816292601828761}, {"name": "\u4f55\u8d85", "value": 0.00515378221113882}, {"name": "\u540e", "value": 0.00515378221113882}, {"name": "\u7403\u961f", "value": 0.00515378221113882}, {"name": "\u8054\u8d5b", "value": 0.00515378221113882}, {"name": "\u72b6\u6001", "value": 0.00515378221113882}, {"name": "\u6cf0\u8fbe", "value": 0.00515378221113882}, {"name": "\u4eba", "value": 0.00515378221113882}, {"name": "\u88c1\u5224", "value": 0.00515378221113882}, {"name": "\u6362", "value": 0.00515378221113882}, {"name": "\u633a", "value": 0.00515378221113882}, {"name": "\u6253", "value": 0.00515378221113882}]};
var topic_summary = {"0": [{"content": "\u4e1c\u5317\u662f\u4e0d\u662f\u5728\u8db3\u534f\u671d\u4e2d\u65e0\u4eba\u554a!\u4e0b\u5348\u662f\u5927\u8fde\u4e00\u65b9\uff0c\u665a\u4e0a\u662f\u957f\u6625\u4e9a\u6cf0\uff0c\u63a5\u8fde\u88ab\u9ed1!\u4f0a\u54c8\u6d1b\u51e0\u6b21\u88ab\u66b4\u51fb\uff0c\u62c9\u62fd\uff0c\u88c1\u5224\u773c\u778e\u7adf\u90fd\u6ca1\u770b\u5230\uff0c\u771f\u662f\u5fc3\u6bd4\u8863\u670d\u9ed1!", "up": 14}, {"content": "\u4f0a\u54c8\u6d1b\u811a\u771f\u51c9\uff0c\u4e9a\u6cf0\u72af\u89c4\u6709\u70b9\u72e0\u3002", "up": 10}, {"content": "\u4e25\u683c\u6765\u8bf4\u5224\u7f5a\u6ca1\u6709\u5927\u95ee\u9898\u7684\uff0c\u5f53\u7136\u624b\u7403\u90a3\u4e2a\u597d\u51e0\u4e2a\u89d2\u5ea6\u90fd\u770b\u4e0d\u6e05\u695a\uff0c\u6700\u540e\u4f0a\u54c8\u6d1b\u8fdb\u53bb\u7684\u4e5f\u592a\u660e\u663e\u4e86\uff0c\u5173\u952e\u8fd8\u662f\u4ed6\u8865\u5c04\u7684\uff0c\u4e0d\u5439\u4f60\u90fd\u4e0d\u884c", "up": 9}, {"content": "\u770b\u5230\u662f\u4f0a\u54c8\u6d1b\u8fdb\u7403\uff0c\u6709\u6728\u6709\u5fc3\u91cc\u4e0d\u8212\u670d\u7684\uff1f", "up": 9}, {"content": "\u8fd9\u573a\u6bd4\u8d5b\u7684\u88c1\u5224\u771f\u4e1a\u4f59\uff0c\u8981\u6211\u5439\u90fd\u6bd4\u4ed6\u597d\uff0c\u5b8c\u5168\u50cf\u4e2a\u521a\u6267\u6cd5\u6ca1\u4ec0\u4e48\u7ecf\u9a8c\u7684\u6123\u5934\u83dc\u9e1f\uff0c\u540e\u9762\u7403\u5458\u5404\u79cd\u6f14\u620f\u8d8a\u6765\u8d8a\u653e\u5f97\u5f00\uff0c\u56e0\u4e3a\u732a\u88c1\u5224\u5206\u522b\u4e0d\u51fa\u554a\uff0c\u53ea\u8981\u5012\u5730\u5c31\u662f\u5439\u54e8\uff0c96\u5206\u949f\u4e00\u4e2a\u5012\u5730\u672c\u6765\u4ed6\u60f3\u7ed9\u4e0a\u6e2f\u7403\u6743\u7684\uff0c\u770b\u5230\u4f0a\u54c8\u6d1b\u4e00\u4e2a\u626c\u624b\u5c31\u53d8\u6210\u7ed9\u4e9a\u6cf0\u4e86\u80fd\u522b\u8fd9\u4e48\u6ca1\u4e3b\u5f20\u60f3\u4e2a****\u4e00\u6837\u5417\uff1f", "up": 6}], "1": [{"content": "\u4e2d\u8d85\u5269\u4f59\u7684\u770b\u70b9\u5c31\u662f\u6b66\u78ca\u8fdb\u7403\uff0c\u5c31\u662f\u770b\u4f0a\u54c8\u6d1b\uff0c\u624e\u54c8\u7ef4\uff01 \u5e0c\u671b\u6b66\u78ca\u7b11\u5230\u6700\u540e\uff01\u7ad9\u5728\u9ad8\u5c97\u4e0a\uff01 \u76f8\u540c\u770b\u6cd5\u7684\u9876[\u7b11\u54ed]", "up": 173}, {"content": "\u4f0a\u54c8\u6d1b\u8981\u662f\u8fd0\u6c14\u597d\u8fd9\u573a\u80fd\u8fdb\u56db\u4e2a\u2026", "up": 103}, {"content": "\u4f0a\u54c8\u6d1b20\u7403\u4e86 \u6b66\u78ca\u522b\u5237\u52a9\u653b\u4e86 \u8d76\u7d27\u5237\u8fdb\u7403\u554a", "up": 85}, {"content": "\u4e9a\u6cf0\u590f\u5b63\u65b0\u6765\u8fd9\u4fe9\u5916\u63f4\u771f\u5fc3\u7ed9\u529b\uff0c\u518d\u52a0\u4e0a\u539f\u672c\u5c31\u7ed9\u529b\u7684\u4f0a\u54c8\u6d1b\uff0c\u4e0b\u8d5b\u5b63\u4e0d\u53ef\u5c0f\u89c6\u554a\u3002", "up": 67}, {"content": "\u6b66\u7403\u738b\u4e0d\u9519\uff0c\u867d\u7136\u6ca1\u8fdb\u7403\uff0c\u4f46\u4fe9\u52a9\u653b\u3002\u540e\u9762\u4f0a\u54c8\u6d1b\u5728\u5bf9\u9762\u6ca1\u8fdb\uff0c\u624e\u54c8\u7ef4\u597d\u50cf\u8fd8\u5f97\u6b47\u4e00\u6bb5\u65f6\u95f4", "up": 33}], "2": [{"content": "\u50cf\u8fd9\u6837\u597d\u88c1\u5224\u4e0d\u591a\u4e86\uff0c\u5982\u679c\u6211\u4eec\u7403\u8ff7\u4e0d\u60f3\u8fde\u8fd9\u6837\u7684\u88c1\u5224\u90fd\u5728\u8054\u8d5b\u91cc\u6d88\u5931\uff0c\u5c31\u8981\u633a\u4ed6\uff01\uff01\u633a\u4ed6\u5230\u5e95\uff01\uff01\uff01\u597d\u6837\u7684\uff01\uff01\u6700\u540e\u4e9a\u592a\u4f0a\u54c8\u6d1b\u90fd\u7279\u4e48\u8981\u5403\u4eba\u4e86\uff01\uff01\u6050\u5413\u88c1\u5224\uff01\uff01", "up": 390}, {"content": "\u6709\u4f0a\u54c8\u6d1b\u7684\u957f\u6625\u5b9e\u529b\u63d0\u534750%\uff0c\u4ed6\u5c04\u672f\u7cbe\u6e5b\uff0c\u8d85\u7ea7\u51b7\u9759\uff0c\u6280\u672f\u51fa\u4f17\uff0c\u4e0d\u6127\u4e3a\u5c3c\u65e5\u5229\u4e9a\u4e94\u5927\u8054\u8d5b\u4ee5\u5916\u552f\u4e00\u56fd\u811a\u524d\u950b\uff01[\u5389\u5bb3][\u9177][\u52a9\u5a01][\u52a9\u5a01]", "up": 157}, {"content": "\u7a0b\u6708\u78camvp\uff0c\u4f0a\u54c8\u6d1bmmp", "up": 80}, {"content": "\u4e9a\u6cf0\u7403\u8ff7\u8868\u793a\u7ea2\u70b9\u5957\u9910\u592a\u4e25\u683c\u4e86\uff0c\u4f0a\u54c8\u6d1b\u8d85\u7ea7\u5927\u5355\u5200\u6ca1\u628a\u63e1\u4f4f\u3002", "up": 62}, {"content": "\u4f0a\u54c8\u6d1b\u7684\u815a\u662f\u771f\u7684\u7fd8\uff01", "up": 29}]};
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
