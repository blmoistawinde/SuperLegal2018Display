var data = {"person_name": "\u97e9\u9555\u6cfd", "nicknames": "\u97e9\u9555\u6cfd", "aspects": {"\u6bd4\u8d5b": 0.6145097160146479, "\u51fa\u51fb": 1.0, "\u70b9\u7403": 0.38177949541618467, "\u8db3\u534f\u676f": 1.0, "\u6251\u6551": 0.30187363554400937, "\u6bd4\u5206": 1.0, "\u52a9\u653b": 0.6253164559715121, "\u56fd\u5bb6\u961f": 0.7570760989139556, "\u5916\u63f4": 0.5894292096882555}, "overall_heat": 51.0, "overall_polar": 1.689, "name": "115", "nationality": "\u4e2d\u56fd", "position": "\u5b88\u95e8\u5458", "goal": "0", "assist": "0", "team_name": "\u5c71\u4e1c\u9c81\u80fd\u6cf0\u5c71", "name_en": "Han Rongze", "age": "25", "height": "190", "weight": "70"};
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
var topic_keywords = {"0": [{"name": "\u97e9\u9555\u6cfd", "value": 0.0821710127349909}, {"name": "\u5927\u96f7", "value": 0.027592480291085505}, {"name": "\u9c81\u80fd", "value": 0.02152819890842935}, {"name": "\ud83d\udc4d", "value": 0.01849605821710127}, {"name": "\u95e8\u5c06", "value": 0.015463917525773195}, {"name": "\u6700\u4f73", "value": 0.015463917525773195}, {"name": "\u8868\u73b0", "value": 0.015463917525773195}, {"name": "\uff01", "value": 0.015463917525773195}, {"name": "\u8fd9\u573a", "value": 0.012431776834445117}, {"name": "\u5854\u795e", "value": 0.012431776834445117}, {"name": "\u91d1\u5b50", "value": 0.012431776834445117}, {"name": "\u6bd4\u8d5b", "value": 0.012431776834445117}, {"name": "\u4e0d\u9519", "value": 0.012431776834445117}, {"name": "\u4f9d\u7136", "value": 0.00939963614311704}, {"name": "\u738b\u5927\u96f7", "value": 0.00939963614311704}, {"name": "\u8138", "value": 0.00939963614311704}, {"name": "\u6342", "value": 0.00939963614311704}, {"name": "\u7a33", "value": 0.00939963614311704}, {"name": "\u611f\u89c9", "value": 0.00939963614311704}, {"name": "\u5c0f", "value": 0.00939963614311704}, {"name": "\u70b9", "value": 0.006367495451788963}, {"name": "\u6700\u5927", "value": 0.006367495451788963}, {"name": "\u770b\u597d", "value": 0.006367495451788963}, {"name": "\u771f", "value": 0.006367495451788963}, {"name": "\u6211\u9c81", "value": 0.006367495451788963}, {"name": "\u60f3", "value": 0.006367495451788963}, {"name": "\u5938", "value": 0.006367495451788963}, {"name": "\u5b89\u5fc3", "value": 0.006367495451788963}, {"name": "\u597d\u597d", "value": 0.006367495451788963}, {"name": "\u7ecf\u9a8c", "value": 0.006367495451788963}], "1": [{"name": "\u97e9\u9555\u6cfd", "value": 0.10510887772194305}, {"name": "\uff01", "value": 0.06742043551088778}, {"name": "\uff1f", "value": 0.04229480737018425}, {"name": "\u88c1\u5224", "value": 0.017169179229480736}, {"name": "\u51fa\u51fb", "value": 0.017169179229480736}, {"name": "\u597d", "value": 0.017169179229480736}, {"name": "\u903c", "value": 0.012981574539363484}, {"name": "\u725b", "value": 0.012981574539363484}, {"name": "\u70b9\u7403", "value": 0.012981574539363484}, {"name": "\u52a9\u5a01", "value": 0.012981574539363484}, {"name": "\u95e8\u7ebf", "value": 0.012981574539363484}, {"name": "\u6ca1\u9519", "value": 0.008793969849246231}, {"name": "\u679c\u65ad", "value": 0.008793969849246231}, {"name": "\u660e\u663e", "value": 0.008793969849246231}, {"name": "\u6280\u672f", "value": 0.008793969849246231}, {"name": "\u5b59\u513f", "value": 0.008793969849246231}, {"name": "\u6251\u6551", "value": 0.008793969849246231}, {"name": "\u6251", "value": 0.008793969849246231}, {"name": "\u8138\u4e0a", "value": 0.008793969849246231}, {"name": "\u5439", "value": 0.008793969849246231}, {"name": "\u5168\u573a", "value": 0.008793969849246231}, {"name": "\u4e0d\u591f", "value": 0.008793969849246231}, {"name": "what", "value": 0.008793969849246231}, {"name": "var", "value": 0.008793969849246231}, {"name": "\u80fd\u5224", "value": 0.008793969849246231}, {"name": "\u6253\u6b7b", "value": 0.008793969849246231}, {"name": "\u8e39", "value": 0.008793969849246231}, {"name": "\u9489", "value": 0.008793969849246231}, {"name": "\u978b", "value": 0.008793969849246231}, {"name": "\u9f9f", "value": 0.008793969849246231}]};
var topic_summary = {"0": [{"content": "\u97e9\u9555\u6cfd:\u6211\u9020\u7684\u70b9\uff0c\u6211\u81ea\u5df1\u4eb2\u81ea\u6765", "up": 514}, {"content": "\u4e0d\u7528\u9009\u4e86\uff0c\u6700\u4f73\u7403\u5458\u97e9\u9555\u6cfd\uff0c\u5927\u96f7\u53ef\u4ee5\u5b89\u5fc3\u517b\u4f24\u4e86\u3002\u6700\u540e\u731b\u5938\u5c0f\u91d1\u5b50\uff0c\u6700\u597d\u522b\u8ba9\u5c0f\u91d1\u5b50\u8fdb\u56fd\u5bb6\u961f\uff0c\u5b89\u5fc3\u4e3a\u9c81\u80fd\u6548\u529b\u3002", "up": 220}, {"content": "\u97e9\u9555\u6cfd\u4eca\u5929\u5168\u573a\u6700\u4f73\uff0c\u5409\u5c14\u4f9d\u7136\u7a33\uff0c\u5854\u795e\u7eed\u7ea6\u5427\uff0c\u683c\u5fb7\u65af\u8fd8\u662f\u6ca1\u80fd\u9002\u5e94\u4e2d\u8d85\u3002", "up": 147}, {"content": "\u97e9\u9555\u6cfd\u6700\u4f73\u4e0d\u89e3\u91ca\uff0c\u5854\u795e\u5c06\u529f\u8d4e\u7f6a\uff0c\u91d1\u5b50\u4f9d\u7136nb\u3002\u6211\u8fd8\u60f3\u5410\u69fd\u8fd9\u4fe9\u89e3\u8bf4\uff0c\u8bf4\u7684\u597d\u50cf\u6211\u9c81\u8e22\u5176\u4ed6\u6bd4\u8d5b\u90fd\u573a\u9762\u597d\u770b\u6570\u636e\u5360\u4f18\u4e00\u6837[\u7b11\u54ed][\u7b11\u54ed]\u3002", "up": 109}, {"content": "\u8fd9\u573a\u6bd4\u8d5b\u97e9\u9555\u6cfd\u7684\u6210\u540d\u4e4b\u6218", "up": 81}], "1": [{"content": "\u97e9\u9555\u6cfd\uff1awhat\uff1f\uff1f\u8fd9\u7403\u4e5f\u80fd\u5224\u70b9\u7403\uff1f\uff1f\u978b\u9489\u90fd\u8981\u8e39\u6211\u8138\u4e0a\u4e86\uff01\uff01\uff01\u597d\u5427\u2026\u2026\u8d70\u4f60\uff5e\u6253\u6b7b\u4f60\u4e2a\u9f9f\u5b59\u513f\uff5e", "up": 146}, {"content": "\u97e9\u9555\u6cfd\u672a\u6765\u53ef\u671f\u554a\uff01", "up": 102}, {"content": "\u7ed9\u6211\u5439\u7206\u97e9\u9555\u6cfd[\u52a9\u5a01][\u52a9\u5a01][\u52a9\u5a01]", "up": 91}, {"content": "\u9996\u5148\u80af\u5b9a\u97e9\u9555\u6cfd\uff0c\u4f18\u52bf\u660e\u663e\uff0c\u95e8\u7ebf\u53cd\u5e94\u662f\u771f\u5feb\uff0c\u52a3\u52bf\u4e5f\u660e\u663e\uff0c\u51fa\u51fb\u4e0d\u591f\u679c\u65ad\u4e0d\u591f\u575a\u51b3\u3002\u5e0c\u671b\u9704\u9e4f\u4ee5\u540e\u80fd\u591a\u7ed9\u70b9\u673a\u4f1a\u953b\u70bc\u4e00\u4e0b\uff0c\u8981\u51fa\u51fb\u5c31\u679c\u65ad\u4e00\u4e9b\uff0c\u4e0d\u51fa\u5c31\u7ad9\u597d\u4f4d\u7f6e\u3002", "up": 90}, {"content": "\u97e9\u9555\u6cfd\u5168\u573a\u81f3\u5c117\u6b21\u6251\u6551\uff0c\u53ef\u4e0d\u53ef\u4ee5\u5168\u573a\u6700\u4f73\uff1f\uff01", "up": 71}]};
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
