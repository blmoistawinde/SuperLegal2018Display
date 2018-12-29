var data = {"person_name": "\u9093\u6db5\u6587", "nicknames": "\u9093\u6db5\u6587", "aspects": {"\u70b9\u7403": 0.36537760733715124, "\u6bd4\u8d5b": 0.4444695601110446, "\u9ec4\u724c": 0.47911348758390293, "\u7403\u5458": 0.4517823067014767, "\u9632\u5b88": 0.5344256194979302, "\u72af\u89c4": 0.6422738565952146, "\u7ea2\u724c": 0.6756244356727661, "\u8fdb\u653b": 0.553808110403625, "\u8fdb\u7403": 0.38457738705630956, "\u5916\u63f4": 0.4223038392580234}, "overall_heat": 158.0, "overall_polar": -0.002, "name": "23", "nationality": "\u4e2d\u56fd", "position": "\u540e\u536b", "goal": "1", "assist": "1", "team_name": "\u5e7f\u5dde\u6052\u5927\u6dd8\u5b9d", "name_en": "Hanwen Deng", "age": "23", "height": "178", "weight": "0"};
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
var topic_keywords = {"0": [{"name": "\u9093\u6db5\u6587", "value": 0.06316029490005319}, {"name": "\uff01", "value": 0.025157710724329256}, {"name": "\u6052\u5927", "value": 0.024397659040814777}, {"name": "\uff1f", "value": 0.01375693547161207}, {"name": "u23", "value": 0.010716728737554153}, {"name": "\u60f3", "value": 0.006916470319981758}, {"name": "\u90dc\u6797", "value": 0.006916470319981758}, {"name": "\u88c1\u5224", "value": 0.006156418636467279}, {"name": "\u5e94\u8be5", "value": 0.006156418636467279}, {"name": "\u7403\u5458", "value": 0.006156418636467279}, {"name": "\u597d", "value": 0.006156418636467279}, {"name": "\u6253", "value": 0.0053963669529528005}, {"name": "\u5361\u7eb3\u74e6\u7f57", "value": 0.0053963669529528005}, {"name": "\u9ec4\u724c", "value": 0.0053963669529528005}, {"name": "\u8868\u73b0", "value": 0.0053963669529528005}, {"name": "\u4e0b", "value": 0.0053963669529528005}, {"name": "\u5916\u63f4", "value": 0.0053963669529528005}, {"name": "U23", "value": 0.004636315269438322}, {"name": "\u8d5b\u5b63", "value": 0.004636315269438322}, {"name": "\u9996\u53d1", "value": 0.004636315269438322}, {"name": "\u7ea2\u724c", "value": 0.004636315269438322}, {"name": "\u8138", "value": 0.004636315269438322}, {"name": "\u6342", "value": 0.004636315269438322}, {"name": "\u4e00\u4e2a", "value": 0.004636315269438322}, {"name": "\u6709\u6ca1\u6709", "value": 0.0038762635859238424}, {"name": "\u8e22", "value": 0.0038762635859238424}, {"name": "\u95ee\u9898", "value": 0.0038762635859238424}, {"name": "\u771f\u7684", "value": 0.0038762635859238424}, {"name": "\u56fd\u811a", "value": 0.0038762635859238424}, {"name": "\u73b0\u5728", "value": 0.0038762635859238424}], "1": [{"name": "\u9093\u6db5\u6587", "value": 0.04103976831249558}, {"name": "\u70b9\u7403", "value": 0.02267429540156813}, {"name": "\uff01", "value": 0.020555202373384193}, {"name": "\u7403", "value": 0.018436109345200256}, {"name": "\u6bd4\u8d5b", "value": 0.012785194603376421}, {"name": "\uff1f", "value": 0.012078830260648443}, {"name": "\u5df4\u574e\u5e03", "value": 0.012078830260648443}, {"name": "\u72af\u89c4", "value": 0.012078830260648443}, {"name": "\u95ee\u9898", "value": 0.011372465917920464}, {"name": "\u56fd\u5b89", "value": 0.010666101575192483}, {"name": "\u5439", "value": 0.010666101575192483}, {"name": "\u9ec4\u724c", "value": 0.009959737232464504}, {"name": "\u88c1\u5224", "value": 0.009959737232464504}, {"name": "\u6052\u5927", "value": 0.009959737232464504}, {"name": "\u52a8\u4f5c", "value": 0.007134279861552588}, {"name": "\u9a6c\u5b81", "value": 0.007134279861552588}, {"name": "\u8fdb\u7403", "value": 0.006427915518824609}, {"name": "\u5148", "value": 0.006427915518824609}, {"name": "\u540e", "value": 0.0050151868333686515}, {"name": "\u8eab\u4f53", "value": 0.0050151868333686515}, {"name": "\u5e94\u8be5", "value": 0.0050151868333686515}, {"name": "\u6700\u540e", "value": 0.0050151868333686515}, {"name": "\u6345", "value": 0.0050151868333686515}, {"name": "var", "value": 0.0050151868333686515}, {"name": "\u7403\u8ff7", "value": 0.004308822490640672}, {"name": "\u8e22", "value": 0.004308822490640672}, {"name": "\u4e00\u573a", "value": 0.004308822490640672}, {"name": "\u90d1\u667a", "value": 0.004308822490640672}, {"name": "\u4eba", "value": 0.003602458147912693}, {"name": "\u78b0\u5230", "value": 0.003602458147912693}], "2": [{"name": "\u9093\u6db5\u6587", "value": 0.02127659574468085}, {"name": "\u6052\u5927", "value": 0.013647537509536324}, {"name": "\u4e00\u4e2a", "value": 0.011104518097821479}, {"name": "\u7403", "value": 0.010256844960583199}, {"name": "\u90dc\u6797", "value": 0.010256844960583199}, {"name": "\u4e24\u6b21", "value": 0.009409171823344917}, {"name": "\u6709\u70b9", "value": 0.008561498686106638}, {"name": "\u4e8e\u6c49\u8d85", "value": 0.008561498686106638}, {"name": "\u524d", "value": 0.007713825548868356}, {"name": "\u8fd9\u573a", "value": 0.006866152411630075}, {"name": "\u9ad8\u62c9\u7279", "value": 0.006866152411630075}, {"name": "\u8e22", "value": 0.006866152411630075}, {"name": "\u8fdb\u653b", "value": 0.006018479274391794}, {"name": "\u76f8\u5f53", "value": 0.006018479274391794}, {"name": "\uff01", "value": 0.006018479274391794}, {"name": "\u592a", "value": 0.006018479274391794}, {"name": "\u811a", "value": 0.006018479274391794}, {"name": "\u80fd\u529b", "value": 0.005170806137153513}, {"name": "\u5916\u63f4", "value": 0.005170806137153513}, {"name": "\u4e0b\u6b7b", "value": 0.005170806137153513}, {"name": "\u53f7", "value": 0.005170806137153513}, {"name": "\u4e0a\u6e2f", "value": 0.005170806137153513}, {"name": "\u5c0f\u5e08\u5f1f", "value": 0.005170806137153513}, {"name": "\u6068", "value": 0.005170806137153513}, {"name": "\u9976\u4f1f\u5e73", "value": 0.005170806137153513}, {"name": "\u674e\u5b66\u9e4f", "value": 0.005170806137153513}, {"name": "\u6bd4\u8d5b", "value": 0.005170806137153513}, {"name": "31", "value": 0.005170806137153513}, {"name": "\u5e94\u8be5", "value": 0.005170806137153513}, {"name": "\u80e1\u5c14\u514b", "value": 0.004323132999915233}]};
var topic_summary = {"0": [{"content": "U23\u9093\u6db5\u6587\u7372M\u2164P\uff01\u606d\u559c\uff01\uff01\u9664\u4e86\u56ed\u6708\u5f2f\u5200\u52a9\u653b\u90dc\u6797\u65af\u66fc\u5916\uff0c\u9632\u5b88\u4ea6\u9887\u4f73\uff0c\u5efa\u8bae\u7ee7\u7eed\u9996\u53d1\uff0c\u8d5e\u540c\u7684\u54e5\u4eec\u513f\u6709\u6ca1\u6709\uff1f\u8bf7\u4e3e\u624b[\u7ea2\u724c][\u9ec4\u724c]", "up": 774}, {"content": "\u8fd9\u573a\u6bd4\u8d5b\u6052\u5927\u7684\u6536\u83b7\u662f \u9093\u6db5\u6587\u8e22\u7684\u6bd4\u8f83\u81ea\u4fe1\u4e86\uff01\u51af\u535a\u8f69\u4e0d\u602f\u573a \u57fa\u672c\u529f\u6bd4\u8f83\u624e\u5b9e\uff01\u5361\u7eb3\u74e6\u7f57\u8fd8\u662f\u6709\u70b9\u773c\u5149 \u5f20\u6587\u948a\u5361\u7eb3\u74e6\u7f57\u4e00\u5b9a\u8981\u591a\u7528\uff01\uff01\uff01\u73b0\u5728\u7684\u72b6\u6001 \u7edd\u5bf9\u5f3a\u4e8e\u90d1\u9f99\uff01\uff01\uff01\u5f20\u7433\u8283 \u9700\u8981\u4f11\u606f \u5176\u4ed6\u4eba\u90fd\u6709\u8f6e\u6362\u8c8c\u4f3c\u5f20\u7433\u8283\u6ca1\u6709", "up": 290}, {"content": "\u9093\u6db5\u6587\u5168\u573a\u6700\u4f73\u90fd\u4e0d\u8fc7\u5206", "up": 237}, {"content": "\u6211\u51b2\u51fa\u6765\u5c31\u662f\u8981\u5938\u9093\u6db5\u6587\u7684\uff0c\u6709\u6ca1\u6709\u652f\u6301\u7684\u54e5\u4eec\u513f\uff1f\uff01", "up": 189}, {"content": "\u9093\u6db5\u6587\u51e0\u811a\u4f20\u4e2d\u771f\u4e0d\u9519", "up": 15}], "1": [{"content": "\u770b\u4e0d\u61c2\u8fd9\u4e48\u91cd\u8981\u7684\u5224\u7f5a\u4e3a\u4ec0\u4e48\u4e0d\u770bVAR\uff0c\u9093\u6db5\u6587\u8c8c\u4f3c\u6345\u5230\u7403\u4e86", "up": 506}, {"content": "\u5982\u679c\u9093\u6db5\u6587\u90a3\u4e2a\u624b\u4e0a\u52a8\u4f5c\u662f\u9ec4\u724c\uff0c\u90a3\u4e0b\u534a\u573a68\u5206\u949f\u5de6\u53f3\u8d35\u5dde5\u53f7\u63a8\u5012\u963f\u5170\u7684\u4e3a\u4ec0\u4e48\u6ca1\u724c\uff0c\u8fd8\u6709\u963f\u5170\u7684\u9ec4\u724c\u56de\u653e\u5728\u90a3\u91cc\uff01\u4e0d\u89e3", "up": 149}, {"content": "\u4e25\u683c\u6765\u8bf4\uff0c\u88c1\u5224\u5224\u7f5a\u6ca1\u5565\u95ee\u9898\uff01\u6885\u65b9\u786e\u5b9e\u6709\u4e00\u4e2a\u8f7b\u5fae\u5f20\u5f00\u624b\u81c2\u62e6\u622a\u76ae\u7403\u7684\u52a8\u4f5c\uff0c\u5df4\u574e\u5e03\u4e5f\u6709\u4e00\u4e2a\u624b\u538b\u4eba\u7684\u52a8\u4f5c\uff0c\u9093\u6db5\u6587\u63a8\u4eba\u4e5f\u6ca1\u6709\u5f02\u8bae\u3002\u81f3\u4e8e\u90d1\u667a\u90a3\u4e2a\u72af\u89c4\uff0c\u9996\u5148\u90d1\u667a\u5148\u5360\u636e\u8eab\u4f4d\uff0c\u786e\u5b9e\u6709\u4e2a\u5411\u540e\u6325\u624b\u7684\u4fdd\u62a4\u52a8\u4f5c\uff0c\u5439\u72af\u89c4\u4e5f\u8bf4\u5f97\u8fc7\u53bb\u3002\u53ea\u4e0d\u8fc7\u8981\u5439\u5e94\u8be5\u5148\u5439\uff0c\u6700\u540e\u8fdb\u4e86\u7403\u518d\u5439\u5c31\u8bf4\u4e0d\u8fc7\u53bb\u4e86\uff01\u6309\u8fd9\u4e2a\u8282\u594f\uff0c\u6bcf\u5206\u949f\u90fd\u53ef\u80fd\u627e\u5230\u72af\u89c4\u7684\u955c\u5934\uff01\u6700\u540e\u603b\u7ed3\uff0c\u88c1\u5224\u6c34\u5e73\u592a\u4f4e\uff0c\u6ca1\u6709\u4e3b\u89c1\uff0c\u6839\u672c\u6ca1\u7406\u89e3VAR\u7684\u610f\u4e49\uff0c\u6bc1\u4e86\u4e00\u573a\u672c\u8be5\u7cbe\u5f69\u7684\u6bd4\u8d5b\uff01\u8db3\u534f\u88c1\u59d4\u4f1a\u4e5f\u662f\u4e00\u5e2eSB\uff0c\u9009\u88c1\u5224\u592a\u6709\u95ee\u9898\uff01", "up": 134}, {"content": "\u8bf4\u56fd\u5b89\u90a3\u4e2a\u70b9\u7403\u662f\u4e0d\u61c2\u7403\u5c31\u662f\u56fd\u5b89\u7403\u8ff7\uff0c\u90a3\u7403\u9093\u6db5\u6587\u5148\u6345\u5230\u7403\u4e86\uff0c\u800c\u4e14\u52a8\u4f5c\u4e0d\u5927\uff0c\u4e0d\u81f3\u4e8e\u9020\u6210\u5df4\u574e\u5e03\u8dcc\u5012\uff0c\u5df4\u574e\u5e03\u6454\u5012\u662f\u81ea\u5df1\u51b2\u7684\u8fc7\u731b\uff0c\u5931\u53bb\u91cd\u5fc3\u6454\u5012\uff0c\u5982\u679c\u8fd9\u7403\u90fd\u7b97\u70b9\u7403\u6bcf\u573a\u7403\u8d5b\u8981\u52245\uff0c6\u4e2a\u70b9\u7403\uff0c\u4e00\u70b9\u8eab\u4f53\u63a5\u89e6\u4e5f\u80fd\u5224\u70b9\u7403\uff0c\u8fd8\u7ed9\u9ec4\u724c\u66f4\u662f\u65e0\u7a3d\u4e4b\u8c08\u3002", "up": 29}, {"content": "\u8db3\u534f\u7acb\u573a\u975e\u5e38\u660e\u663e\u7684\u4e00\u573a\u4e86\uff1a\u5df4\u574e\u5e03\u5148\u8e29\u4e86\u66fe\u8bda\uff0c\u7136\u540e\u6885\u65b9\u624b\u7403\uff0c\u76f4\u63a5var\u5439\u70b9\u7403\uff1b\u9ad8\u62c9\u7279\u8fdb\u7684\u90a3\u7403\uff0c\u8fd8\u6709\u9093\u6db5\u6587\u7981\u533a\u88ab\u62cc\u5012\uff0c\u53cd\u8fc7\u6765\u5c31\u53ef\u4ee5var\u56de\u6eaf\u53bb\u627e\u4e4b\u524d\u7684\u72af\u89c4\uff1b\u5439\u6389\u5df4\u574e\u5e03\u90a3\u4e2a\u8fdb\u7403\u660e\u663e\u624b\u8098\u52a8\u4f5c\uff0c\u65e2\u7136\u4f60\u5439\u4e86\uff0c\u8fd9\u79cd\u52a8\u4f5c\u51fa\u4e2a\u724c\u4e0d\u5408\u7406\uff1f\u6052\u5927\u8fdb\u7403\u540e\u7acb\u9a6cvar\u653e\u5927\u955c\u627e\u95ee\u9898\uff0c\u8fd9\u79cd\u64cd\u4f5c\u6211\u662f\u95fb\u6240\u672a\u95fb\u3002\u6362\u505a\u67d0\u961f\u5728\u81ea\u5df1\u4e3b\u573a\u8fd9\u6837\uff0c\u53c8\u662f\u4e00\u573a\u7f62\u8d5b\u4e86\u3002", "up": 20}], "2": [{"content": "\u8bf4\u53e5\u5b9e\u8bdd\uff0c\u7b2c\u4e00\u4e2a\u6362\u4eba\u592a\u5931\u8d25\uff0c\u6768\u7acb\u745c\u7684\u7075\u5149\u4e00\u73b0\u62ef\u6551\u4e86\u5361\u5e05\u3002\u540e\u536b\u7ebf\u4e0a\u552f\u4e00\u4e00\u4e2a\u79ef\u6781\u9632\u5b88\u7684\u5c31\u662f\u9093\u6db5\u6587\uff0c\u4ec5\u4ec5\u662f\u56e0\u4e3a\u8fdb\u653b\u4e0d\u5229\u5c31\u64a4\u4e0b\uff0c\u7ed3\u679c\u56de\u5934\u9a6c\u4e0a\u5f205\u5c31\u88ab\u7206\u7a7f\u4e00\u8def\uff0c\u800c\u4e14\u4e34\u8fd1\u7ec8\u573a\u7684\u65f6\u5019\u53c8\u662f\u90a3\u4e00\u8def\u9669\u4e9b\u5bfc\u81f4\u6052\u5927\u60e8\u906d\u7edd\u6740\u3002\u51af\u6f47\u9706\u4e0d\u5e94\u8be5\u7ed9\u4ed6\u90a3\u4e48\u591a\u957f\u4f20\u7684\u7403\u6743\uff0c\u8d28\u91cf\u5dee\u800c\u4e14\u6548\u679c\u4e5f\u5f88\u5dee\uff0c\u5361\u5e05\u4e0d\u5e94\u8be5\u8fc7\u5ea6\u7eb5\u5bb9\u540e\u9632\u7ebf\u4e0a\u7684\u67d0\u4e9b\u5927\u7237", "up": 137}, {"content": "\u5927\u8fde\u4e00\u65b9\u60f3\u8981\u8fdb\u7403\uff0c\u6559\u7ec3\u9700\u8981\u89e3\u96c7\uff0c\u5361\u62c9\u65af\u79d1\u662f\u4e2a\u8fb9\u524d\u536b\u653b\u51fb\u624b\uff0c\u9700\u8981\u6709\u961f\u5458\u914d\u5408\uff0c\u653e\u5230\u950b\u7ebf\u7b49\u4e8e\u5b64\u7acb\u65e0\u63f4\uff0c\u8fd8\u4e0d\u5982\u62c9\u5230\u4e2d\u573a\u4ee5\u4ed6\u7684\u63a7\u7403\u6280\u672f\u5bfb\u6c42\u914d\u5408\uff0c\u79bb\u76d6\u5766\u6253\u8fb9\u8def\u6ca1\u95ee\u9898\u3002\u518d\u4e00\u4e2a\u5927\u8fde\u672c\u571f\u7403\u5458\u5b9e\u8bdd\u8bf4\u6280\u672f\u592a\u7cd9\uff0c\u65e0\u6218\u672f\u914d\u5408\uff0c\u4f20\u7403\u4e0d\u8fc7\u4e09\u811a\u88ab\u65ad\uff0c\u4e3a\u96be\u6559\u7ec3\u7ec4\u65e0\u4eba\u53ef\u7528\u3002\u5982\u679c\u5361\u62c9\u65af\u79d1\u548c\u76d6\u5766\u6700\u9002\u5408\u4e0b\u5bb6\u662f\u6052\u5927\uff0c\u66ff\u6362\u6389\u963f\u5170\u548c\u53e4\u5fb7\u5229\uff0c\u6b63\u597d\u548c\u9ad8\u62c9\u7279\u4e09\u53c9\u621f\uff0c\u4e24\u8fb9\u8def\u7a81\u51fb\u624b\u52a0\u90dc\u6797\u4e3a\u9ad8\u62c9\u7279\u4f20\u70ae\u5f39\uff0c\u4e8e\u6c49\u8d85\u66ff\u8865\uff0c\u5356\u6389\u91d1\u82f1\u6743\uff0c\u4e70\u4e00\u4e2a\u4e2d\u573a\u94c1\u8170\u4e9a\u6d32\u5916\u63f4\u642d\u6863\u9ec4\u535a\u6587\u4e2d\u573a\uff0c\u540e\u573a\u674e\u5b66\u9e4f\uff0c\u51af\u6f47\u9706\uff0c\u9093\u6db5\u6587\uff0c\u5f20\u7433\u8283\u53cau23\u8f6e\u6362\u3002", "up": 9}, {"content": "\u53e4\u5fb7\u5229\uff0c\u90d1\u9f99\uff0c\u4e8e\u6c49\u8d85\uff0c\u4e09\u4eba\u8fd9\u573a\u53d1\u6325\u6709\u70b9\u6b20\u4f73\uff0c\u751a\u81f3\u62ff\u4e0d\u4f4f\u7403\uff0c\u5931\u8bef\u592a\u591a\u3002\u9ad8\u62c9\u7279\u56e0\u4e3a\u90dc\u6797\u7684\u4e24\u6b21\u6253\u98de\u7403\uff0c\u6709\u70b9\u4e0d\u6ee1\uff0c\u81ea\u5df1\u4e5f\u60f3\u5355\u5e72\uff0c\u540e\u6765\u81ea\u5df1\u4f53\u529b\u4e5f\u8ddf\u4e0d\u4e0a\u4e86\u3002\u674e\u5b66\u9e4f\u7684\u5de6\u8def\u8fdb\u653b\u8fd9\u573a\u88ab\u9650\u5236\u4f4f\u4e86\uff0c\u6709\u70b9\u6253\u4e0d\u5f00\u5c40\u9762\u3002\u90dc\u8001\u677f\u524d23\u5206\u949f\uff0c\u4eff\u4f5b\u56de\u5230\u4e86\u5341\u5e74\u524d\uff0c\u9093\u6db5\u6587\u4eca\u5929\u5c31\u662f\u4e03\u5e74\u524d\u7684\u5f205\uff0c\u52a9\u653b\uff0c\u4e0b\u5e95\u4f20\u4e2d\uff0c\u4fe8\u7136\u4e00\u4e2a\u53f3\u8fb9\u524d\u536b\u3002\u6768\u7acb\u745c\u771f\u7684\u8fd8\u9700\u8981\u78e8\u70bc\u4e00\u4e0b\uff0c\u90dc\u6797\uff0c\u4e8e\u6c49\u8d85\u8fd9\u4e9b\u6052\u5927\u56fd\u5b57\u53f7\u7684\u4e2d\u950b\u548c\u524d\u950b\u7ec8\u7a76\u8981\u8001\u53bb\uff0c\u8d76\u7d27\u591a\u5b66\u591a\u7ec3\u591a\u8bf7\u6559\u5440\uff0c\u672a\u6765\u6052\u5927\u7684\u5929\uff0c\u90fd\u5c5e\u4e8e\u4f60\u4eec\u554a\u3002\u516b\u5e74\u6052\u8ff7\u4e00\u679a\u5ba2\u89c2\u8bc4\u7403\uff0c\u4e0d\u59a5\u4e4b\u5904\uff0c\u671b\u6d77\u6db5\u3002", "up": 9}, {"content": "\u518d\u8bf4\u4e0b\u5fc3\u91cc\u611f\u89c9 \u4e09\u540e\u536b\u9635\u5bb9\u5bf9\u4e24\u4e2a\u8fb9\u4e0a\u7684\u540e\u536b\u8981\u6c42\u592a\u5927 \u8fd9\u4e5f\u662f\u4e00\u76f4\u6e34\u671b\u90b9\u6b63\u548c\u5f53\u521d\u9093\u6db5\u6587\u7684\u539f\u56e0 \u50a8\u91d1\u671d\u4e00\u4e2a\u4e4c\u9f99\u5916\u52a0\u62bd\u7b4b \u5f20\u8bda\u8fdb\u653b\u597d\u4e8e\u9632\u5b88 \u4f46\u8fd9\u4e2a\u9635\u5bb9\u4e0d\u6562\u4e0a\u524d\u52a9\u653b \u6216\u8bb8\u662f\u6743\u6b27\u5df4\u8f6e\u4f11\u53c8\u6ca1\u592a\u628a\u4eba\u548c\u653e\u5728\u773c\u91cc \u7d22\u8428\u7684\u4e00\u79cd\u5c1d\u8bd5 \u6bd5\u7adf\u5728\u7d2b\u767e\u5408\u4ed6\u5c31\u662f\u4e09\u540e\u536b\u6218\u672f \u8fd8\u6709 \u5427\u53cb\u4eec \u628a\u91cd\u5fc3\u653e\u5728\u8db3\u7403\u4e0a \u800c\u4e0d\u662f\u82b1\u8fb9\u548c\u55b7\u5b50\u7684\u805a\u96c6\u5730 \u597d\u50cf\u4f60\u771f\u7684\u5f88\u61c2\u7403\u4e00\u6837 \u5404\u6292\u5df1\u89c1\u7684\u5730\u65b9 \u53ef\u4ee5\u8ba8\u8bba \u522b\u4e00\u4e0a\u6765\u5c31\u8fd9\u4e2a\u90a3\u4e2a\u7684 \u4f60\u90a3\u4e48\u5389\u5bb3\u4f60\u600e\u4e48\u4e0d\u53bb\u5f53\u8bc4\u8bba\u5458 \u4e0d\u53bbcctv\u89e3\u8bf4", "up": 6}, {"content": "(1) \u90d1\u9f99\u4e0d\u4f20\uff0c\u5bf9\u672c\u573a\u6bd4\u8d5b\u7684\u5931\u5229\u8981\u4ed8\u76f8\u5f53\u4e00\u90e8\u5206\u8d23\u4efb\uff080\uff1a2 \u8fd8\u6ca1\u90a3\u4e48\u4fdd\u9669\uff0c\u5982\u679c\u662f0\uff1a3 \uff0c\u6d6a\u4e00\u6d6a\u53ef\u4ee5\u63a5\u53d7\uff09\uff082\uff09 \u5927\u5bb6\u5fd8\u4e86\u4e00\u4e2a\u5f88\u91cd\u8981\u7684\u6bd4\u90d1\u9f99\u66f4\u5e94\u8be5\u80cc\u9505\u7684\u4eba\uff1a\u5ed6\u529b\u751f \uff0c\u9093\u6db5\u6587\u7684\u7ea2\u724c+\u70b9\u7403 \u4e3b\u8981\u8d23\u4efb\u5728\u5ed6\u529b\u751f \uff08\u5927\u5bb6\u53ef\u4ee5\u770b\u4e00\u4e0b\u5f55\u50cf\u7ec6\u8282\uff0c\u5bf9\u65b9\u5f00\u8fc7\u6765\u7684\u9ad8\u7a7a\u7403\uff0c\u5ed6\u529b\u751f\u5c31\u7ad9\u5728\u56fd\u5b89\u5916\u63f4\u8eab\u65c1\uff0c\u6ca1\u6709\u4e00\u70b9\u513f\u5e72\u6270\uff0c\u7ed3\u679c\u8ba9\u5bf9\u65b9\u5916\u63f4\u62ff\u7403\u592a\u8f7b\u677e\uff0c\u53d1\u751f\u4e86\u540e\u9762\u7684\u7ea2\u70b9\u5957\u9910\uff09", "up": 5}]};
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
