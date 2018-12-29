var data = {"person_name": "\u738b\u4e0a\u6e90", "nicknames": "\u738b\u4e0a\u6e90", "aspects": {"\u7403\u8ff7": 0.27695475433537137, "\u70b9\u7403": 0.18204722904687934, "\u66ff\u8865": 0.6690634472933502, "\u56fd\u5bb6\u961f": 0.17976098079616845, "\u5916\u63f4": 0.31796782733000123, "\u5c04\u95e8": 0.17941297878701254, "\u624b\u7403": 0.8078467360205556, "\u6bd4\u8d5b": 0.22710034064189516, "\u6362\u4eba": 0.2783993983221322}, "overall_heat": 122.0, "overall_polar": -0.245, "name": "481", "nationality": "\u4e2d\u56fd", "position": "\u540e\u536b", "goal": "0", "assist": "1", "team_name": "\u6cb3\u5357\u5efa\u4e1a", "name_en": "Wang Shangyuan", "age": "25", "height": "185", "weight": "77"};
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
var topic_keywords = {"0": [{"name": "\u738b\u4e0a\u6e90", "value": 0.07742489270386266}, {"name": "\uff1f", "value": 0.03965665236051502}, {"name": "\uff01", "value": 0.019055793991416308}, {"name": "\u4e0d\u597d", "value": 0.017339055793991417}, {"name": "\u6052\u5927", "value": 0.01390557939914163}, {"name": "\u673a\u4f1a", "value": 0.010472103004291845}, {"name": "\u90d1\u9f99", "value": 0.010472103004291845}, {"name": "\u7403\u8ff7", "value": 0.008755364806866952}, {"name": "\u5b8c", "value": 0.008755364806866952}, {"name": "\u72b6\u6001", "value": 0.008755364806866952}, {"name": "\u4eba", "value": 0.008755364806866952}, {"name": "\u8fd9\u573a", "value": 0.008755364806866952}, {"name": "\u4e0a\u573a", "value": 0.007038626609442059}, {"name": "\u8138", "value": 0.007038626609442059}, {"name": "\u7403", "value": 0.007038626609442059}, {"name": "\u4e0d\u4fe1", "value": 0.007038626609442059}, {"name": "\u6709\u70b9", "value": 0.007038626609442059}, {"name": "\u771f\u7684", "value": 0.007038626609442059}, {"name": "\u73b0\u5728", "value": 0.007038626609442059}, {"name": "\u611f\u89c9", "value": 0.007038626609442059}, {"name": "\u6342", "value": 0.007038626609442059}, {"name": "\u8868\u73b0", "value": 0.005321888412017167}, {"name": "\u4e0d\u884c", "value": 0.005321888412017167}, {"name": "\u55b7", "value": 0.005321888412017167}, {"name": "\u6362", "value": 0.005321888412017167}, {"name": "\u6362\u4e0a", "value": 0.005321888412017167}, {"name": "\u5218\u6bbf\u5ea7", "value": 0.005321888412017167}, {"name": "\u65af\u79d1\u62c9\u91cc", "value": 0.005321888412017167}, {"name": "\u660e\u663e", "value": 0.005321888412017167}, {"name": "\u662f\u4e0d\u662f", "value": 0.005321888412017167}], "1": [{"name": "\u738b\u4e0a\u6e90", "value": 0.1194780987884436}, {"name": "\uff01", "value": 0.05610438024231128}, {"name": "\u6052\u5927", "value": 0.03187325256290774}, {"name": "\u90d1\u9f99", "value": 0.02814538676607642}, {"name": "\u5751", "value": 0.013233923578751165}, {"name": "\u4e00\u4e2a", "value": 0.013233923578751165}, {"name": "\u5efa\u4e1a", "value": 0.013233923578751165}, {"name": "\u8d70", "value": 0.011369990680335507}, {"name": "\u4e0a\u573a", "value": 0.00950605778191985}, {"name": "\u7403", "value": 0.0076421248835041936}, {"name": "\u9707\u60ca", "value": 0.0076421248835041936}, {"name": "\u70b9\u7403", "value": 0.0076421248835041936}, {"name": "\u7ea2\u724c", "value": 0.005778191985088537}, {"name": "\u903c", "value": 0.005778191985088537}, {"name": "\uff1f", "value": 0.005778191985088537}, {"name": "\u725b", "value": 0.005778191985088537}, {"name": "\u88c1\u5224", "value": 0.005778191985088537}, {"name": "\u770b\u5230", "value": 0.005778191985088537}, {"name": "\u95ee\u9898", "value": 0.005778191985088537}, {"name": "\u4e0d\u4e0a", "value": 0.005778191985088537}, {"name": "\u4e70", "value": 0.00391425908667288}, {"name": "\u66ff\u8865", "value": 0.00391425908667288}, {"name": "\u6700\u540e", "value": 0.00391425908667288}, {"name": "\u6768\u7acb\u745c", "value": 0.00391425908667288}, {"name": "\u6bd2\u7624", "value": 0.00391425908667288}, {"name": "\u6c38\u8fdc", "value": 0.00391425908667288}, {"name": "\u6eda", "value": 0.00391425908667288}, {"name": "\u540d\u5355", "value": 0.00391425908667288}, {"name": "\u6253", "value": 0.00391425908667288}, {"name": "\u7384\u5b66", "value": 0.00391425908667288}], "2": [{"name": "\u738b\u4e0a\u6e90", "value": 0.04145454545454546}, {"name": "\uff01", "value": 0.03418181818181818}, {"name": "\uff1f", "value": 0.026909090909090907}, {"name": "\u6052\u5927", "value": 0.014787878787878787}, {"name": "\u8db3\u7403", "value": 0.012363636363636363}, {"name": "\u4e00\u4e2a", "value": 0.012363636363636363}, {"name": "\u7b11", "value": 0.0075151515151515155}, {"name": "\u57f9\u8bad", "value": 0.0075151515151515155}, {"name": "\u770b\u5230", "value": 0.0075151515151515155}, {"name": "\u7403\u8ff7", "value": 0.0075151515151515155}, {"name": "\u5143", "value": 0.0075151515151515155}, {"name": "\u5efa\u4e1a", "value": 0.0075151515151515155}, {"name": "\u65af\u79d1\u62c9\u91cc", "value": 0.0075151515151515155}, {"name": "\u6253", "value": 0.0075151515151515155}, {"name": "\u6700\u540e", "value": 0.005090909090909091}, {"name": "\u80fd\u529b", "value": 0.005090909090909091}, {"name": "\u4eba", "value": 0.005090909090909091}, {"name": "\u4ee5\u4e3a", "value": 0.005090909090909091}, {"name": "\u540d\u5bbf", "value": 0.005090909090909091}, {"name": "\u540e", "value": 0.005090909090909091}, {"name": "\u53f3\u540e\u536b", "value": 0.005090909090909091}, {"name": "\u77e5\u9053", "value": 0.005090909090909091}, {"name": "\u540e\u536b", "value": 0.005090909090909091}, {"name": "\u4ff1\u4e50\u90e8", "value": 0.005090909090909091}, {"name": "\u6700\u5f3a", "value": 0.005090909090909091}, {"name": "\u540e\u8170", "value": 0.005090909090909091}, {"name": "\u539f\u56e0", "value": 0.005090909090909091}, {"name": "\u672c\u6765", "value": 0.005090909090909091}, {"name": "\u6ca1\u60f3\u5230", "value": 0.005090909090909091}, {"name": "\u54c8\u54c8\u54c8", "value": 0.005090909090909091}]};
var topic_summary = {"0": [{"content": "\u7b2c\u4e00\u3001\u822a\u6d77\u4f53\u80b2\u573a\u7684\u8349\u76ae\u771f\u7684\u611f\u4eba \u7b2c\u4e8c\u3001\u7279\u8c22\u62c9\u88ab\u94f2\u4f24\u6362\u4e0b\u573a\u4e3b\u573a\u7403\u8ff7\u9ad8\u558a\u201c**** \u201d\u662f\u4e0d\u662f\u6709\u70b9\u8fc7\u5206\u4e86\uff1f \u7b2c\u4e09\u3001\u738b\u4e0a\u6e90\u624b\u7403\u8fd9\u4e48\u660e\u663e\u770b\u4e0d\u51fa\u6765\uff1f", "up": 280}, {"content": "\u6052\u5927\u6ca1\u6709\u738b\u4e0a\u6e90\uff0c\u51a0\u519b\u90fd\u4e22\u4e86\uff01[\u7b11\u54ed]", "up": 275}, {"content": "\u53ea\u8981\u738b\u4e0a\u6e90\u4e0d\u4e0a\uff0c\u6211\u5c31\u653e\u5fc3\u4e86\uff01[\u6342\u8138][\u6342\u8138]", "up": 20}, {"content": "\u738b\u4e0a\u6e90\u6ca1\u78b0\u7684\u8bdd\u4e5f\u6ca1\u673a\u4f1a\u5c04\u95e8\u7684\uff0c\u522b\u5632\u8bbd\u4e86\u5427", "up": 10}, {"content": "\u738b\u4e0a\u6e90\u4e00\u4e0a\u573a\uff0c\u6052\u5927\u5c31\u50cf\u5c11\u4e86\u4e2a\u4eba\uff0c\u53c8\u88ab\u7f5a\u4e0b\u9093\u6db5\u6587\uff0c\u90a3\u8fd8\u8e22\u4e2a\u5565", "up": 8}], "1": [{"content": "\u738b\u4e0a\u6e90\u53ea\u8981\u4e00\u4e0a\uff0c\u6052\u5927\u4e0d\u662f\u8f93\u5c31\u662f\u88ab\u903c\u5e73\uff0c\u5b9a\u5f8b\uff01", "up": 1116}, {"content": "\u738b\u4e0a\u6e90\uff1a\u53d1\u751f\u4e86\u4ec0\u4e48\u4e8b\uff0c\u6211\u624d\u521a\u4e0a\u573a\u3002", "up": 837}, {"content": "\u738b\u4e0a\u6e90\u5751\u5b8c\u6052\u5927\u53c8\u6765\u5751\u5efa\u4e1a\uff0c\u725b\u903c\u554a", "up": 633}, {"content": "\u90d1\u9f99\u738b\u4e0a\u6e90\u4e0d\u4e0a\uff0c\u6211\u7684\u5fc3\u60c5\u8fd8\u662f\u597d\u5f88\u591a\u7684", "up": 454}, {"content": "\u611f\u8c22\u738b\u4e0a\u6e90", "up": 437}], "2": [{"content": "\u6211\u4e00\u4e2a\u91cd\u5e86\u7403\u8ff7\uff0c\u770b\u5b8c\u6574\u573a\u6bd4\u8d5b\uff0c\u5ba2\u89c2\u5730\u8bf4\uff0c\u4e00\u4e2a\u7403\u961f\u7684\u4e3b\u529b\u540e\u8170\u662f\u738b\u4e0a\u6e90\uff0c\u5f88\u96be\u8d62\u3002", "up": 223}, {"content": "\u55b7\u738b\u4e0a\u6e90\u7684\u55b7\u5b50\u4eec\u53c8\u8be5\u5931\u671b\u4e86\uff0c\u672c\u573a\u738b\u4e0a\u6e90\u6253\u6ee1\u5168\u573a\uff0c\u5148\u6253\u540e\u8170\u540e\u6253\u53f3\u540e\u536b\uff0c\u8868\u73b0\u51fa\u8272\uff0c\u54c8\u54c8\u54c8\uff01", "up": 43}, {"content": "\u5168\u534e\u73ed\uff1f\uff1f\uff1f\u4ff1\u4e50\u90e8\u53ea\u662f\u5f88\u5c0f\u7684\u4e00\u4e2a\u5730\u533a\u8db3\u7403\u4ee3\u8868\u3002\u4e2d\u56fd\u8db3\u7403\u7684\u843d\u540e\u786e\u5b9e\u9700\u8981\u6293\u7d27\uff0c\u4f46\u4e0d\u662f\u201c\u4f60\u201d\u4ff1\u4e50\u90e8\u7684\u4e8b\u60c5\uff0c\u90a3\u662f\u653f\u5e9c\u90e8\u95e8\u7684\u4e8b\u60c5\uff01\u843d\u540e\u7684\u539f\u56e0\u6211\u76f8\u4fe1\u5927\u5bb6\u90fd\u77e5\u9053\uff0c\u90a3\u5c31\u662f\u65e9\u5e74\u8150\u8d25\u9020\u6210\u7684\u3002\u6709\u94b1\u4eba\u80fd\u4e0a\u8db3\u6821\uff0c\u80fd\u63a5\u53d7\u57f9\u8bad\uff0c\u4e0d\u7ba1\u6709\u6ca1\u6709\u5929\u8d4b\u548c\u80fd\u529b\uff0c\u53ea\u8981\u6709\u94b1\u5c31\u884c\uff01\u6ca1\u94b1\u7684\u4eba\u8be5\u5e72\u561b\u5e72\u561b\u53bb\uff01\u6211\u5c0f\u65f6\u5019\u5f88\u70ed\u7231\u8db3\u7403\uff0c\u5c0f\u5b66\u4e00\u5e74\u7ea7\u7684\u65f6\u5019\u4f53\u80b2\u8001\u5e08\u8bf4\u6211\u6709\u7075\u6d3b\u8dd1\u4f4d\u7684\u80fd\u529b\uff0c\u6bcf\u5468\u4e09\u5468\u4e94\u6700\u540e\u4e00\u8282\u8bfe\u90fd\u88ab\u5f81\u5146\u6821\u56ed\u57f9\u8bad\u3002\u5230\u4e86\u4e8c\u5e74\u7ea7\u95ee\u9898\u6765\u4e86\uff0c\u6821\u65b9\u8981\u62bd\u53d6\u6211\u4eec\u8fd9\u4e9b\u5c0f\u670b\u53cb\u5230\u5e02\u533a\u4e13\u4e1a\u8db3\u7403\u57f9\u8bad\u673a\u6784\u8bad\u7ec3\uff0c\u4e00\u5b66\u671f\u8d39\u7528\u662f1200\u5143\uff01\u60f3\u60f3\u5f53\u5e74\u662f93\u5e74\uff0c\u6211\u7684\u5b66\u8d39\u624d100\u5143\u5de6\u53f3\uff01\u5728\u90a3\u4e2a\u5e74\u4ee31200\u5143\u5bf9\u4e8e\u4e00\u4e2a\u666e\u901a\u5bb6\u5ead\u6765\u8bb2\u4e5f\u662f\u5927\u6570\u76ee\u4e86\uff01\u6211\u5728\u5bb6\u54ed\u95f9\u6b7b\u6d3b\u8981\u62a5\u540d\uff0c\u53ef\u662f\u6211\u7684\u7236\u4eb2\u5b89\u6170\u6211\u8bf4:\u8d39\u7528\u592a\u9ad8\u4e86\uff0c\u53ea\u8981\u4f60\u52aa\u529b\u5b66\u4e60\u5c06\u6765\u4e5f\u80fd\u6709\u51fa\u606f\u7684\uff01\u8fd9\u53e5\u8bdd\u5f7b\u5e95\u51fb\u788e\u6211\u7684\u8db3\u7403\u68a6\u3002\u5982\u679c\u5f53\u521d\u653f\u5e9c\u90e8\u95e8\u80fd\u5728\u6821\u56ed\u89c6\u5bdf\u82d7\u5b50\uff0c\u56fd\u5bb6\u57f9\u517b\uff0c\u81f3\u4e8e\u73b0\u5728\u8fde\u8fdb\u4e16\u754c\u676f\u90fd\u56f0\u96be\u5417\uff1f\u5c31\u6bd4\u5982\u8bf4\u6052\u5927\u7684\u738b\u4e0a\u6e90\uff01\u4ed6\u4f55\u5fb7\u4f55\u80fd\u8e22\u8fb9\u540e\u536b\u548c\u4e2d\u573a\uff1f\u5c31\u4ed6\u7684\u90a3\u4e2a\u6c34\u51c6\u771f\u8fd8\u4e0d\u5982\u6211\u8fd9\u4e1a\u4f59\u7231\u597d\u8005\u3002\u6211\u4e0d\u662f\u9488\u5bf9\u4efb\u4f55\u4eba\uff0c\u6211\u53ea\u662f\u8bf4\u4e8b\u5b9e\uff01\u6211\u8bf4\u8fd9\u4e48\u591a\u53ea\u662f\u4e0d\u5e0c\u671b\u81ea\u5df1\u559c\u7231\u7684\u7403\u961f\u5815\u843d\u800c\u5df2\uff0c\u4eca\u5929\u76840--3\u5145\u5206\u8bf4\u660e:\u6709\u5916\u63f4\u548c\u6ca1\u6709\u5916\u63f4\u7684\u5dee\u8ddd\uff0c\u800c\u4e0d\u662f\u7b2c\u4e09\u540d\u548c\u6700\u540e\u4e00\u540d\u7684\u8f83\u91cf\uff0c\u66f4\u4e0d\u662f\u7206\u51b7\uff01", "up": 10}, {"content": "\u5e7f\u5dde\u6052\u5927\u540d\u5bbf\u738b\u4e0a\u6e90\u5927\u5c06\u8fd8\u662f\u4e00\u5982\u65e2\u5f80\u5730\u81ea\u5e26\u5c5e\u6027\uff01\u5475\u5475\u54c8\u54c8\u54c8", "up": 8}, {"content": "\u56fd\u5b89\u7403\u8ff7\u8868\u793a\u770b\u5230\u738b\u4e0a\u6e90\u7684\u65f6\u5019\u6211\u5077\u5077\u7684\u7b11\u4e86", "up": 8}]};
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
