var data = {"person_name": "\u5468\u633a", "nicknames": "\u5468\u633a", "aspects": {"\u7403\u8ff7": 0.2636793308443537, "\u7403\u5458": 0.14709351819023936, "\u540e\u8170": 0.3600357935940692, "\u6bd4\u8d5b": 0.3465872888691417, "\u9ec4\u724c": 0.44416114710096555, "\u5916\u63f4": 0.2447846828500587, "\u8e22\u7403": 0.6620485165520288, "\u72af\u89c4": 0.636316667501941, "\u7ea2\u724c": 0.4220819483067884, "\u4fdd\u7ea7": 0.0}, "overall_heat": 85.0, "overall_polar": -0.474, "name": "359", "nationality": "\u4e2d\u56fd", "position": "\u540e\u536b", "goal": "1", "assist": "2", "team_name": "\u5927\u8fde\u4e00\u65b9", "name_en": "Ting Zhou", "age": "39", "height": "181", "weight": "78"};
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
var topic_keywords = {"0": [{"name": "\u5468\u633a", "value": 0.054505912736169636}, {"name": "\uff01", "value": 0.021883920076117985}, {"name": "\uff1f", "value": 0.019165420687780342}, {"name": "\u540e\u8170", "value": 0.015087671605273887}, {"name": "\u8e22", "value": 0.009650672828598612}, {"name": "\u5927\u8fde", "value": 0.008291423134429795}, {"name": "\u540e\u536b", "value": 0.008291423134429795}, {"name": "\u79e6\u5347", "value": 0.008291423134429795}, {"name": "\u6253", "value": 0.006932173440260975}, {"name": "\u4e00\u65b9", "value": 0.006932173440260975}, {"name": "\u5361\u62c9\u65af\u79d1", "value": 0.005572923746092156}, {"name": "\u76d6\u5766", "value": 0.005572923746092156}, {"name": "\u5916\u63f4", "value": 0.005572923746092156}, {"name": "\u660e\u5e74", "value": 0.005572923746092156}, {"name": "\u91d1\u5f3a", "value": 0.005572923746092156}, {"name": "\u5dee", "value": 0.005572923746092156}, {"name": "\u78e8\u5408", "value": 0.005572923746092156}, {"name": "\u7403\u5458", "value": 0.005572923746092156}, {"name": "\u7403", "value": 0.005572923746092156}, {"name": "\u8bdd", "value": 0.004213674051923339}, {"name": "\u4e24\u4e2a", "value": 0.004213674051923339}, {"name": "\u53cd\u9a73", "value": 0.004213674051923339}, {"name": "\u8001\u5c06", "value": 0.004213674051923339}, {"name": "\u4eba", "value": 0.004213674051923339}, {"name": "\u5b8c", "value": 0.004213674051923339}, {"name": "\u597d\u597d", "value": 0.004213674051923339}, {"name": "\u6700\u540e", "value": 0.004213674051923339}, {"name": "\u5927\u594e", "value": 0.004213674051923339}, {"name": "\u9c81\u80fd", "value": 0.004213674051923339}, {"name": "\u72b6\u6001", "value": 0.004213674051923339}], "1": [{"name": "\u5468\u633a", "value": 0.046306793407168395}, {"name": "\uff1f", "value": 0.02886543995814075}, {"name": "\u7403\u5458", "value": 0.014040289526467254}, {"name": "\u5927\u8fde", "value": 0.011424086509113106}, {"name": "\u56fd\u5b89", "value": 0.010552018836661724}, {"name": "\u987e\u64cd", "value": 0.010552018836661724}, {"name": "\uff01", "value": 0.009679951164210342}, {"name": "\u5361\u62c9\u65af\u79d1", "value": 0.009679951164210342}, {"name": "\u7403\u8ff7", "value": 0.009679951164210342}, {"name": "\u4e00\u4e0b", "value": 0.009679951164210342}, {"name": "\u52a8\u4f5c", "value": 0.00880788349175896}, {"name": "\u9ec4\u535a\u6587", "value": 0.00880788349175896}, {"name": "\u8e22", "value": 0.00880788349175896}, {"name": "\u4eba", "value": 0.0070637481468561955}, {"name": "\u5e94\u8be5", "value": 0.0070637481468561955}, {"name": "\u89c9\u5f97", "value": 0.006191680474404813}, {"name": "\u60f3", "value": 0.006191680474404813}, {"name": "\u6234\u7433", "value": 0.005319612801953431}, {"name": "\u8f93", "value": 0.005319612801953431}, {"name": "\u5df4\u7d22", "value": 0.005319612801953431}, {"name": "\u9ec4\u724c", "value": 0.005319612801953431}, {"name": "\u56fd\u5185", "value": 0.004447545129502049}, {"name": "\u5317", "value": 0.004447545129502049}, {"name": "\u540e\u8170", "value": 0.004447545129502049}, {"name": "\u6208", "value": 0.004447545129502049}, {"name": "\u771f", "value": 0.004447545129502049}, {"name": "\u725b", "value": 0.004447545129502049}, {"name": "\u903c", "value": 0.004447545129502049}, {"name": "\u9a6c\u6797", "value": 0.004447545129502049}, {"name": "\u8d70", "value": 0.004447545129502049}]};
var topic_summary = {"0": [{"content": "\u524d\u573a\u6ca1\u4eba\u914d\u5408\uff0c\u4e0a\u51af\u7279\u5176\u5b9e\u4e5f\u5b88\u4e0d\u4f4f\u3002\u8fd8\u4e0d\u5982\u4e94\u4e2a\u56fd\u4ea7\u540e\u536b\uff0c\u628a\u5468\u633a\u64a4\u56de\u6765\u6253\u540e\u536b\u3002\u524d\u573a\u4e0a\u5927\u594e\uff0c\u8d77\u7801\u6709\u4e2a\u652f\u70b9\uff0c\u5361\u62c9\u65af\u79d1\u8d70\u8fb9\u4f20\u4e2d\u7a81\u7834\u90fd\u884c\u30025-4-1\u5c31\u5b8c\u4e8b\u4e86\u3002\u4e0d\u75bc\u4e0d\u75d2\u76d6\u5766\u5361\u62c9\u65af\u79d1\uff0c\u540e\u8fb9\u51af\u7279\u6ca1\u5565\u7528\u3002\u524d\u573a\u62ff\u7403\u7684\u70b9\u592a\u5c11\u4e86\u3002", "up": 197}, {"content": "\u54ea\u4e9b\u8bf4\u5468\u633a\u4f1a\u6328\u9a82\u7684\u4eba\uff0c\u8138\u75bc\u4e0d\uff0c\u5634\u6b20\u4e0d\uff0c\u8111\u6b8b\u4e0d", "up": 13}, {"content": "\u8fd9\u573a\u7403\uff0c\u8db3\u4ee5\u770b\u51fa\uff0c\u8212\u65af\u7279\u5c14\u7528\u4eba\u7684\u95ee\u9898\uff0c\u5c0f\u5d14\u5b9e\u529b\u5728\u8fd9\u4e2a\u961f\u7edd\u5bf9\u53ef\u4ee5\u9996\u53d1\u7684\uff0c\u5468\u633a\u4eca\u5e74\u8e22\u5b8c\u771f\u7684\u53ef\u4ee5\u9000\u5f79\u4e86\uff0c\u660e\u5e74\u79e6\u5347\u5fc5\u987b\u4e70\u65ad\uff0c\u6731\u6653\u521a\u771f\u7684\u522b\u518d\u8e22\u540e\u536b\u4e86\uff0c\u6768\u5584\u5e73\u771f\u7684\u53ef\u4ee5\u4e0d\u8981\u4e86\u3002\u6700\u540e\uff0c\u91d1\u5f3a\u5bb6\u91cc\u4e00\u5b9a\u6709\u94b1\uff0c\u6211\u60f3\u548c\u91d1\u5f3a\u505a\u670b\u53cb[\u5fae\u7b11]", "up": 8}, {"content": "\u76d6\u5766\u548c\u5361\u62c9\u65af\u79d1\u662f\u5927\u8fde\u7684\u7edd\u5bf9\u6838\u5fc3\uff0c\u4f46\u662f\u5468\u633a\u95e8\u524d\u90a3\u51e0\u811a\u6446\u8131\u786e\u5b9e\u60ca\u8273\u554a", "up": 7}, {"content": "\u5468\u633a\u503c\u5f97\u656c\u610f\uff0c\u961f\u957f\u8896\u6807\u770b\u5f97\u51fa\u6765\u4e3b\u6559\u7ec3\u6c34\u5e73\uff01", "up": 7}], "1": [{"content": "\u5168\u573a\u7b2c88\u5206\u949f\u5168\u573a\u9ad8\u558a\uff1a\u5468\u633a\u725b\u903c\u3001\u5468\u633a\u725b\u903c\u2026\u2026\u4ee4\u4eba\u52a8\u5bb9\uff01", "up": 888}, {"content": "\u4f5c\u4e3a\u5927\u8fde\u7403\u8ff7 \u627f\u8ba4\u6280\u4e0d\u5982\u4eba \u4e0a\u6e2f\u4e0d\u7559\u9762\u513f \u4e5f\u6ca1\u5565\u53ef\u8bf4\u7684 \u5927\u8fde\u63d0\u4e86\u56db\u5e74\u4e2d\u7532 \u60f3\u9002\u5e94\u4e2d\u8d85\u9700\u8981\u4e00\u6bb5\u65f6\u95f4 \u4e0a\u6765\u5c31\u9047\u5230\u4e0a\u6e2f\u786e\u5b9e\u662f\u4e2a\u5f88\u5927\u7684\u8003\u9a8c \u5361\u62c9\u65af\u79d1\u6c34\u5e73\u600e\u4e48\u6837\u5927\u5bb6\u5fc3\u91cc\u6e05\u695a \u6700\u8d77\u7801\u770b\u5230\u4e86\u804c\u4e1a\u7cbe\u795e \u4e00\u76f4\u5728\u62fc \u8fd9\u5c31\u662f\u597d\u4e8b \u9a6c\u6797\u6211\u5c31\u4e0d\u60f3\u8bf4\u5565\u4e86 \u770b\u4e0d\u61c2 \u5361\u62c9\u65af\u79d1\u8e22\u4e2d\u950b\u6548\u679c\u5e76\u4e0d\u597d\u4e3a\u4ec0\u4e48\u4e0d\u53ca\u65f6\u8c03\u6574\uff1f\u4e30\u7279\u62ff\u5230\u524d\u573a\u53c8\u662f\u4e3a\u4f55\uff1f\u5468\u633a\u540e\u6765\u53c8\u8e22\u4e86\u540e\u8170\u8fd9\u662f\u5728\u641e\u7b11\u5417\uff1f\u5927\u8fde\u7684\u5916\u63f4\u51e0\u5929\u524d\u624d\u5230\u961f \u5b8c\u5168\u6ca1\u6709\u78e8\u5408 \u800c\u4e14 \u8fd8\u5728\u5012\u65f6\u5dee \u56fd\u5185\u7403\u5458\u786e\u5b9e\u6709\u5dee\u8ddd\u4f46\u662f\u8bf4\u53e5\u4e0d\u597d\u542c\u7684\u5c31\u4e2d\u56fd\u56fd\u5185\u7684\u7403\u5458\u5dee\u8ddd\u80fd\u6709\u591a\u5927\uff1f\u8fd8\u662f\u90a3\u53e5\u8bdd \u6293\u7d27\u78e8\u5408\u5427 \u590f\u5b63\u8f6c\u4f1a\u518d\u8fd0\u4f5c\u51e0\u4e2a\u5185\u63f4 \u5927\u8fde\u8db3\u7403\u7684\u8f89\u714c\u4e0d\u662f\u4e00\u573a\u7403\u751a\u81f3\u4e00\u4e2a\u8d5b\u5b63\u5c31\u80fd\u91cd\u73b0\u7684 \u5f53\u7136\u4e5f\u4e0d\u662f\u4e00\u573a\u7403\u5c31\u8bf4\u5927\u8fde\u8db3\u7403\u5c31\u8fd9\u4e48\u5b8c\u86cb\u4e86 \u770b\u7740\u76f4\u64ad\u5427\u8fd9\u4e48\u591a\u4eba\u51b7\u5632\u70ed\u8bbd\u7684\u4e5f\u4e0d\u60f3\u4e89\u8bba \u8f93\u4e86\u5c31\u662f\u8f93\u4e86 \u4f60\u505a\u4eba\u4e0d\u7559\u4e00\u7ebf \u5927\u8fde\u8db3\u7403\u5d1b\u8d77\u90a3\u5929\u6211\u4eec\u518d\u89c1", "up": 313}, {"content": "\u5f53\u5e74\u9a82\u9ec4\u535a\u6587\u751a\u81f3\u6709\u8fc7\u6fc0\u884c\u4e3a\u867d\u8bf4\u4e0d\u8be5,\u4f46\u662f\u6709\u539f\u56e0\u7684,\u9ec4\u535a\u6587\u6253\u5c0f\u513f\u662f\u56fd\u5b89\u9752\u8bad\u57f9\u517b\u51fa\u6765\u7684\u82d7\u5b50,\u6df1\u53d7\u7403\u8ff7\u7231\u6234,\u60f3\u53bb\u97e9\u56fd\u953b\u70bc\u53d1\u5c55\u56fd\u5b89\u5168\u529b\u652f\u6301,\u8bf4\u597d\u56de\u56fd\u4e00\u5b9a\u56de\u6bcd\u961f,\u7ed3\u679c\u4e0d\u4ec5\u4e0d\u56de\u8fd8\u52a0\u76df\u6b7b\u654c\u6052\u5927,\u7231\u4e4b\u6df1\u6068\u4e4b\u5207\u5b9e\u5728\u96be\u4ee5\u63a5\u53d7.\u5468\u633a\u4e3a\u56fd\u5b89\u4e0d\u9057\u4f59\u529b\u6253\u62fc\u8fd9\u4e48\u591a\u5e74,\u7528\u8fd9\u6837\u7684\u65b9\u5f0f\u56de\u5f52\u53c8\u600e\u80fd\u4e0d\u6b22\u8fce\u5462.", "up": 285}, {"content": "\u56fd\u5b89\u7403\u8ff7\u4e0d\u5168\u90fd\u662f**\u7684\u3002\u56e0\u4e3a\u5468\u633a\u4e0b\u573a\u544a\u8bc9\u4e86\u6211\u3002", "up": 13}, {"content": "\u987e\u64cd\u4f60\u8fd9\u72d7\u813e\u6c14\u65e9\u665a\u4f60\u5403\u5927\u4e8f\uff01\u987e\u64cd\u662f\u79e6\u751f\u3001\u6234\u7433\u3001\u5468\u633a\u7684\u5408\u4f53\uff01", "up": 12}]};
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
