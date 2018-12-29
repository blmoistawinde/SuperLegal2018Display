var data = {"person_name": "\u5409\u5c14", "nicknames": "\u5409\u5c14", "aspects": {"\u5916\u63f4": 0.3433198934925382, "\u7403\u5458": 0.4521523568256865, "\u7403\u8ff7": 0.5634965197900369, "\u9632\u5b88": 0.593828132592597, "\u6bd4\u8d5b": 0.4609434219197823, "\u4e0b\u534a\u573a": 0.546331153879278, "\u540e\u9632": 0.2854644841391254, "\u8fdb\u653b": 0.737534145873571, "\u4f20\u7403": 0.6753328456331658, "\u72af\u89c4": 0.5103163120990406}, "overall_heat": 127.0, "overall_polar": 0.314, "name": "113", "nationality": "\u5df4\u897f", "position": "\u540e\u536b", "goal": "3", "assist": "0", "team_name": "\u5c71\u4e1c\u9c81\u80fd\u6cf0\u5c71", "name_en": "Carlos Gilberto Nasc", "age": "31", "height": "192", "weight": "87"};
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
var topic_keywords = {"0": [{"name": "\u5409\u5c14", "value": 0.03389365978439613}, {"name": "\u9c81\u80fd", "value": 0.030239356842682263}, {"name": "\u5916\u63f4", "value": 0.02475790243011146}, {"name": "\u4f69\u83b1", "value": 0.020190023752969122}, {"name": "\u4e2d\u573a", "value": 0.011054266398684452}, {"name": "\u4e00\u4e2a", "value": 0.010140690663255984}, {"name": "\u5854\u5c14\u5fb7\u5229", "value": 0.009227114927827518}, {"name": "\u524d\u573a", "value": 0.00831353919239905}, {"name": "\uff01", "value": 0.007399963456970583}, {"name": "\u6052\u5927", "value": 0.007399963456970583}, {"name": "\u6253", "value": 0.007399963456970583}, {"name": "\u540e\u536b", "value": 0.006486387721542116}, {"name": "\u54ed", "value": 0.006486387721542116}, {"name": "\u683c\u5fb7\u65af", "value": 0.006486387721542116}, {"name": "\u5df4\u897f", "value": 0.005572811986113649}, {"name": "\u5d14\u9e4f", "value": 0.005572811986113649}, {"name": "\u592a", "value": 0.005572811986113649}, {"name": "\uff1f", "value": 0.005572811986113649}, {"name": "\u73b0\u5728", "value": 0.005572811986113649}, {"name": "\u7403\u5458", "value": 0.005572811986113649}, {"name": "\u7b11", "value": 0.005572811986113649}, {"name": "\u6362", "value": 0.005572811986113649}, {"name": "\u56fd\u5bb6\u961f", "value": 0.004659236250685182}, {"name": "\u4e2d\u8d85", "value": 0.004659236250685182}, {"name": "\u80fd\u529b", "value": 0.004659236250685182}, {"name": "\u901f\u5ea6", "value": 0.004659236250685182}, {"name": "\u660e\u5e74", "value": 0.004659236250685182}, {"name": "\u5dee", "value": 0.004659236250685182}, {"name": "\u5c0f", "value": 0.004659236250685182}, {"name": "\u524d\u950b", "value": 0.004659236250685182}], "1": [{"name": "\u5409\u5c14", "value": 0.05027691242644514}, {"name": "\u9c81\u80fd", "value": 0.029508480443059888}, {"name": "\uff1f", "value": 0.0165282104534441}, {"name": "\uff01", "value": 0.01566285912080305}, {"name": "\u5927\u96f7", "value": 0.012201453790238837}, {"name": "\u597d", "value": 0.012201453790238837}, {"name": "\u7403\u5458", "value": 0.00960539979231568}, {"name": "\u52a0\u6cb9", "value": 0.008740048459674628}, {"name": "\u8e22", "value": 0.007874697127033576}, {"name": "\u771f\u662f", "value": 0.007874697127033576}, {"name": "\u9632\u5b88", "value": 0.007009345794392523}, {"name": "\u4f69\u83b1", "value": 0.007009345794392523}, {"name": "\u8fd9\u573a", "value": 0.007009345794392523}, {"name": "\u524d\u573a", "value": 0.007009345794392523}, {"name": "\u4f9d\u7136", "value": 0.006143994461751471}, {"name": "\u8fdb\u653b", "value": 0.006143994461751471}, {"name": "\u786e\u5b9e", "value": 0.006143994461751471}, {"name": "\u6bd4\u8d5b", "value": 0.006143994461751471}, {"name": "\u4eba", "value": 0.006143994461751471}, {"name": "\u8868\u73b0", "value": 0.006143994461751471}, {"name": "\u5439", "value": 0.005278643129110419}, {"name": "\u56fd\u5b89", "value": 0.005278643129110419}, {"name": "\u5389\u5bb3", "value": 0.005278643129110419}, {"name": "\u4f20\u7403", "value": 0.005278643129110419}, {"name": "\u4eca\u5929", "value": 0.005278643129110419}, {"name": "\u5854\u795e", "value": 0.005278643129110419}, {"name": "\u4e0b", "value": 0.004413291796469367}, {"name": "\u738b\u5927\u96f7", "value": 0.004413291796469367}, {"name": "\u9e21\u513f", "value": 0.004413291796469367}, {"name": "\u683c\u5fb7\u65af", "value": 0.004413291796469367}], "2": [{"name": "\uff01", "value": 0.05337737055188579}, {"name": "\u5409\u5c14", "value": 0.04485403792883017}, {"name": "\u9c81\u80fd", "value": 0.028872789260600894}, {"name": "\uff1f", "value": 0.01608779032601747}, {"name": "\u5916\u63f4", "value": 0.012891540592371617}, {"name": "\u770b\u770b", "value": 0.00862987428084381}, {"name": "\u627e", "value": 0.00862987428084381}, {"name": "\u8e22", "value": 0.00862987428084381}, {"name": "\u7403", "value": 0.007564457702961857}, {"name": "\u88c1\u5224", "value": 0.007564457702961857}, {"name": "\u78b0\u5230", "value": 0.007564457702961857}, {"name": "\u4e00\u4e2a", "value": 0.007564457702961857}, {"name": "\u56de\u653e", "value": 0.006499041125079905}, {"name": "\u6052\u5927", "value": 0.006499041125079905}, {"name": "\u7403\u5458", "value": 0.006499041125079905}, {"name": "\u72af\u89c4", "value": 0.006499041125079905}, {"name": "\u5e94\u8be5", "value": 0.006499041125079905}, {"name": "\u8d5b\u5b63", "value": 0.005433624547197954}, {"name": "\u8fdb\u7403", "value": 0.005433624547197954}, {"name": "\u5df4\u897f", "value": 0.005433624547197954}, {"name": "\u660e\u663e", "value": 0.005433624547197954}, {"name": "\u6253", "value": 0.005433624547197954}, {"name": "\u95ee\u9898", "value": 0.005433624547197954}, {"name": "\u8fd9\u573a", "value": 0.004368207969316002}, {"name": "\u56fd\u5bb6\u961f", "value": 0.004368207969316002}, {"name": "\u592a", "value": 0.004368207969316002}, {"name": "\u8d8a\u4f4d", "value": 0.004368207969316002}, {"name": "\u4e0a\u534a\u573a", "value": 0.004368207969316002}, {"name": "\u5218\u519b\u5e05", "value": 0.004368207969316002}, {"name": "\u4e00\u65b9", "value": 0.004368207969316002}]};
var topic_summary = {"0": [{"content": "\u9c81\u80fd\u4eca\u665a\u80fd\u62ff\u4e00\u5206\u7684\u4e09\u5927\u529f\u81e3:\u738b\u5927\u96f7 \u5409\u5c14 \u5df4\u574e\u5e03[\u7b11\u54ed]", "up": 108}, {"content": "\u660e\u5e74\u8981\u662f\u674e\u9704\u9e4f\u53bb\u56fd\u5bb6\u96c6\u8bad\u961f\uff0c\u9c81\u80fd\u8fd8\u628a\u9a6c\u52a0\u7279\u8bf7\u6765\u5427\uff0c\u4e09\u5e74\u65f6\u95f4\u628a\u9c81\u80fd\u7684\u57fa\u7840\u6253\u7262\u592f\u5b9e\u3002\u5916\u63f4\u7559\u5409\u5c14\u3001\u4f69\u83b1\uff0c\u628a\u683c\u5fb7\u65af\u5916\u79df\u51fa\u53bb\u7ec3\u7ea7\uff0c\u627e\u4e2a\u901f\u5ea6\u5feb\u7684\u5df4\u897f\u524d\u950bor\u975e\u6d32\u7684\u9ed1\u53c8\u786c\uff0c\u518d\u627e\u4e2a\u4e2d\u573a\u725b\u903c\u5916\u63f4\uff0c\u5d14\u9e4f\u3001\u5468\u6d77\u6ee8\u3001\u5218\u5f6c\u5f6c\u3001\u5434\u5174\u6db5\u3001\u6210\u6e90\u3001\u674e\u5fae\uff0c\u8be5\u9000\u4e8c\u7ebf\u9000\u4e8c\u7ebf\uff0c\u8be5\u5916\u79df\u7684\u5916\u79df\uff0c\u817e\u51fa\u540d\u989d\u591a\u63d0\u62d4\u4e9b\u5e74\u8f7b\u7684\u4e0a\u6765\u3002\u8fd9\u4e48\u5730\u641e\u4e09\u5e74\uff0c\u9c81\u80fd\u5927\u4e1a\u53ef\u6210\u3002 \u54c8\u54c8 11.30\u8db3\u534f\u676f\u5fc5\u80dc\uff01", "up": 74}, {"content": "\u592a\u4ed6\u3002\u5988\u5f00\u5fc3\u4e86\uff0c\u4e2d\u573a\u90a3\u4e48\u591a\u8bf4\u4e0d\u770b\u9c81\u80fd\u7684\uff0c\u90fd\u5feb\u56de\u6765\u5427\uff0c\u4eca\u5e74\u8fd9\u961f\u8fd8\u884c\uff0c\u4e2d\u573a\u90fd\u9a82\u9c81\u80fd\u4f20\u4e2a\u5012\u4e09\u89d2\u80fd\u6b7b\u5417\uff0c\u4e0b\u534a\u573a\u5012\u4e09\u89d2\u4e00\u4e2a\u63a5\u4e00\u4e2a\uff0c\u8c22\u8c22\u4f60\u4eec\uff0c\u4e2d\u573a\u9a82\u4f69\u83b1\u50bb\u5927\u4e2a\uff0c\u6ca1B\u7528\u7684\uff0c\u5c0f\u5c55\u8179\u6ede\u7a7a\u5934\u7403\u5f00\u4e0d\u5f00\u5fc3\uff0c\u4e2d\u573a\u9a82\u50bb\u5b50\u624d\u53bb\u7ed9\u674e\u9704\u9e4f\u9053\u6b49\u7684\uff0c\u6293\u7d27\u4e0b\u8bfe\u7684\uff0c\u6362\u5d14\u9e4f\u4e0a\u6765\u63a5\u7740\u5c31\u52a9\u653b\u90a3\u4e0b\uff0c\u8138\u75bc\u5417\uff0c\u4e2d\u573a\u8bf4\u4eca\u5929\u5409\u5c14\u6ca1\u5e26\u8111\u5b50\u7684\uff0c\u8fdb\u7403\u90a3\u4e0b\uff0c\u6e05\u9192\u6ca1\uff0c\u4ee5\u524d\u55b7\u5d14\u9e4f\u9760\u5173\u7cfb\u56de\u6765\u517b\u8001\u7684\uff0c\u4eca\u5929\u770b\u90a3\u4f4d\u7f6e\u611f\uff0c\u6709\u6ca1\u670908\u5e74\u7684\u611f\u89c9\u3002\u3002\u3002\u3002\u3002\u3002\u54c8\u54c8\u54c8[\u54c8\u54c8]\u5bf9\uff0c\u6ca1\u9519\u5728\u4e0b\u59d3\u9a6c\uff0c\u5360\u4e00\u540e\u5b57\uff0c\u540d\u70ae\uff0c\u6c5f\u6e56\u4eba\u79f0\u9a6c\u540e\u70ae[\u7b11\u54ed][\u7b11\u54ed][\u7b11\u54ed]", "up": 29}, {"content": "\u4f69\u83b1\uff1a\u5854\u5c14\u5fb7\u5229\uff0c\u5409\u5c14\uff0c\u91d1\u656c\u9053\uff0c\u4eca\u665a\u53bb\u6211\u5bb6\u73a9\u554a\uff0c\u4f60\u5ac2\u5b50\u5305\u7684\u997a\u5b50\u554a", "up": 14}, {"content": "\u9c81\u80fd\u6389\u961f\u662f\u8fdf\u65e9\u7684\uff0c\u4e0d\u662f\u80fd\u529b\u4e0d\u884c\uff0c\u4f60\u4eec\u770b\u770b\u4ed6\u7684\u5916\u63f4\u914d\u7f6e\uff0c\u5409\u5c14 \u6c34\u5854 \u4f69\u83b1\uff0c\u8fd9\u79cd\u7ec4\u5408\u4e00\u770b\u5c31\u662f\u6253\u56e2\u961f\u7684\uff0c\u524d\u573a\u9664\u4e86\u6c34\u5854\u6709\u6301\u7403\u7a81\u51fb\u80fd\u529b\u4ee5\u5916\uff0c\u57fa\u672c\u5168\u9760\u914d\u5408+\u4e0b\u5e95\u627e\u4f69\u83b1...\u7b80\u800c\u8a00\u4e4b\uff0c\u73b0\u5728\u4e2d\u8d85\u90fd\u628a\u5916\u63f4\u653e\u5728\u4e2d\u524d\u573a\u7684\uff0c\u4e0a\u6e2f \u6052\u5927 \u56fd\u5b89\u90fd\u662f\uff0c\u6240\u4ee5\u4e00\u65e6\u9c81\u80fd\u6574\u4f53\u6253\u4e0d\u51fa\u6765 \u4e0d\u987a\u7545 \u60f3\u9760\u5916\u63f4\u5355\u4e2a\u7206\u70b9\u51b3\u89e3\u95ee\u9898 \u57fa\u672c\u4e0d\u592a\u53ef\u80fd... \u518d\u8bf4\u8bf4\u56fd\u5b89 \u8fdb\u653b\u4e09\u9a7e\u9a6c\u8f66\u5e76\u9a7e\u9f50\u9a71 \u9632\u5b88\u4e2d\u4e0b\u6e38 \u600e\u4e48\u62ff\u51a0\u519b\uff1f \u51a0\u519b \u8fd8\u662f \u6052\u5927 \u4e0a\u6e2f\u4e4b\u4e89\uff0c\u4e0d\u559c\u52ff\u55b7", "up": 10}], "1": [{"content": "\u5409\u5c14\u548c\u5927\u96f7\u4fe9\u4eba\u529e\u4e86\u4eca\u5929\u6240\u6709\u7684\u4e8b", "up": 1286}, {"content": "\u97e9\u9555\u6cfd\u4eca\u5929\u5168\u573a\u6700\u4f73\uff0c\u5409\u5c14\u4f9d\u7136\u7a33\uff0c\u5854\u795e\u7eed\u7ea6\u5427\uff0c\u683c\u5fb7\u65af\u8fd8\u662f\u6ca1\u80fd\u9002\u5e94\u4e2d\u8d85\u3002", "up": 147}, {"content": "\u59da\u5747\u665f\u4e0d\u9519\uff0cT9 \u4f9d\u7136\u98ce\u9a9a\uff0c\u84bf\u4fca\u95f5\u51fa\u7403\u4f9d\u7136\u56fd\u5185\u7fd8\u695a\uff0c\u4f69\u83b1\u4f9d\u7136\u7f3a\u4e4f\u8fd0\u6c14\uff0c\u91d1\u656c\u9053\u4f9d\u7136\u5f88\u62fc\uff0c\u6234\u8001\u677f\u4f9d\u7136\u813e\u6c14\u706b\u7206\uff0c\u5409\u5c14\u4f9d\u7136\u7a33\u7684\u4e00\u6279\uff0c\u552f\u4e00\u6709\u70b9\u5c0f\u5c0f\u4e0d\u5f00\u5fc3\u7684\uff0c\u4f69\u5ac2\u6ca1\u770b\u5230", "up": 22}, {"content": "\u9c81\u80fd\u554a\u9c81\u80fd\uff0c\u8fd9\u4e00\u573a\u672c\u6765\u662f\u5bc4\u4e88\u539a\u671b\u7684\uff0c\u771f\u7684\u662f\u5931\u671b\u3002\u540e\u573a\u9760\u773c\u795e\u9632\u5b88\uff0c\u4e2d\u573a\u57fa\u672c\u6ca1\u6709\uff0c\u4f20\u7403\u4e0d\u8d85\u8fc7\u4e09\u811a\u5c31\u6389\u4e86\uff0c\u524d\u573a\u4e22\u7403\u4ece\u4e0d\u53cd\u62a2\uff0c\u4e00\u6837\u7684\u573a\u5730\uff0c\u5e0c\u4e00\u6837\u7684\u6761\u4ef6\uff0c\u5c31\u4f60\u4eec\u7d2f\u5417\uff1f\u5317\u4eac\u7684\u7403\u5458\u600e\u4e48\u8dd1\u7684\uff0c\u600e\u4e48\u4f20\u7403\uff0c\u600e\u4e48\u62a2\u7403\u7684\uff1f\u7b2c91\u5206\u949f\u903c\u7684\u5409\u5c14\u81ea\u5df1\u5e26\u7403\u5230\u4e2d\u573a\uff0c\u7adf\u7136\u627e\u4e0d\u7740\u4eba\u4f20\u7403\uff0c\u90fd\u5728\u90a3\u91cc\u7ad9\u7740\u770b\u5417\uff1f\u591a\u62dc\u62dc\u5927\u96f7\u5427\uff0c\u5168\u9760\u5927\u96f7\u8fd9\u573a\u6bd4\u8d5b\u6ca1\u88ab\u82b1\u3002\u739b\u5fb7\u3002", "up": 13}, {"content": "\u90d1\u94ee\u6ca1\u6709\u4e86\u521a\u51fa\u9053\u65f6\u751f\u9f99\u6d3b\u864e\u7684\u6837\u5b50 \u5434\u5174\u6db5 \u5218\u5f6c\u5f6c\u51fa\u4e8e\u62a5\u5e9f\u72b6\u6001 \u84bf\u961f\u548c\u59da\u5747\u665f\u4e2d\u89c4\u4e2d\u77e9\u7684\u5b8c\u6210\u6bcf\u4e00\u573a\u6bd4\u8d5b \u8001\u5854\u65f6\u7075\u65f6\u4e0d\u7075 \u4f69\u83b1\u7ecf\u5e38\u5fd8\u8bb0\u5e26\u5c04\u95e8\u9774 U23\u4e5f\u53ea\u662f\u5f62\u52bf\u4e3b\u4e49 \u53ea\u6709\u5927\u96f7 \u5409\u5c14 \u6234\u8001\u677f \u91d1\u656c\u9053\u770b\u8d77\u6765\u8ba9\u4eba\u653e\u5fc3 \u5f15\u4ee5\u4e3a\u50b2\u7684\u9752\u8bad\u54ea\u53bb\u4e86\uff1f\u66fe\u51e0\u4f55\u65f6\u79f0\u9738\u4e2d\u8d85\u7684\u6a58\u7ea2\u8272\u98ce\u66b4\u5462\uff1f\u771f\u5fc3\u5e0c\u671b\u6559\u6388\u80fd\u6765 \u63d0\u62d4\u4e00\u6279\u65b0\u4eba\u6765\u6362\u6389\u5931\u53bb\u51a0\u519b\u5fc3\u7684\u4e00\u4e9b\u9c81\u80fd\u7403\u5458", "up": 11}], "2": [{"content": "\u5927\u8fde\u80fd\u8d62\u6052\u5927\u4e0a\u6e2f\u51ed\u4ec0\u4e48\u5c31\u4e0d\u80fd\u8d62\u9c81\u80fd\uff1f\u9c81\u80fd\u80fd\u8f93\u8d35\u5dde\u51ed\u4ec0\u4e48\u5c31\u4e0d\u80fd\u8f93\u5927\u8fde\uff1f\u9c81\u80fd\u4e0a\u534a\u573a\u81ea\u5df1\u8e22\u7684\u548c\u5c4e\u4e00\u6837\u4e5f\u6028\u88c1\u5224\u5457\uff1f\u5409\u5c14\u662f\u4e0d\u662f\u6ca1\u8e22\u5230\u7403\u8e22\u5230\u4e86\u7a46\u8c22\u594e\uff1f\u5361\u62c9\u65af\u79d1\u5c04\u95e8\u65f6\u5019\u662f\u4e0d\u662f\u91d1\u5f3a\u8fd8\u6ca1\u8d8a\u4f4d\uff1f\u76f4\u64ad\u5427\u91cc\u6709\u52a8\u56fe\u53ef\u4ee5\u770b\u554a\uff01\u81ea\u5df1\u8e22\u7684\u548c\u5c4e\u4e00\u6837\u4e0d\u627e\u627e\u81ea\u5df1\u539f\u56e0\uff0c\u5c31\u770b\u4e0d\u5f97\u522b\u4eba\u597d\u5457\uff01", "up": 372}, {"content": "\u6700\u540e\u5409\u5c14\u7edd\u6740\u9c81\u80fd\u8fd9\u8d5b\u5b63\u5c31\u5b8c\u7f8e\u4e86\uff01", "up": 10}, {"content": "\u4e0d\u77e5\u9053\u5df4\u897f\u6559\u7ec3\u7ec4\u7ed9\u5854\u5c14\u5fb7\u91cc\u548c\u5409\u5c14\u6253\u51e0\u5206", "up": 8}, {"content": "\u628a\u5409\u5c14\u64a4\u4e0b\uff0c\u4e0a\u683c\u5fb7\u65af\uff0c\u4e0a\u4e09\u5916\u63f4\u8ddf\u6052\u5927\u6253\u5bf9\u653b\uff0c\u62fc\u4e2a\u4f60\u6b7b\u6211\u6d3b\u7684\uff0c\u54ce\uff01\u674e\u5c0f\u9e4f\u7075\u6d3b\u4f7f\u7528\u6218\u672f\u5440\uff0c\u8be5\u4e0b\u8bfe\u4e86\u2026\u2026\u2026\u2026", "up": 5}, {"content": "\u636e\u8bf4\u8fd9\u573a\u6709\u5df4\u897f\u56fd\u5bb6\u961f\u5de5\u4f5c\u4eba\u5458\u5bf9\u5409\u5c14\u8fdb\u884c\u8003\u5bdf\uff0c\u5c31\u5409\u5c14\u5931\u8bef\u9020\u70b9\u8fd9\u4e00\u4e0b\uff0c\u76f4\u63a5\u65ad\u9001\u4e86\u81ea\u5df1\u8fdb\u56fd\u5bb6\u961f\u7684\u5e0c\u671b\u3002", "up": 5}]};
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
