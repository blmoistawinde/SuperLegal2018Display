var data = {"person_name": "\u60e0\u5bb6\u5eb7", "nicknames": "\u60e0\u5bb6\u5eb7", "aspects": {"\u8d5b\u5b63": 0.7958523319410328, "\u56fd\u5bb6\u961f": 0.3645584529044238, "\u7403\u5458": 0.3328459205684367, "\u53cd\u51fb": 0.27746641958614565, "\u9632\u5b88": 0.6555290029345956, "\u8fdb\u7403": 0.7533750613693566, "\u8fdb\u653b": 0.5719013850844434, "\u5c04\u95e8": 0.1919194042449373, "\u6bd4\u8d5b": 0.3461539738253103, "\u505c\u8d5b": 0.5221315244775645}, "overall_heat": 57.0, "overall_polar": 0.431, "name": "279", "nationality": "\u4e2d\u56fd", "position": "\u524d\u950b", "goal": "6", "assist": "6", "team_name": "\u5929\u6d25\u4ebf\u5229", "name_en": "Hui Jiakang", "age": "29", "height": "178", "weight": "74"};
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
var topic_keywords = {"0": [{"name": "\u60e0\u5bb6\u5eb7", "value": 0.04772613693153424}, {"name": "\u6cf0\u8fbe", "value": 0.020239880059970013}, {"name": "\u8d5b\u5b63", "value": 0.015242378810594702}, {"name": "\u8e22", "value": 0.015242378810594702}, {"name": "\u7403\u5458", "value": 0.012743628185907047}, {"name": "\u9632\u5b88", "value": 0.01024487756121939}, {"name": "\u5e0c\u671b", "value": 0.01024487756121939}, {"name": "\u5e94\u8be5", "value": 0.01024487756121939}, {"name": "\u5c04\u95e8", "value": 0.01024487756121939}, {"name": "\u5916\u63f4", "value": 0.007746126936531735}, {"name": "\u80fd\u529b", "value": 0.007746126936531735}, {"name": "\u7403\u961f", "value": 0.007746126936531735}, {"name": "\u56fd\u5185", "value": 0.007746126936531735}, {"name": "\u53cd\u51fb", "value": 0.007746126936531735}, {"name": "\u8d77\u7801", "value": 0.007746126936531735}, {"name": "\u7403", "value": 0.007746126936531735}, {"name": "\u8fd9\u573a", "value": 0.007746126936531735}, {"name": "\u4e0d\u9519", "value": 0.007746126936531735}, {"name": "\u8fdb\u653b", "value": 0.007746126936531735}, {"name": "\u4eba", "value": 0.007746126936531735}, {"name": "\u5c0f\u9a6c\u54e5", "value": 0.007746126936531735}, {"name": "\u5389\u5bb3", "value": 0.007746126936531735}, {"name": "\u963f\u5947\u59c6\u84ec", "value": 0.007746126936531735}, {"name": "\u961f", "value": 0.005247376311844078}, {"name": "\u4fdd\u6301", "value": 0.005247376311844078}, {"name": "\u62c9", "value": 0.005247376311844078}, {"name": "\u8868\u626c", "value": 0.005247376311844078}, {"name": "\u8868\u73b0", "value": 0.005247376311844078}, {"name": "\u6bd4\u8d5b", "value": 0.005247376311844078}, {"name": "\u4eac\u5b89", "value": 0.005247376311844078}], "1": [{"name": "\u60e0\u5bb6\u5eb7", "value": 0.08950348432055749}, {"name": "\uff01", "value": 0.0350609756097561}, {"name": "\u6cf0\u8fbe", "value": 0.026350174216027873}, {"name": "\u6768\u5e06", "value": 0.017639372822299652}, {"name": "\u56fd\u5bb6\u961f", "value": 0.015461672473867595}, {"name": "\u8d5b\u5b63", "value": 0.01328397212543554}, {"name": "\u8fdb\u7403", "value": 0.01328397212543554}, {"name": "\u597d", "value": 0.011106271777003483}, {"name": "\u73b0\u5728", "value": 0.011106271777003483}, {"name": "\u8868\u73b0", "value": 0.011106271777003483}, {"name": "\u8fdb", "value": 0.011106271777003483}, {"name": "\uff1f", "value": 0.008928571428571428}, {"name": "\u91cc", "value": 0.008928571428571428}, {"name": "\u8e22", "value": 0.008928571428571428}, {"name": "\u4e24\u4e2a", "value": 0.008928571428571428}, {"name": "\u8d8a\u6765\u8d8a", "value": 0.006750871080139373}, {"name": "\u53d7\u4f24", "value": 0.006750871080139373}, {"name": "\u4e4b\u524d", "value": 0.006750871080139373}, {"name": "\u62a5\u9500", "value": 0.006750871080139373}, {"name": "\u4e3b\u529b", "value": 0.006750871080139373}, {"name": "\u76ae", "value": 0.006750871080139373}, {"name": "\u963f\u5947\u59c6\u5f6d", "value": 0.006750871080139373}, {"name": "\u6342", "value": 0.004573170731707318}, {"name": "\u771f\u7684", "value": 0.004573170731707318}, {"name": "\u6342\u8138", "value": 0.004573170731707318}, {"name": "\u52a9\u653b", "value": 0.004573170731707318}, {"name": "\u72b6\u6001", "value": 0.004573170731707318}, {"name": "\u524d", "value": 0.004573170731707318}, {"name": "\u7403\u5458", "value": 0.004573170731707318}, {"name": "\u771f\u6b63", "value": 0.004573170731707318}]};
var topic_summary = {"0": [{"content": "\u6574\u573a\u6bd4\u8d5b\u770b\u4e0b\u6765\uff0c\u53cc\u65b9\u90fd\u6253\u7684\u5f88\u6709\u6b23\u8d4f\u6027\uff0c\u575a\u6301\u5730\u9762\u4f20\u63a7\uff0c\u65e0\u7403\u8dd1\u52a8\u3001\u5957\u8fb9\u3001\u524d\u63d2\u90fd\u770b\u5f97\u51fa\u6765\u6280\u6218\u672f\u6c34\u5e73\u8fd8\u4e0d\u9519\u3002\u800c\u4e14\u53cc\u65b9\u7403\u5458\u4e0d\u5367\u8349\uff0c\u6ca1\u6709\u6076\u52a3\u72af\u89c4\uff0c\u6ca1\u6709\u4e2d\u8d85\u5e38\u89c1\u7684\u4e71\u5f00\u5927\u811a\uff0c\u633a\u597d\u770b\u7684\u3002\u4e0d\u8fc7\u9632\u5b88\u4e24\u8fb9\u505a\u7684\u90fd\u4e0d\u597d\uff0c\u9635\u578b\u6709\u70b9\u677e\u6563\uff0c\u53ef\u80fd\u8fd9\u4e5f\u662f\u4f20\u63a7\u80fd\u6253\u7684\u8d77\u6765\u7684\u539f\u56e0\u5427\u3002\u56fd\u5185\u7403\u5458\u6700\u4f73\u5e94\u8be5\u662f\u60e0\u5bb6\u5eb7", "up": 87}, {"content": "\u6cf0\u8fbe\u8fd9\u8d5b\u5b63\u8fdb\u653b\u6700\u4e3b\u8981\u7684\u53d8\u5316\u5c31\u662f\u60e0\u5bb6\u5eb7\u8fd9\u4e2a\u70b9\uff0c\u8fdb\u6b65\u975e\u5e38\u660e\u663e\uff0c\u7ed9\u4e88\u5916\u63f4\u8db3\u591f\u652f\u63f4\u7684\u540c\u65f6\uff0c\u5c04\u95e8\u4e5f\u80fd\u627e\u5230\u5e93\u8482\u5c3c\u5965\u7684\u5f71\u5b50\u3002\u9632\u5b88\u5927\u5bb6\u6709\u76ee\u5171\u7779\uff0c\u5df2\u4e0d\u518d\u662f\u4e0a\u8d5b\u5b63\u90a3\u652f\u5367\u69fd\u961f\u7684\u8e22\u6cd5\u4e86\u3002\u867d\u7136\u8fd9\u8d5b\u5b63\u8f93\u7684\u4e5f\u6709\u4e0d\u5c11\u573a\uff0c\u4f46\u611f\u89c9\u5176\u5b9e\u573a\u9762\u4e0a\u5e76\u4e0d\u5dee\uff0c\u9664\u4e86\u6052\u5927\u90a3\u79cd\u5f3a\u5916\u63f4\u7403\u961f\uff0c\u5bf9\u4e8e\u5176\u5b83\u7403\u961f\u90fd\u4e0d\u662f\u5f88\u6035\u3002\u5e0c\u671b\u8fd9\u6837\u7684\u6cf0\u8fbe\u53ef\u4ee5\u4e00\u76f4\u4fdd\u6301\u4e0b\u53bb\uff0c\u5e0c\u671b\u60e0\u5bb6\u5eb7\u53ef\u4ee5\u5728\u56fd\u5bb6\u961f\u5d2d\u9732\u5934\u89d2\uff0c\u4e0e\u6b66\u78ca\u7b49\u4eba\u5171\u540c\u94f8\u5efa\u4e2d\u56fd\u8db3\u7403\u65b0\u7684\u5e0c\u671b\u3002", "up": 32}, {"content": "\u8fd9\u573a\u7403\u6cf0\u8fbe\u4e2d\u524d\u573a\u7684\u51e0\u4e2a\u56fd\u5185\u7403\u5458\u8e22\u5f97\u5f88\u4e0d\u9519\uff0c\u5c24\u5176\u662f\u60e0\u5bb6\u5eb7\uff1b\u4e0b\u534a\u573a\u534e\u590f\u8e22\u5f97\u6bd4\u4e0a\u534a\u573a\u597d\u591a\u4e86\uff0c\u867d\u7136\u62c9\u7ef4\u5947\u5931\u70b9\u53ef\u60dc\u4e86\uff0c\u4f46\u5168\u573a\u6765\u8bf4\u5e73\u5c40\u662f\u4e2a\u516c\u5e73\u7684\u7ed3\u679c\uff0c\u5c0f\u9a6c\u54e5\u9632\u5b88\u548c\u8fdb\u653b\u7aef\u90fd\u4e2d\u89c4\u4e2d\u77e9\uff0c\u5e94\u8be5\u8fd8\u5728\u9002\u5e94\u671f\uff0c\u5e0c\u671b\u5c3d\u5feb\u878d\u5165\u7403\u961f\u63d0\u5347\u7403\u961f", "up": 18}, {"content": "\u8bf4\u771f\u7684\u5e73\u65f6\u4e00\u76f4\u89c9\u5f97\u6cf0\u8fbe\u8d8a\u6765\u8d8a\u70c2\uff0c\u8d5b\u524d\u4ee5\u4e3a\u4e5f\u4f1a\u662f\u4eac\u5b89\u5927\u80dc\uff0c\u7ed3\u679c\u770b\u4e86\u5927\u534a\u573a\u6bd4\u8d5b\uff0c\u5e76\u4e0d\u662f\u4eac\u5b89\u8e22\u5f97\u4e0d\u597d\uff0c\u800c\u662f\u8fd9\u573a\u7403\u6cf0\u8fbe\u8868\u73b0\u5b9e\u5728\u975e\u5e38\u51fa\u8272\uff0c\u6559\u7ec3\u9632\u5b88\u53cd\u51fb\u610f\u56fe\u5f88\u660e\u663e\uff0c\u7403\u5458\u7684\u914d\u5408\u4e5f\u662f\u51fa\u4eba\u610f\u6599\uff0c\u53cd\u51fb\u5feb\u901f\u4f20\u9012\uff0c\u7b80\u6d01\u9ad8\u6548\uff0c\u6ca1\u6709\u4eba\u7c98\u7403\uff0c\u5c04\u95e8\u4e5f\u5341\u5206\u6709\u5a01\u80c1\uff0c\u963f\u5947\u59c6\u5f6d\u3001\u674e\u6e90\u4e00\u3001\u60e0\u5bb6\u5eb7\u3001\u7c73\u514b\u5c14\u51e0\u4f4d\u7403\u5458\u90fd\u4ee4\u4eba\u5370\u8c61\u6df1\u523b\uff0c\u5982\u679c\u4fdd\u6301\u53d1\u6325\u7a33\u5b9a\u90a3\u6cf0\u8fbe\u5176\u5b9e\u8d77\u7801\u4e2d\u6e38\u4ee5\u4e0a\u6c34\u5e73\uff0c\u4e0d\u81f3\u4e8e\u8fde\u5e74\u4fdd\u7ea7\u3002", "up": 12}, {"content": "\u60e0\u5bb6\u5eb7\u8fd9\u8d5b\u5b63\u8868\u73b0\u5f88\u62a2\u773c\uff1b\u534e\u590f\u8fd9\u662f\u627e\u5c4e\u7684\u8282\u594f\uff0c\u4e0a\u8d5b\u5b63\u5f00\u59cb\u4e0d\u60dc\u6210\u672c\u6316\u6765\u4efb\u516b\u5343\uff0c\u59dc\u81f4\u9e4f\uff0c\u8d75\u660e\u5251\uff0c\u5f20\u5448\u680b\u7b49\u7b49\u56fd\u5185\u5f3a\u63f4\uff0c\u5916\u63f4\u53c8\u7ee7\u7eed\u5347\u7ea7\u64b8\u6765\u5c0f\u9a6c\u54e5\u5361\u57c3\u6bd4\uff0c\u7ed3\u679c\u8d8a\u8e22\u8d8a\u81ed\uff0c\u4e0a\u5468\u7684\u7ecf\u7406\u6253\u4eba\u4e8b\u4ef6\u770b\u5f97\u51fa\u5e94\u8be5\u662f\u5185\u90e8\u7ba1\u7406\u95ee\u9898\uff0c\u53e6\u5916\u62c9\u7ef4\u5947\u662f\u4ec0\u4e48\u60c5\u51b5\u4e86\uff1f\u5c0f\u9a6c\u54e5\u611f\u89c9\u9664\u4e86\u4e00\u811a\u957f\u4f20\u8fd8\u53ef\u4ee5\u5916\uff0c\u9632\u5b88\u62e6\u622a\u80fd\u529b\u548c\u8986\u76d6\u9762\u79ef\u90fd\u4e0b\u6ed1\u592a\u591a\u4e86", "up": 4}], "1": [{"content": "\u60e0\u5bb6\u5eb7\u53ef\u4ee5\u8fdb\u56fd\u5bb6\u961f \u51b2\u51fb\u529b\u5f88\u5f3a \u540c\u610f\u7684\u70b9****", "up": 312}, {"content": "\u60e0\u5bb6\u5eb7\u8fd9\u5c0f\u4f19\u5b50\u771f\u884c\uff0c\u91cc\u76ae\u8003\u8651\u4e00\u4e0b\u554a", "up": 239}, {"content": "\u4f9d\u7136\u8bb0\u5f97\u963f\u5947\u59c6\u5f6d\u5728\u6b66\u91cc\u5357\u8054\u6253\u7206\u5f20\u7433\u8283\u7684\u753b\u9762\uff0c\u60e0\u5bb6\u5eb7\u5728\u90a3\u4e2a\u533a\u57df\u8d8a\u6765\u8d8a\ud83d\udc2e\u4e86\uff0c\u6cf0\u8fbe\u8fde\u7eed\u4e24\u573a\u597d\u7403\u88ab\u5439\u8d8a\u4f4d\uff0c\u4f46\u4e0a\u573a\u8bef\u5224\u7684\u51b7\u9759\u6512\u4e0b\u7684\u4eba\u54c1\uff0c\u5728\u8fd9\u573a\u5f97\u5230\u4e86\u56de\u62a5\uff01\uff01\uff01", "up": 175}, {"content": "\u4e0d\u5f97\u4e0d\u8bf4\uff0c\u65bd\u5fb7\u5229\u514b\u628a\u7c73\u514b\u5c14\uff0c\u963f\u5947\u59c6\u5f6d\uff0c\u60e0\u5bb6\u5eb7\u8fd9\u4e09\u4eba\u7528\u6d3b\u4e86\uff0c\u53e6\u5916\u5c0f\u5c06\u6768\u5e06\u90a3\u4e2a\u5355\u8f66\u786e\u5b9e\u5e05\u5f97\u4e00\u903c\uff0c\u6cf0\u8fbe\u4eca\u5e74\u786e\u5b9e\u6362\u4e2a\u6d3b\u6cd5\u4e86", "up": 116}, {"content": "\u60e0\u5bb6\u5eb7\u8fd9\u8d5b\u5b63\u72b6\u6001\u4e0d\u9519\u554a\uff0c\u53ef\u4ee5\u8fdb\u56fd\u5bb6\u961f\u8bd5\u8bd5[\u6ed1\u7a3d]", "up": 86}]};
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
