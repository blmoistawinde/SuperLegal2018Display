var data = {"person_name": "\u9ec4\u535a\u6587", "nicknames": "\u9ec4\u535a\u6587", "aspects": {"\u9632\u5b88": 0.5728841934256409, "\u7403\u5458": 0.4749031494731983, "\u7403\u8ff7": 0.6001136142994468, "\u8fdb\u7403": 0.4674339839400152, "\u4f20\u7403": 0.7240236982108933, "\u6bd4\u8d5b": 0.5238014546825449, "\u8fdb\u653b": 0.42088757655188036, "\u540e\u8170": 0.6495819485813163, "\u66ff\u8865": 0.5160827932532526, "\u5916\u63f4": 0.48344480679678503}, "overall_heat": 267.0, "overall_polar": -0.027, "name": "14", "nationality": "\u4e2d\u56fd", "position": "\u4e2d\u573a", "goal": "2", "assist": "2", "team_name": "\u5e7f\u5dde\u6052\u5927\u6dd8\u5b9d", "name_en": "Huang Bowen", "age": "31", "height": "177", "weight": "65"};
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
var topic_keywords = {"0": [{"name": "\u9ec4\u535a\u6587", "value": 0.06586491399804223}, {"name": "\uff01", "value": 0.021115927842259824}, {"name": "\uff1f", "value": 0.018319116207523422}, {"name": "\u72b6\u6001", "value": 0.012725492938050621}, {"name": "\u4f20\u7403", "value": 0.008530275485946022}, {"name": "\u77e5\u9053", "value": 0.007131869668577821}, {"name": "\u73b0\u5728", "value": 0.007131869668577821}, {"name": "\u7b11", "value": 0.007131869668577821}, {"name": "\u54ed", "value": 0.00573346385120962}, {"name": "sb", "value": 0.00573346385120962}, {"name": "\u6362", "value": 0.00573346385120962}, {"name": "\u5854\u5229\u65af\u5361", "value": 0.00573346385120962}, {"name": "\u5f90\u65b0", "value": 0.00573346385120962}, {"name": "\u901f\u5ea6", "value": 0.004335058033841421}, {"name": "\u4e0a\u6e2f", "value": 0.004335058033841421}, {"name": "\u6362\u4e0a", "value": 0.004335058033841421}, {"name": "\u8f6e", "value": 0.004335058033841421}, {"name": "\u540e\u8170", "value": 0.004335058033841421}, {"name": "\u518d", "value": 0.004335058033841421}, {"name": "\u666e\u53ca", "value": 0.004335058033841421}, {"name": "\u6700\u540e", "value": 0.004335058033841421}, {"name": "\u672c\u573a", "value": 0.004335058033841421}, {"name": "\u4e24\u573a", "value": 0.004335058033841421}, {"name": "\u4e0d\u5c0f", "value": 0.004335058033841421}, {"name": "\u90d1\u667a", "value": 0.004335058033841421}, {"name": "\u88c1\u5224", "value": 0.004335058033841421}, {"name": "\u963f\u5170", "value": 0.004335058033841421}, {"name": "\u9ec4\u724c", "value": 0.004335058033841421}, {"name": "\u4e00\u4f20", "value": 0.004335058033841421}, {"name": "\u4eca\u5929", "value": 0.004335058033841421}], "1": [{"name": "\u9ec4\u535a\u6587", "value": 0.05063005284314168}, {"name": "\u6052\u5927", "value": 0.02398265660990922}, {"name": "\uff01", "value": 0.02398265660990922}, {"name": "\u90d1\u667a", "value": 0.01269138701955648}, {"name": "\u8e22", "value": 0.010433133101485931}, {"name": "\u4eca\u5929", "value": 0.010433133101485931}, {"name": "\u4e8e\u6c49\u8d85", "value": 0.009529831534257713}, {"name": "\u592a", "value": 0.009529831534257713}, {"name": "\u4e0a\u6e2f", "value": 0.009078180750643603}, {"name": "\u8868\u73b0", "value": 0.008626529967029494}, {"name": "\u9632\u5b88", "value": 0.007723228399801275}, {"name": "\u4e2d\u573a", "value": 0.007271577616187165}, {"name": "\u6253", "value": 0.007271577616187165}, {"name": "\u5dee", "value": 0.006819926832573054}, {"name": "\u597d", "value": 0.006819926832573054}, {"name": "\u8fdb\u653b", "value": 0.006819926832573054}, {"name": "\uff1f", "value": 0.006819926832573054}, {"name": "\u7403", "value": 0.006368276048958945}, {"name": "\u7403\u5458", "value": 0.006368276048958945}, {"name": "\u771f\u7684", "value": 0.0059166252653448355}, {"name": "\u90dc\u6797", "value": 0.0059166252653448355}, {"name": "\u4e0d\u884c", "value": 0.005464974481730726}, {"name": "\u4e00\u4e2a", "value": 0.005464974481730726}, {"name": "\u5e94\u8be5", "value": 0.005013323698116617}, {"name": "\u5931\u8bef", "value": 0.005013323698116617}, {"name": "\u72b6\u6001", "value": 0.005013323698116617}, {"name": "\u7533\u82b1", "value": 0.004561672914502507}, {"name": "\u6709\u70b9", "value": 0.004561672914502507}, {"name": "\u4e0d\u9519", "value": 0.004561672914502507}, {"name": "\u5361\u7eb3\u74e6\u7f57", "value": 0.004561672914502507}], "2": [{"name": "\u9ec4\u535a\u6587", "value": 0.05133785686851876}, {"name": "\u56fd\u5b89", "value": 0.028293432339009092}, {"name": "\uff01", "value": 0.021892203303034184}, {"name": "\u7403\u8ff7", "value": 0.01933171168864422}, {"name": "\u6052\u5927", "value": 0.01933171168864422}, {"name": "\u9a82", "value": 0.010369991038279349}, {"name": "\u4eba", "value": 0.009089745231084367}, {"name": "\u5f53\u5e74", "value": 0.009089745231084367}, {"name": "\u8e22", "value": 0.007809499423889386}, {"name": "\uff1f", "value": 0.007809499423889386}, {"name": "\u60f3", "value": 0.006529253616694404}, {"name": "\u88c1\u5224", "value": 0.006529253616694404}, {"name": "\u97e9\u56fd", "value": 0.006529253616694404}, {"name": "\u4e00\u4e2a", "value": 0.005249007809499423}, {"name": "\u8fd9\u4ef6", "value": 0.005249007809499423}, {"name": "\u5de5\u4f53", "value": 0.005249007809499423}, {"name": "\u77e5\u9053", "value": 0.005249007809499423}, {"name": "\u90d1\u9f99", "value": 0.005249007809499423}, {"name": "\u56de\u56fd", "value": 0.005249007809499423}, {"name": "\u6253", "value": 0.005249007809499423}, {"name": "\u5f53\u65f6", "value": 0.005249007809499423}, {"name": "\u5168\u573a", "value": 0.005249007809499423}, {"name": "\u786e\u5b9e", "value": 0.003968762002304442}, {"name": "\u4e16\u754c\u676f", "value": 0.003968762002304442}, {"name": "\u5a92\u4f53", "value": 0.003968762002304442}, {"name": "\u597d", "value": 0.003968762002304442}, {"name": "\u56de", "value": 0.003968762002304442}, {"name": "\u6700\u540e", "value": 0.003968762002304442}, {"name": "\u8bb8\u591a", "value": 0.003968762002304442}, {"name": "\u6362", "value": 0.003968762002304442}], "3": [{"name": "\u9ec4\u535a\u6587", "value": 0.054774600096946194}, {"name": "\u90d1\u667a", "value": 0.02153590471573991}, {"name": "\u6052\u5927", "value": 0.020150959074856315}, {"name": "\u5c81", "value": 0.015996122152205527}, {"name": "\u90dc\u6797", "value": 0.012533758049996539}, {"name": "\uff01", "value": 0.012533758049996539}, {"name": "\u4e2d\u573a", "value": 0.009763866768229348}, {"name": "\u51af\u6f47\u9706", "value": 0.00907139394778755}, {"name": "\u4e00\u4e2a", "value": 0.008378921127345751}, {"name": "\u9ad8\u62c9\u7279", "value": 0.008378921127345751}, {"name": "\u771f\u7684", "value": 0.007686448306903954}, {"name": "\u597d", "value": 0.0069939754864621565}, {"name": "\u53e4", "value": 0.0069939754864621565}, {"name": "\u8fdb\u7403", "value": 0.0069939754864621565}, {"name": "\u5fb7\u5229", "value": 0.0069939754864621565}, {"name": "\u674e\u5b66\u9e4f", "value": 0.006301502666020359}, {"name": "\u8e22", "value": 0.006301502666020359}, {"name": "\u963f\u5170", "value": 0.006301502666020359}, {"name": "\u5f20\u7433\u8283", "value": 0.006301502666020359}, {"name": "\u8d70", "value": 0.005609029845578561}, {"name": "\u4fdd\u5229\u5c3c\u5965", "value": 0.005609029845578561}, {"name": "\u73b0\u5728", "value": 0.0049165570251367635}, {"name": "\u5f90\u65b0", "value": 0.0049165570251367635}, {"name": "\u8fd9\u573a", "value": 0.0049165570251367635}, {"name": "\u72b6\u6001", "value": 0.0049165570251367635}, {"name": "\u611f\u89c9", "value": 0.004224084204694965}, {"name": "\u5ed6\u529b\u751f", "value": 0.004224084204694965}, {"name": "\u4f5c\u7528", "value": 0.004224084204694965}, {"name": "\u91d1\u82f1\u6743", "value": 0.004224084204694965}, {"name": "\u7403", "value": 0.004224084204694965}], "4": [{"name": "\u6052\u5927", "value": 0.023632426325204785}, {"name": "\u9ec4\u535a\u6587", "value": 0.016100178890876567}, {"name": "\uff01", "value": 0.01139252424442143}, {"name": "\u90d1\u667a", "value": 0.01139252424442143}, {"name": "\u9c81\u80fd", "value": 0.009509462385839376}, {"name": "\uff1f", "value": 0.008567931456548349}, {"name": "\u73b0\u5728", "value": 0.008567931456548349}, {"name": "\u51a0\u519b", "value": 0.0076264005272573205}, {"name": "\u4e00\u4e2a", "value": 0.0076264005272573205}, {"name": "\u7403\u5458", "value": 0.006684869597966293}, {"name": "\u5361\u7eb3\u74e6\u7f57", "value": 0.005743338668675266}, {"name": "\u4e9a\u51a0", "value": 0.005743338668675266}, {"name": "\u786e\u5b9e", "value": 0.005743338668675266}, {"name": "\u8d5b\u5b63", "value": 0.004801807739384239}, {"name": "\u4e2d\u8d85", "value": 0.004801807739384239}, {"name": "\u4e2d\u56fd", "value": 0.004801807739384239}, {"name": "\u4e89\u51a0", "value": 0.004801807739384239}, {"name": "\u51af\u6f47\u9706", "value": 0.004801807739384239}, {"name": "\u771f\u7684", "value": 0.004801807739384239}, {"name": "\u9635\u5bb9", "value": 0.004801807739384239}, {"name": "\u8e22", "value": 0.004801807739384239}, {"name": "\u5f20\u7433\u8283", "value": 0.004801807739384239}, {"name": "\u4eca\u5e74", "value": 0.0038602768100932114}, {"name": "\u5ed6\u529b\u751f", "value": 0.0038602768100932114}, {"name": "\u4e2d", "value": 0.0038602768100932114}, {"name": "\u90d1\u9f99", "value": 0.0038602768100932114}, {"name": "\u90dc\u6797", "value": 0.0038602768100932114}, {"name": "\u4e2d\u573a", "value": 0.0038602768100932114}, {"name": "\u5df2\u7ecf", "value": 0.0038602768100932114}, {"name": "\u8054\u8d5b", "value": 0.0038602768100932114}]};
var topic_summary = {"0": [{"content": "\u9ec4\u535a\u6587\u662f\u672c\u573a\u672b\u4f4d\u6dd8\u6c70[\u8870]", "up": 187}, {"content": "\u9ec4\u535a\u6587\u662f\u81ea\u613f\u7533\u8bf7\u4e0b\u8f6e\u505c\u8d5b\u7684[\u7b11\u54ed][\u7b11\u54ed]", "up": 23}, {"content": "\u9ec4\u535a\u6587\u662f\u8d25\u7b14", "up": 11}, {"content": "\u9ec4\u535a\u6587\u7684\u90a3\u8bb0\u52a9\u653b\u4f20\u7403\u50cf\u6781\u4e86\u5c0f\u7f57\uff01\u660e\u4eba\u4e0d\u8bf4\u6697\u8bdd\uff0c\u6211\u80af\u5b9a\u4f20\u4e0d\u51fa\u8fd9\u6837\u7684\u7403\u6765\uff01", "up": 11}, {"content": "\u9ec4\u535a\u6587\u7684\u90a3\u8bb0\u52a9\u653b\u4f20\u7403\u50cf\u6781\u4e86\u5c0f\u7f57\uff01\u660e\u4eba\u4e0d\u8bf4\u6697\u8bdd\uff0c\u6211\u80af\u5b9a\u4f20\u4e0d\u51fa\u8fd9\u6837\u7684\u7403\u6765\uff01", "up": 10}], "1": [{"content": "\u9ec4\u535a\u6587\u7684\u53d1\u6325\u582a\u79f0\u707e\u96be\u7ea7\uff01\uff01", "up": 961}, {"content": "\u9ec4\u535a\u6587\u5e9f\u4e86", "up": 239}, {"content": "\u51e0\u70b9\u770b\u6cd5\uff1a1.\u5361\u7eb3\u74e6\u7f57\u662f\u771f\u7684\u592a\u83dc 2.\u4e8e\u6c49\u8d85\u771f\u7684\u4e0d\u9002\u5408\u9996\u53d1\uff0c\u8ddf\u5916\u63f4\u51e0\u4e4e\u6253\u4e0d\u51fa\u914d\u5408 3.\u9ec4\u535a\u6587\u9000\u5316\u4e25\u91cd 4.\u8ddf\u5bf9\u9762\u989c\u9a8f\u51cc\u4e00\u6bd4\u8f83\uff0c\u66fe\u8bda\u5b9e\u5728\u592a\u5e73\u5eb8\uff0c\u51fa\u51fb\u4e0d\u679c\u65ad\uff0c\u5bf9\u65b9\u4e00\u5c04\u4e00\u4e2a\u51c6\u30025.\u8bf4\u591a\u5c11\u6b21\u4e86\uff0c\u6253\u4e0a\u6e2f\u5343\u4e07\u4e0d\u80fd\u4e0a\u5f205 6.\u90d1\u667a\u8fd8\u662f\u4e0d\u53ef\u66ff\u4ee3", "up": 193}, {"content": "\u4eca\u5929\u8bf4\u5b9e\u8bdd\uff0c\u6ca1\u6709\u5916\u63f4\u7684\u7533\u82b1\u8e22\u7684\u6bd4\u6052\u5927\u597d\uff0c\u9ec4\u535a\u6587\u56e0\u4e3a\u4f24\u75c5\u8e22\u7684\u592a\u5c11\uff0c\u9664\u4e86\u5c11\u6570\u4f20\u7403\uff0c\u51e0\u6b21\u4f4e\u7ea7\u5931\u8bef\u592a\u81f4\u547d\uff0c\u5218\u6bbf\u5ea7\u7b97\u518d\u6b21\u8bc1\u660e\u81ea\u5df1\uff0c\u6768\u7acb\u745c\u8fdb\u7403\u4e0d\u9519\uff0c\u4f46\u662f\u8131\u8863\u5e86\u795d\u662f\u4e0d\u662f\u6709\u70b9\u8fc7\u4e86\uff0c\u548c\u5176\u4ed6\u7403\u961fu23\u6bd4\uff0c\u4f60\u8fd8\u8981\u63d0\u5347\u592a\u591a\uff01", "up": 101}, {"content": "\u4e8e\u6c49\u8d85\u6253\u5230\u95e8\u67f1\u7684\u90a3\u4e2a\u7403\u5c31\u662f\u9ec4\u535a\u6587\u76f4\u585e\uff01\u4e0d\u8981\u78b0\u9ec4\u535a\u6587\u597d\u4e0d\u597d\uff1f\uff1f\u8c22\u8c22\u54af", "up": 11}], "2": [{"content": "\u73b0\u5df2\u4e3a\u5ba2\u961f\u4eba\u548c\u961f\u5458\u7684\u97e9\u9e4f\u8d5b\u540e\u7ed5\u9c81\u80fd\u4e3b\u573a\u4e00\u5468\uff0c\u5168\u573a\u9c81\u80fd\u7403\u8ff7\u9ad8\u547c\u4ed6\u7684\u540d\u5b57\uff0c\u6b22\u8fce\u4ed6\u56de\u5bb6\uff01\u8bb8\u591a\u7403\u8ff7\u6d41\u4e0b\u4e86\u70ed\u6cea\uff0c\u8fd9\u5c31\u662f\u91cd\u60c5\u91cd\u4e49\u7684\u5c71\u4e1c\u7403\u8ff7\uff01\uff08\u6b64\u60c5\u6b64\u666f\u8ba9\u6211\u60f3\u8d77\u6765\u5f53\u5e74\u9ec4\u535a\u6587\u968f\u5e7f\u5dde\u6052\u5927\u91cd\u8fd4\u5317\u4eac\u5de5\u4f53\u7684\u60c5\u5f62\uff0c\u8d5b\u540e\u9ec4\u535a\u6587\u4e5f\u60f3\u7ed5\u573a\u4e00\u5468\uff0c\u7ed3\u679c\u5de5\u4f53\u7403\u8ff7\u8ba9\u4ed6\u6d41\u4e0b\u4e86\u4f24\u5fc3\u7684\u6cea\u6c34\u2026\u2026\uff09\u3002", "up": 312}, {"content": "\u5f53\u5e74\u9a82\u9ec4\u535a\u6587\u751a\u81f3\u6709\u8fc7\u6fc0\u884c\u4e3a\u867d\u8bf4\u4e0d\u8be5,\u4f46\u662f\u6709\u539f\u56e0\u7684,\u9ec4\u535a\u6587\u6253\u5c0f\u513f\u662f\u56fd\u5b89\u9752\u8bad\u57f9\u517b\u51fa\u6765\u7684\u82d7\u5b50,\u6df1\u53d7\u7403\u8ff7\u7231\u6234,\u60f3\u53bb\u97e9\u56fd\u953b\u70bc\u53d1\u5c55\u56fd\u5b89\u5168\u529b\u652f\u6301,\u8bf4\u597d\u56de\u56fd\u4e00\u5b9a\u56de\u6bcd\u961f,\u7ed3\u679c\u4e0d\u4ec5\u4e0d\u56de\u8fd8\u52a0\u76df\u6b7b\u654c\u6052\u5927,\u7231\u4e4b\u6df1\u6068\u4e4b\u5207\u5b9e\u5728\u96be\u4ee5\u63a5\u53d7.\u5468\u633a\u4e3a\u56fd\u5b89\u4e0d\u9057\u4f59\u529b\u6253\u62fc\u8fd9\u4e48\u591a\u5e74,\u7528\u8fd9\u6837\u7684\u65b9\u5f0f\u56de\u5f52\u53c8\u600e\u80fd\u4e0d\u6b22\u8fce\u5462.", "up": 285}, {"content": "\u73b0\u573a\u5192\u96e8\u770b\u7684\uff0c\u670b\u53cb\u7ed9\u7684\u7968\u3002\u6211\u662f\u4e2d\u7acb\u7403\u8ff7\uff0c\u5e73\u65f6\u5f88\u5c11\u770b\u4e2d\u8d85\u3002\u5ba2\u89c2\u8bb2\u56fd\u5b89\u8fd9\u573a\u8e22\u7684\u786e\u5b9e\u62fc\uff0c\u6052\u5927\u80fd\u529b\u8fd8\u662f\u5f3a\uff0c\u4e0d\u8fc7\u9886\u5148\u4e24\u7403\u4e4b\u540e\u6709\u70b9\u677e\u61c8\u3002\u7403\u8ff7\u7684\u786e\u9a82\u5f97\u5f88\u96be\u542c\uff0c\u8fd8\u7279\u6574\u9f50\uff0c\u5c24\u5176\u6362\u9ec4\u535a\u6587\u65f6\uff0c\u5168\u573a\u4e00\u8d77\u9a82S 13\u6362S 13\uff0c\u5509\uff01\u786e\u5b9e\u9700\u8981\u8868\u626c\u4e00\u4e0b\u8fdc\u9053\u800c\u6765\u7684\u6052\u5927\u7403\u8ff7\uff0c\u5168\u573a\u53e3\u53f7\u7edf\u4e00\uff0c\u867d\u7136\u53ea\u67092\uff0c3\u767e\u4eba\uff0c\u4f46\u5f88\u56e2\u7ed3\uff0c\u4e00\u76f4\u5728\u5450\u558a\u52a9\u5a01\uff0c\u503c\u5f97\u5c0a\u656c\uff01", "up": 17}, {"content": "\u8bb8\u591a\u4eba\u90fd\u5728\u55b7\u6052\u5927\u8f93\u7403\uff0c\u6211\u53ea\u60f3\u55b7\u6d0b\u88c1\u5224\uff01\u4e00\u4e2a\u89c6\u9891\u88c1\u5224\uff0c\u5374\u4e0d\u7231\u770b\u89c6\u9891\uff0c\u4e0a\u534a\u573a\u6f0f\u5224\u6052\u5927\u4e00\u4e2a\u70b9\u7403\uff0c\u4e0b\u534a\u573a\u53c8\u778e\u5224\u4fdd\u5229\u5c3c\u5965\u7684\u7981\u533a\u72af\u89c4\uff0c\u76f2\u76ee\u81ea\u4fe1\uff0c\u6700\u540e\u53c8\u627e\u5e73\u8861\uff0c\u90d1\u9f99\u548c\u9ec4\u535a\u6587\u4e24\u4e2a\u6545\u610f\u72af\u89c4\u4e5f\u4e0d\u51fa\u724c\uff0c\u53c2\u52a0\u8fc7\u4e16\u754c\u676f\u5c31\u4e00\u5b9a\u662f\u597d\u88c1\u5224\u5417\uff1f\u60f3\u60f3\u97e9\u65e5\u4e16\u754c\u676f\uff0c\u53c2\u52a0\u8fc7\u4e16\u754c\u676f\u7684\u88c1\u5224\u8fd8\u6709\u88ab\u6293\u8d77\u6765\u7684\uff01", "up": 10}, {"content": "\u6700\u540e\u9636\u6bb5\u90d1\u9f99\u548c\u9ec4\u535a\u6587\u4fb5\u72af\u6d69\u514b\u7684\u4e24\u811a\u662f\u591a\u5927\u4ec7\u554a\uff01", "up": 6}], "3": [{"content": "\u9ec4\u535a\u6587\u8fd9\u72b6\u6001\u4e5f\u592a\u5dee\u4e86\u5427\uff0c\u672c\u6765\u6307\u671b\u4ed6\u63a5\u73ed\u90d1\u667a\u7684\uff0c\u5509", "up": 346}, {"content": "\u90d1\u667a38\u5c81\u3001\u51af\u6f47\u970633\u5c81\u3001\u90dc\u679732\u5c81\u3001\u66fe\u8bda31\u5c81\u3001\u9ec4\u535a\u658731\u5c81\u3001\u674e\u5b66\u9e4f30\u5c81\u3001\u5f20\u7433\u828329\u5c81\u3001\u9ad8\u62c9\u727927\u5c81\u3001\u963f\u517029\u5c81\u2026\u2026\uff0c\u9996\u5148\u652f\u6301\u5168\u534e\u73ed\uff0c\u5176\u6b21\u5e73\u574730\u5c81\u7684\u7403\u961f\u771f\u7684\u9700\u8981\u5168\u9762\u6362\u8840\u4e86\uff0c\u9ec4\u535a\u6587\u8e22\u4e86\u5341\u51e0\u5206\u949f\u5c31\u6ee1\u8eab\u5927\u6c57\uff0c\u51af\u6f47\u9706\u548c\u5f20\u7433\u8283\u53ea\u80fd\u7528\u72af\u89c4\u5f25\u8865\u901f\u5ea6\u7f3a\u9677\uff0c\u800c\u5728\u4e0b\u534a\u573a\u540e\u9636\u6bb5\u674e\u5b66\u9e4f\u4e5f\u57fa\u672c\u4e0a\u542f\u52a8\u4e0d\u8d77\u6765\uff0c\u4e8e\u6c49\u8d85\u57fa\u672c\u900f\u652f\u2026\u2026\u770b\u5f97\u60ca\u5fc3\u52a8\u9b44\uff0c\u5f88\u96be\u60f3\u50cf\u660e\u5e74\u4f1a\u600e\u4e48\u6837", "up": 329}, {"content": "\u9ec4\u535a\u6587\u7684\u4e2d\u573a\u68b3\u7406\uff0c\u5927\u90e8\u5206\u6a2a\u4f20\uff0c\u76f4\u585e\u5c11\uff0c\u5e94\u8be5\u4e45\u4e0d\u767b\u573a\uff0c\u5bfc\u81f4\u80fd\u529b\u9000\u5316", "up": 131}, {"content": "\u6768\u7acb\u745c\uff0c\u9ec4\u535a\u6587\u6700\u5dee\u3002\u5c11\u4e86\u5c0f\u5c06\u90d1\u667a\u591a\u4e2a\u5751\u3002", "up": 12}, {"content": "\u5854\u5229\u65af\u5854\u7684\u4e16\u754c\u535a\uff0c\u9ec4\u535a\u6587\u7684\u6311\u4f20\u90dc\u6797\u5f97\u5355\u5200\u8e22\u5f97\u662f\u771f\u597d\uff0c\u9ad8\u62c9\u7279\u72b6\u6001\u7ec8\u4e8e\u56de\u6696\uff0c\u9ad8\u62c9\u7279\u813e\u6c14\u771f\u662f\u597d\u9762\u5bf9\u987e\u64cd\u7684\u6311\u8845\u9e1f\u90fd\u4e0d\u9e1f\u4ed6\uff0c\u5e78\u4e8f\u6ca1\u4e0a\u5f53\u4e0d\u7136\u8981\u8d70\u963f\u5170\u7684\u8def\uff0c\u4e3a\u9ad8\u62c9\u7279\u8fd9\u70b9****\uff0c\u813e\u6c14\u5c31\u662f\u8981\u7528\u5728\u7403\u573a\u4e0a\u6765\u63cd\u5bf9\u65b9[\u6ed1\u7a3d][\u6ed1\u7a3d]\uff01", "up": 12}], "4": [{"content": "\u4ec5\u4e2a\u4eba\u89c2\u70b9\uff0c\u9c81\u80fd\uff1a\u4e2d\u524d\u573a\u6709\u84bf\u4fca\u95f5\u3001\u5434\u5174\u6db5\uff0c\u5218\u519b\u5e05\uff0c\u5c0f\u91d1\uff0c\u5854\u5c14\u5fb7\u5229\u3002 \u6052\u5927\uff1a\u90d1\u667a\uff0c\u4fdd\u5229\u5c3c\u5965\uff0c\u90dc\u6797\uff0c\u5854\u91cc\u65af\u5361\uff0c\u66ff\u8865\uff0c\u6c49\u8d85\uff0c\u9ec4\u535a\u6587\uff0c\u90d1\u9f99\u65e0\u8bba\u5b9e\u529b\u8fd8\u662f\u5de8\u661f\u6c14\u8d28\uff0c\u65e0\u8bba\u662f\u5728\u8054\u8d5b\u8fd8\u662f\u5728\u4e9a\u51a0\u8d5b\u573a\u6052\u5927\u7684\u4e2d\u524d\u957f\u53ef\u4ee5\u662f\u9876\u7ea7\u914d\u7f6e\uff08\u6ca1\u6709\u4e4b\u4e00\uff09\u4f46\u662f\u9c81\u80fd\u4eca\u5e74\u5df2\u7ecf\u6709\u5f88\u5927\u7684\u7a81\u7834\uff0c\u5c06\u58eb\u9f50\u5fc3\uff0c\u6709\u5929\u65f6\uff0c\u6709\u4eba\u548c\uff0c\u4e0d\u5f97\u4e0d\u63d0\u7684\u672c\u8d5b\u5b63\u6709\u4e00\u90e8\u5206\u8fd0\u6c14\u6210\u5206\uff0c\u76ee\u524d\u4ee5\u8fd9\u4e2a\u9635\u5bb9\u8e22\u6210\u8fd9\u6837\u5df2\u7ecf\u5f88\u5f3a\u5927\u4e86\u3001\u4e0e\u4e0a\u6e2f\u6bd4\uff0c\u5916\u63f4\u5dee\u8ddd\u5927\uff0c\u4e0e\u5317\u4eac\u6bd4\u6574\u4f53\u53d1\u6325\u7684\u786e\u6b20\u7f3a\u4e00\u70b9\uff0c\u4f46\u662f\u8981\u662f\u4e89\u51a0\u7684\u8bdd\u5c31\u662f\u6709\u4e9b\u8de8\u6d77\u53e3\u4e86\uff0c\u771f\u4e0d\u5207\u5b9e\u9645\u3002\u6052\u5927\u76ee\u524d\u6218\u7ee9\u6392\u540d\u786e\u5b9e\u662f\u4e0a\u534a\u8d5b\u7a0b\u81ea\u5df1\u9635\u5bb9\u786e\u5b9e\u6bd4\u5f80\u5e74\u5f31\u4e86\uff0c\u7edf\u6cbb\u529b\u4e0b\u964d\u4e24\u4e2a\u5c42\u9762\uff0c\u8981\u662f\u6052\u5927\u4ee5\u73b0\u5728\u9635\u5bb9\u4ece\u8d5b\u5b63\u521d\u671f\u5f00\u59cb\uff0c\u90a3\u5176\u4ed6\u7403\u961f20\u8f6e\u4ee5\u540e\u5c31\u5f97\u8003\u8651\uff0c\u4e9a\u519b\u4ee5\u53ca\u4e9a\u51a0\u8d44\u683c\u8d5b\u4e86\uff0c\u671f\u5f85\u4eca\u5e74\u7ade\u4e89\u6fc0\u70c8\uff0c\u771f\u5fc3\u5e0c\u671b\u6052\u5927\u8fd8\u662f\u51a0\u519b\ud83c\udfc6\u4ee3\u8868\u7956\u56fd\u518d\u6b21\u51fa\u73b0\u5728\u4e16\u4ff1\u676f\u821e\u53f0\u4e0a^_^^_^(7\u5e74\u9c81\u80fd\u7403\u8ff7\uff0c8\u5e74\u7684\u6052\u5927\u8ff7\u7559\uff01)", "up": 18}, {"content": "\u4eca\u5929\u7684\u97e9\u56fd\u88c1\u5224\u54e8\u5b50\u5f88\u677e\uff0c\u5728\u5e7f\u5dde\u5854\u7b2c\u4e8c\u4e2a\u8fdb\u7403\u4e4b\u524d\uff0c\u5f88\u591a\u9c81\u80fd\u7684\u72af\u89c4\u90fd\u6ca1\u5439\u300242\u5206\u949f\u5e7f\u5dde\u5854\u7684\u8fdb\u7403\u524d\uff0c\u674e\u5b66\u9e4f\u786e\u5b9e\u662f\u624b\u90e8\u6709\u52a8\u4f5c\u4e86\uff0c\u8fd9\u4e5f\u662f\u4e2d\u56fd\u7403\u5458\u7684\u6bdb\u75c5\u3002\u5728\u90a3\u4e4b\u524d\uff0c\u9c81\u80fd\u7684\u5f88\u591a\u72af\u89c4\u751a\u81f3\u8be5\u62ff\u724c\u7684\u90fd\u6ca1\u4e8b\u3002\u88c1\u5224\u770bVAR\u65f6\uff0c\u611f\u89c9\u8981\u5224\u6052\u5927\u72af\u89c4\uff0c\u8fdb\u7403\u8db3\u7403\uff0c\u4f46\u7ed3\u679c\u663e\u793a\u8fdb\u7403\u6709\u6548\uff0c\u771f\u7684\u6709\u70b9\u610f\u5916\u3002\u5168\u573a\u6bd4\u8d5b\uff0c\u9664\u4e86\u90a3\u4e2a\u63d2\u66f2\uff0c\u5176\u4ed6\u65f6\u95f4\uff0c\u6052\u5927\u7684\u6280\u6218\u672f\uff0c\u7279\u522b\u662f\u5b9d\u5854\u4e24\u4eba\u7684\u53d1\u6325\u771f\u7684\u6ca1\u5f97\u8bf4\u3002\u9c81\u80fd\u7684\u4f69\u83b1\u505c\u7403\u505a\u7403\u4e5f\u4e0d\u9519\uff0c\u4e0d\u8fc7\u6ca1\u4e2d\u573a\u7684\u6709\u6548\u8f93\u9001\uff0c\u673a\u4f1a\u4e0d\u591a\uff0c\u80fd\u8fdb\u7684\u90a3\u7403\u662f\u610f\u5927\u5229\u524d\u950b\u7684\u6807\u5fd7\u6027\u80fd\u529b\u4f53\u73b0\u3002\u90d1\u667a\u4e0b\u573a\u505c\u8d5b\uff0c\u9ec4\u535a\u6587\u53ef\u4ee5\u9876\u4e0a\uff0c\u6709\u5df4\u897f\u4e09\u53c9\u621f\u5728\uff0c\u4f30\u8ba1\u95ee\u9898\u4e0d\u5927\u3002\u4f46\u66ff\u8865\u5e2d\u7684\u5ed6\u529b\u751f\uff0c\u90d1\u9f99\u7b49\u6d41\u4f30\u8ba1\u51c9\u4e86\uff0c\u7279\u522b\u662f\u963f\u5170\uff0c\u73b0\u5728\u8fd9\u60c5\u51b5\u4e0b\uff0c\u53ea\u80fd\u5e72\u5750\u3002\u5e0c\u671b\u6052\u5927\u518d\u63a5\u518d\u5389\uff0c\u518d\u8d62\u4e09\u573a\uff0c\u4e89\u51a0\u683c\u5c40\u57fa\u672c\u660e\u6717\u4e86\u3002\u51a0\u519b\u7ec8\u5f52\u8fd9\u91cc[\u52a9\u5a01][\u52a9\u5a01]", "up": 14}, {"content": "\u4eca\u5e74\u8c01\u8fd8\u60f3\u7740\u6052\u5927\u4e89\u51a0\u90a3\u5c31\u662f\u81ea\u5df1\u7ed9\u81ea\u5df1\u627e\u5835\uff0c\u4e00\u56fd\u9876\u7ea7\u8054\u8d5b\u4e03\u8fde\u51a0\uff0c\u4e03\u5e74\u4e24\u593a\u6d32\u9645\u51a0\u519b\u4e24\u6b21\u4e16\u4ff1\u676f\u7b2c\u56db\uff0c\u591f\u4e86\uff0c\u4e00\u76f4\u6ca1\u6253\u51fa\u6765\u4ec0\u4e48\u65b0\u4eba\uff0c\u5fc5\u7136\u4f1a\u4ed8\u51fa\u4ee3\u4ef7\u7684\uff0c\u7403\u961f\u5e94\u8be5\u66f4\u52a1\u5b9e\u4eca\u5e74\u7ec3\u4eba\uff0c\u90d1\u667a\u51af\u6f47\u9706\u90dc\u6797\u9ec4\u535a\u6587\u8fd9\u4e9b\u5c31\u4e0d\u8981\u4e0a\u592a\u591a\u4e86\uff0c\u8054\u8d5b\u6768\u7acb\u745c\u5510\u8bd7\u51af\u535a\u8f69\u9093\u5b87\u5f6a\u5ed6\u529b\u751f\u5f90\u65b0\u9093\u6db5\u6587\u8fd9\u4e9b\u5168\u4e0a\uff0c\u4e9a\u51a0\u4e0a\u4e3b\u529b\u62fc\uff0c\u953b\u70bc\u65b0\u4eba\u73b0\u5728\u5bf9\u6052\u5927\u6765\u8bf4\u592a\u91cd\u8981\u4e86", "up": 13}, {"content": "\u91d1\u656c\u9053\u8981\u662f\u8fdb\u4e0d\u4e86\u56fd\u5bb6\u961f\u5c31\u6ca1\u5929\u7406\u4e86\u3002\u3002\u3002\u611f\u89c9\u73b0\u5728\u4e2d\u8d85\u56de\u5230\u4e03\u516b\u5e74\u524d\u4e86\uff0c\u90a3\u65f6\u5019\u9c81\u80fd \u56fd\u5b89 \u7533\u82b1 \u4e9a\u6cf0 \u6c5f\u82cf\u821c\u5929\u4e89\u51a0\uff0c\u90a3\u65f6\u5019\u5e7f\u5dde\u6052\u5927\u7684\u524d\u8eab\u5e7f\u5dde\u767d\u4e91\u836f\u4e1a\u8fd8\u662f\u4e2d\u7532\uff0c\u6cb3\u5357\u5efa\u4e1a\u8fd8\u8fdb\u5165\u4e9a\u51a0\uff0c\u90a3\u65f6\u5019\u8fd8\u6709\u9752\u5c9b\u4e2d\u80fd\uff0c\u73b0\u5728\u4e2d\u80fd\u597d\u50cf\u662f\u4e59\u7ea7\u4e86\u3002\u90a3\u65f6\u5019\u8d5b\u573a\u7684\u4e3b\u89d2\u8fd8\u662f\u672c\u571f\u7403\u5458\u3002\u540e\u6765\u6052\u5927\u63a5\u624b\u5e7f\u5dde\u767d\u4e91\uff0c\u75af\u72c2\u7838\u94b1\u5f15\u8fdb\u90d1\u667a \u5f20\u7433\u8283 \u66fe\u8bda \u9ec4\u535a\u6587 \u51af\u6f47\u9706 \u90dc\u6797 \u7a46\u91cc\u5947 \u57c3\u5c14\u514b\u68ee\uff0c\u4ece\u6b64\u4e2d\u8d85\u683c\u5c40\u5f7b\u5e95\u53d8\u5929\u4e00\u5bb6\u72ec\u5927\u3002\u89c2\u8d4f\u6027\u4e0a\u6765\u4e86\u4e9a\u51a0\u4e5f\u62ff\u4e86\uff0c\u7136\u540e\u672c\u571f\u7403\u5458\u6218\u7ee9\u8fd8\u662f\u767d\u65a9\u9e21\u3002\u4ee5\u524d\u56fd\u5bb6\u961f\u7403\u5458\u591a\u662f\u9c81\u80fd \u56fd\u5b89 \u821c\u5929\u7b49\u7403\u961f\u7684\uff0c\u540e\u6765\u57fa\u672c\u4e0a\u662f\u6052\u5927\u7684\u73ed\u5e95\u3002\u4e4b\u524d\u4e2d\u8d85\u7c7b\u4f3c\u82f1\u8d85 \u7fa4\u96c4\u4e89\u9738\uff0c\u540e\u6765\u6052\u5927\u65f6\u671f\u7c7b\u4f3c\u5fb7\u7532\uff0c\u57fa\u672c\u4e0a\u62dc\u4ec1\u538b\u5012\u6027\u4f18\u52bf\u3002\u968f\u7740\u6052\u5927\u7403\u5458\u73ed\u5e95\u8001\u5316\uff0c\u73b0\u5728\u4e2d\u8d85\u53c8\u597d\u770b\u4e86\uff01", "up": 11}, {"content": "\u539f\u6765\u6c5f\u6e56\u4e2d\u4f20\u95fb\u5df2\u4e45\u7684\u201c\u90d1\u667a\u63a5\u73ed\u4eba\u201d\u4e0d\u662f\u5434\u66e6\u3001\u84bf\u4fca\u95f5\u3001\u9ec4\u535a\u6587\uff0c\u4e5f\u4e0d\u662f\u5ed6\u529b\u751f\u3001\u5f90\u65b0\u7b49\uff0c\u800c\u662f\u4ed6\u2014\u2014\u4e2d\u56fd\u7684\u9b54\u7b1b\u5f20\u4fee\u7ef4\uff01", "up": 9}]};
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
