var data = {"person_name": "\u57c3\u5fb7\u5c14", "nicknames": "\u57c3\u5fb7\u5c14", "aspects": {"\u7403\u5458": 0.37803600528625925, "\u8fdb\u7403": 0.8103521698500707, "\u9632\u5b88": 0.49090467258511505, "\u5916\u63f4": 0.39253646302154993, "\u8d8a\u4f4d": 0.18507307570407866, "\u8d5b\u5b63": 0.7315726612410918, "\u4f20\u7403": 0.8532720684187609, "\u56fd\u5bb6\u961f": 0.38980814249703044, "\u7a81\u7834": 0.05561882151605978, "\u7403\u8ff7": 0.45492206453784284}, "overall_heat": 92.0, "overall_polar": 0.488, "name": "186", "nationality": "\u610f\u5927\u5229", "position": "\u524d\u950b", "goal": "6", "assist": "5", "team_name": "\u6c5f\u82cf\u82cf\u5b81", "name_en": "Eder Citadin Martins", "age": "32", "height": "179", "weight": "72"};
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
var topic_keywords = {"0": [{"name": "\uff01", "value": 0.1000942507068803}, {"name": "\u57c3\u5fb7\u5c14", "value": 0.09255419415645617}, {"name": "\u8fdb\u7403", "value": 0.015268614514608859}, {"name": "\u82cf\u5b81", "value": 0.015268614514608859}, {"name": "\u7403", "value": 0.015268614514608859}, {"name": "\u7279\u8c22\u62c9", "value": 0.013383600377002827}, {"name": "\u52a0\u6cb9", "value": 0.013383600377002827}, {"name": "\u7403\u5458", "value": 0.011498586239396796}, {"name": "\u597d", "value": 0.011498586239396796}, {"name": "\u535a\u963f", "value": 0.011498586239396796}, {"name": "\u57fa\u8036", "value": 0.011498586239396796}, {"name": "\u4e0b", "value": 0.009613572101790762}, {"name": "\u771f\u7684", "value": 0.009613572101790762}, {"name": "\u5389\u5bb3", "value": 0.007728557964184731}, {"name": "\u610f\u5927\u5229", "value": 0.007728557964184731}, {"name": "\uff1f", "value": 0.007728557964184731}, {"name": "\u4e00\u961f", "value": 0.007728557964184731}, {"name": "\u7279\u795e", "value": 0.007728557964184731}, {"name": "\u961f\u53f2", "value": 0.005843543826578699}, {"name": "\u8d5b\u5b63", "value": 0.005843543826578699}, {"name": "\u5b8c\u7f8e", "value": 0.005843543826578699}, {"name": "\u8dd1\u4f4d", "value": 0.005843543826578699}, {"name": "\u8e22", "value": 0.005843543826578699}, {"name": "\u6548\u679c", "value": 0.005843543826578699}, {"name": "\u56fd\u7c73", "value": 0.005843543826578699}, {"name": "\u5a01\u6b66", "value": 0.003958529688972668}, {"name": "\u53d6\u5f97", "value": 0.003958529688972668}, {"name": "\u539f\u6765", "value": 0.003958529688972668}, {"name": "\u5916\u63f4", "value": 0.003958529688972668}, {"name": "\u767e\u573a", "value": 0.003958529688972668}], "1": [{"name": "\u57c3\u5fb7\u5c14", "value": 0.08327868852459017}, {"name": "\uff1f", "value": 0.028633879781420766}, {"name": "\u5b8c\u5168", "value": 0.026448087431693988}, {"name": "\u82cf\u5b81", "value": 0.026448087431693988}, {"name": "\u8d8a\u4f4d", "value": 0.024262295081967214}, {"name": "\u7279\u8c22\u62c9", "value": 0.019890710382513662}, {"name": "\u534e\u590f\u5e78\u798f", "value": 0.017704918032786884}, {"name": "\uff01", "value": 0.017704918032786884}, {"name": "\u7403\u5458", "value": 0.013333333333333332}, {"name": "\u6253", "value": 0.013333333333333332}, {"name": "\u9632\u5b88", "value": 0.013333333333333332}, {"name": "\u4e0d\u9519", "value": 0.011147540983606557}, {"name": "\u4e0d\u7528", "value": 0.011147540983606557}, {"name": "\u5df2", "value": 0.00896174863387978}, {"name": "\u4e2d\u7ebf", "value": 0.00896174863387978}, {"name": "\u7ad9", "value": 0.00896174863387978}, {"name": "\u7a81\u7834", "value": 0.00896174863387978}, {"name": "\u7a7f", "value": 0.00896174863387978}, {"name": "\u6240\u6709", "value": 0.00896174863387978}, {"name": "\u5b88\u95e8\u5458", "value": 0.00896174863387978}, {"name": "\u540e\u536b", "value": 0.00896174863387978}, {"name": "\u524d\u573a", "value": 0.00896174863387978}, {"name": "\u961f", "value": 0.00896174863387978}, {"name": "\u90a3\u7403", "value": 0.0067759562841530055}, {"name": "\u57fa\u8036", "value": 0.0067759562841530055}, {"name": "\u5916\u63f4", "value": 0.0067759562841530055}, {"name": "\u9ec4\u7d2b\u660c", "value": 0.0067759562841530055}, {"name": "\u72af\u89c4", "value": 0.0067759562841530055}, {"name": "\u8c22\u9e4f\u98de", "value": 0.0067759562841530055}, {"name": "\u535a\u963f", "value": 0.0067759562841530055}], "2": [{"name": "\u57c3\u5fb7\u5c14", "value": 0.02830409356725146}, {"name": "\u82cf\u5b81", "value": 0.016608187134502923}, {"name": "\u683c\u5fb7\u65af", "value": 0.014269005847953216}, {"name": "\u771f", "value": 0.0095906432748538}, {"name": "\u627e", "value": 0.0095906432748538}, {"name": "\u786e\u5b9e", "value": 0.0095906432748538}, {"name": "\u4f20\u4e2d", "value": 0.0095906432748538}, {"name": "\u505c\u7403", "value": 0.0095906432748538}, {"name": "\u5b89\u6392", "value": 0.0095906432748538}, {"name": "\u6c34\u5e73", "value": 0.0095906432748538}, {"name": "\u771f\u662f", "value": 0.0095906432748538}, {"name": "\u597d", "value": 0.007251461988304094}, {"name": "\uff1b", "value": 0.007251461988304094}, {"name": "\u5965\u62c9\u7f57\u5c24", "value": 0.007251461988304094}, {"name": "\u80fd\u529b", "value": 0.007251461988304094}, {"name": "\u8d5b\u5b63", "value": 0.007251461988304094}, {"name": "\u8e22", "value": 0.007251461988304094}, {"name": "\u4e2d\u8d85", "value": 0.007251461988304094}, {"name": "\u674e\u6602", "value": 0.007251461988304094}, {"name": "\u51e0\u6b21", "value": 0.007251461988304094}, {"name": "\u5dee", "value": 0.007251461988304094}, {"name": "\u4e00\u4e2a", "value": 0.007251461988304094}, {"name": "\u5e94\u8be5", "value": 0.007251461988304094}, {"name": "\u7403\u5458", "value": 0.007251461988304094}, {"name": "\u660e\u663e", "value": 0.007251461988304094}, {"name": "\u53d1\u89d2\u7403", "value": 0.004912280701754386}, {"name": "\u540e\u536b", "value": 0.004912280701754386}, {"name": "\u7ecf\u9a8c", "value": 0.004912280701754386}, {"name": "\u5409\u7fd4", "value": 0.004912280701754386}, {"name": "\u79d1\u65af", "value": 0.004912280701754386}]};
var topic_summary = {"0": [{"content": "\u57c3\u5fb7\u5c14\u5162\u5162\u4e1a\u4e1a\uff0c\u62fc\u640f\u7cbe\u795e\u611f\u4eba\uff0c\u4e5f\u4e3a\u56fd\u7c73\u73b0\u5728\u7684\u7403\u5458\u4eec\u63cf\u7ed8\u4e86\u4e0b\u5c06\u6765\uff0c\u597d\u597d\u8e22\u5427\uff0c\u5c06\u6765\u5347\u4e00\u961f\u3002", "up": 237}, {"content": "\u57c3\u5fb7\u5c14\u4e24\u5c04\u4e00\u4f20\uff0c\u6e10\u5165\u4f73\u5883\u3002\u5c0f\u56fd\u7c73\u6280\u672f\u6276\u8d2b\u53d6\u5f97\u9636\u6bb5\u6027\u6210\u679c\uff01[\u5389\u5bb3][\u5389\u5bb3][\u5389\u5bb3]", "up": 123}, {"content": "\u7279\u795e\u767e\u573a\u8fdb\u7403\u540c\u65f6\u6210\u4e3a\u961f\u53f2\u5c04\u624b\u738b\uff0c\u91cc\u7a0b\u7891\u4e4b\u6218\u3002\u57c3\u5fb7\u5c14\u53c8\u653e\u53cc\u54cd\u4e86[\u6ed1\u7a3d][\u6ed1\u7a3d]", "up": 119}, {"content": "\u57c3\u5fb7\u5c14\uff01\uff01\uff01\u5934\u9876\u811a\u8e22\u6885\u5f00\u4e8c\u5ea6\uff01\uff01\uff01\u51b2\u950b\u9677\u9635\u57c3\u5fb7\u5c14\uff01\u5b9a\u6d77\u795e\u9488\u5e15\u83b1\u5854\uff01\u6211\u82cf\u5a01\u6b66\u9738\u6c14\uff01\uff01\uff01", "up": 66}, {"content": "\u57c3\u5fb7\u5c14 \u725b\u903c\uff01\uff01\uff01\uff01", "up": 59}], "1": [{"content": "\u82cf\u5b81\u5de6\u624b\u6363\u53f3\u624b\u4e70\u4e2a\u57c3\u5fb7\u5c14500w\u6b27\uff0c\u6ca1\u7ed9\u8db3\u534f\u4ea4\u8c03\u8282\u8d39\uff0c\u8db3\u534f\u5c11\u8d5a\u51e0\u5343\u4e07\uff0c\u60f3\u8981\u70b9\u7403\uff0c\u95e8\u90fd\u6ca1\u6709[\u6ed1\u7a3d]", "up": 397}, {"content": "\u5c0f\u9ec4\u7684\u4f5c\u7528\uff0c\u771f\u7684\u662f\u53ef\u4ee5\u5f53\u4f5c\u5916\u63f4\u7528\u554a\uff0c\u524d\u573a\u6ca1\u6709\u7279\u8c22\u62c9\uff0c\u5c0f\u9ec4\u4e5f\u53ef\u4ee5\u548c\u57c3\u5fb7\u5c14\u6253\u51fa\u914d\u5408\uff0c\u652f\u6491\u8d77\u4e86\u524d\u573a\u8fdb\u653b\uff0c\u987a\u5e26\u518d\u5237\u4e2a\u6570\u636e\uff0c\u5982\u679c\u4eca\u5e74\u4e0d\u662f\u957f\u671f\u56fd\u5bb6\u961f\u5f81\u8c03\u4f24\u505c\u4e86\u4e00\u4e2a\u591a\u6708\uff0c\u524d\u573a\u7279\u8c22\u62c9\u57c3\u5fb7\u5c14\u9ec4\u7d2b\u660c\u662f\u53ef\u4ee5\u628a\u82cf\u5b81\u5e26\u8fdb\u4e9a\u51a0\u7684\u3002", "up": 117}, {"content": "\u57c3\u5fb7\u5c14\u5230\u4e86\u4e2d\u8d85\u6447\u8eab\u4e00\u53d8\u6210\u5927\u817f\u4e86\u3002", "up": 21}, {"content": "\u6211\u611f\u89c9\u5168\u573a\u8c22\u9e4f\u98de\uff0c\u5434\u66e6\uff0c\u57c3\u5fb7\u5c14\u8868\u73b0\u62a2\u773c\uff0c\u5439\u4e00\u6ce2\uff0c\u57c3\u5fb7\u5c14\u6765\u4e86\u4e4b\u540e\uff0c\u524d\u573a\u6709\u5316\u5b66\u4f5c\u7528\u4e86\uff01", "up": 20}, {"content": "\u57c3\u5fb7\u5c14\u8fd9\u72b6\u6001\u6253\u610f\u7532\u6413\u6413\u6709\u4f59\uff01\u6765\u4e2d\u8d85\u90fd\u8fd9\u4e48\u62fc\uff0c\u804c\u4e1a\u7403\u5458\u7684\u5178\u8303\uff01", "up": 12}], "2": [{"content": "\u4f5c\u4e3a\u82cf\u5b81\u7684\u7403\u8ff7\uff0c\u8001\u751f\u5e38\u8c08\u7684\u8bdd\u9898\uff0c4\u4e2a\u4eba\u4e0d\u8d70\u96be\u6709\u4f5c\u4e3a\uff0c1\uff0c\u535a\u963f\u57fa\u8036\uff0c\u6709\u610f\u8bc6\uff0c\u6ca1\u80fd\u529b\uff0c\u6ca1\u8eab\u4f53\uff0c\u6ca1\u62a4\u7403\uff0c\u7528\u57c3\u5fb7\u5c14\u4ee3\u66ff\uff0c2\uff0c\u5468\u4e91\uff0c\u4e91\u59b9\u59b9\u8d76\u7d27\u6362\u4e2a\u884c\u4e1a\u5427\uff0c\u5c31\u4f60\u5c31\u6c34\u5e73\u8fd8\u8e22\u8fb9\u8def\uff0c\u6ca1\u6709\u505c\u7403\u6ca1\u6709\u4f20\u4e2d\u6ca1\u6709\u901f\u5ea6\uff0c\u8d81\u65e9\u5f00\u4e2a\u706b\u9505\u5e97\uff0c3\uff0c\u674e\u6602\uff0c\u4f5c\u4e3a\u4e2d\u540e\u536b\uff0c\u4e00\u4e2a\u8d5b\u5b63\u90fd\u89c1\u4e0d\u4e86\u51e0\u6b21\u62a2\u70b9\u7684\uff0c\u5bf9\u624b\u8fdb\u653b\u90fd\u4e0d\u77e5\u9053\u4ed6\u5728\u54ea\u91cc\uff0c4\uff0c\u8c22\u9e4f\u98de\uff0c\u505c\u7403\u5c1a\u53ef\uff0c\u4f20\u4e2d\u592a\u5dee\u4e86\uff0c\u8fd8\u7ecf\u5e38\u559c\u6b22\u62a2\u7740\u53d1\u89d2\u7403\uff0c\u4e0d\u8981\u8138\uff0c\u53e6\u5916\uff0c\u79d1\u65af\u660e\u5965\u62c9\u7f57\u5c24\uff0c\u80fd\u4e0d\u80fd\u591a\u5b89\u6392\u5b89\u6392\u9ad8\u5929\u610f\uff0c\u5f20\u51cc\u5cf0\uff0c\u963f\u5e03\u90fd\u6d77\u7c73\u63d0\u4e0a\u4e0a\u573a\u554a\uff0c\u4e0d\u6bd4\u8fd9\u51e0\u4e2a\u5dee\uff0c\u603b\u4e4b\uff0c\u82cf\u5b81\u7403\u961f\u8fd0\u4f5c\u786e\u5b9e\u4e0d\u5927\u804c\u4e1a\uff0c\u4e0d\u53ef\u9ad8\u770b\uff01", "up": 20}, {"content": "\u8bf4\u771f\u7684\u611f\u89c9\u73b0\u5728\u56fd\u5185\u4f4d\u7f6e\u76f8\u8fd1\uff0c\u6700\u63a5\u8fd1\u90d1\u667a\u6c34\u5e73\u7684\u5c31\u5434\u66e6\u4e86\uff1b\u5965\u62c9\u7f57\u5c24\u786e\u5b9e\u6bd4\u5361\u4f69\u7f57\u66f4\u9002\u5408\u6267\u6559\u82cf\u5b81\uff0c\u4e34\u573a\u53d8\u5316\u4e0a\u6709\u4e24\u4e0b\u5b50\uff1b\u57c3\u5fb7\u5c14\u7684\u610f\u8bc6\u660e\u663e\u6bd4\u5176\u4ed6\u5916\u63f4\u66f4\u80dc\u4e00\u7b79\uff0c\u771f\u5e0c\u671b\u53ef\u4ee5\u5e26\u8d77\u56fd\u5185\u7403\u5458\u8fdb\u6b65", "up": 13}, {"content": "\u91cc\u5361\u591a\u90a3\u7403\u7b2c\u4e8c\u5f20\u9ec4\u724c\u6709\u70b9\u90c1\u95f7\uff0c\u6162\u955c\u770b\u5e94\u8be5\u662f\u811a\u4e0b\u6253\u6ed1\u5931\u53bb\u91cd\u5fc3\uff0c\u4f46\u786e\u5b9e\u94f2\u5012\u5409\u7fd4\u800c\u4e14\u978b\u5e95\u671d\u5929\uff0c\u88ab\u7f5a\u4e0b\u53ea\u80fd\u8bf4\u4e0d\u8d70\u8fd0\u4e86\uff1b\u4f46\u67d0\u64cd\u5927\u54e5\u7684\u72af\u89c4\u662f\u771f\u7684\u6076\u52a3\uff0c\u660e\u663e\u6545\u610f\u4ece\u57c3\u5fb7\u5c14\u8eab\u4e0a\u8de8\u8fc7\u53bb\u800c\u4e14\u522e\u8e6d\u5bf9\u65b9\uff0c\u8fd9\u7d20\u8d28\u771f\u662f\u4f4e\u5f97\u8ba9\u4eba\u65e0\u8bed\u2026\u2026\u2026\u2026\u2026\u2026\u4ee5\u524d\u9ed1\u5409\u7fd4\u6709\u52c7\u65e0\u8c0b\uff0c\u8fd9\u8d5b\u5b63\u770b\u4ed6\u53c8\u7ecf\u5e38\u6709\u9ad8\u5149\u8868\u73b0\uff0c\u7279\u522b\u662f\u5c04\u95e8\u548c\u4f20\u7403\u8d28\u91cf\u660e\u663e\u63d0\u9ad8\u4e86", "up": 10}, {"content": "\u57c3\u5fb7\u5c14\u5389\u5bb3\uff0c\u4e0d\u627e\u8d35\u7684\u53ea\u627e\u5bf9\u7684\uff0c\u534e\u590f\u627e\u7684\u5c0f\u9a6c\uff0c\u4ec0\u4e48\u610f\u601d\uff0c\u653b\u4e0d\u4e0a\u5b88\u4e0d\u4f4f", "up": 9}, {"content": "\u4f5c\u4e3a\u82cf\u5b81\u7684\u7403\u8ff7\uff0c\u8001\u751f\u5e38\u8c08\u7684\u8bdd\u9898\uff0c4\u4e2a\u4eba\u4e0d\u8d70\u96be\u6709\u4f5c\u4e3a\uff0c1\uff0c\u535a\u963f\u57fa\u8036\uff0c\u6709\u610f\u8bc6\uff0c\u6ca1\u80fd\u529b\uff0c\u6ca1\u8eab\u4f53\uff0c\u6ca1\u62a4\u7403\uff0c\u7528\u57c3\u5fb7\u5c14\u4ee3\u66ff\uff0c2\uff0c\u5468\u4e91\uff0c\u4e91\u59b9\u59b9\u8d76\u7d27\u6362\u4e2a\u884c\u4e1a\u5427\uff0c\u5c31\u4f60\u5c31\u6c34\u5e73\u8fd8\u8e22\u8fb9\u8def\uff0c\u6ca1\u6709\u505c\u7403\u6ca1\u6709\u4f20\u4e2d\u6ca1\u6709\u901f\u5ea6\uff0c\u8d81\u65e9\u5f00\u4e2a\u706b\u9505\u5e97\uff0c3\uff0c\u674e\u6602\uff0c\u4f5c\u4e3a\u4e2d\u540e\u536b\uff0c\u4e00\u4e2a\u8d5b\u5b63\u90fd\u89c1\u4e0d\u4e86\u51e0\u6b21\u62a2\u70b9\u7684\uff0c\u5bf9\u624b\u8fdb\u653b\u90fd\u4e0d\u77e5\u9053\u4ed6\u5728\u54ea\u91cc\uff0c4\uff0c\u8c22\u9e4f\u98de\uff0c\u505c\u7403\u5c1a\u53ef\uff0c\u4f20\u4e2d\u592a\u5dee\u4e86\uff0c\u8fd8\u7ecf\u5e38\u559c\u6b22\u62a2\u7740\u53d1\u89d2\u7403\uff0c\u4e0d\u8981\u8138\uff0c\u53e6\u5916\uff0c\u79d1\u65af\u660e\u5965\u62c9\u7f57\u5c24\uff0c\u80fd\u4e0d\u80fd\u591a\u5b89\u6392\u5b89\u6392\u9ad8\u5929\u610f\uff0c\u5f20\u51cc\u5cf0\uff0c\u963f\u5e03\u90fd\u6d77\u7c73\u63d0\u4e0a\u4e0a\u573a\u554a\uff0c\u4e0d\u6bd4\u8fd9\u51e0\u4e2a\u5dee\uff0c\u603b\u4e4b\uff0c\u82cf\u5b81\u7403\u961f\u8fd0\u4f5c\u786e\u5b9e\u4e0d\u5927\u804c\u4e1a\uff0c\u4e0d\u53ef\u9ad8\u770b\uff01", "up": 6}]};
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
