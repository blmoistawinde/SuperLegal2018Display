var data = {"person_name": "\u675c\u4f73", "nicknames": "\u675c\u4f73", "aspects": {"\u7403\u8ff7": 0.37739912884475935, "\u8d5b\u5b63": 0.5895929740607498, "\u8db3\u7403": 0.28173346685010514, "\u5916\u63f4": 0.24070097853371017, "\u6bd4\u8d5b": 0.3475894104427716, "\u56fd\u95e8": 1.0, "\u7403\u5458": 0.8295986421134348, "\u8054\u8d5b": 0.9277126542489529, "\u96c6\u8bad": 1.0}, "overall_heat": 78.0, "overall_polar": 0.684, "name": "293", "nationality": "\u4e2d\u56fd", "position": "\u5b88\u95e8\u5458", "goal": "0", "assist": "0", "team_name": "\u5929\u6d25\u4ebf\u5229", "name_en": "Du Jia", "age": "25", "height": "186", "weight": "70"};
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
var topic_keywords = {"0": [{"name": "\u675c\u4f73", "value": 0.12104990502503885}, {"name": "\uff01", "value": 0.039889483681574855}, {"name": "\u4eca\u5929", "value": 0.013987221550682091}, {"name": "\u95e8\u5c06", "value": 0.013987221550682091}, {"name": "\u6700\u4f73", "value": 0.012260404075289241}, {"name": "\u6cf0\u8fbe", "value": 0.01053358659989639}, {"name": "\u4e0a\u6e2f", "value": 0.008806769124503538}, {"name": "\u5723", "value": 0.007079951649110688}, {"name": "\u7403", "value": 0.007079951649110688}, {"name": "\u90a3\u573a", "value": 0.007079951649110688}, {"name": "\u6c34\u5e73", "value": 0.007079951649110688}, {"name": "\u6342", "value": 0.007079951649110688}, {"name": "\u786e\u5b9e", "value": 0.005353134173717838}, {"name": "\u5168\u573a", "value": 0.005353134173717838}, {"name": "\u8868\u73b0", "value": 0.005353134173717838}, {"name": "\u7ad9\u4f4d", "value": 0.005353134173717838}, {"name": "\u53ea", "value": 0.005353134173717838}, {"name": "\u6251", "value": 0.005353134173717838}, {"name": "\u8138", "value": 0.005353134173717838}, {"name": "\ud83d\udc4d", "value": 0.005353134173717838}, {"name": "\u5389\u5bb3", "value": 0.005353134173717838}, {"name": "\u5f00\u6302", "value": 0.005353134173717838}, {"name": "\u7ea7\u522b", "value": 0.005353134173717838}, {"name": "\u80e1\u5c14\u514b", "value": 0.005353134173717838}, {"name": "\u6b27\u5143", "value": 0.003626316698324987}, {"name": "\u8865\u5145", "value": 0.003626316698324987}, {"name": "\u8c22\u8c22", "value": 0.003626316698324987}, {"name": "\u81f3\u5c11", "value": 0.003626316698324987}, {"name": "\u54ed", "value": 0.003626316698324987}, {"name": "\u6570\u636e", "value": 0.003626316698324987}], "1": [{"name": "\u675c\u4f73", "value": 0.02865271286323918}, {"name": "\u5929\u6d25", "value": 0.026620605567973986}, {"name": "\u95e8\u5c06", "value": 0.026620605567973986}, {"name": "\uff1f", "value": 0.024588498272708797}, {"name": "\u6cf0\u8fbe", "value": 0.018492176386913226}, {"name": "\u8d5b\u5b63", "value": 0.014427961796382848}, {"name": "\u5916\u63f4", "value": 0.010363747205852468}, {"name": "\u4fdd\u7ea7", "value": 0.008331639910587278}, {"name": "\u7403\u8ff7", "value": 0.008331639910587278}, {"name": "\u9ec4\u6cb9", "value": 0.008331639910587278}, {"name": "\u624b", "value": 0.008331639910587278}, {"name": "\u4e0a\u5c97", "value": 0.008331639910587278}, {"name": "\u95ee\u9898", "value": 0.0062995326153220885}, {"name": "\u62a5\u9500", "value": 0.0062995326153220885}, {"name": "\u6768\u542f\u9e4f", "value": 0.0062995326153220885}, {"name": "\u60f3", "value": 0.0062995326153220885}, {"name": "\ud83d\ude04", "value": 0.0062995326153220885}, {"name": "\u597d", "value": 0.0062995326153220885}, {"name": "\u5e74", "value": 0.0062995326153220885}, {"name": "\u8868\u73b0", "value": 0.0062995326153220885}, {"name": "\u8fd9\u662f", "value": 0.0062995326153220885}, {"name": "\u8db3\u7403", "value": 0.0062995326153220885}, {"name": "\u505c", "value": 0.0042674253200568986}, {"name": "\u592a", "value": 0.0042674253200568986}, {"name": "\u6700\u540e", "value": 0.0042674253200568986}, {"name": "\u8c03\u6574", "value": 0.0042674253200568986}, {"name": "\u65bd\u8fde\u5fd7", "value": 0.0042674253200568986}, {"name": "\u8d75\u5b8f\u7565", "value": 0.0042674253200568986}, {"name": "20", "value": 0.0042674253200568986}, {"name": "\u51e0\u6b21", "value": 0.0042674253200568986}]};
var topic_summary = {"0": [{"content": "\u786c\u751f\u751f\u7684\u628a\u675c\u4f73\u8e22\u6210\u4e86\u5e03\u51af", "up": 429}, {"content": "\u675c\u4f73\uff1a\u7279\u4e48\u7ec8\u4e8e\u62ff\u5230\u96f6\u5c01\u5956\u91d1\u4e86", "up": 99}, {"content": "\u6ca1\u4ec0\u4e48\u597d\u8bf4\u7684\uff0c\u675c\u4f73\u4f60\u6ca1\u7ed9\u6211\u5927\u6d25\u95e8\u5386\u4ee3\u95e8\u5c06\u4eec\u4e22\u8138\uff0c\u4f60\u662f\u597d\u6837\u7684\uff01\uff01\uff01\uff01", "up": 92}, {"content": "\u675c\u4f73\u4eca\u5929\u662f\u5e03\u51af\u9644\u4f53", "up": 86}, {"content": "\u675c\u4f73\u5168\u573a\u6700\u4f73\uff0c\u5e94\u8be5\u6539\u540d\u4e3a\u675c\u857e\u65af", "up": 60}], "1": [{"content": "\u675c\u4f73\u8fd9\u4e0d\u662f\u4f60\u7b2c\u4e00\u6b21\u9ec4\u6cb9\u624b\uff0c\u6211TM\u76f8\u4fe1\u4e5f\u7edd\u5bf9\u4e0d\u662f\u6700\u540e\u4e00\u6b21", "up": 286}, {"content": "\u6211\u6d25\u95e8\u76db\u4ea7\u95e8\u5c06,\u4ece\u4e09\u661f\u65bd\u8fde\u5fd7\u5230\u6cf0\u8fbe\u5218\u4e91\u98de\uff0c\u4ece\u5f53\u521d\u7684\u6768\u542f\u9e4f\u5230\u5982\u4eca\u7684\u675c\u4f73\uff0c\u8fd9\u4e9b\u571f\u751f\u571f\u957f\u7684\u5929\u6d25\u5a03\u5a03\uff0c\u90fd\u5728\u8fd9\u7247\u7eff\u8335\u573a\u4e0a\u95ea\u5149\u8fc7\uff01", "up": 149}, {"content": "\u4f5c\u4e3a\u5929\u6d25\u7403\u8ff7\u7ed9\u6cf0\u8fbe\u8d5e\u4e00\u4e2a \u5ba2\u573a\u903c\u5e73\u4e0a\u6e2f \u5b9e\u5c5e\u4e0d\u6613 \u770b\u5230\u5427\u53cb\u4eec\u4e00\u4e2a\u4e2a****\u675c\u4f73 \u6211\u4e5f\u60f3\u8bf4\u4e00\u53e5 \u8fd9\u573a\u5c0f\u4f19\u8868\u73b0\u786e\u5b9e\u4e0d\u9519 \u4f46\u662f\u4f5c\u4e3a\u95e8\u5c06\u7a33\u5b9a\u548c\u7ecf\u9a8c\u6700\u91cd\u8981 \u50cf\u5ba2\u6218\u5efa\u4e1a\u7684\u9ec4\u6cb9\u624b \u5305\u62ec\u4e0a\u8f6e\u5bf9\u5bcc\u529b\u88ab\u5bf9\u65b9\u6253\u53cd\u51fb\u7684\u95e8\u5c06\u9009\u4f4d\u95ee\u9898 \u90fd\u662f\u4ee5\u540e\u53ef\u4ee5\u6539\u8fdb\u7684\u5730\u65b9 \u6700\u540e\u8bf4\u4e00\u53e5 \u80e1\u5c14\u514b\u4f60\u8fd9\u5634\u592a\u788e\u4e86 \u5ff5\u5ff5\u53e8\u53e8\u7684 \u8001\u5a18\u4eec\u662f\u7684", "up": 12}, {"content": "\u8d5b\u540e\u7684\u955c\u5934\u7ed9\u5230\u4e86\u65bd\u5927\u7237\uff0c\u90a3\u4e00\u7b11\u6211\u8be5\u600e\u4e48\u7406\u89e3\uff0c\u662f\u7a33\u62ff\u4fdd\u7ea7\u4e86\u8fd8\u662f\u770b\u900f\u4e00\u5207\u4e86\uff1f\u4e00\u8d5b\u5b63\u7684\u95e8\u5c06\u675c\u4f73\u5173\u952e\u65f6\u523b\u5ea6\u5047\u53bb\u4e86\uff1f\u867d\u8bf4\u6768\u542f\u9e4f\u6709\u4fdd\u7ea7\u798f\u5c06\u7684\u79f0\u53f7\uff0c\u4f46\u4e00\u8d5b\u5b63\u6ca1\u4e0a\u8fc7\u4e86\uff0c\u8fd9\u65f6\u5019\u4f60\u6765\u4e2a\u6362\u95e8\u5c06\u662f\u4e0d\u662f\u6709\u70b9\u73a9\u5462\uff1f\u5341\u4e00\u8f6e\u4e0d\u80dc\u8fd9\u5728\u82f1\u8d85\u90fd\u4e0d\u77e5\u9053\u6eda\u591a\u5c11\u56de\u4e86\uff0c\u4e00\u5c18\u4e0d\u53d8\u7684\u9635\u578b\uff0c\u4e00\u5473\u7684\u8ffd\u6c42\u5916\u63f4\uff0c\u66f9\u961f\u4f60\u600e\u4e48\u770b\uff0c\u53bb\u5e74\u4fa5\u5e78\u4fdd\u7ea7\u4f60\u4e0d\u9000\u5f79\uff0c\u8fd9\u4e0b\u8be5\u6b7b\u5fc3\u4e86\uff0c\u4f60\u9000\u4e86\u4e5f\u5c31\u4e0d\u770b\u6cf0\u8fbe\u4e86\u300222\u5e74\u5929\u6d25\u7403\u8ff7\u4e86\uff0c\u518d\u4e5f\u6ca1\u6709\u90b5\u5e9a\uff0c\u9ad8\u98de\uff0c\u970d\u5efa\u5ef7\uff0c\u4e8e\u6839\u4f1f\uff0c\u5b59\u5efa\u519b\uff0c\u8fdf\u8363\u4eae\uff0c\u5f20\u6548\u745e\uff0c\u65bd\u8fde\u5fd7\uff0c\u8fd9\u4e9b\u571f\u751f\u571f\u957f\u7684\u5929\u6d25\u4eba\u4e86\u3002\u4e00\u53ea\u6ca1\u6709\u5929\u6d25\u4eba\u7684\u7403\u961f\u8fd8\u914d\u5f97\u4e0a\u5929\u6d25\u8db3\u7403\u961f\u7684\u79f0\u53f7\u5417\uff1f\u6743\u5065\u4ee3\u8868\u4e0d\u4e86\u5929\u6d25\uff0c\u800c\u5b9e\u9645\u610f\u4e49\u4e0a\u6cf0\u8fbe\u65e9\u5df2\u7ecf\u4e0d\u662f\u4ee5\u524d\u7684\u4e09\u661f\u548c\u5eb7\u5e08\u5085\u4e86\u3002\u6240\u4ee5\u964d\u7ea7\u4e5f\u597d\u4fdd\u7ea7\u4e5f\u7f62\u3002\u6211\u76f8\u4fe1\u90fd\u4e0d\u4f1a\u51fa\u73b0\u6c11\u56ed\u4f53\u80b2\u573a\u7684\u767d\u7eb8\u5c51\u548c\u52a8\u5bb9\u7684\u773c\u6cea\u4e86\u300220\u5e74\u524d\u6211\u4eec\u964d\u5165\u4e86\u7532B\uff0c\u4f46\u5929\u6d25\u7403\u8ff7\u575a\u4fe1\u4f1a\u56de\u6765\u7684\uff0c20\u5e74\u540e\u6211\u4eec\u653e\u773c\u4e2d\u8d85\u5374\u6ca1\u6709\u4e86\u771f\u6b63\u5929\u6d25\u8db3\u7403\u7684\u4e00\u5e2d\u4e4b\u5730\u3002\u8be5\u6765\u7684\u603b\u4f1a\u6765\u7684\uff0c\u8be5\u8d70\u7684\u4e5f\u7559\u4e0d\u4f4f\u3002\u53ea\u662f\u611f\u53f9\u5c81\u6708\u65e0\u60c5\uff0c\u56de\u5fc6\u7ec8\u7a76\u662f\u62ff\u6765\u73a9\u5473\u7684\u3002\u800c\u4e8b\u5b9e\u53ea\u80fd\u5b66\u4f1a\u63a5\u53d7\u3002", "up": 9}, {"content": "\u675c\u4f7393\u5206\u949f\u4e25\u91cd\u53d7\u4f24\u3001\ud83d\ude04\u8001\u53f8\u673a\ud83d\ude04", "up": 9}]};
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
