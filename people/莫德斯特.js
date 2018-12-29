var data = {"person_name": "\u83ab\u5fb7\u65af\u7279", "nicknames": "\u83ab\u5fb7\u65af\u7279", "aspects": {"\u5916\u63f4": 0.26778267587188587, "\u7403\u5458": 0.2727135879307081, "\u7403\u8ff7": 0.19005258036412434, "\u8d5b\u5b63": 0.5220531094544055, "\u8fdb\u653b": 0.18843284454086393, "\u8fdb\u7403": 0.2598064886223423, "\u540e\u9632": 0.6043833822975867, "\u6bd4\u8d5b": 0.20192003319135082, "\u4ff1\u4e50\u90e8": 0.2398944488288634, "\u9ec4\u724c": 0.3854872321524262}, "overall_heat": 111.0, "overall_polar": -0.722, "name": "437", "nationality": "\u6cd5\u56fd", "position": "\u524d\u950b", "goal": "9", "assist": "6", "team_name": "\u5929\u6d25\u6743\u5065", "name_en": "Anthony Modeste", "age": "30", "height": "187", "weight": "84"};
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
var topic_keywords = {"0": [{"name": "\u83ab\u5fb7\u65af\u7279", "value": 0.0702775290957923}, {"name": "\uff01", "value": 0.02999104744852283}, {"name": "\u5e15\u6258", "value": 0.021038495971351833}, {"name": "\u6743\u5065", "value": 0.021038495971351833}, {"name": "\u8e22", "value": 0.016562220232766336}, {"name": "\u7ef4\u7279", "value": 0.013578036407042672}, {"name": "\u7d22\u8428", "value": 0.01208594449418084}, {"name": "\u585e\u5c14", "value": 0.010593852581319008}, {"name": "\u518d", "value": 0.007609668755595343}, {"name": "\u660e\u663e", "value": 0.007609668755595343}, {"name": "\u673a\u4f1a", "value": 0.007609668755595343}, {"name": "\u5efa\u56fd", "value": 0.007609668755595343}, {"name": "\u5e94\u8be5", "value": 0.007609668755595343}, {"name": "\u611f\u89c9", "value": 0.006117576842733511}, {"name": "\u4e0b\u8bfe", "value": 0.006117576842733511}, {"name": "\u4f9d\u7136", "value": 0.006117576842733511}, {"name": "\u8fdb\u653b", "value": 0.006117576842733511}, {"name": "11", "value": 0.006117576842733511}, {"name": "\u7403\u5458", "value": 0.006117576842733511}, {"name": "\u73b0\u5728", "value": 0.006117576842733511}, {"name": "\u4e0b", "value": 0.006117576842733511}, {"name": "\u6d6a\u8d39", "value": 0.006117576842733511}, {"name": "\u80fd\u529b", "value": 0.006117576842733511}, {"name": "\u6768\u65ed", "value": 0.006117576842733511}, {"name": "\u4e2d\u8d85", "value": 0.006117576842733511}, {"name": "\u8fb9\u8def", "value": 0.006117576842733511}, {"name": "\u7ebf", "value": 0.00462548492987168}, {"name": "\u4eba", "value": 0.00462548492987168}, {"name": "\u4e3b\u529b", "value": 0.00462548492987168}, {"name": "\u72b6\u6001", "value": 0.00462548492987168}], "1": [{"name": "\u83ab\u5fb7\u65af\u7279", "value": 0.045304232804232805}, {"name": "\u6743\u5065", "value": 0.04089506172839506}, {"name": "\uff01", "value": 0.037588183421516756}, {"name": "\uff1f", "value": 0.029872134038800704}, {"name": "\u5e15\u6258", "value": 0.016644620811287477}, {"name": "\u6052\u5927", "value": 0.016644620811287477}, {"name": "\u73b0\u5728", "value": 0.016644620811287477}, {"name": "\u5916\u63f4", "value": 0.014440035273368606}, {"name": "\u7ef4\u7279", "value": 0.0111331569664903}, {"name": "\u585e\u5c14", "value": 0.0111331569664903}, {"name": "\u7403\u8ff7", "value": 0.0111331569664903}, {"name": "\u4e00\u5b9a", "value": 0.010030864197530864}, {"name": "\u7403\u5458", "value": 0.007826278659611993}, {"name": "\u6253", "value": 0.007826278659611993}, {"name": "\u7d22\u8428", "value": 0.007826278659611993}, {"name": "\u4eba", "value": 0.006723985890652557}, {"name": "\u60f3", "value": 0.006723985890652557}, {"name": "\u95ee\u9898", "value": 0.006723985890652557}, {"name": "\u592a", "value": 0.005621693121693121}, {"name": "\u4eca\u5e74", "value": 0.005621693121693121}, {"name": "\u5b9e\u529b", "value": 0.005621693121693121}, {"name": "\u6c34\u5e73", "value": 0.005621693121693121}, {"name": "\u7403\u961f", "value": 0.005621693121693121}, {"name": "\u72b6\u6001", "value": 0.004519400352733686}, {"name": "\u8fd9\u79cd", "value": 0.004519400352733686}, {"name": "\u540e\u536b", "value": 0.004519400352733686}, {"name": "\u5b8c\u5168", "value": 0.004519400352733686}, {"name": "\u8d5b\u5b63", "value": 0.004519400352733686}, {"name": "\u9635\u5bb9", "value": 0.004519400352733686}, {"name": "\u7403", "value": 0.004519400352733686}], "2": [{"name": "\u83ab\u5fb7\u65af\u7279", "value": 0.05040491482826026}, {"name": "\uff01", "value": 0.02387601228707065}, {"name": "\u6743\u5065", "value": 0.015498464116168667}, {"name": "\u7ef4\u7279", "value": 0.015498464116168667}, {"name": "\u5e15\u6258", "value": 0.014102206087685002}, {"name": "\u585e\u5c14", "value": 0.011309690030717676}, {"name": "\uff1f", "value": 0.011309690030717676}, {"name": "\u6052\u5927", "value": 0.009913432002234011}, {"name": "\u597d", "value": 0.008517173973750349}, {"name": "\u66f9\u9633", "value": 0.007120915945266685}, {"name": "\u54ed", "value": 0.007120915945266685}, {"name": "\u8f93", "value": 0.007120915945266685}, {"name": "\u4e9a\u51a0", "value": 0.007120915945266685}, {"name": "\u8d70", "value": 0.007120915945266685}, {"name": "\u7403\u5458", "value": 0.007120915945266685}, {"name": "\u76f4\u63a5", "value": 0.00572465791678302}, {"name": "\u7403", "value": 0.00572465791678302}, {"name": "\u8bd5\u8bd5", "value": 0.00572465791678302}, {"name": "\u5916\u63f4", "value": 0.00572465791678302}, {"name": "\u4e2d", "value": 0.00572465791678302}, {"name": "\u963f\u5947\u59c6\u5f6d", "value": 0.00572465791678302}, {"name": "\u518d", "value": 0.00572465791678302}, {"name": "\u72af\u89c4", "value": 0.00572465791678302}, {"name": "\u4eba", "value": 0.00572465791678302}, {"name": "\u7b11", "value": 0.00572465791678302}, {"name": "\u4e0d\u884c", "value": 0.00572465791678302}, {"name": "\u77e5\u9053", "value": 0.00572465791678302}, {"name": "\u7c73\u514b\u5c14", "value": 0.004328399888299358}, {"name": "\u7403\u961f", "value": 0.004328399888299358}, {"name": "\u6ce8\u610f", "value": 0.004328399888299358}]};
var topic_summary = {"0": [{"content": "\u7d22\u8428\u4f9d\u7136\u56fa\u6267\uff0c\u5218\u5955\u9e23\u4f9d\u7136\u201c\u7a33\u201d\uff0c\u83ab\u5fb7\u65af\u7279\u4f9d\u7136\u5c41\u7528\u6ca1\u6709\uff0c\u6211\u4f9d\u7136\u547c\u5401\u7d22\u8428\u4e0b\u8bfe\uff0c\u8fd8\u6211\u5e15\u6258\uff0c\u8fd8\u6211\u6743\u5065\uff0c\u540c\u610f\u7684\u6263\u8d77\u6765\uff01\uff01\uff01\uff01", "up": 229}, {"content": "\u6743\u5065\u4e00\u624b\u597d\u724c\u53eb\u7d22\u8428\u6253\u81ed\u4e86\uff0c\u83ab\u5fb7\u65af\u7279\u660e\u663e\u4e0d\u5728\u72b6\u6001\uff0c\u4e3a\u4ec0\u4e48\u4e0d\u4e0a\u5efa\u56fd", "up": 95}, {"content": "\u4ece\u6ca1\u89c1\u8fc7\u6743\u5065\u8e22\u8fd9\u4e48\u5dee\u8fc7\uff0c\u6574\u4e2a\u4e0b\u534a\u573a\u6ca1\u8fdb\u653b\uff0c\u5b81\u6b7b\u4e0d\u6362\u4eba\uff0c\u4e0a\u83ab\u5fb7\u65af\u7279\u6d6a\u8d39\u4e00\u4e2a\u540d\u989d\uff0c\u4e5f\u4e0d\u4e0a\u5e15\u6258\uff0cU23\u5c31\u8fd9\u4e48\u5dee\u5417\uff0c\u4e3b\u529b\u90fd\u4f20\u4e0d\u8d77\u6765\u7403\u4e86\uff0c\u523090\u591a\u5206\u949f\u624d\u6362\u3002\u6211\u90fd\u66ff\u8d35\u5dde\u51a4\u5f97\u614c\uff01\uff01", "up": 42}, {"content": "\u6743\u5065\u81ea\u4ece\u6362\u4e86\u4e3b\u6559\u7ec3\u554a\uff0c\u8e22\u7684\u662f\u56db\u4e0d\u50cf\uff0c\u8fdb\u653b\u4e0d\u597d\uff0c\u9632\u5b88\u66f4\u4e0d\u597d\uff0c\u4f60\u4e0a\u83ab\u5fb7\u65af\u7279\uff0c\u6ca1\u6709\u8fb9\u8def\u6709\u5c41\u7528\u554a\uff0c\u8981\u662f\u78b0\u5230\u54ea\u4e2a\u961f\u90fd\u662f\u9632\u5b88\u53cd\u51fb\u8fd8\u4e0d\u5982\u4e0a\u5e15\u6258\u5462\uff0c\u90d1\u8fbe\u4f26\u8fb9\u8def\u7a81\u7834\uff0c\u4e0a\u8d5b\u5b63\u591a\u7280\u5229\uff0c\u8fd9\u8d5b\u5b63\u4e0d\u7528\u4e86\uff0c\u65e0\u8bed\u4e86\u3002\u7d22\u8428\u6211\u770b\u4e5f\u5feb\u4e0b\u8bfe\u4e86", "up": 29}, {"content": "\u53ea\u60f3\u8bf4\uff1a\u83ab\u5fb7\u65af\u7279\u5c31\u8e22\u7684\u50cf\u4e2a\u72d7\u5c4e\u6837\uff0c\u6ca1\u5f97\u8bf4 \u7d22\u8428\u6eda\u56de\u5bb6\u5427", "up": 12}], "1": [{"content": "\u8fd8\u6743\u5065\u5047\u7403\uff0c\u6211\u5c31\u7eb3\u95f7\u4e86\uff0c\u73b0\u5728\u8fd8\u6709\u7403\u8ff7\u8ba4\u4e3a\u6743\u5065\u662f\u5f3a\u961f\u5417\uff1f\u770b\u770b\u6700\u8fd1\u6743\u5065\u7684\u6bd4\u8d5b\u5927\u5bb6\u5fc3\u91cc\u90fd\u6709\u6570\uff0c\u8fd8\u4ee5\u4e3a\u83ab\u5fb7\u65af\u7279\u548c\u7ef4\u7279\u585e\u5c14\u5728\u4e48\uff0c\u9192\u9192\u5427\uff0c\u6743\u5065\u73b0\u5728\u5c31\u4e00\u4fdd\u7ea7\u961f", "up": 150}, {"content": "\u6743\u5065\u8fd9\u72b6\u6001\u53ef\u4ee5\uff0c\u4fdd\u7ea7\u4e4b\u8def\u8fd8\u9700\u52aa\u529b\uff0c\u800c\u4e14\u4e0b\u4e2a\u8d5b\u5b63\u7403\u961f\u5185\u90e8\u6709\u51e0\u4e2a\u4eba\u4e00\u5b9a\u8981\u7559\u4f4f\uff0c\u6768\u65ed\u5e15\u6258\u738b\u6c38\u73c0\u4e00\u4e2a\u90fd\u4e0d\u80fd\u5c11\uff0c\u542c\u8bf4\u6052\u5927\u60f3\u8981\u5f20\u4fee\u4e3a\uff0c\u6743\u5065\u4e00\u5b9a\u4e0d\u80fd\u5356\uff0c\u5356\u4e86\u7684\u8bdd\u5bb3\u4e86\u81ea\u5df1\uff0c\u4e5f\u5bb3\u4e86\u5f20\u4fee\u4e3a\uff0c\u4e00\u5b9a\u7559\u4f4f\u5f20\u4fee\u4e3a\uff0c\u5728\u5f15\u8fdb\u51e0\u4e2a\u5916\u63f4\uff0c\u4e0b\u4e2a\u8d5b\u5b63\u8fd8\u662f\u6709\u7ade\u4e89\u529b\u7684\uff0c\u8fd8\u6709\u4e00\u4ef6\u4e8b\uff0c\u4e00\u5b9a\u8981\u628a\u83ab\u5fb7\u65af\u7279\u8fd9\u4e2a\u72d7\u7ed9\u529e\u4e86\uff0c\u4e00\u5b9a\u8981\u901a\u8fc7\u5404\u79cd\u624b\u6bb5\u8ba9\u4ed6\u4e00\u8f88\u5b50\u8e22\u4e0d\u4e0a\u6bd4\u8d5b\uff01", "up": 98}, {"content": "\u4fdd\u7f57\u7d22\u8428\u4ec0\u4e48\u65f6\u5019\u4e0b\u8bfe\uff1f\uff01 \u6211\u770b\u5230\u4e86\u6240\u6709\u7403\u5458\u7684\u52aa\u529b \u6211\u4e5f\u770b\u8fc7\u5361\u5e05\u7684\u6743\u5065 \u4e3a\u4ec0\u4e48\u4e24\u573a\u7403\u8fde\u4e2a\u6709\u6548\u7684\u8fdb\u653b\u90fd\u7ec4\u7ec7\u4e0d\u8d77\u6765\uff1f \u83ab\u5fb7\u65af\u7279\u4e00\u4e2a\u5403\u997c\u7684\u7403\u5458 \u8ba9\u4f60\u653e\u5728\u4e00\u5957\u6253\u9632\u53cd\u7684\u9635\u5bb9\u91cc \u5c31\u662f\u4e0d\u7528\u5e15\u6258 \u7d22\u8428 \u5fc3\u91cc\u6ca1\u70b9\u903c\u6570\u561b\uff1f", "up": 53}, {"content": "\u6743\u5065\u5728\u88ab\u538b\u7740\u6253\u9700\u8981\u6253\u53cd\u51fb\u7684\u65f6\u5019\u83ab\u5fb7\u65af\u7279\u5c41\u7528\u6ca1\u6709\uff0c\u5982\u679c\u4e00\u5957\u9635\u5bb9\u7528\u5230\u6b7b\u7684\u4eba\u4e5f\u80fd\u5f53\u6559\u7ec3\u90a3\u4e48\u4e5f\u592a\u7b80\u5355\u4e86\u5427\uff0c\u4fdd\u7f57\u7d22\u8428\u771f\u4e0d\u548b\u5730\uff0c\u6b7b\u4e5f\u4e0d\u8f6e\u6362\u9635\u5bb9\uff0c\u4eca\u5e74\u6743\u5065\u7684\u7403\u592a\u96be\u770b\u4e86\uff01\uff01\uff01", "up": 30}, {"content": "\u6743\u5065\u7403\u8ff7\u65e0\u9700\u4f24\u5fc3\uff0c\u6ca1\u6709\u5e15\u6258\u7684\u7ec4\u7ec7\u548c\u83ab\u5fb7\u65af\u7279\u7684\u8fdb\u653b\uff0c\u6052\u5927\u9632\u5b88\u538b\u529b\u9aa4\u51cf\uff0c\u4e9a\u51a0\u52a0\u6cb9\u5427\uff0c\u6052\u5927\u7403\u8ff7\u6491\u4f60\u4eec\uff01", "up": 9}], "2": [{"content": "\u8001\u51e0\u4f4d \u6ce8\u610f\u738b\u6c38\u73c0\u5938\u83ab\u5fb7\u65af\u7279\u7684\u53e3\u578b\u4e86\u5417[\u7b11\u54ed][\u7b11\u54ed]", "up": 341}, {"content": "\u65e9\u5c31\u8bf4\u8fc7\u76f8\u5bf9\u4e8e\u963f\u5947\u59c6\u5f6d\u7684\u8eab\u4ef7\uff0c\u83ab\u5fb7\u65af\u7279\u5c31\u662f\u6c34\u8d27\u3002", "up": 48}, {"content": "\u4e8b\u5b9e\u8bf4\u660e\u62c9\u7ef4\u5947\u662f\u771f\u5927\u817f\uff0c\u8fd9\u573a\u6bd4\u8d5b\u80fd\u5927\u80dc\u548c\u4ed6\u590d\u51fa\u5173\u7cfb\u5341\u5206\u5927\uff0c\u524d\u4e09\u4e2a\u8fdb\u7403\u90fd\u548c\u4ed6\u5bc6\u5207\u76f8\u5173\uff0c\u90fd\u662f\u4ed6\u53d1\u52a8\u6216\u76f4\u63a5\u52a9\u653b\uff0c\u5c24\u5176\u662f\u7b2c\u4e8c\u4e2a\u961f\u53cb\u4e22\u7403\u540e\u7533\u82b1\u6b63\u60f3\u53cd\u51fb\uff0c\u62c9\u7ef4\u5947\u9a6c\u4e0a\u56de\u8ffd\u628a\u7403\u62a2\u56de\u6765\u3002\u800c\u4e1484\u5206\u949f\u51fa\u4e8e\u4fdd\u62a4\u4ed6\u628a\u4ed6\u6362\u4e0b\u6765\uff0c\u4ed6\u8fd8\u610f\u72b9\u672a\u5c3d\u4e00\u8138\u4e0d\u723d\u2026\u2026\u5149\u8fd9\u70b9\u656c\u4e1a\u5c31\u503c\u5f97\u79f0\u8d5e\uff0c\u771f\u4e0d\u50cf\u7ef4\u7279\u585e\u5c14\u83ab\u5fb7\u65af\u7279\u4e4b\u6d41", "up": 46}, {"content": "\u5361\u7eb3\u74e6\u7f57\u81ea\u5df1\u90fd\u8bf4\u4ed6\u89c9\u5f97\u5bf9\u7403\u961f\u7684\u638c\u63a7\u529b\u4e0d\u591f\u4e86\u6240\u4ee5\u56de\u4e86\u6052\u5927\uff0c\u5c31\u662f\u56e0\u4e3a\u6743\u5065\u603b\u8e22\u5047\u7403\uff0c\u8bb0\u5f97\u4e0a\u8d5b\u5b63\u8f93\u6cf0\u8fbe\u65f6\u8ff7\u4e4b\u5fae\u7b11\u4e48\uff0c\u8fd9\u573a\u7403\u4e00\u6837\uff0c\u53ea\u56de\u4f20\u4e0d\u914d\u5408\uff0c\u5168\u573a\u6ca1\u4e00\u6b21\u4e0b\u5e95\u4f20\u4e2d\uff0c\u6015\u83ab\u5fb7\u65af\u7279\u8fdb\u7403\uff0c\u6ce8\u610f\u4e86\u4e48\uff1f\u5e15\u6258\u4e00\u4e2a\u4eba\u5b81\u613f\u5e26\u6b7b\u4e5f\u4e0d\u613f\u610f\u7ed9\u672c\u571f\u7403\u5458\u4f20\u7403\uff0c\u56e0\u4e3a\u4ed6\u65e9\u770b\u51fa\u6765\u5728\u6253\u5047\u7403\u4e86", "up": 12}, {"content": "\u5509\uff01\u6743\u5065\u600e\u4e48\u4e0d\u8981\u6743\u656c\u6e90\u554a\uff1f\u6ca1\u97e9\u56fd\u4eba\u540e\u9632\u4e0d\u662f\u8ba9\u4eba\u540a\u6253\u4e48\uff1f\u6240\u4ee5\u6700\u540e\u5c31\u662f\u56e0\u4e3a\u540e\u9632\u5931\u8bef\u8f93\u7684\u3002\u8fd8\u6709\u8981\u5439\u4e00\u4e0b\u5b59\u53ef\u548c\u7c73\u514b\u5c14\uff0c\u867d\u8bf4\u5e15\u6258\u3001\u83ab\u5fb7\u65af\u7279\u3001\u963f\u5947\u59c6\u5f6d\u7684\u8fdb\u7403\u90fd\u5f88\u7cbe\u5f69\uff0c\u4f46\u61c2\u7403\u7684\u90fd\u77e5\u9053\u90a3\u957f\u4f20\u52a9\u653b\u6709\u591a\u7cbe\u51c6\uff01\u5c24\u5176\u662f\u7c73\u514b\u5c14\uff0c\u76f4\u63a5\u4e3b\u5bfc\u4e86\u6cf0\u8fbe\u7684\u80dc\u5229\uff01\u5c11\u8c01\u4e5f\u4e0d\u80fd\u5c11\u5c3c\u65e5\u5229\u4e9a\u6cf0\u8fbe\u53cc\u6599\u961f\u957f\u2014\u2014\u7c73\u514b\u5c14\uff01", "up": 9}]};
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
