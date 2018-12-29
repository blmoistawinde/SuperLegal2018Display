var data = {"person_name": "\u987e\u8d85", "nicknames": "\u987e\u8d85", "aspects": {"\u7403\u8ff7": 0.5413700282474266, "\u56fd\u5bb6\u961f": 0.24801102128097685, "\u6bd4\u8d5b": 0.32265466731364406, "\u8fdb\u7403": 0.5224196957245374, "\u7403\u5458": 0.43222527927816723, "\u8d5b\u5b63": 0.6110745175406644, "\u9632\u5b88": 0.749780814281795, "\u51fa\u51fb": 0.4135655520578809, "\u8fdb\u653b": 0.8071482450549988, "\u9ec4\u724c": 0.7444612835782569}, "overall_heat": 237.0, "overall_polar": 0.345, "name": "205", "nationality": "\u4e2d\u56fd", "position": "\u5b88\u95e8\u5458", "goal": "0", "assist": "0", "team_name": "\u6c5f\u82cf\u82cf\u5b81", "name_en": "Gu Chao", "age": "29", "height": "193", "weight": "84"};
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
var topic_keywords = {"0": [{"name": "\u987e\u8d85", "value": 0.06546124225682237}, {"name": "\uff1f", "value": 0.015235225179976561}, {"name": "\u82cf\u5b81", "value": 0.011886824041520175}, {"name": "\u6bcf\u6b21", "value": 0.01021262347229198}, {"name": "\u771f\u7684", "value": 0.008538422903063787}, {"name": "\u674e\u6602", "value": 0.008538422903063787}, {"name": "\u6c34\u5e73", "value": 0.008538422903063787}, {"name": "\u6bd4\u8d5b", "value": 0.008538422903063787}, {"name": "\u771f", "value": 0.006864222333835593}, {"name": "\u592a", "value": 0.006864222333835593}, {"name": "\u4e00\u4e2a", "value": 0.006864222333835593}, {"name": "\u5e94\u8be5", "value": 0.006864222333835593}, {"name": "\u6bd4\u6bd4\u5212\u5212", "value": 0.0051900217646074}, {"name": "\u597d", "value": 0.0051900217646074}, {"name": "\u88c1\u5224", "value": 0.0051900217646074}, {"name": "\u72af\u89c4", "value": 0.0051900217646074}, {"name": "\u7403\u5458", "value": 0.0051900217646074}, {"name": "\u7403\u8ff7", "value": 0.0051900217646074}, {"name": "\u7403\u961f", "value": 0.0051900217646074}, {"name": "\u6342", "value": 0.0051900217646074}, {"name": "\u540e", "value": 0.0051900217646074}, {"name": "\u786e\u5b9e", "value": 0.0051900217646074}, {"name": "\u793a\u597d", "value": 0.0051900217646074}, {"name": "\u52a9\u653b", "value": 0.0051900217646074}, {"name": "\u8111\u5b50", "value": 0.0051900217646074}, {"name": "\u611f\u89c9", "value": 0.0051900217646074}, {"name": "\u8868\u793a", "value": 0.0051900217646074}, {"name": "\u771f\u662f", "value": 0.0051900217646074}, {"name": "\u9632\u5b88", "value": 0.0051900217646074}, {"name": "\u961f\u957f", "value": 0.0051900217646074}], "1": [{"name": "\u987e\u8d85", "value": 0.10490184270745513}, {"name": "\uff1f", "value": 0.033843189208719746}, {"name": "\uff01", "value": 0.02541250150547995}, {"name": "\u56fd\u5bb6\u961f", "value": 0.01577742984463447}, {"name": "\u82cf\u5b81", "value": 0.012164277971817416}, {"name": "\u6052\u5927", "value": 0.01095989401421173}, {"name": "\u987e\u64cd", "value": 0.01095989401421173}, {"name": "\u8fd9\u79cd", "value": 0.009755510056606046}, {"name": "\u8fdb", "value": 0.009755510056606046}, {"name": "\u53d9\u5229\u4e9a", "value": 0.009755510056606046}, {"name": "\u62bd\u7b4b", "value": 0.008551126099000361}, {"name": "\u8e22", "value": 0.007346742141394676}, {"name": "\u95e8\u5c06", "value": 0.007346742141394676}, {"name": "\u611f\u8c22", "value": 0.007346742141394676}, {"name": "\u5efa\u4e1a", "value": 0.0061423581837889915}, {"name": "\u8865\u65f6", "value": 0.0061423581837889915}, {"name": "\u4e0b", "value": 0.0061423581837889915}, {"name": "\u5931\u8bef", "value": 0.0061423581837889915}, {"name": "\u77e5\u9053", "value": 0.0061423581837889915}, {"name": "\u7403\u8ff7", "value": 0.0061423581837889915}, {"name": "\u8868\u73b0", "value": 0.004937974226183307}, {"name": "\u54ed", "value": 0.004937974226183307}, {"name": "\u51fa\u51fb", "value": 0.004937974226183307}, {"name": "\u4eba", "value": 0.004937974226183307}, {"name": "\u7b11", "value": 0.004937974226183307}, {"name": "\u6709\u70b9", "value": 0.004937974226183307}, {"name": "\u5927\u8fde", "value": 0.003733590268577623}, {"name": "\u771f\u7684", "value": 0.003733590268577623}, {"name": "\u8bb0\u5f97", "value": 0.003733590268577623}, {"name": "\u4e00\u4e0b", "value": 0.003733590268577623}], "2": [{"name": "\u987e\u8d85", "value": 0.0766133091714487}, {"name": "\uff01", "value": 0.03433001107419712}, {"name": "\u82cf\u5b81", "value": 0.02023557837511326}, {"name": "\u597d", "value": 0.013188362025571328}, {"name": "\u95e8\u5c06", "value": 0.012181616832779624}, {"name": "\u8fd9\u573a", "value": 0.008154636061612805}, {"name": "\u8e22", "value": 0.008154636061612805}, {"name": "\u8d5b\u5b63", "value": 0.008154636061612805}, {"name": "\u6052\u5927", "value": 0.008154636061612805}, {"name": "\u8868\u73b0", "value": 0.008154636061612805}, {"name": "\u6700\u540e", "value": 0.008154636061612805}, {"name": "\u673a\u4f1a", "value": 0.008154636061612805}, {"name": "\u540e\u536b", "value": 0.0071478908688211015}, {"name": "\u8fdb\u7403", "value": 0.0071478908688211015}, {"name": "\u4eca\u5929", "value": 0.0071478908688211015}, {"name": "\u771f", "value": 0.0071478908688211015}, {"name": "\u7403\u8ff7", "value": 0.0071478908688211015}, {"name": "\u4e00\u4e2a", "value": 0.0071478908688211015}, {"name": "\u72b6\u6001", "value": 0.006141145676029397}, {"name": "\u6700\u4f73", "value": 0.005134400483237693}, {"name": "\u4e0a\u6e2f", "value": 0.005134400483237693}, {"name": "\u592a", "value": 0.005134400483237693}, {"name": "\u90d1\u9f99", "value": 0.004127655290445988}, {"name": "\u4e24\u4e2a", "value": 0.004127655290445988}, {"name": "\u6362", "value": 0.004127655290445988}, {"name": "\u7403\u5458", "value": 0.004127655290445988}, {"name": "\u5e94\u8be5", "value": 0.004127655290445988}, {"name": "\u95ee\u9898", "value": 0.004127655290445988}, {"name": "\u540e", "value": 0.004127655290445988}, {"name": "\u7403\u961f", "value": 0.003120910097654284}], "3": [{"name": "\u987e\u8d85", "value": 0.07717515975749632}, {"name": "\u4e00\u811a", "value": 0.032934622316893335}, {"name": "\uff01", "value": 0.02474193019826315}, {"name": "\u8499", "value": 0.016549238079632968}, {"name": "\u8138", "value": 0.01491069965590693}, {"name": "\u6342", "value": 0.01491069965590693}, {"name": "\u4e00\u4e2a", "value": 0.013272161232180895}, {"name": "\u6469\u6258", "value": 0.013272161232180895}, {"name": "\u5929", "value": 0.011633622808454858}, {"name": "\u54c8\u54c8\u54c8", "value": 0.011633622808454858}, {"name": "\u5929\u4ea6\u8001", "value": 0.009995084384728821}, {"name": "\u82cf\u5b81", "value": 0.009995084384728821}, {"name": "\u8fdb\u7403", "value": 0.009995084384728821}, {"name": "\u7b11", "value": 0.009995084384728821}, {"name": "\u82e5\u6709\u60c5", "value": 0.009995084384728821}, {"name": "\u6c5f\u82cf", "value": 0.008356545961002786}, {"name": "\u6ed1\u7a3d", "value": 0.008356545961002786}, {"name": "\u5c0f", "value": 0.008356545961002786}, {"name": "\u5f3a", "value": 0.008356545961002786}, {"name": "\u7eff\u57ce", "value": 0.008356545961002786}, {"name": "\u54ed", "value": 0.008356545961002786}, {"name": "\u8d85\u7ea7", "value": 0.006718007537276749}, {"name": "\u518d", "value": 0.006718007537276749}, {"name": "\u770b\u5230", "value": 0.006718007537276749}, {"name": "\u770b\u89c1", "value": 0.006718007537276749}, {"name": "\u7b97", "value": 0.005079469113550714}, {"name": "\u7981\u533a", "value": 0.005079469113550714}, {"name": "\u51e0\u591a", "value": 0.005079469113550714}, {"name": "\u5c04\u95e8", "value": 0.005079469113550714}, {"name": "\u4f30\u8ba1", "value": 0.005079469113550714}]};
var topic_summary = {"0": [{"content": "\u6bd4\u8d5b\u7ed3\u675f\u987e\u8d85\u8be1\u5f02\u7684\u7b11\u4e86\uff0c\u5475\u5475\uff0c\u5409\u7965\u548c\u5f20\u5448\u680b\u4e00\u6837\u90fd\u5f53\u4e86\u961f\u957f\uff0c\u90fd\u6709\u6240\u8fdb\u6b65\uff0c\u4e0d\u8fc7\u53ea\u662f\u9650\u5b9a\u4e8e\u5b9a\u4f4d\u7403\u800c\u5df2\u3002\u5f6d\u6b23\u529b\u786e\u5b9e\u662f\u7528\u8111\u5b50\u8e22\u7403\u7684\u7403\u5458\uff0c\u5934\u4e0d\u505c\u7684\u7529\u52a8\u770b\u56db\u5468\u60c5\u51b5\uff0c\u6bd4\u65b0\u624b\u5b66\u5f00\u8f66\u8fd8\u9891\u7e41\uff0c\u4e0d\u8fc7\u8fd9\u4e5f\u662f\u4e2d\u573a\u7403\u5458\u5e94\u8be5\u5177\u6709\u7684\u7d20\u8d28\u3002\u6253\u4e86\u8fd9\u4e48\u591a\uff0c\u5927\u5bb6\u770b\u7740\u9f13\u52b1\u4e00\u4e0b\uff1f", "up": 415}, {"content": "\u5168\u573a\u6bd4\u8d5b\u7ed3\u675f\uff0c\u987e\u8d850:0\u987d\u5f3a\u903c\u5e73\u6768\u7a0b\u3002", "up": 265}, {"content": "\u6bd4\u8d77\u7eb9\u8eab\uff0c\u8db3\u534f\u5e94\u8be5\u628a\u5fc3\u601d\u7528\u6765\u6574\u6cbb\u8d5b\u573a\u6076\u610f\u4f24\u4eba\u4e0a\uff0c\u987e\u8d85\u8fd9\u52a8\u4f5c\u4eae\u978b\u5e95\u76f4\u63a5\u5954\u811a\u8e1d\u53bb\uff0c\u5fc3\u91cc\u6ca1\u70b9\u903c\u6570\u4e48\uff0c\u7ed9\u7ea2\u724c\u90fd\u53ef\u4ee5\uff0c\u8fd8\u4e0a\u53bb\u4e0d\u4f9d\u4e0d\u9976\u3002\u3002", "up": 37}, {"content": "\u6211\u662f\u5efa\u4e1a\u7403\u8ff7\uff0c\u987e\u8d85\u8fd9\u4e2a\u52a8\u4f5c\u771f\u4e0d\u5e94\u8be5", "up": 15}, {"content": "\u987e\u8d85\u6bd4\u6bd4\u5212\u5212\u592a\u88c5\u4e86\uff0c\u573a\u4e0a\u53ef\u4ee5\u8c01\u610f\u5bf9\u5bf9\u65b9\u6307\u9f3b\u5b50\u77aa\u773c\u5417\uff1f\u987e\u8d85\u592a\u8fc7\u4e86\uff0c\u4f60\u72af\u89c4\u793a\u597d\uff0c\u522b\u4eba\u5c31\u5f97\u63a5\u53d7\uff0c\u5426\u5219\u4f60\u5c31\u6bd4\u6bd4\u5212\u5212\u88c5\u5927\u54e5\uff1f\u592a\u8fc7\u4e86\uff0c\u4f60\u7b97\u5565\uff1f\u4f60\u9ed1\u811a\u8fd8\u6709\u7406\u4e86\uff1f", "up": 8}], "1": [{"content": "\u8865\u65f6\u6700\u540e\u987e\u8d85\u90a3\u4e00\u6251\uff0c\u591a\u5c11\u6052\u5927\u7403\u8ff7\u5413\u51fa\u4e00\u8eab\u51b7\u6c57\uff1f[\u7b11\u54ed]", "up": 1140}, {"content": "\u8fd8\u771f\u7684\u53eb\u987e\u64cd\u554a \u6211\u4ee5\u4e3a\u662f\u987e\u8d85\u5462 \u4e0b\u9ed1\u811a\u7684\u672c\u4e8b\u4e5f\u5bf9\u5f97\u8d77\u8fd9\u4e2a\u540d\u5b57", "up": 284}, {"content": "\u987e\u8d85\u4e0b\u9ed1\u811a\u6709\u70b9\u4e0d\u8bb2\u7a76\u554a\u2026\u2026", "up": 182}, {"content": "\u4e00\u5e2e****\uff0c\u8e22\u4e0d\u8fc7\u602a\u987e\u8d85\u62bd\u7b4b\uff0c\u7ed9\u4f60\u8865\u65f66\u5206\u534a\u4e0d\u591f\uff0c\u8981\u7ed9\u4f60\u4eec10\u5206\u949f\u8865\u65f6\u662f\u4e0d\u662f", "up": 173}, {"content": "\u8bf4\u987e\u8d85\u7684\uff0c\u7b2c\u4e00\u62d6\u5ef6\u662f\u79cd\u6218\u672f\uff0c\u4e2d\u56fd\u961f\u8981\u662f\u51fa\u73b0\u8fd9\u79cd\u60c5\u51b5\u4f60\u4eec\u4f1a\u600e\u4e48\u8bf4\uff1f\u65e0\u975e\u662f\u5927\u8fde\u8f93\u4e86\u7403\u8ff7\u5fc3\u91cc\u4e0d\u75db\u5feb\u7f62\u4e86\u3002\u7b2c\u4e8c\uff0c\u62d6\u5ef6\u7684\u65f6\u95f4\u8865\u7ed9\u4f60\u4eec\u4e86\u5427\uff0c\u8fd8\u6709\u4ec0\u4e48\u8bf4\u7684\uff1f\u7b2c\u4e09\uff0c\u56de\u653e\u663e\u793a\u987e\u8d85\u662f\u5f00\u5927\u811a\u4ee5\u540e\u62bd\u7b4b\u7684\uff0c\u96be\u9053\u6ca1\u6709\u56e0\u4e3a\u7a81\u7136\u53d1\u529b\u5bfc\u81f4\u652f\u6491\u811a\u62bd\u7b4b\u7684\u60c5\u51b5\uff1f\uff1f\u81ea\u5df1\u8003\u8651\u4e0b\u5427\u3002", "up": 19}], "2": [{"content": "\u5361\u91cc\u4e4c\u65af\uff1a\u6211\u89c9\u5f97\u987e\u8d85\u662f\u6b27\u51a0\u7ea7\u522b\u7684\u95e8\u5c06", "up": 617}, {"content": "\u82cf\u5b81\u95e8\u5c06\u987e\u8d85\u5389\u5bb3\u4e86\uff0c\u5b8c\u5168\u8be0\u91ca\u4e86\u5446\u82e5\u6728\u9e21\u8fd9\u4e2a\u6210\u8bed", "up": 298}, {"content": "\u987e\u8d85\u6700\u540e\u5f00\u95e8\u7403\u524d\u540e\u536b\u8ddf\u4ed6\u8bf4\u4e86\u70b9\u4ec0\u4e48\uff0c\u7136\u540e\u4ed6\u5f00\u95e8\u7403\u540e\u5c31\u62bd\u7b4b\u513f\uff0c\u4f46\u662f\u6700\u540e\u88c1\u5224\u53c8\u591a\u8865\u4e86\u4e24\u5206\u949f[\u7b11\u54ed]", "up": 285}, {"content": "\u4e0a\u6e2f\u8fd8\u662f\u592a\u4f9d\u8d56\u6d69\u514b\u4e86\uff0c\u6052\u5927\u8fd8\u662f\u592a\u4f9d\u8d56\u987e\u8d85\u4e86[\u7948\u7977]", "up": 151}, {"content": "\u987e\u8d85\u4eca\u5929\u53d1\u6325\u4e0d\u9519", "up": 88}], "3": [{"content": "\u987e\u8d85\u771f\u662f\u53f2\u8bd7\u7ea7\u7684\u62d6\u5ef6\u65f6\u95f4\u2026\u2026[\u6342\u8138][\u6342\u8138][\u6342\u8138]", "up": 911}, {"content": "\u987e\u64cd\u4f60\u9664\u4e86\u8981\u7ed9\u674e\u5b66\u9e4f\u548c\u9ad8\u62c9\u7279\u9053\u6b49\u5916\u8fd8\u8981\u7ed9\u987e\u8d85\u9053\u6b49\uff0c\u56e0\u4e3a\u987e\u8d85\u66ff\u4f60\u6328\u4e86\u4e0d\u5c11\u9a82\uff0c\u771f\u8eba\u7740\u4e5f\u4e2d\u67aa\u2026\u2026", "up": 675}, {"content": "\u5929\u82e5\u6709\u60c5\u5929\u4ea6\u8001\uff0c\u770b\u5230\u987e\u8d85\u201c\u8499\u4e00\u811a\u201d\uff0c\u4e00\u811a\u4e0d\u591f\u518d\u4e00\u811a\uff01[xjbt][xjbt]", "up": 485}, {"content": "\u5fc5\u987b\u5439\u4e00\u6ce2\u6469\u6258\uff01\u7b2c\u4e00\u4e2a\u8fdb\u7403\u5c31\u662f\u5c0f\u6469\u6258\u5728\u7981\u533a\u5f27\u9876\u5904\u7684\u4e00\u811a\u6070\u5f53\u597d\u5904\u7684\u6311\u4f20\uff0c\u9020\u6210\u4e86\u82cf\u5b81\u62ac\u811a\u8fc7\u9ad8\uff0c\u95f4\u63a5\u4efb\u610f\u7403\uff0c\u6700\u7ec8\u7531\u5c0f\u6469\u6258\u81ea\u5df1\u5927\u529b\u5c04\u95e8\u8fdb\u7403\uff0c\u4f30\u8ba1\u987e\u8d85\u90fd\u6ca1\u89c1\u8fc7\u529b\u91cf\u8fd9\u4e48\u5927\u7684\u5c04\u95e8\u3002\u3002\u3002\u3002\u7b2c\u4e8c\u4e2a\u8fdb\u7403\u8fd8\u662f\u5c0f\u6469\u6258\u53f3\u8def\u6301\u7403\u4e00\u811a\u5916\u811a\u80cc\u76f4\u585e\u7ed9\u5230\u5927\u6469\u6258\uff0c\u5927\u6469\u6258\u4e5f\u662f666\uff0c\u5f3a\u884c\u4f20\u4e2d\u9020\u6210\u8fdb\u7403\uff0c\u7b2c\u56db\u4e2a\u8fdb\u7403\uff0c\u5c0f\u6469\u6258\u5f3a\u7a81\u81f3\u5de6\u8def\u7981\u533a\u5e95\u7ebf\u4f20\u4e2d\uff0c\u5218\u536b\u4e1c\u88ab\u52a8\u5403\u997c\uff0c\u5168\u573a\u8fd8\u6709\u591a\u6b21\u63a5\u540e\u573a\u957f\u4f20\u7cbe\u5de7\u505c\u7403\u62dc\u6258\uff0c\u8fd8\u6709\u4e00\u6b21\u53f3\u8def\u5f3a\u5403\u6740\u8fdb\u82cf\u5b81\u7981\u533a\u4f20\u4e2d\uff0c\u961f\u53cb\u5c04\u95e8\u88ab\u6321\u51fa\u3002\u3002\u3002\u5c0f\u6469\u6258\u8fd9\u4f20\u3001\u5e26\u3001\u5c04\u80fd\u529b\u6bd4\u90a3\u4e9b\u8eab\u4ef7\u51e0\u5343\u4e07\u6b27\u5143\u7684\u80fd\u5dee\u591a\u5c11\uff1f\u6240\u4ee5\u4e2d\u8d85\u8d5b\u573a\u4e0d\u4e00\u5b9a\u8eab\u4ef7\u9ad8\u7684\u5916\u63f4\u5c31\u597d\u7528\u3002", "up": 152}, {"content": "\u5c31\u7b97\u6c5f\u82cf\u8d62\u4e86\u53c8\u5982\u4f55\uff0c\u56fd\u5b89\u4e5f\u8d62\u4e86\uff0c\u8fd8\u4e0d\u662f\u7167\u6837\u65e0\u7f18\u4e9a\u51a0\uff0c\u6240\u4ee5\u6c5f\u82cf\u8fdb\u4e0d\u8fdb\u4e9a\u51a0\u4e3b\u52a8\u6743\u90fd\u4e0d\u5728\u81ea\u5df1\uff0c\u4e0e\u5176\u62fc\u6b7b\u62fc\u6d3b\u8fd8\u8981\u770b\u522b\u4eba\u8138\u8272\uff0c\u4e0d\u5982\u8e22\u4e00\u4f1a\u5feb\u4e86\u8db3\u7403\uff0c\u662f\u5427\uff0c\u987e\u8d85", "up": 104}]};
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
