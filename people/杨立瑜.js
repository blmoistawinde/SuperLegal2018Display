var data = {"person_name": "\u6768\u7acb\u745c", "nicknames": "\u6768\u7acb\u745c", "aspects": {"\u6bd4\u8d5b": 0.4368690608289505, "\u8fdb\u7403": 0.3990713479728338, "\u4e0b\u534a\u573a": 0.43392139870099233, "\u5916\u63f4": 0.5168472872215799, "\u9632\u5b88": 0.5051648749088232, "\u8fdb\u653b": 0.637061565589317, "\u7403\u5458": 0.5700280490590465, "\u52a9\u653b": 0.15353339998965987, "\u72af\u89c4": 0.6532996482127744, "\u4f20\u7403": 0.8663789630782279}, "overall_heat": 148.0, "overall_polar": 0.361, "name": "9", "nationality": "\u4e2d\u56fd", "position": "\u524d\u950b", "goal": "2", "assist": "3", "team_name": "\u5e7f\u5dde\u6052\u5927\u6dd8\u5b9d", "name_en": "Yang Liyu", "age": "21", "height": "175", "weight": "65"};
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
var topic_keywords = {"0": [{"name": "\u6768\u7acb\u745c", "value": 0.03238376780435367}, {"name": "\u6052\u5927", "value": 0.020290244557914536}, {"name": "\uff01", "value": 0.01760279494759473}, {"name": "\u4e00\u4e2a", "value": 0.01625907014243483}, {"name": "\u524d", "value": 0.01625907014243483}, {"name": "\u90dc\u6797", "value": 0.014915345337274925}, {"name": "\u6709\u70b9", "value": 0.012227895726955118}, {"name": "\u8fdb\u653b", "value": 0.009540446116635312}, {"name": "\u7403", "value": 0.009540446116635312}, {"name": "\u8fd9\u573a", "value": 0.009540446116635312}, {"name": "\u53d1\u6325", "value": 0.008196721311475409}, {"name": "\u5361\u7eb3\u74e6\u7f57", "value": 0.008196721311475409}, {"name": "\u6362\u4eba", "value": 0.008196721311475409}, {"name": "\u4e8e\u6c49\u8d85", "value": 0.008196721311475409}, {"name": "\u592a", "value": 0.006852996506315506}, {"name": "\u5f20", "value": 0.006852996506315506}, {"name": "\u6362", "value": 0.006852996506315506}, {"name": "\u5206\u949f", "value": 0.006852996506315506}, {"name": "\u4eca\u5929", "value": 0.006852996506315506}, {"name": "\u7ec8\u7a76", "value": 0.006852996506315506}, {"name": "\u5c40\u9762", "value": 0.005509271701155603}, {"name": "\u6253\u4e0d\u5f00", "value": 0.005509271701155603}, {"name": "\u5361\u5e05", "value": 0.005509271701155603}, {"name": "\u674e\u5b66\u9e4f", "value": 0.005509271701155603}, {"name": "\u771f\u7684", "value": 0.005509271701155603}, {"name": "\uff1f", "value": 0.005509271701155603}, {"name": "23", "value": 0.005509271701155603}, {"name": "\u9093\u6db5\u6587", "value": 0.005509271701155603}, {"name": "\u90d1\u9f99", "value": 0.005509271701155603}, {"name": "\u9ad8\u62c9\u7279", "value": 0.005509271701155603}], "1": [{"name": "\u6768\u7acb\u745c", "value": 0.06454037800687284}, {"name": "\uff01", "value": 0.03125}, {"name": "\u6052\u5927", "value": 0.021585051546391752}, {"name": "\u6253", "value": 0.016215635738831613}, {"name": "\uff1f", "value": 0.00977233676975945}, {"name": "\u4e0d\u9519", "value": 0.008698453608247421}, {"name": "\u6bd4\u8d5b", "value": 0.008698453608247421}, {"name": "\u8868\u73b0", "value": 0.007624570446735394}, {"name": "\u8e22", "value": 0.007624570446735394}, {"name": "\u4e0a\u573a", "value": 0.007624570446735394}, {"name": "\u5361\u5e05", "value": 0.007624570446735394}, {"name": "\u5206\u949f", "value": 0.006550687285223367}, {"name": "\u6362", "value": 0.006550687285223367}, {"name": "\ud83d\udc4b", "value": 0.006550687285223367}, {"name": "\ud83d\udc66", "value": 0.006550687285223367}, {"name": "\u5e94\u8be5", "value": 0.006550687285223367}, {"name": "\u6362\u4e0a", "value": 0.00547680412371134}, {"name": "\u9632\u5b88", "value": 0.00547680412371134}, {"name": "\u65f6\u95f4", "value": 0.00547680412371134}, {"name": "\u4e0b\u534a\u573a", "value": 0.00547680412371134}, {"name": "\u5510\u8bd7", "value": 0.00547680412371134}, {"name": "U23", "value": 0.00547680412371134}, {"name": "u23", "value": 0.004402920962199312}, {"name": "\u540e", "value": 0.004402920962199312}, {"name": "\u6c34\u5e73", "value": 0.004402920962199312}, {"name": "\u54c8\u54c8\u54c8", "value": 0.004402920962199312}, {"name": "\u4eca\u5929", "value": 0.004402920962199312}, {"name": "\u4eba", "value": 0.004402920962199312}, {"name": "\u6253\u8138", "value": 0.004402920962199312}, {"name": "\u9a82", "value": 0.004402920962199312}], "2": [{"name": "\u6768\u7acb\u745c", "value": 0.06148357119150348}, {"name": "\uff01", "value": 0.05650514437437769}, {"name": "\u6052\u5927", "value": 0.02248589445735148}, {"name": "\u7edd\u6740", "value": 0.012529040823099899}, {"name": "\u597d", "value": 0.010869565217391304}, {"name": "\uff1f", "value": 0.010869565217391304}, {"name": "\u90dc\u6797", "value": 0.009210089611682707}, {"name": "\u7403", "value": 0.009210089611682707}, {"name": "\uff1b", "value": 0.007550614005974112}, {"name": "\u8fdb\u7403", "value": 0.007550614005974112}, {"name": "\u8868\u73b0", "value": 0.006720876203119813}, {"name": "\u5e94\u8be5", "value": 0.006720876203119813}, {"name": "\u6bd4\u8d5b", "value": 0.005891138400265516}, {"name": "\u8fd9\u573a", "value": 0.005891138400265516}, {"name": "\u6700\u540e", "value": 0.0050614005974112175}, {"name": "\u673a\u4f1a", "value": 0.0050614005974112175}, {"name": "\u5bf9\u4e0d\u8d77", "value": 0.0050614005974112175}, {"name": "\u7403\u5458", "value": 0.0050614005974112175}, {"name": "\u5218\u6bbf\u5ea7", "value": 0.0050614005974112175}, {"name": "\u4e00\u4e2a", "value": 0.0050614005974112175}, {"name": "\u4eca\u5929", "value": 0.0050614005974112175}, {"name": "\u8131\u8863", "value": 0.0050614005974112175}, {"name": "\u4f20\u7403", "value": 0.0050614005974112175}, {"name": "\u592a", "value": 0.004231662794556919}, {"name": "\u4e0a\u573a", "value": 0.004231662794556919}, {"name": "\u4eba", "value": 0.004231662794556919}, {"name": "\u90d1\u667a", "value": 0.004231662794556919}, {"name": "\u8e22", "value": 0.004231662794556919}, {"name": "\u7533\u82b1", "value": 0.004231662794556919}, {"name": "\u9ec4\u535a\u6587", "value": 0.004231662794556919}]};
var topic_summary = {"0": [{"content": "\u8bf4\u53e5\u5b9e\u8bdd\uff0c\u7b2c\u4e00\u4e2a\u6362\u4eba\u592a\u5931\u8d25\uff0c\u6768\u7acb\u745c\u7684\u7075\u5149\u4e00\u73b0\u62ef\u6551\u4e86\u5361\u5e05\u3002\u540e\u536b\u7ebf\u4e0a\u552f\u4e00\u4e00\u4e2a\u79ef\u6781\u9632\u5b88\u7684\u5c31\u662f\u9093\u6db5\u6587\uff0c\u4ec5\u4ec5\u662f\u56e0\u4e3a\u8fdb\u653b\u4e0d\u5229\u5c31\u64a4\u4e0b\uff0c\u7ed3\u679c\u56de\u5934\u9a6c\u4e0a\u5f205\u5c31\u88ab\u7206\u7a7f\u4e00\u8def\uff0c\u800c\u4e14\u4e34\u8fd1\u7ec8\u573a\u7684\u65f6\u5019\u53c8\u662f\u90a3\u4e00\u8def\u9669\u4e9b\u5bfc\u81f4\u6052\u5927\u60e8\u906d\u7edd\u6740\u3002\u51af\u6f47\u9706\u4e0d\u5e94\u8be5\u7ed9\u4ed6\u90a3\u4e48\u591a\u957f\u4f20\u7684\u7403\u6743\uff0c\u8d28\u91cf\u5dee\u800c\u4e14\u6548\u679c\u4e5f\u5f88\u5dee\uff0c\u5361\u5e05\u4e0d\u5e94\u8be5\u8fc7\u5ea6\u7eb5\u5bb9\u540e\u9632\u7ebf\u4e0a\u7684\u67d0\u4e9b\u5927\u7237", "up": 137}, {"content": "\u6052\u5927\u7684\u540e\u9632\u9664\u4e86\u6885\u65b9\u9760\u8c31\u4e00\u70b9\uff0c\u5f205\u3001\u51af6\u5df2\u7ecf\u4e0d\u80fd\u7528\u4e86\uff0c\u662f\u4e24\u4e2a\u5b9a\u65f6\u70b8\u5f39\uff01\u8fd9\u6837\u70c2\u7684\u540e\u9632\u7ebf\uff0c\u5361\u7eb3\u74e6\u7f57\u5fc3\u91cc\u7adf\u7136\u6ca1\u70b9 \u6570\uff0c\u672c\u573a\u6768\u7acb\u745c\u72b6\u6001\u8fd8\u53ef\u4ee5\uff0c\u8981\u4e48\u4e0d\u6362\u8981\u4e48\u5f53\u673a\u7acb\u65ad\u6362\u90dc\u6797\uff0c\u7adf\u7136\u6362\u90d1\u9f99\uff1f\u6052\u5927\u6ca1\u620f\uff0c\u5361\u7eb3\u74e6\u7f57\u6bd4\u91cc\u76ae\u3001\u65af\u79d1\u62c9\u91cc\u5dee\u592a\u591a\uff0c\u8981\u8ba9\u8bb8\u5bb6\u5370\u6000\u7591\u4eba\u751f\u5566\uff01", "up": 13}, {"content": "\u53e4\u5fb7\u5229\uff0c\u90d1\u9f99\uff0c\u4e8e\u6c49\u8d85\uff0c\u4e09\u4eba\u8fd9\u573a\u53d1\u6325\u6709\u70b9\u6b20\u4f73\uff0c\u751a\u81f3\u62ff\u4e0d\u4f4f\u7403\uff0c\u5931\u8bef\u592a\u591a\u3002\u9ad8\u62c9\u7279\u56e0\u4e3a\u90dc\u6797\u7684\u4e24\u6b21\u6253\u98de\u7403\uff0c\u6709\u70b9\u4e0d\u6ee1\uff0c\u81ea\u5df1\u4e5f\u60f3\u5355\u5e72\uff0c\u540e\u6765\u81ea\u5df1\u4f53\u529b\u4e5f\u8ddf\u4e0d\u4e0a\u4e86\u3002\u674e\u5b66\u9e4f\u7684\u5de6\u8def\u8fdb\u653b\u8fd9\u573a\u88ab\u9650\u5236\u4f4f\u4e86\uff0c\u6709\u70b9\u6253\u4e0d\u5f00\u5c40\u9762\u3002\u90dc\u8001\u677f\u524d23\u5206\u949f\uff0c\u4eff\u4f5b\u56de\u5230\u4e86\u5341\u5e74\u524d\uff0c\u9093\u6db5\u6587\u4eca\u5929\u5c31\u662f\u4e03\u5e74\u524d\u7684\u5f205\uff0c\u52a9\u653b\uff0c\u4e0b\u5e95\u4f20\u4e2d\uff0c\u4fe8\u7136\u4e00\u4e2a\u53f3\u8fb9\u524d\u536b\u3002\u6768\u7acb\u745c\u771f\u7684\u8fd8\u9700\u8981\u78e8\u70bc\u4e00\u4e0b\uff0c\u90dc\u6797\uff0c\u4e8e\u6c49\u8d85\u8fd9\u4e9b\u6052\u5927\u56fd\u5b57\u53f7\u7684\u4e2d\u950b\u548c\u524d\u950b\u7ec8\u7a76\u8981\u8001\u53bb\uff0c\u8d76\u7d27\u591a\u5b66\u591a\u7ec3\u591a\u8bf7\u6559\u5440\uff0c\u672a\u6765\u6052\u5927\u7684\u5929\uff0c\u90fd\u5c5e\u4e8e\u4f60\u4eec\u554a\u3002\u516b\u5e74\u6052\u8ff7\u4e00\u679a\u5ba2\u89c2\u8bc4\u7403\uff0c\u4e0d\u59a5\u4e4b\u5904\uff0c\u671b\u6d77\u6db5\u3002", "up": 9}, {"content": "\u6768\u7acb\u745c\u548c\u90dc\u6797\u7684\u8868\u73b0\uff0c\u707e\u96be\u7ea7\u522b\u5427", "up": 7}, {"content": "\u5361\u7eb3\u74e6\u7f57\u514d\u8d39\u770b\u4e8680\u5206\u949f\u6bd4\u8d5b\uff0c\u6700\u540e\u61f5\u903c\u4e86\uff01\u767e\u5206\u4e4b\u4e8c\u767e\u7684\u8d23\u4efb\u5728\u5361\uff01\u8d5b\u524d\u8ba1\u5212\u7b2c\u4e00\u4e2a\u6362\u4eba\u540d\u989d\u5e94\u8be5\u662f\u6768\u7acb\u745c\uff0c\u6ca1\u60f3\u5230\u6768\u4eca\u5929\u8e22\u7684\u53ef\u4ee5\uff0c\u4e8e\u662f\u628a\u6362\u4eba\u65f6\u95f4\u538b\u7684\u592a\u540e\u4e86\uff01\u90d1\u667a\u5012\u5730\u4e00\u76f4\u770b\u7740\u6559\u7ec3\u5e2d\uff0c\u5c31\u662f\u4e0d\u6362\uff0c\u5361\u8fd8\u505a\u7740\u538b\u4e0a\u7684\u52a8\u4f5c\uff0c\u4f60\u7559\u7740\u4e00\u4e2a\u6362\u4eba\u540d\u989d\u4e0d\u7528\u5e72\u5417\u5462\uff01\u771f\u60f3\u62bd\u4f60\u4e00\u5634\u5df4", "up": 6}], "1": [{"content": "\u4e0a\u6768\u7acb\u745c\uff0c\u6052\u5927\u4e0d\u662f10\u625311\uff0c\u800c\u662f10\u625312\uff0c\u5b8c\u5168\u662f\u5367\u5e95\u8e22\u6cd5\uff01\u6768\u7acb\u745c\u771f\u7684\u4e0d\u662f\u7eaf\u5fc3\u9ed1\u4f60\uff0c\u6052\u5927U23\u4f60\u83b7\u5f97\u7684\u4e0a\u573a\u65f6\u95f4\u6700\u591a\u53cd\u800c\u8e22\u5f97\u6700\u70c2\uff01\uff01\uff01\u5510\u8bd7\u5c31\u662f\u8e22\u90a310\u5206\u949f\u90fd\u6bd4\u4f60\u597d\uff01\uff01\uff01", "up": 751}, {"content": "\u606d\u559c\u5361\u5e05\u83b7\u5f97\u6768\u7acb\u745c\u4f7f\u7528\u8bf4\u660e\u4e66\uff0c\u5c31\u662f\u4e0b\u96e8\u5929\u653e\u9ca4\u9c7c\uff01", "up": 266}, {"content": "\u4eca\u5929\u90fd\u662f\u571f\u70ae\u8fdb\u7403\uff0c\u4e0d\u9519\uff0c\u503c\u5f97\u4e00\u4e2a\u5927\u8d5e\u3002\u6768\u7acb\u745c\u7ec8\u4e8e\u8e22\u51fa\u6765\u4e86\uff0c\u808c\u8089\u8fd8\u662f\u4e0d\u9519\u7684\u3002", "up": 152}, {"content": "\u51af\u535a\u8f69\u4e0d\u9519\uff0c\u6bd4\u5510\u8bd7\u548c\u6768\u7acb\u745c\u597d\uff0c\u80fd\u9632\u80fd\u653b\uff0c\u62ff\u7403\u4e0d\u614c\uff0c\u5206\u7403\u601d\u8def\u6e05\u6670\uff01", "up": 22}, {"content": "\u5230\u6211\u60f3\u5230\u51e0\u5e74\u540e\u56fd\u5bb6\u961f\u7684\u4e3b\u529b\u9635\u5bb9\u662f\u97e6\u4e16\u8c6a\u3001\u6768\u7acb\u745c\u7b49\u7b49\u2026\u2026****\u60f3\u53c2\u52a0\u4e9a\u6d32\u676f\u6b63\u8d5b\u53ef\u80fd\u90fd\u96be\uff01", "up": 14}], "2": [{"content": "\u6362\u4e86\u6768\u7acb\u745c\uff0c\u6052\u5927\u7acb\u9a6c\u5b9e\u529b\u63d0\u5347\u4e00\u4e2a\uff0c\uff0c\uff0c\u4e0d\uff0c\u4e94\u4e2a\u6863\u6b21\uff0c\uff0c\uff0c\uff0c\uff0c\uff0c", "up": 1359}, {"content": "\u6768\u7acb\u745c\u725b\u903c\uff01\uff01\uff01\uff01\u4ed6\u4e0d\u662f\u767d\u65a9\u9e21\uff01\uff01\uff01\uff01\u4ed6\u662f\u6218\u6597\u673a\uff01\uff01\uff01", "up": 1018}, {"content": "\u6768\u7acb\u745c\u6551\u4e86\u5361\u7eb3\u74e6\u7f57\u4e00\u547d\u2026\u2026\u6211\u89c9\u5f97\u6ca1\u6bdb\u75c5", "up": 591}, {"content": "\u7533\u82b1\u4eca\u5929\u8f93\u5f97\u6bd4\u8f83\u53ef\u60dc\uff01\u4f5c\u4e3a\u6052\u5927\u7403\u8ff7\u8868\u793a\u81f4\u656c\u3002\u540c\u65f6\u597d\u4e45\u6ca1\u770b\u5230\u6052\u5927\u56fd\u5185\u7403\u5458\u8fdb\u7403\u4e86\uff0c\u5e0c\u671b\u6768\u7acb\u745c\u5c31\u6b64\u8d77\u98de\uff5e", "up": 413}, {"content": "\u6768\u7acb\u745c\uff0c\u5218\u6bbf\u5ea7\uff0c\u5bf9\u4e0d\u8d77", "up": 197}]};
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
