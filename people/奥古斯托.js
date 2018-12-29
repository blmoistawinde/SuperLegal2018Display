var data = {"person_name": "\u5965\u53e4\u65af\u6258", "nicknames": "\u5965\u53e4\u65af\u6258", "aspects": {"\u7403\u5458": 0.6356772317349317, "\u5916\u63f4": 0.5586836309589401, "\u7ea2\u724c": 0.6766147068289137, "\u6bd4\u8d5b": 0.6826713370726645, "\u9632\u5b88": 0.7824919926888863, "\u72af\u89c4": 0.4821454963864015, "\u4e16\u754c\u676f": 0.8696339610107251, "\u7403\u8ff7": 0.6343753326116011, "\u8fdb\u7403": 0.5690766753567283, "\u8fdb\u653b": 0.9195011653902901}, "overall_heat": 190.0, "overall_polar": 0.556, "name": "62", "nationality": "\u5df4\u897f", "position": "\u4e2d\u573a", "goal": "10", "assist": "16", "team_name": "\u5317\u4eac\u4e2d\u8d6b\u56fd\u5b89", "name_en": "Renato Soares de Oli", "age": "30", "height": "186", "weight": "86"};
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
var topic_keywords = {"0": [{"name": "\u5965\u53e4\u65af\u6258", "value": 0.046790263589355535}, {"name": "\uff01", "value": 0.029133560348089296}, {"name": "\uff1f", "value": 0.017782822550132426}, {"name": "\u56fd\u5b89", "value": 0.015260436372808677}, {"name": "\u5df4\u574e\u5e03", "value": 0.01273805019548493}, {"name": "\u4e00\u4e0b", "value": 0.008954470929499306}, {"name": "\u94f2", "value": 0.007693277840837432}, {"name": "\u5206\u949f", "value": 0.007693277840837432}, {"name": "\u8fc7\u53bb", "value": 0.007693277840837432}, {"name": "\u4eba", "value": 0.006432084752175558}, {"name": "\u5f20\u7a00\u54f2", "value": 0.006432084752175558}, {"name": "\u597d", "value": 0.006432084752175558}, {"name": "\u7403\u5458", "value": 0.006432084752175558}, {"name": "\u5916\u63f4", "value": 0.005170891663513684}, {"name": "\u6700\u540e", "value": 0.005170891663513684}, {"name": "\u95ee\u9898", "value": 0.005170891663513684}, {"name": "\u4e00\u4e2a", "value": 0.005170891663513684}, {"name": "\u5317\u4eac\u4eba\u548c", "value": 0.005170891663513684}, {"name": "\u6345", "value": 0.005170891663513684}, {"name": "\u771f\u7684", "value": 0.005170891663513684}, {"name": "\u524d", "value": 0.005170891663513684}, {"name": "\u7a7a\u95e8", "value": 0.005170891663513684}, {"name": "\u5fae\u7b11", "value": 0.005170891663513684}, {"name": "\u7d20\u8d28", "value": 0.005170891663513684}, {"name": "\u6709\u70b9", "value": 0.005170891663513684}, {"name": "\u6c60\u5fe0\u56fd", "value": 0.00390969857485181}, {"name": "\u77e5\u9053", "value": 0.00390969857485181}, {"name": "\u585e", "value": 0.00390969857485181}, {"name": "\u56fd\u5185", "value": 0.00390969857485181}, {"name": "\u4e0b", "value": 0.00390969857485181}], "1": [{"name": "\u5965\u53e4\u65af\u6258", "value": 0.05905471093184404}, {"name": "\u56fd\u5b89", "value": 0.021822318750646396}, {"name": "\uff01", "value": 0.01975385251835764}, {"name": "\u8e22", "value": 0.011479987589202606}, {"name": "\u6052\u5927", "value": 0.010445754473058228}, {"name": "\u4e00\u4e2a", "value": 0.010445754473058228}, {"name": "\uff1f", "value": 0.010445754473058228}, {"name": "\u7403\u5458", "value": 0.009411521356913848}, {"name": "\u4e16\u754c\u676f", "value": 0.009411521356913848}, {"name": "\u54ed", "value": 0.008377288240769469}, {"name": "\u8fdb\u7403", "value": 0.008377288240769469}, {"name": "\u7403", "value": 0.00734305512462509}, {"name": "\u7b11", "value": 0.00734305512462509}, {"name": "\u4e3b\u573a", "value": 0.006308822008480711}, {"name": "\u4fdd\u5229\u5c3c\u5965", "value": 0.006308822008480711}, {"name": "\u4eba", "value": 0.006308822008480711}, {"name": "\u5168\u573a", "value": 0.006308822008480711}, {"name": "\u6700\u540e", "value": 0.006308822008480711}, {"name": "\u5854\u5229\u65af\u5361", "value": 0.006308822008480711}, {"name": "\u5916\u63f4", "value": 0.005274588892336333}, {"name": "\u60f3", "value": 0.005274588892336333}, {"name": "\u961f\u53cb", "value": 0.005274588892336333}, {"name": "\u770b\u5230", "value": 0.005274588892336333}, {"name": "\u771f", "value": 0.005274588892336333}, {"name": "\u02c9", "value": 0.004240355776191953}, {"name": "\u6bd4\u8d5b", "value": 0.004240355776191953}, {"name": "\u9632\u5b88", "value": 0.004240355776191953}, {"name": "\u5439", "value": 0.004240355776191953}, {"name": "\u5e0c\u671b", "value": 0.004240355776191953}, {"name": "\u4ee5\u540e", "value": 0.004240355776191953}], "2": [{"name": "\u5965\u53e4\u65af\u6258", "value": 0.056560436405397645}, {"name": "\u56fd\u5b89", "value": 0.025935496219733945}, {"name": "\u5916\u63f4", "value": 0.012537084888506076}, {"name": "\u6bd4\u8d5b", "value": 0.012537084888506076}, {"name": "\uff01", "value": 0.010623026126902095}, {"name": "\u4e2d\u573a", "value": 0.010623026126902095}, {"name": "\u8e22", "value": 0.009665996746100105}, {"name": "\u6bd4\u57c3\u62c9", "value": 0.009665996746100105}, {"name": "\u73b0\u5728", "value": 0.009665996746100105}, {"name": "\u8d5b\u5b63", "value": 0.008708967365298113}, {"name": "\u5df4\u574e\u5e03", "value": 0.008708967365298113}, {"name": "\u6052\u5927", "value": 0.007751937984496123}, {"name": "\u903c", "value": 0.007751937984496123}, {"name": "\u597d", "value": 0.0067949086036941326}, {"name": "\u8fdb\u653b", "value": 0.0067949086036941326}, {"name": "\u5389\u5bb3", "value": 0.0067949086036941326}, {"name": "\u6c60\u5fe0\u56fd", "value": 0.0067949086036941326}, {"name": "\u5df4\u897f", "value": 0.0067949086036941326}, {"name": "\u725b", "value": 0.0067949086036941326}, {"name": "\u592a", "value": 0.005837879222892142}, {"name": "\u9632\u5b88", "value": 0.005837879222892142}, {"name": "\u4eca\u5e74", "value": 0.005837879222892142}, {"name": "\u7403\u5458", "value": 0.005837879222892142}, {"name": "\u9c81\u80fd", "value": 0.005837879222892142}, {"name": "\u6709\u70b9", "value": 0.0048808498420901516}, {"name": "\u4e2d\u8d85", "value": 0.0048808498420901516}, {"name": "\u5927\u96f7", "value": 0.0048808498420901516}, {"name": "\u6700", "value": 0.0048808498420901516}, {"name": "\u771f\u7684", "value": 0.0048808498420901516}, {"name": "\u540e\u8170", "value": 0.0048808498420901516}], "3": [{"name": "\u5965\u53e4\u65af\u6258", "value": 0.04076399327968874}, {"name": "\uff01", "value": 0.01777345477053674}, {"name": "\uff1f", "value": 0.01600495180829428}, {"name": "\u4e8e\u6c49\u8d85", "value": 0.01600495180829428}, {"name": "\u7ea2\u724c", "value": 0.014236448846051818}, {"name": "\u4eba", "value": 0.014236448846051818}, {"name": "\u88c1\u5224", "value": 0.014236448846051818}, {"name": "\u72af\u89c4", "value": 0.012467945883809353}, {"name": "\u5439", "value": 0.011583694402688123}, {"name": "\u52a8\u4f5c", "value": 0.010699442921566892}, {"name": "\u53f7", "value": 0.010699442921566892}, {"name": "\u8e22", "value": 0.009815191440445662}, {"name": "\u62a5\u590d", "value": 0.009815191440445662}, {"name": "\u7403", "value": 0.008930939959324431}, {"name": "\u5e94\u8be5", "value": 0.008930939959324431}, {"name": "\u8fd9\u573a", "value": 0.006278185515960738}, {"name": "\u597d", "value": 0.006278185515960738}, {"name": "\u9ec4\u724c", "value": 0.006278185515960738}, {"name": "\u77e5\u9053", "value": 0.0053939340348395075}, {"name": "\u9632\u5b88", "value": 0.0053939340348395075}, {"name": "\u56fd\u5b89", "value": 0.0053939340348395075}, {"name": "\u4f30\u8ba1", "value": 0.0053939340348395075}, {"name": "\u4e00\u4e2a", "value": 0.004509682553718277}, {"name": "\u660e\u663e", "value": 0.004509682553718277}, {"name": "\u6253", "value": 0.004509682553718277}, {"name": "\u8fdb", "value": 0.004509682553718277}, {"name": "\u8e22\u7403", "value": 0.004509682553718277}, {"name": "\u8ffd\u52a0", "value": 0.004509682553718277}, {"name": "\u4e00\u4e0b", "value": 0.004509682553718277}, {"name": "\u518d", "value": 0.004509682553718277}]};
var topic_summary = {"0": [{"content": "\u9ec4\u7d2b\u660c\uff0c\u4eba\u7403\u7ed3\u5408\u4e0d\u9519\uff0c\u9752\u6625\u98ce\u66b4\uff01\u5f53\u7136\u4e5f\u6709\u4e0d\u8db3\uff0c\u795d\u8d8a\u6765\u8d8a\u597d\u3002\u8fd8\u6709\u4e00\u4e2a\u7ec6\u8282\uff0c\u5965\u53e4\u65af\u6258\u8ba9\u81ea\u5df1\u961f\u53cb\u8d76\u7d27\u8d77\u6765\uff0c\u503c\u5f97\u79f0\u8d5e\u3002", "up": 500}, {"content": "\u5965\u53e4\u65af\u6258\uff1a\u5582\uff0c\u90a3\u8c01\uff0c\u4e0d\u662f\u6211\u8bf4\u4f60\uff0c\u8865\u65f6\u8fd8\u67092\u5206\u949f\u5c31\u5c31\u7ed3\u675f\u4e86\uff0c\u6f14\u7684\u522b\u592a\u8fc7\u4e86\uff0c\u81ea\u5df1\u8d77\u6765\u5427\ud83d\ude01\ud83d\ude01", "up": 124}, {"content": "\u5965\u53e4\u65af\u6258\u4f20\u7ed9\u4e09\u79d2\u540e\u7a7a\u95e8\u6253\u98de\u673a\u7684\u81ea\u5df1\u662f\u771f\u7684\u9a9a", "up": 122}, {"content": "\u600e\u4e48\u611f\u89c9\u56fd\u5b89\u5916\u63f4\u90a3\u4e48\u591a\u5462[\u6342\u8138] \u5965\u53e4\u65af\u6258 \u6bd4\u57c3\u62c9 \u91d1\u6cf0\u5ef6 \u6734\u6210 \u6c60\u5fe0\u56fd \u5df4\u574e\u5e03\u2026\u2026[\u6342\u8138]", "up": 89}, {"content": "\u5965\u53e4\u771f\u7684\u662f\u56fd\u5b89\u9886\u8896\u554a\uff0c\u5e3d\u5b50\u620f\u6cd5\u4e94\u6bd4\u4e8c\u9886\u5148\uff0c\u6bd4\u57c3\u62c9\u6700\u540e\u5931\u8bef\u6ca1\u6345\u8fdb\u53bb\u6cf0\u8fbe\u5feb\u53d1\u7403\u95e8\u7403\uff0c\u5965\u53e4\u65af\u6258\u8fd8\u9760\u610f\u5fd7\u6491\u7740\u62fc\u547d\u56de\u653e\u3002", "up": 54}], "1": [{"content": "\u5965\u53e4\u65af\u6258\u8ba9\u90a3\u4e2a\u5047\u88c5\u62bd\u7b4b\u76842b\u8d77\u6765\u6293\u7d27\u6bd4\u8d5b\uff0c\u662f\u4e00\u80a1\u6e05\u6d41\u3002\u3002\u3002", "up": 1301}, {"content": "\u770b\u5230\u5965\u53e4\u65af\u6258\u6211\u8fd8\u4ee5\u4e3a\u662f\u56fd\u5b89", "up": 27}, {"content": "\u5173\u4e8e\u5965\u53e4\u65af\u6258\uff0c\u522b\u5ba2\u6c14\u4e86\uff0c\u5c31\u76f4\u63a5\u5439\u5427\uff0c\u6211\u5148\u6765\uff0c\u4e2d\u8d85\u5e74\u5ea6\u6700\u4f73\u8fdb\u7403+\u6700\u4f73\u7403\u5458", "up": 17}, {"content": "\u5965\u53e4\u65af\u6258:\u6211\u6709\u4e24\u4e2a\u613f\u671b\u3002\u4e0a\u5e1d:\u8bf4\u8bf4\u770b\uff1f\u5965\u53e4\u65af\u6258:\u6211\u60f3\u5e2e\u52a9\u5df4\u897f\u593a\u5f97\u7b2c\u516d\u51a0\u3002\u4e0a\u5e1d:\u8fd9\u4e2a\u6709\u70b9\u96be\uff0c\u4f60\u7684\u53e6\u4e00\u4e2a\u613f\u671b\u662f\u4ec0\u4e48\uff1f\u5965\u53e4\u65af\u6258:\u5e2e\u52a9\u56fd\u5b89\u56de\u5230\u699c\u9996\uff01\u4e0a\u5e1d:\u4e40(\u02c9\u03b5\u02c9\u4e40)\u6eda\u4e40(\u02c9\u03b5\u02c9\u4e40)\u6eda\u3002\u3002\u3002\u6eda\u51fa\u53bb\uff01\uff01", "up": 14}, {"content": "\u5965\u53e4\u65af\u6258\u4e16\u754c\u676f\u540e\uff0c\u5f00\u6302\u4e86\uff01", "up": 13}], "2": [{"content": "\u5965\u53e4\u65af\u6258\u771f\u662f\u65e0\u6127\u4e8e\u5927\u724c\u7403\u661f\u7684\u79f0\u53f7\u554a\u3002\u3002\u592a\u5389\u5bb3\u4e86", "up": 549}, {"content": "\u56fd\u5b89\u4eca\u5e74\u8e22\u5f97\u771f\u4e0d\u9519\uff0c\u98ce\u683c\u8ddf\u5df4\u8428\u66fc\u57ce\u90fd\u6bd4\u8f83\u50cf\uff0c\u7b2c\u4e00\u573a\u8f93\u7ed9\u9c81\u80fd\u7eaf\u5c5e\u8d56\u65bd\u5bc6\u7279\u778e\u6392\u9635\u5bb9\uff0c\u540e\u51e0\u573a\u4e2d\u573a\u4e0a\u4e86\u6c60\u5fe0\u56fd\uff0c\u6734\u6210\u548c\u6bd4\u57c3\u62c9\u4e4b\u540e\uff0c\u52a0\u4e0a\u5965\u53e4\u65af\u6258\uff0c\u4e2d\u573a\u5b9e\u529b\u5728\u4e2d\u8d85\u7edd\u5bf9\u6570\u4e00\u6570\u4e8c\uff0c\u524d\u573a\u7d229\u4f9d\u7136\u7a33\u5b9a\uff0c\u7b49\u5f85\u5df4\u574e\u5e03\u9002\u5e94\u4e86\u4e2d\u8d85\uff0c\u52a0\u4e0a\u8d85\u7ea7\u65b0\u79c0\u97e6\u4e16\u8c6a\uff0c\u66ff\u8865\u6709\u4e8e\u5927\u5b9d\uff0c\u8fd8\u6709\u505c\u8d5b\u7684\u5f20\u7a00\u54f2\uff0c\u56fd\u5b89\u4eca\u5e74\u4e2d\u524d\u573a\u5f88\u5f3a\u5927\uff0c\u540e\u9632\u7ebf\u9010\u6e10\u78e8\u5408\u7684\u4e5f\u4e0d\u9519\uff0c\u4eca\u5e74\u6709\u5e0c\u671b\u4fdd\u4e09\u4e89\u4e00\u3002\u6700\u62c5\u5fc3\u7684\u5c31\u662f\u4f53\u80fd\uff0c\u9ad8\u4f4d\u903c\u62a2\u5bf9\u4f53\u529b\u8981\u6c42\u6781\u5927\uff0c\u522b\u50cf\u4e0a\u8d5b\u5b63\u4f3c\u7684\u540e\u534a\u6bb5\u6389\u961f\u5c31\u884c\u4e86\u3002\u867d\u8bf4\u8d62\u7684\u90fd\u7b97\u5f31\u961f\uff0c\u4f46\u8d77\u7801\u6bd4\u4e0a\u8d5b\u5b63\u8e22\u5f97\u597d\u591a\u4e86\uff0c\u4eca\u5e74\u771f\u6709\u5e0c\u671b\uff01\uff01\uff01", "up": 172}, {"content": "\u5965\u53e4\u65af\u6258\u771f\u7684\u5927\u5e08\u7ea7\uff0c\u4e0d\u6127\u5df4\u897f\u5bf9\u9996\u53d1\u4e2d\u573a\uff01\u56fd\u5b89\u6bd4\u8d5b\u597d\u770b\uff01", "up": 88}, {"content": "2\u53e5\u8bdd\uff0c\u5965\u53e4\u65af\u6258\u725b\u903c\uff0c\u88c1\u5224s\u903c", "up": 76}, {"content": "\u518d\u8bf4\u4e00\u53e5 \u6c60\u5fe0\u56fd\u89e3\u653e\u4e86\u5965\u53e4\u65af\u6258", "up": 20}], "3": [{"content": "\u4e8e\u6c49\u8d85\u90a3\u4e2a\u94f2\u7403\uff0c\u660e\u767d\u4eba\u7ed9\u4e2a\u770b\u6cd5\uff0c\u8be5\u7ea2\u724c\u8fd8\u662f\u9ec4\u724c\uff0c\u5965\u53e4\u65af\u6258\u62a5\u590d\u52a8\u4f5c\uff0c\u7ea2\u724c\u6ca1\u610f\u4e49\u3002\u4f46\u662f\u5982\u679c\u88c1\u5224\u5439\u4e86\u4e8e\u6c49\u8d85\u94f2\u7403\u72af\u89c4\uff0c\u4f1a\u53d1\u751f\u4ec0\u4e48\uff0c\u6ca1\u522b\u7684\u610f\u601d\uff0c\u660e\u767d\u4eba\u7ed9\u4e2a\u770b\u6cd5\uff0c\u8c22\u8c22\uff01", "up": 532}, {"content": "\u8fd9\u573a\u7403\u56fd\u5b89\u8e22\u597d\u4e86\u80fd\u8fdb8\u4e2a\u7403\uff0c\u50b2\u9aa8\u592a\u5f3a\u4e86\uff0c\u4e0d\u6127\u5df4\u897f\u56fd\u811a\uff0c\u518d\u8bf4\u4e00\u4e0b\u8fd9\u4e2a\u88c1\u5224\u773c\u778e\uff0cVAR\u4e5f\u5931\u660e\uff0c\u4e70\u63d0\u6c5f\u62a5\u590d\u6027\u8e22\u5965\u53e4\u65af\u6258\u809a\u5b50\uff0c\u660e\u663e\u7ea2\u724c\u548c\u8ffd\u52a0\u5904\u7f5a", "up": 466}, {"content": "\u54b1\u5ba2\u89c2\u70b9\u513f\u8bf4\uff0c\u5965\u53e4\u65af\u6258\u8fd9\u62a5\u590d\u52a8\u4f5c\u7ea2\u724c\u5b8c\u5168\u6ca1\u95ee\u9898\uff0c\u4f60\u4e8e\u6c49\u8d85\u8fd9\u526a\u5200\u817f\u660e\u663e\u4eba\u5bb6\u90fd\u51fa\u7403\u4e86\u4e5f\u6ca1\u89c1\u6536\uff0c\u8fd8\u53cc\u811a\u79bb\u5730\u7684\u526a\uff0c\u4e00\u7ea2\u4e00\u9ec4\uff0c\u5408\u7406\u4e48\uff1f", "up": 385}, {"content": "\u6211\u53ea\u80fd\u8bf4\u5965\u53e4\u65af\u6258\u90a3\u4e00\u811a\u8e22\u5f97\u6f02\u4eae\u4e0d\u7ba1\u662f\u7403\u8fd8\u662f\u4eba", "up": 112}, {"content": "\u5ba2\u89c2\u8bc4\u7403\u3002\u56fd\u5b89\u8fd9\u8fb9\u65bd\u5bc6\u7279\u8fd9\u573a\u8981\u5e72\u4ec0\u4e48\u6211\u6ca1\u770b\u61c2\u3002\u5355\u4ece\u8fd9\u573a\u6765\u770b\uff0c\u5df4\u574e\u5e03\u662f\u4e0d\u662f\u6c34\u8d27\u4e0d\u597d\u8bf4\uff0c\u4f46\u663e\u7136\u4e0d\u662f\u9ed1\u53c8\u786c\u81ea\u5df1\u5355\u5e72\u7c7b\u578b\u7684\uff0c\u5c0f\u6280\u672f\u770b\u8d77\u6765\u4e5f\u4e0d\u5982\u7d22\u91cc\u4e9a\u8bfa\uff0c\u518d\u770b\u4e24\u573a\u518d\u8bf4\u5427\uff0c\u4f46\u8fd9\u4e24\u4e2a\u524d\u950b\u4e0d\u80fd\u540c\u65f6\u4e0a\u4e86\u3002\u664b\u9e4f\u7fd4\u662f\u7edd\u5bf9\u4e0d\u80fd\u7528\u4e86\uff0c\u4f5c\u4e2d\u536b\u592a\u6bdb\u7cd9\uff0c\u4f5c\u4e3a\u8fb9\u536b\u66f4\u4e0d\u884c\u3002\u65b0\u6765\u7684\u90a3\u4e2a\u5218\u6b22\u66ff\u8865\u7528\u7528\u8fd8\u884c\uff0c\u6253\u4e0d\u4e86\u9996\u53d1\u3002\u540e\u8170\u6734\u6210\u548c\u6c60\u5fe0\u56fd\u81f3\u5c11\u4e0a\u4e00\u4e2a\uff0c\u628a\u50b2\u9aa8\u9876\u5230\u524d\u8170\u4e0a\u3002\u95e8\u5c06\u4faf\u68ee\u53cd\u5e94\u548c\u5f00\u5927\u811a\u80fd\u529b\u582a\u5fe7\uff0c\u4e0d\u77e5\u9053\u4e3a\u5565\u4e0d\u7528\u6c60\u6587\u4e00\u3002\u674e\u78ca\u8fd8\u662f\u653e\u5728\u5de6\u540e\u536b\u4e0a\u5427\uff0c\u51fa\u7403\u80fd\u529b\u548c\u5927\u5c40\u89c2\u8e22\u4e0d\u4e86\u540e\u8170\u3002U23\u9996\u53d1\u7528\u5df4\u987f\u6bd4\u8f83\u597d\uff0c\u97e6\u4e16\u8c6a\u662f\u4e00\u4e2a\u96f7\uff0c\u9996\u53d1\u98ce\u9669\u592a\u5927\uff0c\u53ef\u4ee5\u7528\u505a\u66ff\u8865\u5947\u5175\u3002\u8fd9\u6837\u4e0b\u6765\uff0c\u9635\u5bb9\u53ef\u4ee5\u662f\u8fd9\u6837:\u6c60\u6587\u4e00\uff1b\u674e\u78ca\uff0c\u4e8e\u6d0b\uff0c\u96f7\u817e\u9f99\uff0c\u59dc\u6d9b\uff1b\u6c60\u5fe0\u56fd\uff0c\u6734\u6210\uff08\u5415\u9e4f\uff09\uff1b\u6bd4\u57c3\u62c9\uff0c\u5965\u53e4\u65af\u6258\uff0c\u5df4\u987f\uff08\u97e6\u4e16\u8c6a\uff09\uff1b\u5df4\u574e\u5e03\uff08\u7d22\u91cc\u4e9a\u8bfa\uff09\u3002\u9c81\u80fd\u8fd9\u8fb9\u4eca\u5929\u8e22\u5f97\u4e0d\u9519\uff0cU23\u59da\u5747\u665f\u4e0d\u9519\uff0c\u811a\u6cd5\u548c\u7ec4\u7ec7\u80fd\u529b\u4ee5\u540e\u53ef\u4ee5\u63a5\u84bf\u4fca\u95f5\u7684\u73ed\u4e86\u3002\u9c81\u80fd\u7684\u4eba\u624d\u50a8\u5907\u77ed\u671f\u5185\u4e5f\u4e0d\u7528\u5728\u5927\u9762\u79ef\u4e70\u4eba\u4e86\uff0c\u627e\u4e2a\u597d\u6559\u7ec3\u591a\u591a\u6253\u78e8\u5427\uff0c\u672a\u6765\u53ef\u671f\u3002", "up": 20}]};
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
