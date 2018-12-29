var data = {"person_name": "\u4f0a\u6c83", "nicknames": "\u4f0a\u6c83", "aspects": {"\u7403\u8ff7": 0.4092833991069591, "\u4fdd\u7ea7": 0.5674771780280057, "\u8d5b\u5b63": 0.7655473505976497, "\u7403\u5458": 0.2856158248538626, "\u9632\u5b88": 0.7597347132374034, "\u4f20\u7403": 0.8053231713413432, "\u6bd4\u8d5b": 0.48367181952271854, "\u8fdb\u7403": 0.5666085809075635, "\u8fdb\u653b": 0.46951643354365025, "\u964d\u7ea7": 0.6099346440889325}, "overall_heat": 74.0, "overall_polar": -0.216, "name": "483", "nationality": "Brazil", "position": "\u4e2d\u573a", "goal": "1", "assist": "3", "team_name": "\u6cb3\u5357\u5efa\u4e1a", "name_en": "Ivo", "age": "31", "height": "175", "weight": "0"};
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
var topic_keywords = {"0": [{"name": "\u4f0a\u6c83", "value": 0.06459016393442624}, {"name": "\u5efa\u4e1a", "value": 0.042732240437158474}, {"name": "\uff01", "value": 0.037267759562841535}, {"name": "\uff1f", "value": 0.024153005464480876}, {"name": "\u4e2d\u573a", "value": 0.014316939890710383}, {"name": "\u8d5b\u5b63", "value": 0.014316939890710383}, {"name": "\u56de\u6765", "value": 0.011038251366120218}, {"name": "\u8d70", "value": 0.009945355191256831}, {"name": "\u7403\u8ff7", "value": 0.009945355191256831}, {"name": "\u4fdd\u7ea7", "value": 0.008852459016393442}, {"name": "\u6559\u7ec3", "value": 0.008852459016393442}, {"name": "\u6700\u540e", "value": 0.007759562841530054}, {"name": "\u62fc", "value": 0.007759562841530054}, {"name": "\u5361\u5170\u52a0", "value": 0.006666666666666666}, {"name": "\u5df4\u7d22", "value": 0.006666666666666666}, {"name": "\u52a0\u6cb9", "value": 0.006666666666666666}, {"name": "\u7403\u961f", "value": 0.006666666666666666}, {"name": "\u6208", "value": 0.006666666666666666}, {"name": "\u4e0d\u9519", "value": 0.006666666666666666}, {"name": "\u822a\u4f53", "value": 0.006666666666666666}, {"name": "\u4e4b\u738b", "value": 0.006666666666666666}, {"name": "\u524d\u950b", "value": 0.005573770491803278}, {"name": "\u73b0\u5728", "value": 0.005573770491803278}, {"name": "\u5361\u5c14", "value": 0.005573770491803278}, {"name": "\u4e0d\u884c", "value": 0.005573770491803278}, {"name": "\u5c39\u9e3f\u535a", "value": 0.005573770491803278}, {"name": "\u5b8c\u5168", "value": 0.00448087431693989}, {"name": "\u7ee7\u7eed", "value": 0.00448087431693989}, {"name": "\u7ec4\u7ec7", "value": 0.00448087431693989}, {"name": "\u4e2d\u8d85", "value": 0.00448087431693989}], "1": [{"name": "\u4f0a\u6c83", "value": 0.03929503916449086}, {"name": "\uff01", "value": 0.035378590078328984}, {"name": "\u5efa\u4e1a", "value": 0.03276762402088773}, {"name": "\u56fd\u5b89", "value": 0.014490861618798955}, {"name": "\u7403\u5458", "value": 0.010574412532637075}, {"name": "\u7403", "value": 0.009268929503916449}, {"name": "\u6bd4\u8d5b", "value": 0.009268929503916449}, {"name": "\u9632\u5b88", "value": 0.007963446475195823}, {"name": "\u770b\u5230", "value": 0.006657963446475196}, {"name": "\u5bf9\u65b9", "value": 0.006657963446475196}, {"name": "\u738b\u521a", "value": 0.006657963446475196}, {"name": "\u4e8e\u6d0b", "value": 0.006657963446475196}, {"name": "\u8e22", "value": 0.006657963446475196}, {"name": "\u597d", "value": 0.006657963446475196}, {"name": "\u88c1\u5224", "value": 0.0053524804177545685}, {"name": "\u52a0\u6cb9", "value": 0.0053524804177545685}, {"name": "\u8fd9\u573a", "value": 0.0053524804177545685}, {"name": "\u8d62", "value": 0.0053524804177545685}, {"name": "\u4eba", "value": 0.0053524804177545685}, {"name": "10", "value": 0.0053524804177545685}, {"name": "\u5361\u5170\u52a0", "value": 0.0053524804177545685}, {"name": "\u5e0c\u671b", "value": 0.0053524804177545685}, {"name": "\u6cb3\u5357", "value": 0.0053524804177545685}, {"name": "\u7403\u8ff7", "value": 0.004046997389033942}, {"name": "\u53cc\u65b9", "value": 0.004046997389033942}, {"name": "\u62a2\u65ad", "value": 0.004046997389033942}, {"name": "\u961f", "value": 0.004046997389033942}, {"name": "\u4e3b\u52a8", "value": 0.004046997389033942}, {"name": "\u63a7\u7403", "value": 0.004046997389033942}, {"name": "\u8fdb\u653b", "value": 0.004046997389033942}]};
var topic_summary = {"0": [{"content": "\u4f0a\u6c83\u9002\u5408\u5efa\u4e1a\uff0c\u5f20\u5916\u9f99\u9002\u5408\u6240\u6709\u4e2d\u4e0b\u6e38\u7403\u961f", "up": 150}, {"content": "\u4f0a\u6c83", "up": 56}, {"content": "\u611f\u8c22\u4f0a\u6c83\uff01\u6700\u540e\u7684\u70b9\u7403\u8ba9\u7ed9\u4e86\u8fdb\u7403\u5fc3\u5207\u7684\u5df4\u7d22\u6208\uff01\u4f0a\u6c83\u6c38\u8fdc\u662f\u822a\u4f53\u4e4b\u738b\uff01\uff01\uff01", "up": 25}, {"content": "\u795d\u8d3a\u5927\u5efa\u4e1a\u672c\u8d5b\u5b63\u4fdd\u7ea7\u6210\u529f\uff01 \u8fd9\u8d5b\u5b63\u5f88\u4e0d\u5bb9\u6613 \u9891\u7e41\u6362\u6559\u7ec3 \u5854\u62c9\u5b63\u5947\u7684\u4e0d\u9002\u5e94 \u5f20\u5916\u9f99\u7684\u8fde\u7eed\u4e0d\u80dc\u6362\u4eba\u88ab\u7403\u8ff7\u8bdf\u75c5 \u7ec8\u4e8e\u571f\u5e05\u738b\u5b9d\u5c71\u6765\u4e86\u5efa\u4e1a\u56e2\u7ed3\u62fc\u640f\u7684\u7cbe\u795e\u4e5f\u56de\u6765\u4e86\uff01\u5c24\u5176\u662f\u6700\u540e\u51e0\u573a\u786c\u6c49\u5361\u5170\u52a0\u62fc\u5230\u813e\u810f\u7834\u88c2\uff0c\u66f4\u662f\u8ba9\u7403\u961f\u3001\u7403\u8ff7\u7a7a\u524d\u56e2\u7ed3\uff01\u8fd9\u8d5b\u5b63\u4e5f\u6709\u6536\u83b7\u66fe\u7ecf\u7684\u822a\u4f53\u4e4b\u738b\u4f0a\u6c83\u56de\u6765\u4e86 \u5929\u9009\u4e4b\u5b50\u91cc\u5361\u591a\u53ea\u8fdb\u9ad8\u96be\u5ea6\u7403 \u6768\u9614\u3001\u675c7\u6253\u8fdb\u4ee3\u8868\u5efa\u4e1a\u7684\u4e2d\u8d85\u9996\u7403\u3001\u6700\u540e\u51e0\u573a\u6709\u4e0a\u573a\u7684\u97e9\u8f69\u8868\u73b0\u4e5f\u4e0d\u9519\uff01\u5efa\u4e1a\u52a0\u6cb9\uff01\u4e0b\u8d5b\u5b63\u6211\u4eec\u5728\u4e2d\u8d85\u7ee7\u7eed\u62fc\uff01\u7ee7\u7eed\u5e72\uff01\u6700\u540e\u795d\u798f\u82f1\u96c4\u5361\u5170\u52a0\u65e9\u65e5\u5eb7\u590d\u3002", "up": 24}, {"content": "\u81ea\u4ece\u4f0a\u6c83\u8d70\u540e\uff0c\u5efa\u4e1a\u5c31\u5f88\u5c11\u6709\u4e2d\u573a\u6e17\u900f\uff0c\u5927\u90e8\u5206\u90fd\u662f\u957f\u4f20\u51b2\u540a \u957f\u4f20\u51b2\u540a \u957f\u4f20\u51b2\u540a\ud83d\ude13\u3002\u65b0\u4efb\u6559\u7ec3\u5904\u7406\u4e86\u4e86\u591a\u5947\u5361\u5c14\uff0c\u5012\u662f\u4e70\u4e00\u4e2a\u80fd\u7528\u7684\u4e2d\u573a\u554a\uff0c\u8fd8\u5f3a\u8c03\u8fdb\u653b\uff0c\u641e\u7b11\u5417\uff1f\u518d\u8fd9\u4e48\u4e0b\u53bb\uff0c\u5750\u7b49\u964d\u7ea7", "up": 19}], "1": [{"content": "\u6c60\u5fe0\u56fd\u771f\u4e0d\u9519\uff0c\u9632\u5b88\u5bf9\u65b9\u6838\u5fc3\u4f0a\u6c83\u5f88\u6210\u529f\u3002\u800c\u4e14\u94f2\u7403\u5e72\u51c0\u3001\u62a2\u65ad\u7cbe\u51c6\u3001\u5e26\u7403\u7a33\u5b9a\u3001\u51fa\u7403\u51c6\u786e\u3002\u5728\u5b8c\u5168\u89e3\u653e\u672c\u65b9\u6838\u5fc3\u6bd4\u827e\u62c9\u548c\u50b2\u9aa8\u7684\u540c\u65f6\uff0c\u5c01\u6b7b\u4e86\u5bf9\u65b9\u6838\u5fc3\u3002\u4e4d\u4e00\u770b\u65e2\u6ca1\u8fdb\u7403\u4e5f\u6ca1\u52a9\u653b\uff0c\u4f46\u662f\u4f5c\u7528\u771f\u7684\u975e\u5e38\u5927\u3002\u5f88\u597d\u7684\u5f15\u63f4\uff0c\u5439\u4e00\u6ce2\u6c60\u5fe0\u56fd\uff01\uff01\uff01", "up": 177}, {"content": "\u6cb3\u5357\u4e0d\u8be5\u5356\u4f0a\u6c83\uff0c\u5728\u6cb3\u5357\u4f5c\u7528\u66f4\u5927", "up": 133}, {"content": "\u770b\u5230\u4f0a\u6c83\u5c31\u770b\u5230\u4e86\u6211\u5927\u5efa\u4e1a\uff0c\u5509\uff0c\u53ef\u60dc\u4e86\u4e86\u3002\u3002\u3002[\u9ed1\u9505]", "up": 81}, {"content": "\u738b\u695a\u8fd9\u4e2a\u6c34\u5e73\uff0c\u5c45\u7136\u6253\u66ff\u8865\uff0c\u610f\u8bc6\u5b8c\u5168\u8d85\u8d8a\u961f\u53cb\uff0c\u51e0\u4e2a\u7403\uff0c\u80cc\u8eab\u811a\u638c\u5411\u540e\u62c9\u7ed9\u738b\u521a\u5e26\u8d70\u9632\u5b88\u961f\u5458\uff0c\u52a0\u901f\u6446\u8131\u5728\u5f27\u9876\u51cf\u6162\u8282\u594f\u7b49\u4f0a\u6c83\u4e00\u6b65\u5206\u8fc7\u53bb\u5355\u5200\uff0c\u5728\u5927\u7981\u533a\u7ebf\u8ddf\u738b\u521a\u4e8c\u8fc7\u4e00\uff0c\u738b\u521a\u987a\u52bf\u4e00\u8fc7\u9762\u5bf9\u95e8\u5c06\u5355\u5200\u3002\u3002\u6211\u770b\u4e86\u4e00\u4e0b\uff0c\u5904\u7406\u7403\u6ca1\u6709\u5931\u8bef\uff0c\u6210\u529f\u7387\u767e\u5206\u767e\uff0c\u800c\u4e14\u5904\u7406\u7403\u975e\u5e38\u5408\u7406\u3002\u3002\u8fd9\u6837\u7684\u7403\u5458\u8be5\u8fdb\u56fd\u5bb6\u961f", "up": 29}, {"content": "\u7b2c\u5341\u8f6e\u4f0a\u6c83\u961f\u5185\u8bad\u7ec3\u53d7\u4f24\u81f4\u656c\u5efa\u4e1a\uff0c\u5341\u4e00\u8f6e\u8096\u667a\u8fdb\u7403\u9886\u7b2c\u4e8c\u5f20\u9ec4\u724c\u81f4\u656c\u5efa\u4e1a", "up": 15}]};
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
