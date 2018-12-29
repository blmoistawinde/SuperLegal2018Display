var data = {"person_name": "\u738b\u5f64", "nicknames": "\u738b\u5f64", "aspects": {"\u72af\u89c4": 0.44298048560021214, "\u9632\u5b88": 0.5481971733003846, "\u540e\u8170": 0.5353069034958241, "\u8fdb\u7403": 0.2669749667844842, "\u7403\u5458": 0.47932472383078234, "\u4f20\u4e2d": 0.5672603861514397, "\u5916\u63f4": 0.1934211141328987, "\u5c04\u95e8": 0.31710412573485786, "\u9ec4\u724c": 0.34986572146171424, "\u8fdb\u653b": 0.6121111594780706}, "overall_heat": 71.0, "overall_polar": 0.049, "name": "109", "nationality": "\u4e2d\u56fd", "position": "\u540e\u536b", "goal": "0", "assist": "3", "team_name": "\u5c71\u4e1c\u9c81\u80fd\u6cf0\u5c71", "name_en": "Wang Tong", "age": "25", "height": "182", "weight": "72"};
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
var topic_keywords = {"0": [{"name": "\u738b\u5f64", "value": 0.05464736104624008}, {"name": "\uff01", "value": 0.029736883076444034}, {"name": "\uff1f", "value": 0.02662307333021953}, {"name": "\u9c81\u80fd", "value": 0.020395453837770514}, {"name": "\u72af\u89c4", "value": 0.015724739218433755}, {"name": "\u5e94\u8be5", "value": 0.012610929472209249}, {"name": "\u4e00\u4e2a", "value": 0.011054024599096995}, {"name": "\u7403", "value": 0.011054024599096995}, {"name": "\u88c1\u5224", "value": 0.009497119725984743}, {"name": "\u4e8e\u5927\u5b9d", "value": 0.009497119725984743}, {"name": "\u6628\u5929", "value": 0.007940214852872489}, {"name": "\u52a8\u4f5c", "value": 0.007940214852872489}, {"name": "\u5148", "value": 0.007940214852872489}, {"name": "\u770b\u770b", "value": 0.006383309979760237}, {"name": "\u5317\u4eac", "value": 0.006383309979760237}, {"name": "\u4e0b\u96e8", "value": 0.006383309979760237}, {"name": "\u8fdb\u7403", "value": 0.006383309979760237}, {"name": "\u4eca\u5929", "value": 0.006383309979760237}, {"name": "\u7403\u5458", "value": 0.006383309979760237}, {"name": "\u7403\u8ff7", "value": 0.006383309979760237}, {"name": "\u6d47\u5730", "value": 0.006383309979760237}, {"name": "\u5965\u65af\u5361", "value": 0.006383309979760237}, {"name": "\u78b0\u5230", "value": 0.006383309979760237}, {"name": "\u8e22", "value": 0.006383309979760237}, {"name": "\u82b1\u94b1", "value": 0.0048264051066479845}, {"name": "\u52a9\u7406\u88c1\u5224", "value": 0.0048264051066479845}, {"name": "\u5434\u5174\u6db5", "value": 0.0048264051066479845}, {"name": "\u5224", "value": 0.0048264051066479845}, {"name": "\u89c6\u9891", "value": 0.0048264051066479845}, {"name": "\u5173\u5fc3", "value": 0.0048264051066479845}], "1": [{"name": "\u738b\u5f64", "value": 0.045902618739420496}, {"name": "\uff01", "value": 0.021009658468585088}, {"name": "\u8e22", "value": 0.016031066414418003}, {"name": "\u540e\u8170", "value": 0.010056755949417505}, {"name": "\u6253", "value": 0.009061037538584088}, {"name": "\u9632\u5b88", "value": 0.009061037538584088}, {"name": "\u5f20\u5f1b", "value": 0.008065319127750673}, {"name": "\u91d1\u656c\u9053", "value": 0.008065319127750673}, {"name": "\u540e\u536b", "value": 0.008065319127750673}, {"name": "\u84bf\u4fca\u95f5", "value": 0.007069600716917256}, {"name": "\uff1f", "value": 0.007069600716917256}, {"name": "\u95ee\u9898", "value": 0.007069600716917256}, {"name": "\u9c81\u80fd", "value": 0.007069600716917256}, {"name": "\u6362", "value": 0.007069600716917256}, {"name": "\u4f69\u83b1", "value": 0.007069600716917256}, {"name": "\u90d1\u94ee", "value": 0.00607388230608384}, {"name": "\u5f20\u9a70", "value": 0.00607388230608384}, {"name": "\u5d14\u9e4f", "value": 0.00607388230608384}, {"name": "\u91d1\u5b50", "value": 0.00607388230608384}, {"name": "\u5c0f", "value": 0.00607388230608384}, {"name": "\u4e0d\u597d", "value": 0.005078163895250423}, {"name": "\u524d\u573a", "value": 0.005078163895250423}, {"name": "\u786e\u5b9e", "value": 0.005078163895250423}, {"name": "\u5916\u63f4", "value": 0.005078163895250423}, {"name": "\u5b8b\u9f99", "value": 0.005078163895250423}, {"name": "\u4f20\u4e2d", "value": 0.005078163895250423}, {"name": "\u5434\u5174\u6db5", "value": 0.005078163895250423}, {"name": "\u4eba\u548c", "value": 0.004082445484417007}, {"name": "\u5206\u949f", "value": 0.004082445484417007}, {"name": "\u5f88\u5927", "value": 0.004082445484417007}]};
var topic_summary = {"0": [{"content": "\u4e8e\u5927\u5b9d\u62a2\u7403\u90a3\u4e0b\u6bd4\u738b\u5f64\u72e0\u5427\uff0c\u8fd9\u4e2a\u4e0d\u72af\u89c4\uff1f", "up": 848}, {"content": "\u6211\u662f\u771f\u5fcd\u4e0d\u4e86\u4e86\uff0c\u6cb3\u5317\u4e0d\u6127\u8ddf\u5317\u4eac\u6328\u7740\u8fd1\uff0c\u4e00\u5439\u72af\u89c4\u5c31\u9a82\u88c1\u5224****\uff0c\u7ed9\u738b\u5f64\u90a3\u5f20\u9ec4\u724c\u4e5f\u9a82\uff0c\u8f93\u4e0d\u8d77\u8fd8\u662f\u548b\u7684\uff1f\u5929\u7a7a\u4f53\u80b2\u5168\u7403\u76f4\u64ad\uff0c\u771f\u4e0d\u591f\u4e22\u4eba\u7684\uff01", "up": 13}, {"content": "\u4e3b\u88c1\u4eca\u5929\u5e26\u7740\u4efb\u52a1\u6765\u7684\uff1f\u738b\u5f64\u7981\u533a\u88ab\u62c9\u62fd\u4e0d\u770bVR\uff0c\u6234\u7433\u4eca\u5929\u6328\u4e86\u4e00\u5df4\u638c\u8fd8\u5f97\u5403\u724c\uff1f", "up": 10}, {"content": "\u522b\u62ff\u6628\u5929\u9c81\u80fd\u8bf4\u4e8b\uff0c\u6628\u5929\u5965\u65af\u5361\u662f\u5bf9\u7403\u5931\u53bb\u63a7\u5236\uff0c\u7136\u540e\u53bb\u94f2\u7403\uff01\u66f4\u63a5\u8fd1\u7403\u7684\u662f\u738b\u5f64\uff0c\u6ca1\u4e8b\u770b\u6e05\u695a\u4e8b\u5b9e\u518d\u6765\u8bc4\u8bba\uff01\u4f60\u770b\u56de\u653e\u662f\u738b\u5f64\u72af\u89c4\u4e86\u4e48\uff1f", "up": 9}, {"content": "\u4e9a\u592a\u7b2c\u4e00\u4e2a\u8fdb\u7403\u72af\u89c4\u52a8\u4f5c\u6bd4\u4e0a\u4e00\u573a\u738b\u5f64\u7684\u660e\u663e\u591a\u4e86\uff0c\u8fd9\u6b21\u89c6\u9891\u88c1\u5224\u600e\u4e48\u5c31\u4e0d\u6562\u5224\u4e86", "up": 9}], "1": [{"content": "\u84bf\u4fca\u95f5\u53d1\u6325\u7684\u592a\u5dee\u4e86\uff01\u5e26\u7684\u9c81\u80fd\u4e71\u5957\u4e86\uff01\u5c31\u738b\u5f64\uff0c\u5c0f\u91d1\u5b50\u8fd8\u884c\uff01\u5434\u5174\u6db5\u8fd9\u6837\u7684\u5c31\u5f97\u66ff\u8865\u731b\u51b2", "up": 208}, {"content": "\u5f20\u5f1b\u5b8b\u9f99\u771f\u6bd4\u738b\u5f64\u90d1\u94ee\u5dee\u5f97\u592a\u591a\u4e86", "up": 12}, {"content": "\u5d14\u9e4f\u51cf\u80a5\u6210\u529f\uff0c\u6280\u672f\u8fd8\u662f\u597d\u7684\u6ca1\u8bdd\u8bf4\uff0c\uff0c\u80fd\u529b\u73b0\u5728\u4e2d\u8d85\u4f9d\u7136\u80fd\u6392\u4e0a\u53f7\u3002\u5c0f\u91d1\u4f9d\u7136\u662f\u6beb\u4e0d\u60dc\u529b\u5168\u573a\u98de\u5954\uff0c\u8fdb\u7403\u662f\u6700\u597d\u7684\u56de\u62a5\u3002\u84bf\u4fca\u95f5\u5931\u8bef\u6709\u70b9\u591a\u5566\uff0c\u53ef\u4ee5\u4f11\u606f\u4e00\u4e0b\u8bd5\u8bd5\u3002\u5218\u519b\u5e05\u8fd8\u662f\u6bd4\u8f83\u7a33\u7684\uff0c\u5434\u5174\u6db5\u6cef\u7136\u4f17\u4eba\u77e3\uff0c\u738b\u5f64\u5e94\u8be5\u662f\u4e0b\u4e00\u4efb\u961f\u957f\uff0c\u5b8b\u9f99\u9632\u5b88\u6709\u4f59\u8fdb\u653b\u4e0d\u8db3\uff0c\u603b\u4e4b\uff0c\u6c38\u8fdc\u652f\u6301\u9c81\u80fd\uff0c\u52a0\u6cb9\uff01\uff01\uff01\uff01", "up": 12}, {"content": "\u738b\u5f64\u7684\u52a8\u4f5c\u6709\u70b9\u5927\uff0c\u6700\u540e\u90a3\u4e2a\u53ef\u4ee5\u638f\u7ea2\u724c", "up": 10}, {"content": "\u771f\u4e0d\u5982\u53f3\u540e\u4e0a\u9f50\u5929\u5b87\uff0c\u738b\u5f64\u8e22\u9632\u5b88\u540e\u8170\u53bb\u3002\u5d14\u9e4f\u786e\u5b9e\u8001\u4e86\uff0c\u8dd1\u4e0d\u52a8\u4e86\u3002", "up": 9}]};
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
