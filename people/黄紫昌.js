var data = {"person_name": "\u9ec4\u7d2b\u660c", "nicknames": "\u9ec4\u7d2b\u660c", "aspects": {"\u7403\u5458": 0.5728182677393989, "\u8fdb\u7403": 0.5765803009297666, "\u6bd4\u8d5b": 0.5971407122383029, "\u56fd\u5bb6\u961f": 0.49841035012631996, "\u8d5b\u5b63": 0.6891717929342687, "\u5916\u63f4": 0.5950287854682302, "\u7403\u8ff7": 0.678319462787015, "\u8db3\u7403": 0.7771651289805783, "\u5c04\u95e8": 0.49238175107162835, "\u8fdb\u653b": 0.7958452273039411}, "overall_heat": 567.0, "overall_polar": 0.633, "name": "202", "nationality": "\u4e2d\u56fd", "position": "\u524d\u950b", "goal": "5", "assist": "3", "team_name": "\u6c5f\u82cf\u82cf\u5b81", "name_en": "Huang Zichang", "age": "21", "height": "170", "weight": "69"};
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
var topic_keywords = {"0": [{"name": "\u9ec4\u7d2b\u660c", "value": 0.07424020505309409}, {"name": "\uff01", "value": 0.031215671915049432}, {"name": "\u5389\u5bb3", "value": 0.01839985353350421}, {"name": "\u7279\u8c22\u62c9", "value": 0.0129073599414134}, {"name": "\u82cf\u5b81", "value": 0.0129073599414134}, {"name": "\u597d", "value": 0.0119919443427316}, {"name": "\u76f4\u64ad", "value": 0.011076528744049798}, {"name": "\u5439", "value": 0.010161113145367997}, {"name": "\u9632\u5b88", "value": 0.009245697546686195}, {"name": "\u6bd4\u8d5b", "value": 0.00649945075064079}, {"name": "\u4eca\u5929", "value": 0.00649945075064079}, {"name": "\u6ed1\u7a3d", "value": 0.00649945075064079}, {"name": "\u7403\u8ff7", "value": 0.005584035151958989}, {"name": "\u76f4\u63a5", "value": 0.005584035151958989}, {"name": "\u5144\u5f1f", "value": 0.004668619553277187}, {"name": "\u8bf7", "value": 0.004668619553277187}, {"name": "\u524d\u573a", "value": 0.004668619553277187}, {"name": "\u518d", "value": 0.004668619553277187}, {"name": "\u6c5f\u82cf", "value": 0.004668619553277187}, {"name": "\u4e00\u4e2a", "value": 0.004668619553277187}, {"name": "\u52a0\u6cb9", "value": 0.004668619553277187}, {"name": "\u8e22\u7403", "value": 0.004668619553277187}, {"name": "\u63a8", "value": 0.0037532039545953855}, {"name": "\u95e8\u5c06", "value": 0.0037532039545953855}, {"name": "\u7403", "value": 0.0037532039545953855}, {"name": "\u8fd9\u573a", "value": 0.0037532039545953855}, {"name": "\u516b\u6212", "value": 0.0037532039545953855}, {"name": "\u4e00\u6ce2", "value": 0.0037532039545953855}, {"name": "\u70b9\u7403", "value": 0.0037532039545953855}, {"name": "\u4e2d\u573a", "value": 0.0037532039545953855}], "1": [{"name": "\u9ec4\u7d2b\u660c", "value": 0.05726187515543397}, {"name": "\u82cf\u5b81", "value": 0.01622730664013927}, {"name": "\u6b66\u78ca", "value": 0.0106316836607809}, {"name": "\uff01", "value": 0.0106316836607809}, {"name": "\u6bd4\u8d5b", "value": 0.009388211887590151}, {"name": "\uff1f", "value": 0.009388211887590151}, {"name": "\u7279\u8c22\u62c9", "value": 0.008766476000994776}, {"name": "\u8e22", "value": 0.008144740114399402}, {"name": "\u5e0c\u671b", "value": 0.008144740114399402}, {"name": "\u7403\u5458", "value": 0.008144740114399402}, {"name": "\u8d5b\u5b63", "value": 0.007523004227804028}, {"name": "\u7403\u8ff7", "value": 0.007523004227804028}, {"name": "\u673a\u4f1a", "value": 0.007523004227804028}, {"name": "\u4e2d\u56fd", "value": 0.006279532454613279}, {"name": "\u4eba", "value": 0.006279532454613279}, {"name": "\u8fd9\u573a", "value": 0.006279532454613279}, {"name": "\u57fa\u8036", "value": 0.005657796568017906}, {"name": "\u559c\u6b22", "value": 0.005657796568017906}, {"name": "\u524d\u573a", "value": 0.005657796568017906}, {"name": "\u56fd\u5bb6\u961f", "value": 0.005657796568017906}, {"name": "\u535a\u963f", "value": 0.005657796568017906}, {"name": "\u5df2\u7ecf", "value": 0.0050360606814225314}, {"name": "\u5434\u66e6", "value": 0.0050360606814225314}, {"name": "\u52a0\u6cb9", "value": 0.0050360606814225314}, {"name": "\u597d", "value": 0.0050360606814225314}, {"name": "\u5409\u7fd4", "value": 0.004414324794827157}, {"name": "\u4e2d\u8d85", "value": 0.004414324794827157}, {"name": "\u8db3\u7403", "value": 0.004414324794827157}, {"name": "\u6280\u672f", "value": 0.004414324794827157}, {"name": "\u770b\u5230", "value": 0.004414324794827157}], "2": [{"name": "\u9ec4\u7d2b\u660c", "value": 0.07593089763044239}, {"name": "\uff01", "value": 0.032741916656939415}, {"name": "\u82cf\u5b81", "value": 0.02282012373059414}, {"name": "\uff1f", "value": 0.009980156414147309}, {"name": "\u4e0d\u9519", "value": 0.009980156414147309}, {"name": "\u7403\u5458", "value": 0.009396521536127}, {"name": "\u8e22", "value": 0.008812886658106688}, {"name": "\u8fd9\u573a", "value": 0.008812886658106688}, {"name": "\u97e6\u4e16\u8c6a", "value": 0.008812886658106688}, {"name": "\u8d5b\u5b63", "value": 0.008229251780086377}, {"name": "\u5916\u63f4", "value": 0.008229251780086377}, {"name": "\u8fdb\u7403", "value": 0.007645616902066067}, {"name": "U23", "value": 0.007061982024045756}, {"name": "\u6bd4\u8d5b", "value": 0.007061982024045756}, {"name": "\u518d", "value": 0.007061982024045756}, {"name": "\u5e0c\u671b", "value": 0.007061982024045756}, {"name": "\u5389\u5bb3", "value": 0.006478347146025446}, {"name": "\u7cbe\u5f69", "value": 0.006478347146025446}, {"name": "\u592a", "value": 0.005894712268005135}, {"name": "\u4eba", "value": 0.005894712268005135}, {"name": "\u4e00\u4e2a", "value": 0.005311077389984825}, {"name": "\u52a0\u6cb9", "value": 0.005311077389984825}, {"name": "\u771f\u7684", "value": 0.005311077389984825}, {"name": "\u8868\u73b0", "value": 0.005311077389984825}, {"name": "\u6b66\u78ca", "value": 0.004727442511964514}, {"name": "\u524d\u9014", "value": 0.004727442511964514}, {"name": "\u5e94\u8be5", "value": 0.004727442511964514}, {"name": "\u89c9\u5f97", "value": 0.004727442511964514}, {"name": "\u672a\u6765", "value": 0.004727442511964514}, {"name": "\u725b", "value": 0.004143807633944204}], "3": [{"name": "\u9ec4\u7d2b\u660c", "value": 0.06213374698379868}, {"name": "\uff01", "value": 0.03628059289900034}, {"name": "\u8fdb\u7403", "value": 0.01645984143398828}, {"name": "\u5c04\u95e8", "value": 0.009565667011375387}, {"name": "\u7403", "value": 0.008703895208548775}, {"name": "\u672a\u6765", "value": 0.008703895208548775}, {"name": "\u4eba", "value": 0.007842123405722164}, {"name": "\u4e00\u4e2a", "value": 0.007842123405722164}, {"name": "\u5439", "value": 0.007842123405722164}, {"name": "\uff1f", "value": 0.006980351602895552}, {"name": "\u5389\u5bb3", "value": 0.006118579800068941}, {"name": "\u52a9\u653b", "value": 0.006118579800068941}, {"name": "\u5916\u63f4", "value": 0.006118579800068941}, {"name": "\u597d", "value": 0.006118579800068941}, {"name": "\u7b11", "value": 0.006118579800068941}, {"name": "\u5434\u66e6", "value": 0.005256807997242329}, {"name": "\u5409\u7965", "value": 0.005256807997242329}, {"name": "\u54ed", "value": 0.005256807997242329}, {"name": "\u56fd\u5bb6\u961f", "value": 0.005256807997242329}, {"name": "\u4f20\u7403", "value": 0.005256807997242329}, {"name": "\u8d8a\u4f4d", "value": 0.005256807997242329}, {"name": "\u5c81", "value": 0.005256807997242329}, {"name": "\u5c0f", "value": 0.005256807997242329}, {"name": "\u52a0\u6cb9", "value": 0.005256807997242329}, {"name": "\u5e0c\u671b", "value": 0.005256807997242329}, {"name": "\u6700\u4f73", "value": 0.005256807997242329}, {"name": "\u672c\u573a", "value": 0.005256807997242329}, {"name": "21", "value": 0.004395036194415718}, {"name": "\u771f", "value": 0.004395036194415718}, {"name": "\u6bd4\u8d5b", "value": 0.004395036194415718}], "4": [{"name": "\u9ec4\u7d2b\u660c", "value": 0.050764695043302006}, {"name": "\uff01", "value": 0.018518518518518517}, {"name": "\u7403\u5458", "value": 0.014833241201400406}, {"name": "\u5e0c\u671b", "value": 0.013911921872120876}, {"name": "\uff1f", "value": 0.012990602542841347}, {"name": "\u56fd\u5bb6\u961f", "value": 0.011147963884282292}, {"name": "\u82cf\u5b81", "value": 0.011147963884282292}, {"name": "u23", "value": 0.011147963884282292}, {"name": "\u8db3\u7403", "value": 0.010226644555002763}, {"name": "\u4e2d\u56fd", "value": 0.010226644555002763}, {"name": "\u8fdb", "value": 0.008384005896443706}, {"name": "\u653f\u7b56", "value": 0.008384005896443706}, {"name": "\u5e74\u8f7b", "value": 0.00654136723788465}, {"name": "U23", "value": 0.005620047908605122}, {"name": "\u56fd\u5185", "value": 0.005620047908605122}, {"name": "\u770b\u5230", "value": 0.005620047908605122}, {"name": "\u5916\u63f4", "value": 0.004698728579325594}, {"name": "\u53d1\u73b0", "value": 0.0037774092500460653}, {"name": "\u6c34\u5e73", "value": 0.0037774092500460653}, {"name": "\u4ee5\u540e", "value": 0.0037774092500460653}, {"name": "\u4e0d\u9519", "value": 0.0037774092500460653}, {"name": "\u5e74", "value": 0.0037774092500460653}, {"name": "\u6bd4\u8d5b", "value": 0.0037774092500460653}, {"name": "\u4ee5\u524d", "value": 0.0037774092500460653}, {"name": "\u52a0\u6cb9", "value": 0.0037774092500460653}, {"name": "\u97e6\u4e16\u8c6a", "value": 0.0037774092500460653}, {"name": "\u8868\u73b0", "value": 0.0037774092500460653}, {"name": "\u5f3a", "value": 0.0037774092500460653}, {"name": "\u8db3\u534f", "value": 0.0037774092500460653}, {"name": "\u8054\u8d5b", "value": 0.0037774092500460653}], "5": [{"name": "\u9ec4\u7d2b\u660c", "value": 0.06497567755385684}, {"name": "\u7b11", "value": 0.017488996988649527}, {"name": "\u54ed", "value": 0.017488996988649527}, {"name": "\uff01", "value": 0.01053972666203382}, {"name": "\u77e5\u9053", "value": 0.009381514940931202}, {"name": "\u76f4\u64ad", "value": 0.009381514940931202}, {"name": "\u82cf\u5b81", "value": 0.009381514940931202}, {"name": "\u56fd\u5bb6\u961f", "value": 0.008223303219828584}, {"name": "\u597d", "value": 0.007065091498725967}, {"name": "\u516c\u91cc", "value": 0.007065091498725967}, {"name": "\u8dd1\u52a8", "value": 0.007065091498725967}, {"name": "\uff1f", "value": 0.007065091498725967}, {"name": "\u5e0c\u671b", "value": 0.00590687977762335}, {"name": "\u7403\u5458", "value": 0.00590687977762335}, {"name": "\u8d5b\u5b63", "value": 0.00590687977762335}, {"name": "\u8db3\u534f", "value": 0.004748668056520732}, {"name": "\u6700\u4f73", "value": 0.004748668056520732}, {"name": "\u673a\u4f1a", "value": 0.004748668056520732}, {"name": "\u4e00\u4e07", "value": 0.004748668056520732}, {"name": "\u770b\u5230", "value": 0.004748668056520732}, {"name": "\u9881\u5956", "value": 0.004748668056520732}, {"name": "\u5fae\u7b11", "value": 0.004748668056520732}, {"name": "u23", "value": 0.004748668056520732}, {"name": "\u6342\u8138", "value": 0.004748668056520732}, {"name": "\u4e0a\u573a", "value": 0.003590456335418115}, {"name": "\u65f6", "value": 0.003590456335418115}, {"name": "\u4e00\u8f6e", "value": 0.003590456335418115}, {"name": "\u6570\u636e", "value": 0.003590456335418115}, {"name": "\u8bf4\u660e", "value": 0.003590456335418115}, {"name": "\u5168\u961f", "value": 0.003590456335418115}], "6": [{"name": "\uff01", "value": 0.10027326552299984}, {"name": "\u9ec4\u7d2b\u660c", "value": 0.08433277668134202}, {"name": "\uff1f", "value": 0.018293608623045392}, {"name": "\u52a0\u6cb9", "value": 0.01298011234249279}, {"name": "\u7403\u5458", "value": 0.011461970548049186}, {"name": "\u76f4\u64ad", "value": 0.010702899650827387}, {"name": "U23", "value": 0.009943828753605586}, {"name": "\u4e2d\u56fd", "value": 0.009184757856383785}, {"name": "\u6700\u4f73", "value": 0.009184757856383785}, {"name": "\u725b", "value": 0.009184757856383785}, {"name": "\u4e00\u4e07\u5757", "value": 0.008425686959161984}, {"name": "\u903c", "value": 0.007666616061940184}, {"name": "\u597d", "value": 0.006148474267496583}, {"name": "\u6052\u5927", "value": 0.006148474267496583}, {"name": "\u9ec4", "value": 0.005389403370274783}, {"name": "\u97e6\u4e16\u8c6a", "value": 0.005389403370274783}, {"name": "\u82cf\u5b81", "value": 0.004630332473052982}, {"name": "\u674e\u9704\u9e4f", "value": 0.004630332473052982}, {"name": "\u559c\u6b22", "value": 0.004630332473052982}, {"name": "\u5439", "value": 0.004630332473052982}, {"name": "\u52a9\u5a01", "value": 0.004630332473052982}, {"name": "\u4eca\u5929", "value": 0.003871261575831182}, {"name": "\u94b1", "value": 0.003871261575831182}, {"name": "\u7403\u8ff7", "value": 0.003871261575831182}, {"name": "\u7ee7\u7eed", "value": 0.003871261575831182}, {"name": "\u8fdb\u7403", "value": 0.003871261575831182}, {"name": "\u8c22\u8c22", "value": 0.003871261575831182}, {"name": "\u4e00\u4e2a", "value": 0.003871261575831182}, {"name": "10", "value": 0.003871261575831182}, {"name": "\u6253\u94b1", "value": 0.003871261575831182}]};
var topic_summary = {"0": [{"content": "\u9ec4\u7d2b\u660c\u5e26\u6765\u4e00\u6ce2\u4e2d\u7acb\u7403\u8ff7\u770b\u6c5f\u82cf\u961f\u6bd4\u8d5b", "up": 481}, {"content": "\u82cf\u5b81\u8fd9\u573a\u6bd4\u8d5b\u628a\u4e2d\u573a\u63a7\u5236\u4f4f\u4e86\uff0c\u6709\u4eba\u8bf4\u90fd\u662f\u5f00\u5927\u811a\u3002\u82cf\u5b81\u524d\u950b\u4e00\u4e2a\u7279\u8c22\u62c9\u4e00\u4e2a\u9ec4\u7d2b\u660c\u8fd8\u6709\u540e\u6765\u4e0a\u6765\u7684\u6d77\u7c73\u63d0\u90fd\u662f\u901f\u5ea6\u578b\u7684\uff0c\u627e\u8eab\u540e\u80af\u5b9a\u6548\u679c\u597d\u554a\u3002\u5c31\u8ddf\u5fb7\u62c9\u7518\u90a3\u65f6\u5019\u653e\u624b\u53cd\u51fb\u4e00\u6837\u3002\u7ed9\u9ec4\u7d2b\u660c\u7684\u62fc\u52b2\u62539\u5206\uff0c\u9ad8\u5929\u610f\u4e0d\u51f8\u524d\u6253\u4e2d\u573a\u6548\u679c\u5f88\u597d\u8bf6\u3002\u82cf\u5b81\u52a0\u6cb9\uff0c\u6253\u51fa\u9752\u6625\u98ce\u66b4\u5427", "up": 390}, {"content": "\u4f60\u4eec\u90fd\u5728\u5439\u9ec4\u7d2b\u660c\u7684\u65f6\u5019\uff01\u6211\u60f3\u5439\u4e00\u6ce2\u5357\u4eac\u5965\u4f53\u7684\u573a\u5730\uff01\u8349\u76ae\uff01\u8fd8\u6709\u4e0b\u8fd9\u4e48\u5927\u7684\u96e8\uff0c\u6e17\u6c34\u529f\u80fd\u4e5f\u7279\u522b\u597d\uff01\u8fd9\u573a\u6bd4\u8d5b\uff0c\u5168\u7403\u76f4\u64ad\uff0c\u573a\u5730\u7ed9\u54b1\u4e2d\u8d85\u6da8\u8138\uff01\uff01", "up": 306}, {"content": "\u8d5b\u524d\u8bf4\u9ec4\u7d2b\u660c\u8fdb\u7403\u7684\u90a3\u4f4d\u5144\u5f1f\u51fa\u6765\u89e3\u91ca\u4e00\u4e0b\u3002", "up": 303}, {"content": "\u56fd\u5b89\u7403\u8ff7\u8868\u793a\u5bf9\u65b9\u9ec4\u7d2b\u660c\u6709\u70b9\u5916\u63f4\u7684\u67b6\u52bf\uff0c\u70b9\u7403\u70b9\u90a3\u811a\uff0c\u90fd\u611f\u89c9\u8fdb\u4e86\u3002\u52a0\u6cb9", "up": 291}], "1": [{"content": "\u6211\u662f\u5e7f\u4e1c\u7403\u8ff7\uff0c\u4f46\u662f\u6211\u7279\u522b\u559c\u6b22\u9ec4\u7d2b\u660c\uff0c\u4e0d\u77e5\u9053\u662f\u4e0d\u662f\u6211\u56e0\u4e3a\u6211\u4eec\u201c\u5e7f\u4e1c\u4eba\u559c\u6b22\u5403\u798f\u5efa\u4eba\u7684\u539f\u56e0\u201d\uff0c\u8fd9\u4e2a\u8d5b\u5b63\u82cf\u5b81\u7684\u6bd4\u8d5b\u662f\u4e00\u573a\u4e0d\u843d\uff0c\u9ec4\u7d2b\u660c\u8fd9\u79cd\u6709\u7075\u6c14\u7684\u7403\u5458\u771f\u662f\u8d8a\u770b\u8d8a\u559c\u6b22", "up": 521}, {"content": "\u9ec4\u7d2b\u660c\u662f\u56fd\u8db3\u672a\u6765\u8fdb\u653b\u625b\u5927\u65d7\u7684\uff0c\u5e0c\u671b\u53ef\u4ee5\u4e00\u76f4\u4fdd\u6301\u4e0b\u53bb \u4e0d\u9a84\u4e0d\u8e81\uff01\u52a0\u6cb9\u5427", "up": 385}, {"content": "\u8fd9\u573a\u7279\u8c22\u62c9\u4f24\uff0c\u5e15\u83b1\u5854\u505c\uff0c\u9ec4\u7d2b\u660c\u88ab\u62bd\u8c03\uff0c\u82cf\u5b81\u5b9e\u529b\u5927\u6253\u6298\u6263\uff0c\u51ed\u501f\u5168\u961f\u52aa\u529b\uff0c\u52a0\u4e0a\u9177\u6691\u4e2d\u4e0d\u505c\u7684\u5954\u8dd1\uff0c\u9006\u8f6c\u8d62\u5f97\u6bd4\u8d5b \u503c\u5f97\u8868\u626c", "up": 216}, {"content": "\u7279\u8c22\u62c9\u771f\u7684\u5f3a\uff0c\u535a\u963f\u57fa\u8036\u9002\u5408\u82cf\u5b81\uff0c\u9ec4\u7d2b\u660c\u8fd8\u9700\u8981\u65f6\u95f4\u3002\u4e2a\u4eba\u89c2\u70b9\u3002", "up": 215}, {"content": "\u660e\u5e74\u4e9a\u6d32\u676f\u5e94\u8be5\u5e26\u4e0a\u9ec4\u7d2b\u660c\uff0c\u4e2d\u56fd\u8db3\u7403\u672a\u6765\u4e3b\u529b\u4e4b\u4e00\uff0c\u4e0d\u5439\u8fdb\u7403\uff0c\u5c31\u770b\u5168\u573a\u98de\u5954\u7684\u7cbe\u795e\u3002", "up": 130}], "2": [{"content": "\u4e0d\u7528\u73a9\u4e86\uff0c\u9ec4\u7d2b\u660c\u5df2\u7ecf\u63d0\u524d\u9884\u8ba2\u672c\u8d5b\u5b63\u6700\u4f73U23\uff0c\u8fd9\u5206\u660e\u662f\u4f1a\u5e26\u7403\u7684\u674e\u91d1\u7fbd[\u5389\u5bb3]", "up": 1705}, {"content": "\u6211\u6562\u8bf4\u63d0\u9ad8\u5c04\u95e8\u8d28\u91cf\u7684\u9ec4\u7d2b\u660c\u5c06\u662f\u672c\u8d5b\u5b63\u4e2d\u8d85U23\u6700\u5927\u7684\u53d1\u73b0\uff0c\u6709\u591a\u5c11\u4eba\u4f1a\u8fd9\u6837\u8ba4\u540c\uff1f", "up": 1412}, {"content": "\u6052\u5927\uff1a\u5982\u679c\u6709\u9ec4\u7d2b\u660c\u6211\u4eec\u8fd8\u62cd\u6253\u4e0d\u8d62\u5bcc\u529b\u4e48\uff1f", "up": 554}, {"content": "\u82cf\u5b81\u8db3\u591f\u8840\u6027\uff0c\u9ec4\u7d2b\u660c\u8868\u73b0\u4eae\u773c\uff0c\u671f\u5f85\u5927\u4e2d\u950b\u5230\u6765\u548c\u62c9\u7c73\u96f7\u65af\u56de\u5f52\uff0c\u4e00\u573a\u7403\u6ca1\u4ec0\u4e48\uff0c\u7740\u773c\u672a\u6765\uff01", "up": 537}, {"content": "14\u4e9a\u9752\u8d5b\u97e6\u4e16\u8c6a\u6885\u5f00\u4e8c\u5ea6\u8d62\u65e5\u672c\u5c31\u5173\u6ce8\u4ed6\u4e86\uff0c\u89c9\u5f97\u524d\u9014\u4e0d\u9519\uff0c\u51e0\u5e74\u524du19\u6253\u53cb\u8c0a\u8d5b\u6709\u4e2a\u53eb\u9ec4\u7d2b\u660c\u7684\u8fb9\u8def\u552f\u4e00\u4e00\u4e2a\u6562\u505a\u52a8\u4f5c\u6562\u7a81\u7834\u7684\u5b69\u5b50\uff0c\u5f53\u65f6\u89c9\u5f97\u4ed6\u4e5f\u5f88\u4e0d\u9519\u3002\u73b0\u5728\u4e24\u4e2a\u8868\u73b0\u7684\u90fd\u4e0d\u9519\uff0c\u5e0c\u671b\u5927\u5bb6\u4e0d\u8981\u5439\u6367\u4ed6\u4eec\uff0c\u4e5f\u4e0d\u8981\u6bd4\u8f83\u4ed6\u4eec\uff0c\u53ea\u5e0c\u671b\u4ed6\u4eec\u80fd\u597d\u597d\u53d1\u5c55\uff0c\u4e3a\u56fd\u6548\u529b\u3002", "up": 507}], "3": [{"content": "\u9ec4\u7d2b\u660c\u8981\u5938\uff0c\u4f46\u672c\u573a\u6bd4\u8d5b\u5409\u7965\u771f\u662f\u60ca\u8273\u5230\u6211\u4e86\uff0c\u4e00\u4e2a\u8fb9\u540e\u536b1\u4e2a\u8fdb\u74033\u6b21\u52a9\u653b\u52a0\u4e00\u4e2a\u7b56\u52a8\uff0c\u90205\u7403\uff0c\u76ee\u524d\u52a9\u653b\u699c4\u6b21\u5e76\u5217\u7b2c\u4e8c\uff0c\u8fd9\u6837\u7684\u5409\u7965\u5168\u573a\u6700\u4f73\uff01\uff01", "up": 1358}, {"content": "\u672c\u5468\u6700\u4f73U23\u53c8\u53cc\u53d5\u662f\u9ec4\u7d2b\u660c\u7684\u56ca\u4e2d\u4e4b\u7269\uff01\u4ed6\u4e0d\u4f46\u8fdb\u7403\uff0c\u53c8\u4ee4\u5bf9\u624b\u5916\u63f4\u5403\u9ec4\u724c\uff0c\u95e8\u524d\u89e6\u89c9\u7279\u522b\u654f\u9510\uff0c\u80fd\u5355\u5175\u4f5c\u6218\uff0c\u4ea6\u64c5\u957f\u4e0e\u961f\u53cb\u914d\u5408\uff0c\u4e0d\u9a84\u4e0d\u8e81\u7684\u597d\u7403\u5458\uff01\u522b\u5fd8\u4e86\uff0c\u5c0f\u9ec4\u4eba\u53ea21\u5c81\uff01[\u5389\u5bb3][\u52a0\u6cb9][\u52a9\u5a01][\u52a0\u6cb9]", "up": 979}, {"content": "\u672c\u573amvp\u65e0\u7591\u9ec4\u7d2b\u660c\uff0c\u597d\u597d\u53d1\u5c55\uff0c\u672a\u6765\u4e0d\u53ef\u4f30\u91cf", "up": 833}, {"content": "\u9ec4\u7d2b\u660c\uff0c\u4eba\u7403\u7ed3\u5408\u4e0d\u9519\uff0c\u9752\u6625\u98ce\u66b4\uff01\u5f53\u7136\u4e5f\u6709\u4e0d\u8db3\uff0c\u795d\u8d8a\u6765\u8d8a\u597d\u3002\u8fd8\u6709\u4e00\u4e2a\u7ec6\u8282\uff0c\u5965\u53e4\u65af\u6258\u8ba9\u81ea\u5df1\u961f\u53cb\u8d76\u7d27\u8d77\u6765\uff0c\u503c\u5f97\u79f0\u8d5e\u3002", "up": 500}, {"content": "\u53c8\u662f\u9ec4\u7d2b\u660c\uff0c\u8fd9\u4e2a\u5c0f\u5bb6\u4f19\u8fd1\u6765\u5145\u5206\u8bc1\u660e\u4e86\u4ec0\u4e48\u624d\u53eb\u7ea2\u7684\u53d1\u7d2b\uff01", "up": 481}], "4": [{"content": "\u9ec4\u7d2b\u660c\u90a3\u7403\u5982\u679c\u63a8\u8fdb\u4e86\u6574\u573a\u582a\u79f0\u5b8c\u7f8e\uff0c\u4e0d\u8fc7\u4e5f\u6ca1\u5173\u7cfb\uff0c\u6bd5\u7adf\u624du21\uff0c\u5e0c\u671b\u88ab\u91cc\u76ae\u62db\u53bb\u4e2d\u56fd\u676f\u7ec3\u7ec3", "up": 812}, {"content": "\u9ec4\u7d2b\u660c\u662f\u950b\u7ebf\u4e0a\u6700\u5f3a\u7684u23", "up": 230}, {"content": "\u9ec4\u7d2b\u660c\u5728u23\u4e2d\u7edd\u5bf9\u662f\u4f7c\u4f7c\u8005 \u56fd\u8db3\u7684\u5e0c\u671b \u5e0c\u671b\u5927\u5bb6\u591a\u7ed9\u4e88\u9f13\u52b1.. \u52a0\u6cb9 \u9ec4\u7d2b\u660c\uff01", "up": 212}, {"content": "\u8fd9\u573a\u7403\u6709\u591a\u5c11\u4eba\u60f3\u770b\u770b\u9ec4\u7d2b\u660c\u7684\u8868\u73b0\uff0c\u7ed3\u679c\u53ea\u770b\u5230\u4e24\u8f86\u91cd\u5e86\u5c0f\u6469\u6258", "up": 152}, {"content": "\u4f60\u4eec\u90fd\u5728\u5439\u9ec4\u7d2b\u660c\u6211\u6765\u5439\u5439\u5409\u7fd4\uff0c\u4eca\u5e74\u7684\u8868\u73b0\u7edd\u5bf9\u662f\u7238\u7238\u7ea7\u522b\u7684\uff0c\u91cc\u76ae\u4f60\u4e0d\u8003\u8651\u8003\u8651\uff1f", "up": 145}], "5": [{"content": "\u9ec4\u7d2b\u660c\uff1a\u80fd\u4e0d\u80fd\u4e00\u6b21\u6027\u652f\u4ed8\u6574\u4e2a\u8d5b\u5b63\uff1f\u4e00\u5468\u6765\u4e00\u8d9f\uff0c\u803d\u8bef\u6211\u7ec3\u7403\u3002", "up": 1260}, {"content": "\u9ec4\u7d2b\u660c\uff0c\u4f60\u7279\u4e48\u7684\u62fc\u62a2\u79ef\u6781\uff0c\u8dd1\u52a8\u4e0d\u60dc\u529b\uff0c\u88ab\u72af\u89c4\u4ece\u4e0d\u62b1\u6028\uff0c\u722c\u8d77\u6765\u5c31\u62fc\u62a2\uff0c\u8fd8\u80fd\u8fdb\u7403\uff0c\u6d3b\u8be5\u4f60\u6700\u4f73\u3002", "up": 1144}, {"content": "\u5e94\u8058\u76f4\u64ad\u5427\u9881\u5956\u5609\u5bbe\uff01\u6211\u5bb6\u4f4f\u5357\u4eac\uff0c\u6bcf\u4e00\u8f6e\u7ed9\u9ec4\u7d2b\u660c\u9881\u5956\u7684\u5de5\u4f5c\u5c31\u4ea4\u7ed9\u6211\u5427", "up": 397}, {"content": "\u9ec4\u7d2b\u660c:\u524d\u4e24\u5929\u521a\u9886\u4e86\u4e00\u4e07\uff0c\u8fc7\u4e24\u5929\u53c8\u8981\u9886\u4e00\u4e07\uff0c\u6211\u6700\u6015\u7684\u5c31\u662f\u9886\u5b8c\u540e\u7684\u91c7\u8bbf\uff0c\u6211\u90fd\u4e0d\u77e5\u9053\u8bf4\u4ec0\u4e48\u4e86[\u5fae\u7b11]", "up": 381}, {"content": "\u9ec4\u7d2b\u660c\uff1a\u76f4\u64ad\u5427\u7684\u94b1\u8d8a\u6765\u8d8a\u96be\u6323\u4e86\u3002", "up": 255}], "6": [{"content": "\u6211\u731c\u4eca\u5e74\u6700\u4f73u23\u7403\u5458\u5f88\u5927\u673a\u4f1a\u662f\u9ec4\u7d2b\u660c\uff0c\u6709\u540c\u610f\u7684\u54e5\u4eec\u513f\u5417\uff1f\u8bf7\u4e3e\u624b\uff01", "up": 2160}, {"content": "\u4e3a\u4e24\u4f4dU23\u7403\u5458\u9f13\u638c\u597d\u5417\uff1f\u97e6\u4e16\u8c6a&\u9ec4\u7d2b\u660c\uff0c\u5a01\u6b66\u554a\uff01\u4e2d\u56fd\u660e\u65e5\u4e4b\u661f\uff01", "up": 1563}, {"content": "\u9ec4\u7d2b\u660c\uff1a\u53c8\u6709\u4e00\u4e07\u5757\u94b1\u96f6\u82b1\u94b1\u4e86\uff0c\u597d\u5f00\u5fc3\u554a", "up": 1389}, {"content": "\u9ec4\u7d2b\u660c\uff0cU23\u9996\u7403\uff01", "up": 742}, {"content": "\u6709\u591a\u5c11\u662f\u50cf\u6211\u4e00\u6837\u662f\u88ab\u9ec4\u7d2b\u660c\u5e26\u6210\u6c5f\u82cf\u7684\u7403\u8ff7", "up": 680}]};
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
