var data = {"person_name": "\u6734\u6210", "nicknames": "\u6734\u6210", "aspects": {"\u8d8a\u4f4d": 0.27053199229276603, "\u7403\u5458": 0.5686640873184523, "\u5916\u63f4": 0.6765730487783703, "\u8fdb\u653b": 0.3970277076150168, "\u4f20\u7403": 0.5969285436281407, "\u56fd\u5bb6\u961f": 0.5235158561662161, "\u7403\u8ff7": 0.6225992897184344, "\u8e22\u7403": 0.7901238657366989, "\u8fdb\u7403": 0.542595221920376, "\u66ff\u8865": 0.6536200432515339}, "overall_heat": 91.0, "overall_polar": 0.232, "name": "76", "nationality": "\u4e2d\u56fd", "position": "\u4e2d\u573a", "goal": "3", "assist": "2", "team_name": "\u5317\u4eac\u4e2d\u8d6b\u56fd\u5b89", "name_en": "Piao Cheng", "age": "29", "height": "176", "weight": "69"};
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
var topic_keywords = {"0": [{"name": "\u6734\u6210", "value": 0.03280096170358922}, {"name": "\u56fd\u5b89", "value": 0.025931650352052207}, {"name": "\u4e0a\u6e2f", "value": 0.025931650352052207}, {"name": "\uff01", "value": 0.017345011162630947}, {"name": "\u8d8a\u4f4d", "value": 0.015627683324746695}, {"name": "\u4e2d\u8d85", "value": 0.012193027648978191}, {"name": "\u4eca\u5e74", "value": 0.012193027648978191}, {"name": "\u4e2d\u573a", "value": 0.010475699811093938}, {"name": "\u7403", "value": 0.010475699811093938}, {"name": "\u5e0c\u671b", "value": 0.010475699811093938}, {"name": "\u6bd4\u8d5b", "value": 0.008758371973209686}, {"name": "\u8e22", "value": 0.008758371973209686}, {"name": "\u5b9e\u529b", "value": 0.008758371973209686}, {"name": "\u66ff\u8865", "value": 0.007041044135325434}, {"name": "\u51fa\u7403", "value": 0.007041044135325434}, {"name": "\u4e2d\u56fd", "value": 0.007041044135325434}, {"name": "\uff1b", "value": 0.007041044135325434}, {"name": "\u7a00\u54f2", "value": 0.005323716297441182}, {"name": "\u8fdb\u7403", "value": 0.005323716297441182}, {"name": "\u7a81\u7834", "value": 0.005323716297441182}, {"name": "\u8d62", "value": 0.005323716297441182}, {"name": "\u786e\u5b9e", "value": 0.005323716297441182}, {"name": "\u8d5b\u5b63", "value": 0.005323716297441182}, {"name": "\u6052\u5927", "value": 0.005323716297441182}, {"name": "\u7403\u8ff7", "value": 0.005323716297441182}, {"name": "\u51a0\u519b", "value": 0.005323716297441182}, {"name": "\u88c1\u5224", "value": 0.005323716297441182}, {"name": "\u505a", "value": 0.005323716297441182}, {"name": "\u8868\u73b0", "value": 0.005323716297441182}, {"name": "\u6bd4\u57c3\u62c9", "value": 0.005323716297441182}], "1": [{"name": "\u6734\u6210", "value": 0.06624814141747894}, {"name": "\u6c60\u5fe0\u56fd", "value": 0.03320667437634232}, {"name": "\u56fd\u5b89", "value": 0.029902527672228653}, {"name": "\uff01", "value": 0.024946307616058153}, {"name": "\u7403\u5458", "value": 0.01999008755988766}, {"name": "\u56fd\u5bb6\u961f", "value": 0.015033867503717166}, {"name": "\u5ef6\u8fb9", "value": 0.013381794151660334}, {"name": "\u5916\u63f4", "value": 0.013381794151660334}, {"name": "\u91d1\u656c\u9053", "value": 0.011729720799603502}, {"name": "\u597d", "value": 0.011729720799603502}, {"name": "\u56fd\u5185", "value": 0.011729720799603502}, {"name": "\u4e2d\u573a", "value": 0.010077647447546672}, {"name": "\u4eba", "value": 0.010077647447546672}, {"name": "\u4e00\u4e2a", "value": 0.010077647447546672}, {"name": "\u73b0\u5728", "value": 0.010077647447546672}, {"name": "\u4e2d\u56fd", "value": 0.00842557409548984}, {"name": "\u8e22", "value": 0.00842557409548984}, {"name": "\u8e22\u7403", "value": 0.00842557409548984}, {"name": "\u671d\u9c9c\u65cf", "value": 0.00842557409548984}, {"name": "\u4fe9", "value": 0.006773500743433009}, {"name": "\u4ee5\u540e", "value": 0.006773500743433009}, {"name": "\u91d1\u6cf0", "value": 0.006773500743433009}, {"name": "\u6c60\u6587\u4e00", "value": 0.005121427391376178}, {"name": "\u52a0\u6cb9", "value": 0.005121427391376178}, {"name": "\u7b2c\u4e00\u8f6e", "value": 0.005121427391376178}, {"name": "\u4eca\u5e74", "value": 0.005121427391376178}, {"name": "\u598d", "value": 0.005121427391376178}, {"name": "\u8868\u73b0", "value": 0.005121427391376178}, {"name": "\u5f20\u7a00\u54f2", "value": 0.005121427391376178}, {"name": "\u5c11\u6570\u6c11\u65cf", "value": 0.005121427391376178}], "2": [{"name": "\u6734\u6210", "value": 0.06476007149731886}, {"name": "\u8d8a\u4f4d", "value": 0.03588615426921491}, {"name": "\u7403", "value": 0.02626151519318026}, {"name": "\u78b0\u5230", "value": 0.024886566753746737}, {"name": "\u6bd4\u57c3\u62c9", "value": 0.012512030798845044}, {"name": "\u827e\u62c9", "value": 0.011137082359411523}, {"name": "\u4f20\u7403", "value": 0.009762133919978001}, {"name": "\uff1f", "value": 0.009762133919978001}, {"name": "\u88c1\u5224", "value": 0.00838718548054448}, {"name": "\u56fd\u5b89", "value": 0.00838718548054448}, {"name": "\u5df4\u574e\u5e03", "value": 0.00838718548054448}, {"name": "\u97e6\u4e16\u8c6a", "value": 0.0070122370411109585}, {"name": "\uff01", "value": 0.0070122370411109585}, {"name": "\u6c60\u5fe0\u56fd", "value": 0.0070122370411109585}, {"name": "\u9996\u53d1", "value": 0.005637288601677437}, {"name": "\u8fd9\u7403", "value": 0.005637288601677437}, {"name": "\u4e00\u4e2a", "value": 0.005637288601677437}, {"name": "\u8fdb\u653b", "value": 0.005637288601677437}, {"name": "\u8fdb\u7403", "value": 0.005637288601677437}, {"name": "\uff1b", "value": 0.005637288601677437}, {"name": "\u5965\u53e4\u65af\u6258", "value": 0.005637288601677437}, {"name": "\u660e\u663e", "value": 0.005637288601677437}, {"name": "\u53c2\u4e0e", "value": 0.005637288601677437}, {"name": "\u6709\u6ca1\u6709", "value": 0.005637288601677437}, {"name": "\u674e\u78ca", "value": 0.005637288601677437}, {"name": "\u5173\u7cfb", "value": 0.005637288601677437}, {"name": "\u50b2\u9aa8", "value": 0.005637288601677437}, {"name": "\u6bd4\u8f83", "value": 0.005637288601677437}, {"name": "\u5df4\u987f", "value": 0.005637288601677437}, {"name": "\u4e00\u4e0b", "value": 0.004262340162243916}]};
var topic_summary = {"0": [{"content": "\u56fd\u5b89\u4eca\u5e74\u8e22\u5f97\u771f\u4e0d\u9519\uff0c\u98ce\u683c\u8ddf\u5df4\u8428\u66fc\u57ce\u90fd\u6bd4\u8f83\u50cf\uff0c\u7b2c\u4e00\u573a\u8f93\u7ed9\u9c81\u80fd\u7eaf\u5c5e\u8d56\u65bd\u5bc6\u7279\u778e\u6392\u9635\u5bb9\uff0c\u540e\u51e0\u573a\u4e2d\u573a\u4e0a\u4e86\u6c60\u5fe0\u56fd\uff0c\u6734\u6210\u548c\u6bd4\u57c3\u62c9\u4e4b\u540e\uff0c\u52a0\u4e0a\u5965\u53e4\u65af\u6258\uff0c\u4e2d\u573a\u5b9e\u529b\u5728\u4e2d\u8d85\u7edd\u5bf9\u6570\u4e00\u6570\u4e8c\uff0c\u524d\u573a\u7d229\u4f9d\u7136\u7a33\u5b9a\uff0c\u7b49\u5f85\u5df4\u574e\u5e03\u9002\u5e94\u4e86\u4e2d\u8d85\uff0c\u52a0\u4e0a\u8d85\u7ea7\u65b0\u79c0\u97e6\u4e16\u8c6a\uff0c\u66ff\u8865\u6709\u4e8e\u5927\u5b9d\uff0c\u8fd8\u6709\u505c\u8d5b\u7684\u5f20\u7a00\u54f2\uff0c\u56fd\u5b89\u4eca\u5e74\u4e2d\u524d\u573a\u5f88\u5f3a\u5927\uff0c\u540e\u9632\u7ebf\u9010\u6e10\u78e8\u5408\u7684\u4e5f\u4e0d\u9519\uff0c\u4eca\u5e74\u6709\u5e0c\u671b\u4fdd\u4e09\u4e89\u4e00\u3002\u6700\u62c5\u5fc3\u7684\u5c31\u662f\u4f53\u80fd\uff0c\u9ad8\u4f4d\u903c\u62a2\u5bf9\u4f53\u529b\u8981\u6c42\u6781\u5927\uff0c\u522b\u50cf\u4e0a\u8d5b\u5b63\u4f3c\u7684\u540e\u534a\u6bb5\u6389\u961f\u5c31\u884c\u4e86\u3002\u867d\u8bf4\u8d62\u7684\u90fd\u7b97\u5f31\u961f\uff0c\u4f46\u8d77\u7801\u6bd4\u4e0a\u8d5b\u5b63\u8e22\u5f97\u597d\u591a\u4e86\uff0c\u4eca\u5e74\u771f\u6709\u5e0c\u671b\uff01\uff01\uff01", "up": 172}, {"content": "\u4e0d\u80fd\u56e0\u4e3a\u7403\u8ff7\u591a\uff0c\u5c31\u80fd\u6307\u9e7f\u4e3a\u9a6c\uff0c\u98a0\u5012\u662f\u975e\uff0c\u628a\u9ed1\u7684\u8bf4\u6210\u767d\u7684\uff0c\u8d8a\u4f4d\u5c31\u662f\u8d8a\u4f4d\uff0c\u5f97\u76ca\u5c31\u662f\u5f97\u76ca!\u4e0a\u6e2f\u4e0d\u4e8f\u662f\u4e2d\u8d85\u5931\u7403\u6700\u5c11\u7684\uff0c\u9664\u4e86\u6734\u6210\u8d8a\u4f4d\u5f97\u76ca\u4ee5\u5916\uff0c\u5728\u56fd\u5b89\u4e3b\u573a\u628a\u56fd\u5b89\u9632\u7684\u6ca1\u813e\u6c14\uff01", "up": 163}, {"content": "1\u3001\u5e94\u8be5\u662f\u4e00\u573a\u5e73\u5c40\uff0c\u80e1\u5c14\u514b\u6ca1\u4f24\u4e0a\u6e2f\u81f3\u5c11\u4e0d\u8d252\u3001\u786e\u5b9e\u5b9e\u529b\u4e0d\u5982\u4e0a\u6e2f\uff0c\u76ee\u524d\u8e22\u8fc7\u7684\u961f\u53ea\u6709\u4e0a\u6e2f\u903c\u65bd\u5bc6\u7279\u6446\u4e86\u5927\u5df4\uff08\u56fd\u5b89\u5f88\u5c11\u6446\uff0c\u5373\u4fbf\u540e\u536b\u7ebf\u662f\u7eb8\u7cca\u7684\uff093\u3001\u6734\u6210\u548c\u4faf\u68ee\u8fd9\u4fe9\u8d27\u4eca\u5929\u6ca1\u5f97\u9ed1\uff08\u5e73\u65f6\u7740\u5b9e\u5f88\u4e00\u822c\uff094\u3001\u5e0c\u671b\u7eff\u5de8\u4eba\u4e9a\u51a0\u53ef\u4ee5\u51fa\u6218\uff0c\u4e24\u961f\u672c\u8d5b\u5b63\u90fd\u80fd\u591f\u6709\u6240\u6536\u83b7\u3002\u56fd\u5b89\u7403\u8ff7\u7559\u3002", "up": 21}, {"content": "\u606d\u559c\u4e0a\u6e2f\u8d62\u56fd\u5b89\uff0c\u4e0d\u5bb9\u6613\uff0c\u4e0b\u534a\u573a\u6293\u4f4f\u4e86\u4e00\u6b21\u53cd\u51fb\u673a\u4f1a\u3002\u56fd\u5b89\u522b\u7ea0\u7ed3\u90a3\u4e2a\u4ec0\u4e48\u8d8a\u4f4d\u7403\u4e86\uff01\u4e0d\u7ba1\u6734\u6210\u78b0\u6ca1\u78b0\u5230\u5728\u90a3\u4e2a\u7ebf\u8def\u4e0a\u786e\u5b9e\u76f8\u5f53\u4e8e\u4f20\u7ed9\u6bd4\u57c3\u62c9\u8d8a\u4f4d\u4e86\u3002\u56fd\u5b89\u8fd8\u662f\u8981\u602a\u81ea\u5df1\u8fdb\u653b\u4e71\uff0c\u4e0d\u7136\u65e9\u8fdb\u7403\u4e86\u3002\u4e0a\u6e2f\u8fd8\u597d\u73b0\u5728\u4f9d\u7136\u9886\u5148\uff0c\u6052\u5927\u867d\u7136\u8d62\u4f46\u662f\u5dee\u8ddd\u4ecd\u67094\u5206\uff0c\u5e0c\u671b\u4e0a\u6e2f\u5b88\u4f4f\u4f18\u52bf\uff0c\u6700\u540e\u5929\u738b\u5c71\u4e4b\u6218\u4e00\u51b3\u96cc\u96c4\uff01\u4e0a\u6e2f\u5ba2\u573a\u8d62\u4e0b\u6052\u5927\u5f7b\u5e95\u593a\u51a0\u5427\uff01", "up": 14}, {"content": "\u6211\u662f\u4e0a\u6e2f\u7403\u8ff7\uff0c\u770b\u5b8c\u6574\u573a\u6bd4\u8d5b\uff0c\u6709\u70b9\u611f\u60f3\uff1a1\u3001\u4e0a\u6e2f\u8fd9\u573a\u80fd\u62ff\u4e0b\u6765\uff0c\u7edd\u5927\u90e8\u5206\u529f\u52b3\u662f\u4e2d\u540e\u536b\u7684\uff0c\u8fb9\u540e\u536b\u4e5f\u8fd8\u884c\uff0c\u4f46\u6709\u70b9\u5931\u8bef\uff1b2\u3001\u6b66\u78ca\u548c\u6734\u6210\u90fd\u6ca1\u5e26\u5c04\u95e8\u9774\uff1b3\u3001\u56fd\u5b89\u7684\u4e2d\u573a\u63a7\u5236\u529b\u662f\u771f\u7684\u5f3a\uff0c\u53ea\u8981\u4e0a\u6e2f\u53cd\u51fb\u7a81\u7834\u4e0d\u4e86\u4e2d\u573a\u5c31\u6beb\u65e0\u5a01\u80c1\uff0c\u76f8\u53cd\u53ea\u8981\u7a81\u7834\u4e2d\u573a\u5c31\u5f88\u6709\u5a01\u80c1\uff1b4\u3001\u56fd\u5b89\u95e8\u5c06\u8868\u73b0\u5f88\u597d\uff0c\u4f46\u90a3\u4e2a\u4e22\u7403\u4e0d\u592a\u5e94\u8be5\uff1b5\u3001\u88c1\u5224\u5224\u7f5a\u6709\u70b9\u8ff7\uff0c\u603b\u4f53\u800c\u8a00\u6bd4\u8f83\u504f\u4e8e\u4e0a\u6e2f\u3002", "up": 11}], "1": [{"content": "\u6734\u6210 \u6c60\u5fe0\u56fd\u5ef6\u8fb9\u7403\u5458\u811a\u4e0b\u6280\u672f\u597d\uff0c\u8e22\u7403\u5e72\u51c0\uff0c\u6bd4\u5404\u79cd\u7c97\u91ce\u72af\u89c4\uff0c\u5404\u79cd\u754c\u5916\u7403\u66f4\u503c\u5f97\u56fd\u8db3\u53bb\u5b66\u4e60", "up": 200}, {"content": "\u770b\u6734\u6210\u5728\u56fd\u5bb6\u961f\u600e\u4e48\u89e6\u7403\u5427\uff0c\u5728\u56fd\u5b89\u6734\u6210\u5173\u952e\u4f20\u9012\u771f\u7684\u662f\u5929\u8d4b\u554a", "up": 67}, {"content": "\u73b0\u5728\u7684\u95ee\u9898\u662f\uff0c\u5f2010\u56de\u6765\u4ee5\u540e\uff0c\u6734\u6210\u548c\u6c60\u5fe0\u56fd\u8c01\u8e22\u4e3b\u529b", "up": 36}, {"content": "\u5ef6\u8fb9\u7684\u6734\u6210\uff01\u6c60\u4e2d\u56fd\uff01\u4e2d\u573a\u8c03\u5ea6\u975e\u5e38\u5230\u4f4d\uff01\u56fd\u5185\u5c11\u6709\u7684\u597d\u7403\u5458", "up": 35}, {"content": "\u56fd\u5b89\u4eca\u5e74\u8e22\u7684\u884c\u4e91\u6d41\u6c34\uff0c\u8fdb\u653b\u77ed\u582a\u6bd4\u6b27\u6d32\u8c6a\u5f3a\uff0c\u8ba9\u4eba\u8d4f\u5fc3\u60a6\u76ee\u3002\u4e2d\u573a\u5e7f\u544a\u90fd\u4e0d\u60f3\u79bb\u5f00\uff0c\u8fd9\u79cd\u671f\u5f85\u597d\u4e45\u6ca1\u6709\u4e86\uff5e\u53e6\u5916\u6211\u5938\u4e0b\u5ef6\u8fb9\u4e09\u864e\uff0c\u6c60\u5fe0\u56fd\uff0c\u6734\u6210\uff0c\u91d1\u6cf0\u598d\u3002\u4eca\u5e74\u5728\u56fd\u5b89\u8d77\u5230\u4e86\u975e\u5e38\u5927\u4f5c\u7528\uff0c\u56fd\u5b89\u53ef\u4ee5\u6709\u5e95\u6c14\u7684\u558a\u4e00\u6b21\u4e89\u7b2c\u4e00\u4e86\uff01\uff01\uff01", "up": 27}], "2": [{"content": "\u6734\u6210\u7ee7\u7eed\u5ef6\u7eed\u7740\u8fdb\u7403\u7edd\u4e0d\u7528\u811a\u7684\u4f20\u7edf[\u6342\u8138]", "up": 160}, {"content": "\u600e\u4e48\u611f\u89c9\u56fd\u5b89\u5916\u63f4\u90a3\u4e48\u591a\u5462[\u6342\u8138] \u5965\u53e4\u65af\u6258 \u6bd4\u57c3\u62c9 \u91d1\u6cf0\u5ef6 \u6734\u6210 \u6c60\u5fe0\u56fd \u5df4\u574e\u5e03\u2026\u2026[\u6342\u8138]", "up": 89}, {"content": "\u5ba2\u89c2\u8bc4\u7403\u3002\u56fd\u5b89\u8fd9\u8fb9\u65bd\u5bc6\u7279\u8fd9\u573a\u8981\u5e72\u4ec0\u4e48\u6211\u6ca1\u770b\u61c2\u3002\u5355\u4ece\u8fd9\u573a\u6765\u770b\uff0c\u5df4\u574e\u5e03\u662f\u4e0d\u662f\u6c34\u8d27\u4e0d\u597d\u8bf4\uff0c\u4f46\u663e\u7136\u4e0d\u662f\u9ed1\u53c8\u786c\u81ea\u5df1\u5355\u5e72\u7c7b\u578b\u7684\uff0c\u5c0f\u6280\u672f\u770b\u8d77\u6765\u4e5f\u4e0d\u5982\u7d22\u91cc\u4e9a\u8bfa\uff0c\u518d\u770b\u4e24\u573a\u518d\u8bf4\u5427\uff0c\u4f46\u8fd9\u4e24\u4e2a\u524d\u950b\u4e0d\u80fd\u540c\u65f6\u4e0a\u4e86\u3002\u664b\u9e4f\u7fd4\u662f\u7edd\u5bf9\u4e0d\u80fd\u7528\u4e86\uff0c\u4f5c\u4e2d\u536b\u592a\u6bdb\u7cd9\uff0c\u4f5c\u4e3a\u8fb9\u536b\u66f4\u4e0d\u884c\u3002\u65b0\u6765\u7684\u90a3\u4e2a\u5218\u6b22\u66ff\u8865\u7528\u7528\u8fd8\u884c\uff0c\u6253\u4e0d\u4e86\u9996\u53d1\u3002\u540e\u8170\u6734\u6210\u548c\u6c60\u5fe0\u56fd\u81f3\u5c11\u4e0a\u4e00\u4e2a\uff0c\u628a\u50b2\u9aa8\u9876\u5230\u524d\u8170\u4e0a\u3002\u95e8\u5c06\u4faf\u68ee\u53cd\u5e94\u548c\u5f00\u5927\u811a\u80fd\u529b\u582a\u5fe7\uff0c\u4e0d\u77e5\u9053\u4e3a\u5565\u4e0d\u7528\u6c60\u6587\u4e00\u3002\u674e\u78ca\u8fd8\u662f\u653e\u5728\u5de6\u540e\u536b\u4e0a\u5427\uff0c\u51fa\u7403\u80fd\u529b\u548c\u5927\u5c40\u89c2\u8e22\u4e0d\u4e86\u540e\u8170\u3002U23\u9996\u53d1\u7528\u5df4\u987f\u6bd4\u8f83\u597d\uff0c\u97e6\u4e16\u8c6a\u662f\u4e00\u4e2a\u96f7\uff0c\u9996\u53d1\u98ce\u9669\u592a\u5927\uff0c\u53ef\u4ee5\u7528\u505a\u66ff\u8865\u5947\u5175\u3002\u8fd9\u6837\u4e0b\u6765\uff0c\u9635\u5bb9\u53ef\u4ee5\u662f\u8fd9\u6837:\u6c60\u6587\u4e00\uff1b\u674e\u78ca\uff0c\u4e8e\u6d0b\uff0c\u96f7\u817e\u9f99\uff0c\u59dc\u6d9b\uff1b\u6c60\u5fe0\u56fd\uff0c\u6734\u6210\uff08\u5415\u9e4f\uff09\uff1b\u6bd4\u57c3\u62c9\uff0c\u5965\u53e4\u65af\u6258\uff0c\u5df4\u987f\uff08\u97e6\u4e16\u8c6a\uff09\uff1b\u5df4\u574e\u5e03\uff08\u7d22\u91cc\u4e9a\u8bfa\uff09\u3002\u9c81\u80fd\u8fd9\u8fb9\u4eca\u5929\u8e22\u5f97\u4e0d\u9519\uff0cU23\u59da\u5747\u665f\u4e0d\u9519\uff0c\u811a\u6cd5\u548c\u7ec4\u7ec7\u80fd\u529b\u4ee5\u540e\u53ef\u4ee5\u63a5\u84bf\u4fca\u95f5\u7684\u73ed\u4e86\u3002\u9c81\u80fd\u7684\u4eba\u624d\u50a8\u5907\u77ed\u671f\u5185\u4e5f\u4e0d\u7528\u5728\u5927\u9762\u79ef\u4e70\u4eba\u4e86\uff0c\u627e\u4e2a\u597d\u6559\u7ec3\u591a\u591a\u6253\u78e8\u5427\uff0c\u672a\u6765\u53ef\u671f\u3002", "up": 20}, {"content": "\u90a3\u7403\u6162\u955c\u90fd\u770b\u4e0d\u6e05\u6734\u6210\u6709\u6ca1\u6709\u89e6\u5230\u7403\uff0c\u600e\u4e48\u80fd\u5224\u8d8a\u4f4d\u5462\uff1f\u9ed1\u5f97\u4e5f\u592a\u660e\u76ee\u5f20\u80c6\u4e86\u5427\uff01", "up": 13}, {"content": "\u6734\u6210\u6ca1\u78b0\u5230\u7403\uff0c\u7403\u8fd0\u884c\u8def\u7ebf\u6ca1\u53d8\uff0c\u8fd9\u4e2a\u7403\u8bef\u5224", "up": 11}]};
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
