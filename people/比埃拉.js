var data = {"person_name": "\u6bd4\u57c3\u62c9", "nicknames": "\u6bd4\u57c3\u62c9", "aspects": {"\u7403\u5458": 0.5418391679383655, "\u8d8a\u4f4d": 0.2600012723537642, "\u8fdb\u653b": 0.6984092930453599, "\u8fdb\u7403": 0.5709281366708637, "\u5916\u63f4": 0.7700392423643836, "\u9632\u5b88": 0.7597930549850157, "\u7403\u8ff7": 0.47398908806374074, "\u6bd4\u8d5b": 0.650242192610102, "\u4f20\u7403": 0.782652280812597, "\u8db3\u7403": 0.19738364926350355}, "overall_heat": 107.0, "overall_polar": 0.877, "name": "64", "nationality": "\u897f\u73ed\u7259", "position": "\u4e2d\u573a", "goal": "15", "assist": "15", "team_name": "\u5317\u4eac\u4e2d\u8d6b\u56fd\u5b89", "name_en": "Jonathan Viera", "age": "29", "height": "171", "weight": "66"};
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
var topic_keywords = {"0": [{"name": "\u6bd4\u57c3\u62c9", "value": 0.057662432605318475}, {"name": "\u56fd\u5b89", "value": 0.03298912546833593}, {"name": "\uff01", "value": 0.02202321118523257}, {"name": "\u8d8a\u4f4d", "value": 0.014712601663163669}, {"name": "\u5df4\u574e\u5e03", "value": 0.014712601663163669}, {"name": "\u8e22", "value": 0.013798775472905053}, {"name": "\u6734\u6210", "value": 0.01288494928264644}, {"name": "\uff1f", "value": 0.010143470711870602}, {"name": "\u5965\u53e4\u65af\u6258", "value": 0.00922964452161199}, {"name": "\u7403", "value": 0.00922964452161199}, {"name": "\u4e0a\u6e2f", "value": 0.008315818331353376}, {"name": "\u6c60\u5fe0\u56fd", "value": 0.008315818331353376}, {"name": "\u5916\u63f4", "value": 0.008315818331353376}, {"name": "\u4eca\u5e74", "value": 0.006488165950836151}, {"name": "\u8fdb\u7403", "value": 0.006488165950836151}, {"name": "\u6052\u5927", "value": 0.006488165950836151}, {"name": "\u4e0d\u9519", "value": 0.006488165950836151}, {"name": "\u4e2d\u8d85", "value": 0.005574339760577538}, {"name": "\u771f\u7684", "value": 0.005574339760577538}, {"name": "\u8d5b\u5b63", "value": 0.005574339760577538}, {"name": "\u4f20\u7403", "value": 0.005574339760577538}, {"name": "\u597d\u770b", "value": 0.004660513570318926}, {"name": "\u914d\u5408", "value": 0.004660513570318926}, {"name": "\u8fdb\u653b", "value": 0.004660513570318926}, {"name": "\u786e\u5b9e", "value": 0.004660513570318926}, {"name": "\u6700", "value": 0.004660513570318926}, {"name": "\u5389\u5bb3", "value": 0.004660513570318926}, {"name": "\u50b2\u9aa8", "value": 0.004660513570318926}, {"name": "\u4e2d\u573a", "value": 0.004660513570318926}, {"name": "\u7403\u5458", "value": 0.004660513570318926}], "1": [{"name": "\u6bd4\u57c3\u62c9", "value": 0.03579067446171397}, {"name": "\u56fd\u5b89", "value": 0.02010551832311422}, {"name": "\u7b11", "value": 0.014401825181805218}, {"name": "\u54ed", "value": 0.01297590189647797}, {"name": "\uff01", "value": 0.01012405532582347}, {"name": "\u4e00\u4e2a", "value": 0.01012405532582347}, {"name": "\u7403\u8ff7", "value": 0.008698132040496222}, {"name": "\u70b9\u7403", "value": 0.008698132040496222}, {"name": "\u88c1\u5224", "value": 0.007272208755168972}, {"name": "\u8e22", "value": 0.007272208755168972}, {"name": "\u7981\u533a", "value": 0.007272208755168972}, {"name": "\u4eba", "value": 0.007272208755168972}, {"name": "\u72af\u89c4", "value": 0.007272208755168972}, {"name": "\u597d", "value": 0.007272208755168972}, {"name": "\u5c0f", "value": 0.007272208755168972}, {"name": "\uff1f", "value": 0.007272208755168972}, {"name": "\u7403", "value": 0.0058462854698417225}, {"name": "\u9c81\u80fd", "value": 0.0058462854698417225}, {"name": "\u611f\u89c9", "value": 0.0058462854698417225}, {"name": "\u60f3", "value": 0.004420362184514474}, {"name": "\u7591\u4f3c", "value": 0.004420362184514474}, {"name": "\u771f", "value": 0.004420362184514474}, {"name": "\u53ea", "value": 0.004420362184514474}, {"name": "\u771f\u7684", "value": 0.004420362184514474}, {"name": "\u77e5\u9053", "value": 0.004420362184514474}, {"name": "\u6280\u672f", "value": 0.004420362184514474}, {"name": "\u5df4\u574e\u5e03", "value": 0.004420362184514474}, {"name": "\u62c9\u65af", "value": 0.004420362184514474}, {"name": "\u4eca\u5929", "value": 0.004420362184514474}, {"name": "\u5224", "value": 0.004420362184514474}], "2": [{"name": "\uff01", "value": 0.053653678575874525}, {"name": "\u6bd4\u57c3\u62c9", "value": 0.03124610979708702}, {"name": "\u9c81\u80fd", "value": 0.012573135814764099}, {"name": "\u8fd9\u573a", "value": 0.011328270882609237}, {"name": "\u5df4\u574e\u5e03", "value": 0.010083405950454375}, {"name": "\u6052\u5927", "value": 0.010083405950454375}, {"name": "\u5916\u63f4", "value": 0.008838541018299515}, {"name": "\u7403\u5458", "value": 0.008838541018299515}, {"name": "\u56fd\u5b89", "value": 0.008838541018299515}, {"name": "\u97e6\u4e16\u8c6a", "value": 0.008838541018299515}, {"name": "\u4e00\u4e2a", "value": 0.007593676086144654}, {"name": "\u5df4\u987f", "value": 0.007593676086144654}, {"name": "\u4e2d\u56fd", "value": 0.006348811153989792}, {"name": "\u592a", "value": 0.006348811153989792}, {"name": "\u5965\u53e4\u65af\u6258", "value": 0.006348811153989792}, {"name": "\u65bd\u5bc6\u7279", "value": 0.006348811153989792}, {"name": "\u8fdb\u653b", "value": 0.0051039462218349305}, {"name": "\u8fdb\u7403", "value": 0.0051039462218349305}, {"name": "\u80fd\u529b", "value": 0.0051039462218349305}, {"name": "\u4e0d\u884c", "value": 0.0051039462218349305}, {"name": "\u8e22", "value": 0.0051039462218349305}, {"name": "\u4e0d\u7528", "value": 0.0051039462218349305}, {"name": "\u6362\u4e0b", "value": 0.0051039462218349305}, {"name": "\u7d22\u91cc\u4e9a\u8bfa", "value": 0.0051039462218349305}, {"name": "\u597d", "value": 0.0051039462218349305}, {"name": "\uff1b", "value": 0.0051039462218349305}, {"name": "\u73b0\u5728", "value": 0.0051039462218349305}, {"name": "\u674e\u78ca", "value": 0.0051039462218349305}, {"name": "\u9996\u53d1", "value": 0.0051039462218349305}, {"name": "\u6bd4\u8d5b", "value": 0.0051039462218349305}]};
var topic_summary = {"0": [{"content": "\u6bd4\u57c3\u62c9\u662f\u771f\u5fc3\u725b\u903c", "up": 390}, {"content": "\u6bd4\u57c3\u62c9\u662f\u771f\u5389\u5bb3\uff0c\u8fde\u7eed\u8e22\u591a\u5c11\u573a\u4e86\uff0c\u8fd8\u8fd9\u4e2a\u4f53\u80fd\u548c\u72b6\u6001\uff0c\u8138\u4e0a\u8fd8\u8001\u662f\u5fae\u7b11\u7740\uff0c\u771f\u7684\u8e22\u4e2d\u8d85\u8ddf\u73a9\u4f3c\u7684\uff0c\u56fd\u5b89\u786e\u5b9a\u4e70\u7684\u4e0d\u662f\u4f0a\u6d85\u65af\u5854\u5417\uff1f", "up": 265}, {"content": "\u56fd\u5b89\u4eca\u5e74\u8e22\u5f97\u771f\u4e0d\u9519\uff0c\u98ce\u683c\u8ddf\u5df4\u8428\u66fc\u57ce\u90fd\u6bd4\u8f83\u50cf\uff0c\u7b2c\u4e00\u573a\u8f93\u7ed9\u9c81\u80fd\u7eaf\u5c5e\u8d56\u65bd\u5bc6\u7279\u778e\u6392\u9635\u5bb9\uff0c\u540e\u51e0\u573a\u4e2d\u573a\u4e0a\u4e86\u6c60\u5fe0\u56fd\uff0c\u6734\u6210\u548c\u6bd4\u57c3\u62c9\u4e4b\u540e\uff0c\u52a0\u4e0a\u5965\u53e4\u65af\u6258\uff0c\u4e2d\u573a\u5b9e\u529b\u5728\u4e2d\u8d85\u7edd\u5bf9\u6570\u4e00\u6570\u4e8c\uff0c\u524d\u573a\u7d229\u4f9d\u7136\u7a33\u5b9a\uff0c\u7b49\u5f85\u5df4\u574e\u5e03\u9002\u5e94\u4e86\u4e2d\u8d85\uff0c\u52a0\u4e0a\u8d85\u7ea7\u65b0\u79c0\u97e6\u4e16\u8c6a\uff0c\u66ff\u8865\u6709\u4e8e\u5927\u5b9d\uff0c\u8fd8\u6709\u505c\u8d5b\u7684\u5f20\u7a00\u54f2\uff0c\u56fd\u5b89\u4eca\u5e74\u4e2d\u524d\u573a\u5f88\u5f3a\u5927\uff0c\u540e\u9632\u7ebf\u9010\u6e10\u78e8\u5408\u7684\u4e5f\u4e0d\u9519\uff0c\u4eca\u5e74\u6709\u5e0c\u671b\u4fdd\u4e09\u4e89\u4e00\u3002\u6700\u62c5\u5fc3\u7684\u5c31\u662f\u4f53\u80fd\uff0c\u9ad8\u4f4d\u903c\u62a2\u5bf9\u4f53\u529b\u8981\u6c42\u6781\u5927\uff0c\u522b\u50cf\u4e0a\u8d5b\u5b63\u4f3c\u7684\u540e\u534a\u6bb5\u6389\u961f\u5c31\u884c\u4e86\u3002\u867d\u8bf4\u8d62\u7684\u90fd\u7b97\u5f31\u961f\uff0c\u4f46\u8d77\u7801\u6bd4\u4e0a\u8d5b\u5b63\u8e22\u5f97\u597d\u591a\u4e86\uff0c\u4eca\u5e74\u771f\u6709\u5e0c\u671b\uff01\uff01\uff01", "up": 172}, {"content": "\u6bd4\u57c3\u62c9\u771f\u662f\u9700\u8981\u5439\u4e00\u6ce2\u4e86", "up": 169}, {"content": "\u600e\u4e48\u611f\u89c9\u56fd\u5b89\u5916\u63f4\u90a3\u4e48\u591a\u5462[\u6342\u8138] \u5965\u53e4\u65af\u6258 \u6bd4\u57c3\u62c9 \u91d1\u6cf0\u5ef6 \u6734\u6210 \u6c60\u5fe0\u56fd \u5df4\u574e\u5e03\u2026\u2026[\u6342\u8138]", "up": 89}], "1": [{"content": "\u6bd4\u57c3\u62c9\u8be0\u91ca\u4e86\u4ec0\u4e48\u662f\u8db3\u7403\u573a\u4e0a\u7684\u5927\u5e08\uff0c\u770b\u4f3c\u5355\u8584\u7684\u8eab\u4f53\uff0c\u5c0f\u6280\u672f\u592a\u5389\u5bb3\u4e86\u3002 \u4e0a\u4e00\u573a\u8db3\u534f\u676f\u7edd\u5e73\u4e0a\u6e2f\u5c31\u770b\u5230\u4e86\u3002", "up": 573}, {"content": "\u8fd9\u5957\u9635\u5bb9\u7a33\u4e86 \u4f46\u8fd8\u9700\u8981\u6253\u5f00\u8fb9\u8def \u62c9\u5f00\u7a7a\u95f4 \u4eca\u513f\u6bd4\u57c3\u62c910\u5206 \u4f46\u6211\u60f3\u7ed9\u5965\u53e412\u5206\uff01\u6ee1\u573a\u98de \u9632\u5b88\u8fdb\u653b\u65e0\u5904\u4e0d\u5728 \u961f\u5458\u5012\u5730\u7b2c\u4e00\u4e2a\u4e0a\u53bb \u97e6\u4e16\u8c6a\u88ab\u6362\u4e0b\u4e0d\u9ad8\u5174 \u4e0a\u53bb\u5b89\u6170 \u8fd9\u624d\u662f\u771f\u961f\u957f\uff01[\u9177]", "up": 71}, {"content": "\u6211\u662f\u9c81\u80fd\u7403\u8ff7\uff0c\u867d\u7136\u5bf9\u6628\u5929\u7684\u532a\u5937\u6240\u601d\u5224\u7f5a\u5f88\u4e0d\u6ee1\uff0c\u4f46\u4e00\u5b9a\u8981\u8bf4\u53e5\u516c\u9053\u8bdd\uff0c\u4eca\u5929\u4e0a\u534a\u573a\u6bd4\u57c3\u62c9\u7981\u533a\u88ab\u4fb5\u72af\uff0c\u8fd8\u6709\u6cb3\u5357\u540e\u536b\u660e\u663e\u7684\u5f20\u5f00\u624b\u81c2\u7684\u624b\u7403\uff08\u89c6\u9891\u88c1\u5224\u7adf\u7136\u6ca1\u6709\u53cd\u5e94\uff09\uff0c\u8d77\u7801\u8fd9\u4fe9\u5e94\u8be5\u7ed9\u4e00\u4e2a\u70b9\u7403\u624d\u5408\u7406\uff0c\u4f46\u662f\u5e76\u6ca1\u6709\uff0c\u8fd9\u5f88\u5947\u602a\uff0c\u6240\u4ee5\u8003\u8651\u5230\u82cf\u5b81\u6628\u5929\u90a3\u4e2a\u660e\u663e\u70b9\u7403\u6ca1\u6709\u5224\uff0c\u4ee5\u53ca\u6211\u9c81\u548c\u4e0a\u6e2f\u4e5f\u662f\u5e73\u5c40\u3002\u6211\u5c31\u77e5\u9053\u67d0\u961f\u6700\u83b7\u5229\u4e86\uff0c\u4eca\u5929\u56fd\u5b89\u51c6\u7edd\u6740\u7eaf\u5c5e\u610f\u5916\uff0c\u767b\u9876\u53ea\u662f\u6682\u65f6\uff0c\u6700\u7ec8\u51a0\u519b\u8fd8\u662f\u67d0\u961f\uff0c\u62ed\u76ee\u4ee5\u5f85\u5427\u5404\u4f4d\uff01", "up": 13}, {"content": "\u6211\u53ea\u60f3\u77e5\u9053\uff0c\u4e00\u76f4\u6293\u7740\u9a82\u8857\u4e0d\u653e\u7684\u4eba\uff0c\u662f\u4e0d\u662f\u627e\u4e0d\u5230\u522b\u7684\u9ed1\u70b9\u4e86\uff1f\u5168\u573a\u6bd4\u8d5b\u5bcc\u529b\u961f\u6709\u4e24\u6b21\u7591\u4f3c\u7981\u533a\u624b\u7403\u548c\u4e00\u6b21\u7591\u4f3c\u51b2\u649e\u95e8\u5c06\u5bfc\u81f4\u8fdb\u7403\uff0c3\u6b21\u7981\u533a\u5185\u7591\u4f3c\u72af\u89c4\u4e3b\u88c1\u5224\u90fd\u6ca1\u6709\u9009\u62e9\u770b\u89c6\u9891\u3002\u6bd4\u57c3\u62c9\u7981\u533a\u524d\u6cbf\u88ab\u660e\u663e\u72af\u89c4\u4e3b\u88c1\u5224\u89c6\u800c\u4e0d\u89c1\uff0c\u5df4\u574e\u5e03\u8fb9\u7ebf\u88ab\u94f2\u5012\u5e76\u4e14\u9632\u5b88\u7403\u5458\u6ca1\u6709\u78b0\u5230\u7403\u4e5f\u6ca1\u6709\u7ed9\u9ec4\u724c\u3002\u5168\u573a\u4f60\u4eec\u7684\u6ce8\u610f\u529b\u53ea\u96c6\u4e2d\u5728\u9a82\u58f0\uff0c\u6b8a\u4e0d\u77e5\u4e4c\u7d22\u6548\u529b\u9c81\u80fd\u671f\u95f4\u7528\u4e4c\u9f9f\u73a9\u5076\u505a\u65ad\u5934\u624b\u52bf\u5728\u5148\u3002\u4e5f\u522b\u8bf4\u6211\u4eec\u5bf9\u53f7\u5165\u5ea7\uff0c\u4f60\u4eec\u4e00\u53e3\u4e00\u4e2a\u9f9f \u5b89\u8bf4\u7684\u662f\u8c01\u4f60\u4eec\u5fc3\u91cc\u6e05\u695a\u3002\u5ba2\u573a\u8e22\u9c81\u80fd\u5168\u573a\u9a82\u97e6\u4e16\u8c6a\u4f60\u4eec\u9009\u62e9\u6027\u5931\u660e\uff0c\u53ea\u77e5\u9053\u5632\u8bbd\u56fd\u5b890\u6bd43\u843d\u8d25\u3002 \u5168\u56fd\u7403\u8ff7\u662f\u4e00\u5bb6\uff0c\u4f60\u4eec\u53ef\u4ee5\u9ed1\u56fd\u5b89\uff0c\u4f46\u662f\u5e0c\u671b\u4f60\u4eec\u628a\u6ce8\u610f\u529b\u96c6\u4e2d\u5728\u6bd4\u8d5b\u573a\u4e0a\u3002", "up": 12}, {"content": "\u9ed2\u5b50\u4eec\uff0c\u8f93\u4e86\u5c31\u662f\u8f93\u4e86\uff0c\u8bf4\u4efb\u4f55\u90fd\u662f\u65e0\u8c13\u7684\uff01 \u8981\u662f\u8fd9\u4e48\u8bf4\u770b\u770b\u6bd4\u57c3\u62c9\u4e0a\u534a\u573a\u7684\u90a3\u4e2a\u7981\u533a\u91cc\u53f3\u811a\u6263\u7403\uff0c\u6cb3\u5357\u540e\u536b\u6709\u6ca1\u6709\u8e22\u4eba\u72af\u89c4\uff0c\u88c1\u5224\u8fd8\u6b20\u56fd\u5b89\u4e00\u4e2a\u70b9\u7403\uff0c\u8bf4\u8fd9\u4e2a\u6709\u610f\u4e49\u4e48\uff1f\uff01", "up": 10}], "2": [{"content": "\u6bd4\u57c3\u62c9\u662f\u771f\u5f3a\uff0c\u6700\u540e\u8fd8\u80fd\u77ed\u8ddd\u79bb\u51b2\u523a\u8865\u5c04\uff0c\u771f\u4e0d\u9519\u3002\u6c60\u4e2d\u56fd\u548c\u50b2\u9aa8\u7684\u540e\u8170\u7ec4\u5408\u4e5f\u5f3a\u7684\u4e00\u5339", "up": 301}, {"content": "2:9\u7684\u6bd4\u8d5b\uff0c\u6123\u662f\u8ba9\u5df4\u574e\u5e03\u548c\u6bd4\u57c3\u62c9\u8e22\u62102:5[\u6ed1\u7a3d]", "up": 284}, {"content": "\u5ba2\u89c2\u8bc4\u7403\u3002\u56fd\u5b89\u8fd9\u8fb9\u65bd\u5bc6\u7279\u8fd9\u573a\u8981\u5e72\u4ec0\u4e48\u6211\u6ca1\u770b\u61c2\u3002\u5355\u4ece\u8fd9\u573a\u6765\u770b\uff0c\u5df4\u574e\u5e03\u662f\u4e0d\u662f\u6c34\u8d27\u4e0d\u597d\u8bf4\uff0c\u4f46\u663e\u7136\u4e0d\u662f\u9ed1\u53c8\u786c\u81ea\u5df1\u5355\u5e72\u7c7b\u578b\u7684\uff0c\u5c0f\u6280\u672f\u770b\u8d77\u6765\u4e5f\u4e0d\u5982\u7d22\u91cc\u4e9a\u8bfa\uff0c\u518d\u770b\u4e24\u573a\u518d\u8bf4\u5427\uff0c\u4f46\u8fd9\u4e24\u4e2a\u524d\u950b\u4e0d\u80fd\u540c\u65f6\u4e0a\u4e86\u3002\u664b\u9e4f\u7fd4\u662f\u7edd\u5bf9\u4e0d\u80fd\u7528\u4e86\uff0c\u4f5c\u4e2d\u536b\u592a\u6bdb\u7cd9\uff0c\u4f5c\u4e3a\u8fb9\u536b\u66f4\u4e0d\u884c\u3002\u65b0\u6765\u7684\u90a3\u4e2a\u5218\u6b22\u66ff\u8865\u7528\u7528\u8fd8\u884c\uff0c\u6253\u4e0d\u4e86\u9996\u53d1\u3002\u540e\u8170\u6734\u6210\u548c\u6c60\u5fe0\u56fd\u81f3\u5c11\u4e0a\u4e00\u4e2a\uff0c\u628a\u50b2\u9aa8\u9876\u5230\u524d\u8170\u4e0a\u3002\u95e8\u5c06\u4faf\u68ee\u53cd\u5e94\u548c\u5f00\u5927\u811a\u80fd\u529b\u582a\u5fe7\uff0c\u4e0d\u77e5\u9053\u4e3a\u5565\u4e0d\u7528\u6c60\u6587\u4e00\u3002\u674e\u78ca\u8fd8\u662f\u653e\u5728\u5de6\u540e\u536b\u4e0a\u5427\uff0c\u51fa\u7403\u80fd\u529b\u548c\u5927\u5c40\u89c2\u8e22\u4e0d\u4e86\u540e\u8170\u3002U23\u9996\u53d1\u7528\u5df4\u987f\u6bd4\u8f83\u597d\uff0c\u97e6\u4e16\u8c6a\u662f\u4e00\u4e2a\u96f7\uff0c\u9996\u53d1\u98ce\u9669\u592a\u5927\uff0c\u53ef\u4ee5\u7528\u505a\u66ff\u8865\u5947\u5175\u3002\u8fd9\u6837\u4e0b\u6765\uff0c\u9635\u5bb9\u53ef\u4ee5\u662f\u8fd9\u6837:\u6c60\u6587\u4e00\uff1b\u674e\u78ca\uff0c\u4e8e\u6d0b\uff0c\u96f7\u817e\u9f99\uff0c\u59dc\u6d9b\uff1b\u6c60\u5fe0\u56fd\uff0c\u6734\u6210\uff08\u5415\u9e4f\uff09\uff1b\u6bd4\u57c3\u62c9\uff0c\u5965\u53e4\u65af\u6258\uff0c\u5df4\u987f\uff08\u97e6\u4e16\u8c6a\uff09\uff1b\u5df4\u574e\u5e03\uff08\u7d22\u91cc\u4e9a\u8bfa\uff09\u3002\u9c81\u80fd\u8fd9\u8fb9\u4eca\u5929\u8e22\u5f97\u4e0d\u9519\uff0cU23\u59da\u5747\u665f\u4e0d\u9519\uff0c\u811a\u6cd5\u548c\u7ec4\u7ec7\u80fd\u529b\u4ee5\u540e\u53ef\u4ee5\u63a5\u84bf\u4fca\u95f5\u7684\u73ed\u4e86\u3002\u9c81\u80fd\u7684\u4eba\u624d\u50a8\u5907\u77ed\u671f\u5185\u4e5f\u4e0d\u7528\u5728\u5927\u9762\u79ef\u4e70\u4eba\u4e86\uff0c\u627e\u4e2a\u597d\u6559\u7ec3\u591a\u591a\u6253\u78e8\u5427\uff0c\u672a\u6765\u53ef\u671f\u3002", "up": 20}, {"content": "\u201c\u6052\u5927\u5c31\u662f\u9760\u5916\u63f4\uff0c\u4e0d\u50cf\u67d0\u5b89\u6bd4\u57c3\u62c9\u3001\u5df4\u574e\u5e03\u3001\u5965\u53e4\u65af\u6258\u5168\u9762\u5f00\u82b1\u201d", "up": 18}, {"content": "\u97e6\u4e16\u8c6a\u66b4\u529b\u5c04\u95e8\u592a\u5201\u94bb\u4e86\uff01\u5df4\u574e\u5e03\u4e5f\u8fdb\u7403\u4e86\uff01\u6bd4\u57c3\u62c9\u7edd\u5bf9\u8fdb\u653b\u5927\u8111\uff01\u9c81\u80fd\u770b\u5f97\u745f\u745f\u53d1\u6296\u5427\uff01\u4e0b\u4e2a\u5faa\u73af\u5317\u4eac\u89c1\uff01", "up": 18}]};
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
