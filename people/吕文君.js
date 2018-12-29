var data = {"person_name": "\u5415\u6587\u541b", "nicknames": "\u5415\u6587\u541b", "aspects": {"\u7403\u5458": 0.6129716429531719, "\u6bd4\u8d5b": 0.6733579845686292, "\u8fdb\u7403": 0.45074868528491296, "\u4e0b\u534a\u573a": 0.5098913960470614, "\u9ec4\u724c": 0.6213550824294088, "\u8d5b\u5b63": 0.7762189885931573, "\u5355\u5200": 0.675970558645808, "\u9632\u5b88": 0.6737523259070206, "\u56fd\u5bb6\u961f": 0.6818464077878936, "\u52a9\u653b": 0.25633894371781835}, "overall_heat": 87.0, "overall_polar": 0.295, "name": "37", "nationality": "\u4e2d\u56fd", "position": "\u524d\u950b", "goal": "6", "assist": "6", "team_name": "\u4e0a\u6d77\u4e0a\u6e2f", "name_en": "Lv Wenjun", "age": "29", "height": "185", "weight": "71"};
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
var topic_keywords = {"0": [{"name": "\u5415\u6587\u541b", "value": 0.059670373312152504}, {"name": "\uff01", "value": 0.02591342335186656}, {"name": "\u6b66\u78ca", "value": 0.02591342335186656}, {"name": "\u88c1\u5224", "value": 0.014992057188244638}, {"name": "\uff1f", "value": 0.013999205718824462}, {"name": "\u7403", "value": 0.009034948371723589}, {"name": "\u8fdb\u7403", "value": 0.00704924543288324}, {"name": "\u5965\u65af\u5361", "value": 0.00704924543288324}, {"name": "\u76f4\u63a5", "value": 0.006056393963463066}, {"name": "\u4e0a\u6e2f", "value": 0.006056393963463066}, {"name": "\u5916\u63f4", "value": 0.006056393963463066}, {"name": "\u6700\u540e", "value": 0.005063542494042891}, {"name": "\u95e8\u5c06", "value": 0.005063542494042891}, {"name": "\u4e00\u4e2a", "value": 0.005063542494042891}, {"name": "\u80e1\u5c14\u514b", "value": 0.005063542494042891}, {"name": "\u770b\u5230", "value": 0.005063542494042891}, {"name": "\u8e22", "value": 0.005063542494042891}, {"name": "\u9f13\u638c", "value": 0.005063542494042891}, {"name": "\u624b\u7403", "value": 0.005063542494042891}, {"name": "\u7403\u5458", "value": 0.005063542494042891}, {"name": "\u9ec4\u724c", "value": 0.005063542494042891}, {"name": "\u57c3\u5c14\u514b\u68ee", "value": 0.004070691024622716}, {"name": "\uff1b", "value": 0.004070691024622716}, {"name": "\u52a9\u653b", "value": 0.004070691024622716}, {"name": "\u5403", "value": 0.004070691024622716}, {"name": "\u6cf0\u8fbe", "value": 0.004070691024622716}, {"name": "\u53d1\u6325", "value": 0.004070691024622716}, {"name": "\u4e0b", "value": 0.004070691024622716}, {"name": "\u5389\u5bb3", "value": 0.004070691024622716}, {"name": "\u5439", "value": 0.004070691024622716}], "1": [{"name": "\u4e0a\u6e2f", "value": 0.024996537875640493}, {"name": "\u5415\u6587\u541b", "value": 0.0215344135161335}, {"name": "\u6052\u5927", "value": 0.018764714028527904}, {"name": "\u6b66\u78ca", "value": 0.01599501454092231}, {"name": "\u7403\u5458", "value": 0.013225315053316715}, {"name": "\u6bd4\u8d5b", "value": 0.007685916078105525}, {"name": "\u597d", "value": 0.006993491206204127}, {"name": "\u8868\u73b0", "value": 0.006993491206204127}, {"name": "\u80e1\u5c14\u514b", "value": 0.006993491206204127}, {"name": "\u8d5b\u5b63", "value": 0.006993491206204127}, {"name": "\u4e0b\u534a\u573a", "value": 0.006301066334302728}, {"name": "\uff1b", "value": 0.006301066334302728}, {"name": "\u4e00\u4e2a", "value": 0.006301066334302728}, {"name": "\u5168\u573a", "value": 0.005608641462401329}, {"name": "\u5965\u65af\u5361", "value": 0.005608641462401329}, {"name": "\u6253", "value": 0.005608641462401329}, {"name": "\u7403\u8ff7", "value": 0.005608641462401329}, {"name": "\u4eba", "value": 0.005608641462401329}, {"name": "\uff01", "value": 0.005608641462401329}, {"name": "\u673a\u4f1a", "value": 0.00491621659049993}, {"name": "\u5e0c\u671b", "value": 0.00491621659049993}, {"name": "\u5e94\u8be5", "value": 0.00491621659049993}, {"name": "\u8fdb\u7403", "value": 0.0042237917185985316}, {"name": "\u4eca\u5e74", "value": 0.0042237917185985316}, {"name": "\u80fd\u529b", "value": 0.0042237917185985316}, {"name": "\u4e00\u76f4", "value": 0.0042237917185985316}, {"name": "\u540e", "value": 0.0042237917185985316}, {"name": "\u8521\u6167\u5eb7", "value": 0.0042237917185985316}, {"name": "\u9632\u5b88", "value": 0.0042237917185985316}, {"name": "\u4e0b", "value": 0.003531366846697133}]};
var topic_summary = {"0": [{"content": "\u6700\u540e\u4e0a\u6e2f\u7403\u5458\u56f4\u653b\u88c1\u5224\uff0c\u5415\u6587\u541b\u8fd8\u63a8\u4e86\u4e00\u628a\uff0c\u7ed3\u679c\u5c31\u62ff\u4e86\u9ec4\u724c\uff0c\u771f\u591f\u7167\u987e\u7684", "up": 583}, {"content": "\u6587\u6b66\u7ec4\u54082\u573a6\u7403\uff01\uff01\uff01\u5415\u6587\u541b\u4e00\u6837100\u5206\uff01", "up": 109}, {"content": "\u4e0d\u8981\u770b\u52a8\u56fe\u4e86\u3002\u3002\u770b\u96c6\u9526\u89c6\u9891\uff0c81\u5206\u949f17\u523019\u79d2\u7684\u6162\u56de\u653e\u89c6\u9891\uff0c\uff0c\u7403\u6253\u5230\u4e86\u6b66\u78ca\u7684\u5de6\u5927\u817f\u4e0a\u90e8\u9760\u8fd1\u809a\u5b50\u90a3\u8fb9\uff0c\u5de6\u624b\u6709\u4e2a\u5f80\u7403\u95e8\u65b9\u5411\u635e\u7403\u7684\u59ff\u52bf\uff0c\u628a\u7403\u5f04\u4e86\u8fdb\u53bb\u3002\u975e\u5e38\u6e05\u695a\u7684\u663e\u793a\u662f\u624b\u7403\u3002\u3002\u4e0d\u662f\u624b\u7403\u4e0d\u53ef\u80fd\u8fdb\u3002\u3002\u3002\u8fd8\u6709\uff0c\u8fd9\u4e2a\u7403\u5728\u5415\u6587\u541b\u5934\u7403\u77ac\u95f4\uff0c\u6b66\u78ca\u662f\u8d8a\u4f4d\u4f4d\u7f6e\uff01\u4e25\u683c\u6765\u8bb2\uff0c\u8fd9\u662f\u4e2a\u8d8a\u4f4d\uff0c\u90fd\u4e0d\u7528\u8003\u8651\u662f\u4e0d\u662f\u624b\u7403\uff01", "up": 20}, {"content": "\u6211\u770b\u5230\u8d5b\u540e\u5415\u6587\u541b\u671d\u88c1\u5224\u9f13\u638c\u4e86\u3002\u4f1a\u8ffd\u7f5a\u5417\uff1f", "up": 14}, {"content": "\u6ca1\u4eba\u5938\u4e0b\u5415\u6587\u541b\u561b\uff0c\u5f80\u524d\u9886\u90a3\u4e0b\u52a0\u6a2a\u7a7f\u90fd\u5f88\u51b7\u9759\u554a\uff0c\u8fd9\u8d5b\u5b63\u90fd\u6210\u8d85\u7ea7\u66ff\u8865\u4e86\uff01", "up": 13}], "1": [{"content": "\u81ea\u4ece\u5415\u6587\u541b\u8bf4\u5b8c\u4ed6\u4eca\u5e74\u8fd8\u6ca1\u8d25\u8fc7\u4e4b\u540e \u4e0a\u6e2f1\u5e732\u8d1f", "up": 1011}, {"content": "\u4e2d\u7acb\u7403\u8ff7\uff0c\u8bf4\u51e0\u70b9\uff0c1.\u90dc\u6797\u5168\u573a\u90fd\u5728\u5e26\u7740\u60c5\u7eea\u6bd4\u8d5b\uff0c\u8ddf\u88c1\u5224\u53d1\u813e\u6c14\uff0c\u5982\u679c\u6709\u4e0d\u516c\u5e73\u5224\u7f5a\uff0c\u5e94\u8be5\u7528\u8fdb\u7403\u56de\u51fb\uff0c2.\u6052\u5927\u7403\u8ff7\u81ea\u4ece\u4e0a\u6b21\u4e0a\u6e2f\u6218\u5e73\u540e\u4e00\u76f4\u5230\u8d5b\u524d\uff0c\u4e00\u76f4\u662f\u672c\u573a\u6bd4\u8d5b\u5fc5\u80dc\u7684\u611f\u89c9\uff0c\u4ee5\u540e\u5e0c\u671b\u7403\u8ff7\u80fd\u51b7\u9759\u4e00\u70b9\uff0c\u5c0a\u91cd\u6bcf\u4e00\u4e2a\u5bf9\u624b\uff0c3.\u4e0a\u6e2f\u7684\u4e94\u4e2a\u8fdb\u7403\uff0c\u5916\u63f4\u53ea\u8fdb\u4e86\u4e00\u4e2a\u70b9\u7403\uff0c\u672c\u571f\u7403\u5458\u8868\u73b0\u6bd4\u6052\u5927\u597d\u592a\u591a\uff0c4.\u4e0a\u6e2f\u5168\u573a\u6218\u672f\u7eaa\u5f8b\u6027\u66f4\u5f3a\uff0c\u4e25\u9632\u53cd\u51fb\uff0c\u524d\u573a\u7403\u5458\u5415\u6587\u541b\u6b66\u78ca\u4e24\u4e2a\u7981\u533a\u53cd\u590d\u5954\u8dd1\uff0c\u653b\u9632\u4e24\u7aef\u8d21\u732e\u5f88\u5927\uff0c\u53cd\u89c2\u6052\u5927\uff0c\u5728\u4e3b\u573a\u5168\u573a\u5954\u8dd1\u8ddd\u79bb\u4e0d\u5982\u5ba2\u961f\uff0c\u5e94\u8be5\u53cd\u601d\uff0c5.\u6052\u5927\u534a\u573a\u9886\u5148\uff0c\u60f9\u4e0d\u8d77\u7684\u4e0b\u534a\u573a\u5c45\u7136\u53ea\u8fdb\u4e86\u4e00\u4e2a\u70b9\u7403\uff0c\u4e0b\u534a\u573a\u8868\u73b0\u5728\u597d\uff0c6.\u795d\u8d3a\u4e0a\u6e2f\u961f\uff0c\u8fd9\u5e2e\u7403\u5458\u78e8\u5408\u4e86\u5f88\u4e45\uff0c\u5e94\u8be5\u51fa\u6210\u7ee9\u4e86\uff0c\u4e0a\u4e2a\u8d5b\u5b63\u8d1f\u9762\u65b0\u95fb\u5f88\u591a\uff0c\u8fd9\u4e2a\u8d5b\u5b63\u7a33\u624e\u7a33\u6253\uff0c\u51e0\u573a\u786c\u4ed7\u5173\u952e\u6218\u8868\u73b0\u51fa\u8272\uff0c\u6b66\u78ca\u5728\u4f17\u591a\u5916\u63f4\u7684\u5305\u56f4\u4e2d\u4e00\u9a91\u5c18\uff0c\u4e0a\u6e2f\u51a0\u519b\u65e0\u53ef\u4e89\u8bae\uff0c\u5b9e\u81f3\u540d\u5f52\u3002", "up": 477}, {"content": "\u4e00\u5207\u7684\u4e00\u5207\u8fd8\u5f97\u4ece\u5415\u6587\u541b\u8bf4\u5b8c\u6211\u4eca\u5e74\u8fd8\u6ca1\u8d25\u8fc7\u8bf4\u8d77", "up": 63}, {"content": "\u90fd\u8bf4\u6b66\u78ca\u4e0b\u8f6e\u505c\u8d5b\uff0c\u5176\u5b9e\u5bf9\u4e0a\u6e2f\u5e76\u4e0d\u662f\u574f\u4e8b\uff0c\u6b66\u78ca3\u9ec4\uff0c\u8fd8\u5269\u8fd9\u4e48\u591a\u573a\u6bd4\u8d5b\uff0c\u4e0d\u62ff\u724c\u9ec4\u724c\u7684\u6982\u7387\u662f\u5f88\u5c0f\u7684\uff0c\u6240\u4ee5\u4e00\u5b9a\u8981\u627e\u4e2a\u673a\u4f1a\u628a\u9ec4\u724c\u6e05\u6389\uff0c\u4e0b\u8f6e\u4e0a\u6e2f\u4e3b\u573a\u5bf9\u5efa\u4e1a\uff0c\u662f\u4e00\u4e2a\u4e0d\u9519\u7684\u9009\u62e9\uff0c\u4e07\u4e00\u78b0\u5230\u6253\u6052\u5927\u56fd\u5b89\u9c81\u80fd\u662f\u505c\u8d5b\u5bf9\u4e0a\u6e2f\u662f\u4e0d\u5229\u7684\uff0c\u4f55\u51b5\u73b0\u5728\u5415\u6587\u541b\u7684\u72b6\u6001\u4e5f\u5f88\u597d\uff0c\u6240\u4ee5\u8fd9\u5f20\u724c\u4e5f\u8bb8\u662f\u4e0a\u6e2f\u6218\u7565\u6027\u53bb\u62ff\u7684", "up": 61}, {"content": "\u4e2d\u7acb\u7403\u8ff7\uff0c\u8bf4\u51e0\u70b9\uff0c1.\u90dc\u6797\u5168\u573a\u90fd\u5728\u5e26\u7740\u60c5\u7eea\u6bd4\u8d5b\uff0c\u8ddf\u88c1\u5224\u53d1\u813e\u6c14\uff0c\u5982\u679c\u6709\u4e0d\u516c\u5e73\u5224\u7f5a\uff0c\u5e94\u8be5\u7528\u8fdb\u7403\u56de\u51fb\uff0c2.\u6052\u5927\u7403\u8ff7\u81ea\u4ece\u4e0a\u6b21\u4e0a\u6e2f\u6218\u5e73\u540e\u4e00\u76f4\u5230\u8d5b\u524d\uff0c\u4e00\u76f4\u662f\u672c\u573a\u6bd4\u8d5b\u5fc5\u80dc\u7684\u611f\u89c9\uff0c\u4ee5\u540e\u5e0c\u671b\u7403\u8ff7\u80fd\u51b7\u9759\u4e00\u70b9\uff0c\u5c0a\u91cd\u6bcf\u4e00\u4e2a\u5bf9\u624b\uff0c3.\u4e0a\u6e2f\u7684\u4e94\u4e2a\u8fdb\u7403\uff0c\u5916\u63f4\u53ea\u8fdb\u4e86\u4e00\u4e2a\u70b9\u7403\uff0c\u672c\u571f\u7403\u5458\u8868\u73b0\u6bd4\u6052\u5927\u597d\u592a\u591a\uff0c4.\u4e0a\u6e2f\u5168\u573a\u6218\u672f\u7eaa\u5f8b\u6027\u66f4\u5f3a\uff0c\u4e25\u9632\u53cd\u51fb\uff0c\u524d\u573a\u7403\u5458\u5415\u6587\u541b\u6b66\u78ca\u4e24\u4e2a\u7981\u533a\u53cd\u590d\u5954\u8dd1\uff0c\u653b\u9632\u4e24\u7aef\u8d21\u732e\u5f88\u5927\uff0c\u53cd\u89c2\u6052\u5927\uff0c\u5728\u4e3b\u573a\u5168\u573a\u5954\u8dd1\u8ddd\u79bb\u4e0d\u5982\u5ba2\u961f\uff0c\u5e94\u8be5\u53cd\u601d\uff0c5.\u6052\u5927\u534a\u573a\u9886\u5148\uff0c\u60f9\u4e0d\u8d77\u7684\u4e0b\u534a\u573a\u5c45\u7136\u53ea\u8fdb\u4e86\u4e00\u4e2a\u70b9\u7403\uff0c\u4e0b\u534a\u573a\u8868\u73b0\u4e0d\u597d\uff0c6.\u795d\u8d3a\u4e0a\u6e2f\u961f\uff0c\u8fd9\u5e2e\u7403\u5458\u78e8\u5408\u4e86\u5f88\u4e45\uff0c\u5e94\u8be5\u51fa\u6210\u7ee9\u4e86\uff0c\u4e0a\u4e2a\u8d5b\u5b63\u8d1f\u9762\u65b0\u95fb\u5f88\u591a\uff0c\u8fd9\u4e2a\u8d5b\u5b63\u7a33\u624e\u7a33\u6253\uff0c\u51e0\u573a\u786c\u4ed7\u5173\u952e\u6218\u8868\u73b0\u51fa\u8272\uff0c\u6b66\u78ca\u5728\u4f17\u591a\u5916\u63f4\u7684\u5305\u56f4\u4e2d\u4e00\u9a91\u5c18\uff0c\u4e0a\u6e2f\u51a0\u519b\u65e0\u53ef\u4e89\u8bae\uff0c\u5b9e\u81f3\u540d\u5f52", "up": 41}]};
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
