var data = {"person_name": "\u51af\u6f47\u9706", "nicknames": "\u51af\u6f47\u9706", "aspects": {"\u7403\u5458": 0.36515330568245036, "\u6bd4\u8d5b": 0.527078716116234, "\u56fd\u5bb6\u961f": 0.31964208127193805, "\u8fdb\u7403": 0.40912307342415566, "\u9632\u5b88": 0.628365740933131, "\u4ff1\u4e50\u90e8": 0.5717842987081504, "\u7403\u8ff7": 0.4523734889489529, "\u5916\u63f4": 0.4396816286168852, "\u8054\u8d5b": 0.7012427829928716}, "overall_heat": 175.0, "overall_polar": -0.041, "name": "18", "nationality": "\u4e2d\u56fd", "position": "\u540e\u536b", "goal": "0", "assist": "3", "team_name": "\u5e7f\u5dde\u6052\u5927\u6dd8\u5b9d", "name_en": "Feng Xiaoting", "age": "33", "height": "187", "weight": "78"};
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
var topic_keywords = {"0": [{"name": "\u51af\u6f47\u9706", "value": 0.07220907964402387}, {"name": "\uff01", "value": 0.0113777176974203}, {"name": "\u6b66\u78ca", "value": 0.010251210994705417}, {"name": "\u8fdb\u7403", "value": 0.010251210994705417}, {"name": "\u56fd\u5bb6\u961f", "value": 0.009124704291990537}, {"name": "\u8e22", "value": 0.009124704291990537}, {"name": "\u7403\u5458", "value": 0.007998197589275655}, {"name": "\u6052\u5927", "value": 0.006871690886560774}, {"name": "\u597d", "value": 0.006871690886560774}, {"name": "\u90dc\u6797", "value": 0.006871690886560774}, {"name": "\u90d1\u667a", "value": 0.006871690886560774}, {"name": "\u5bf9\u65b9", "value": 0.006871690886560774}, {"name": "\u540e\u536b", "value": 0.006871690886560774}, {"name": "\u8868\u73b0", "value": 0.006871690886560774}, {"name": "\u4e4c\u9f99", "value": 0.005745184183845893}, {"name": "\u80fd\u529b", "value": 0.005745184183845893}, {"name": "\u54ed", "value": 0.005745184183845893}, {"name": "\u72b6\u6001", "value": 0.005745184183845893}, {"name": "?", "value": 0.005745184183845893}, {"name": "\u4ee3\u8868", "value": 0.005745184183845893}, {"name": "\uff1f", "value": 0.005745184183845893}, {"name": "\u7b11", "value": 0.005745184183845893}, {"name": "\u8dd1", "value": 0.0046186774811310125}, {"name": "\u6700\u540e", "value": 0.0046186774811310125}, {"name": "\u6563\u6b65", "value": 0.0046186774811310125}, {"name": "\u674e\u5b66\u9e4f", "value": 0.0046186774811310125}, {"name": "\u8d5b\u5b63", "value": 0.0046186774811310125}, {"name": "\u5c04\u95e8", "value": 0.0046186774811310125}, {"name": "\u90d1\u9f99", "value": 0.0046186774811310125}, {"name": "\u4eba", "value": 0.0046186774811310125}], "1": [{"name": "\u51af\u6f47\u9706", "value": 0.045904028312688666}, {"name": "\u5c81", "value": 0.023004059539918808}, {"name": "\u6052\u5927", "value": 0.023004059539918808}, {"name": "\u90dc\u6797", "value": 0.018840428853960655}, {"name": "\u5f20\u7433\u8283", "value": 0.016758613510981575}, {"name": "\u90d1\u667a", "value": 0.016758613510981575}, {"name": "\u4e2d\u8d85", "value": 0.015717705839492037}, {"name": "\u674e\u5b66\u9e4f", "value": 0.012594982825023419}, {"name": "\u9ec4\u535a\u6587", "value": 0.01155407515353388}, {"name": "\u7403\u5458", "value": 0.010513167482044342}, {"name": "\u4e8e\u6c49\u8d85", "value": 0.010513167482044342}, {"name": "\u7403\u961f", "value": 0.010513167482044342}, {"name": "\uff01", "value": 0.009472259810554802}, {"name": "\u771f\u7684", "value": 0.009472259810554802}, {"name": "\u73b0\u5728", "value": 0.008431352139065264}, {"name": "\u6253", "value": 0.008431352139065264}, {"name": "\u9700\u8981", "value": 0.006349536796086187}, {"name": "\u51a0\u519b", "value": 0.006349536796086187}, {"name": "\u5927\u8fde", "value": 0.006349536796086187}, {"name": "\u91d1\u82f1\u6743", "value": 0.006349536796086187}, {"name": "\u8054\u8d5b", "value": 0.005308629124596648}, {"name": "\u56fd\u5bb6\u961f", "value": 0.005308629124596648}, {"name": "\u66fe\u8bda", "value": 0.005308629124596648}, {"name": "30", "value": 0.005308629124596648}, {"name": "\u73ed\u5e95", "value": 0.005308629124596648}, {"name": "\u524d", "value": 0.004267721453107109}, {"name": "\u4f4d\u7f6e", "value": 0.004267721453107109}, {"name": "\u4eca\u5e74", "value": 0.004267721453107109}, {"name": "\u4e3b\u529b", "value": 0.004267721453107109}, {"name": "\u7384\u4e4e", "value": 0.004267721453107109}], "2": [{"name": "\u51af\u6f47\u9706", "value": 0.042960175603637504}, {"name": "\u8868\u73b0", "value": 0.01473816243336469}, {"name": "\u6bd4\u8d5b", "value": 0.01369290268631755}, {"name": "\u6052\u5927", "value": 0.01369290268631755}, {"name": "\u62fc", "value": 0.010557123445176125}, {"name": "\u4e00\u4e2a", "value": 0.008466603951081843}, {"name": "\u9632\u5b88", "value": 0.008466603951081843}, {"name": "\u97e9\u56fd", "value": 0.007421344204034702}, {"name": "\u8e22", "value": 0.007421344204034702}, {"name": "\u8fd9\u573a", "value": 0.00637608445698756}, {"name": "\u4e2d\u573a", "value": 0.00637608445698756}, {"name": "\u9884\u8d5b", "value": 0.00637608445698756}, {"name": "\u4e00\u573a", "value": 0.00637608445698756}, {"name": "\u4e2d", "value": 0.00637608445698756}, {"name": "\u7403", "value": 0.00637608445698756}, {"name": "\u540e\u573a", "value": 0.00637608445698756}, {"name": "\u6253", "value": 0.00637608445698756}, {"name": "\u77e5\u9053", "value": 0.0053308247099404195}, {"name": "\uff1f", "value": 0.0053308247099404195}, {"name": "\u770b\u5230", "value": 0.0053308247099404195}, {"name": "\u5e94\u8be5", "value": 0.0053308247099404195}, {"name": "\u8fdb\u7403", "value": 0.0053308247099404195}, {"name": "\u9ec4\u535a\u6587", "value": 0.0053308247099404195}, {"name": "\u5954\u88ad", "value": 0.0053308247099404195}, {"name": "\u5bf9\u65b9", "value": 0.0042855649628932785}, {"name": "\u5a01\u5c14\u58eb", "value": 0.0042855649628932785}, {"name": "\u5982\u5bf9", "value": 0.0042855649628932785}, {"name": "\u4e3b", "value": 0.0042855649628932785}, {"name": "\u5bf9\u9635", "value": 0.0042855649628932785}, {"name": "\u90dc\u6797", "value": 0.0042855649628932785}], "3": [{"name": "\u51af\u6f47\u9706", "value": 0.029452557722117974}, {"name": "\uff1f", "value": 0.02210981479970629}, {"name": "\uff01", "value": 0.02210981479970629}, {"name": "\u6052\u5927", "value": 0.018030513176144243}, {"name": "\u7403\u5458", "value": 0.015582932202007018}, {"name": "\u90d1\u667a", "value": 0.01068777025373256}, {"name": "\u90dc\u6797", "value": 0.01068777025373256}, {"name": "\u4e00\u4e2a", "value": 0.00987190992902015}, {"name": "\u56fd\u5185", "value": 0.00987190992902015}, {"name": "\u6bd4\u8d5b", "value": 0.00987190992902015}, {"name": "\u771f\u7684", "value": 0.008240189279595333}, {"name": "\u518d", "value": 0.008240189279595333}, {"name": "\u4e2d\u56fd", "value": 0.007424328954882924}, {"name": "\u56fd\u5bb6\u961f", "value": 0.007424328954882924}, {"name": "\u8db3\u7403", "value": 0.005792608305458105}, {"name": "\u597d", "value": 0.004976747980745696}, {"name": "\u51e0\u573a", "value": 0.004976747980745696}, {"name": "\u6700\u540e", "value": 0.004976747980745696}, {"name": "\u770b\u5230", "value": 0.004976747980745696}, {"name": "\u660e\u663e", "value": 0.004976747980745696}, {"name": "\u8fd9\u79cd", "value": 0.004976747980745696}, {"name": "\u771f", "value": 0.004976747980745696}, {"name": "\u52a0\u6cb9", "value": 0.004160887656033287}, {"name": "\u5916\u63f4", "value": 0.004160887656033287}, {"name": "\u6c34\u5e73", "value": 0.004160887656033287}, {"name": "\u5389\u5bb3", "value": 0.004160887656033287}, {"name": "\u592a", "value": 0.004160887656033287}, {"name": "\u7403\u8ff7", "value": 0.004160887656033287}, {"name": "\u4eba", "value": 0.004160887656033287}, {"name": "\u4ff1\u4e50\u90e8", "value": 0.004160887656033287}]};
var topic_summary = {"0": [{"content": "\u4e0d\u5f97\u4e0d\u8bf4\uff0c\u76ee\u524d\u56fd\u8db3\u7b2c\u4e00\u4eba\u5c31\u662f\u6b66\u78ca\uff01\u524d\u950b\u4e09\u4e2a\u6b66\u78ca\uff0c\u4e2d\u573a\u4e09\u4e2a\u90d1\u667a\uff0c\u540e\u536b\u56db\u4e2a\u5f53\u5e74\u7684\u51af\u6f47\u9706\uff01\u4f55\u6101\u51b2\u4e0d\u51fa\u4e9a\u6d32\uff01", "up": 274}, {"content": "\u90dc\u6797\u548c\u51af\u6f47\u9706\u8fd9\u5bf9\u53cc\u80de\u80ce\uff0c\u7ec8\u4e8e\u6709\u8fd9\u4e2a\u8d5b\u5b63\u597d\u7684\u7f29\u5f71\uff0c\u4e4c\u9f99\u52a0\u7ea2\u724c\u3002", "up": 186}, {"content": "\u4e8b\u5b9e\u8bc1\u660e:\u5e7f\u5dde\u5854\u786e\u5b9e\u9a9a\uff0c\u51af\u6f47\u9706\u8fdb\u7403\u786e\u5b9e\u96be\ud83d\ude04\ud83d\ude04", "up": 11}, {"content": "\u51af\u6f47\u9706\u81a8\u80c0\u4e86\uff0c\u4e0d\u5982\u90d1\u667a", "up": 10}, {"content": "\u82cf\u5b81\u8981\u6709\u6240\u7a81\u7834\uff0c\u90a3\u9ed1\u4eba\u4e2d\u950b\u8981\u6362\u6389\uff0c\u8fd9\u5bb6\u4f19\u8fd8\u6ca1\u6709\u6b66\u78ca\u597d\u7528\uff0c\u6ca1\u901f\u5ea6 \u6ca1\u6280\u672f \u5c04\u95e8\u50f5\u786c \u4e89\u9ad8\u70b9\u51e0\u4e4e\u88ab\u51af\u6f47\u9706\u5b8c\u7206 \u8981\u6765\u5e72\u561b\uff1f", "up": 9}], "1": [{"content": "\u90d1\u667a38\u5c81\u3001\u51af\u6f47\u970633\u5c81\u3001\u90dc\u679732\u5c81\u3001\u66fe\u8bda31\u5c81\u3001\u9ec4\u535a\u658731\u5c81\u3001\u674e\u5b66\u9e4f30\u5c81\u3001\u5f20\u7433\u828329\u5c81\u3001\u9ad8\u62c9\u727927\u5c81\u3001\u963f\u517029\u5c81\u2026\u2026\uff0c\u9996\u5148\u652f\u6301\u5168\u534e\u73ed\uff0c\u5176\u6b21\u5e73\u574730\u5c81\u7684\u7403\u961f\u771f\u7684\u9700\u8981\u5168\u9762\u6362\u8840\u4e86\uff0c\u9ec4\u535a\u6587\u8e22\u4e86\u5341\u51e0\u5206\u949f\u5c31\u6ee1\u8eab\u5927\u6c57\uff0c\u51af\u6f47\u9706\u548c\u5f20\u7433\u8283\u53ea\u80fd\u7528\u72af\u89c4\u5f25\u8865\u901f\u5ea6\u7f3a\u9677\uff0c\u800c\u5728\u4e0b\u534a\u573a\u540e\u9636\u6bb5\u674e\u5b66\u9e4f\u4e5f\u57fa\u672c\u4e0a\u542f\u52a8\u4e0d\u8d77\u6765\uff0c\u4e8e\u6c49\u8d85\u57fa\u672c\u900f\u652f\u2026\u2026\u770b\u5f97\u60ca\u5fc3\u52a8\u9b44\uff0c\u5f88\u96be\u60f3\u50cf\u660e\u5e74\u4f1a\u600e\u4e48\u6837", "up": 329}, {"content": "\u4eca\u5e74\u8c01\u8fd8\u60f3\u7740\u6052\u5927\u4e89\u51a0\u90a3\u5c31\u662f\u81ea\u5df1\u7ed9\u81ea\u5df1\u627e\u5835\uff0c\u4e00\u56fd\u9876\u7ea7\u8054\u8d5b\u4e03\u8fde\u51a0\uff0c\u4e03\u5e74\u4e24\u593a\u6d32\u9645\u51a0\u519b\u4e24\u6b21\u4e16\u4ff1\u676f\u7b2c\u56db\uff0c\u591f\u4e86\uff0c\u4e00\u76f4\u6ca1\u6253\u51fa\u6765\u4ec0\u4e48\u65b0\u4eba\uff0c\u5fc5\u7136\u4f1a\u4ed8\u51fa\u4ee3\u4ef7\u7684\uff0c\u7403\u961f\u5e94\u8be5\u66f4\u52a1\u5b9e\u4eca\u5e74\u7ec3\u4eba\uff0c\u90d1\u667a\u51af\u6f47\u9706\u90dc\u6797\u9ec4\u535a\u6587\u8fd9\u4e9b\u5c31\u4e0d\u8981\u4e0a\u592a\u591a\u4e86\uff0c\u8054\u8d5b\u6768\u7acb\u745c\u5510\u8bd7\u51af\u535a\u8f69\u9093\u5b87\u5f6a\u5ed6\u529b\u751f\u5f90\u65b0\u9093\u6db5\u6587\u8fd9\u4e9b\u5168\u4e0a\uff0c\u4e9a\u51a0\u4e0a\u4e3b\u529b\u62fc\uff0c\u953b\u70bc\u65b0\u4eba\u73b0\u5728\u5bf9\u6052\u5927\u6765\u8bf4\u592a\u91cd\u8981\u4e86", "up": 13}, {"content": "\u91d1\u656c\u9053\u8981\u662f\u8fdb\u4e0d\u4e86\u56fd\u5bb6\u961f\u5c31\u6ca1\u5929\u7406\u4e86\u3002\u3002\u3002\u611f\u89c9\u73b0\u5728\u4e2d\u8d85\u56de\u5230\u4e03\u516b\u5e74\u524d\u4e86\uff0c\u90a3\u65f6\u5019\u9c81\u80fd \u56fd\u5b89 \u7533\u82b1 \u4e9a\u6cf0 \u6c5f\u82cf\u821c\u5929\u4e89\u51a0\uff0c\u90a3\u65f6\u5019\u5e7f\u5dde\u6052\u5927\u7684\u524d\u8eab\u5e7f\u5dde\u767d\u4e91\u836f\u4e1a\u8fd8\u662f\u4e2d\u7532\uff0c\u6cb3\u5357\u5efa\u4e1a\u8fd8\u8fdb\u5165\u4e9a\u51a0\uff0c\u90a3\u65f6\u5019\u8fd8\u6709\u9752\u5c9b\u4e2d\u80fd\uff0c\u73b0\u5728\u4e2d\u80fd\u597d\u50cf\u662f\u4e59\u7ea7\u4e86\u3002\u90a3\u65f6\u5019\u8d5b\u573a\u7684\u4e3b\u89d2\u8fd8\u662f\u672c\u571f\u7403\u5458\u3002\u540e\u6765\u6052\u5927\u63a5\u624b\u5e7f\u5dde\u767d\u4e91\uff0c\u75af\u72c2\u7838\u94b1\u5f15\u8fdb\u90d1\u667a \u5f20\u7433\u8283 \u66fe\u8bda \u9ec4\u535a\u6587 \u51af\u6f47\u9706 \u90dc\u6797 \u7a46\u91cc\u5947 \u57c3\u5c14\u514b\u68ee\uff0c\u4ece\u6b64\u4e2d\u8d85\u683c\u5c40\u5f7b\u5e95\u53d8\u5929\u4e00\u5bb6\u72ec\u5927\u3002\u89c2\u8d4f\u6027\u4e0a\u6765\u4e86\u4e9a\u51a0\u4e5f\u62ff\u4e86\uff0c\u7136\u540e\u672c\u571f\u7403\u5458\u6218\u7ee9\u8fd8\u662f\u767d\u65a9\u9e21\u3002\u4ee5\u524d\u56fd\u5bb6\u961f\u7403\u5458\u591a\u662f\u9c81\u80fd \u56fd\u5b89 \u821c\u5929\u7b49\u7403\u961f\u7684\uff0c\u540e\u6765\u57fa\u672c\u4e0a\u662f\u6052\u5927\u7684\u73ed\u5e95\u3002\u4e4b\u524d\u4e2d\u8d85\u7c7b\u4f3c\u82f1\u8d85 \u7fa4\u96c4\u4e89\u9738\uff0c\u540e\u6765\u6052\u5927\u65f6\u671f\u7c7b\u4f3c\u5fb7\u7532\uff0c\u57fa\u672c\u4e0a\u62dc\u4ec1\u538b\u5012\u6027\u4f18\u52bf\u3002\u968f\u7740\u6052\u5927\u7403\u5458\u73ed\u5e95\u8001\u5316\uff0c\u73b0\u5728\u4e2d\u8d85\u53c8\u597d\u770b\u4e86\uff01", "up": 11}, {"content": "\u674e\u5b66\u9e4f \u51af\u6f47\u9706 \u4e8e\u6c49\u8d85\uff0c\u56de\u5bb6\u4e86", "up": 8}, {"content": "\u6052\u5927\u9700\u8981\u65b0\u9c9c\u8840\u6db2\u4e86\uff0c\u90d1\u667a\u8001\u4e86\uff0c\u90dc\u6797\u3001\u9ec4\u535a\u6587\u3001\u5f20\u7433\u8283\u3001\u51af\u6f47\u9706\u9000\u5316\u4e25\u91cd\uff0c\u4ed6\u4eec\u503c\u5f97\u7403\u8ff7\u53ca\u5bf9\u624b\u7684\u5c0a\u91cd\uff0c\u4f46\u4e2d\u8d85\u662f\u65f6\u5019\u6811\u7acb\u65b0\u79e9\u5e8f\u4e86\uff01\uff01", "up": 6}], "2": [{"content": "\u4eca\u5929\u51af\u6f47\u9706\u4e0d\u9519.\u4e0d\u9ecf\u7403\u4e86\uff0c\u4f20\u7403\u9632\u5b88\u90fd\u5f88\u597d\uff0c\u90dc\u6797\u7684\u8fdb\u7403\u7ed9\u5bf9\u65b9\u6253\u51fb\u5f88\u5927\uff0c\u5f88\u957f\u65f6\u95f4\u88ab\u538b\u6253\uff0c\u963f\u5170\u672c\u573a\u4e5f\u4e0d\u9519\uff0c\u7075\u6d3b\u5e94\u53d8\u80fd\u529b\u5f3a\uff0c\u5bf9\u65b9\u90fd\u4e0d\u77e5\u9053\u4ed6\u7684\u8dd1\u4f4d\uff0c\u8fdb\u7403\uff0c\u4f20\u7403\uff0c\u5c31\u662f\u4ed6\u548c\u9ad8\u62c9\u7279\u7684\u533a\u522b\u3002\u8fd8\u6709\u5c31\u662f\u90d1\u667a\u80fd\u529b\u771f\u5f3a\uff0c\u4e0d\u8001\uff0c\u4fdd\u5229\u5c3c\u5965\u5854\u5229\u65af\u5361\u4e0d\u7528\u8bf4\u4e86\uff0c\u7edd\u5bf9\u6838\u5fc3\uff0c\u6700\u540e\u60f3\u8bf4\u7684\u662f\u660e\u5929\u4e0a\u6e2f\u8f93\u7403\uff0c\u5bf9\u4e0d\u8d77\u4e86\u3002", "up": 328}, {"content": "\u8bf4\u53e5\u5b9e\u8bdd\uff0c\u7b2c\u4e00\u4e2a\u6362\u4eba\u592a\u5931\u8d25\uff0c\u6768\u7acb\u745c\u7684\u7075\u5149\u4e00\u73b0\u62ef\u6551\u4e86\u5361\u5e05\u3002\u540e\u536b\u7ebf\u4e0a\u552f\u4e00\u4e00\u4e2a\u79ef\u6781\u9632\u5b88\u7684\u5c31\u662f\u9093\u6db5\u6587\uff0c\u4ec5\u4ec5\u662f\u56e0\u4e3a\u8fdb\u653b\u4e0d\u5229\u5c31\u64a4\u4e0b\uff0c\u7ed3\u679c\u56de\u5934\u9a6c\u4e0a\u5f205\u5c31\u88ab\u7206\u7a7f\u4e00\u8def\uff0c\u800c\u4e14\u4e34\u8fd1\u7ec8\u573a\u7684\u65f6\u5019\u53c8\u662f\u90a3\u4e00\u8def\u9669\u4e9b\u5bfc\u81f4\u6052\u5927\u60e8\u906d\u7edd\u6740\u3002\u51af\u6f47\u9706\u4e0d\u5e94\u8be5\u7ed9\u4ed6\u90a3\u4e48\u591a\u957f\u4f20\u7684\u7403\u6743\uff0c\u8d28\u91cf\u5dee\u800c\u4e14\u6548\u679c\u4e5f\u5f88\u5dee\uff0c\u5361\u5e05\u4e0d\u5e94\u8be5\u8fc7\u5ea6\u7eb5\u5bb9\u540e\u9632\u7ebf\u4e0a\u7684\u67d0\u4e9b\u5927\u7237", "up": 137}, {"content": "\u9a82\u51af\u6f47\u9706\u5fd8\u672c\u7684\u6709\u6ca1\u6709\u8d5e", "up": 46}, {"content": "\u6211\u60f3\u8bf4\u90a3\u4e9b\u9ed1\u51af\u6f47\u9706\u7684\uff0c\u4eba\u5bb6\u5728\u5341\u4e8c\u5f3a\u8d5b\u90a3\u4e48\u62fc\uff0c\u7279\u522b\u662f\u6253\u97e9\u56fd\uff0c\u4e00\u76f4\u62fc\u5230\u6700\u540e\uff0c\u6b63\u8d5b\u8868\u73b0\u4ece\u4e0d\u542b\u4e4e\uff0c\u7136\u540e\u5c31\u56e0\u4e3a\u4e00\u573a\u53cb\u8c0a\u8d5b\u8868\u73b0\u5dee\u88ab\u55b7\u8fd9\u4e48\u4e45\uff0c\u4f60\u4eec\u4e0a\u73ed\u8fd8\u6ca1\u6709\u5077\u4e2a\u61d2\u7684\uff1f", "up": 13}, {"content": "\u51af\u6f47\u9706\u5f53\u597d\u4e2d\u540e\u536b\u5c31\u884c\u4e86\uff0c\u6bcf\u6b21\u653b\u5230\u524d\u573a\u4f20\u5931\u8bef\u6c42\u7ed9\u5bf9\u65b9\u6253\u53cd\u51fb", "up": 11}], "3": [{"content": "\u56fd\u5b89\u3001\u6052\u5927\u54b1\u4eec\u8fd8\u90fd\u662f\u4e2d\u56fd\u7403\u8ff7\u5427\uff0c\u591a\u51e0\u573a\u8fd9\u6837\u7684\u9ad8\u5bf9\u6297\u8054\u8d5b\u5bf9\u4e2d\u56fd\u8db3\u7403\u5982\u4f55\uff1f\u5168\u534e\u73ed\u6253\u8fd9\u4e48\u5f3a\u7684\u5916\u63f4\u914d\u7f6e\uff0c\u56fd\u4ea7\u7403\u5458\u4e8c\u52a9\u653b\u4e00\u8fdb\u7403\u600e\u4e48\u8bf4\uff1f\u540c\u65f6\u6211\u4eec\u4e5f\u770b\u5230\u4e86\u4e2d\u56fd\u8db3\u7403\u90a3\u4e2a\u6c38\u8fdc\u6539\u4e0d\u4e86\u7684\u9ed1\u8272\u4e09\u5206\u949f\u95ee\u9898\uff0c\u4e0d\u8981\u4e89\u8bba\u90a3\u4e2a\u70b9\u7403\u4e86\uff0c\u597d\u597d\u770b\u770b\u5f55\u50cf\u5224\u70b9\u540e\u51af\u6f47\u9706\u518d\u8ddf\u961f\u53cb\u4ea4\u6d41\u4ec0\u4e48\u5c31\u90fd\u660e\u767d\u4e86\uff0c\u7edd\u5e73\u8bf4\u8d8a\u4f4d\u5c31\u66f4\u626f\u6de1\u4e86\uff0c\u8bf4\u6ca1\u56de\u653e\u7684\u5c31\u662f\u627e\u4e8b\u4e86\uff0c\u6211\u770b\u7684\u5317\u4eac\u53f0\u4e24\u4e2a\u7403\u90fd\u6709\u6e05\u695a\u7684\u56de\u653e\uff0c\u8bb2\u9053\u7406\u9a6c\u5b81\u8fd9\u573a\u5224\u7f5a\u662f\u5f88\u5230\u4f4d\u4e86\uff0c\u6bd5\u7adf\u8fd9\u4e48\u5173\u952e\u7684\u6bd4\u8d5b\u56fd\u5185\u88c1\u5224\u6765\u5439\uff0c\u6700\u540e\u8fd8\u6709\u52c7\u6c14\u5224\u70b9\uff0c\u4f46\u8fd8\u662f\u6709\u627e\u9f50\u7684\u73b0\u8c61\u6bd4\u5982\u56fd\u5b89\u8fde\u7eed\u4e09\u9ec4\u4ee5\u540e\u4e00\u5ea6\u4e0d\u6562\u518d\u7ed9\u56fd\u5b89\u638f\u724c\u4e86\uff0c\u4f46\u8fd9\u4e0d\u4e5f\u7b97\u8db3\u7403\u7684\u4e00\u90e8\u5206\u5417\uff1f\u8fd8\u6709\u8bf4\u53e5\u62a4\u77ed\u7684\u8bdd\u5982\u679c\u4e0d\u9a82\u4ed6\uff0c\u518d\u591a\u52a0\u4e2a\u51e0\u5206\u949f\u6052\u5927\u4f60\u4eec\u9876\u5f97\u4f4f\u5417\uff1f\u6ca1\u6709\u8bf4\u9a82\u4eba\u5bf9\u7684\u610f\u601d\uff0c\u542c\u5230\u90a3\u4e9b\u8ba9\u97e6\u4e16\u8c6a\u94f2\u4eba\u7684\u6211\u4e5f\u89c9\u5f97****...\u4f46\u662f\u50bbB\uff0c\u725bB\u8fd9\u4e9b\u53c8\u600e\u4e48\u4e86\u5462\uff1f", "up": 12}, {"content": "\u51af\u6f47\u9706\u5389\u5bb3\u554a\uff01\u6700\u540e\u4e00\u5206\u949f\u5e26\u7403\u4ece\u540e\u573a\u4e00\u8def\u72c2\u5954\u5230\u524d\u573a[\u5389\u5bb3]", "up": 8}, {"content": "\u5e7f\u5dde\u5854\u4e0d\u7528\u5439\u4e86\uff0c\u8fd9\u573a\u6bd4\u8d5b\u5c31\u6279\u8bc4\u4e00\u4e2a\u7403\u5458\uff0c\u6709\u70b9\u98d8\u4e86\u554a\uff0c\u6ca1\u9519\uff0c\u5c31\u662f\u4f60\u51af\u6f47\u9706\uff01\uff01[\u6ed1\u7a3d][\u6ed1\u7a3d]", "up": 7}, {"content": "\u51af\u6f47\u9706\u73b0\u5728\u5e72\u561b\u8001\u662f\u60f3\u5b66\u76ae\u5c14\u6d1b\u554a\uff0c\u4f60\u597d\u597d\u4e00\u4e2a\u4e2d\u540e\u536b\u522b\u8001\u662f\u4e0a\u53bb\u7ec4\u7ec7\u6210\u4e0d\u6210\uff1f\uff1f\uff1f", "up": 7}, {"content": "2018\u4e2d\u8d85\u8054\u8d5b\u4e00\u573a\u582a\u79f0\u56fd\u5bb6\u5fb7\u6bd4\u540c\u65f6\u53c8\u662f\u51a0\u4e9a\u519b\u76f4\u63a5\u4e89\u593a\u6218\u7684\u7126\u70b9\u6bd4\u8d5b\u5c06\u5728\u5e7f\u5dde\u5929\u6cb3\u4e2d\u5fc3\u4f53\u80b2\u573a\u8fdb\u884c\uff0c\u76ee\u524d\u79ef\u5206\u699c\u4e0a\u4f4d\u5217\u524d\u4e24\u4f4d\u7684\u4e0a\u6d77\u4e0a\u6e2f\u4e0e\u5e7f\u5dde\u6052\u5927\u5c06\u76f4\u63a5\u5c55\u5f00\u8f83\u91cf\uff0c\u672c\u573a\u6bd4\u8d5b\u4e5f\u5c06\u76f4\u63a5\u51b3\u5b9a\u51a0\u519b\u7684\u5f52\u5c5e\u3002\u800c\u62e5\u6709\u5854\u5229\u65af\u5361\u3001\u4fdd\u5229\u5c3c\u5965\u3001\u9ad8\u62c9\u7279\u3001\u963f\u5170\u3001\u6d69\u514b\u3001\u5965\u65af\u5361\u3001\u57c3\u5c14\u514b\u68ee\u3001\u827e\u54c8\u8fc8\u591a\u592b\u3001\u6b66\u78ca\u3001\u90d1\u667a\u3001\u51af\u6f47\u9706\u7b49\u5927\u724c\u7403\u661f\u52a9\u9635\u7684\u672c\u573a\u6bd4\u8d5b\u4e5f\u5438\u5f15\u4e86\u5168\u4e16\u754c\u7684\u76ee\u5149\uff0c\u5305\u62ec\u5fb7\u56fd\u3001\u897f\u73ed\u7259\u3001\u8461\u8404\u7259\u3001\u7f8e\u56fd\u3001\u514b\u7f57\u5730\u4e9a\u3001\u585e\u5c14\u7ef4\u4e9a\u3001\u571f\u8033\u5176\u3001\u5965\u5730\u5229\u3001\u6ce2\u9ed1\u3001\u9ed1\u5c71\u3001\u4e2d\u56fd\u6fb3\u95e8\u3001\u5df4\u62ff\u9a6c\u3001\u7259\u4e70\u52a0\u3001\u5b89\u572d\u62c9\u3001\u5b89\u63d0\u74dc\u548c\u5df4\u5e03\u8fbe\u3001\u963f\u9c81\u5df4\u3001\u5df4\u54c8\u9a6c\u3001\u5df4\u5df4\u591a\u65af\u3001\u767e\u6155\u5927\u7fa4\u5c9b\u3001\u82f1\u5c5e\u7ef4\u4eac\u7fa4\u5c9b\u3001\u5f00\u66fc\u7fa4\u5c9b\u3001\u591a\u7c73\u5c3c\u514b\u3001\u591a\u7c73\u5c3c\u52a0\u3001\u683c\u6797\u7eb3\u8fbe\u3001\u5370\u5c3c\u3001\u9a6c\u5176\u987f\u3001\u8499\u585e\u62c9\u7279\u3001\u5723\u57fa\u8328\u548c\u5c3c\u7ef4\u65af\u3001\u5723\u5362\u897f\u4e9a\u3001\u5723\u6587\u68ee\u7279\u548c\u683c\u6797\u7eb3\u4e01\u65af\u3001\u585e\u820c\u5c14\u3001\u7279\u7acb\u5c3c\u8fbe\u548c\u591a\u5df4\u54e5\u3001\u7279\u514b\u65af\u548c\u51ef\u79d1\u65af\u7fa4\u5c9b\u7b49\u5728\u5185\u768413\u4e2a\u56fd\u5bb6\u548c\u5730\u533a\u7684\u673a\u6784\u5c06\u5bf9\u672c\u573a\u6bd4\u8d5b\u8fdb\u884c\u5168\u7403\u76f4\u64ad\u3002", "up": 6}]};
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
