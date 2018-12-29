var data = {"person_name": "\u8c22\u9e4f\u98de", "nicknames": "\u8c22\u9e4f\u98de", "aspects": {"\u7403\u5458": 0.4678719102826933, "\u6bd4\u8d5b": 0.4927758385090452, "\u8fdb\u653b": 0.4995058254397085, "\u8d5b\u5b63": 0.5720490810487331, "\u8fdb\u7403": 0.6564154478506998, "\u52a9\u653b": 0.5740564578718261, "\u8fb9\u8def": 0.41493104180415347, "\u66ff\u8865": 0.7272660524715648, "\u7403\u8ff7": 0.27646255409460246, "\u964d\u7ea7": 0.49943116099058255}, "overall_heat": 51.0, "overall_polar": 0.53, "name": "195", "nationality": "\u4e2d\u56fd", "position": "\u524d\u950b", "goal": "3", "assist": "5", "team_name": "\u6c5f\u82cf\u82cf\u5b81", "name_en": "Xie Pengfei", "age": "25", "height": "181", "weight": "73"};
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
var topic_keywords = {"0": [{"name": "\u8c22\u9e4f\u98de", "value": 0.059886347078537086}, {"name": "\uff01", "value": 0.026373306134343584}, {"name": "\u82cf\u5b81", "value": 0.019087862450823254}, {"name": "\u4e00\u4e2a", "value": 0.01180241876730293}, {"name": "\u57fa\u8036", "value": 0.01180241876730293}, {"name": "\u5468\u4e91", "value": 0.01180241876730293}, {"name": "\u8e22", "value": 0.010345330030598864}, {"name": "\u9ec4\u7d2b\u660c", "value": 0.010345330030598864}, {"name": "\u6c5f\u82cf", "value": 0.010345330030598864}, {"name": "\u535a\u963f", "value": 0.010345330030598864}, {"name": "\u597d", "value": 0.008888241293894799}, {"name": "\u7eff\u57ce", "value": 0.008888241293894799}, {"name": "\uff1f", "value": 0.008888241293894799}, {"name": "\u5434\u66e6", "value": 0.008888241293894799}, {"name": "\u57c3\u5fb7\u5c14", "value": 0.008888241293894799}, {"name": "\u674e\u6602", "value": 0.007431152557190733}, {"name": "\u987e\u8d85", "value": 0.007431152557190733}, {"name": "\u4eca\u5929", "value": 0.007431152557190733}, {"name": "\u8fd9\u573a", "value": 0.007431152557190733}, {"name": "\u4f20\u4e2d", "value": 0.007431152557190733}, {"name": "\u8868\u73b0", "value": 0.005974063820486667}, {"name": "\u505c\u7403", "value": 0.005974063820486667}, {"name": "\u5f20\u51cc\u5cf0", "value": 0.005974063820486667}, {"name": "\u8fdb\u653b", "value": 0.005974063820486667}, {"name": "\u9002\u5408", "value": 0.005974063820486667}, {"name": "\u7279\u8c22\u62c9", "value": 0.005974063820486667}, {"name": "\u6c6a\u5d69", "value": 0.005974063820486667}, {"name": "\u72b6\u6001", "value": 0.005974063820486667}, {"name": "\u4e0d\u9519", "value": 0.005974063820486667}, {"name": "\u5b89\u6392", "value": 0.005974063820486667}], "1": [{"name": "\u8c22\u9e4f\u98de", "value": 0.029685021527305688}, {"name": "\u8fdb\u653b", "value": 0.01608882846136415}, {"name": "\u9632\u5b88", "value": 0.01608882846136415}, {"name": "\u7403", "value": 0.013822796283707228}, {"name": "\u6bd4\u8d5b", "value": 0.013822796283707228}, {"name": "\u4eba", "value": 0.011556764106050305}, {"name": "\u7403\u961f", "value": 0.011556764106050305}, {"name": "\u7403\u5458", "value": 0.011556764106050305}, {"name": "\u8fdb\u7403", "value": 0.009290731928393383}, {"name": "\u8d5b\u5b63", "value": 0.009290731928393383}, {"name": "\u5468\u4e91", "value": 0.009290731928393383}, {"name": "?", "value": 0.009290731928393383}, {"name": "\u8fb9\u8def", "value": 0.0070246997507364605}, {"name": "\u6709\u70b9", "value": 0.0070246997507364605}, {"name": "\u54ed", "value": 0.0070246997507364605}, {"name": "\u771f\u7684", "value": 0.0070246997507364605}, {"name": "\u771f", "value": 0.0070246997507364605}, {"name": "\u8eab\u4f53", "value": 0.0070246997507364605}, {"name": "\u4e0d\u884c", "value": 0.0070246997507364605}, {"name": "\u7b11", "value": 0.0070246997507364605}, {"name": "\u4ff1\u4e50\u90e8", "value": 0.0070246997507364605}, {"name": "\u56fd\u5185", "value": 0.0070246997507364605}, {"name": "\u8e22", "value": 0.0070246997507364605}, {"name": "\u5e74", "value": 0.0070246997507364605}, {"name": "\u53d1\u6325", "value": 0.0070246997507364605}, {"name": "\u674e\u6602", "value": 0.0070246997507364605}, {"name": "\u80fd\u529b", "value": 0.0070246997507364605}, {"name": "\u5dee", "value": 0.004758667573079538}, {"name": "\u7533\u946b", "value": 0.004758667573079538}, {"name": "\u5bb6\u4e61", "value": 0.004758667573079538}]};
var topic_summary = {"0": [{"content": "\u8c22\u9e4f\u98de\u8fd9\u573a\u8e22\u51fa\u4e86\u611f\u89c9\u554a\uff0c\u4e24\u4e2a\u52a9\u653b\uff01\u5965\u5e05\u6362\u4e0a\u6c6a\u5d69\u662f\u5999\u7b14\uff0c\u6709\u6548\u7684\u63a7\u5236\u4e86\u4e2d\u573a\uff0c\u8fdb\u7403\u968f\u4e4b\u800c\u6765\uff01\u53e6\u5916\uff0c\u5434\u66e6\u8e22\u7684\u771f\u68d2\uff01\u6c5f\u82cf\u6218\u6597\uff01\uff01\uff01[\u52a0\u6cb9][\u52a0\u6cb9]", "up": 89}, {"content": "\u5409\u7fd4\uff0c\u5434\u66e6\uff0c\u674e\u6602\uff0c\u8c22\u9e4f\u98de\uff0c\u9ec4\u7d2b\u660c", "up": 78}, {"content": "\u4eca\u5929\u80fd\u8ba9\u6211\u5439\u4e00\u6ce2\u8c22\u9e4f\u98de\u4e0d\uff1f\uff1f\uff1f\uff1f\uff1f", "up": 55}, {"content": "\u4f5c\u4e3a\u82cf\u5b81\u7684\u7403\u8ff7\uff0c\u8001\u751f\u5e38\u8c08\u7684\u8bdd\u9898\uff0c4\u4e2a\u4eba\u4e0d\u8d70\u96be\u6709\u4f5c\u4e3a\uff0c1\uff0c\u535a\u963f\u57fa\u8036\uff0c\u6709\u610f\u8bc6\uff0c\u6ca1\u80fd\u529b\uff0c\u6ca1\u8eab\u4f53\uff0c\u6ca1\u62a4\u7403\uff0c\u7528\u57c3\u5fb7\u5c14\u4ee3\u66ff\uff0c2\uff0c\u5468\u4e91\uff0c\u4e91\u59b9\u59b9\u8d76\u7d27\u6362\u4e2a\u884c\u4e1a\u5427\uff0c\u5c31\u4f60\u5c31\u6c34\u5e73\u8fd8\u8e22\u8fb9\u8def\uff0c\u6ca1\u6709\u505c\u7403\u6ca1\u6709\u4f20\u4e2d\u6ca1\u6709\u901f\u5ea6\uff0c\u8d81\u65e9\u5f00\u4e2a\u706b\u9505\u5e97\uff0c3\uff0c\u674e\u6602\uff0c\u4f5c\u4e3a\u4e2d\u540e\u536b\uff0c\u4e00\u4e2a\u8d5b\u5b63\u90fd\u89c1\u4e0d\u4e86\u51e0\u6b21\u62a2\u70b9\u7684\uff0c\u5bf9\u624b\u8fdb\u653b\u90fd\u4e0d\u77e5\u9053\u4ed6\u5728\u54ea\u91cc\uff0c4\uff0c\u8c22\u9e4f\u98de\uff0c\u505c\u7403\u5c1a\u53ef\uff0c\u4f20\u4e2d\u592a\u5dee\u4e86\uff0c\u8fd8\u7ecf\u5e38\u559c\u6b22\u62a2\u7740\u53d1\u89d2\u7403\uff0c\u4e0d\u8981\u8138\uff0c\u53e6\u5916\uff0c\u79d1\u65af\u660e\u5965\u62c9\u7f57\u5c24\uff0c\u80fd\u4e0d\u80fd\u591a\u5b89\u6392\u5b89\u6392\u9ad8\u5929\u610f\uff0c\u5f20\u51cc\u5cf0\uff0c\u963f\u5e03\u90fd\u6d77\u7c73\u63d0\u4e0a\u4e0a\u573a\u554a\uff0c\u4e0d\u6bd4\u8fd9\u51e0\u4e2a\u5dee\uff0c\u603b\u4e4b\uff0c\u82cf\u5b81\u7403\u961f\u8fd0\u4f5c\u786e\u5b9e\u4e0d\u5927\u804c\u4e1a\uff0c\u4e0d\u53ef\u9ad8\u770b\uff01", "up": 20}, {"content": "\u6211\u611f\u89c9\u5168\u573a\u8c22\u9e4f\u98de\uff0c\u5434\u66e6\uff0c\u57c3\u5fb7\u5c14\u8868\u73b0\u62a2\u773c\uff0c\u5439\u4e00\u6ce2\uff0c\u57c3\u5fb7\u5c14\u6765\u4e86\u4e4b\u540e\uff0c\u524d\u573a\u6709\u5316\u5b66\u4f5c\u7528\u4e86\uff01", "up": 20}], "1": [{"content": "\u672c\u6765\u5df2\u7ecf\u6d17\u6d17\u51c6\u5907\u7761\u4e86\uff0c\u4f46\u662f\u8fd8\u662f\u7761\u4e0d\u7740\u3002\u600e\u4e48\u80fd\u8ba9\u5468\u4e91\u674e\u6602\u548c30\u591a\u5c81\u7684\u5e15\u83b1\u5854\u8e22\u4e09\u4e2d\u536b\uff0c\u7eed\u7ea6\u524d\u4e91\u59b9\u59b9\u95f9\u7740\u8981\u9996\u53d1\u4f4d\u7f6e\u8981\u4e0d\u522b\u7684\u7403\u961f\u5c31\u8bb8\u7ed9\u4ed6\uff0c\u8ba9\u4ed6\u8d70\u5c31\u662f\u4e86\u573a\u573a\u88ab\u7206\u8981\u662f\u6211\u771f\u4e0d\u597d\u610f\u601d\u5f20\u8fd9\u53e3\uff0c\u674e\u6602\u4e09\u4e2a\u4e09\u4e2a\u8d5b\u5b63\u4e0b\u6765\u9664\u4e86\u5439\u4efb\u610f\u7403(\u4e5f\u6ca1\u8fdb\u51e0\u4e2a)\u5f3a\u58ee\u524d\u950b\u4e00\u625b\u5c31\u6ca1\u5e73\u8861\uff0c\u7075\u5de7\u524d\u950b\u4e00\u62a2\u5c31\u88ab\u8fc7\u8fdb\u653b\u89d2\u7403\u6ca1\u5934\u7403\u771f\u6ca1\u770b\u51fa\u6765\u4ed6\u6709\u54ea\u4e00\u70b9\u6bd4\u6768\u535a\u5b87\u5f3a\uff0c\u8bdd\u8bf4\u8fd8\u4e0d\u5982\u7559\u8bb8\u6709\u5fd7\u597d\u6b79\u4eba\u5bb6\u7ad9\u5f97\u4f4f\u554a\uff0c\u901f\u5ea6\u5904\u7406\u6389\u3002\u8c22\u9e4f\u98de\u771f\u4e0d\u662f\u8e22\u8fb9\u8def\u7684\u6599\uff0c\u8fd8\u4e0d\u5982\u8ba9\u4ed6\u56de\u4e2d\u8def\u4e70\u8fc7\u6765\u7684\u7533\u946b\u7684\u6768\u5bb6\u5a01\u4e24\u4e2a\u8d5b\u5b63\u4e0a\u573a\u5c31\u51e0\u6b21\u8fd8\u662f\u8865\u65f6\u4e0a\u7684\uff0c\u82b1\u4e861500\u4e07\u5462\uff0c\u5c31\u9884\u5907\u961f\u8017\u5408\u540c?\u597d\u6b79\u4eba\u5bb6\u5728\u7533\u946b\u8e22\u8fb9\u8def\u4e5f\u662f\u597d\u624b\u3002\u9676\u6e90\u4e5f\u53ef\u4ee5\u554a\u5357\u5c0f\u54fc\u4e0d\u4e86\u89e3\u4e0d\u8fc7\u8eab\u4f53\u770b\u4e0a\u53bb\u7626\u7626\u7684\u5904\u7406\u7403\u4e5f\u4e0d\u884c\uff0c\u591a\u636223\u7403\u5458\u522b\u653e\u7740\u4e86\uff0c\u540e25\u5206\u949f\u90fd\u662f\u957f\u8fdc\u7403\u8ba9\u7279\u8c22\u62c9\u4e89\uff0c\u4ee5\u4e3a\u4ed6\u662f\u8d85\u4eba\u4f1a\u98de?\u4e3a\u4ec0\u4e48\u7530\u4e00\u519c\u975e\u8981\u63d2\u90a3\u4e48\u6df1?\u8ba9\u5218\u5efa\u4e1a\u8865\u5b8c\u8d39\u5c14\u5357\u591a\u8865\u8d39\u5c14\u5357\u8fea\u9e1f\u3002\u6208\u4f1f\u4e0d\u80fd\u7528?\u4e0b\u4e00\u8f6e\u5bf9\u5929\u6d25\u963f\u5207\u59c6\u4f30\u8ba1\u674e\u6602\u53c8\u8981\u88ab\u62b9\u8fc7\u54af\uff0c\u5475\u5475\u65e0\u8bed\u5509\u3002[\u7b11\u54ed]", "up": 10}, {"content": "\u8c22\u9e4f\u98de\u8d35\u5dde\u4eba\uff0c\u52a9\u529b\u5bb6\u4e61\u7403\u961f\u964d\u7ea7\u8d23\u65e0\u65c1\u8d37\u554a [\u7b11\u54ed]", "up": 9}, {"content": "\u5f53\u6bd4\u8d5b\u8fdb\u884c\u523037\u5206\u96f67\u79d2\u65f6\uff0c\u8c22\u9e4f\u98de\u5de6\u811a\u6253\u95e8\uff0c\u89e3\u8bf4\u4e00\u53e5\u5367\u69fd\u2026\u2026\u5413\u6211\u4e00\u8df3[\u6342\u8138]", "up": 7}, {"content": "\u82cf\u5b81\u4e0d\u662f\u8f93\u5728\u7403\u5458\uff0c\u4e5f\u4e0d\u662f\u6559\u7ec3\uff0c\u662f\u8f93\u5728\u4ff1\u4e50\u90e8\u4e0a\u3002\u51e0\u4e2a\u8d5b\u5b63\u5e74\u5e74\u5728\u5916\u63f4\u4e0a\u6298\u817e\uff0c\u56fd\u5185\u7403\u961f\u9664\u4e86\u7530\u4e00\u519c\u4e4b\u5916\u6ca1\u6709\u4efb\u4f55\u8865\u5f3a\uff0c\u4e24\u6761\u8fb9\u51e0\u4e4e\u6ca1\u6709\u4efb\u4f55\u52a9\u653b\u80fd\u529b\uff0c\u53f3\u8fb9\u540e\u536b\u5468\u4e91\uff0c\u9632\u5b88\u8fd8\u53ef\u4ee5\uff0c\u8fdb\u653b\u771f\u7684\u51e0\u4e4e\u6ca1\u6709\uff0c\u5162\u5162\u4e1a\u4e1a\uff0c\u8fd8\u7b97\u53ca\u683c\uff0c\u5de6\u540e\u536b\u6768\u7b11\u5929\u5c31\u662f\u4e2a\u795e\u7ecf\u75c5\uff0c\u5076\u5c14\u53c8\u80fd\u53d1\u6325\u4e00\u4e9b\u52a9\u653b\u80fd\u529b\uff0c\u4f46\u662f\u9047\u5230\u4e00\u70b9\u9632\u5b88\u538b\u529b\u53c8\u5e9f\u7269\u4e86\uff0c\u4e2d\u7532\u6c34\u51c6\u3002\u53f3\u524d\u536b\u5409\u7965\u53d7\u4f24\u53c8\u65e0\u4eba\u53ef\u7528\uff0c\u5de6\u524d\u536b\u8c22\u9e4f\u98de\u592a\u8f6f\uff0c\u53d1\u6325\u4e5f\u4e0d\u7a33\u5b9a\u3002\u5434\u66e6\u548c\u7530\u4e00\u519c\u7684\u540e\u8170\u914d\u5907\u8fd8\u662f\u53ef\u4ee5\u7684\uff0c\u7279\u522b\u662f\u5434\u66e6\uff0c\u653b\u5b88\u517c\u5907\uff0c\u6280\u672f\uff0c\u89c6\u91ce\uff0c\u7403\u5546\u90fd\u662f\u56fd\u5185\u9876\u7ea7\u7684\uff0c\u867d\u7136\u8eab\u4f53\u4e0d\u7b97\u5f3a\u58ee\uff0c\u4f46\u662f\u771f\u7684\u5f88\u5f3a\u786c\uff0c\u53c8\u5f88\u806a\u660e\u3002\u4ff1\u4e50\u90e8\u773c\u778e\u770b\u4e0d\u5230\u7403\u961f\u9632\u5b88\u5931\u7403\u90a3\u4e48\u5c11\uff0c\u8fdb\u7403\u5374\u5f88\u5c11\uff0c\u5f88\u660e\u663e\u7684\u5c31\u662f\u8fdb\u653b\u6709\u95ee\u9898\uff0c\u4e2d\u8def\u6ca1\u95ee\u9898\uff0c\u5c31\u8f93\u5728\u4e24\u4e2a\u8fb9\u8def\u7684\u653b\u51fb\uff0c\u8db3\u7403\u662f\u6b64\u6d88\u5f7c\u957f\u7684\u8fd0\u52a8\uff0c\u4f60\u8fdb\u653b\u4e0d\u884c\uff0c\u9632\u5b88\u5c31\u4f1a\u6709\u538b\u529b\uff0c\u5982\u679c\u8fdb\u653b\u5f3a\u4e86\uff0c\u5bf9\u624b\u7684\u8fdb\u653b\u5c31\u4f1a\u88ab\u9650\u5236\u3002\u4ff1\u4e50\u90e8\u8fd92\u5e74\u90fd\u6ca1\u6709\u82b1\u94b1\u5728\u5185\u63f4\u4e0a\uff0c\u5c31\u662f\u773c\u778e\u3002\u7403\u5458\u548c\u6559\u7ec3\u57fa\u672c\u90fd\u53d1\u6325\u4e86\u81ea\u8eab\u7684\u5b9e\u529b\u4e86\uff0c\u672c\u573a\u6bd4\u8d5b\uff0c\u9632\u5b88\u7ec4\u7ec7\u8fd8\u662f\u4e0d\u9519\u7684\uff0c\u4e0d\u8fc7\u5982\u679c\u4e00\u76f4\u5728\u9632\u5b88\uff0c\u5b8c\u5168\u4e0d\u8fdb\u653b\u7684\u8bdd\uff0c\u8fdf\u65e9\u4f1a\u88ab\u8fdb\u7403\uff0c\u672c\u573a\u8f93\u5f97\u4e0d\u51a4\u3002", "up": 5}, {"content": "\u8c22\u9e4f\u98de\u7684\u8fdb\u7403\u4e4b\u524d\u7684\u4e00\u811a\u51fa\u7403 \u6709\u70b9\u6e9c\u554a", "up": 5}]};
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
