var data = {"person_name": "\u5d14\u9e4f", "nicknames": "\u5d14\u9e4f", "aspects": {"\u6bd4\u8d5b": 0.534008813580576, "\u7403\u5458": 0.5996322175807784, "\u52a9\u653b": 0.427662171518033, "\u8fdb\u7403": 0.5359865453680324, "\u7403\u8ff7": 0.5814372625994447, "\u9632\u5b88": 0.5436494952490131, "\u5916\u63f4": 0.45046803568390303, "\u8d5b\u5b63": 0.7700293203756188, "\u540e\u8170": 0.5765585781526008, "\u4e0b\u534a\u573a": 0.38545089813022154}, "overall_heat": 201.0, "overall_polar": 0.404, "name": "96", "nationality": "\u4e2d\u56fd", "position": "\u4e2d\u573a", "goal": "0", "assist": "4", "team_name": "\u5c71\u4e1c\u9c81\u80fd\u6cf0\u5c71", "name_en": "Cui Peng", "age": "31", "height": "178", "weight": "74"};
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
var topic_keywords = {"0": [{"name": "\u5d14\u9e4f", "value": 0.08844914864242981}, {"name": "\uff01", "value": 0.04703175333640129}, {"name": "\uff1f", "value": 0.02586286240220893}, {"name": "\u771f\u7684", "value": 0.012977450529222273}, {"name": "\u9c81\u80fd", "value": 0.012977450529222273}, {"name": "\u56de\u6765", "value": 0.012977450529222273}, {"name": "\u5468\u6d77\u6ee8", "value": 0.009295904279797514}, {"name": "\u62fc\u547d\u4e09\u90ce", "value": 0.008375517717441326}, {"name": "\u52a9\u653b", "value": 0.008375517717441326}, {"name": "\u4e00\u4e2a", "value": 0.007455131155085135}, {"name": "\u8e22", "value": 0.007455131155085135}, {"name": "\u770b\u5230", "value": 0.006534744592728946}, {"name": "\u91d1\u5b50", "value": 0.006534744592728946}, {"name": "\u5c0f", "value": 0.006534744592728946}, {"name": "\u611f\u89c9", "value": 0.005614358030372756}, {"name": "\u4e0a\u573a", "value": 0.005614358030372756}, {"name": "\u73b0\u5728", "value": 0.005614358030372756}, {"name": "\u4e3b\u529b", "value": 0.005614358030372756}, {"name": "\u673a\u4f1a", "value": 0.005614358030372756}, {"name": "\u52a0\u6cb9", "value": 0.005614358030372756}, {"name": "\u5f53\u5e74", "value": 0.005614358030372756}, {"name": "\u8fdb", "value": 0.004693971468016566}, {"name": "\u84bf\u4fca\u95f5", "value": 0.004693971468016566}, {"name": "\u5e74", "value": 0.004693971468016566}, {"name": "\u8bb0\u5f97", "value": 0.004693971468016566}, {"name": "\u8fdb\u7403", "value": 0.004693971468016566}, {"name": "05", "value": 0.004693971468016566}, {"name": "\u6d77\u6ee8", "value": 0.004693971468016566}, {"name": "\u540e\u8170", "value": 0.003773584905660377}, {"name": "\u66ff\u8865", "value": 0.003773584905660377}], "1": [{"name": "\u5d14\u9e4f", "value": 0.05896457765667575}, {"name": "\u9c81\u80fd", "value": 0.025177111716621254}, {"name": "\u5389\u5bb3", "value": 0.020817438692098095}, {"name": "\u5468\u6d77\u6ee8", "value": 0.019727520435967302}, {"name": "\uff01", "value": 0.017547683923705724}, {"name": "\u53f7", "value": 0.013188010899182562}, {"name": "\u4e00\u4e0b", "value": 0.01100817438692098}, {"name": "\u611f\u89c9", "value": 0.00991825613079019}, {"name": "\u5439", "value": 0.0088283378746594}, {"name": "\u5916\u63f4", "value": 0.0088283378746594}, {"name": "\u8001\u5854", "value": 0.00773841961852861}, {"name": "\u770b\u5230", "value": 0.00773841961852861}, {"name": "\u901f\u5ea6", "value": 0.0066485013623978195}, {"name": "\u903c", "value": 0.0066485013623978195}, {"name": "\u5e94\u8be5", "value": 0.0066485013623978195}, {"name": "\u6280\u672f", "value": 0.0066485013623978195}, {"name": "\u65b0\u4eba", "value": 0.0066485013623978195}, {"name": "\u6839\u672c", "value": 0.0066485013623978195}, {"name": "\u597d", "value": 0.0066485013623978195}, {"name": "\u725b", "value": 0.0066485013623978195}, {"name": "\u8d62", "value": 0.0066485013623978195}, {"name": "\u8fd9\u573a", "value": 0.0066485013623978195}, {"name": "\u65b0", "value": 0.00555858310626703}, {"name": "\u914d\u5408", "value": 0.00555858310626703}, {"name": "\u8e22", "value": 0.00555858310626703}, {"name": "\u6ca1\u60f3", "value": 0.00555858310626703}, {"name": "\u8bf4\u660e", "value": 0.00555858310626703}, {"name": "\uff1f", "value": 0.00555858310626703}, {"name": "\u5e74", "value": 0.00555858310626703}, {"name": "\u4e0a\u573a", "value": 0.00555858310626703}], "2": [{"name": "\u5d14\u9e4f", "value": 0.04155339805825243}, {"name": "\u9c81\u80fd", "value": 0.029902912621359225}, {"name": "\u54ed", "value": 0.016957928802588996}, {"name": "\u7b11", "value": 0.016957928802588996}, {"name": "\u4e00\u4e2a", "value": 0.011779935275080906}, {"name": "\u8d5b\u5b63", "value": 0.011779935275080906}, {"name": "\u7403\u8ff7", "value": 0.00919093851132686}, {"name": "\u73b0\u5728", "value": 0.00919093851132686}, {"name": "\u4e2d\u573a", "value": 0.00919093851132686}, {"name": "\u4eba", "value": 0.00919093851132686}, {"name": "\u9a82", "value": 0.007896440129449837}, {"name": "\u771f", "value": 0.007896440129449837}, {"name": "\u5468\u6d77\u6ee8", "value": 0.006601941747572815}, {"name": "\u6bd4\u8d5b", "value": 0.006601941747572815}, {"name": "\u611f\u89c9", "value": 0.006601941747572815}, {"name": "\u4f53\u529b", "value": 0.006601941747572815}, {"name": "\u6362", "value": 0.0053074433656957925}, {"name": "\u6d77\u6ee8", "value": 0.0053074433656957925}, {"name": "\uff01", "value": 0.0053074433656957925}, {"name": "\u89e3\u8bf4", "value": 0.0053074433656957925}, {"name": "\u5f00", "value": 0.0053074433656957925}, {"name": "\u4f69\u83b1", "value": 0.0053074433656957925}, {"name": "\u9a6c\u52a0\u7279", "value": 0.0053074433656957925}, {"name": "\u809a\u5b50", "value": 0.0053074433656957925}, {"name": "\u666e\u901a", "value": 0.00401294498381877}, {"name": "\u52a0\u6cb9", "value": 0.00401294498381877}, {"name": "\u52aa\u529b", "value": 0.00401294498381877}, {"name": "\u52a0", "value": 0.00401294498381877}, {"name": "\u524d", "value": 0.00401294498381877}, {"name": "\u8e22", "value": 0.00401294498381877}], "3": [{"name": "\uff01", "value": 0.04098109351047522}, {"name": "\u5d14\u9e4f", "value": 0.0399591211037302}, {"name": "\u9c81\u80fd", "value": 0.02973939703628002}, {"name": "\uff1f", "value": 0.01645375574859479}, {"name": "\u7403\u5458", "value": 0.011343893714869699}, {"name": "\u6253", "value": 0.01032192130812468}, {"name": "\u8fd9\u573a", "value": 0.007256004087889627}, {"name": "\u72af\u89c4", "value": 0.007256004087889627}, {"name": "\u8e22", "value": 0.007256004087889627}, {"name": "\u540e\u8170", "value": 0.007256004087889627}, {"name": "\u9632\u5b88", "value": 0.006234031681144609}, {"name": "\u5468\u6d77\u6ee8", "value": 0.006234031681144609}, {"name": "\u56fd\u5b89", "value": 0.006234031681144609}, {"name": "\u91d1\u5b50", "value": 0.006234031681144609}, {"name": "\u8fb9\u8def", "value": 0.006234031681144609}, {"name": "\u4eba", "value": 0.006234031681144609}, {"name": "\u597d", "value": 0.0052120592743995905}, {"name": "\u6362", "value": 0.0052120592743995905}, {"name": "\u6bd4\u8d5b", "value": 0.0052120592743995905}, {"name": "\u5218\u5f6c\u5f6c", "value": 0.0052120592743995905}, {"name": "\u6052\u5927", "value": 0.0052120592743995905}, {"name": "\u5434\u5174\u6db5", "value": 0.0052120592743995905}, {"name": "\u84bf\u4fca\u95f5", "value": 0.0052120592743995905}, {"name": "\u4e00\u4e2a", "value": 0.0052120592743995905}, {"name": "\u77e5\u9053", "value": 0.0052120592743995905}, {"name": "\u6700", "value": 0.0052120592743995905}, {"name": "\u8fd9\u79cd", "value": 0.0052120592743995905}, {"name": "\u738b\u5f64", "value": 0.0052120592743995905}, {"name": "\u4e0b", "value": 0.004190086867654573}, {"name": "\u786e\u5b9e", "value": 0.004190086867654573}]};
var topic_summary = {"0": [{"content": "\u56de\u6765\u4e86\uff01\u5d14\u9e4f\u56de\u6765\u4e86\uff01\u90a3\u4e2a\u62fc\u547d\u4e09\u90ce\u56de\u6765\u4e86\uff01[\u5927\u54ed]", "up": 990}, {"content": "\u5d14\u9e4f\u771f\u7684\u53d8\u4e86", "up": 449}, {"content": "\u5d14\u9e4f\uff0c\u4f60\u522b\u4e86\u6839\u81ea\u884c\u8f66\u8f6e\u80ce\u6765\u8e22\u7684\u7403\uff1f", "up": 320}, {"content": "\u5d14\u9e4f\u770b\u89c1\u4f60\u60f3\u54ed\uff01\u5f3a\u70c8\u63a8\u8350\u5c0f\u91d1\u5b50\u8fdb\u56fd\u5bb6\u961f\uff01", "up": 303}, {"content": "\u5f53\u5d14\u9e4f\u4f20\u51fa\u90a3\u811a\u7403\u540e\uff0c\u770b\u5f97\u6211\u773c\u6cea\u90fd\u8981\u4e0b\u6765\u4e86\uff0c\u5f53\u65f6\u5fc3\u91cc\u7684\u7b2c\u4e00\u611f\u89c9\u5c31\u662f\u5d14\u9e4f\u7684\u5929\u8d4b\u771f\u662f\u6d6a\u8d39\u4e86\uff0c\u5f53\u521d\u5982\u679c\u4e0d\u81ea\u7518\u5815\u843d\u8be5\u591a\u597d[\u5927\u54ed][\u5927\u54ed]", "up": 199}], "1": [{"content": "\u73b0\u5728\u6ee1\u8111\u5b50\u91cc\u8fd8\u90fd\u662f1\u53f7\u674e\u96f7\u96f7\uff0c3\u53f7\u738b\u8d855\u53f7\u8212\u75459\u53f7\u5df4\u8f9b25\u53f7\u77eb\u5586\uff0c8\u53f7\u65e5\u79d1\u592b\u7ef4\u594710\u53f7\u90d1\u667a18\u53f7\u5468\u6d77\u6ee820\u53f7\u5d14\u9e4f\uff0c6\u53f7\u97e9\u9e4f29\u53f7\u674e\u91d1\u7fbd\u7684\u5f71\u5b50\u300212\u5e74\u8fc7\u53bb\u4e86\uff0c\u4e0d\u7ba1\u5468\u6d77\u6ee8\u548c\u5d14\u9e4f\u53d1\u751f\u8fc7\u4ec0\u4e48\uff0c\u73b0\u5728\u8fd8\u5728\u575a\u6301\uff0c\u4f5c\u4e3a\u7403\u8ff7\u53ea\u4f1a\u7ed9\u4ed6\u4eec\u66f4\u591a\u7684\u638c\u58f0\u3002\u4f60\u4eec\u6c38\u8fdc\u90fd\u662f\u9c81\u80fd\u7684\u5b69\u5b50\u3002[\u5389\u5bb3][\u5389\u5bb3][\u5389\u5bb3][\u5389\u5bb3][\u5389\u5bb3][\u5389\u5bb3]", "up": 1086}, {"content": "\u5d14\u9e4f\u4e0a\u573a\u7684\u65f6\u5019\uff0c\u6211\u5f88\u6fc0\u52a8\uff0c\u4e0a\u573a\u5c31\u732e\u52a9\u653b\uff0c\u66f4\u662f\u6fc0\u52a8\u4e0d\u5df2\u3002\u4e5f\u8bb8\u4ed6\u72af\u8fc7\u9519\uff0c\u4f46\u6211\u4eec\u8c01\u5e74\u8f7b\u65f6\u6ca1\u72af\u8fc7\u9519\uff0c\u8d77\u7801\u56de\u5f52\u4e2d\u8d85\u7684\u9996\u573a\u6bd4\u8d5b\uff0c\u5d14\u9e4f\u7684\u8868\u73b0\u503c\u5f97\u8d5e\u7f8e", "up": 370}, {"content": "\u5d14\u9e4f\u65f6\u9694\u51e0\u5e74\u540e\u7684\u7b2c\u4e00\u6b21\u89e6\u7403\uff0c\u9001\u51fa\u52a9\u653b\uff0c\u8bf4\u5b9e\u8bdd\uff0c\u6211\u773c\u7736\u6e7f\u6da6\u4e86\uff01", "up": 226}, {"content": "\u5d14\u9e4f \u5468\u6d77\u6ee8 \u738b\u6653\u9f99 \u82d1\u7ef4\u73ae \u738b\u6c38\u73c0 \u674e\u5fae\u6000\u5ff5\u90a3\u4e2a\u65f6\u5019\u7684\u9c81\u80fd", "up": 211}, {"content": "\u5f53\u5468\u6d77\u6ee8\u6362\u4e0b\u5d14\u9e4f\u7684\u65f6\u5019\uff0c\u5f77\u4f5b\u56de\u5230\u4e8610\u5e74\u524d\uff01\u65f6\u95f4\u8fc7\u5f97\u771f\u5feb\uff0c\u800c\u6211\u7684\u9752\u6625\u4e5f\u4e00\u76f4\u9c81\u80fd\u76f8\u4f34\uff01", "up": 188}], "2": [{"content": "\u5d14\u9e4f\u9664\u4e86\u80d6\u70b9\uff0c\u8ddf1634\u5929\u524d\u6ca1\u6709\u4ec0\u4e48\u53d8\u5316\u3002", "up": 630}, {"content": "\u592a\u4ed6\u3002\u5988\u5f00\u5fc3\u4e86\uff0c\u4e2d\u573a\u90a3\u4e48\u591a\u8bf4\u4e0d\u770b\u9c81\u80fd\u7684\uff0c\u90fd\u5feb\u56de\u6765\u5427\uff0c\u4eca\u5e74\u8fd9\u961f\u8fd8\u884c\uff0c\u4e2d\u573a\u90fd\u9a82\u9c81\u80fd\u4f20\u4e2a\u5012\u4e09\u89d2\u80fd\u6b7b\u5417\uff0c\u4e0b\u534a\u573a\u5012\u4e09\u89d2\u4e00\u4e2a\u63a5\u4e00\u4e2a\uff0c\u8c22\u8c22\u4f60\u4eec\uff0c\u4e2d\u573a\u9a82\u4f69\u83b1\u50bb\u5927\u4e2a\uff0c\u6ca1B\u7528\u7684\uff0c\u5c0f\u5c55\u8179\u6ede\u7a7a\u5934\u7403\u5f00\u4e0d\u5f00\u5fc3\uff0c\u4e2d\u573a\u9a82\u50bb\u5b50\u624d\u53bb\u7ed9\u674e\u9704\u9e4f\u9053\u6b49\u7684\uff0c\u6293\u7d27\u4e0b\u8bfe\u7684\uff0c\u6362\u5d14\u9e4f\u4e0a\u6765\u63a5\u7740\u5c31\u52a9\u653b\u90a3\u4e0b\uff0c\u8138\u75bc\u5417\uff0c\u4e2d\u573a\u8bf4\u4eca\u5929\u5409\u5c14\u6ca1\u5e26\u8111\u5b50\u7684\uff0c\u8fdb\u7403\u90a3\u4e0b\uff0c\u6e05\u9192\u6ca1\uff0c\u4ee5\u524d\u55b7\u5d14\u9e4f\u9760\u5173\u7cfb\u56de\u6765\u517b\u8001\u7684\uff0c\u4eca\u5929\u770b\u90a3\u4f4d\u7f6e\u611f\uff0c\u6709\u6ca1\u670908\u5e74\u7684\u611f\u89c9\u3002\u3002\u3002\u3002\u3002\u3002\u54c8\u54c8\u54c8[\u54c8\u54c8]\u5bf9\uff0c\u6ca1\u9519\u5728\u4e0b\u59d3\u9a6c\uff0c\u5360\u4e00\u540e\u5b57\uff0c\u540d\u70ae\uff0c\u6c5f\u6e56\u4eba\u79f0\u9a6c\u540e\u70ae[\u7b11\u54ed][\u7b11\u54ed][\u7b11\u54ed]", "up": 29}, {"content": "\u770b\u8fc7\u674e\u5bb5\u9e4f\uff0c\u5d14\u9e4f\uff0c\u5468\u6d77\u6ee8\u540c\u65f6\u4e0a\u573a\u8e22\u7403\u7684\u6709\u591a\u5c11[\u7b11\u54ed] \u7559\u4e2a\u8a00", "up": 12}, {"content": "\u8bf7\u5217\u961f\u5411\u5d14\u9e4f\u548c\u4f69\u83b1\u9053\u6b49\u7684\u540c\u5fd7\u4eec\u4fdd\u6301\u597d\u961f\u5f62\uff0c\u4e0d\u8981\u4e71\uff01", "up": 11}, {"content": "\u6211\u662f\u9c81\u80fd\u7403\u8ff7 \u4f46\u662f\u6211\u6709\u70b9\u4e0d\u660e\u767d \u5d14\u9e4f\u90a3\u809a\u5b50\u600e\u4e48\u914d\u5f97\u4e0a\u9996\u53d1\uff1f25\u5206\u949f\u5c31\u4f53\u529b\u4e0b\u964d \u5982\u679c\u770b\u809a\u5b50\u7684\u8bdd \u54ea\u6211\u53ef\u80fd\u6bd4\u4ed6\u66f4\u914d\u5f97\u4e0a\u9996\u53d1.", "up": 10}], "3": [{"content": "\u5d14\u9e4f\u662f\u6211\u5927\u9c81\u80fd\u7684\u5409\u7965\u7269\u554a", "up": 132}, {"content": "\u5d14\u9e4f\u51cf\u80a5\u6210\u529f\uff0c\u6280\u672f\u8fd8\u662f\u597d\u7684\u6ca1\u8bdd\u8bf4\uff0c\uff0c\u80fd\u529b\u73b0\u5728\u4e2d\u8d85\u4f9d\u7136\u80fd\u6392\u4e0a\u53f7\u3002\u5c0f\u91d1\u4f9d\u7136\u662f\u6beb\u4e0d\u60dc\u529b\u5168\u573a\u98de\u5954\uff0c\u8fdb\u7403\u662f\u6700\u597d\u7684\u56de\u62a5\u3002\u84bf\u4fca\u95f5\u5931\u8bef\u6709\u70b9\u591a\u5566\uff0c\u53ef\u4ee5\u4f11\u606f\u4e00\u4e0b\u8bd5\u8bd5\u3002\u5218\u519b\u5e05\u8fd8\u662f\u6bd4\u8f83\u7a33\u7684\uff0c\u5434\u5174\u6db5\u6cef\u7136\u4f17\u4eba\u77e3\uff0c\u738b\u5f64\u5e94\u8be5\u662f\u4e0b\u4e00\u4efb\u961f\u957f\uff0c\u5b8b\u9f99\u9632\u5b88\u6709\u4f59\u8fdb\u653b\u4e0d\u8db3\uff0c\u603b\u4e4b\uff0c\u6c38\u8fdc\u652f\u6301\u9c81\u80fd\uff0c\u52a0\u6cb9\uff01\uff01\uff01\uff01", "up": 12}, {"content": "\u6211\u8868\u59d0\u5728\u7403\u5458\u7597\u517b\u9662\u7ed9\u53d7\u4f24\u7403\u5458\u505a\u8fc7\u996d\uff01 \u8bf4\u5d14\u9e4f\u5176\u5b9e\u662f\u6700\u61d2\u7684\u4e00\u4e2a\uff0c\u53d7\u4f24\u7684\u65f6\u5019\u4e00\u4e2a\u4eba\u5728\u623f\u95f4\u6253\u6e38\u620f\u5403\u996d\u90fd\u8981\u9001\u996d\u7ed9\u4ed6\uff01 \u8fd9\u5c31\u662f\u4e2d\u56fd\u7403\u5458\u7684\u7d20\u8d28\uff01 \u6765\u9c81\u80fd\u517b\u8001\u4e86\u53c8\uff0c\u54ce", "up": 10}, {"content": "\u771f\u4e0d\u5982\u53f3\u540e\u4e0a\u9f50\u5929\u5b87\uff0c\u738b\u5f64\u8e22\u9632\u5b88\u540e\u8170\u53bb\u3002\u5d14\u9e4f\u786e\u5b9e\u8001\u4e86\uff0c\u8dd1\u4e0d\u52a8\u4e86\u3002", "up": 9}, {"content": "\u6b22\u8fce\u5d14\u9e4f\u56de\u6765\uff01\u8bdd\u8bf4\u9c81\u80fd\u4ece\u8e22\u91d1\u5fb7\u5f00\u59cb\u5c31\u6709\u5fc3\u5f97\uff0c\u8fd9\u51e0\u5e74\u5bcc\u529b\u6ca1\u5360\u8fc7\u4fbf\u5b9c\uff01\u6ca1\u6cd5\u8bf4\u4e86\uff0c\u5bcc\u529b\u6253\u6052\u5927\u5c31\u6709\u52b2\uff0c\u9c81\u80fd\u6253\u6052\u5927\u5c31\u843d\u4e0b\u98ce\uff01", "up": 9}]};
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
