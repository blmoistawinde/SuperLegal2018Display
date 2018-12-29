var data = {"person_name": "\u767b\u5df4\u5df4", "nicknames": "\u767b\u5df4\u5df4", "aspects": {"\u6bd4\u8d5b": 0.4429706411794842, "\u7403\u5458": 0.33622278191017535, "\u72af\u89c4": 0.6127852602464002, "\u70b9\u7403": 0.4996083623520115, "\u8fdb\u7403": 0.5833018466442997, "\u5916\u63f4": 0.35336651018983833, "\u961f\u5458": 0.37023465604858863, "\u7403\u8ff7": 0.4710355176826364, "\u8d5b\u5b63": 0.5218101327328343, "\u8db3\u7403": 0.2980397256189949}, "overall_heat": 112.0, "overall_polar": 0.404, "name": "239", "nationality": "\u585e\u5185\u52a0\u5c14", "position": "\u524d\u950b", "goal": "4", "assist": "1", "team_name": "\u4e0a\u6d77\u7533\u82b1", "name_en": "Demba Ba", "age": "33", "height": "189", "weight": "90"};
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
var topic_keywords = {"0": [{"name": "\u767b\u5df4\u5df4", "value": 0.05707540619358423}, {"name": "\uff1f", "value": 0.022358005832523262}, {"name": "\u56fd\u5b89", "value": 0.011248437716983752}, {"name": "\u88c1\u5224", "value": 0.011248437716983752}, {"name": "\u5206\u949f", "value": 0.011248437716983752}, {"name": "\u4e00\u4e2a", "value": 0.009859741702541313}, {"name": "\u72af\u89c4", "value": 0.009859741702541313}, {"name": "\u5f20\u529b", "value": 0.009859741702541313}, {"name": "\u5e94\u8be5", "value": 0.009859741702541313}, {"name": "\u70b9\u7403", "value": 0.008471045688098875}, {"name": "\u97e6\u4e16\u8c6a", "value": 0.008471045688098875}, {"name": "\u7981\u8d5b", "value": 0.007082349673656436}, {"name": "\u6253", "value": 0.007082349673656436}, {"name": "\uff01", "value": 0.007082349673656436}, {"name": "\u597d", "value": 0.007082349673656436}, {"name": "\u7533\u82b1", "value": 0.007082349673656436}, {"name": "\u4eba", "value": 0.007082349673656436}, {"name": "\u5439", "value": 0.0056936536592139975}, {"name": "\u9996\u53d1", "value": 0.0056936536592139975}, {"name": "\u633a", "value": 0.0056936536592139975}, {"name": "\u7403\u5458", "value": 0.0056936536592139975}, {"name": "\u771f", "value": 0.00430495764477156}, {"name": "\u4e0d\u7528", "value": 0.00430495764477156}, {"name": "\u7eb9", "value": 0.00430495764477156}, {"name": "\u7981\u533a", "value": 0.00430495764477156}, {"name": "\u524d", "value": 0.00430495764477156}, {"name": "\u5272\u5589", "value": 0.00430495764477156}, {"name": "\u611f\u89c9", "value": 0.00430495764477156}, {"name": "\u903c", "value": 0.00430495764477156}, {"name": "\u540e", "value": 0.00430495764477156}], "1": [{"name": "\u767b\u5df4\u5df4", "value": 0.0525421328423736}, {"name": "\u7533\u82b1", "value": 0.025633762923098713}, {"name": "\uff1f", "value": 0.01996884294009347}, {"name": "\uff01", "value": 0.01288769296133692}, {"name": "\u597d", "value": 0.01147146296558561}, {"name": "\u5e0c\u671b", "value": 0.008639002974082991}, {"name": "\u83ab\u96f7\u8bfa", "value": 0.008639002974082991}, {"name": "\u8e22", "value": 0.008639002974082991}, {"name": "\u7403\u5458", "value": 0.00722277297833168}, {"name": "\u7403", "value": 0.00722277297833168}, {"name": "\u559c\u6b22", "value": 0.00722277297833168}, {"name": "\u5916\u63f4", "value": 0.00722277297833168}, {"name": "\u6307\u5bfc", "value": 0.00722277297833168}, {"name": "\u771f\u7684", "value": 0.00722277297833168}, {"name": "\u674e\u5efa\u658c", "value": 0.00722277297833168}, {"name": "\u8d5b\u5b63", "value": 0.00722277297833168}, {"name": "\u4eba", "value": 0.00722277297833168}, {"name": "\u5434", "value": 0.00722277297833168}, {"name": "\u770b\u4e0d\u61c2", "value": 0.00580654298258037}, {"name": "\u4fdd\u5065", "value": 0.00580654298258037}, {"name": "\u65b0\u4eba", "value": 0.00580654298258037}, {"name": "\u8d70", "value": 0.00580654298258037}, {"name": "\u7403\u8ff7", "value": 0.00580654298258037}, {"name": "\u6bd4\u8d5b", "value": 0.00580654298258037}, {"name": "\u5f20\u529b", "value": 0.00580654298258037}, {"name": "\u9a6c\u4e01\u65af", "value": 0.00580654298258037}, {"name": "\u66f9\u8d5f\u5b9a", "value": 0.00580654298258037}, {"name": "\u53ea", "value": 0.00580654298258037}, {"name": "\u73b0\u5728", "value": 0.00580654298258037}, {"name": "\u5f3a", "value": 0.004390312986829061}], "2": [{"name": "\u767b\u5df4\u5df4", "value": 0.06023767244911897}, {"name": "\uff01", "value": 0.05067613713973501}, {"name": "\u52a0\u6cb9", "value": 0.019259663980330556}, {"name": "\u7533\u82b1", "value": 0.019259663980330556}, {"name": "\u6052\u5927", "value": 0.012429995902199151}, {"name": "\u592a", "value": 0.008332195055320311}, {"name": "\u95ee\u9898", "value": 0.00696626143969403}, {"name": "\u73b0\u5728", "value": 0.00696626143969403}, {"name": "\u8e22", "value": 0.00696626143969403}, {"name": "\u7403\u5458", "value": 0.00696626143969403}, {"name": "\u597d", "value": 0.00696626143969403}, {"name": "\u77e5\u9053", "value": 0.00696626143969403}, {"name": "\u7f57\u6885\u7f57", "value": 0.00696626143969403}, {"name": "\u80fd\u529b", "value": 0.00696626143969403}, {"name": "\u5df2\u7ecf", "value": 0.005600327824067749}, {"name": "\u9a6c\u4e01\u65af", "value": 0.005600327824067749}, {"name": "\u4eba\u5458", "value": 0.005600327824067749}, {"name": "\u8fd9\u573a", "value": 0.005600327824067749}, {"name": "\u8fdb\u653b", "value": 0.005600327824067749}, {"name": "\u5bb9\u6613", "value": 0.005600327824067749}, {"name": "\u96be", "value": 0.005600327824067749}, {"name": "\u524d\u573a", "value": 0.00423439420844147}, {"name": "\u4e2d\u950b", "value": 0.00423439420844147}, {"name": "\u518d", "value": 0.00423439420844147}, {"name": "\u53d7\u4f24", "value": 0.00423439420844147}, {"name": "\u6bd4\u8d5b", "value": 0.00423439420844147}, {"name": "\u6bd4\u5206", "value": 0.00423439420844147}, {"name": "\u56de\u6765", "value": 0.00423439420844147}, {"name": "\u4e0d\u9519", "value": 0.00423439420844147}, {"name": "\u817f", "value": 0.00423439420844147}]};
var topic_summary = {"0": [{"content": "\u767b\u5df4\u5df4\u7684\u4eba\u54c1\u5927\u5bb6\u90fd\u76f8\u4fe1\uff0c\u90a3\u4e48\u5f20\u529b\u5230\u5e95\u662f\u8bf4\u4e86\u4ec0\u4e48\u80fd\u8ba9\u767b\u5df4\u5df4\u8fd9\u4e48\u66b4\u8df3\u5982\u96f7\uff1f", "up": 453}, {"content": "\u5272\u5589\u793c\uff0c\u96be\u602a\u767b\u5df4\u5df4\u90a3\u4e48\u6124\u6012", "up": 270}, {"content": "\u767b\u5df4\u5df4\u4e3a\u4ec0\u4e48\u6ca1\u6709\u7981\u8d5b\uff1f", "up": 80}, {"content": "\u767b\u5df4\u5df4\u611f\u89c9\u6709\u70b9\u61f5\u903c\uff0c\u7b49\u4e86\u534a\u5929\u8fdb\u7403\u4e86\uff0c\u5e86\u795d\u7684\u65f6\u5019\u961f\u53cb\u90fd\u8dd1\u53e6\u4e00\u8fb9\u53bb\u4e86", "up": 62}, {"content": "\u5f20\u529b\u8fd9\u4eba\u771f\u4e22\u4eba \u5927\u5bb6\u4e5f\u90fd\u77e5\u9053\u767b\u5df4\u5df4\u7684\u813e\u6c14\u7684\u4e00\u822c\u7684\u4e89\u5435\u4ed6\u90fd\u4e0d\u998b\u548c\u7684", "up": 43}], "1": [{"content": "\u955c\u5934\u6ca1\u6709\u4ea4\u4ee3\u53d1\u751f\u4ec0\u4e48\uff0c\u4f46\u662f\u767b\u5df4\u5df4\u4ee5\u524d\u82f1\u8d85\uff0c\u5305\u62ec\u540e\u6765\u4e2d\u8d85\uff0c\u4ece\u6765\u6ca1\u6709\u548c\u4eba\u51b2\u7a81\u8fc7\uff0c\u54ea\u6015\u65ad\u817f\u4e86\uff0c\u4e5f\u6ca1\u6709\u8bf4\u8fc7\u5b59\u7965\u4efb\u4f55\u4e00\u53e5\u4e0d\u597d\uff0c\u90a3\u53ea\u80fd\u8bf4\u63a8\u6d4b\u5f20\u529b\u771f\u7684\u6709\u8fc7\u5206\u5230\u8ba9\u767b\u5df4\u5df4\u90fd\u65e0\u6cd5\u63a5\u53d7\u7684\u884c\u4e3a\uff0c\u751a\u81f3\u4e4b\u540e\u6bd4\u8d5b\u7533\u82b1\u961f\u5458\u5b8c\u5168\u5c31\u662f\u5e26\u7740\u6c14\u6bd4\u8d5b\u4e86\uff0c\u5305\u62ec\u5b59\u4e16\u6797\u4e5f\u662f\uff0c\u53ea\u80fd\u7b49\u5f85\u540e\u7eed\u6d88\u606f\u4e86\u3002", "up": 203}, {"content": "\u767b\u5df4\u5df4\uff1a\u521a\u4e0b\u706b\u8f66\uff0c\u5c31\u8ba9\u6211\u5403\u8fd9\u4e48\u597d\u7684\u997c\uff0c\u54ac\u4e00\u53e3\u8bd5\u8bd5\u3002", "up": 102}, {"content": "\u767b\u5df4\u5df4\u5728\u573a\u4e0a\u89c1\u4eba\u5c31\u95ee\uff1a\u8bf7\u95ee\u767d\u7684\u53cd\u4e49\u8bcd\u662f\u4ec0\u4e48\uff1f", "up": 13}, {"content": "\u7b2c\u4e00\u6b21\u770b\u5230\u767b\u5df4\u5df4\u8fd9\u6837\uff0c\u5f20\u529b\u8fd9\u79cd\u4eba\u771f\u662f****\uff5e\u7403\u8e22\u7684\u4e0d\u600e\u4e48\u6837\uff0c\u79cd\u65cf\u6b67\u89c6\u9a82\u4eba\u6709\u4e00\u5957\uff01\u72d7\u5c4e", "up": 12}, {"content": "\u4e0a\u6e2f\u8d5b\u524d\u7d27\u6025\u5f00\u4f1a\u7edf\u4e00\u601d\u60f3\uff0c\u5982\u679c\u767b\u5df4\u5df4\u9a82\u4ebacnm\uff0c\u6240\u6709\u961f\u5458\u4e0d\u51c6\u56de\u9a82\uff0c\u53ea\u53ef\u4ee5\u7528\u6b4c\u5589\u52a8\u4f5c\u56de\u656c\u2026\u2026", "up": 11}], "2": [{"content": "\u767b\u5df4\u5df4\uff0c\u7ecf\u5386\u8fc7\u5927\u4f24\uff0c\u671f\u5f85\u4f60\u6d85\u69c3\u91cd\u751f\uff01\uff01", "up": 258}, {"content": "\u74dc\u6797\u8fd9\u7403\u771f\u6f02\u4eae\uff01\u529b\u91cf\u89d2\u5ea6\u548c\u767b\u5df4\u5df4\u7684\u914d\u5408\u65e0\u53ef\u6311\u5254\uff01\u4e0d\u6127\u662f\u74dc\u4e09\u5206[\u9177][\u9177]", "up": 129}, {"content": "\u5434\u91d1\u8d35\u5c31\u662f\u8fd9\u6837\uff0c\u4f60\u4ee5\u5bb6\u5e38\u83dc\u7684\u6c34\u51c6\u6765\u8bc4\u5224\u4ed6\uff0c\u53ef\u4ee5\u505a\u7684\u5f88\u597d\uff0c\u5982\u4eca\u5728\u4e2d\u8d85\u62ff\u4e09\u8fde\u80dc\u53ef\u4e0d\u662f\u5bb9\u6613\u7684\u4e8b\u3002\u53e6\u5916\uff0c\u7533\u82b1\u5ba2\u573a\u4e24\u8fde\u80dc\u4e86\u3002\u590f\u5b63\u8bf7\u56de\u767b\u5df4\u5df4\uff0c\u6218\u672f\u5c31\u66f4\u4e30\u5bcc\u4e86\u3002", "up": 99}, {"content": "\u767b\u5df4\u5df4\u56de\u6765\u4e86\uff01\u7ec8\u4e8e\u56de\u6765\u4e86\uff01\u4e0d\u5bb9\u6613\u554a\uff01\u7533\u82b1\u518d\u8d62\u7403\uff0c\u559c\u4e0a\u52a0\u559c\uff01\u63a5\u4e0b\u6765\u7533\u82b1\u7684\u6bd4\u8d5b\u597d\u770b\u4e86\u3002[\u54c8\u54c8]", "up": 41}, {"content": "\u767b\u5df4\u5df4:\u8e22\u65ad\u6211\u817f\u90a3\u5bb6\u4f19\u73b0\u5728\u5728\u54ea\u4e2a\u961f?\u8bb0\u8005:\u4ed6\u5df2\u7ecf\u4e0d\u8e22\u7403\u4e86\u3002\u767b\u5df4\u5df4:\u54e6\uff0c\u5413\u6b7b\u5df4\u5df4\u4e86\u3002\u90a3\u6211\u5c31\u653e\u5fc3\u4e86", "up": 40}]};
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
